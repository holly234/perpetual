import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, MonitorSmartphone } from "lucide-react";
import { MotionDiv, fadeUp, viewport } from "@/components/motion";

const principles = [
  {
    title: "Clean interface first.",
    text: "Every page should be easy to scan, easy to use and strong enough to make the brand feel credible.",
    icon: Layers3
  },
  {
    title: "Systems that can grow.",
    text: "From Laravel backends to WordPress content flows, builds are structured for real daily use.",
    icon: Code2
  },
  {
    title: "Mobile polish matters.",
    text: "Layouts are designed for phones from the start, with spacing, speed and touch behavior handled properly.",
    icon: MonitorSmartphone
  }
];

const clientTypes = [
  {
    title: "Luxury rentals",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Schools",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Clinics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Restaurants",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Real estate",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Startups",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Hotels",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Local brands",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"
  }
];

export default function AboutPage() {
  return (
    <main className="pt-28">
      <section className="container-page py-10 sm:py-14">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch"
        >
          <div className="grid content-between gap-8 border border-[color:var(--line)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow)] sm:p-10">
            <div>
              <p className="eyebrow">About Perpetual Dev</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
                We build websites that feel sharp, calm and useful.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                Perpetual Dev creates modern websites, dashboards and business systems for brands that need more than a basic online presence.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Full-stack", "Frontend and backend"],
                ["Responsive", "Designed for every screen"],
                ["Business-led", "Built around outcomes"]
              ].map(([title, text]) => (
                <div key={title} className="border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[260px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)] sm:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                alt="Modern workspace with refined architecture"
                fill
                priority
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-5">
              <div className="relative min-h-[220px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                  alt="Analytics dashboard interface"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border border-[color:var(--line)] bg-[color:var(--text)] p-6 text-[color:var(--background)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">Focus</p>
                <p className="mt-8 text-3xl font-semibold tracking-[-0.04em]">Premium web experiences for real businesses.</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page grid gap-4 lg:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionDiv
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-12 w-12 place-items-center border border-[color:var(--line)] bg-[color:var(--surface-muted)] text-[color:var(--accent)]">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm font-semibold text-[color:var(--accent)]">0{index + 1}</p>
                </div>
                <h2 className="mt-10 text-2xl font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-4 leading-7 text-[color:var(--muted)]">{item.text}</p>
              </MotionDiv>
            );
          })}
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page">
          <div className="mb-5 grid gap-5 border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">Built For</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Different industries. One standard of execution.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-[color:var(--muted)] lg:justify-self-end">
              From rental platforms to school portals and local business websites, the approach stays focused on clarity, trust and conversion.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clientTypes.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.035 }}
                className="group relative min-h-40 overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} website category`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-300 group-hover:from-black/80" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                  <p className="text-lg font-semibold tracking-tight">{item.title}</p>
                  <ArrowUpRight size={18} className="opacity-75 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="project-cta-panel relative overflow-hidden border border-[color:var(--line)] p-8 text-[color:var(--project-cta-text)] sm:p-10 lg:p-14">
          <div className="project-cta-pattern absolute inset-0 opacity-60 dark:opacity-30" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="project-cta-muted text-sm font-semibold uppercase tracking-[0.18em]">Work with us</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Have a website, dashboard or system in mind?
              </h2>
            </div>
            <Link href="/contact" className="project-cta-button">
              Start a Project <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
