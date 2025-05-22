const express = require('express');
const nodemailer = require('nodemailer');
const ExcelJS = require('exceljs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Configure the email transporter (using Gmail in this example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sivapriyaadda@gmail.com',  // Your email address
    pass: 'vkuh cqww ofjc dqox'      // Your email app password (create an app password in Google if using Gmail)
  }
});

app.post('/apply-job', upload.single('resume'), async (req, res) => {
  const { name, email, phone, jobTitle, experience, skills, coverLetter } = req.body;
  const resumeFile = req.file;

  // Professional Email content for company
  const applicationContent = `
    <h2>New Job Application Received</h2>
    <p><strong>Applicant Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Position Applied For:</strong> ${jobTitle}</p>
    <p><strong>Years of Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Cover Letter:</strong><br/>${coverLetter.replace(/\n/g, '<br/>')}</p>
  `;

  // Professional email to applicant (Confirmation)
  const applicantMailOptions = {
    from: 'hr@servicesingear.com',
    to: email,
    subject: `Application Received for ${jobTitle} Position`,
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for submitting your application for the <strong>${jobTitle}</strong> position with our company.</p>
      <p>We appreciate your interest and the time you have invested in your application. Our recruitment team will carefully review your qualifications and experience.</p>
      <p>If your profile matches our requirements, we will contact you to discuss the next steps.</p>
      <p>Thank you once again for considering a career with us.</p>
      <p>Best regards,<br/>The Recruitment Team</p>
    `
  };

  // Email to the company (with resume attachment)
  const companyMailOptions = {
    from: 'sivapriyaadda@gmail.com',
    to: 'hr@servicesingear.com',
    subject: `New Application for ${jobTitle} – ${name}`,
    html: applicationContent,
    attachments: resumeFile ? [{
      filename: resumeFile.originalname,
      path: resumeFile.path
    }] : []
  };

  try {
    await transporter.sendMail(applicantMailOptions);
    console.log('Confirmation email sent to applicant');

    await transporter.sendMail(companyMailOptions);
    console.log('Notification email sent to company');

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('Error sending emails:', err);
    res.status(500).json({ message: 'Application submission failed. Please try again later.' });
  }
});


app.post('/submit', async (req, res) => {
  const { name, workEmail, phone, position, company, query, description } = req.body;

  // Email content for the company
  const mailOptionsToCompany = {
    from: 'sivapriyaadda@gmail.com',
    to: 'support@servicesingear.com',  // Company's email
    subject: 'New Contact Form Submission',
    text: `
      You have received a new contact form submission.

      Name: ${name}
      Work Email: ${workEmail}
      Phone: ${phone}
      Position: ${position}
      Company: ${company}
      Query: ${query}
      Description: ${description}
    `
  };

  // Email content for the user (confirmation)
  const mailOptionsToUser = {
    from: 'support@servicesingear.com',
    to: workEmail,  // User's work email
    subject: 'Thank You for Contacting Us!',
    text: `
      Dear ${name},

      Thank you for reaching out to us. We have received your query and will get back to you soon.

      Your submission details:
      Phone: ${phone}
      Position: ${position}
      Company: ${company}
      Query: ${query}
      Description: ${description}

      Best regards,
      Services In Gear Team
    `
  };

  try {
    // Send email to the company
    await transporter.sendMail(mailOptionsToCompany);

    // Send confirmation email to the user
    await transporter.sendMail(mailOptionsToUser);

    // Store the submission in Excel (make sure your storeInExcel function supports new fields)
    await storeInExcel({ name, workEmail, phone, position, company, query, description });

    res.status(200).json({ message: 'Form submitted successfully. Confirmation email sent.' });
  } catch (error) {
    console.error('Error while sending emails or storing data:', error);
    res.status(500).json({ message: 'An error occurred while submitting the form.' });
  }
});

// Function to store form data in Excel
const storeInExcel = async (data) => {
  const filePath = path.join(__dirname, 'submissions.xlsx');
  
  const workbook = new ExcelJS.Workbook();
  let worksheet;

  // Check if the Excel file exists, if not create it
  if (fs.existsSync(filePath)) {
    await workbook.xlsx.readFile(filePath);
    worksheet = workbook.getWorksheet(1);
  } else {
    worksheet = workbook.addWorksheet('Submissions');
    worksheet.columns = [
      { header: 'Name', key: 'name' },
      { header: 'Email', key: 'email' },
      { header: 'Phone', key: 'phone' },
      { header: 'Query', key: 'query' },
      { header: 'Description', key: 'description' },
    ];
  }

  // Add a new row to the sheet
  worksheet.addRow(data);

  // Write the data to the Excel file
  await workbook.xlsx.writeFile(filePath);
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
