import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const displayTitle = project.title.replace(/\s+demo$/i, "");
  const screenshot = `/project-screenshots/${project.slug}/1.jpg`;
  const hasExternalLink = Boolean(project.liveUrl && project.liveUrl.startsWith("http"));

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-slate-300 hover:shadow-md transition-all duration-200">
      {/* Top Preview Showcase Container (Soft Sand/Gray Inset Pad) */}
      <div className="relative mb-5 w-full overflow-hidden rounded-xl bg-[#f4f3ee] p-3.5 sm:p-4 aspect-[16/10] flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-200/60">
          <Image
            src={screenshot}
            alt={displayTitle}
            fill
            sizes="(min-width: 1280px) 45vw, (min-width: 768px) 45vw, 90vw"
            className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Card Info & Details with Balanced, Legible Font Sizes */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight leading-snug">
            {displayTitle}
          </h3>

          <p className="mt-1.5 text-sm text-slate-500 font-normal">
            {project.operationsLabel || project.category}
          </p>

          <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-slate-600 line-clamp-2">
            {project.businessImpact || project.summary}
          </p>
        </div>

        {/* Action Button */}
        {hasExternalLink && (
          <div className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-black px-5 py-2.5 text-sm font-medium !text-white hover:bg-slate-800 transition shadow-xs"
              id={`project-link-${project.slug}`}
            >
              <span>View live website</span>
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
