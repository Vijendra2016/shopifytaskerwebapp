import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, url,tasktitle, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  try {
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });
      
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `Shopify Tasker new task created for ${tasktitle}`,
      html: `<p>
      <strong>Name:</strong> ${name}</p><P><strong>Email:</strong> ${email}</p><p>
      <strong>Task /project Title:</strong> ${tasktitle}</p><P><strong>url:</strong> ${url}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thanks for submitting your task!',
        html: `
          <p>Hi ${name},</p>
          <p>Thanks for submitting your task. We’ve received your request and will get back to you within 5 hours.</p>
          <p>Here’s a summary of what you submitted:</p>
          <ul>
            <li><strong>Website:</strong> ${url || 'Not provided'}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p>We'll be in touch soon!</p>
          <p>— Your Team at ShopifyTasker</p>
        `,
      });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Email error:', error.message);
      return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Failed to send email', error: 'Unknown error' }, { status: 500 });
  }
}
