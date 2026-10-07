import type { Metadata } from "next";
import { MotionDiv, fadeUp, viewport } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Selected Works — Business Solutions Built",
  description:
    "Real projects by Olamide Titus — booking funnels, product catalogs, payment workflows and lead capture systems that solved real business problems.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <main className="projects-screen py-8 sm:py-12">
      <section className="container-page">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="border-b border-slate-200 pb-10 pt-4"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Selected Works</span>
            <h1 className="mt-3 text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-[1.05]">
              Business systems I&apos;ve built.
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Each project below solved a real operational bottleneck — from replacing manual WhatsApp bookings to building automated lead intake funnels and payment flows.
            </p>
          </div>
        </MotionDiv>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionDiv
              key={project.slug}
              className="h-full"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </div>
      </section>
    </main>
  );
}
