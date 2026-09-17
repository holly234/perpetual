"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const project = data.get("project")?.toString().trim() || "";
    const message = data.get("message")?.toString().trim() || "";

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\nMessage:\n${message}`
    );

    setStatus("Opening your email client with your project details...");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    form.reset();
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
      <Button type="submit" className="mt-6 w-full">
        Start a Project
      </Button>
      {status && <p className="mt-4 bg-blue-950 px-4 py-3 text-sm font-semibold text-blue-200">{status}</p>}
    </form>
  );
}
