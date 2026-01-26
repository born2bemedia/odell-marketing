import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';


export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const companyProject = formData.get('companyProject') as string;
    const topicOfInquiry = formData.get('topicOfInquiry') as string;
    const description = formData.get('description') as string;
    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const msg = {
      to: process.env.ADMIN_EMAIL!,
      from: process.env.FROM_EMAIL!,
      subject: 'New Contact Form Inquiry',
      html: `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company / Project:</strong> ${companyProject}</p>
        <p><strong>Topic of Inquiry:</strong> ${topicOfInquiry}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
    };

    /* const userMsg = {
      to: businessEmail,
      from: process.env.FROM_EMAIL!,
      subject: 'We’ve Received Your Urgent Assistance Request - Norevia Digital',
      html: `
        <h2>We’ve Received Your Urgent Assistance Request - Norevia Digital</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${businessEmail}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Question:</strong> ${question}</p>
      `,
    };*/

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ message: 'Contact form submitted successfully.' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return NextResponse.json(
      { message: 'Failed to send fund access request.', error: errorMessage },
      { status: 500 }
    );
  }
}
