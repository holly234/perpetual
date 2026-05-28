import Image from "next/image";
import type { Metadata } from "next";
import { CalendarDays, Camera, Mail, MapPin, MessageSquare, Music2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionDiv, fadeUp } from "@/components/motion";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Perpetual Dev",
  description:
    "Contact Perpetual Dev for web design, SEO optimization, booking websites, business websites and full-stack web development projects.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="pt-28">
      <section className="container-page pb-24">
        <div className="border-b border-[color:var(--line)] pb-8 pt-10">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Start a website, SEO or web development project.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Tell us what you need built, redesigned or optimized. Perpetual Dev works with businesses worldwide.
          </p>
        </div>
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="grid gap-5 py-10 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <aside className="grid content-start gap-4">
            <div className="relative min-h-[220px] overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--surface-muted)]">
              <Image
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1000&q=80"
                alt="Calm workspace for project discussion"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                <Mail size={18} />
              </div>
              <p className="mt-6 text-sm font-semibold text-[color:var(--muted)]">Email</p>
              <a href="mailto:perpetualdev2@gmail.com" className="mt-2 block break-words text-lg font-semibold">
                perpetualdev2@gmail.com
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="https://www.instagram.com/perpetual_devs"
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <Camera className="text-[color:var(--accent)]" size={20} />
                <h2 className="mt-5 font-semibold">Instagram</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">@perpetual_devs</p>
              </a>
              <a
                href="https://www.tiktok.com/@perpetual_devs"
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <Music2 className="text-[color:var(--accent)]" size={20} />
                <h2 className="mt-5 font-semibold">TikTok</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">@perpetual_devs</p>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
                <CalendarDays className="text-[color:var(--accent)]" size={20} />
                <h2 className="mt-5 font-semibold">Availability</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Open for selected websites, dashboards and full-stack systems.</p>
              </div>
              <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
                <MapPin className="text-[color:var(--accent)]" size={20} />
                <h2 className="mt-5 font-semibold">Location</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Remote collaboration for brands, startups and growing businesses.</p>
              </div>
            </div>
          </aside>

          <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-3">
            <div className="mb-3 flex items-center gap-3 px-3 py-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[color:var(--surface)] text-[color:var(--accent)]">
                <MessageSquare size={18} />
              </div>
              <div>
                <h2 className="font-semibold">Project inquiry</h2>
                <p className="text-sm text-[color:var(--muted)]">A few details are enough to start the conversation.</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </MotionDiv>

        <div className="grid gap-4 rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <p className="text-sm font-semibold text-[color:var(--accent)]">01</p>
            <h3 className="mt-3 font-semibold">Tell us the goal</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">What you need built, who it is for, and what success should look like.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[color:var(--accent)]">02</p>
            <h3 className="mt-3 font-semibold">Share the scope</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Website, application, dashboard, WordPress build, SEO, or a custom system.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[color:var(--accent)]">03</p>
            <h3 className="mt-3 font-semibold">Get a clear reply</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">You will receive a practical next step instead of vague back-and-forth.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
