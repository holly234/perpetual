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
    <main className="projects-screen">
      <section className="container-page py-8 sm:py-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">{project.category}</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl">{project.title}</h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden border-4 border-white bg-white shadow-[12px_12px_0_#2563eb]">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-100 px-4 py-3">
            <p className="text-sm font-black text-slate-900">Live website preview</p>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-black text-slate-700 transition hover:text-slate-950">
              Open site <ExternalLink size={14} />
            </a>
          </div>
          <iframe
            src={project.embedUrl}
            title={`${project.title} live website preview`}
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
