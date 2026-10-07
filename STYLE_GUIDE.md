# Design System & Style Guide — Olamide Titus Portfolio

This style guide establishes the strict visual tokens, layout rules, and component patterns for the portfolio, matching the minimal editorial aesthetic of the reference designs.

---

## 1. Core Principles

1. **Monochrome Calm over Color Riot**: 
   * Strict ban on random saturated colors (`text-blue-600`, `bg-emerald-500`, `bg-purple-100`, etc.).
   * Accents are subtle slate neutrals, deep black, and soft warm stone.
2. **High-End Editorial Typography**:
   * Section headings and titles are `font-normal` (or `font-medium`), never heavy uppercase blocks.
   * Key brand/tool highlights use `font-semibold text-slate-900`.
   * Descriptions and metadata use `text-slate-400` / `text-slate-500`.
3. **Refined Geometry (No Over-Rounded Stadium Pills)**:
   * **Buttons**: Clean rounded rectangles with 8px radius (`rounded-lg`), NOT `rounded-full`.
   * **Cards**: `rounded-2xl` (16px to 20px).
   * **Icon Containers & Mockup Pads**: `rounded-xl` to `rounded-2xl` (12px to 16px).
4. **Desktop Grid & Container**:
   * Content width is strictly **90%** with **5% margin** on left and right (`w-[90%] mx-[5%]`).

---

## 2. Color Palette & Tokens

| Token | Hex / Class | Usage |
| :--- | :--- | :--- |
| **Canvas Pure White** | `#ffffff` (`bg-white`) | Hero, Contact, Project Details, Navbar/Footer |
| **Canvas Warm Stone** | `#f7f6f2` (`bg-[#f7f6f2]`) | Working Experience, Work Readiness, Selected Works, Testimonials |
| **Mockup Surface Pad**| `#f4f3ee` (`bg-[#f4f3ee]`) | Inset background inside work preview cards |
| **Card Surface** | `#ffffff` (`bg-white`) | Project cards, review cards |
| **Text Primary** | `#0f172a` (`text-slate-900`) | Headings, titles, high-priority labels |
| **Text Secondary** | `#475569` (`text-slate-600`) | Main descriptions, body copy |
| **Text Muted** | `#94a3b8` / `#64748b` (`text-slate-400`) | Timelines, categories, micro-copy |
| **Borders & Dividers**| `#e5e3dc` / `border-slate-200/80` | Subtle horizontal dividers and card borders |
| **Primary Buttons** | `#000000` (`bg-black text-white`) | Primary actions ("Talk with me", "View detail works") |
| **Secondary Buttons**| `#ffffff` (`bg-white text-slate-800 border-slate-200`)| Secondary actions ("See my work") |

---

## 3. Component Standards

### A. Button Standards (Strict 8px Radius)
```tsx
// Primary Solid Action Button
<button className="rounded-lg bg-black px-5 py-2.5 text-xs sm:text-sm font-medium !text-white hover:bg-slate-800 transition">
  Label
</button>

// Secondary Outlined Action Button
<button className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-50 transition">
  Label
</button>
```
*Never use `rounded-full` for content or project buttons.*

### B. Project Showcase Cards
* **Container**: `bg-white rounded-2xl border border-slate-200/70 p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]`
* **Mockup Pad**: `bg-[#f4f3ee] rounded-xl p-3.5 sm:p-4 aspect-[16/10]`
* **Image**: Single widescreen hero screen inside `rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-200/60`
* **Title**: `text-xl sm:text-2xl font-normal text-slate-900 tracking-tight`
* **Category/Date**: `text-xs text-slate-400 font-normal mt-1` (No blue text, no loud tags)
* **Summary**: `text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2.5 line-clamp-2`
* **CTA**: `rounded-lg bg-black px-4 py-2 text-xs font-medium !text-white`

### C. Experience & Readiness Rows
* **Section Canvas**: `bg-[#f7f6f2] py-20 sm:py-28 border-b border-slate-200/80`
* **Divider**: `border-y border-slate-200/80 divide-y divide-slate-200/80`
* **Row**: `flex items-center justify-between py-6 sm:py-7`
* **Icon Box**: `w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]`
* **Arrow**: Diagonal arrow `↗` on readiness/award rows (`ArrowUpRight size={19} className="text-slate-800"`).

### D. Automation Skills Rule
* Only list **n8n** and **Custom Code (APIs, webhooks, scripts)**.
* **Strict prohibition:** Do NOT mention Zapier or Make.com anywhere in the site.
