import type { Metadata } from "next";
import Hero from "../Hero";
import Intro from "../Intro";
import SplitSection from "../SplitSection";
import CaseStudyAccordion from "../CaseStudyAccordion";
import GeoMessage from "@/app/components/GeoMessage";
import BrandEditorial from "../BrandEditorial";
import { healthEditorialBrands } from "../data/healthEditorialBrands";
import FaqSection from "./FaqSection";

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
  openGraph: {
    type: "website",
    siteName: "ShopifyTasker",
    url: "https://www.shopifytasker.com/industries/shopify-health-wellness-website-design-development/",
    title: "Health & Wellness Shopify Store Design, Redesign & Migration",
    description:
      "Launch, redesign or migrate your health & wellness Shopify store. Expert Shopify design, development, subscriptions and monthly support.",
    images: [
      {
        // ✅ Use a stable, public URL (best if hosted on your domain)
        url: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6975a2fbcd94a67b75206290_glenna-haug-DuNXXPScbJM-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Health & Wellness Shopify Store Design, Redesign & Migration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Health & Wellness Shopify Store Design, Redesign & Migration",
    description:
      "Launch, redesign or migrate your health & wellness Shopify store. Expert Shopify design, development, subscriptions and monthly support.",
    images: ["https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6975a2fbcd94a67b75206290_glenna-haug-DuNXXPScbJM-unsplash.jpg"],
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
        { "@type": "Offer", name: "Health & Wellness Market Research" } as Offer,
        { "@type": "Offer", name: "Competitor & Funnel Analysis" } as Offer,
        { "@type": "Offer", name: "Store Architecture & UX Planning" } as Offer,
        { "@type": "Offer", name: "Conversion & Retention Strategy" } as Offer,
      ],
    },

    {
      "@type": "OfferCatalog",
      name: "Shopify Website Development",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Custom Shopify Website Development for Health & Wellness Brands",
        } as Offer,
        {
          "@type": "Offer",
          name: "Shopify Plus Development for Supplement & Wellness Stores",
        } as Offer,
        {
          "@type": "Offer",
          name: "Subscription & Membership Setup",
        } as Offer,
        {
          "@type": "Offer",
          name: "Performance & Speed Optimization",
        } as Offer,
      ],
    },

    {
      "@type": "OfferCatalog",
      name: "Migration to Shopify",
      itemListElement: [
        {
          "@type": "Offer",
          name: "WooCommerce to Shopify Migration",
        } as Offer,
        {
          "@type": "Offer",
          name: "Magento to Shopify Migration",
        } as Offer,
        {
          "@type": "Offer",
          name: "BigCommerce to Shopify Migration",
        } as Offer,
        {
          "@type": "Offer",
          name: "Custom Platform to Shopify Migration",
        } as Offer,
        {
          "@type": "Offer",
          name: "SEO-Safe Shopify Migration (301 Redirects & Metadata)",
        } as Offer,
      ],
    },

    {
      "@type": "OfferCatalog",
      name: "Redesign & Optimization",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Shopify Store Redesign for Health & Wellness Brands",
        } as Offer,
        {
          "@type": "Offer",
          name: "UX & CRO Optimization",
        } as Offer,
        {
          "@type": "Offer",
          name: "Mobile-First Redesign",
        } as Offer,
        {
          "@type": "Offer",
          name: "Checkout Optimization & Funnel Improvements",
        } as Offer,
      ],
    },

    {
      "@type": "OfferCatalog",
      name: "Ongoing Support & Growth",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Monthly Shopify Maintenance & Support",
        } as Offer,
        {
          "@type": "Offer",
          name: "Dedicated Shopify Developer Retainer",
        } as Offer,
        {
          "@type": "Offer",
          name: "App Integrations & Automation",
        } as Offer,
        {
          "@type": "Offer",
          name: "Ongoing CRO & A/B Testing",
        } as Offer,
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
        heading="If you looking to update your shopify theme or you looking  for Health Wellness Stores setup"
        text="We create fast, conversion-focused Shopify experiences for Health Wellness businesses."
      />

      <SplitSection
        title="Built for Performance"
        text="Lightning-fast storefronts optimized for SEO, CRO and mobile."
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg"
      />

      <BrandEditorial brands={healthEditorialBrands} />
      <FaqSection/>
      <GeoMessage />
    </>
  );
}
