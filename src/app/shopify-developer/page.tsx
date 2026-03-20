import { Metadata } from "next";
import Link from "next/link";
import intlCities from "@/lib/international-cities.json";
import TestimonialCard from "@/app/components/TestimonialCard";
import CreateTaskButton from "./CreateTaskButton";

export const metadata: Metadata = {
  title: "Shopify Developer | International Shopify Development | ShopifyTasker",
  description:
    "Hire expert Shopify developers worldwide. ShopifyTasker serves businesses across Australia, UK, Canada, Germany, UAE, Singapore, New Zealand, Ireland, Netherlands & France. Custom apps, theme builds, Shopify Plus. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/shopify-developer",
  },
};

const countries = [
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    currency: "AUD",
    highlight: "Afterpay, Zip, GST-compliant",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    currency: "GBP",
    highlight: "Klarna, UK VAT, GDPR-compliant",
    cities: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow"],
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    currency: "CAD",
    highlight: "HST/GST/PST, Interac, bilingual",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    currency: "EUR",
    highlight: "DSGVO, Impressum, SEPA, Klarna",
    cities: ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt"],
  },
  {
    name: "UAE",
    slug: "uae",
    flag: "🇦🇪",
    currency: "AED",
    highlight: "UAE VAT, Arabic, Tabby, Tamara",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  },
  {
    name: "Singapore",
    slug: "singapore",
    flag: "🇸🇬",
    currency: "SGD",
    highlight: "GST, PayNow, GrabPay, SEA-ready",
    cities: ["Singapore"],
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    flag: "🇳🇱",
    currency: "EUR",
    highlight: "iDEAL, Dutch VAT, GDPR",
    cities: ["Amsterdam", "Rotterdam", "The Hague"],
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    currency: "EUR",
    highlight: "French TVA, RGPD, Alma, French-language",
    cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse"],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    currency: "NZD",
    highlight: "NZ GST, Afterpay, Laybuy",
    cities: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    currency: "EUR",
    highlight: "Irish VAT, GDPR, Klarna, EU-ready",
    cities: ["Dublin", "Cork", "Galway", "Limerick"],
  },
];

// Get unique countries from intlCities grouped data
const groupedByCountry = countries.reduce<Record<string, typeof intlCities>>((acc, country) => {
  acc[country.slug] = intlCities.filter((c) => c.countrySlug === country.slug);
  return acc;
}, {});

export default function ShopifyDeveloperPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* ─── HERO ─── */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify Development &nbsp;·&nbsp; Worldwide
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[1.06] tracking-tight text-white max-w-4xl mb-8">
            Shopify Developer — International
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-2xl mb-10">
            ShopifyTasker provides expert Shopify development for businesses across Australia,
            the UK, Canada, Germany, UAE, Singapore, New Zealand, Ireland, Netherlands, and
            France. Locally configured stores — correct currency, tax, payment gateways, and
            compliance — built by developers who understand your market.
          </p>
          <div className="flex flex-wrap gap-3">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get a Free Quote
            </CreateTaskButton>
            <Link
              href="/shopify-developer-near-me"
              className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
            >
              US Locations →
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

      {/* ─── COUNTRIES GRID ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Countries</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Select Your Country
            </h2>
            <p className="text-[15px] text-white/55 mt-4 max-w-xl leading-[1.7]">
              Each country page has market-specific compliance, payment, and tax information
              — plus city-level pages for targeted local SEO.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country, i) => (
              <Link
                key={i}
                href={`/shopify-developer/${country.slug}`}
                className="border border-white/[0.08] p-8 -mt-px -ml-px group hover:bg-white/[0.04] transition"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <h3 className="text-[17px] font-semibold text-white group-hover:text-white/90 leading-none">
                      {country.name}
                    </h3>
                    <p className="text-[12px] text-white/30 mt-1">{country.currency}</p>
                  </div>
                  <span className="ml-auto text-[13px] text-white/20 group-hover:text-white/50 transition">→</span>
                </div>
                <p className="text-[13px] text-white/40 mb-5 leading-[1.6]">{country.highlight}</p>
                <div className="flex flex-wrap gap-2">
                  {country.cities.map((city, ci) => (
                    <span key={ci} className="text-[12px] text-white/30 border border-white/[0.08] px-2.5 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL CITIES ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">All Cities</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Find Your City
            </h2>
          </div>
          <div className="space-y-12">
            {countries.map((country) => {
              const citiesInCountry = groupedByCountry[country.slug] || [];
              if (citiesInCountry.length === 0) return null;
              return (
                <div key={country.slug}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-lg">{country.flag}</span>
                    <Link
                      href={`/shopify-developer/${country.slug}`}
                      className="text-[13px] font-semibold text-white/60 hover:text-white transition uppercase tracking-widest"
                    >
                      {country.name}
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {citiesInCountry.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/shopify-developer/${city.countrySlug}/${city.slug}`}
                        className="text-[14px] text-white/50 hover:text-white hover:underline underline-offset-2 transition"
                      >
                        {city.city}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What We Do</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Development Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Custom Shopify App Development", body: "Private apps, custom admin tools, subscription systems, loyalty programs, and bespoke backend solutions built to your specifications." },
              { num: "02", title: "Shopify Theme Development", body: "Custom Liquid theme builds from scratch or deep theme customisation — pixel-perfect, performance-optimised, brand-aligned." },
              { num: "03", title: "API & Third-Party Integrations", body: "Connect Shopify with ERPs, CRMs, 3PLs, local payment gateways, and any external system. Robust, reliable integrations." },
              { num: "04", title: "Shopify Plus Enterprise", body: "Checkout UI extensions, Shopify Functions, B2B portals, multi-store setups, and enterprise-grade development." },
              { num: "05", title: "Headless Shopify", body: "Headless storefronts using Hydrogen, Next.js, or custom frameworks with Shopify as the commerce backend." },
              { num: "06", title: "Performance Optimisation", body: "Technical audits, Core Web Vitals improvements, and speed fixes that boost rankings and conversions." },
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

      {/* ─── US CTA ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">United States</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Looking for a US Shopify Developer?
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-5 max-w-lg">
              We serve 170+ US cities with dedicated Shopify developer pages — from New York
              and Los Angeles to Chicago, Houston, and beyond.
            </p>
            <Link
              href="/shopify-developer-near-me"
              className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
            >
              Find Your US City →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "Dallas", "Austin", "Seattle", "Denver", "Boston"].map((city, i) => (
              <span key={i} className="border border-white/[0.1] px-4 py-3 rounded-lg text-[13px] text-white/40 text-center">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Hire an Expert Shopify Developer?
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
