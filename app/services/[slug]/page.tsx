import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FAQList } from "@/components/faq-list";
import { SeoCTA } from "@/components/seo-cta";
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
    title: `${service.title} for Businesses`,
    description: service.description,
    path: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = seoServices.find((item) => item.slug === slug);

  if (!service) notFound();

  const relatedServices = seoServices.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <main className="pt-28">
      <StructuredData data={serviceSchema(service)} />

      <section className="container-page">
        <div className="border-b border-[color:var(--line)] pb-8 pt-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--text)]">
            <ArrowLeft size={16} /> Back to services
          </Link>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">{service.shortTitle}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              {service.title} for growing businesses.
            </h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[color:var(--muted)]">{service.description}</p>
            <p className="mt-5 leading-7 text-[color:var(--muted)]">
              Built for {service.audience}, with clear content structure, responsive design and practical SEO foundations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Request this service <ArrowUpRight size={15} className="ml-2" />
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow)] sm:p-8">
            <p className="eyebrow">Benefits</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              What this improves.
            </h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              The goal is to make the business easier to understand, easier to trust and easier to contact from search, social, referrals and mobile visits.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4">
                <CheckCircle2 size={18} className="shrink-0 text-[color:var(--accent)]" />
                <p className="text-sm font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8">
            <p className="eyebrow">Process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A clear path from planning to launch.
            </h2>
            <div className="mt-8 grid gap-3">
              {service.process.map((step, index) => (
                <div key={step} className="grid gap-3 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="text-sm font-semibold text-[color:var(--accent)]">0{index + 1}</span>
                  <h3 className="font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8">
            <p className="eyebrow">Related pages</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">Explore connected services.</h2>
            <div className="mt-6 grid gap-3">
              {relatedServices.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="flex items-center justify-between gap-4 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4 transition hover:bg-[color:var(--surface)]">
                  <span className="font-semibold">{item.shortTitle}</span>
                  <ArrowUpRight size={16} className="text-[color:var(--muted)]" />
                </Link>
              ))}
              <Link href="/industries" className="flex items-center justify-between gap-4 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4 transition hover:bg-[color:var(--surface)]">
                <span className="font-semibold">Industries served</span>
                <ArrowUpRight size={16} className="text-[color:var(--muted)]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-14 sm:pb-16">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Questions about {service.shortTitle.toLowerCase()}.
            </h2>
          </div>
          <FAQList items={service.faqs} />
        </div>
      </section>

      <SeoCTA
        title={`Need ${service.shortTitle.toLowerCase()} for your business?`}
        text="Share the business goal, market and current website situation. We will help you identify the next practical step."
      />
    </main>
  );
}

