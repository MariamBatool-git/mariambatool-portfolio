import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({
            error: "Missing required fields"
        }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", 
            to : "mariammalik.mb462@gmail.com",
            //to: process.env.YOUR_EMAIL!,
            subject: `New message from ${name}`,
            html: `
        <h4>You received a new message from your portfolio website.</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
            replyTo: email, // reply directly to the sender
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
}