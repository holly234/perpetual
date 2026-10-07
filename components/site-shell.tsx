import Link from "next/link";
import { Mail, MessageCircle, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>

      {/* Floating Right Social Dock (matching Inspiration Image 1) */}
      <aside className="floating-social-bar" aria-label="Quick social links">
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="social-dock-btn"
          title="Connect on LinkedIn"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={15} />
        </a>
        <a
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="social-dock-btn"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle size={15} />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="social-dock-btn"
          title="Send an Email"
          aria-label="Email"
        >
          <Mail size={15} />
        </a>
        <a
          href={siteConfig.cv}
          download
          className="social-dock-btn"
          title="Download CV"
          aria-label="Download CV"
        >
          <Download size={15} />
        </a>
      </aside>

      {children}

      {/* Clean Minimal Editorial Footer (Exact Inspo Match) */}
      <footer className="border-t border-slate-200/80 bg-white py-8">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: Pure Typographic Identity */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium tracking-tight text-slate-900">
                Olamide Titus
              </span>
              <span className="text-xs text-slate-400 font-normal">
                Operations &amp; Support Specialist
              </span>
            </div>

            {/* Right: Clean Editorial Links */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-normal text-slate-500">
              <Link href="/#works" className="hover:text-slate-900 transition">
                Works
              </Link>
              <Link href="/#superpowers" className="hover:text-slate-900 transition">
                Experience
              </Link>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-slate-900 transition"
              >
                Email
              </a>
              <a
                href={siteConfig.cv}
                download
                className="hover:text-slate-900 transition"
              >
                CV
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
