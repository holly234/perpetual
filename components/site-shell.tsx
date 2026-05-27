import { Navbar } from "@/components/navbar";
import { KidsTrainingPopup } from "@/components/kids-training-popup";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <KidsTrainingPopup />
      <footer className="border-t border-[color:var(--line)] py-8">
        <div className="container-page flex flex-col justify-between gap-5 text-sm text-[color:var(--muted)] lg:flex-row lg:items-center">
          <p>&copy; 2026 Perpetual Dev. Premium modern web development.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <a href="/projects" className="transition hover:text-[color:var(--text)]">Projects</a>
            <a href="/services" className="transition hover:text-[color:var(--text)]">Services</a>
            <a href="/training" className="transition hover:text-[color:var(--text)]">Training</a>
            <a href="/contact" className="transition hover:text-[color:var(--text)]">Contact</a>
            <a href="https://www.instagram.com/perpetual_devs" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--text)]">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@perpetual_devs" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--text)]">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
