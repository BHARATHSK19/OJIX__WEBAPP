import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254),
  company: z.string().max(160).optional(),
  interest: z.string().min(1).max(100),
  message: z.string().trim().min(20).max(5000),
  turnstileToken: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Check the form fields and try again." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Cloudflare Turnstile verification
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (secret) {
      if (!data.turnstileToken) {
        return NextResponse.json(
          { error: "Please complete the spam protection check." },
          { status: 400 }
        );
      }

      const check = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret,
            response: data.turnstileToken,
          }),
        }
      );

      const verdict = (await check.json()) as { success: boolean };
      if (!verdict.success) {
        return NextResponse.json(
          { error: "Spam protection could not verify your request. Please try again." },
          { status: 400 }
        );
      }
    }

    // Save contact enquiry to TiDB MySQL database via Prisma
    await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company || null,
        interest: data.interest,
        message: data.message,
      },
    });

    // Send email notification via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !to) {
      return NextResponse.json(
        { error: "Project enquiries are not configured yet. Please contact us by WhatsApp or email." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "OJIX Website <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: `New OJIX project enquiry: ${data.interest}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "Not provided"}\nProject: ${data.interest}\n\n${data.message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "We couldn't send your note right now. Please try WhatsApp or email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unable to process your request right now." },
      { status: 400 }
    );
  }
}
