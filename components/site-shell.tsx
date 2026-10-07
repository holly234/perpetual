import { FloatingQuickMenu } from "@/components/floating-quick-menu";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Floating Action Button with Animated Vertical Menu */}
      <FloatingQuickMenu />

      {children}

      {/* Clean Minimal Editorial Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-8">
        <div className="container-page">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: Pure Typographic Identity */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium tracking-tight text-slate-900">
                Olamide Titus
              </span>
              <span className="text-xs text-slate-400 font-normal">
                Operations &amp; Support Specialist
              </span>
            </div>

            {/* Right: Clean Minimal Status */}
            <p className="text-xs text-slate-400 font-normal">
              © {new Date().getFullYear()} Olamide Titus. Available for remote roles worldwide.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
