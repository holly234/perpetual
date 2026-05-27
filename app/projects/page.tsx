import { MotionDiv, fadeUp, viewport } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="pt-28">
      <section className="container-page">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="grid gap-10 border-b border-[color:var(--line)] pb-14 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
        >
          <div>
            <p className="eyebrow">Projects</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              Premium websites and product systems.
            </h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              Selected work across luxury rentals, schools, dashboards, property, creative studios and hospitality. Live projects are marked clearly.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["Live builds", "Systems", "Websites"].map((item) => (
                <div key={item} className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-center text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="py-12 sm:py-16">
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
