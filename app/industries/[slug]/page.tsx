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
    title: `${title} Operations & Systems`,
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
    <main className="projects-screen py-8 sm:py-12">
      <section className="container-page">
        <Link href="/industries" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900">
          <ArrowLeft size={14} /> Back to Industries
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Industry</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              {title} Systems
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="text-base font-bold text-slate-900">Operational Deliverables</h2>
            <div className="mt-4 grid gap-3">
              {["Clear service presentation", "Mobile-first booking & contact flow", "Trust-building proof & testimonials", "Automated inquiry routing & notifications"].map((item) => (
                <div key={item} className="flex gap-2.5 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={16} />
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
