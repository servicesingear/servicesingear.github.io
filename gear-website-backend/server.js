const express = require('express');
const Mailjet = require('node-mailjet');
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

// ---------------- Mailjet API Setup ---------------- //
const mailjet = Mailjet.apiConnect(
  '1177d13ed03ad0f64bf4af98d3054c7a', // ✅ Your Mailjet API Key
  '11ab576c4639101f276df08299ff15c6'  // ✅ Your Mailjet Secret Key
);

// ---------------- Helper Function: Store in Excel ---------------- //
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

  const applicationHTML = `
    <h2>New Job Application</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Position:</strong> ${jobTitle}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Cover Letter:</strong><br/>${coverLetter.replace(/\n/g, '<br/>')}</p>
  `;

  try {
    // Send email to company
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: "utils.gear@gmail.com", Name: "Services In Gear" },
          To: [{ Email: "hr@servicesingear.com", Name: "HR Team" }],
          Subject: `New Job Application - ${name}`,
          HTMLPart: applicationHTML,
        },
      ],
    });

    // Send confirmation to applicant
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: "utils.gear@gmail.com", Name: "Services In Gear" },
          To: [{ Email: email, Name: name }],
          Subject: `Application Received for ${jobTitle}`,
          HTMLPart: `
            <p>Dear ${name},</p>
            <p>Thank you for applying for the <strong>${jobTitle}</strong> position.</p>
            <p>We’ll review your application and contact you soon.</p>
            <p>Best regards,<br/>HR Team</p>
          `,
        },
      ],
    });

    // Save to Excel
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
    console.error('❌ Error sending job emails:', err);
    res.status(500).json({ message: 'Error submitting job application.' });
  }
});

// ---------------- Contact Form ---------------- //
app.post('/submit', async (req, res) => {
  const { name, workEmail, phone, position, company, query, description } = req.body;

  try {
    // Send to company
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: "utils.gear@gmail.com", Name: "Services In Gear" },
          To: [{ Email: "support@servicesingear.com", Name: "Support Team" }],
          Subject: "New Contact Form Submission",
          HTMLPart: `
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${workEmail}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Query:</strong> ${query}</p>
            <p><strong>Description:</strong><br/>${description}</p>
          `,
        },
      ],
    });

    // Confirmation to user
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: "utils.gear@gmail.com", Name: "Services In Gear" },
          To: [{ Email: workEmail, Name: name }],
          Subject: "Thank You for Contacting Us",
          HTMLPart: `
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Services In Gear.</p>
            <p>We have received your query and will get back to you soon.</p>
            <p>Best regards,<br/>Support Team</p>
          `,
        },
      ],
    });

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
        { header: 'Description', key: 'description' },
      ]
    );

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('❌ Error sending contact form emails:', err);
    res.status(500).json({ message: 'Error submitting contact form.' });
  }
});

// ---------------- Training Application ---------------- //
app.post('/apply-training', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Name, email, and phone are required.' });
  }

  try {
    // Send to company
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: "utils.gear@gmail.com", Name: "Services In Gear" },
          To: [{ Email: "training@servicesingear.com", Name: "Training Team" }],
          Subject: `New Training Application from ${name}`,
          HTMLPart: `
            <h2>New Training Application</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong><br/>${message || 'N/A'}</p>
          `,
        },
      ],
    });

    // Confirmation to applicant
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: "utils.gear@gmail.com", Name: "Services In Gear" },
          To: [{ Email: email, Name: name }],
          Subject: "Training Application Received",
          HTMLPart: `
            <p>Dear ${name},</p>
            <p>Thank you for applying for our <strong>Python & Generative AI Training Program</strong>.</p>
            <p>We will get in touch with you soon.</p>
            <p>Best regards,<br/>Training Team</p>
          `,
        },
      ],
    });

    // Save to Excel
    await storeInExcel(
      { name, email, phone, message },
      'training_applications.xlsx',
      'Training Applications',
      [
        { header: 'Name', key: 'name' },
        { header: 'Email', key: 'email' },
        { header: 'Phone', key: 'phone' },
        { header: 'Message', key: 'message' },
      ]
    );

    res.status(200).json({ message: 'Training application submitted successfully!' });
  } catch (err) {
    console.error('❌ Error sending training emails:', err);
    res.status(500).json({ message: 'Error submitting training application.' });
  }
});

// ---------------- Start Server ---------------- //
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
