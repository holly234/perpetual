import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SeoCTA } from "@/components/seo-cta";
import { StructuredData } from "@/components/structured-data";
import { blogPosts, blogPostingSchema, seoServices } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article"
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main className="pt-28">
      <StructuredData data={blogPostingSchema(post)} />

      <article>
        <section className="container-page">
          <div className="border-b border-[color:var(--line)] pb-8 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--text)]">
              <ArrowLeft size={16} /> Back to blog
            </Link>
          </div>

          <div className="max-w-4xl py-12">
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">{post.description}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[color:var(--muted)]">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="container-page pb-14 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-9">
              <p className="text-xl leading-9 text-[color:var(--muted)]">{post.intro}</p>
              <div className="mt-10 grid gap-8">
                {post.sections.map(([heading, text]) => (
                  <section key={heading}>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em]">{heading}</h2>
                    <p className="mt-4 leading-8 text-[color:var(--muted)]">{text}</p>
                  </section>
                ))}
              </div>
            </div>

            <aside className="grid content-start gap-4">
              <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                <p className="eyebrow">Related services</p>
                <div className="mt-5 grid gap-3">
                  {seoServices.slice(0, 4).map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center justify-between gap-3 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-3 text-sm font-semibold">
                      {service.shortTitle}
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                <p className="eyebrow">Next step</p>
                <p className="mt-4 leading-7 text-[color:var(--muted)]">
                  Use this article as a starting point, then connect it to a focused service page or contact flow.
                </p>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                  Talk to us <ArrowUpRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <SeoCTA title="Need help improving your website SEO?" />
    </main>
  );
}

