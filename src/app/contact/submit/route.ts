import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();

    // Log to console as requested
    console.log("Form Submission Received:", data);

    // In a real app, you would send email here (e.g., using Resend)
    // await resend.emails.send({ ... })

    return NextResponse.json({ success: true, message: "Message received" });
}
