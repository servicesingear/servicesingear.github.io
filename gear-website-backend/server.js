const express = require('express');
const nodemailer = require('nodemailer');
const ExcelJS = require('exceljs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// ---------------- Mailjet SMTP Setup ---------------- //
// Replace these with your Mailjet free account credentials
const transporter = nodemailer.createTransport({
  host: 'in-v3.mailjet.com',
  port: 465,
  secure: true,
  auth: {
    user: '1177d13ed03ad0f64bf4af98d3054c7a',
    pass: '11ab576c4639101f276df08299ff15c6'
  }
});

// ---------------- Helper Functions ---------------- //
const storeInExcel = async (data, fileName, sheetName, columns) => {
  const filePath = path.join(__dirname, fileName);
  const workbook = new ExcelJS.Workbook();
  let worksheet;

  if (fs.existsSync(filePath)) {
    await workbook.xlsx.readFile(filePath);
    worksheet = workbook.getWorksheet(1);
  } else {
    worksheet = workbook.addWorksheet(sheetName);
    worksheet.columns = columns;
  }

  worksheet.addRow(data);
  await workbook.xlsx.writeFile(filePath);
};

// ---------------- Job Application ---------------- //
app.post('/apply-job', upload.single('resume'), async (req, res) => {
  const { name, email, phone, jobTitle, experience, skills, coverLetter } = req.body;
  const resumeFile = req.file;

  const applicationContent = `
    <h2>New Job Application</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Position:</strong> ${jobTitle}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Cover Letter:</strong><br/>${coverLetter.replace(/\n/g, '<br/>')}</p>
  `;

  const applicantMailOptions = {
    from: 'utils.gear@gmail.com',
    to: email,
    subject: `Application Received for ${jobTitle}`,
    html: `<p>Dear ${name},</p>
           <p>Thank you for applying for the <strong>${jobTitle}</strong> position.</p>
           <p>We will review your application and contact you soon.</p>
           <p>Best regards,<br/>HR Team</p>`
  };

  const companyMailOptions = {
    from: 'utils.gear@gmail.com',
    to: 'hr@servicesingear.com',
    subject: `New Job Application – ${name}`,
    html: applicationContent,
    attachments: resumeFile ? [{
      filename: resumeFile.originalname,
      path: resumeFile.path
    }] : []
  };

  try {
    await transporter.sendMail(applicantMailOptions);
    await transporter.sendMail(companyMailOptions);

    // Store in Excel
    await storeInExcel(
      { name, email, phone, jobTitle, experience, skills, coverLetter },
      'job_applications.xlsx',
      'Job Applications',
      [
        { header: 'Name', key: 'name' },
        { header: 'Email', key: 'email' },
        { header: 'Phone', key: 'phone' },
        { header: 'Position', key: 'jobTitle' },
        { header: 'Experience', key: 'experience' },
        { header: 'Skills', key: 'skills' },
        { header: 'Cover Letter', key: 'coverLetter' },
      ]
    );

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('Error sending emails:', err);
    res.status(500).json({ message: 'Application submission failed. Please try again later.' });
  }
});

// ---------------- Contact Form ---------------- //
app.post('/submit', async (req, res) => {
  const { name, workEmail, phone, position, company, query, description } = req.body;

  const mailToCompany = {
    from: 'utils.gear@gmail.com',
    to: 'support@servicesingear.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${workEmail}
      Phone: ${phone}
      Position: ${position}
      Company: ${company}
      Query: ${query}
      Description: ${description}
    `
  };

  const mailToUser = {
    from: 'utils.gear@gmail.com',
    to: workEmail,
    subject: 'Thank You for Contacting Us',
    text: `Dear ${name},\n\nThank you for reaching out. We have received your query and will respond shortly.\n\nRegards,\nServices In Gear Team`
  };

  try {
    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToUser);

    await storeInExcel(
      { name, workEmail, phone, position, company, query, description },
      'contact_submissions.xlsx',
      'Contact Submissions',
      [
        { header: 'Name', key: 'name' },
        { header: 'Email', key: 'workEmail' },
        { header: 'Phone', key: 'phone' },
        { header: 'Position', key: 'position' },
        { header: 'Company', key: 'company' },
        { header: 'Query', key: 'query' },
        { header: 'Description', key: 'description' }
      ]
    );

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Submission failed.' });
  }
});

// ---------------- Training Application ---------------- //
app.post('/apply-training', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Name, email, and phone are required.' });
  }

  const mailToCompany = {
    from: 'utils.gear@gmail.com',
    to: 'training@servicesingear.com',
    subject: `New Training Application from ${name}`,
    html: `<h2>New Training Application</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong><br/>${message || 'N/A'}</p>`
  };

  const mailToUser = {
    from: 'utils.gear@gmail.com',
    to: email,
    subject: 'Training Application Received',
    html: `<p>Dear ${name},</p>
           <p>Thank you for applying for our Python & Generative AI training program.</p>
           <p>We will contact you with further details soon.</p>
           <p>Best regards,<br/>Training Team</p>`
  };

  try {
    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToUser);

    await storeInExcel(
      { name, email, phone, message },
      'training_applications.xlsx',
      'Training Applications',
      [
        { header: 'Name', key: 'name' },
        { header: 'Email', key: 'email' },
        { header: 'Phone', key: 'phone' },
        { header: 'Message', key: 'message' }
      ]
    );

    res.status(200).json({ message: 'Training application submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error submitting training application.' });
  }
});

// ---------------- Start Server ---------------- //
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
