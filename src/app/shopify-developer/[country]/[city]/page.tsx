import { notFound } from "next/navigation";
import type { Metadata } from "next";
import intlCities from "@/lib/international-cities.json";
import Link from "next/link";
import Image from "next/image";
import TestimonialCard from "@/app/components/TestimonialCard";
import IntlCityPageSchema from "../../IntlCityPageSchema";
import IntlCityFaqSection from "../../IntlCityFaqSection";
import CreateTaskButton from "../../CreateTaskButton";

type Props = {
  params: Promise<{ country: string; city: string }>;
};

export function generateStaticParams() {
  return intlCities.map((c) => ({
    country: c.countrySlug,
    city: c.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const cityData = intlCities.find(
    (c) => c.countrySlug === params.country && c.slug === params.city
  );
  if (!cityData) {
    return {
      title: "City Not Found | ShopifyTasker",
      description: "This city page is not available.",
    };
  }
  const canonicalUrl = `https://www.shopifytasker.com/shopify-developer/${cityData.countrySlug}/${cityData.slug}`;
  const countryCodeMap: Record<string, string> = {
    australia: "en-AU", uk: "en-GB", canada: "en-CA", germany: "en-DE",
    uae: "en-AE", singapore: "en-SG", netherlands: "en-NL",
    france: "en-FR", "new-zealand": "en-NZ", ireland: "en-IE",
  };
  const langCode = countryCodeMap[cityData.countrySlug] ?? "en";
  return {
    title: `Shopify Developer in ${cityData.city} | ShopifyTasker`,
    description: `Hire expert Shopify developers in ${cityData.city}. Custom apps, Liquid themes & API integrations. ${cityData.currency}-configured. Pay after delivery — no upfront cost.`,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        [langCode]: canonicalUrl,
        "x-default": "https://www.shopifytasker.com/shopify-developer",
      },
    },
    openGraph: {
      title: `Shopify Developer in ${cityData.city}, ${cityData.country} | ShopifyTasker`,
      description: `Expert Shopify developers in ${cityData.city}. Custom development, ${cityData.currency}-configured, local payment integrations. No upfront payment.`,
      url: canonicalUrl,
      siteName: "ShopifyTasker",
      type: "website",
    },
  };
}

const services = [
  {
    title: "Custom Shopify App Development",
    body: "We build private Shopify apps, custom admin tools, subscription systems, loyalty programs, and bespoke backend solutions that solve the specific technical problems your business faces.",
    href: "/shopify-expert-services",
  },
  {
    title: "Shopify Theme Development",
    body: "Custom Liquid theme builds from scratch or deep customisation beyond the standard theme editor. Pixel-perfect, performance-optimised, and built exactly to your brand's specifications.",
    href: "/shopify-store-design",
  },
  {
    title: "API & Third-Party Integrations",
    body: "Connect Shopify with your ERP, CRM, 3PL, payment gateway, or any external system. We build robust, reliable integrations — NetSuite, SAP, Salesforce, ShipStation, QuickBooks, and more.",
    href: "/shopify-expert-services",
  },
  {
    title: "Shopify Plus Enterprise Development",
    body: "Checkout UI extensions, Shopify Functions, B2B wholesale portals, multi-store setups, Shopify Flow automation, and custom enterprise solutions for scaling Shopify Plus brands.",
    href: "/shopify-plus-development-agency",
  },
  {
    title: "Headless Shopify Development",
    body: "Build headless storefronts using Hydrogen, Next.js, or custom frameworks with Shopify as the commerce backend. Full Storefront API implementation, custom checkout, sub-second load times.",
    href: "/shopify-expert-services",
  },
  {
    title: "Performance & Speed Optimisation",
    body: "Technical audits, Liquid code refactoring, JavaScript optimisation, image compression, and Core Web Vitals improvements that deliver faster load times and better search rankings.",
    href: "/shopify-seo",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Technical Discovery & Scoping",
    body: "We start with a detailed technical brief — your existing systems, integrations, business logic, and goals. We document every requirement before any development begins.",
  },
  {
    num: "02",
    title: "Architecture & Planning",
    body: "We design the technical architecture — data flows, integration points, database structure, API design — and present a full plan for your review and approval.",
  },
  {
    num: "03",
    title: "Development & Build",
    body: "We write clean, well-documented code following Shopify best practices — custom Liquid, React, Node.js, or whatever the project requires — with regular progress updates.",
  },
  {
    num: "04",
    title: "Code Review & QA Testing",
    body: "Every build goes through internal code review and rigorous QA testing across browsers, devices, and edge cases before it touches your live store.",
  },
  {
    num: "05",
    title: "Staging & Client Review",
    body: "We deploy to a staging environment for your review. You test every feature, raise questions, and request changes. We iterate until everything meets your requirements.",
  },
  {
    num: "06",
    title: "Deployment & Ongoing Support",
    body: "We handle the production deployment, post-launch monitoring, and remain available for bug fixes, updates, and ongoing development as your business scales.",
  },
];

export default async function IntlCityPage(props: Props) {
  const params = await props.params;
  const cityData = intlCities.find(
    (c) => c.countrySlug === params.country && c.slug === params.city
  );
  if (!cityData) return notFound();

  const faqsForSchema = [
    {
      question: `What Shopify development services do you offer in ${cityData.city}?`,
      answer: `We offer custom Shopify app development, Liquid theme development, API and third-party integrations, Shopify Plus enterprise development, headless Shopify builds, platform migrations, performance optimisation, and ongoing retainer-based developer support for businesses in ${cityData.city}, ${cityData.country}.`,
    },
    {
      question: `Can you configure my Shopify store for ${cityData.country}?`,
      answer: `Yes. We configure ${cityData.currency} as the store currency, set up ${cityData.country}-specific tax rules, integrate local payment methods including ${cityData.localPayments}, configure local shipping carriers and rates, and ensure your store meets ${cityData.country}'s legal requirements for eCommerce.`,
    },
    {
      question: `Can you build a custom Shopify app for my ${cityData.city} business?`,
      answer: `Yes. We build private Shopify apps, custom admin tools, subscription systems, loyalty programmes, B2B portals, and complex backend integrations tailored to your specific business requirements.`,
    },
    {
      question: "Do you work on Shopify Plus?",
      answer: `Yes. We have extensive Shopify Plus experience — checkout UI extensions, Shopify Functions, B2B wholesale portals, multi-store configurations, Shopify Flow automation, and enterprise-grade technical builds for ${cityData.country}-based Shopify Plus merchants.`,
    },
    {
      question: "Why should I hire ShopifyTasker?",
      answer:
        "ShopifyTasker gives you a full technical team — developers, QA engineers, and architects — at transparent rates starting from $20/hr. We work on a pay-after-delivery model with 10+ years of Shopify experience and global clients across more than 15 countries.",
    },
    {
      question: `How long does a Shopify development project take?`,
      answer: `Small tasks and integrations can be completed in 24–72 hours. Complex app builds or large integrations typically take 2–6 weeks. We agree on a detailed scope and clear timeline before starting any work.`,
    },
  ];

  // Get related cities in same country
  const relatedCities = intlCities.filter(
    (c) => c.countrySlug === cityData.countrySlug && c.slug !== cityData.slug
  );

  return (
    <main className="bg-[#0a0a0a] text-white">
      <IntlCityPageSchema
        city={cityData.city}
        country={cityData.country}
        countrySlug={cityData.countrySlug}
        slug={cityData.slug}
        currency={cityData.currency}
        faqs={faqsForSchema}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] px-6 py-3">
        <ol className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] text-white/40 flex-wrap">
          <li><Link href="/" className="hover:text-white/70 transition">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/shopify-developer" className="hover:text-white/70 transition">Shopify Developer</Link></li>
          <li aria-hidden>/</li>
          <li><Link href={`/shopify-developer/${cityData.countrySlug}`} className="hover:text-white/70 transition">{cityData.country}</Link></li>
          <li aria-hidden>/</li>
          <li className="text-white/70" aria-current="page">{cityData.city}</li>
        </ol>
      </nav>

      {/* ─── HERO ─── */}
      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Shopify Development &nbsp;·&nbsp; {cityData.city}, {cityData.country}
            </p>
            <h1 className="text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              Hire a Shopify Developer in {cityData.city}, {cityData.country}
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Expert Shopify development for {cityData.city} businesses — custom apps,
              Liquid theme builds, API integrations, and Shopify Plus solutions.{" "}
              {cityData.currency}-configured. Pay only after the work is done.
            </p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
                Get a Free Quote
              </CreateTaskButton>
              <Link
                href="/shopify-expert-services"
                className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
              >
                View Our Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative h-[520px] overflow-hidden rounded-t-2xl">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp"
              alt={`Shopify developer working on a store for a ${cityData.city} business`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[
            { value: "500+", label: "Shopify Stores Built" },
            { value: "10+", label: "Years of Shopify Development" },
            { value: "15+", label: "Countries Served" },
            { value: "$0 upfront", label: "Pay After Work is Done" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
              About Our Work in {cityData.city}
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Top-Rated Shopify Developer Serving {cityData.city}, {cityData.country}
            </h2>
          </div>
          <div className="space-y-5 text-[15px] text-white/60 leading-[1.7]">
            <p>{cityData.intro}</p>
            <p>
              Whether you need a custom Shopify app, a complex third-party integration,
              a Liquid theme built from scratch, or Shopify Plus enterprise development,
              ShopifyTasker gives {cityData.city} businesses access to a full technical
              team — developers, QA engineers, and architects — without the overhead of
              a traditional agency.
            </p>
            <p className="text-white/80">{cityData.cta}</p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Start Your Project →
            </CreateTaskButton>
          </div>
        </div>
      </section>

      {/* ─── LOCAL MARKET ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
              {cityData.country} Market
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Configured for {cityData.country}
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6">
              Building a Shopify store for the {cityData.country} market requires more than just
              deploying a theme. From currency and tax configuration to local payment gateways
              and compliance requirements, every technical detail matters.
            </p>
          </div>
          <ul className="border-t border-white/[0.08]">
            {[
              `${cityData.currency} (${cityData.currencySymbol}) currency configuration and multi-currency support`,
              `${cityData.country}-specific tax rules and VAT/GST compliance configuration`,
              `Local payment gateway integrations — ${cityData.localPayments}`,
              `Country-specific shipping carrier APIs and rate configurations`,
              `Compliance with ${cityData.country}'s eCommerce legal requirements`,
              `Regional SEO configuration for ${cityData.country} search engines`,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-5 py-5 border-b border-white/[0.08] text-[14px] text-white/60 leading-[1.6]">
                <span className="font-mono text-[11px] text-white/20 shrink-0 mt-0.5 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What We Do</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Development Services in {cityData.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="border border-white/[0.08] p-8 flex flex-col justify-between -mt-px -ml-px group hover:bg-white/[0.04] transition">
                <div>
                  <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7] mb-6">{s.body}</p>
                </div>
                <Link href={s.href} className="text-[13px] text-white/50 underline underline-offset-4 hover:text-white transition w-fit">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why Us</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              Why {cityData.city} Businesses Choose ShopifyTasker
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.08]">
            {[
              { title: "Pay After Delivery", body: "We never ask for upfront payment. You pay only once your project is delivered and you are satisfied. Zero risk, zero surprises." },
              { title: "10+ Years Shopify Experience", body: "Our development team has over a decade of hands-on Shopify experience — hundreds of stores, every industry, from startups to Shopify Plus enterprise." },
              { title: "Global with Local Expertise", body: "We understand your local market — currency, tax, payment gateways, compliance, and consumer behaviour for your country. We are not a generic global agency." },
              { title: "Fixed Pricing", body: "You receive a detailed fixed-price quote before we start. We stick to it — no hidden fees, no scope creep charges, no billing surprises." },
              { title: "Fast Delivery", body: "Small tasks and integrations are typically completed within 24–72 hours. Complex builds are delivered with clear milestones and regular updates." },
              { title: "Clean, Documented Code", body: "Every build follows Shopify best practices — well-commented code with full handover documentation so your team can manage and extend it." },
            ].map((item, i) => (
              <div key={i} className="border-b border-r border-white/[0.08] py-8 pr-8 last:border-r-0">
                <p className="text-[11px] font-mono text-white/20 mb-5 tracking-widest">{String(i + 1).padStart(2, "0")}</p>
                <p className="text-[16px] font-semibold text-white mb-3">{item.title}</p>
                <p className="text-[14px] text-white/55 leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              How We Build Your {cityData.city} Shopify Project
            </h2>
            <p className="text-[14px] text-white/55 leading-[1.7] mt-5">
              A transparent, milestone-driven development process — so you always know what is being built and when.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get Started →
            </CreateTaskButton>
          </div>
          <div className="border-t border-white/[0.08]">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8 py-8 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono text-white/20 shrink-0 pt-1 tracking-widest">{step.num}</span>
                <div>
                  <p className="text-[16px] font-semibold text-white mb-2">{step.title}</p>
                  <p className="text-[14px] text-white/55 leading-[1.7]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="border-t border-white/[0.08]">
        <TestimonialCard />
      </section>

      {/* ─── FAQ ─── */}
      <IntlCityFaqSection
        city={cityData.city}
        country={cityData.country}
        currency={cityData.currency}
        localPayments={cityData.localPayments}
      />

      {/* ─── FINAL CTA ─── */}
      <section className="border-t border-white/[0.08] px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Build Your <em className="not-italic font-normal">{cityData.city}</em> Shopify Project?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us what you need. We will send a fixed quote, start development, and you pay only when you are satisfied.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get a Free Quote →
            </CreateTaskButton>
          </div>
        </div>
      </section>

      {/* ─── RELATED CITIES IN COUNTRY ─── */}
      {relatedCities.length > 0 && (
        <section className="border-t border-white/[0.08] px-6 py-14">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
              Other {cityData.country} Cities
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-6">
              {relatedCities.map((c, i) => (
                <Link
                  key={i}
                  href={`/shopify-developer/${c.countrySlug}/${c.slug}`}
                  className="text-[13px] text-white/40 hover:text-white/80 hover:underline underline-offset-2 transition"
                >
                  {c.city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
