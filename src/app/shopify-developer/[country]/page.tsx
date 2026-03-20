import { notFound } from "next/navigation";
import type { Metadata } from "next";
import intlCities from "@/lib/international-cities.json";
import Link from "next/link";
import TestimonialCard from "@/app/components/TestimonialCard";
import CreateTaskButton from "../CreateTaskButton";

type Props = {
  params: Promise<{ country: string }>;
};

const countryMeta: Record<string, { name: string; flag: string; description: string; compliance: string[] }> = {
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    description: "ShopifyTasker provides expert Shopify development for Australian businesses — from Sydney and Melbourne to Brisbane, Perth, and Adelaide. We build GST-compliant stores with Afterpay, Zip, and Australia Post integrations.",
    compliance: ["Australian GST (10%) compliance", "Afterpay & Zip BNPL integration", "Australia Post, Sendle & StarTrack APIs", "AUD multi-currency configuration", "Australian Consumer Law considerations"],
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "ShopifyTasker builds Shopify stores for UK merchants across London, Manchester, Birmingham, Leeds, Glasgow, and beyond — with UK VAT compliance, GDPR, Klarna, and Royal Mail integrations built in from day one.",
    compliance: ["UK VAT compliance and configuration", "GDPR & cookie consent compliance", "Klarna & Clearpay BNPL integration", "Royal Mail, DHL & DPD shipping APIs", "GBP multi-currency configuration"],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    description: "ShopifyTasker serves Canadian Shopify merchants across Toronto, Vancouver, Montreal, Calgary, and Ottawa — with HST/GST/PST tax compliance, CAD configuration, Interac integration, and bilingual French-English builds for Quebec brands.",
    compliance: ["Canadian HST/GST/PST tax compliance", "Quebec Bill 96 bilingual requirements", "Interac & Afterpay payment integration", "Canada Post & Purolator shipping APIs", "CAD currency configuration"],
  },
  germany: {
    name: "Germany",
    flag: "🇩🇪",
    description: "ShopifyTasker builds DSGVO-compliant Shopify stores for German merchants in Berlin, Munich, Hamburg, Cologne, Frankfurt, and Stuttgart — with Impressum configuration, VAT compliance, SEPA, and Klarna integrations for the German market.",
    compliance: ["DSGVO (GDPR) compliance", "Impressum legal notice requirement", "German VAT (Mehrwertsteuer) configuration", "SEPA, Klarna & SOFORT payment integration", "EU VAT OSS for cross-border sales"],
  },
  uae: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    description: "ShopifyTasker develops Shopify stores for UAE merchants in Dubai, Abu Dhabi, Sharjah, and Ajman — with UAE VAT compliance, Arabic language support, Tabby, Tamara, and PayFort integrations for the GCC market.",
    compliance: ["UAE VAT (5%) compliance", "Arabic language localisation", "Tabby, Tamara & PayFort integration", "AED currency configuration", "GCC cross-border commerce setup"],
  },
  singapore: {
    name: "Singapore",
    flag: "🇸🇬",
    description: "ShopifyTasker provides expert Shopify development for Singapore-based merchants targeting the Southeast Asian market — with GST compliance, PayNow, GrabPay, and Atome integration, and multi-currency support for SEA expansion.",
    compliance: ["Singapore GST (9%) compliance", "PayNow & GrabPay payment integration", "Atome BNPL integration", "SGD currency configuration", "SEA multi-currency and multilingual setup"],
  },
  netherlands: {
    name: "Netherlands",
    flag: "🇳🇱",
    description: "ShopifyTasker builds Shopify stores for Dutch merchants in Amsterdam, Rotterdam, and The Hague — with Dutch VAT compliance, EU GDPR, iDEAL (the Netherlands' primary payment method), Klarna, and cross-European commerce configuration.",
    compliance: ["Dutch VAT compliance", "EU GDPR compliance", "iDEAL payment integration", "Klarna integration", "EUR currency and EU VAT OSS"],
  },
  france: {
    name: "France",
    flag: "🇫🇷",
    description: "ShopifyTasker develops Shopify stores for French merchants in Paris, Lyon, Marseille, Bordeaux, and Toulouse — with French TVA compliance, RGPD requirements, French language localisation, Alma BNPL, and EU commerce configuration.",
    compliance: ["French TVA (VAT) compliance", "RGPD (GDPR) compliance", "French language localisation", "Alma BNPL integration", "EUR currency and EU VAT OSS"],
  },
  "new-zealand": {
    name: "New Zealand",
    flag: "🇳🇿",
    description: "ShopifyTasker serves New Zealand Shopify merchants across Auckland, Wellington, Christchurch, Hamilton, and Dunedin — with NZ GST compliance, Afterpay and Laybuy integration, New Zealand Post APIs, and trans-Tasman commerce configuration.",
    compliance: ["New Zealand GST (15%) compliance", "Afterpay & Laybuy BNPL integration", "New Zealand Post & CourierPost APIs", "NZD currency configuration", "Trans-Tasman (AU/NZ) commerce setup"],
  },
  ireland: {
    name: "Ireland",
    flag: "🇮🇪",
    description: "ShopifyTasker builds Shopify stores for Irish merchants in Dublin, Cork, Galway, and Limerick — with Irish VAT compliance, EU GDPR, Klarna and Stripe integrations, and EU cross-border commerce configuration for Irish brands scaling across Europe.",
    compliance: ["Irish VAT compliance", "EU GDPR compliance", "Klarna & Revolut integration", "EUR currency configuration", "EU VAT OSS for cross-border sales"],
  },
};

export function generateStaticParams() {
  const countrySlugs = [...new Set(intlCities.map((c) => c.countrySlug))];
  return countrySlugs.map((country) => ({ country }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const meta = countryMeta[params.country];
  if (!meta) return { title: "Country Not Found | ShopifyTasker" };
  const canonicalUrl = `https://www.shopifytasker.com/shopify-developer/${params.country}`;
  return {
    title: `Shopify Developer ${meta.name} | ShopifyTasker`,
    description: `Hire expert Shopify developers in ${meta.name}. Custom apps, theme builds, API integrations & Shopify Plus. ${meta.name}-specific compliance, payments & tax. Pay after delivery.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Shopify Developer ${meta.name} | ShopifyTasker`,
      description: `Expert Shopify development for ${meta.name} businesses. Locally configured, pay after delivery.`,
      url: canonicalUrl,
      siteName: "ShopifyTasker",
      type: "website",
    },
  };
}

export default async function CountryPage(props: Props) {
  const params = await props.params;
  const meta = countryMeta[params.country];
  if (!meta) return notFound();

  const countryCities = intlCities.filter((c) => c.countrySlug === params.country);
  if (countryCities.length === 0) return notFound();

  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] px-6 py-3">
        <ol className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] text-white/40">
          <li><Link href="/" className="hover:text-white/70 transition">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/shopify-developer" className="hover:text-white/70 transition">Shopify Developer</Link></li>
          <li aria-hidden>/</li>
          <li className="text-white/70" aria-current="page">{meta.name}</li>
        </ol>
      </nav>

      {/* ─── HERO ─── */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify Development &nbsp;·&nbsp; {meta.name}
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[1.06] tracking-tight text-white max-w-4xl mb-8">
            Shopify Developer {meta.name}
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-2xl mb-10">
            {meta.description}
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
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-b border-white/[0.08]">
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

      {/* ─── LOCAL COMPLIANCE ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
              {meta.name} Expertise
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Built for the {meta.name} Market
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">
              We do not just deploy generic Shopify stores. Every store we build for {meta.name}
              merchants is properly configured for the local market — from tax and compliance
              to payment gateways and shipping carriers.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get a Free Quote →
            </CreateTaskButton>
          </div>
          <ul className="border-t border-white/[0.08]">
            {meta.compliance.map((item, i) => (
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

      {/* ─── CITIES ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Cities</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Developers Across {meta.name}
            </h2>
            <p className="text-[15px] text-white/55 mt-4 max-w-xl leading-[1.7]">
              Select your city for a dedicated Shopify development page with local market
              information, compliance details, and city-specific expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {countryCities.map((city, i) => (
              <Link
                key={i}
                href={`/shopify-developer/${city.countrySlug}/${city.slug}`}
                className="border border-white/[0.08] p-7 -mt-px -ml-px group hover:bg-white/[0.04] transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[17px] font-semibold text-white group-hover:text-white/90 leading-snug">
                      {city.city}
                    </h3>
                    <p className="text-[13px] text-white/40 mt-1">{city.region}</p>
                  </div>
                  <span className="text-[13px] text-white/20 group-hover:text-white/50 transition mt-1">→</span>
                </div>
                <p className="text-[13px] text-white/40 leading-[1.6] line-clamp-2">
                  {city.localPayments}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Services</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Development Services in {meta.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Custom Shopify App Development", body: "Private apps, custom admin tools, subscription systems, loyalty programs, and bespoke backend solutions built to your exact specifications." },
              { num: "02", title: "Shopify Theme Development", body: "Custom Liquid theme builds from scratch or deep customisation — pixel-perfect, performance-optimised, and fully brand-aligned." },
              { num: "03", title: "API & Third-Party Integrations", body: "Connect Shopify with ERPs, CRMs, 3PLs, local payment gateways, and any external system with robust, well-documented integrations." },
              { num: "04", title: "Shopify Plus Enterprise", body: "Checkout UI extensions, Shopify Functions, B2B wholesale portals, multi-store configurations, and enterprise-grade development." },
              { num: "05", title: "Headless Shopify", body: "Headless storefronts using Hydrogen, Next.js, or custom frameworks with Shopify as the commerce backend." },
              { num: "06", title: "Performance Optimisation", body: "Technical audits, Liquid refactoring, Core Web Vitals improvements, and speed fixes that boost rankings and conversions." },
            ].map((s, i) => (
              <div key={i} className="border border-white/[0.08] p-8 -mt-px -ml-px hover:bg-white/[0.04] transition">
                <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">{s.num}</p>
                <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="border-b border-white/[0.08]">
        <TestimonialCard />
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Build Your {meta.name} Shopify Store?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us what you need. We will send a fixed quote and start work — you pay only when you are satisfied.
          </p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Quote →
          </CreateTaskButton>
        </div>
      </section>

    </main>
  );
}
