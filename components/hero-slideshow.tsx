"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const slides = [
  {
    id: "christmas-lights",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1920&q=80",
    alt: "House covered in Christmas lights and decorations",
    title: "Christmas Light Installation Sites",
    subtitle: "High-ticket residential & commercial roofline funnels ready in 48 hours.",
    cta: "Launch your lighting site"
  },
  {
    id: "christmas-house-2",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1920&q=80",
    alt: "American house with Christmas lights at night",
    title: "Winter HVAC & Heating Pages",
    subtitle: "Emergency furnace repair & seasonal tune-up tap-to-call booking funnels.",
    cta: "Launch your HVAC site"
  },
  {
    id: "snow-house",
    image: "https://images.unsplash.com/photo-1547754980-3df97fed72a8?auto=format&fit=crop&w=1920&q=80",
    alt: "House covered in snow with Christmas lights",
    title: "Snow Removal & Ice Hubs",
    subtitle: "Driveway plowing & commercial winter contract signups with instant quote capture.",
    cta: "Launch your snow site"
  },
  {
    id: "festive-street",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1920&q=80",
    alt: "Festive house exterior with lights at night",
    title: "Holiday E-Commerce Stores",
    subtitle: "Fast product catalogs, seasonal drops & direct DM checkout flows.",
    cta: "Launch your online store"
  },
  {
    id: "christmas-lights-5",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80",
    alt: "White American home with Christmas light display on roof",
    title: "Gutter Cleaning & Shield Sites",
    subtitle: "Pre-winter debris clearing & gutter guard funnels for exterior contractors.",
    cta: "Launch your gutter site"
  }
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  // Automatic slideshow rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[current];

  return (
    <section className="relative w-full h-[80vh] min-h-[80vh] flex flex-col justify-end overflow-hidden bg-slate-900 text-white">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              quality={90}
              className="object-cover object-center scale-[1.02] transition-transform duration-7000 ease-out"
            />
          </div>
        ))}

        {/* Clean subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] sm:h-[55%] bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent pointer-events-none" />
      </div>

      {/* Streamlined, Single-Statement Hero Content */}
      <div className="relative z-10 w-[90%] mx-[5%] pb-8 sm:pb-12 lg:pb-14">
        <div className="max-w-2xl">

          {/* Subtle Category Tag */}
          <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-300/90 mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Web &amp; Mobile Development
          </p>

          {/* Single Dynamic Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {activeSlide.title}
          </h1>

          {/* Clean 1-Line Subtitle */}
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-200 font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] max-w-lg">
            {activeSlide.subtitle}
          </p>

          {/* CTA — Facebook + Instagram DM */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <a
              href={siteConfig.social.messenger}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-medium !text-slate-950 hover:bg-slate-200 transition shadow-lg active:scale-95"
              id="hero-fb-cta"
            >
              <span>{activeSlide.cta}</span>
              <ArrowRight size={15} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 border border-white/40 px-5 py-3.5 text-sm font-medium !text-white hover:bg-white/30 transition backdrop-blur-sm active:scale-95"
            >
              Instagram DM
            </a>
          </div>

          {/* Subtle Progress Bar */}
          <div className="mt-6 flex items-center gap-2 opacity-50">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
