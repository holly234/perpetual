import Link from "next/link";
import { Navbar } from "@/components/navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <footer className="border-t border-white/10 bg-[#0f172a] py-6">
        <div className="container-page flex flex-col justify-between gap-5 text-sm text-[color:var(--muted)] lg:flex-row lg:items-center">
          <p className="text-slate-400">&copy; 2026 Perpetual Dev.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link href="/" className="text-slate-400 transition hover:text-white">Home</Link>
            <Link href="/projects" className="text-slate-400 transition hover:text-white">Projects</Link>
            <Link href="/contact" className="text-slate-400 transition hover:text-white">Contact</Link>
            <a href="https://www.instagram.com/perpetual_devs" target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@perpetual_devs" target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
