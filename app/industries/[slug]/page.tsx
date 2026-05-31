import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FAQList } from "@/components/faq-list";
import { SeoCTA } from "@/components/seo-cta";
import { StructuredData } from "@/components/structured-data";
import { industries, professionalServiceSchema, seoServices } from "@/lib/seo-data";
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
    title: `Web Design and SEO for ${title}`,
    description: `${description} Perpetual Dev builds responsive, search-ready websites for ${title.toLowerCase()}.`,
    path: `/industries/${slug}`
  });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find(([itemSlug]) => itemSlug === slug);

  if (!industry) notFound();

  const [, title, description] = industry;
  const lowerTitle = title.toLowerCase();
  const relatedIndustries = industries.filter(([itemSlug]) => itemSlug !== slug).slice(0, 5);
  const faqItems = [
    [`Do you build websites for ${lowerTitle}?`, `Yes. Perpetual Dev builds responsive business websites with service pages, trust signals and contact paths shaped around the needs of ${lowerTitle}.`],
    [`Can you improve local SEO for ${lowerTitle}?`, "Yes. We can improve metadata, service-area structure, internal links, page content and Google Business Profile presentation to support local search visibility."],
    ["Will the website work well on mobile?", "Yes. Mobile visitors need clear calls to action, fast pages and readable service information, especially when they are comparing providers quickly."]
  ];

  return (
    <main className="pt-28">
      <StructuredData data={professionalServiceSchema(`/industries/${slug}`)} />

      <section className="container-page">
        <div className="border-b border-[color:var(--line)] pb-8 pt-8">
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--text)]">
            <ArrowLeft size={16} /> Back to industries
          </Link>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="eyebrow">Industry website design</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              Web design and SEO for {lowerTitle}.
            </h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[color:var(--muted)]">{description}</p>
            <p className="mt-5 leading-7 text-[color:var(--muted)]">
              The website should explain services clearly, build trust quickly and make it simple for customers to call, request a quote or book the next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Request a website <ArrowUpRight size={15} className="ml-2" />
              </Link>
              <Link href="/services/seo-optimization" className="btn btn-secondary">
                Explore SEO services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow)] sm:p-8">
            <p className="eyebrow">What the website needs</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Built for local discovery and qualified inquiries.
            </h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              Strong local service websites combine clear content, useful service pages and direct contact options without becoming cluttered.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {["Clear service pages", "Service-area content", "Mobile call and quote actions", "Trust signals and reviews", "Google Business Profile support", "Fast, search-ready structure"].map((item) => (
              <div key={item} className="flex items-center gap-3 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4">
                <CheckCircle2 size={18} className="shrink-0 text-[color:var(--accent)]" />
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
          <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8">
            <p className="eyebrow">Process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">A practical website plan.</h2>
            <div className="mt-8 grid gap-3">
              {["Review services, audience and service areas", "Plan the pages and customer journey", "Build responsive pages and contact paths", "Add metadata, internal links and launch checks"].map((step, index) => (
                <div key={step} className="grid gap-3 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="text-sm font-semibold text-[color:var(--accent)]">0{index + 1}</span>
                  <h3 className="font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8">
            <p className="eyebrow">Related services</p>
            <div className="mt-6 grid gap-3">
              {seoServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center justify-between gap-4 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4 transition hover:bg-[color:var(--surface)]">
                  <span className="font-semibold">{service.shortTitle}</span>
                  <ArrowUpRight size={16} className="text-[color:var(--muted)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-14 sm:pb-16">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Questions from {lowerTitle}.
            </h2>
          </div>
          <FAQList items={faqItems} />
        </div>
      </section>

      <section className="container-page pb-14 sm:pb-16">
        <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8">
          <p className="eyebrow">More industries</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedIndustries.map(([itemSlug, itemTitle]) => (
              <Link key={itemSlug} href={`/industries/${itemSlug}`} className="border border-[color:var(--line)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm font-semibold transition hover:bg-[color:var(--surface)]">
                {itemTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeoCTA
        title={`Need a stronger website for your ${lowerTitle} business?`}
        text="Share your services, market and current website situation. We will help identify the right structure for visibility and inquiries."
      />
    </main>
  );
}

