import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { ProjectImage } from "@/components/project-image";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const gallery = project.gallery ?? [project.image];

  return (
    <main className="pt-28">
      <section className="container-page">
        <div className="border-b border-[color:var(--line)] pb-8 pt-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--text)]">
            <ArrowLeft size={16} /> Back to projects
          </Link>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">{project.category}</p>
              <span className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]">
                {project.previewType ?? (project.liveUrl ? "Live project" : "Case study")}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              {project.title}
            </h1>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[color:var(--muted)]">{project.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  {project.previewType === "Template demo" ? "View Demo" : "Live Preview"} <ExternalLink size={15} className="ml-2" />
                </a>
              ) : (
                <Button href="/contact">Request Similar Build</Button>
              )}
              <Button href="/contact" variant="secondary">
                Start a Project
              </Button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-3">
          <div className="relative aspect-[1.6/1] overflow-hidden rounded-sm">
            <ProjectImage src={project.image} fallback={project.gallery?.[1]} alt={project.title} className="absolute inset-0 h-full w-full object-cover object-top" />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="grid content-start gap-5">
            <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <p className="text-sm font-semibold text-[color:var(--accent)]">Stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-sm border border-[color:var(--line)] px-3 py-1 text-sm text-[color:var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <p className="text-sm font-semibold text-[color:var(--accent)]">Project focus</p>
              <div className="mt-5 grid gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric} className="rounded-sm bg-[color:var(--surface-muted)] p-4">
                    <p className="text-sm font-semibold">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-7">
                <p className="eyebrow">Challenge</p>
                <p className="mt-6 text-xl leading-9 text-[color:var(--muted)]">{project.challenge}</p>
              </div>
              <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-7">
                <p className="eyebrow">Solution</p>
                <p className="mt-6 text-xl leading-9 text-[color:var(--muted)]">{project.solution}</p>
              </div>
            </div>

            <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-3">
              <div className="mb-3 flex items-center justify-between px-2 py-1">
                <p className="text-sm font-semibold text-[color:var(--accent)]">Project gallery</p>
                <p className="text-xs text-[color:var(--muted)]">{gallery.length} previews</p>
              </div>
              <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
                <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-[color:var(--surface)]">
                  <ProjectImage src={gallery[0]} fallback={gallery[1]} alt={`${project.title} main screen preview`} className="absolute inset-0 h-full w-full object-cover object-top" />
                </div>
                <div className="grid gap-3">
                  {gallery.slice(1, 3).map((image, index) => (
                    <div key={image} className="relative min-h-[174px] overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)]">
                      <ProjectImage src={image} fallback={project.image} alt={`${project.title} gallery preview ${index + 2}`} className="absolute inset-0 h-full w-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>
              {gallery.length > 3 && (
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {gallery.slice(3).map((image, index) => (
                    <div key={image} className="relative min-h-[190px] overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)]">
                      <ProjectImage src={image} fallback={project.image} alt={`${project.title} extra gallery preview ${index + 1}`} className="absolute inset-0 h-full w-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="project-cta-panel relative overflow-hidden rounded-sm border border-[color:var(--line)] p-8 text-[color:var(--text)] sm:p-10 lg:p-14">
          <div className="project-cta-pattern absolute inset-0 opacity-60 dark:opacity-30" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="project-cta-muted text-sm font-semibold uppercase tracking-[0.18em]">Build something similar</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Need a project with this level of polish?
              </h2>
            </div>
            <Link href="/contact" className="project-cta-button">
              Start a Project <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.slug} href={`/projects/${item.slug}`} className="group rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
              <p className="text-sm font-semibold text-[color:var(--accent)]">{item.category}</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <ArrowUpRight size={18} className="text-[color:var(--muted)] group-hover:text-[color:var(--text)]" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
