import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const displayTitle = project.title.replace(/\s+demo$/i, "");
  const displaySummary = project.summary
    .replace(/\s+demo\b/gi, "")
    .replace(/\bdemo\s+/gi, "");
  const screenshots = Array.from(
    { length: 5 },
    (_, index) => `/project-screenshots/${project.slug}/${index + 1}.jpg`
  );

  return (
    <article className="project-card group h-full">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${displayTitle} website`}
        className={
          large
            ? "grid h-full min-h-[390px] lg:grid-cols-[1.2fr_.8fr]"
            : "flex h-full flex-col"
        }
      >
        <div className={large ? "project-card-media project-card-gallery min-h-[330px] lg:min-h-full" : "project-card-media project-card-gallery aspect-[4/3]"}>
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot}
              className={index === 0 ? "project-card-shot project-card-shot-main" : "project-card-shot"}
            >
              <Image
                src={screenshot}
                alt={`${displayTitle} page screenshot ${index + 1}`}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1280px) 22vw, (min-width: 768px) 34vw, 70vw"
                    : "(min-width: 1280px) 8vw, (min-width: 768px) 13vw, 28vw"
                }
                className="object-cover object-top"
              />
            </div>
          ))}
          <div className="project-card-shade" />
          <span className="project-card-index" aria-hidden="true">
            {String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, "0")}
          </span>
        </div>
        <div className={large ? "flex min-h-full flex-col p-7 sm:p-9" : "flex flex-1 flex-col p-6 sm:p-7"}>
          <p className="project-card-category">{project.category}</p>
          <div className="mt-4 flex items-start justify-between gap-5">
            <h3 className={large ? "text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl" : "text-[1.65rem] font-semibold leading-[1.05] tracking-[-0.04em]"}>
              {displayTitle}
            </h3>
            <span className="project-card-arrow">
              <ArrowUpRight size={19} strokeWidth={1.8} />
            </span>
          </div>
          <p className={large ? "mt-5 line-clamp-3 max-w-md leading-7 text-[color:var(--muted)]" : "mt-4 line-clamp-2 text-sm leading-6 text-[color:var(--muted)]"}>
            {displaySummary}
          </p>
          <div className="project-card-link mt-auto pt-7">
            <span>Visit website</span>
            <span className="project-card-link-line" />
          </div>
        </div>
      </a>
    </article>
  );
}
