"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  if (!name || !email || !message) {
    return { error: "Please fill in all fields." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "sharmaankit15826@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      // Plain text fallback
      text: `
New Portfolio Inquiry
--------------------
Name: ${name}
Email: ${email}
Time: ${timestamp}

Message:
${message}
      `,
      // HTML template
      html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background:#0a0a0a;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111;border:1px solid #222;border-radius:12px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="padding:24px 28px;border-bottom:1px solid #222;">
                <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#10b981;font-weight:600;">
                  Portfolio Contact
                </p>
                <h1 style="margin:8px 0 0;font-size:20px;color:#fafafa;font-weight:600;">
                  New message received
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:28px;">
                
                <!-- Meta -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #1a1a1a;">
                      <span style="font-size:12px;color:#737373;display:block;margin-bottom:2px;">Name</span>
                      <span style="font-size:14px;color:#e5e5e5;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #1a1a1a;">
                      <span style="font-size:12px;color:#737373;display:block;margin-bottom:2px;">Email</span>
                      <a href="mailto:${email}" style="font-size:14px;color:#10b981;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;">
                      <span style="font-size:12px;color:#737373;display:block;margin-bottom:2px;">Time</span>
                      <span style="font-size:14px;color:#e5e5e5;">${timestamp}</span>
                    </td>
                  </tr>
                </table>

                <!-- Message -->
                <div style="background:#0a0a0a;border:1px solid #222;border-radius:8px;padding:16px 18px;">
                  <p style="margin:0 0 8px;font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.05em;">
                    Message
                  </p>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#d4d4d4;white-space:pre-wrap;">
${message}
                  </p>
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 28px;border-top:1px solid #222;text-align:center;">
                <p style="margin:0;font-size:11px;color:#525252;">
                  Sent from your portfolio contact form
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { error: "Failed to send email. Please try again." };
  }
}