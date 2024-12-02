// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const requirements = formData.get('requirements');
    const attachment = formData.get('attachment');

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    let attachments = [];
    if (attachment) {
      const buffer = await attachment.arrayBuffer();
      const base64Content = Buffer.from(buffer).toString('base64');
      
      attachments.push({
        content: base64Content,
        filename: attachment.name,
        type: attachment.type,
        disposition: 'attachment'
      });
    }

    const msg = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: 'New Contact Form Submission - HiilCore',
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Requirements: ${requirements}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Requirements:</strong><br>${requirements.replace(/\n/g, '<br>')}</p>
      `,
      attachments
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}