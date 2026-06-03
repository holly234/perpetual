"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const contactEmail = "perpetualdev2@gmail.com";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const project = data.get("project");
    const message = data.get("message");
    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\nMessage:\n${message}`);
    setStatus("Opening your email app with the project details.");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
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
