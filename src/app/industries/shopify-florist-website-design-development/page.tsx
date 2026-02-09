import type { Metadata } from "next";
import Hero from "../Hero";
import Intro from "../Intro";
import CaseStudyAccordion from "../CaseStudyAccordion";
import TestimonialCard from "@/app/components/TestimonialCard";
import GeoMessage from "@/app/components/GeoMessage";
import FaqSection from "./FaqSection";
import CaseStudiesCraftberry from "./CaseStudiesCraftberry";
import { Faqs } from "./FaqsSchema";

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

/* ============================
   META DATA
============================ */

export const metadata: Metadata = {
  title: "Shopify Florist Website Design & Development | Flower Shop Experts",
  description:
    "Custom Shopify website design & development for florists and flower shops. Local delivery, subscriptions, SEO, redesigns, and Shopify Plus support.",
  alternates: {
    canonical:
      "https://www.shopifytasker.com/industries/shopify-florist-website-design-development/",
  },
  openGraph: {
    type: "website",
    siteName: "ShopifyTasker",
    url: "https://www.shopifytasker.com/industries/shopify-florist-website-design-development/",
    title: "Shopify Florist Website Design & Development",
    description:
      "High-converting Shopify websites for florists, flower shops, and floral brands. Built for local delivery and subscriptions.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697c64a164079bf96470b7ee_pjh-kMzDfWWojsU-unsplash%20(1).jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Florist Website Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Florist Website Design & Development",
    description:
      "Shopify experts for florists. Local delivery, bouquet subscriptions, SEO, redesigns & Shopify Plus.",
    images: [
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697c64a164079bf96470b7ee_pjh-kMzDfWWojsU-unsplash%20(1).jpg",
    ],
  },
};

/* ============================
   SCHEMA IDS
============================ */

const orgId = "https://www.shopifytasker.com/#organization";
const websiteId = "https://www.shopifytasker.com/#website";
const pageUrl =
  "https://www.shopifytasker.com/industries/shopify-florist-website-design-development/";
const pageId = `${pageUrl}#webpage`;
const breadcrumbId = `${pageUrl}#breadcrumbs`;
const serviceId = `${pageUrl}#service`;
const faqId = `${pageUrl}#faq`;

/* ============================
   SCHEMA: WEBSITE
============================ */

const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: "https://www.shopifytasker.com/",
  name: "ShopifyTasker",
  publisher: { "@id": orgId },
};

/* ============================
   SCHEMA: ORGANIZATION
============================ */

const orgJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: "ShopifyTasker",
  url: "https://www.shopifytasker.com/",
};

/* ============================
   SCHEMA: WEBPAGE
============================ */

const pageJsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": pageId,
  url: pageUrl,
  name: "Shopify Florist Website Design & Development | ShopifyTasker",
  description:
    "Conversion-focused Shopify website design and development for florists, flower shops, and floral brands.",
  isPartOf: { "@id": websiteId },
  about: { "@id": orgId },
};

/* ============================
   SCHEMA: BREADCRUMBS
============================ */

const breadcrumbsJsonLd: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": breadcrumbId,
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
      name: "Florists",
      item: pageUrl,
    },
  ],
};

/* ============================
   SCHEMA: OFFER CATALOG
============================ */

const offerCatalog: OfferCatalog = {
  "@type": "OfferCatalog",
  name: "Shopify Florist Website Services",
  itemListElement: [
    {
      "@type": "OfferCatalog",
      name: "Strategy & UX",
      itemListElement: [
        { "@type": "Offer", name: "Florist UX & Store Architecture Planning" } as Offer,
        { "@type": "Offer", name: "Local Delivery & Cutoff Strategy" } as Offer,
        { "@type": "Offer", name: "Wedding & Event Funnel Planning" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Shopify Website Development",
      itemListElement: [
        { "@type": "Offer", name: "Custom Shopify Website for Florists" } as Offer,
        { "@type": "Offer", name: "Bouquet & Collection Template Design" } as Offer,
        { "@type": "Offer", name: "Flower Subscription Setup" } as Offer,
        { "@type": "Offer", name: "Performance & Speed Optimization" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Migration & Redesign",
      itemListElement: [
        { "@type": "Offer", name: "WooCommerce / Wix / Squarespace to Shopify Migration" } as Offer,
        { "@type": "Offer", name: "SEO-Safe Shopify Redesign" } as Offer,
        { "@type": "Offer", name: "URL Mapping & 301 Redirects" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Ongoing Support",
      itemListElement: [
        { "@type": "Offer", name: "Monthly Shopify Support for Florists" } as Offer,
        { "@type": "Offer", name: "Dedicated Shopify Developer" } as Offer,
        { "@type": "Offer", name: "Seasonal Campaign & CRO Updates" } as Offer,
      ],
    },
  ],
};

/* ============================
   SCHEMA: SERVICE
============================ */

const serviceJsonLd: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceId,
  name: "Shopify Florist Website Design & Development",
  serviceType:
    "Shopify website design, development, migration, and optimization for florists and flower shops.",
  provider: { "@id": orgId },
  areaServed: "Worldwide",
  hasOfferCatalog: offerCatalog,
};

/* ============================
   SCHEMA: FAQ
============================ */

const faqJsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": faqId,
  url: pageUrl,
  name: "Shopify Florist Website FAQs",
  mainEntity: Faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const combinedJsonLd = [
  websiteJsonLd,
  orgJsonLd,
  pageJsonLd,
  breadcrumbsJsonLd,
  serviceJsonLd,
  faqJsonLd,
];

/* ============================
   PAGE COMPONENT
============================ */

export default function IndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />

      <Hero
        title="Shopify Website Design & Development for Florists"
        subtitle="High-converting Shopify websites for flower shops & floral brands"
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697c64a164079bf96470b7ee_pjh-kMzDfWWojsU-unsplash%20(1).jpg"
      />

      <CaseStudyAccordion />
      <TestimonialCard />

      <Intro
        heading="Shopify Website Design & Development for Florists & Flower Shops"
        text="ShopifyTasker builds high-performance Shopify websites for florists, flower shops, and floral brands. From local delivery and subscriptions to SEO and conversion optimization, we help florists grow online."
      />

      <CaseStudiesCraftberry />
      <FaqSection />
      <GeoMessage />
    </>
  );
}
