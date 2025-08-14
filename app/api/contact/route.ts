import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactSchema } from "../../../lib/contactSchema";
import z from "zod";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = ContactSchema.safeParse(body);

  if (!parsed.success) {
    const errorTree = z.treeifyError(parsed.error);
    return NextResponse.json({ success: false, error: errorTree }, { status: 400 });
  }

  // Honeypot check for spam prevention
  if (body.phone) {
    return NextResponse.json({ success: false, error: "Spam detected" }, { status: 400 });
  }

  const { name, email, message } = body;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";

  try {
    const data = await resend.emails.send({
      from,
      to: "karahodzictarik@outlook.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}