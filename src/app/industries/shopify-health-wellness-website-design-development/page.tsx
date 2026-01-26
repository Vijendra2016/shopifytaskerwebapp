

import Hero from "../Hero";
import Intro from "../Intro";
import SplitSection from "../SplitSection";
import CaseStudyAccordion from "../CaseStudyAccordion";
import { Metadata } from "next";
import GeoMessage from "@/app/components/GeoMessage";
import BrandEditorial from "../BrandEditorial";
import { healthEditorialBrands } from "../data/healthEditorialBrands";
import type {
  WithContext,
  Service,
  FAQPage,
  Organization,
  WebPage,
  BreadcrumbList,
} from "schema-dts";

/** 1) Organization */
export const orgJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.shopifytasker.com/#organization",
  name: "ShopifyTasker",
  url: "https://www.shopifytasker.com/",
  // Optional:
  // logo: "https://www.shopifytasker.com/path-to-logo.png",
  // sameAs: ["https://www.trustpilot.com/review/shopifytasker.com"],
};

/** 2) WebPage (this industry page) */
export const pageJsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://www.shopifytasker.com/industries/shopify-health-wellness-website-design-development#webpage",
  url: "https://www.shopifytasker.com/industries/shopify-health-wellness-website-design-development",
  name: "Health & Wellness Shopify Website Design & Development | ShopifyTasker",
  description:
    "High-performance eCommerce solutions for Health & Wellness brands—conversion-focused Shopify design, development, optimization, and migration.",
  isPartOf: { "@id": "https://www.shopifytasker.com/#website" } as any,
  about: { "@id": "https://www.shopifytasker.com/#organization" } as any,
};

/** 3) Breadcrumbs */
export const breadcrumbsJsonLd: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.shopifytasker.com/industries/shopify-health-wellness-website-design-development#breadcrumbs",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.shopifytasker.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: "https://www.shopifytasker.com/industries",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Health & Wellness",
      item: "https://www.shopifytasker.com/industries/shopify-health-wellness-website-design-development",
    },
  ],
};

/** 4) Service (Health & Wellness Shopify Website Design & Development) */
export const serviceJsonLd: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.shopifytasker.com/industries/shopify-health-wellness-website-design-development#service",
  name: "Health & Wellness Shopify Website Design & Development",
  serviceType:
    "Conversion-focused Shopify solutions for Health & Wellness brands (design, development, optimization, migration).",
  provider: { "@id": "https://www.shopifytasker.com/#organization" } as any,
  areaServed: "Worldwide",
  // If you want richer “services list” structure, OfferCatalog is commonly used:
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Health & Wellness Shopify Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Strategy",
        itemListElement: [
          { "@type": "Offer", name: "Brand & Store Research for Health & Wellness" },
          { "@type": "Offer", name: "Market & Competitor Analysis" },
          { "@type": "Offer", name: "Conversion & Retention Strategy Planning" },
          { "@type": "Offer", name: "Store Architecture & UX Planning" },
          { "@type": "Offer", name: "Migration & Replatforming Strategy" },
          { "@type": "Offer", name: "Growth Roadmap & Monthly Retainer Planning" },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Identity",
        itemListElement: [
          { "@type": "Offer", name: "Health & Wellness Brand Positioning" },
          { "@type": "Offer", name: "Logo & Visual Identity Setup" },
          { "@type": "Offer", name: "Typography & Color Systems" },
          { "@type": "Offer", name: "Product & Lifestyle Visual Direction" },
          { "@type": "Offer", name: "Brand Guidelines for Consistency" },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Experience",
        itemListElement: [
          { "@type": "Offer", name: "New Shopify Store Design & Build" },
          { "@type": "Offer", name: "Shopify Store Redesign & UX Upgrade" },
          { "@type": "Offer", name: "High-Converting Product & Funnel Pages" },
          { "@type": "Offer", name: "Subscription & Replenishment Experience" },
          { "@type": "Offer", name: "Mobile-First & Speed Optimization" },
          { "@type": "Offer", name: "Conversion Rate Optimization (CRO)" },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Technology",
        itemListElement: [
          { "@type": "Offer", name: "Shopify & Shopify Plus Development" },
          {
            "@type": "Offer",
            name: "Migration from WooCommerce, Magento or Custom Platforms",
          },
          { "@type": "Offer", name: "Custom Theme & Section Building" },
          { "@type": "Offer", name: "App Integrations & Store Automation" },
          { "@type": "Offer", name: "Dedicated Shopify Developer Support" },
          { "@type": "Offer", name: "Monthly Maintenance & Growth Retainers" },
        ],
      },
    ],
  } as any,
};

/** 5) FAQPage (from /faq) */
export const faqJsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.shopifytasker.com/faq#faqpage",
  url: "https://www.shopifytasker.com/faq",
  name: "ShopifyTasker FAQ",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is ShopifyTasker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ShopifyTasker is an on-demand Shopify development partner providing professional Shopify services through a team of experienced and certified experts.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I trust the ShopifyTasker team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ShopifyTasker manages 250+ Shopify stores, follows a no upfront payment policy (pay after completion), and you can review feedback on their reviews page.",
      },
    },
    {
      "@type": "Question",
      name: "There are many freelancers and Shopify Partners—why choose ShopifyTasker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ShopifyTasker follows a no upfront payment policy, allowing you to pay only after the task is completed and approved.",
      },
    },
    {
      "@type": "Question",
      name: "Does ShopifyTasker work with agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ShopifyTasker works with agencies and provides white-label Shopify development and ongoing support services.",
      },
    },
    {
      "@type": "Question",
      name: "Does ShopifyTasker work on weekends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ShopifyTasker works on weekends for emergency or high-priority tasks when required.",
      },
    },
    {
      "@type": "Question",
      name: "What services does ShopifyTasker offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ShopifyTasker provides Shopify design and development services including custom theme development, theme customization, store setup, product migration, small tweaks, custom pages, Shopify SEO, and digital marketing services.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a project or task on ShopifyTasker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a task by submitting the Create Task form, selecting services, describing the task, and providing contact details. Their team responds with timeline and quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How many tasks can I create and how long do they take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can create multiple tasks or projects; completion time depends on type and complexity and is provided in the quotation.",
      },
    },
    {
      "@type": "Question",
      name: "Does ShopifyTasker provide free support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ShopifyTasker provides 15 days of free support for the specific task completed.",
      },
    },
    {
      "@type": "Question",
      name: "How much do ShopifyTasker services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on the task or project; some services have fixed pricing and pricing starts from $20.",
      },
    },
    {
      "@type": "Question",
      name: "Does ShopifyTasker charge upfront payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ShopifyTasker follows a strict no upfront payment policy—you pay only after the work is completed.",
      },
    },
  ],
};

/** Combine them for a single <script type="application/ld+json"> */
export const combinedJsonLd = [
  orgJsonLd,
  pageJsonLd,
  breadcrumbsJsonLd,
  serviceJsonLd,
  faqJsonLd,
];

export const metadata: Metadata = {
  title: "Health & Wellness Shopify Store Design, Redesign & Migration",
  description: 
    "Launch, redesign or migrate your health & wellness Shopify store. Expert Shopify design, development, subscriptions and monthly support.",

 alternates: {
    canonical: "https://shopifytasker.com/industries/shopify-health-wellness-website-design-development/",
  },


  };




export default function IndustryPage() {
  return (
    <>
    {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        // note: App Router server component can safely inline this
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />
      <Hero
        title="Health & Wellness Shopify Website Design & Development | ShopifyTasker"
        subtitle="High-performance eCommerce solutions for Health Wellness brands"
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6975a2fbcd94a67b75206290_glenna-haug-DuNXXPScbJM-unsplash.jpg"
      />

<CaseStudyAccordion/>

      <Intro
        heading="Driving Growth for Health Wellness Stores"
        text="We create fast, conversion-focused Shopify experiences for Health Wellness businesses."
      />

      
      <SplitSection
        title="Built for Performance"
        text="Lightning-fast storefronts optimized for SEO, CRO and mobile."
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg"
      />

     
     
 <BrandEditorial brands={healthEditorialBrands} />

     <GeoMessage/>
    </>
  );
}
