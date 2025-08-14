import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactSchema } from "../../../lib/contactSchema";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
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