import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)]", className)}>{children}</div>;
}
