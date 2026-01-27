import type { Metadata } from "next";
import Hero from "../Hero";
import Intro from "../Intro";
import SplitSection from "../SplitSection";
import CaseStudyAccordion from "../CaseStudyAccordion";
import GeoMessage from "@/app/components/GeoMessage";
import BrandEditorial from "../BrandEditorial";
// TODO: replace with cycling brands data
import { healthEditorialBrands as cyclingEditorialBrands } from "../data/healthEditorialBrands";

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

// ✅ Cycling page URL (use www consistently)
const pageUrl =
  "https://www.shopifytasker.com/industries/shopify-cycling-website-design-development/";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shopifytasker.com"),
  title: "Shopify Cycling Website Design & Development for Bike & E-Bike Brands",
  description:
    "Custom Shopify website design and development for cycling and e-bike brands. High-performance storefronts for bikes, accessories, apparel, and parts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    siteName: "ShopifyTasker",
    url: pageUrl,
    title: "Shopify Cycling Website Design & Development for Bike & E-Bike Brands",
    description:
      "Custom Shopify website design and development for cycling and e-bike brands. High-performance storefronts for bikes, accessories, apparel, and parts.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69785d617e6be4fdcc7449a5_coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify website design and development for cycling & e-bike brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Cycling Website Design & Development for Bike & E-Bike Brands",
    description:
      "Custom Shopify website design and development for cycling and e-bike brands. High-performance storefronts for bikes, accessories, apparel, and parts.",
    images: [
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69785d617e6be4fdcc7449a5_coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg",
    ],
  },
};

const orgId = "https://www.shopifytasker.com/#organization";
const websiteId = "https://www.shopifytasker.com/#website";
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
  name: "Shopify Cycling Website Design & Development | ShopifyTasker",
  description:
    "High-performance Shopify solutions for cycling and e-bike brands—conversion-focused design, development, SEO, speed optimization, and migration.",
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
    { "@type": "ListItem", position: 3, name: "Cycling", item: pageUrl },
  ],
};

const offerCatalog: OfferCatalog = {
  "@type": "OfferCatalog",
  name: "Cycling & E-Bike Shopify Services",
  itemListElement: [
    {
      "@type": "OfferCatalog",
      name: "Strategy & UX",
      itemListElement: [
        { "@type": "Offer", name: "Cycling Market & Competitor Research" } as Offer,
        { "@type": "Offer", name: "Store Architecture for Bikes & Accessories" } as Offer,
        { "@type": "Offer", name: "Product Page UX for High-AOV Bikes" } as Offer,
        { "@type": "Offer", name: "Conversion & Retention Strategy" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Shopify Design & Development",
      itemListElement: [
        { "@type": "Offer", name: "Custom Shopify Website Development for Cycling Brands" } as Offer,
        { "@type": "Offer", name: "Shopify Plus Development for E-Bike Companies" } as Offer,
        { "@type": "Offer", name: "Bike Product Templates (sizes, specs, accessories)" } as Offer,
        { "@type": "Offer", name: "Performance & Speed Optimization" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Migration to Shopify",
      itemListElement: [
        { "@type": "Offer", name: "WooCommerce to Shopify Migration for Bike Stores" } as Offer,
        { "@type": "Offer", name: "Magento to Shopify Migration" } as Offer,
        { "@type": "Offer", name: "BigCommerce to Shopify Migration" } as Offer,
        { "@type": "Offer", name: "SEO-Safe Migration (301 Redirects & Metadata)" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Optimization & Growth",
      itemListElement: [
        { "@type": "Offer", name: "Shopify Store Redesign for Cycling & E-Bike Brands" } as Offer,
        { "@type": "Offer", name: "UX & CRO Optimization (PDP, cart, checkout)" } as Offer,
        { "@type": "Offer", name: "Mobile-First Redesign" } as Offer,
        { "@type": "Offer", name: "SEO for Cycling & E-Bike Keywords" } as Offer,
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Ongoing Support",
      itemListElement: [
        { "@type": "Offer", name: "Monthly Shopify Maintenance & Support" } as Offer,
        { "@type": "Offer", name: "Dedicated Shopify Developer Retainer" } as Offer,
        { "@type": "Offer", name: "App Integrations & Automation" } as Offer,
        { "@type": "Offer", name: "Ongoing CRO Experiments" } as Offer,
      ],
    },
  ],
};

const serviceJsonLd: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": serviceId,
  name: "Shopify Website Design & Development for Cycling & E-Bike Brands",
  serviceType:
    "Conversion-focused Shopify solutions for cycling and e-bike brands (design, development, SEO, speed optimization, and migration).",
  provider: { "@id": orgId },
  areaServed: "Worldwide",
  hasOfferCatalog: offerCatalog,
};

const faqJsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": faqId,
  url: pageUrl,
  name: "Cycling & E-Bike Shopify FAQ",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build Shopify stores for cycling and e-bike brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and develop high-performance Shopify stores for cycling brands selling bikes, e-bikes, parts, accessories, and apparel—with a focus on speed, UX, SEO, and conversions.",
      },
    },
    {
      "@type": "Question",
      name: "Can Shopify handle high-ticket bike products and complex variants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We structure catalogs and product pages for high-AOV bikes and variants (sizes, specs, bundles, accessories), and optimize the buying journey for mobile and checkout conversions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you migrate bike stores from WooCommerce or Magento to Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We migrate products, collections, content, key SEO elements, and implement 301 redirects to keep traffic stable when moving to Shopify.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Shopify SEO for cycling keywords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We implement technical and on-page SEO foundations (metadata, schema, internal linking, speed, image optimization) and help build landing pages for cycling and e-bike searches.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing Shopify support for cycling brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide monthly support retainers for improvements, new sections, CRO experiments, performance tuning, and ongoing development.",
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
        title="Shopify Cycling Website Design & Development | ShopifyTasker"
        subtitle="High-performance eCommerce for bike & e-bike brands (bikes, parts, accessories, apparel)"
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69785d617e6be4fdcc7449a5_coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg"
      />

      <CaseStudyAccordion />

      <Intro
        heading="Shopify storefronts built for cycling & e-bike growth"
        text="We create fast, conversion-focused Shopify experiences for bike brands—optimized for high-ticket products, mobile UX, SEO, and performance."
      />

      <SplitSection
        title="Built for High-AOV Products"
        text="From product specs and size/fit guidance to accessories and bundles, we design the buying journey to reduce friction and increase conversions."
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697890a89e4f4dff082b982b_kbo-bike-kXP41LVdcv0-unsplash%20(1).jpg"
      />

      <BrandEditorial brands={cyclingEditorialBrands} />

      <GeoMessage />
    </>
  );
}
