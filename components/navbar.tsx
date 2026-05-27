"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition duration-300",
        scrolled && "border-[color:var(--line)] bg-[color:var(--background)]/78 backdrop-blur-xl"
      )}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-3 max-sm:h-[72px]">
        <Link href="/" aria-label="Perpetual Dev home" className="logo-crop shrink-0" />

        <div className="hidden items-center gap-1 rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)]/72 p-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-4 py-2 text-sm font-medium text-[color:var(--muted)] transition",
                  active && "bg-[color:var(--surface-muted)] text-[color:var(--text)]",
                  !active && "hover:text-[color:var(--text)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex min-w-0 items-center gap-2 max-sm:gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[color:var(--line)] md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-page pb-4 md:hidden">
          <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-2 shadow-[var(--shadow)]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-4 py-3 text-sm font-semibold text-[color:var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
