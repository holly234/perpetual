import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Industries Served",
  description: "Industry-specific operational support and systems by Olamide Titus.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <main className="projects-screen py-8 sm:py-12">
      <section className="container-page">
        <div className="max-w-3xl border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Industries</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Sectors &amp; Industries.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Tailored operations, booking systems, and customer support workflows across industries.
          </p>
        </div>

        <div className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(([slug, title, description]) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-slate-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Industry</span>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900">{title}</h2>
                <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                View page <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
