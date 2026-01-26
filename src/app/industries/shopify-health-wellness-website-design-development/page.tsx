import Hero from "../Hero";
import Intro from "../Intro";
import SplitSection from "../SplitSection";
import CaseStudyAccordion from "../CaseStudyAccordion";
import type { Metadata } from "next";
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
  WebSite,
  OfferCatalog,
  Offer,
} from "schema-dts";

export const metadata: Metadata = {
  title: "Health & Wellness Shopify Store Design, Redesign & Migration",
  description:
    "Launch, redesign or migrate your health & wellness Shopify store. Expert Shopify design, development, subscriptions and monthly support.",
  alternates: {
    canonical:
      "https://shopifytasker.com/industries/shopify-health-wellness-website-design-development/",
  },
};

const orgId = "https://www.shopifytasker.com/#organization";
const websiteId = "https://www.shopifytasker.com/#website";
const pageUrl =
  "https://www.shopifytasker.com/industries/shopify-health-wellness-website-design-development/";
const pageId = `${pageUrl}#webpage`;
const breadcrumbId = `${pageUrl}#breadcrumbs`;
const serviceId = `${pageUrl}#service`;
const faqId = `${pageUrl}#faq`;

/** 0) (Optional but good) WebSite */
export const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: "https://www.shopifytasker.com/",
  name: "ShopifyTasker",
  publisher: { "@id": orgId },
};

/** 1) Organization */
export const orgJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: "ShopifyTasker",
  url: "https://www.shopifytasker.com/",
};

/** 2) WebPage */
export const pageJsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": pageId,
  url: pageUrl,
  name: "Health & Wellness Shopify Website Design & Development | ShopifyTasker",
  description:
    "High-performance eCommerce solutions for Health & Wellness brands—conversion-focused Shopify design, development, optimization, and migration.",
  isPartOf: { "@id": websiteId },
  about: { "@id": orgId },
};

/** 3) Breadcrumbs */
export const breadcrumbsJsonLd: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": breadcrumbId,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shopifytasker.com/" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.shopifytasker.com/industries" },
    { "@type": "ListItem", position: 3, name: "Health & Wellness", item: pageUrl },
  ],
};

/** 4) Offer catalog (typed, no any) */
const offerCatalog: OfferCatalog = {
  "@type": "OfferCatalog",
  name: "Health & Wellness Shopify Services",
  itemListElement: [
    {
      "@type": "OfferCatalog",
      name: "Strategy",
      itemListElement: [
        { "@type": "Offer", name: "Brand & Store Research for Health & Wellness" } as Offer,
        { "@type": "Offer", name: "Market & Competitor Analysis" } as Offer,
        { "@type": "Offer", name: "Conversion & Retention Strategy Planning" } as Offer,
        { "@type": "Offer", name: "Store Architecture & UX Planning" } as Offer,
        { "@type": "Offer", name: "Migration & Replatforming Strategy" } as Offer,
        { "@type": "Offer", name: "Growth Roadmap & Monthly Retainer Planning" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Identity",
      itemListElement: [
        { "@type": "Offer", name: "Health & Wellness Brand Positioning" } as Offer,
        { "@type": "Offer", name: "Logo & Visual Identity Setup" } as Offer,
        { "@type": "Offer", name: "Typography & Color Systems" } as Offer,
        { "@type": "Offer", name: "Product & Lifestyle Visual Direction" } as Offer,
        { "@type": "Offer", name: "Brand Guidelines for Consistency" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Experience",
      itemListElement: [
        { "@type": "Offer", name: "New Shopify Store Design & Build" } as Offer,
        { "@type": "Offer", name: "Shopify Store Redesign & UX Upgrade" } as Offer,
        { "@type": "Offer", name: "High-Converting Product & Funnel Pages" } as Offer,
        { "@type": "Offer", name: "Subscription & Replenishment Experience" } as Offer,
        { "@type": "Offer", name: "Mobile-First & Speed Optimization" } as Offer,
        { "@type": "Offer", name: "Conversion Rate Optimization (CRO)" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Technology",
      itemListElement: [
        { "@type": "Offer", name: "Shopify & Shopify Plus Development" } as Offer,
        { "@type": "Offer", name: "Migration from WooCommerce, Magento or Custom Platforms" } as Offer,
        { "@type": "Offer", name: "Custom Theme & Section Building" } as Offer,
        { "@type": "Offer", name: "App Integrations & Store Automation" } as Offer,
        { "@type": "Offer", name: "Dedicated Shopify Developer Support" } as Offer,
        { "@type": "Offer", name: "Monthly Maintenance & Growth Retainers" } as Offer,
      ],
    },
  ],
};

/** 4) Service */
export const serviceJsonLd: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceId,
  name: "Health & Wellness Shopify Website Design & Development",
  serviceType:
    "Conversion-focused Shopify solutions for Health & Wellness brands (design, development, optimization, migration).",
  provider: { "@id": orgId },
  areaServed: "Worldwide",
  hasOfferCatalog: offerCatalog,
};

/** 5) FAQPage (IMPORTANT: better to use only FAQs that appear on THIS page) */
export const faqJsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": faqId,
  url: pageUrl,
  name: "Health & Wellness Shopify FAQ",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build Shopify stores for Health & Wellness brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes—ShopifyTasker designs and develops high-performance Shopify stores for Health & Wellness brands with a focus on UX, SEO, and conversions.",
      },
    },
  ],
};

/** Combine for one script */
export const combinedJsonLd = [
  websiteJsonLd,
  orgJsonLd,
  pageJsonLd,
  breadcrumbsJsonLd,
  serviceJsonLd,
  faqJsonLd,
];

export default function IndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />

      <Hero
        title="Health & Wellness Shopify Website Design & Development | ShopifyTasker"
        subtitle="High-performance eCommerce solutions for Health Wellness brands"
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6975a2fbcd94a67b75206290_glenna-haug-DuNXXPScbJM-unsplash.jpg"
      />

      <CaseStudyAccordion />

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
      <GeoMessage />
    </>
  );
}
