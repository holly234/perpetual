import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { SeasonSwitchPreview } from "@/components/season-switch-preview";
import { StructuredData } from "@/components/structured-data";
import { projects } from "@/lib/data";
import { professionalServiceSchema } from "@/lib/seo-data";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Olamide Titus — Web & Mobile Development",
  description:
    "Web & Mobile Developer. High-converting service funnels, local contractor websites, QR codes, and basic local SEO.",
  path: "/"
});

const faqs = [
  {
    q: "How does the post-holiday transition work without extra charge?",
    a: "When you launch your seasonal site (Christmas lights, snow removal, winter HVAC, or gutter clearing), we engineer it so that in January, we update your headlines, services, photos, and quote forms back to your main year-round trade (like general electrical, landscaping, or remodeling) with zero additional fee."
  },
  {
    q: "What is included in the $300 package?",
    a: "You get a custom high-converting seasonal landing page, high-resolution QR codes for your truck decals and yard signs, basic local SEO optimization for your city/zip codes, fast 48-hour delivery, and the complete free New Year trade transition in January."
  },
  {
    q: "I am an electrician who wants to do Christmas lights for the holidays. Is this for me?",
    a: "Yes, exactly. Electricians, roofers, and landscapers make strong seasonal profits doing holiday lighting, gutter clearing, and snow contracts. With this package, you capture those high-margin holiday leads now, and seamlessly transition your page to your core trade in January."
  },
  {
    q: "How fast can my website go live?",
    a: "Within 24 to 48 hours. Once you share your business name, contact info, and preferred service options, we build, configure, and launch your page immediately so you do not miss peak inquiries."
  },
  {
    q: "How do customer inquiries and quote requests get delivered to me?",
    a: "Directly to your phone. Every site is set up with direct Instagram/Facebook DM links, one-tap mobile calling, and quote request forms so clients can reach you instantly."
  }
];

export default function HomePage() {
  // Exclude internal VA deliverable sheets; display real web systems only
  const displayProjects = projects.filter(
    (project) => project.slug !== "client-lead-cleanup" && project.slug !== "executive-notion-hub"
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <StructuredData data={professionalServiceSchema("/")} />

      {/* ── 1. HERO SECTION (80vh Automatic Image & Content Slideshow) ── */}
      <HeroSlideshow />

      {/* ── 2. INTERACTIVE 2-IN-1 TRADE SWITCH & $300 PACKAGE PREVIEW ── */}
      <SeasonSwitchPreview />

      {/* ── 3. SELECTED WORKS (Real Web Development Systems Only) ── */}
      <section id="works" className="bg-[#f7f6f2] py-20 sm:py-28 border-b border-slate-200/80">
        <div className="w-[90%] mx-[5%]">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
              Selected works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
              Real high-performing booking platforms, lead generation systems, and mobile-friendly websites built for businesses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {displayProjects.map((project) => (
              <div key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 transition shadow-xs"
            >
              <span>View all systems &amp; projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. FREQUENTLY ASKED QUESTIONS (Clean Editorial Accordion) ── */}
      <section id="faq" className="bg-white py-20 sm:py-28 border-b border-slate-200/80">
        <div className="w-[90%] mx-[5%] max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>



    </main>
  );
}
