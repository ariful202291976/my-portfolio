import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to yourself (you receive the message)
    const mailOptionsToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: #fbbf24; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; margin-top: 20px; border-radius: 5px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { color: #333; margin-top: 5px; }
              .message-box { background: white; padding: 15px; border-left: 4px solid #fbbf24; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    };

    // Auto-reply to the sender (optional)
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: #fbbf24; padding: 20px; text-align: center; }
              .content { padding: 20px; }
              .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Thank You for Reaching Out!</h2>
              </div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
                <p><strong>Your message:</strong></p>
                <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #fbbf24;">${message}</p>
                <div class="signature">
                  <p>Best regards,<br>
                  <strong>Md Ariful Islam</strong><br>
                  Full-Stack Developer<br>
                  Email: arifulislam747630@gmail.com<br>
                  Portfolio: <a href="https://ariful-portfolio.netlify.app">ariful-portfolio.netlify.app</a></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Hi ${name},

Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
Md Ariful Islam
Full-Stack Developer
Email: arifulislam747630@gmail.com
Portfolio: https://ariful-portfolio.netlify.app
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToSelf);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
