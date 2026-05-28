import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SeoCTA({
  eyebrow = "Start a project",
  title = "Need a clearer website that helps customers find and trust your business?",
  text = "Tell us what you need built, improved or optimized. We will reply with a practical next step.",
  href = "/contact",
  label = "Talk to Perpetual Dev"
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="container-page pb-24">
      <div className="project-cta-panel relative overflow-hidden border border-[color:var(--line)] p-8 text-[color:var(--project-cta-text)] sm:p-10 lg:p-14">
        <div className="project-cta-pattern absolute inset-0 opacity-60 dark:opacity-30" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="project-cta-muted text-sm font-semibold uppercase tracking-[0.18em]">{eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h2>
            <p className="project-cta-muted mt-4 max-w-2xl leading-7">{text}</p>
          </div>
          <Link href={href} className="project-cta-button">
            {label} <ArrowUpRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

