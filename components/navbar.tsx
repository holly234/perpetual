"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Auto-close nav when pathname changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Backdrop to close menu when tapping outside */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed right-4 top-4 z-50 flex flex-col items-end sm:right-6 sm:top-6">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="nav-float-button cursor-pointer"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open && (
          <div className="nav-float-panel">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn("nav-float-link", active && "nav-float-link-active")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
