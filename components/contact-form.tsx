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
    <form onSubmit={handleSubmit} className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow)] sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Name
          <input name="name" required placeholder="Your name" className="h-12 rounded-sm border border-[color:var(--line)] bg-[color:var(--background)]/40 px-4 outline-none transition placeholder:text-[color:var(--muted)]/70 focus:border-[color:var(--accent)]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input name="email" required type="email" placeholder="you@email.com" className="h-12 rounded-sm border border-[color:var(--line)] bg-[color:var(--background)]/40 px-4 outline-none transition placeholder:text-[color:var(--muted)]/70 focus:border-[color:var(--accent)]" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold">
        Project type
        <input name="project" required placeholder="Website, app, dashboard..." className="h-12 rounded-sm border border-[color:var(--line)] bg-[color:var(--background)]/40 px-4 outline-none transition placeholder:text-[color:var(--muted)]/70 focus:border-[color:var(--accent)]" />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold">
        Message
        <textarea name="message" required placeholder="Tell us what you want to build" className="min-h-40 resize-none rounded-sm border border-[color:var(--line)] bg-[color:var(--background)]/40 px-4 py-4 outline-none transition placeholder:text-[color:var(--muted)]/70 focus:border-[color:var(--accent)]" />
      </label>
      <Button type="submit" className="mt-6 w-full">
        Start a Project
      </Button>
      {status && <p className="mt-4 rounded-sm bg-[color:var(--accent-soft)] px-4 py-3 text-sm font-semibold text-[color:var(--accent)]">{status}</p>}
    </form>
  );
}
