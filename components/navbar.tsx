"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<number | null>(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openNav() {
    clearCloseTimer();
    setVisible(true);
    setClosing(false);
    setOpen(true);
  }

  function closeNav() {
    clearCloseTimer();
    setOpen(false);
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setVisible(false);
      setClosing(false);
      closeTimer.current = null;
    }, 220);
  }

  function toggleNav() {
    if (open || visible) {
      closeNav();
    } else {
      openNav();
    }
  }

  return (
    <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
      <button
        type="button"
        onClick={toggleNav}
        className="nav-float-button"
        aria-label="Toggle navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {visible && (
        <div className={cn("nav-float-panel", closing && "nav-float-panel-closing")}>
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeNav}
                className={cn("nav-float-link", active && "nav-float-link-active")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
