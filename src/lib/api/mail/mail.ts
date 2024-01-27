import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESENT_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;
const emailDomain = process.env.NEXT_PUBLIC_EMAIL_DOMAIN;
const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL;

export async function sendGuestbookEntryEmail(
  email: string,
  message: string,
  date: Date
) {
  await resend.emails.send({
    from: `${emailDomain}`,
    to: `${myEmail}`,
    subject: "New Guestbook Entry",
    html: `<p>Email: ${email}</p><p>Message: ${message}</p> <p>Date: ${date}</p>`,
  });
}
