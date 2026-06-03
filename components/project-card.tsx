import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { ProjectImage } from "@/components/project-image";

type Project = (typeof projects)[number];

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
      <Link
        href={`/projects/${project.slug}`}
        className={
          large
            ? "grid min-h-[360px] lg:grid-cols-[1.18fr_.82fr]"
            : "grid h-full grid-rows-[auto_1fr]"
        }
      >
        <div className={large ? "relative min-h-[320px] overflow-hidden bg-white lg:min-h-full" : "relative aspect-[1.45/1] overflow-hidden bg-white"}>
          {project.embedUrl ? (
            <iframe
              src={project.embedUrl}
              title={`${project.title} website front page preview`}
              className="pointer-events-none h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
            />
          ) : (
            <ProjectImage
              src={project.image}
              fallback={project.gallery?.[1]}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
            />
          )}
        </div>
        <div className={large ? "flex min-h-full flex-col justify-between p-6 sm:p-8" : "flex min-h-full flex-col justify-between p-5"}>
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[color:var(--accent)]">{project.category}</p>
              <span className="rounded-sm border border-[color:var(--line)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]">
                {project.previewType ?? "Live preview"}
              </span>
            </div>
            <div className="mt-3 flex items-start justify-between gap-4">
              <h3 className={large ? "text-2xl font-semibold leading-tight tracking-tight sm:text-3xl" : "text-xl font-semibold leading-tight tracking-tight"}>{project.title}</h3>
              <ArrowUpRight className="mt-1 shrink-0 text-[color:var(--muted)] transition group-hover:text-[color:var(--text)]" size={20} />
            </div>
            <p className={large ? "mt-4 line-clamp-3 leading-7 text-[color:var(--muted)]" : "mt-3 line-clamp-2 text-sm leading-6 text-[color:var(--muted)]"}>{project.summary}</p>
          </div>
          <div className={large ? "mt-7 flex flex-wrap gap-2" : "mt-5 flex flex-wrap gap-2"}>
            {project.stack.map((item) => (
              <span key={item} className="rounded-sm border border-[color:var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
                {item}
              </span>
            ))}
          </div>
          {project.liveUrl && (
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
              Open live project <ExternalLink size={14} />
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
}
