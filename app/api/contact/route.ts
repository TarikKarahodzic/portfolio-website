// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactSchema } from "../../../lib/contactSchema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return NextResponse.json({ success: false, errors: flat.fieldErrors }, { status: 400 });
  }

  const { name, email, message, phone } = parsed.data;
  if (phone) {
    return NextResponse.json({ success: false, error: "Spam detected" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO || "tariktare@live.com";

  if (!apiKey) {
    return NextResponse.json({ success: false, error: "RESEND_API_KEY missing" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      // html: `<p>From: <strong>${name}</strong> &lt;${email}&gt;</p><p>${message}</p>`
    });

    // Log the id so you can find it in Resend → Emails
    console.log("Resend result:", result);

    return NextResponse.json({ success: true, id: (result as any)?.data?.id ?? null });
  } catch (err: any) {
    console.error("Resend error:", err?.name, err?.message, err?.response || err);
    return NextResponse.json(
      { success: false, error: "Failed to send email (check Resend Activity & sender verification)" },
      { status: 500 }
    );
  }
}
