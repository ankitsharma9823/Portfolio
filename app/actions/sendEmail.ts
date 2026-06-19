"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const timestamp = new Date().toLocaleString();

  if (!email || !message) {
    return { error: "Invalid fields" };
  }

  try {
    await resend.emails.send({
      from: "Portfolio System <onboarding@resend.dev>",
      to: "sharmaankit15826@gmail.com",
      subject: `[SYSTEM_LOG] New Inquiry: ${name}`,
      // Improved Template
      text: `
--- SYSTEM INQUIRY REPORT ---
TIMESTAMP: ${timestamp}
SENDER_NAME: ${name}
SENDER_EMAIL: ${email}
-----------------------------

MESSAGE:
${message}

-----------------------------
Status: Routing to Inbox
      `,
    });
    return { success: true };
  } catch (error) {
    return { error: "Failed to send email" };
  }
}