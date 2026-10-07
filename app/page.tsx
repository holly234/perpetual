import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Download, Mail, Monitor, Wifi, Clock, ArrowUpRight, MessageSquare, FileText, Workflow, Award } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { MessageCircle } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { StructuredData } from "@/components/structured-data";
import { projects } from "@/lib/data";
import { professionalServiceSchema } from "@/lib/seo-data";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Olamide Titus — Operations & Support Specialist",
  description:
    "Remote Operations & Support Specialist. Customer care, executive admin support, and web system automation for growing teams worldwide.",
  path: "/"
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <StructuredData data={professionalServiceSchema("/")} />

      {/* ── 1. HERO SECTION (80vh Mobile & Desktop) ── */}
      <section className="relative w-full h-[80vh] min-h-[80vh] flex flex-col justify-end overflow-hidden bg-slate-900 text-white">
        {/* Background Image: face stays completely bright and unobstructed */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/profile.jpg"
            alt="Hero Background"
            fill
            priority
            quality={95}
            className="object-cover object-[center_15%]"
          />
          {/* Subtle bottom fade only behind the text/buttons at the very bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] sm:h-[50%] bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />
        </div>

        {/* Content brought down towards the bottom */}
        <div className="relative z-10 w-[90%] mx-[5%] pb-8 sm:pb-12 lg:pb-14">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">

            {/* Left Column: Hello! I'm Olamide Titus */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Hello! I&apos;m Olamide <br className="hidden sm:inline" />
                Titus
              </h1>
            </div>

            {/* Right Column: Title + Subtitle + Buttons */}
            <div>
              <h2 className="text-xl sm:text-3xl font-normal tracking-tight text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                An Operations &amp; Support Specialist based in Nigeria.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-200 font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Passionate about scaling customer support, inbox zero, and reliable web workflows for global teams.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-6 py-2.5 text-xs sm:text-sm font-medium !text-slate-950 hover:bg-slate-200 transition shadow-sm"
                  id="hero-whatsapp-cta"
                >
                  Talk with me
                </a>

                <Link
                  href="#works"
                  className="rounded-xl border border-white/40 bg-black/40 backdrop-blur-sm px-6 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 transition"
                  id="hero-see-work"
                >
                  See my work
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. WORKING EXPERIENCE & WORK READINESS (Exact Match to Image 1) ── */}
      <section id="superpowers" className="bg-[#f7f6f2] py-20 sm:py-28 border-b border-slate-200/80">
        <div className="w-[90%] mx-[5%]">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

            {/* Left Column: Working experience */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-8 sm:mb-10">
                Working experience
              </h2>

              <div className="border-y border-slate-200/80 divide-y divide-slate-200/80">
                {/* Row 1 */}
                <div className="flex items-center gap-4 sm:gap-5 py-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <MessageSquare size={22} className="text-slate-900" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-normal text-slate-800 leading-snug">
                      Client operations &amp; support at <span className="font-semibold text-slate-900">Perpetual Dev.</span>
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-400 font-normal">
                      2023 – Present · Client onboarding, chat support &amp; ticketing
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-4 sm:gap-5 py-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <FileText size={22} className="text-slate-900" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-normal text-slate-800 leading-snug">
                      Customer research &amp; data at <span className="font-semibold text-slate-900">Brickfield Road Associates</span>
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-400 font-normal">
                      Field surveys, data accuracy &amp; stakeholder communication
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center gap-4 sm:gap-5 py-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <Workflow size={22} className="text-slate-900" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-normal text-slate-800 leading-snug">
                      Web systems &amp; automation with <span className="font-semibold text-slate-900">n8n &amp; Custom Code</span>
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-400 font-normal">
                      Custom API pipelines, payment gateways &amp; scripts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Work Readiness */}
            <div id="readiness">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-8 sm:mb-10">
                Work readiness
              </h2>

              <div className="border-y border-slate-200/80 divide-y divide-slate-200/80">
                {/* Row 1 */}
                <div className="flex items-center justify-between py-6">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                      <Award size={22} className="text-slate-900" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-normal text-slate-800 leading-snug">
                        Customer Service Hub at <span className="font-semibold text-slate-900">HubSpot Academy</span>
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 font-normal">
                        Certified · 60+ WPM typing speed (98% verified accuracy)
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={19} className="text-slate-800 shrink-0 ml-4" strokeWidth={1.8} />
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between py-6">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                      <Wifi size={22} className="text-slate-900" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-normal text-slate-800 leading-snug">
                        Power &amp; internet at <span className="font-semibold text-slate-900">24/7 Uptime</span>
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 font-normal">
                        Solar inverter backup, 50+ Mbps fiber &amp; 4G failover
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={19} className="text-slate-800 shrink-0 ml-4" strokeWidth={1.8} />
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between py-6">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                      <Clock size={22} className="text-slate-900" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-normal text-slate-800 leading-snug">
                        Timezone overlap for <span className="font-semibold text-slate-900">Global Teams</span>
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 font-normal">
                        EST (9 AM–5 PM) · GMT (7 AM–5 PM) · CET (9 AM–6 PM)
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={19} className="text-slate-800 shrink-0 ml-4" strokeWidth={1.8} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. SELECTED WORKS (Warm Canvas, Clean 2x2 Mockup Cards) ───── */}
      <section id="works" className="bg-[#f7f6f2] py-20 sm:py-28 border-b border-slate-200/80">
        <div className="w-[90%] mx-[5%]">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
              Selected works
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 5).map((project) => (
              <div key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-50 transition shadow-xs"
            >
              <span>View all systems &amp; projects</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. LET'S TALK WITH ME (Exact Inspo Proportions & Spacing) ── */}
      <section id="contact" className="bg-white py-16 sm:py-20 text-center">
        <div className="w-[90%] mx-[5%] max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-normal text-slate-400">
            Have a project or remote role?
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
            Let&apos;s talk with me
          </h2>

          <div className="mt-5 flex justify-center">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-xs sm:text-sm font-medium !text-white hover:bg-slate-800 transition shadow-xs"
              id="cta-talk-button"
            >
              Talk with me
            </a>
          </div>

          <p className="mt-3.5 text-xs font-normal text-slate-400">
            My local time: Lagos, Nigeria · WAT (UTC+1)
          </p>
        </div>
      </section>

    </main>
  );
}
