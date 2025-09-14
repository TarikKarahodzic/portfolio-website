// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactSchema } from "../../../lib/contactSchema"; // use your alias or correct relative path
import { z } from "zod";

export const runtime = "nodejs"; // ensure Node runtime

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate payload
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      const flat = parsed.error.flatten();
      return NextResponse.json(
        { success: false, errors: { ...flat.fieldErrors, _form: flat.formErrors } },
        { status: 400 }
      );
    }

    const { name, email, message, phone } = parsed.data;

    // Honeypot
    if (phone) {
      return NextResponse.json({ success: false, error: "Spam detected" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const EMAIL_FROM = process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>";
    const CONTACT_TO = process.env.CONTACT_TO || "karahodzictarik@outlook.com";

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY missing" },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: EMAIL_FROM,
      to: CONTACT_TO,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to send email. Check your API key and that EMAIL_FROM is a verified sender/domain in Resend.",
      },
      { status: 500 }
    );
  }
}
