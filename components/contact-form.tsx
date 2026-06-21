"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending your project details...");

    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      project: data.get("project"),
      message: data.get("message")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Something went wrong. Please try again.");
      }

      setStatus(result?.message || "Message sent.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Name
          <input name="name" required placeholder="Your name" className="contact-input" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input name="email" required type="email" placeholder="you@email.com" className="contact-input" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold">
        Project type
        <input name="project" required placeholder="Website, app, dashboard..." className="contact-input" />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold">
        Message
        <textarea name="message" required placeholder="Tell us what you want to build" className="contact-input min-h-36 resize-none py-4" />
      </label>
      <Button type="submit" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Start a Project"}
      </Button>
      {status && <p className="mt-4 bg-blue-950 px-4 py-3 text-sm font-semibold text-blue-200">{status}</p>}
    </form>
  );
}
