import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project; large?: boolean }) {
  const displayTitle = project.title.replace(/\s+demo$/i, "");
  const screenshot = `/project-screenshots/${project.slug}/1.jpg`;

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

      {/* Card Info & Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight leading-snug">
            {displayTitle}
          </h3>

          <p className="mt-1 text-xs text-slate-400 font-normal">
            {project.operationsLabel || project.category}
          </p>

          <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-500 line-clamp-2">
            {project.businessImpact || project.summary}
          </p>
        </div>

        {/* Action Button: Clean 8px Rounded Rectangle (Matching Inspo) */}
        <div className="mt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-black px-4 py-2 text-xs font-medium !text-white hover:bg-slate-800 transition"
            id={`project-link-${project.slug}`}
          >
            <span>View detail works</span>
            <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}

