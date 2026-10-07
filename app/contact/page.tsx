import type { Metadata } from "next";
import { Mail, MessageCircle, Download, Clock, MapPin, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { MotionDiv, fadeUp } from "@/components/motion";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Olamide Titus — Let's Talk",
  description:
    "Get in touch with Olamide Titus — Operations & Support Specialist. Available via email, WhatsApp, or LinkedIn for remote roles worldwide.",
  path: "/contact"
});

const contactChannels = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: "Send an email",
    color: "text-slate-900",
    description: "Best for detailed role briefs, job specifications, and contracts."
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 703 974 2741",
    href: siteConfig.social.whatsapp,
    cta: "Chat on WhatsApp",
    color: "text-slate-900",
    description: "Fastest response — typically under 15 minutes during business hours."
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Olamide Titus",
    href: siteConfig.social.linkedin,
    cta: "Connect on LinkedIn",
    color: "text-slate-900",
    description: "Full work history, recommendations, and verified credentials."
  }
];

export default function ContactPage() {
  return (
    <main className="contact-screen py-8 sm:py-14">
      <section className="container-page">
        <div className="max-w-3xl border-b border-slate-200 pb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Get In Touch</span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-[1.05]">
            Let&apos;s streamline your operations.
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Ready to hire or looking to discuss how I can take the operational load off your plate? Reach out via any channel below.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin size={15} className="text-slate-700" />
              Lagos, Nigeria · WAT (UTC+1)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={15} className="text-slate-700" />
              EST · GMT · CET Working Overlap Available
            </span>
          </div>
        </div>

        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="py-10"
        >
          {/* Channel Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.id}
                  id={`contact-${channel.id}`}
                  href={channel.href}
                  target={channel.id !== "email" ? "_blank" : undefined}
                  rel={channel.id !== "email" ? "noreferrer" : undefined}
                  className="contact-channel-card group"
                >
                  <Icon size={24} className={channel.color} />
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900 break-words">
                    {channel.value}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {channel.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-slate-900 transition-all group-hover:gap-2">
                    {channel.cta} <ArrowRight size={13} />
                  </span>
                </a>
              );
            })}
          </div>

          {/* CV Download Strip */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6 sm:p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Resume &amp; Credentials</span>
              <h2 className="mt-1 text-xl font-normal text-slate-900">Download My Full CV</h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Detailed track record, tools proficiency, SLA metrics, and references.
              </p>
            </div>
            <a
              href={siteConfig.cv}
              download
              id="contact-download-cv"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-xs sm:text-sm font-medium !text-white hover:bg-slate-800 transition"
            >
              <Download size={16} />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Availability & Infrastructure Card */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Immediate Availability &amp; Readiness
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Available immediately for full-time or part-time remote roles. Powered by 24/7 solar inverter backup, 50+ Mbps fiber broadband with cellular failover, and verified quiet remote workspace ready for async coordination and live client communications.
            </p>
          </div>
        </MotionDiv>
      </section>
    </main>
  );
}
