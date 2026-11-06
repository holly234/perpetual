"use client";

import { useState } from "react";
import { ArrowRight, QrCode, Search, RefreshCw, Check } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SeasonSwitchPreview() {
  const [mode, setMode] = useState<"holiday" | "core">("holiday");

  const igUrl = `${siteConfig.social.instagram}?ig_message=Hi%20Olamide,%20I%27m%20interested%20in%20the%20%24300%20seasonal%20site%20package.`;

  return (
    <section id="services" className="bg-[#f7f6f2] py-20 sm:py-28 border-b border-slate-200/80">
      <div className="w-[90%] mx-[5%] max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-sm font-medium text-slate-500 mb-2">$300 flat · 2-in-1 deal</p>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
            One site. Two seasons. Zero extra charge.
          </h2>

          {/* Toggle */}
          <div className="mt-7 inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300/70">
            <button
              type="button"
              onClick={() => setMode("holiday")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                mode === "holiday"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🎄 Nov – Dec
            </button>
            <button
              type="button"
              onClick={() => setMode("core")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                mode === "core"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚡ Jan & Beyond
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">

          {/* Left — Live Demo Card */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {mode === "holiday" ? "Active today" : "After New Year"}
                </span>
                <p className="text-base font-semibold text-slate-900 mt-1">
                  Apex Electrical & Services
                </p>
              </div>

              {/* Sticker */}
              {mode === "holiday" ? (
                <div className="-rotate-6 shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-red-600 border-[3px] border-white outline outline-2 outline-red-600 shadow-lg shadow-red-600/40 text-white text-center leading-tight select-none">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-80">promo</p>
                    <p className="text-[15px] font-black uppercase leading-none">LIVE</p>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-80">now</p>
                  </div>
                </div>
              ) : (
                <div className="rotate-6 shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 border-[3px] border-white outline outline-2 outline-blue-600 shadow-lg shadow-blue-600/40 text-white text-center leading-tight select-none">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-80">jan</p>
                    <p className="text-[15px] font-black uppercase leading-none">FREE</p>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-80">flip</p>
                  </div>
                </div>
              )}
            </div>

            {/* Mock Site Preview */}
            <div className="rounded-xl border border-slate-150 bg-[#faf9f6] p-6 mb-5">
              <h3 className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug">
                {mode === "holiday"
                  ? "Custom Roofline Christmas Lighting & Holiday Displays."
                  : "Licensed Electrical Contracting, Panel Upgrades & EV Chargers."}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {mode === "holiday"
                  ? "Fast residential bookings. Commercial-grade lights. Full takedown included."
                  : "Residential & commercial. Panel replacements, troubleshooting, 24/7 calls."}
              </p>
              <span className="mt-5 inline-block rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white">
                {mode === "holiday" ? "Get Lighting Quote" : "Request Electrical Estimate"}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-slate-500">
              <RefreshCw size={14} className="shrink-0" />
              <span>
                {mode === "holiday"
                  ? "Tap 'Jan & Beyond' to see the flip."
                  : "Swapped overnight in January. No downtime. No extra invoice."}
              </span>
            </div>
          </div>

          {/* Right — Package Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <div>
                <h3 className="text-xl font-medium text-slate-900">What's included</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-medium text-slate-900">$300</span>
                <span className="block text-xs text-slate-400 mt-0.5">one-time</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900 shrink-0 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <strong className="text-slate-900 font-medium">Seasonal website</strong>
                  <p className="text-sm text-slate-500 mt-0.5">Built for your trade — lights, HVAC, gutters, snow.</p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900 shrink-0 mt-0.5">
                  <QrCode size={16} />
                </div>
                <div>
                  <strong className="text-slate-900 font-medium">Truck & yard sign QR code</strong>
                  <p className="text-sm text-slate-500 mt-0.5">High-res, links straight to your quote form.</p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900 shrink-0 mt-0.5">
                  <Search size={16} />
                </div>
                <div>
                  <strong className="text-slate-900 font-medium">Basic local SEO</strong>
                  <p className="text-sm text-slate-500 mt-0.5">Meta titles + local keywords for your city.</p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <RefreshCw size={16} />
                </div>
                <div>
                  <strong className="text-slate-900 font-medium">Free January switch</strong>
                  <p className="text-sm text-slate-500 mt-0.5">We flip your site to your main trade. No extra charge.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={siteConfig.social.messenger}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-medium !text-white hover:bg-slate-800 transition shadow-xs"
              >
                <span>DM me on Facebook</span>
                <ArrowRight size={15} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
              >
                or Instagram DM
              </a>
              <p className="text-center text-xs text-slate-400">
                48-hr delivery · No monthly fees
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
