"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/(main)/actions";

const initialState: ContactFormState = { success: false, error: null };

interface ContactFormProps {
  variant?: "full" | "compact";
}

export default function ContactForm({ variant = "full" }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const isFull = variant === "full";

  if (state.success) {
    return (
      <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 text-center">
        <p className="font-semibold text-green-400">Thank you!</p>
        <p className="mt-1 text-sm text-slate-300">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state.error && (
        <div className="rounded-md border border-red-700 bg-red-900/30 px-4 py-2 text-xs text-red-300">
          {state.error}
        </div>
      )}

      {isFull && (
        <>
          <input
            name="name"
            required
            placeholder="Full Name *"
            className="rounded-md border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none backdrop-blur transition-colors focus:border-amber-500"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="rounded-md border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none backdrop-blur transition-colors focus:border-amber-500"
          />
        </>
      )}

      <input
        name={isFull ? "email" : "name"}
        required
        placeholder={isFull ? "Email *" : "Your Name *"}
        type={isFull ? "email" : "text"}
        className="rounded-md border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none backdrop-blur transition-colors focus:border-amber-500"
      />

      {!isFull && (
        <input
          name="email"
          type="email"
          required
          placeholder="Email *"
          className="rounded-md border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none backdrop-blur transition-colors focus:border-amber-500"
        />
      )}

      <textarea
        name="message"
        rows={isFull ? 3 : 4}
        placeholder="How can we help?"
        className="rounded-md border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none backdrop-blur transition-colors focus:border-amber-500"
      />

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400 disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
