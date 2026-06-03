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
    <main className="projects-screen">
      <StructuredData data={serviceSchema(service)} />
      <section className="container-page py-8 sm:py-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
          <ArrowLeft size={16} /> Services
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Service</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-7xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">{service.description}</p>
          </div>

          <div className="grid gap-4">
            <div className="border-4 border-white bg-[#172033] p-6 shadow-[10px_10px_0_#2563eb]">
              <h2 className="text-xl font-black text-white">What this helps with</h2>
              <div className="mt-5 grid gap-3">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 text-slate-200">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-300" size={18} />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-4 border-white bg-[#172033] p-6 shadow-[10px_10px_0_#2563eb]">
              <h2 className="text-xl font-black text-white">Process</h2>
              <div className="mt-5 grid gap-3">
                {service.process.map((step, index) => (
                  <p key={step} className="border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200">
                    {String(index + 1).padStart(2, "0")} / {step}
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
