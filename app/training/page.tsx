import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Award,
  CalendarDays,
  Clock,
  Code2,
  Globe2,
  ImageIcon,
  Laptop,
  LayoutTemplate,
  MonitorPlay,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Users,
  Wifi
} from "lucide-react";
import { MotionDiv, fadeUp, viewport } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Summer Creative Tech Camp for Kids",
  description:
    "Remote worldwide summer training for children aged 10-18 covering Mobirise website design and AI image generation. Starts July 6, 2026.",
  path: "/training",
  image: "/assets/summer-camp-hero.jpg"
});

const modules = [
  {
    title: "Website design basics",
    text: "How websites are structured, how pages are planned, and how young learners can design with Mobirise.",
    icon: LayoutTemplate,
    color: "from-sky-400 to-cyan-300",
    tint: "bg-sky-50 text-sky-950 dark:bg-sky-950/35 dark:text-sky-100"
  },
  {
    title: "Creative page layouts",
    text: "Color, spacing, sections, buttons, images and simple page ideas for clean beginner-friendly websites.",
    icon: Code2,
    color: "from-fuchsia-400 to-pink-400",
    tint: "bg-fuchsia-50 text-fuchsia-950 dark:bg-fuchsia-950/35 dark:text-fuchsia-100"
  },
  {
    title: "AI image generation",
    text: "How to create fun visual ideas with AI image tools using clear prompts and creative direction.",
    icon: ImageIcon,
    color: "from-amber-300 to-orange-400",
    tint: "bg-amber-50 text-amber-950 dark:bg-amber-950/35 dark:text-amber-100"
  },
  {
    title: "Creative presentation",
    text: "How to combine layouts and AI-generated visuals into simple creative website concepts.",
    icon: Palette,
    color: "from-emerald-300 to-teal-400",
    tint: "bg-emerald-50 text-emerald-950 dark:bg-emerald-950/35 dark:text-emerald-100"
  }
];

const parentReasons = [
  {
    title: "Personalized attention",
    text: "Small class sizes ensure every child gets the guidance and support they deserve.",
    icon: Users
  },
  {
    title: "Real creative projects",
    text: "Kids build real websites, create AI-generated art and work on fun projects they will be proud to share.",
    icon: Code2
  },
  {
    title: "Designed for focus",
    text: "Lessons are carefully paced to match attention spans and build confidence step by step.",
    icon: Target
  },
  {
    title: "Learn from anywhere",
    text: "The program is 100% online and interactive, perfect for busy families and summer travel.",
    icon: Globe2
  },
  {
    title: "Future-ready skills",
    text: "Website design and creative AI skills prepare kids for the digital future they are stepping into.",
    icon: Rocket
  }
];

const programDetails = [
  { label: "Starts", value: "July 6, 2026", icon: CalendarDays },
  { label: "Schedule", value: "2 classes / week, 1-1.5 hrs / session", icon: Clock },
  { label: "Duration", value: "2 months", icon: CalendarDays },
  { label: "Certificate", value: "Completion included", icon: Award },
  { label: "Requirement", value: "Laptop and internet connection", icon: Laptop },
  { label: "Batch size", value: "Small and focused, limited slots only", icon: Users }
];

const learningModes = [
  { title: "Remote classes", text: "Students can join from home with a laptop or tablet.", icon: MonitorPlay },
  { title: "Worldwide access", text: "Open to children and families in any country or timezone.", icon: Globe2 },
  { title: "Live guidance", text: "Lessons are guided, interactive and paced for young learners.", icon: Wifi }
];

export default function TrainingPage() {
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
          <div className="relative grid content-between gap-8 overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow)] sm:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent_28%,rgba(244,114,182,0.16)_48%,transparent_68%,rgba(52,211,153,0.16))]" />
            <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-sky-400 via-fuchsia-400 via-amber-300 to-emerald-400" />
            <div>
              <p className="relative inline-flex border border-[color:var(--line)] bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-sky-700 dark:bg-black/20 dark:text-sky-200">
                Summer Creative Tech Camp
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
                Limited-time creative tech training for children aged 10-18.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                Remote worldwide summer training starts July 6, 2026. Parents can enroll their kids for fun, guided lessons in Mobirise website design and AI image generation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Enroll Your Child</Button>
                <a
                  href="mailto:perpetualdev2@gmail.com?subject=Summer%20Creative%20Tech%20Camp%20Enrollment"
                  className="btn btn-secondary"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Ages", "10-18"],
                ["Starts", "July 6, 2026"],
                ["Price", "$120 full program"]
              ].map(([title, text]) => (
                <div key={title} className="relative border border-white/70 bg-white/75 p-4 shadow-sm dark:border-white/10 dark:bg-black/20">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)] sm:min-h-full">
              <Image
                src="/assets/summer-camp-hero.jpg"
                alt="Cartoon children joining a remote creative tech camp"
                fill
                priority
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-fuchsia-500/20" />
              <div className="absolute bottom-4 left-4 right-4 border border-white/25 bg-white/88 p-4 text-slate-950 backdrop-blur dark:bg-slate-950/80 dark:text-white">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-600 dark:text-fuchsia-200">Starts July 6, 2026</p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Parents can enroll kids from anywhere.</p>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="relative min-h-[220px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)]">
                <Image
                  src="/assets/summer-camp-website-design.jpg"
                  alt="Cartoon child designing a website with drag-and-drop blocks"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-[220px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface-muted)]">
                <Image
                  src="/assets/summer-camp-ai-images.jpg"
                  alt="Cartoon child creating colorful AI-generated images"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Sparkles size={22} />
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    Website design plus AI image creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="container-page pb-12 sm:pb-16">
        <div className="grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow)] sm:p-8"
          >
            <p className="eyebrow">Why parents choose us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Small, focused and built around real creative output.
            </h2>

            <div className="mt-7 grid gap-3">
              {parentReasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-200">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionDiv>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="grid content-between gap-5"
          >
            <div className="border border-[color:var(--line)] bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 p-7 text-white shadow-[var(--shadow)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Program details</p>
              <div className="mt-6 grid gap-3">
                {programDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="grid gap-3 border border-white/20 bg-white/10 p-4 sm:grid-cols-[auto_0.72fr_1.28fr] sm:items-center">
                      <Icon size={18} className="text-yellow-300" />
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/75">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow)] sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
              <div className="bg-violet-700 p-5 text-white">
                <p className="inline-flex bg-yellow-300 px-3 py-1 text-sm font-black uppercase tracking-tight text-slate-950">Summer special</p>
                <p className="mt-5 text-6xl font-semibold tracking-[-0.06em]">$120</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-yellow-200">Full 2-month program</p>
              </div>
              <div className="grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-yellow-300 text-xl font-black text-slate-950">VS</span>
              </div>
              <div className="border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Regular price</p>
                <p className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-violet-700 dark:text-violet-200">$150</p>
                <p className="mt-2 text-sm font-semibold text-[color:var(--muted)]">USD / month</p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">Regular mentorship programs start at $150 per month.</p>
              </div>
            </div>

            <div className="grid gap-4 border border-[color:var(--line)] bg-yellow-50 p-5 dark:bg-yellow-950/25 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Spaces are limited.</h3>
                <p className="mt-2 leading-7 text-[color:var(--muted)]">
                  Book your child&apos;s slot today and let them create, design and grow.
                </p>
              </div>
              <Link href="/contact" className="btn bg-yellow-300 text-slate-950 hover:opacity-90">
                Book Slots Now <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="container-page pb-12 sm:pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {learningModes.map((item, index) => {
            const Icon = item.icon;
            const colors = ["bg-sky-500", "bg-fuchsia-500", "bg-emerald-500"];

            return (
              <MotionDiv
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow)]"
              >
                <div className={`grid h-12 w-12 place-items-center text-white ${colors[index]}`}>
                  <Icon size={21} />
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-3 leading-7 text-[color:var(--muted)]">{item.text}</p>
              </MotionDiv>
            );
          })}
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-page">
          <div className="mb-5 grid gap-5 border border-[color:var(--line)] bg-gradient-to-r from-sky-50 via-fuchsia-50 to-amber-50 p-7 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end dark:from-sky-950/30 dark:via-fuchsia-950/25 dark:to-amber-950/25">
            <div>
              <p className="eyebrow">Summer program</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Website design and AI image creativity for a brighter summer.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-[color:var(--muted)] lg:justify-self-end">
              The limited-time program is beginner-friendly and practical, with colorful lessons on designing simple websites in Mobirise and creating images with AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionDiv
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className={`border border-[color:var(--line)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)] ${item.tint}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className={`grid h-12 w-12 place-items-center bg-gradient-to-br text-white ${item.color}`}>
                      <Icon size={20} />
                    </div>
                    <p className="text-sm font-semibold opacity-70">0{index + 1}</p>
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 opacity-75">{item.text}</p>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
