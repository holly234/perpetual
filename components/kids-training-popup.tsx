"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, Brain, Code2, Sparkles, Wand2, X } from "lucide-react";

const trainingPoints = [
  { label: "Basic tech skills", icon: Code2 },
  { label: "Web design", icon: Sparkles },
  { label: "Basic AI skills", icon: Brain },
  { label: "AI automation", icon: Bot }
];

export function KidsTrainingPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-5xl border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-sky-400 via-amber-400 to-emerald-400" />
          <button
            type="button"
            aria-label="Close training popup"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
          >
            <X size={17} />
          </button>

          <div className="grid gap-5 p-5 pl-7 sm:p-7 sm:pl-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-[color:var(--line)] bg-[color:var(--surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                <Wand2 size={14} />
                Kids tech training
              </div>
              <h2 className="mt-4 pr-10 text-2xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Tech skills training for children aged 10-18.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--muted)] sm:text-base sm:leading-7">
                We teach kids practical digital skills in a simple, fun and guided way: basic computer confidence, web design, beginner-friendly AI tools and smart AI automation ideas.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-4">
                {trainingPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-2 border border-[color:var(--line)] bg-[color:var(--surface-muted)] px-3 py-2 text-sm font-semibold">
                      <Icon size={15} className="shrink-0 text-[color:var(--accent)]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/training" onClick={() => setOpen(false)} className="btn btn-primary whitespace-nowrap">
                View Training
              </Link>
              <a href="mailto:perpetualdev2@gmail.com?subject=Kids%20Tech%20Training%20Inquiry" className="btn btn-secondary whitespace-nowrap">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
