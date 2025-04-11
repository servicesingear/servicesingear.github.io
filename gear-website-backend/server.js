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

  // HTML Email content for company
  const applicationContent = `
    <h2>📥 New Job Application Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Experience:</strong> ${experience} years</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Cover Letter:</strong><br/>${coverLetter.replace(/\n/g, '<br/>')}</p>
  `;

  // Email to applicant (Confirmation)
  const applicantMailOptions = {
    from: 'utils.gear@gmail.com',
    to: email,
    subject: `Application Received – ${jobTitle}`,
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for applying for the <strong>${jobTitle}</strong> position at our company.</p>
      <p>We have received your application and will review your profile shortly. If your experience and skills match our needs, we will contact you for the next steps.</p>
      <p>Best regards,<br/>Recruitment Team</p>
    `
  };

  // Email to the company (with resume attachment)
  const companyMailOptions = {
    from: 'sivapriyaadda@gmail.com',
    to: 'utils.gear@gmail.com',
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

// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, phone, query, description } = req.body;

  // Prepare email data for the company
  const mailOptionsToCompany = {
    from: 'sivapriyaadda@gmail.com',
    to: 'utils.gear@gmail.com',  // Company's email
    subject: 'New Contact Form Submission',
    text: `You have received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}\nDescription: ${description}`
  };

  // Prepare email data for the user
  const mailOptionsToUser = {
    from: 'utils.gear@gmail.com',
    to: email,  // User's email
    subject: 'Thank You for Contacting Us!',
    text: `Dear ${name},\n\nThank you for reaching out to us. We have received your query and will get back to you soon.\n\nYour submission:\n\nPhone: ${phone}\nQuery: ${query}\nDescription: ${description}`
  };

  try {
    // Send email to the company
    await transporter.sendMail(mailOptionsToCompany);

    // Send email to the user
    await transporter.sendMail(mailOptionsToUser);

    // Store the submission in an Excel file
    await storeInExcel({ name, email, phone, query, description });

    // Respond with success message
    res.status(200).json({ message: 'Form submitted successfully. We have sent an email to you and the company.' });
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
