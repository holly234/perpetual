import { absoluteUrl, siteConfig } from "@/lib/site";

export const seoServices = [
  {
    slug: "web-design",
    title: "Web Design Services",
    shortTitle: "Web Design",
    description:
      "Premium responsive web design for businesses that need a clear, modern website built for trust, leads and search visibility.",
    audience: "small businesses, startups, consultants and service companies",
    benefits: ["Clear brand presentation", "Mobile-first layouts", "Conversion-focused page structure", "SEO-ready content hierarchy"],
    process: ["Discovery and positioning", "Sitemap and content planning", "Responsive interface design", "Launch QA and handoff"],
    faqs: [
      ["Do you design websites for small businesses?", "Yes. We design business websites for service companies, local brands, startups and professional teams."],
      ["Will the website work on mobile?", "Yes. Layout, spacing, navigation and calls to action are planned for desktop, tablet and mobile."],
      ["Can you redesign an existing website?", "Yes. We can improve an existing website while preserving useful content, links and brand equity."]
    ]
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization Services",
    shortTitle: "SEO Optimization",
    description:
      "Technical and on-page SEO optimization to help business websites become easier for Google to crawl, understand and rank.",
    audience: "businesses that need stronger search visibility",
    benefits: ["Better metadata and page structure", "Improved crawlability", "Keyword-focused service pages", "Internal linking improvements"],
    process: ["SEO audit", "Metadata and content improvements", "Technical cleanup", "Sitemap, schema and indexing support"],
    faqs: [
      ["Can SEO guarantee first-page rankings?", "No ethical SEO provider can guarantee rankings, but strong technical and content foundations improve visibility potential."],
      ["Do you set up sitemap and robots files?", "Yes. We configure crawl-friendly sitemap and robots files for modern websites."],
      ["Can you improve existing pages?", "Yes. We can improve headings, metadata, copy, internal links, schema and image alt text."]
    ]
  },
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    shortTitle: "Google Business Profile",
    description:
      "Google Business Profile optimization for local businesses that want stronger local discovery, clearer service information and better customer trust.",
    audience: "local businesses and service providers",
    benefits: ["Better local search presence", "Clear service categories", "Improved business information", "Stronger trust signals"],
    process: ["Profile audit", "Category and service cleanup", "Description and media guidance", "Review and posting recommendations"],
    faqs: [
      ["Is Google Business Profile useful for local businesses?", "Yes. It helps customers find core business information, services, reviews, directions and contact options."],
      ["Do you manage reviews?", "We can advise on review strategy and profile presentation, but businesses should collect reviews ethically from real customers."],
      ["Can this support website SEO?", "Yes. A strong local profile and a well-structured website can support each other."]
    ]
  },
  {
    slug: "booking-websites",
    title: "Booking Website Design",
    shortTitle: "Booking Websites",
    description:
      "Booking websites for rentals, hospitality, clinics, beauty brands, consultants and service businesses that need simple appointment or inquiry flows.",
    audience: "service businesses, rental companies, hospitality brands and clinics",
    benefits: ["Clear booking calls to action", "Mobile-friendly inquiry flows", "Service and availability presentation", "Trust-building content sections"],
    process: ["Booking journey planning", "Service page structure", "Form and CTA setup", "Testing across devices"],
    faqs: [
      ["What types of businesses need booking websites?", "Rentals, clinics, salons, hotels, restaurants, consultants and service businesses often benefit from booking-focused websites."],
      ["Can you add booking forms?", "Yes. We can create simple inquiry forms or integrate external booking tools depending on the business workflow."],
      ["Is mobile booking supported?", "Yes. Booking calls to action and forms are designed for mobile visitors."]
    ]
  },
  {
    slug: "business-websites",
    title: "Business Website Design",
    shortTitle: "Business Websites",
    description:
      "Professional business websites for companies that need credibility, service clarity, lead generation and a strong foundation for growth.",
    audience: "small businesses, professional services, logistics teams, schools, ecommerce brands and consultants",
    benefits: ["Professional first impression", "Service clarity", "Lead-focused calls to action", "Scalable page structure"],
    process: ["Business goal review", "Page and content planning", "Design and development", "Launch, analytics and SEO setup"],
    faqs: [
      ["What pages should a business website include?", "Most business websites need a homepage, services, about, contact and relevant industry or service pages."],
      ["Can the site grow later?", "Yes. We structure websites so new services, blog posts and landing pages can be added later."],
      ["Do you write SEO-friendly copy?", "We can improve copy structure, headings, metadata and service descriptions for search visibility."]
    ]
  }
];

export const industries = [
  ["small-businesses", "Small Businesses", "Premium websites and SEO foundations for small businesses that need clearer offers, more trust and better leads."],
  ["startups", "Startups", "Launch-ready websites and product pages for startups that need credibility, speed and room to grow."],
  ["schools", "Schools", "School websites and portals for admissions, programs, events and parent-friendly communication."],
  ["logistics-companies", "Logistics Companies", "Service-led logistics websites that explain capabilities and move visitors toward quote requests."],
  ["car-rental-businesses", "Car Rental Businesses", "Rental websites with strong vehicle presentation, booking intent and mobile-first inquiry flows."],
  ["ecommerce-brands", "Ecommerce Brands", "Product-led website structures for ecommerce brands that need clearer shopping journeys and SEO content."],
  ["restaurants", "Restaurants", "Restaurant websites for menus, reservations, location details and mobile guest journeys."],
  ["healthcare-businesses", "Healthcare Businesses", "Healthcare websites with trustworthy service pages, appointment calls to action and accessible mobile layouts."],
  ["consultants", "Consultants", "Consultant websites built around authority, service clarity, case studies and qualified inquiries."],
  ["beauty-brands", "Beauty Brands", "Beauty and salon websites for service menus, booking prompts, galleries and polished mobile presentation."]
] as const;

export const blogPosts = [
  {
    slug: "website-design-for-small-businesses",
    title: "Website Design for Small Businesses: What a Modern Business Site Needs",
    description:
      "A practical guide to the pages, content, structure and conversion elements a small business website needs to attract better customers.",
    category: "Website Design",
    date: "2026-05-28",
    readTime: "6 min read",
    intro:
      "A small business website should do more than look good. It should explain what the business does, who it serves and why a customer should take the next step.",
    sections: [
      ["Start with clear positioning", "Visitors should understand the service, location or market, and primary call to action within the first screen. Vague portfolio language makes the page harder for both people and search engines to interpret."],
      ["Build pages around services", "Service pages help Google understand the specific work a business offers. A web design page, booking website page or SEO page can target clearer search intent than a generic services overview."],
      ["Make trust easy to scan", "Use case studies, process sections, FAQs, contact details and visible next steps. These elements help customers compare the business quickly."]
    ]
  },
  {
    slug: "seo-basics-for-business-websites",
    title: "SEO Basics for Business Websites",
    description:
      "Core SEO basics for business websites, including metadata, headings, internal links, page speed, schema and useful service content.",
    category: "SEO",
    date: "2026-05-28",
    readTime: "7 min read",
    intro:
      "SEO starts with making a website easy to crawl, understand and use. Strong technical foundations support every content and marketing effort that follows.",
    sections: [
      ["Use descriptive metadata", "Each important page needs a specific title, description and canonical URL. This helps search engines understand the page topic and preferred address."],
      ["Use one clear H1", "A page should have one primary heading that names the topic. Supporting H2 and H3 headings should organize benefits, process, FAQs and calls to action."],
      ["Connect related pages", "Internal links from services, industries, projects and blog posts help users move through the site and help crawlers discover important URLs."]
    ]
  },
  {
    slug: "google-business-profile-optimization-guide",
    title: "Google Business Profile Optimization Guide for Local Visibility",
    description:
      "How local businesses can improve Google Business Profile clarity with categories, services, descriptions, photos and review signals.",
    category: "Google Business Profile",
    date: "2026-05-28",
    readTime: "5 min read",
    intro:
      "A Google Business Profile can become one of the most visible search assets for a local company. It needs accurate information and consistent activity.",
    sections: [
      ["Choose accurate categories", "Categories should reflect the real services customers search for. Incorrect or overly broad categories can weaken local relevance."],
      ["Complete the service information", "Services, descriptions, hours, contact information and photos should be clear and consistent with the website."],
      ["Support the profile with website pages", "A local profile works better when the website has strong service pages, contact information and relevant business content."]
    ]
  },
  {
    slug: "how-a-better-website-supports-business-growth",
    title: "How a Better Website Supports Business Growth",
    description:
      "Why a focused website can improve trust, lead quality, sales conversations and long-term growth for service businesses.",
    category: "Business Growth",
    date: "2026-05-28",
    readTime: "5 min read",
    intro:
      "A good website supports growth by making the business easier to understand and easier to contact. It reduces friction before the first conversation.",
    sections: [
      ["Clarify the offer", "Strong websites explain who the business serves, what problems it solves and what action visitors should take next."],
      ["Improve lead quality", "Service details, FAQs and process sections help filter inquiries before they reach the business."],
      ["Create a foundation for marketing", "SEO, paid ads, social campaigns and referrals all work better when the website has focused landing pages."]
    ]
  },
  {
    slug: "website-speed-and-core-web-vitals",
    title: "Website Speed and Core Web Vitals: Why Performance Matters",
    description:
      "A practical explanation of website speed, image weight, layout stability and mobile performance for business websites.",
    category: "Website Speed",
    date: "2026-05-28",
    readTime: "6 min read",
    intro:
      "Website speed affects user experience and can influence search performance. Business websites should be fast, stable and easy to use on mobile.",
    sections: [
      ["Control image weight", "Large images should be sized properly, compressed and loaded only where needed. Hero images should have stable dimensions to reduce layout shift."],
      ["Avoid unnecessary scripts", "Animations and third-party scripts should support the experience without slowing down the primary content."],
      ["Design for mobile first", "Mobile visitors need readable text, clear buttons and stable layouts that do not jump as content loads."]
    ]
  },
  {
    slug: "improve-online-visibility-for-service-businesses",
    title: "How Service Businesses Can Improve Online Visibility",
    description:
      "Simple ways service businesses can improve online visibility with stronger pages, local signals, SEO content and internal links.",
    category: "Online Visibility",
    date: "2026-05-28",
    readTime: "6 min read",
    intro:
      "Online visibility improves when a business gives search engines and customers a clearer map of its services, industries and proof.",
    sections: [
      ["Create focused service pages", "Each major service should have a dedicated page with benefits, process, FAQs and a call to action."],
      ["Show relevant industries", "Industry pages help customers recognize themselves and help search engines understand the markets the business serves."],
      ["Publish useful articles", "Blog content can answer common questions and link readers toward the right service or contact page."]
    ]
  }
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    }
  };
}

export function professionalServiceSchema(path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: absoluteUrl(path),
    email: siteConfig.email,
    areaServed: siteConfig.markets,
    serviceType: ["Web design", "SEO optimization", "Booking website design", "Business website design", "Google Business Profile optimization"]
  };
}

export function serviceSchema(service: (typeof seoServices)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: siteConfig.markets,
    url: absoluteUrl(`/services/${service.slug}`)
  };
}

export function blogPostingSchema(post: (typeof blogPosts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo)
      }
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
}

