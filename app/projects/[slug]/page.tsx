import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { createMetadata } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image
  });
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const isExternalLive = project.liveUrl && project.liveUrl.startsWith("http");
  const screenshot = project.image || `/project-screenshots/${project.slug}/1.jpg`;

  return (
    <main className="projects-screen py-8 sm:py-12 bg-white">
      <section className="container-page">
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft size={14} /> Back to Selected Works
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {project.operationsLabel || project.category}
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-normal tracking-tight text-slate-900 leading-[1.1]">
              {project.title}
            </h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* System Preview: iFrame if available, otherwise high-res screenshot view */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#f7f6f2] px-5 py-3.5">
            <p className="text-xs font-semibold text-slate-800">
              {project.previewType || "Deliverable preview"}
            </p>
            {isExternalLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-black transition"
              >
                Open live system <ExternalLink size={13} />
              </a>
            )}
          </div>

          {project.embedUrl ? (
            <iframe
              src={project.embedUrl}
              title={`${project.title} live system preview`}
              className="h-[72vh] min-h-[560px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
            />
          ) : (
            <div className="bg-[#f4f3ee] p-4 sm:p-8 flex items-center justify-center">
              <div className="relative w-full max-w-5xl aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-lg">
                <Image
                  src={screenshot}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 1280px) 1100px, 95vw"
                />
              </div>
            </div>
          )}
        </div>

        {/* Case Study Details Section */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">The Challenge</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.challenge}</p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">The Solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.solution}</p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Business Impact</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.businessImpact}</p>
            {project.metrics && project.metrics.length > 0 && (
              <ul className="mt-4 space-y-2 border-t border-slate-200/80 pt-3">
                {project.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 size={14} className="text-slate-800 shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 rounded-2xl bg-[#f7f6f2] p-8 sm:p-10 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight">
              Need similar operational support?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Available immediately for executive assistance, inbox/calendar management, and data hygiene.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium !text-white hover:bg-slate-800 transition shrink-0"
          >
            <span>Let&apos;s talk</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}

