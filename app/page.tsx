import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Code2, Database, Globe2, LayoutDashboard, Search, Smartphone } from "lucide-react";
import { MotionDiv, MotionSection, fadeUp, viewport } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { ProjectImage } from "@/components/project-image";
import { StructuredData } from "@/components/structured-data";
import { projects, services, techStack } from "@/lib/data";
import { professionalServiceSchema, seoServices } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Web Design, SEO & Business Website Agency",
  description:
    "Perpetual Dev builds premium business websites, booking websites and SEO-ready web pages for small businesses, startups, schools, rentals and service companies worldwide.",
  path: "/"
});

const stackLogos: Record<string, string> = {
  Laravel: "https://cdn.simpleicons.org/laravel/FF2D20",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  WordPress: "https://cdn.simpleicons.org/wordpress/21759B",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  Git: "https://cdn.simpleicons.org/git/F05032"
};

const serviceVisuals = [
  { icon: Globe2, color: "from-blue-500 to-cyan-400" },
  { icon: Code2, color: "from-violet-500 to-fuchsia-400" },
  { icon: LayoutDashboard, color: "from-amber-400 to-orange-500" },
  { icon: Database, color: "from-emerald-400 to-teal-500" },
  { icon: Smartphone, color: "from-sky-400 to-indigo-500" },
  { icon: Search, color: "from-rose-400 to-red-500" }
];

export default function HomePage() {
  return (
    <main>
      <StructuredData data={professionalServiceSchema("/")} />
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
          alt="Premium modern workspace background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)] via-[color:var(--background)]/92 to-[color:var(--background)]/55" />
        <div className="container-page relative grid min-h-[760px] items-center gap-10 pb-12 pt-28 lg:min-h-[720px] lg:grid-cols-[1.02fr_.98fr]">
        <MotionDiv initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <p className="eyebrow">Full-stack web developer</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] leading-[0.98] sm:text-7xl lg:text-8xl">
            Web design, SEO and business websites for growing companies.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
            Perpetual Dev designs premium websites, booking websites and SEO-ready digital experiences for small businesses, startups and local service companies such as electricians, plumbers, HVAC teams, roofers and contractors worldwide.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/projects">View Our Work</Button>
            <Button href="/contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-3 shadow-[var(--shadow)]">
            <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Product Dashboard</p>
                  <p className="text-xs text-[color:var(--muted)]">Operations overview</p>
                </div>
                <span className="rounded-sm border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--muted)]">Live</span>
              </div>
              <div className="relative aspect-[1.3/1] overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
                  alt="Clean dashboard mockup"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Laravel", "React", "Tailwind"].map((item) => (
                  <div key={item} className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-4 text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>
        </div>
      </section>

      <MotionSection className="py-14 sm:py-16" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.65 }}>
        <div className="container-page">
          <div className="flex items-center gap-5">
            <p className="eyebrow shrink-0">Core stack</p>
            <div className="h-px flex-1 bg-[color:var(--line)]" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {techStack.map((item, index) => (
              <MotionDiv
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, delay: index * 0.045 }}
                className="group flex min-h-28 flex-col items-center justify-center rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <img src={stackLogos[item]} alt={`${item} logo`} className="h-9 w-9 object-contain transition duration-300 group-hover:scale-110" />
                <span className="mt-3 text-sm font-semibold">{item}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="py-12 sm:py-16">
        <div className="container-page">
          <MotionDiv initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.65 }} className="mb-5 grid gap-5 border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Clear websites for search, trust and conversion.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-[color:var(--muted)] lg:justify-self-end">
              We help businesses improve online visibility with responsive web design, service pages, technical SEO, Google Business Profile support and booking-focused website structures.
            </p>
          </MotionDiv>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {seoServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex min-h-48 flex-col justify-between border border-[color:var(--line)] bg-[color:var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">Service</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{service.shortTitle}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[color:var(--muted)]">{service.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                  View service <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <MotionDiv initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.65 }} className="mb-6 flex flex-col justify-between gap-4 border-b border-[color:var(--line)] pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Selected work.</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                View all projects <ArrowRight size={16} />
              </Link>
          </MotionDiv>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <MotionDiv key={project.slug} initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.04 }}>
                <Link href={`/projects/${project.slug}`} className="group block overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                  <div className="relative aspect-[1.35/1] overflow-hidden bg-[color:var(--surface-muted)]">
                    <ProjectImage
                      src={project.image}
                      fallback={project.gallery?.[1]}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">{project.category}</p>
                      <ArrowRight size={16} className="text-[color:var(--muted)] transition group-hover:text-[color:var(--text)]" />
                    </div>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
                  </div>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-page grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <MotionDiv initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} transition={{ duration: 0.65 }} className="relative min-h-[440px] overflow-hidden rounded-sm border border-[color:var(--line)]">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
              alt="Project planning and collaboration"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </MotionDiv>
          <div className="grid content-center gap-5">
            <div>
              <p className="eyebrow">How We Work</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Calm process. Clear execution.</h2>
            </div>
            {["Understand the business goal before designing the interface.", "Plan the structure, content flow and core technical decisions.", "Build responsive systems with clean code and restrained motion.", "Launch with final QA, performance passes and practical handoff."].map((item, index) => (
              <MotionDiv
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="flex gap-4 rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
              >
                <CheckCircle2 className="mt-1 text-[color:var(--accent)]" size={19} />
                <p className="leading-7 text-[color:var(--muted)]">{item}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-page">
          <div className="service-showcase relative overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow)] sm:p-8 lg:p-10">
            <div className="service-gradient-flow absolute inset-0" />
            <div className="service-ribbon service-ribbon-one" />
            <div className="service-ribbon service-ribbon-two" />

            <div className="relative grid min-w-0 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="min-w-0">
                <p className="eyebrow">Services</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Modern builds for brands, platforms and operational systems.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-lg">
                  Website, app, dashboard and SEO delivery shaped around clean structure, conversion and long-term business use.
                </p>

                <div className="service-marquee mt-7 max-w-full overflow-hidden border-y border-[color:var(--line)] py-3">
                  <div className="service-marquee-track flex w-max gap-3">
                    {[...services, ...services].map((service, index) => (
                      <span key={`${service.title}-${index}`} className="shrink-0 border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold">
                        {service.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                {services.map((service, index) => {
                  const visual = serviceVisuals[index % serviceVisuals.length];
                  const Icon = visual.icon;

                  return (
                    <Link
                      key={service.title}
                      href="/services"
                      className="group service-card-pop relative min-h-40 overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)] sm:min-h-48"
                    >
                      <div className={`absolute -right-10 -top-10 h-32 w-32 bg-gradient-to-br ${visual.color} opacity-[0.18] blur-2xl transition duration-500 group-hover:opacity-[0.32]`} />
                      <div className="relative flex h-full min-w-0 flex-col justify-between gap-6">
                        <div className={`grid h-11 w-11 place-items-center bg-gradient-to-br ${visual.color} text-white shadow-sm`}>
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                          <p className="mt-2 line-clamp-3 max-w-full text-sm leading-6 text-[color:var(--muted)]">{service.text}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 pb-20">
        <div className="relative overflow-hidden rounded-sm bg-[color:var(--text)] p-8 text-[color:var(--background)] sm:p-12 lg:p-16">
          <Image
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80"
            alt="Abstract architectural CTA background"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[color:var(--text)]/70" />
          <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">Start a project</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Have a project in mind?</h2>
            <Button href="/contact" variant="secondary" className="btn-on-contrast">
              Let&apos;s Talk
            </Button>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
