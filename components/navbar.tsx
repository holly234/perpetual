"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#superpowers", label: "Superpowers" },
  { href: "/#works", label: "Selected Works" },
  { href: "/#readiness", label: "Readiness" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("2:45 pm");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Live local time for Lagos, Nigeria (WAT = UTC+1)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        }).format(now);
        setTimeStr(formatted.toLowerCase());
      } catch {
        // fallback
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-sm tracking-tight shadow-xs group-hover:scale-105 transition">
              OT
            </span>
            <span className="hidden sm:inline-block font-bold text-slate-900 tracking-tight text-sm">
              Olamide Titus
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                  ? false
                  : pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-lg transition ${
                    active
                      ? "text-slate-900 bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Location, Status & Action Button */}
        <div className="flex items-center gap-3">
          {/* Location & Time widget */}
          <div className="hidden md:flex flex-col text-right">
            <span className="text-[0.72rem] font-medium text-slate-500 leading-tight">
              Lagos, Nigeria
            </span>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              {timeStr}
            </span>
          </div>

          {/* Status pill: Available for Hire */}
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(34,197,94,0.2)]" />
            <span>Available for Hire</span>
          </div>

          {/* Hire Me CTA button */}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold !text-white shadow-xs hover:bg-slate-800 transition"
            id="nav-hire-me"
          >
            Hire me
          </Link>

          {/* Mobile hamburger menu */}
          <div className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            {open && (
              <>
                <div
                  className="fixed inset-0 z-30 bg-black/20 backdrop-blur-xs"
                  onClick={() => setOpen(false)}
                  aria-hidden="true"
                />
                <div className="absolute right-0 top-11 z-40 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                  <div className="px-3 py-2 border-b border-slate-100 mb-2">
                    <p className="text-xs font-semibold text-slate-500">Lagos, Nigeria · {timeStr}</p>
                    <p className="text-xs font-medium text-emerald-600 mt-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Available for remote work
                    </p>
                  </div>
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t border-slate-100">
                    <a
                      href={siteConfig.cv}
                      download
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
