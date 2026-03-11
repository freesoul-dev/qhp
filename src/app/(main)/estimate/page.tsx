"use client";

import { useActionState } from "react";
import { submitEstimate, type EstimateFormState } from "./action";

const serviceOptions = [
  "Roofing",
  "Storm Restoration",
  "Box Gutters",
  "Decks",
  "General Contracting",
  "Landscaping",
  "Other",
];

const initialState: EstimateFormState = { success: false, error: null };

export default function EstimatePage() {
  const [state, formAction, pending] = useActionState(submitEstimate, initialState);

  return (
    <section className="w-full bg-slate-900 px-6 pt-32 pb-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold text-white">
          Request an Estimate
        </h1>
        <p className="mb-10 text-slate-400">
          Fill out the form below and we&apos;ll get back to you with a free
          estimate for your project.
        </p>

        {state.success ? (
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-green-400">
              Thank You!
            </h2>
            <p className="text-slate-300">
              We&apos;ve received your request and will get back to you shortly.
            </p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-6">
            {state.error && (
              <div className="rounded-md border border-red-700 bg-red-900/30 px-4 py-3 text-sm text-red-300">
                {state.error}
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Property Address" name="address" required />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-amber-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Tell us about your project, timeline, and any other details..."
                className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="rounded-md bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400 disabled:opacity-50"
            >
              {pending ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-slate-300"
      >
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-amber-500"
      />
    </div>
  );
}
