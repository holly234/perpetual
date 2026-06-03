import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { industries } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export function generateStaticParams() {
  return industries.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find(([itemSlug]) => itemSlug === slug);

  if (!industry) return {};

  const [, title, description] = industry;

  return createMetadata({
    title: `${title} Website Design`,
    description,
    path: `/industries/${slug}`
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find(([itemSlug]) => itemSlug === slug);

  if (!industry) notFound();

  const [, title, description] = industry;

  return (
    <main className="projects-screen">
      <section className="container-page py-8 sm:py-10">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
          <ArrowLeft size={16} /> Industries
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Industry</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-7xl">{title} Website Design</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
          </div>

          <div className="border-4 border-white bg-[#172033] p-6 shadow-[10px_10px_0_#2563eb]">
            <h2 className="text-xl font-black text-white">Page focus</h2>
            <div className="mt-5 grid gap-3">
              {["Clear service presentation", "Mobile-first contact flow", "Trust-building sections", "Search-friendly page structure"].map((item) => (
                <div key={item} className="flex gap-3 text-slate-200">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-300" size={18} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
