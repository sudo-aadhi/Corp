"use server";
import { SendEmail } from "@/types";
import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, text }: SendEmail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
      user: process.env.SMTP_SERVER_USERNAME,
      pass: process.env.SMTP_SERVER_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_SERVER_USERNAME,
      to,
      subject,
      text: text,
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", to);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
