import { Navbar } from "@/components/navbar";
import { KidsTrainingPopup } from "@/components/kids-training-popup";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <KidsTrainingPopup />
      <footer className="border-t border-[color:var(--line)] py-8">
        <div className="container-page flex flex-col justify-between gap-4 text-sm text-[color:var(--muted)] sm:flex-row">
          <p>© 2026 Perpetual Dev. Premium modern web development.</p>
          <div className="flex gap-5">
            <a href="/projects">Projects</a>
            <a href="/services">Services</a>
            <a href="/training">Training</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
