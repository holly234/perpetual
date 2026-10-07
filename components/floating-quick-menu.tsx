"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Briefcase, Clock, Mail, MessageCircle, Download, X, MessageCircleMore } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

interface QuickLinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
  isDownload?: boolean;
}

const quickLinks: QuickLinkItem[] = [
  {
    label: "Works",
    href: "/#works",
    icon: <Briefcase size={16} strokeWidth={1.8} />
  },
  {
    label: "Experience",
    href: "/#superpowers",
    icon: <Clock size={16} strokeWidth={1.8} />
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: <FaLinkedin size={15} />,
    isExternal: true
  },
  {
    label: "WhatsApp",
    href: siteConfig.social.whatsapp,
    icon: <MessageCircle size={16} strokeWidth={1.8} />,
    isExternal: true
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: <Mail size={16} strokeWidth={1.8} />,
    isExternal: true
  },
  {
    label: "Download CV",
    href: siteConfig.cv,
    icon: <Download size={16} strokeWidth={1.8} />,
    isExternal: true,
    isDownload: true
  }
];

export function FloatingQuickMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      aria-label="Quick links floating menu"
    >
      {/* Animated Vertical View of Icons & Links */}
      <div
        className={`flex flex-col items-end gap-2.5 mb-3 transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {quickLinks.map((item, index) => {
          const itemContent = (
            <>
              <span className="text-xs font-medium tracking-tight pr-0.5">{item.label}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition group-hover:bg-white group-hover:text-slate-950 shadow-xs">
                {item.icon}
              </span>
            </>
          );

          const className =
            "group flex items-center gap-3 rounded-full border border-slate-200/90 bg-white/95 pl-4 pr-1.5 py-1.5 text-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-105 active:scale-95";

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.isDownload ? undefined : "_blank"}
                rel={item.isDownload ? undefined : "noreferrer"}
                download={item.isDownload ? true : undefined}
                onClick={() => setIsOpen(false)}
                className={className}
                style={{
                  transitionDelay: isOpen ? `${index * 35}ms` : "0ms"
                }}
              >
                {itemContent}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={className}
              style={{
                transitionDelay: isOpen ? `${index * 35}ms` : "0ms"
              }}
            >
              {itemContent}
            </Link>
          );
        })}
      </div>

      {/* Floating Trigger Button with Attention-Grabbing Indicator */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close quick menu" : "Open quick menu"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-black hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        id="floating-quick-menu-trigger"
      >
        {/* Subtle pulsing live indicator dot when closed to draw immediate eye attention */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-xs"></span>
          </span>
        )}

        <span
          className={`transform transition-transform duration-300 ease-out ${
            isOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"
          }`}
        >
          {isOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <MessageCircleMore size={24} strokeWidth={2} className="text-white" />
          )}
        </span>
      </button>
    </div>
  );
}
