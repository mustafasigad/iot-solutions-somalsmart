// Add this temporary route to test (remove after testing)
// src/app/api/test-email/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function GET() {
  try {
    const msg = {
      to: 'janodones@gmail.com',
      from: 'your-verified-sender@yourdomain.com',
      subject: 'SendGrid Test Email',
      text: 'This is a test email from SendGrid',
      html: '<strong>This is a test email from SendGrid</strong>',
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: 'Test email sent' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}