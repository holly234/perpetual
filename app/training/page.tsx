import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Brain, CheckCircle2, Code2, Globe2, Laptop, MonitorPlay, Sparkles, Wifi } from "lucide-react";
import { MotionDiv, fadeUp, viewport } from "@/components/motion";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Basic tech skills",
    text: "Computer confidence, typing, file organization, internet safety and practical digital habits.",
    icon: Laptop,
    color: "from-sky-400 to-cyan-300",
    tint: "bg-sky-50 text-sky-950 dark:bg-sky-950/35 dark:text-sky-100"
  },
  {
    title: "Web design",
    text: "How websites work, simple page layouts, visual structure and beginner-friendly HTML/CSS ideas.",
    icon: Code2,
    color: "from-fuchsia-400 to-pink-400",
    tint: "bg-fuchsia-50 text-fuchsia-950 dark:bg-fuchsia-950/35 dark:text-fuchsia-100"
  },
  {
    title: "Basic AI skills",
    text: "Using AI tools responsibly for learning, writing, research, creativity and school-friendly tasks.",
    icon: Brain,
    color: "from-amber-300 to-orange-400",
    tint: "bg-amber-50 text-amber-950 dark:bg-amber-950/35 dark:text-amber-100"
  },
  {
    title: "AI automation",
    text: "Simple automation thinking: prompts, workflows, digital assistants and smart problem-solving.",
    icon: Bot,
    color: "from-emerald-300 to-teal-400",
    tint: "bg-emerald-50 text-emerald-950 dark:bg-emerald-950/35 dark:text-emerald-100"
  }
];

const outcomes = [
  "Stronger computer confidence",
  "Better digital creativity",
  "Beginner web design foundation",
  "Responsible AI tool use",
  "Clear problem-solving habits",
  "Guided practical projects"
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
                Remote worldwide summer training starts July 6, 2026. Parents can enroll their kids for fun, guided lessons in web design, AI tools, automation and digital creativity.
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
                ["Access", "Remote worldwide"]
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
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
                alt="Children learning with laptops in a classroom"
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
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                  alt="Student using a laptop for digital learning"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border border-[color:var(--line)] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-300 p-6 text-white">
                <Sparkles size={22} />
                <p className="mt-8 text-3xl font-semibold tracking-[-0.04em]">
                  Bright lessons. Practical projects. Better digital confidence.
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>
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
                Creative digital skills for a brighter summer.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-[color:var(--muted)] lg:justify-self-end">
              The limited-time program is beginner-friendly and practical, with colorful lessons children can understand, practice and build on from anywhere.
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

      <section className="container-page pb-24">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-7 sm:p-8">
            <p className="eyebrow">Outcomes</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Skills they can keep using.
            </h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              The goal is not to overwhelm children with theory. It is to help them become more confident, curious and capable with useful digital tools, wherever they are learning from.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-4">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden border border-[color:var(--line)] bg-gradient-to-r from-sky-500 via-fuchsia-500 to-amber-300 p-8 text-white sm:p-10 lg:p-14">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Start with a conversation</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Ready to enroll your child before the July 6 start date?
              </h2>
            </div>
            <Link href="/contact" className="btn bg-white text-slate-950 hover:opacity-90">
              Enroll Your Child <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
