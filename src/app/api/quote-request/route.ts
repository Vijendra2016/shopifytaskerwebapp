// app/api/quote-request/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, storeUrl, serviceType, details, budget } = body;

  if (!name || !email || !serviceType || !details) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
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
      
    // Email to you with the quote request details
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `Impulse Theme Quote Request - ${serviceType}`,
      html: `
        <h2>New Quote Request for ${serviceType}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Store URL:</strong> ${storeUrl || 'Not provided'}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Project Details:</strong><br/>${details}</p>
      `,
    });

    // Confirmation email to the customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thanks for your Impulse Theme quote request!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #fafafa;">
          <h2 style="color: #2c3e50;">Hi ${name},</h2>
          
          <p style="font-size: 16px; color: #333;">
            Thank you for requesting a quote for your Impulse theme project. We've received your request and a Shopify expert will get back to you within <strong>24 hours</strong> with pricing details and next steps.
          </p>
          
          <p style="font-size: 16px; color: #333;">Here's a summary of your quote request:</p>
          
          <ul style="font-size: 16px; color: #333; padding-left: 20px;">
            <li><strong>Service:</strong> ${serviceType}</li>
            <li><strong>Store URL:</strong> ${storeUrl || 'Not provided'}</li>
            <li><strong>Budget Range:</strong> ${budget || 'Not specified'}</li>
            <li><strong>Project Details:</strong> ${details}</li>
          </ul>
          
          <p style="font-size: 16px; color: #333;">If you need to make any changes to your request or have any questions while you wait, please reply to this email directly.</p>
          
          <p style="font-size: 16px; color: #2c3e50; margin-top: 30px;">
            — The team at <strong>ShopifyTasker</strong>
          </p>
        </div>
      `,
    });
    
    return NextResponse.json({ message: 'Quote request submitted successfully' }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Email error:', error.message);
      return NextResponse.json({ message: 'Failed to send quote request', error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Failed to send quote request', error: 'Unknown error' }, { status: 500 });
  }
}