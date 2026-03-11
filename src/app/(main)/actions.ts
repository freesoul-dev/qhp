"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email) {
    return { success: false, error: "Please provide at least your name and email." };
  }

  try {
    await resend.emails.send({
      from: "QHP Website <website@qualityhome.co>",
      to: "admin@qualityhome.co",
      subject: `New Contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        `Message: ${message || "N/A"}`,
      ].join("\n"),
    });

    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please call us directly at (412) 641-0642.",
    };
  }
}
