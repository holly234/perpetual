import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import { SeoCTA } from "@/components/seo-cta";
import { industries, professionalServiceSchema, seoServices } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "Perpetual Dev builds business websites, booking websites and SEO-ready pages for small businesses, startups, schools, logistics companies, restaurants, healthcare, ecommerce and more.",
  path: "/industries"
});

const serviceLinks = seoServices.slice(0, 5);

export default function IndustriesPage() {
  return (
    <main className="pt-28">
      <StructuredData data={professionalServiceSchema("/industries")} />

      <section className="container-page">
        <div className="grid gap-10 border-b border-[color:var(--line)] pb-14 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Industries</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              Websites and SEO foundations for serious business categories.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] lg:justify-self-end">
            Perpetual Dev works with businesses that need clear service pages, credible design, booking or inquiry flows, and search-ready website structure across the US, UK, Canada, Australia, Germany and worldwide.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map(([slug, title, text], index) => (
            <article key={slug} className="group border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
              <div className="flex items-start justify-between gap-5">
                <div className="grid h-12 w-12 place-items-center border border-[color:var(--line)] bg-[color:var(--surface-muted)] text-[color:var(--accent)]">
                  <Building2 size={20} />
                </div>
                <p className="text-sm font-semibold text-[color:var(--accent)]">{String(index + 1).padStart(2, "0")}</p>
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">{text}</p>
              <div className="mt-6 grid gap-2">
                {["Clear service pages", "Mobile-first design", "Search-ready structure"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)]">
                    <CheckCircle2 size={16} className="text-[color:var(--accent)]" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page">
          <div className="mb-5 grid gap-5 border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">Relevant services</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Match the right service to the industry.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-[color:var(--muted)] lg:justify-self-end">
              Strong industry pages work best when connected to focused service pages. These links help visitors and search engines understand how the website supports business goals.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {serviceLinks.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="flex min-h-32 flex-col justify-between border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4 transition hover:bg-[color:var(--surface)]">
                <span className="font-semibold">{service.shortTitle}</span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                  View service <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeoCTA
        title="Need a website built for your industry?"
        text="Share your business type, market and current website goals. We will help identify the right website and SEO structure."
      />
    </main>
  );
}

