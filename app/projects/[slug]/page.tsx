import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

  return (
    <main className="projects-screen py-8 sm:py-12">
      <section className="container-page">
        <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900">
          <ArrowLeft size={14} /> Back to Selected Works
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{project.category}</span>
            <h1 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              {project.title}
            </h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-bold text-slate-800">Live system preview</p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
            >
              Open live system <ExternalLink size={13} />
            </a>
          </div>
          <iframe
            src={project.embedUrl}
            title={`${project.title} live system preview`}
            className="h-[72vh] min-h-[560px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
          />
        </div>
      </section>
    </main>
  );
}
