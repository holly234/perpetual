// Core superpowers — what Olamide takes off your plate
export const superpowers = [
  {
    id: "customer-care",
    icon: "💬",
    title: "Customer Care & Live Chat",
    tagline: "<15 min response turnaround",
    bullets: [
      "Zendesk, Intercom, Freshdesk fluency",
      "Ticket triage & escalation management",
      "Empathetic, brand-aligned tone",
      "CSAT-focused resolution workflows"
    ]
  },
  {
    id: "exec-admin",
    icon: "📋",
    title: "Executive & Admin Support",
    tagline: "Inbox Zero. Always.",
    bullets: [
      "Email & calendar management (Gmail, Outlook)",
      "Notion & Asana project coordination",
      "Meeting notes, SOPs & documentation",
      "Research, reporting & data entry"
    ]
  },
  {
    id: "web-automation",
    icon: "⚙️",
    title: "Web Systems & Automation",
    tagline: "Integrations that save you hours",
    bullets: [
      "Booking funnels & payment workflows",
      "n8n & custom code automations",
      "Basic bug fixes & CMS updates",
      "Website QA & go-live checklists"
    ]
  }
];

// Work readiness specs
export const workReadiness = {
  hardware: [
    { label: "Device", value: "Fast PC — 16GB RAM, SSD" },
    { label: "Audio", value: "Noise-cancelling headset + backup mic" },
    { label: "Camera", value: "HD webcam for video calls" }
  ],
  infrastructure: [
    { label: "Internet", value: "50+ Mbps fiber broadband" },
    { label: "Backup", value: "Mobile hotspot failover" },
    { label: "Power", value: "24/7 inverter + generator backup" }
  ],
  availability: [
    { label: "EST overlap", value: "2 PM – 10 PM WAT (9 AM – 5 PM EST)" },
    { label: "GMT overlap", value: "8 AM – 6 PM WAT (7 AM – 5 PM GMT)" },
    { label: "CET overlap", value: "8 AM – 5 PM WAT (9 AM – 6 PM CET)" },
    { label: "Response SLA", value: "< 15 min during working hours" }
  ]
};

// Projects reframed as business operations solutions
export const projects = [
  {
    slug: "vip-rentals",
    title: "VIP Rentals Booking System",
    category: "Booking Funnel",
    operationsLabel: "Booking & Payment Workflow",
    summary: "Luxury car rental platform with a full online booking funnel — request form, calendar availability, and conversion-focused confirmation flow.",
    businessImpact: "Replaced manual WhatsApp bookings with an automated online system, cutting admin time by ~70%.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80"
    ],
    stack: ["WordPress", "Booking Integration", "Payment Workflow"],
    metrics: ["Automated booking flow", "Availability calendar", "Confirmation emails"],
    challenge: "Owner was manually handling every booking via WhatsApp — high drop-off, no records.",
    solution: "Built a full booking funnel with automated availability, form-based inquiry capture, and payment workflow — zero manual overhead for the owner.",
    liveUrl: "https://viprentalsno.com",
    embedUrl: "https://viprentalsno.com",
    previewType: "Live project"
  },
  {
    slug: "futeball-for-all-demo",
    title: "Futeball For All Catalog",
    category: "Product Catalog & Order Flow",
    operationsLabel: "E-Commerce Operations",
    summary: "Football jersey ecommerce with product catalog, cart management, and WhatsApp/Instagram social checkout flow.",
    businessImpact: "Structured a previously DM-based sales process into a browsable catalog with clear order paths.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80"
    ],
    stack: ["Ecommerce UX", "Catalog System", "WhatsApp Checkout"],
    metrics: ["Product filtering", "Cart management", "Social order routing"],
    challenge: "Sales were scattered across DMs with no product structure, leading to lost orders and confusion.",
    solution: "Designed a browsable product catalog with cart flow and direct WhatsApp/Instagram checkout prompts — gave the business a scalable sales process.",
    liveUrl: "https://fj-demo-zeta.vercel.app/",
    embedUrl: "https://fj-demo-zeta.vercel.app/",
    previewType: "Live demo"
  },
  {
    slug: "car-detailing-demo",
    title: "Auto Detailing Service Site",
    category: "Lead Generation",
    operationsLabel: "Lead Capture System",
    summary: "Auto detailing website with service packages, trust-building content, and booking-focused CTAs that turn visitors into booked clients.",
    businessImpact: "Structured service offering and added a clear lead capture path — reduced friction between visit and first contact.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80"
    ],
    stack: ["Next.js", "Service Pages", "CTA Optimization"],
    metrics: ["Package pricing", "Lead CTAs", "Mobile-first layout"],
    challenge: "Business had no web presence — potential clients couldn't verify services or prices before calling.",
    solution: "Built a clear service site with package breakdown, social proof sections, and a direct booking path to reduce drop-off.",
    liveUrl: "https://demo-car-detailing.vercel.app/",
    embedUrl: "https://demo-car-detailing.vercel.app/",
    previewType: "Live demo"
  },
  {
    slug: "p-chow-restaurant",
    title: "P-Chow Restaurant",
    category: "Reservation System",
    operationsLabel: "Table Reservation Workflow",
    summary: "Refined restaurant website with seasonal menu presentation and a direct table reservation experience that reduces no-shows.",
    businessImpact: "Replaced a phone-only reservation system with an always-available online booking flow.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    stack: ["Restaurant Website", "Reservation UX", "Menu System"],
    metrics: ["Seasonal menu display", "Reservation flow", "Dining atmosphere"],
    challenge: "Diners had to call to check menu and book — high friction, missed opportunities outside business hours.",
    solution: "Editorial dining site with menus, atmosphere storytelling, and 24/7 online reservation flow.",
    liveUrl: "https://r-demo.vercel.app/",
    embedUrl: "https://r-demo.vercel.app/",
    previewType: "Live demo"
  },
  {
    slug: "car-rental-demo",
    title: "Car Rental Platform",
    category: "Vehicle Booking",
    operationsLabel: "Rental Management System",
    summary: "Car rental website with vehicle browsing, fleet display, and conversion-focused rental flow.",
    businessImpact: "Gave a rental business a 24/7 self-serve fleet discovery system in place of manual enquiries.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
    ],
    stack: ["Next.js", "Rental UX", "Responsive UI"],
    metrics: ["Fleet browsing", "Rental CTAs", "Mobile-first"],
    challenge: "Customers had no self-serve way to browse available vehicles — all enquiries went through the owner.",
    solution: "Clean rental platform with vehicle cards, pricing, and direct booking CTAs to handle enquiries automatically.",
    liveUrl: "https://demo-car-rental-ten.vercel.app/",
    embedUrl: "https://demo-car-rental-ten.vercel.app/",
    previewType: "Live demo"
  },
  {
    slug: "dog-groomer-demo",
    title: "Dog Groomer Appointment Site",
    category: "Appointment Booking",
    operationsLabel: "Appointment Scheduling System",
    summary: "Pet grooming website with service cards, appointment-focused content, and trust-building sections for local clients.",
    businessImpact: "Turned a social-media-only grooming business into a credible, bookable local service.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80"
    ],
    stack: ["Next.js", "Appointment UX", "Local SEO"],
    metrics: ["Service cards", "Appointment CTAs", "Trust sections"],
    challenge: "Groomer relied solely on Instagram DMs for bookings — no web presence, no credibility signals.",
    solution: "A warm, clear local-service site with service grouping, appointment prompts and social proof to boost conversions.",
    liveUrl: "https://demo-dog-groomer.vercel.app/",
    embedUrl: "https://demo-dog-groomer.vercel.app/",
    previewType: "Live demo"
  },
  {
    slug: "canopy-root-arborist-demo",
    title: "Canopy & Root Arborist",
    category: "Field Service Website",
    operationsLabel: "Field Service Operations",
    summary: "One-page arborist website with emergency CTA, machinery proof, services and project gallery — built for credibility and quick contact.",
    businessImpact: "Established web credibility for a field-service business competing against larger contractors.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Worker_trimming_a_tree_next_to_a_house.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Worker_trimming_a_tree_next_to_a_house.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Rotor_stump_grinder_at_work.jpg"
    ],
    stack: ["One-page Website", "Emergency CTA", "Service Gallery"],
    metrics: ["Emergency response CTA", "Equipment showcase", "Gallery proof"],
    challenge: "Field service business had no digital proof of work — clients couldn't verify capability or equipment.",
    solution: "A fast-loading single-page site with service proof, machinery showcase, and a prominent emergency inquiry path.",
    liveUrl: "https://arborist-demo.vercel.app/",
    embedUrl: "https://arborist-demo.vercel.app/",
    previewType: "Live demo"
  }
];

// Services (keeping for SEO pages that reference this)
export const services = [
  {
    title: "Customer Care & Live Chat",
    text: "Fast, empathetic ticket resolution across Zendesk, Intercom, and email — with < 15 min response targets and CSAT-focused workflows."
  },
  {
    title: "Executive & Admin Support",
    text: "Inbox zero management, calendar coordination, Notion/Asana project tracking, SOP writing and business reporting."
  },
  {
    title: "Web Systems & Automation",
    text: "Booking funnels, payment workflows, n8n automations, custom code integrations, CMS updates and go-live checklists that save your team hours every week."
  },
  {
    title: "Operations Coordination",
    text: "Cross-team coordination, vendor communication, meeting facilitation and operational reporting for growing remote teams."
  },
  {
    title: "Data Entry & Research",
    text: "Accurate CRM data entry, lead research, competitor tracking and business intelligence reports delivered on schedule."
  },
  {
    title: "Onboarding & Documentation",
    text: "Client onboarding flows, team SOPs, training materials and help desk documentation that reduce repeat questions."
  }
];

export const faqs = [
  {
    q: "What time zone do you work in?",
    a: "I'm based in Nigeria (WAT) and fully overlap with EST (9 AM–5 PM), GMT (7 AM–5 PM), and CET (9 AM–6 PM) — whichever your team needs."
  },
  {
    q: "What tools do you know?",
    a: "Zendesk, Intercom, Freshdesk, Gmail, Outlook, Notion, Asana, Trello, n8n, Custom APIs/Code, Google Workspace, Slack, and most major CRMs."
  },
  {
    q: "Can you start immediately?",
    a: "Yes. I'm available for immediate start on full-time or part-time remote contracts. I have backup power and internet so you'll never lose me mid-shift."
  }
];

// Marquee skills for the ticker strip
export const marqueeItems = [
  "Customer Support", "Inbox Zero", "Zendesk", "Asana", "Notion",
  "Live Chat", "n8n", "Custom Code", "Booking Funnels", "Executive Support", "Automation",
  "GMT Overlap", "EST Overlap", "Remote-Ready", "24/7 Backup Power"
];
