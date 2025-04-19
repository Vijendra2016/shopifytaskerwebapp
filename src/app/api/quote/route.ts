import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, url, tasktitle, message, taskselect } = body;

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
      <strong>Name:</strong> ${name}</p><P><strong>Email:</strong> ${email}</p>
      <strong>Task type</strong> ${taskselect}</p><p>
      <strong>Task /project Title:</strong> ${tasktitle}</p><P><strong>url:</strong> ${url}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for submitting your task!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #fafafa;">
          <h2 style="color: #2c3e50;">Hi ${name},</h2>
          
          <p style="font-size: 16px; color: #333;">
            Thanks for submitting your task. We received your request and will get back to you within <strong>5 hours</strong>.
          </p>
          
          <p style="font-size: 16px; color: #333;">Here a summary of what you submitted:</p>
          
          <ul style="font-size: 16px; color: #333; padding-left: 20px;">
            <li><strong>Website:</strong> ${url || 'Not provided'}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          
          <p style="font-size: 16px; color: #333;">We'll be in touch soon!</p>
          
          <p style="font-size: 16px; color: #2c3e50; margin-top: 30px;">
            — Your Team at <strong>ShopifyTasker</strong>
          </p>
        </div>
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
