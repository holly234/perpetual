import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { ContactForm } from "@/components/contact-form";
import { MotionDiv, fadeUp } from "@/components/motion";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact Perpetual Dev for a simple business website or portfolio website.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="contact-screen">
      <section className="container-page py-8 sm:py-10">
        <div className="max-w-3xl border-b border-white/15 pb-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Contact</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-7xl">
            Let&apos;s build a clean website.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Send a short message about the website you need.
          </p>
        </div>

        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="grid gap-5 py-6 lg:grid-cols-[0.62fr_1.38fr]"
        >
          <aside className="contact-card p-6">
            <Mail size={22} className="text-blue-300" />
            <p className="mt-6 text-sm font-semibold text-slate-400">Email</p>
            <a href="mailto:perpetualdev2@gmail.com" className="mt-2 block break-words text-lg font-black text-white">
              perpetualdev2@gmail.com
            </a>

            <div className="mt-8 grid gap-3">
              <a
                href="https://www.instagram.com/perpetual_devs"
                target="_blank"
                rel="noreferrer"
                className="social-link social-link-instagram"
              >
                <FaInstagram size={20} />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@perpetual_devs"
                target="_blank"
                rel="noreferrer"
                className="social-link social-link-tiktok"
              >
                <FaTiktok size={20} />
                TikTok
              </a>
            </div>
          </aside>

          <div className="contact-form-shell p-3">
            <ContactForm />
          </div>
        </MotionDiv>
      </section>
    </main>
  );
}
