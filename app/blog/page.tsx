import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SeoCTA } from "@/components/seo-cta";
import { blogPosts } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Web Design and SEO Blog",
  description:
    "Practical articles from Perpetual Dev about website design, SEO, Google Business Profile optimization, online visibility, website speed and business growth.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main className="pt-28">
      <section className="container-page">
        <div className="grid gap-10 border-b border-[color:var(--line)] pb-14 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Blog</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              Practical website, SEO and online visibility insights.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] lg:justify-self-end">
            Starter guides for businesses that want clearer websites, better search visibility, stronger local presence and faster digital experiences.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">{post.category}</p>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{post.title}</h2>
              <p className="mt-4 line-clamp-3 leading-7 text-[color:var(--muted)]">{post.description}</p>
              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-[color:var(--muted)]">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                Read article <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SeoCTA
        title="Want these SEO foundations applied to your website?"
        text="We can improve page structure, service content, metadata, schema, internal links and conversion paths."
      />
    </main>
  );
}

