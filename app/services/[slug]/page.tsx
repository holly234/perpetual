import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { seoServices, serviceSchema } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export function generateStaticParams() {
  return seoServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = seoServices.find((item) => item.slug === slug);

  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = seoServices.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="projects-screen py-8 sm:py-12">
      <StructuredData data={serviceSchema(service)} />
      <section className="container-page">
        <Link href="/#superpowers" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900">
          <ArrowLeft size={14} /> Back to Superpowers
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Capability</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-normal tracking-tight text-slate-900 leading-[1.1]">
              {service.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{service.description}</p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900">What this helps with</h2>
              <div className="mt-4 grid gap-3">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-slate-900" size={16} />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900">Workflow &amp; Process</h2>
              <div className="mt-4 grid gap-2.5">
                {service.process.map((step, index) => (
                  <p key={step} className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-700">
                    <span className="font-bold text-slate-900 mr-2">{String(index + 1).padStart(2, "0")} /</span>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
