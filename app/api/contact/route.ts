import { NextRequest, NextResponse } from "next/server";
import { LAMBDA_URL } from "@/app/constants/contactForm";



export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({
            error: "Missing required fields"
        }, { status: 400 });
    }

    try {
        const res = await fetch(LAMBDA_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
          });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
}
