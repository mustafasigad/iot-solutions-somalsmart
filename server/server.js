const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
require('dotenv').config();

const app = express();

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

app.use(cors());
app.use(express.json());

const createEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .content { background: white; padding: 20px; border-radius: 5px; }
    .section { margin-bottom: 20px; }
    .highlight { background: #f8f9fa; padding: 15px; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0; color: #2563eb;">New Consultation Request</h2>
    </div>
    <div class="content">
      ${data.date ? `
        <div class="section">
          <h3>Consultation Details</h3>
          <p><strong>Requested Date:</strong> ${data.date}</p>
          <p><strong>Requested Time:</strong> ${data.time}</p>
          <p><strong>Service:</strong> ${data.selectedService}</p>
        </div>
      ` : ''}
      
      <div class="section">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      </div>
      
      <div class="section">
        <h3>Requirements:</h3>
        <div class="highlight">
          ${data.requirements}
        </div>
      </div>
      
      ${data.hasAttachment ? '<p><em>* Document attached to this email</em></p>' : ''}
    </div>
  </div>
</body>
</html>
`;

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD
  }
});

app.post('/api/contact', upload.single('attachment'), async (req, res) => {
  try {
    console.log('Received request body:', req.body); // Debug log
    
    const { 
      name, 
      email, 
      phone, 
      date, 
      time, 
      selectedService, 
      requirements, 
      to 
    } = req.body;

    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: to,
      subject: date 
        ? `New Consultation Request from ${name} for ${selectedService}`
        : `New Contact Form Submission from ${name}`,
      html: createEmailTemplate({
        name,
        email,
        phone,
        date,
        time,
        selectedService,
        requirements,
        hasAttachment: !!req.file
      })
    };

    if (req.file) {
      mailOptions.attachments = [{
        filename: req.file.originalname,
        content: req.file.buffer
      }];
    }

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});