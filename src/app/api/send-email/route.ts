import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import mjml2html from "mjml";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const nl2br = (s: string) => s.replace(/\r?\n/g, "<br/>");

function renderMjml({
  name,
  url,
  tasktitle,
  message,
}: {
  name: string;
  url: string;
  tasktitle: string;
  message: string;
}) {
  const year = new Date().getFullYear();

  // ✅ Put your logo URL here (must be publicly accessible)
  const logoUrl =
    "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fbcdd5db493a47b8982ee6_Shopifytaskernewlogovidinew%20(1).png";

  // Monday-like MJML: soft bg, centered card, logo, big headline, hero block
  const mjml = `
<mjml>
  <mj-head>
    <mj-preview>We received your request and will get back to you within 5 hours.</mj-preview>
    <mj-attributes>
      <mj-all font-family="Inter, Arial, sans-serif" />
      <mj-text color="#111827" font-size="16px" line-height="24px" />
      <mj-button font-weight="700" border-radius="10px" />
    </mj-attributes>
    <mj-style>
      .card { border: 1px solid #E5E7EB; border-radius: 16px; }
      .muted { color: #6B7280; }
      .headline { font-size: 40px; line-height: 44px; font-weight: 800; letter-spacing: -0.5px; }
      .subhead { font-size: 16px; line-height: 24px; color:#374151; }
      .label { font-size: 13px; color:#6B7280; font-weight:700; text-transform: uppercase; letter-spacing: .06em; }
      .table td { padding: 12px 14px; font-size: 14px; line-height: 20px; }
      .table .k { background: #F9FAFB; font-weight: 700; width: 160px; }
    </mj-style>
  </mj-head>

  <mj-body background-color="#F3F4F6">
    <!-- Outer spacing -->
    <mj-section padding="28px 12px">
      <mj-column width="600px">

        <!-- Brand -->
        <mj-image src="${logoUrl}" alt="ShopifyTasker" width="140px" align="left" padding="0 0 12px 0" />
        <mj-text css-class="muted" font-size="12px" padding="0 0 16px 0">
          Task received • Confirmation
        </mj-text>

        <!-- Card -->
        <mj-wrapper css-class="card" background-color="#FFFFFF" padding="22px">
          <mj-text css-class="headline" padding="4px 0 10px 0">
            Thanks for submitting your task
          </mj-text>

          <mj-text css-class="subhead" padding="0 0 18px 0">
            Hi <b>${name}</b>,<br/>
            We’ve received your request and will get back to you within <b>5 hours</b>.
          </mj-text>

          <!-- Optional hero image (replace with your own) -->
          <mj-image
            padding="0 0 18px 0"
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ef6c2866f369a5062fca06_Shopifytasker%20review.png"
            alt="We’re on it"
            border-radius="14px"
          />

          <mj-text css-class="label" padding="0 0 10px 0">Summary</mj-text>

          <mj-table css-class="table" cellpadding="0" cellspacing="0" width="100%" border="0">
            <tr>
              <td class="k">Website</td>
              <td>${url}</td>
            </tr>
            <tr>
              <td class="k">Task title</td>
              <td>${tasktitle}</td>
            </tr>
            <tr>
              <td class="k" style="vertical-align:top;">Message</td>
              <td>${message}</td>
            </tr>
          </mj-table>

          <mj-button
            background-color="#111827"
            color="#FFFFFF"
            href="https://shopifytasker.com"
            padding="18px 0 0 0"
          >
            Visit ShopifyTasker
          </mj-button>

          <mj-text padding="16px 0 0 0" color="#374151">
            We’ll be in touch soon!<br/>
            <b style="color:#111827;">— Your Team at ShopifyTasker</b>
          </mj-text>
        </mj-wrapper>

        <mj-text align="center" font-size="12px" color="#6B7280" padding="14px 0 0 0">
          © ${year} ShopifyTasker • Reply to this email if you need help
        </mj-text>

      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

  const { html, errors } = mjml2html(mjml, { validationLevel: "soft" });
  if (errors?.length) console.warn("MJML warnings:", errors);

  return html;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, url, tasktitle, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  // ✅ escape + preserve new lines (important)
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeUrl = escapeHtml(url || "Not provided");
  const safeTitle = escapeHtml(tasktitle || "Not provided");
  const safeMsg = nl2br(escapeHtml(message));

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

    // ✅ 1) Admin email (simple, different subject to avoid Gmail threading confusion)
    await transporter.sendMail({
      from: `ShopifyTasker <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `🔔 New task: ${tasktitle || "Untitled"}`,
      text: `New Task Received

Name: ${name}
Email: ${email}
Website: ${url || "Not provided"}
Task title: ${tasktitle || "Not provided"}

Message:
${message}
`,
    });

    // ✅ 2) Customer email (MJML modern design)
    const html = renderMjml({
      name: safeName,
      url: safeUrl,
      tasktitle: safeTitle,
      message: safeMsg,
    });

    await transporter.sendMail({
      from: `ShopifyTasker <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for submitting your task!",
      html,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Email error:", msg);
    return NextResponse.json({ message: "Failed to send email", error: msg }, { status: 500 });
  }
}
