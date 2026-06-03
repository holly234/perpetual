import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Industries",
  description: "Industry website pages for local business website and SEO visibility.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <main className="projects-screen">
      <section className="container-page py-8 sm:py-10">
        <div className="max-w-4xl border-b border-white/15 pb-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Industries</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-7xl">
            Business website pages.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Search-focused pages for different businesses, kept separate from the simple portfolio navigation.
          </p>
        </div>

        <div className="grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map(([slug, title, description]) => (
            <Link key={slug} href={`/industries/${slug}`} className="group border-4 border-white bg-[#172033] p-6 shadow-[8px_8px_0_#2563eb] transition hover:-translate-y-1">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">Industry</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-white">{title}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                View page <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
