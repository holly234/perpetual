import { siteConfig } from "@/lib/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {/* Clean Minimal Editorial Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-8">
        <div className="w-[90%] mx-[5%] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-semibold text-slate-900">Olamide Titus</span>
            <span>·</span>
            <span>Web &amp; Mobile Development</span>
          </div>

          <div className="flex items-center gap-6 text-slate-500">
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#works" className="hover:text-slate-900 transition">Works</a>
            <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">Instagram</a>
          </div>

          <p className="text-slate-400">
            Copyright @2026
          </p>
        </div>
      </footer>
    </>
  );
}
