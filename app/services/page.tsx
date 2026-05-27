import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Code2, Database, Globe2, LayoutDashboard, Search, Smartphone } from "lucide-react";
import { MotionDiv, fadeUp, viewport } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

const serviceIcons = [Globe2, Code2, LayoutDashboard, Database, Smartphone, Search];

const serviceImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
];

const deliverables = ["Responsive UI", "Clean codebase", "CMS-ready pages", "Performance pass", "SEO structure", "Launch support"];

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[color:var(--line)] pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">What We Build</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Service areas.</h2>
            </div>
            <p className="max-w-xl leading-7 text-[color:var(--muted)]">
              Each service is shaped around clear pages, usable systems, reliable performance and a polished client-facing experience.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];

              return (
                <MotionDiv
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                  className="group overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
                >
                  <div className="relative aspect-[1.55/1] overflow-hidden bg-[color:var(--surface-muted)]">
                    <Image
                      src={serviceImages[index]}
                      alt={`${service.title} service visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-5">
                      <div className="grid h-11 w-11 shrink-0 place-items-center border border-[color:var(--line)] bg-[color:var(--surface-muted)] text-[color:var(--accent)]">
                        <Icon size={20} />
                      </div>
                      <p className="text-sm font-semibold text-[color:var(--accent)]">0{index + 1}</p>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">{service.title}</h3>
                    <p className="mt-3 min-h-[84px] leading-7 text-[color:var(--muted)]">{service.text}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                      Discuss this service <ArrowUpRight size={15} />
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8"
          >
            <p className="eyebrow">What is included</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              The details that make a build feel finished.
            </h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              A good website is not just the homepage. It needs clear structure, careful mobile behavior, useful content sections and a launch path that does not leave the business guessing.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="flex items-center gap-3 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4">
                  <CheckCircle2 size={18} className="shrink-0 text-[color:var(--accent)]" />
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="relative min-h-[300px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)] sm:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team reviewing project scope"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-5">
              <div className="border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-6">
                <p className="text-5xl font-semibold tracking-[-0.05em]">06</p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Core services</p>
              </div>
              <div className="relative min-h-[220px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)]">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
                  alt="Developer team reviewing an interface"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="project-cta-panel relative overflow-hidden border border-[color:var(--line)] p-8 text-[color:var(--project-cta-text)] sm:p-10 lg:p-14">
          <div className="project-cta-pattern absolute inset-0 opacity-60 dark:opacity-30" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="project-cta-muted text-sm font-semibold uppercase tracking-[0.18em]">Start with clarity</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Need a website or system that feels premium and works properly?
              </h2>
            </div>
            <Button href="/contact" className="project-cta-button">
              Start a Project <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
