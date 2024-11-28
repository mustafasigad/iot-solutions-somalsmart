// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    
    const msg = {
      to: 'janodones@gmail.com', // Your email
      from: 'your-verified-sender@yourdomain.com', // The email you verified with SendGrid
      subject: 'New IoT Solutions Inquiry',
      text: `
New inquiry from: ${body.name}
Email: ${body.email}
Phone: ${body.phone}

Requirements:
${body.requirements}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">New IoT Solutions Inquiry</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Requirements:</strong></p>
          <p style="white-space: pre-line;">${body.requirements}</p>
        </div>
      `
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}