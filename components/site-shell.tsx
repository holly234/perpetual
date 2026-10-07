import { FloatingQuickMenu } from "@/components/floating-quick-menu";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Floating Action Button with Animated Vertical Menu */}
      <FloatingQuickMenu />

      {children}

      {/* Clean Minimal Editorial Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-6">
        <div className="container-page flex items-center justify-center text-center">
          <p className="text-xs text-slate-400 font-normal">
            Copyright @2026
          </p>
        </div>
      </footer>
    </>
  );
}
