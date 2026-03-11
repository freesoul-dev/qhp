"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EstimateFormState {
  success: boolean;
  error: string | null;
}

export async function submitEstimate(
  _prev: EstimateFormState,
  formData: FormData,
): Promise<EstimateFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const service = formData.get("service") as string;
  const description = formData.get("description") as string;

  if (!name || !email || !phone || !address || !service) {
    return { success: false, error: "Please fill out all required fields." };
  }

  try {
    await resend.emails.send({
      from: "QHP Estimates <estimates@qualityhome.co>",
      to: "admin@qualityhome.co",
      subject: `New Estimate Request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Address: ${address}`,
        `Service: ${service}`,
        `Description: ${description || "N/A"}`,
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
