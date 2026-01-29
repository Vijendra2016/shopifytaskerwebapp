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
    // ✅ Zoho SMTP (recommended ports: 465 SSL or 587 STARTTLS)
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.eu',
      port: Number(process.env.ZOHO_SMTP_PORT || 465),
      secure: (process.env.ZOHO_SMTP_PORT || '465') === '465', // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_EMAIL_USER, // sales@shopifytasker.com
        pass: process.env.ZOHO_EMAIL_PASS, // Zoho app password (recommended)
      },
    });

    // (optional but helpful)
    await transporter.verify();

    // ✅ Email to you (internal notification)
    await transporter.sendMail({
      // IMPORTANT: "from" should be your Zoho mailbox to avoid spam/rejection.
      // Use replyTo so you can reply to the customer's address.
      from: `Shopify Tasker <${process.env.ZOHO_EMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.ZOHO_INBOX_TO || process.env.ZOHO_EMAIL_USER, // where you want to receive
      subject: `Shopify Tasker new task created for ${tasktitle}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Task type:</strong> ${taskselect}</p>
             <p><strong>Task /project Title:</strong> ${tasktitle}</p>
             <p><strong>url:</strong> ${url}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    // ✅ Auto-reply to customer
    await transporter.sendMail({
      from: `Shopify Tasker <${process.env.ZOHO_EMAIL_USER}>`,
      to: email,
      subject: 'ShopifyTasker: Your task is in review',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;">

  <!-- Header -->
  <div style="background-color: #0d6efd; padding: 20px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 22px;">
      ShopifyTasker
    </h1>
    <p style="color: #e6f0ff; margin: 5px 0 0; font-size: 14px;">
      On-demand Shopify Development
    </p>
  </div>

  <!-- Body -->
  <div style="padding: 25px 22px;">

    <h2 style="color: #2c3e50; margin-top: 0;">Hi ${name}, 👋</h2>

    <p style="font-size: 15px; color: #333; line-height: 1.6;">
      Thanks for submitting your task on <strong>ShopifyTasker</strong>!  
      We’ve received your request successfully, and our team is reviewing it now.
      You can expect a response from us within a few hours.
    </p>

    <!-- Summary Box -->
    <div style="background-color: #f7f9fc; border: 1px solid #e1e6ef; border-radius: 8px; padding: 15px; margin: 18px 0;">
      <p style="margin: 0 0 8px; font-weight: bold; color: #2c3e50;">
        Your submitted details:
      </p>
      <p style="margin: 4px 0; font-size: 15px;">
        <strong>Website:</strong> ${url || 'Not provided'}
      </p>
      <p style="margin: 4px 0; font-size: 15px;">
        <strong>Message:</strong> ${message}
      </p>
    </div>

    <p style="font-size: 15px; color: #333; line-height: 1.6;">
      If you have any extra details or files, simply reply to this email — it helps us deliver faster.
    </p>

    <p style="font-size: 15px; color: #333;">
      We’re excited to work on your Shopify store 🚀
    </p>

    <!-- Signature -->
    <p style="margin-top: 22px; font-size: 15px; color: #2c3e50;">
      — Team <strong>ShopifyTasker</strong><br>
      <span style="font-size: 13px; color: #666;">
        On-demand Shopify Development<br>
        <a href="https://shopifytasker.com" style="color: #0d6efd; text-decoration: none;">
          shopifytasker.com
        </a>
      </span>
    </p>

  </div>
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
