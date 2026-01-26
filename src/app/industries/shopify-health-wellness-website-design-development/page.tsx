import type { Metadata } from "next";
import Hero from "../Hero";
import Intro from "../Intro";
import SplitSection from "../SplitSection";
import CaseStudyAccordion from "../CaseStudyAccordion";
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

const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: "https://www.shopifytasker.com/",
  name: "ShopifyTasker",
  publisher: { "@id": orgId },
};

const orgJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: "ShopifyTasker",
  url: "https://www.shopifytasker.com/",
};

const pageJsonLd: WithContext<WebPage> = {
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

const breadcrumbsJsonLd: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": breadcrumbId,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shopifytasker.com/" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.shopifytasker.com/industries" },
    { "@type": "ListItem", position: 3, name: "Health & Wellness", item: pageUrl },
  ],
};

const offerCatalog: OfferCatalog = {
  "@type": "OfferCatalog",
  name: "Health & Wellness Shopify Services",
  itemListElement: [
    {
      "@type": "OfferCatalog",
      name: "Strategy",
      itemListElement: [
        { "@type": "Offer", name: "Market & Competitor Analysis" } as Offer,
        { "@type": "Offer", name: "Store Architecture & UX Planning" } as Offer,
      ],
    },
  ],
};

const serviceJsonLd: WithContext<Service> = {
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

const faqJsonLd: WithContext<FAQPage> = {
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

const combinedJsonLd = [
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
