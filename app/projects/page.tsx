import type { Metadata } from "next";
import { MotionDiv, fadeUp, viewport } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Simple portfolio of live website projects by Perpetual Dev.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <main className="projects-screen">
      <section className="container-page">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="grid gap-10 border-b border-white/15 pb-8 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Projects</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl">
              Selected website work.
            </h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-8 text-slate-300">
              A small set of live website builds and demos. Open any project to view the full website inside this portfolio.
            </p>
          </div>
        </MotionDiv>
      </section>

      <section className="py-8 sm:py-10">
        <div className="container-page grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <MotionDiv key={project.slug} initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.04 }}>
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </div>
      </section>
    </main>
  );
}
