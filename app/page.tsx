import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { HomeGsap } from "@/components/home-gsap";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";
import { projects, services } from "@/lib/data";
import { professionalServiceSchema } from "@/lib/seo-data";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Simple Web Design Portfolio",
  description: "Perpetual Dev portfolio featuring live website work and clean business website builds.",
  path: "/"
});

const studioImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
];

const marqueeItems = ["Portfolio sites", "Booking pages", "Local business websites", "Mobile layouts", "Live demos", "Clean builds"];

export default function HomePage() {
  return (
    <main className="retro-page">
      <StructuredData data={professionalServiceSchema("/")} />
      <HomeGsap>
        <section className="retro-hero relative overflow-hidden">
          <div className="retro-grid-bg" />
          <div className="container-page relative grid min-h-[calc(100vh-7rem)] gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p data-hero-text className="retro-kicker">Perpetual Dev / Portfolio</p>
            <h1 data-hero-text className="mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Clean business websites. No clutter.
            </h1>
            <p data-hero-text className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Portfolio, booking and local business websites with strong images, simple structure and live previews.
            </p>
            <div data-hero-text className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects" className="retro-btn-primary">View Projects</Button>
              <Button href="/contact" variant="secondary" className="retro-btn-secondary">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="retro-collage grid min-h-[560px] grid-cols-6 grid-rows-6 gap-4">
            <div data-hero-image data-parallax className="retro-image-card relative col-span-4 row-span-4 overflow-hidden">
              <Image src={studioImages[0]} alt="Modern studio workspace" fill priority sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
            </div>
            <div data-hero-image data-float-slow className="retro-image-card retro-tilt-right relative col-span-2 row-span-3 overflow-hidden">
              <Image src={studioImages[1]} alt="Website project planning" fill priority sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
            <div data-hero-image data-float-slow className="retro-stat col-span-2 row-span-1 grid place-items-center p-5 text-center">
              <Sparkles size={22} />
              <p className="mt-2 text-sm font-semibold">Live website work</p>
            </div>
            <div data-hero-image className="retro-image-card retro-tilt-left relative col-span-3 row-span-2 overflow-hidden">
              <Image src={studioImages[2]} alt="Responsive website on laptop" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover" />
            </div>
            <div data-hero-image data-float-slow className="retro-number-card col-span-3 row-span-2 p-5">
              <p className="text-5xl font-black tracking-[-0.05em]">04</p>
              <p className="mt-8 text-sm font-black uppercase tracking-[0.18em]">Live project previews</p>
            </div>
          </div>
          </div>
        </section>

        <section className="retro-marquee overflow-hidden py-5">
          <div data-marquee-track className="flex w-max gap-3">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="retro-marquee-pill px-5 py-3 text-sm font-black uppercase tracking-[0.12em]">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="portfolio-band py-10 sm:py-12">
          <div className="container-page">
          <div data-reveal className="mb-6 flex flex-col justify-between gap-4 border-b border-[color:var(--line)] pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Live website previews.</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
              All projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <div key={project.slug} data-reveal>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          </div>
        </section>

        <section className="portfolio-band-alt py-10">
          <div className="container-page">
          <div data-reveal className="retro-service-strip grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.title}>
                <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{service.text}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        <section className="portfolio-band py-10 pb-16">
          <div className="container-page">
          <div data-reveal className="retro-cta p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">Start a project</p>
            <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Need a clean website?</h2>
              <Button href="/contact" variant="secondary" className="retro-btn-secondary">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
          </div>
        </section>
      </HomeGsap>
    </main>
  );
}
