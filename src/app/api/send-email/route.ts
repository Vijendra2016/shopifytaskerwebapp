import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// ✅ Helpers to prevent broken HTML / injection + keep new lines
const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const nl2br = (s: string) => s.replace(/\r?\n/g, "<br/>");

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, url, tasktitle, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
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

    // ✅ Safe values for HTML
    const safeName = escapeHtml(name || "there");
    const safeEmail = escapeHtml(email || "");
    const safeUrl = escapeHtml(url || "Not provided");
    const safeTitle = escapeHtml(tasktitle || "Not provided");
    const safeMessage = nl2br(escapeHtml(message || ""));

    // ✅ 1) Admin email (to you) - DON'T spoof from customer email (better deliverability)
    await transporter.sendMail({
      from: `ShopifyTasker <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `Shopify Tasker new task created for ${tasktitle || "Untitled"}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Task / Project Title:</strong> ${safeTitle}</p>
        <p><strong>URL:</strong> ${safeUrl}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    });

    // ✅ 2) Customer confirmation email (improved "monday-like" look)
    const customerHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Thanks for submitting your task</title>
  </head>

  <body style="margin:0; padding:0; background:#f3f4f6;">
    <!-- Preheader -->
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
      We received your request and will get back to you within 5 hours.
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;">
      <tr>
        <td align="center" style="padding:24px 12px;">

          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">
            <!-- Brand -->
            <tr>
              <td style="padding:0 6px 12px 6px;">
                <div style="font-family:Arial, sans-serif; font-size:18px; font-weight:800; color:#111827;">
                  ShopifyTasker
                </div>
                <div style="font-family:Arial, sans-serif; font-size:12px; color:#6b7280; margin-top:4px;">
                  Task received • Confirmation
                </div>
              </td>
            </tr>

            <!-- Card -->
            <tr>
              <td style="background:#ffffff; border:1px solid #e5e7eb; border-radius:14px; padding:26px 22px;">
                <div style="font-family:Arial, sans-serif; color:#111827;">
                  <div style="font-size:28px; line-height:34px; font-weight:800; margin:0 0 10px 0;">
                    Thanks for submitting your task
                  </div>

                  <div style="font-size:16px; line-height:24px; color:#374151; margin:0 0 16px 0;">
                    Hi <b>${safeName}</b>,<br/>
                    We’ve received your request and will get back to you within <b>5 hours</b>.
                  </div>

                  <div style="font-size:14px; font-weight:700; color:#6b7280; margin:0 0 10px 0;">
                    Summary
                  </div>

                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                         style="border:1px solid #e5e7eb; border-radius:12px; border-collapse:separate; overflow:hidden;">
                    <tr>
                      <td style="padding:12px 14px; background:#fafafa; width:160px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; border-bottom:1px solid #e5e7eb;">
                        Website
                      </td>
                      <td style="padding:12px 14px; font-family:Arial, sans-serif; font-size:14px; border-bottom:1px solid #e5e7eb;">
                        ${safeUrl}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 14px; background:#fafafa; width:160px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; border-bottom:1px solid #e5e7eb;">
                        Task title
                      </td>
                      <td style="padding:12px 14px; font-family:Arial, sans-serif; font-size:14px; border-bottom:1px solid #e5e7eb;">
                        ${safeTitle}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 14px; background:#fafafa; width:160px; vertical-align:top; font-family:Arial, sans-serif; font-size:14px; font-weight:700;">
                        Message
                      </td>
                      <td style="padding:12px 14px; font-family:Arial, sans-serif; font-size:14px; line-height:20px;">
                        ${safeMessage || "—"}
                      </td>
                    </tr>
                  </table>

                  <!-- Optional CTA -->
                  <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                    <tr>
                      <td style="background:#111827; border-radius:10px;">
                        <a href="https://shopifytasker.com"
                           style="display:inline-block; padding:12px 16px; font-family:Arial, sans-serif; font-size:14px; font-weight:700; color:#ffffff; text-decoration:none;">
                          Visit ShopifyTasker
                        </a>
                      </td>
                    </tr>
                  </table>

                  <div style="font-size:14px; line-height:22px; color:#374151; margin-top:16px;">
                    We’ll be in touch soon!<br/>
                    <b style="color:#111827;">— Your Team at ShopifyTasker</b>
                  </div>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:14px 6px 0 6px;">
                <div style="font-family:Arial, sans-serif; font-size:12px; color:#6b7280;">
                  © ${new Date().getFullYear()} ShopifyTasker • Reply to this email if you need help
                </div>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>`;

    await transporter.sendMail({
      from: `ShopifyTasker <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for submitting your task!",
      html: customerHtml,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Email error:", error.message);
      return NextResponse.json(
        { message: "Failed to send email", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send email", error: "Unknown error" },
      { status: 500 }
    );
  }
}
