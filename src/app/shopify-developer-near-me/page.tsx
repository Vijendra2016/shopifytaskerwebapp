import { Metadata } from "next";
import Link from "next/link";
import cities from "@/lib/cities.json";
import TestimonialCard from "@/app/components/TestimonialCard";
import CreateTaskButton from "./CreateTaskButton";

export const metadata: Metadata = {
  title: "Shopify Developer Near Me | ShopifyTasker",
  description:
    "Find a top-rated Shopify developer near you. ShopifyTasker provides expert Shopify development — custom apps, theme builds, API integrations, Shopify Plus — across 170+ US cities. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/shopify-developer-near-me",
  },
};

const usStates = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const groupedByState = usStates.reduce<Record<string, typeof cities>>((acc, state) => {
  const stateCities = cities.filter((c) => c.state === state);
  if (stateCities.length > 0) acc[state] = stateCities;
  return acc;
}, {});

export default function ShopifyDeveloperNearMe() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* ─── HERO ─── */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify Development &nbsp;·&nbsp; United States
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[1.06] tracking-tight text-white max-w-4xl mb-8">
            Shopify Developer Near Me
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-2xl mb-10">
            ShopifyTasker provides expert Shopify development across 170+ US cities. Custom apps,
            Liquid theme builds, API integrations, Shopify Plus solutions, and ongoing
            developer support — at transparent rates. Pay only after delivery.
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
            { value: "170+", label: "US Cities Served" },
            { value: "$0 upfront", label: "Pay After Work is Done" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
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
              { num: "01", title: "Custom Shopify App Development", body: "Private apps, public app listings, custom admin tools, subscription systems, loyalty programs, and bespoke backend solutions built to your exact specifications." },
              { num: "02", title: "Shopify Theme Development", body: "Custom Liquid theme builds from scratch or deep customisation beyond the standard theme editor — pixel-perfect, performance-optimised, and brand-aligned." },
              { num: "03", title: "API & Third-Party Integrations", body: "Connect Shopify with ERPs, CRMs, 3PLs, payment gateways, and any external system. NetSuite, SAP, Salesforce, ShipStation, QuickBooks, and more." },
              { num: "04", title: "Shopify Plus Enterprise", body: "Checkout UI extensions, Shopify Functions, B2B wholesale portals, multi-store configurations, Shopify Flow automation, and enterprise-grade solutions." },
              { num: "05", title: "Headless Shopify", body: "Build blazing-fast headless storefronts using Hydrogen, Next.js, or custom frameworks with Shopify as the commerce backend and Storefront API." },
              { num: "06", title: "Performance Optimisation", body: "Technical audits, Liquid refactoring, JavaScript optimisation, Core Web Vitals improvements, and speed fixes that boost rankings and conversions." },
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

      {/* ─── WHY US ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              The Shopify Developer Team US Businesses Trust
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Pay After Delivery", body: "No upfront payment — ever. You pay only once the work is done and you are satisfied." },
              { title: "10+ Years Experience", body: "A decade of Shopify development across every industry, platform version, and technical stack." },
              { title: "Fixed Price Quotes", body: "Detailed fixed quotes before we start. No scope creep charges, no billing surprises." },
              { title: "Fast Turnarounds", body: "Small tasks in 24–72 hours. Complex projects delivered with clear milestones." },
              { title: "Full Technical Team", body: "Developers, QA engineers, and architects — all in-house at rates from $20/hr." },
              { title: "Clean Code Handover", body: "Every build comes with well-documented code and full handover so your team can manage it." },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="border-b border-white/[0.08]">
        <TestimonialCard />
      </section>

      {/* ─── CITIES BY STATE ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Coverage</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Find a Shopify Developer Near You
            </h2>
            <p className="text-[15px] text-white/55 mt-4 max-w-xl leading-[1.7]">
              We serve businesses across 170+ US cities. Select your city to see a dedicated Shopify development page for your area.
            </p>
          </div>
          <div className="space-y-10">
            {Object.entries(groupedByState).map(([state, stateCities]) => (
              <div key={state}>
                <p className="text-[11px] font-mono tracking-widest text-white/30 uppercase mb-4">{state}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {stateCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/shopify-developer-near-me/${city.slug}`}
                      className="text-[14px] text-white/50 hover:text-white hover:underline underline-offset-2 transition"
                    >
                      {city.city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERNATIONAL CTA ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">International</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Not in the US? We Work with Shopify Merchants Worldwide
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-5 max-w-lg">
              ShopifyTasker serves eCommerce businesses across Australia, the UK, Canada, Germany,
              UAE, Singapore, New Zealand, and Ireland — with country-specific Shopify
              expertise for each market.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Australia", href: "/shopify-developer/australia" },
              { label: "United Kingdom", href: "/shopify-developer/uk" },
              { label: "Canada", href: "/shopify-developer/canada" },
              { label: "Germany", href: "/shopify-developer/germany" },
              { label: "UAE", href: "/shopify-developer/uae" },
              { label: "Singapore", href: "/shopify-developer/singapore" },
              { label: "New Zealand", href: "/shopify-developer/new-zealand" },
              { label: "Ireland", href: "/shopify-developer/ireland" },
              { label: "Netherlands", href: "/shopify-developer/netherlands" },
              { label: "France", href: "/shopify-developer/france" },
            ].map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="border border-white/[0.1] px-4 py-3 rounded-lg text-[14px] text-white/60 hover:text-white hover:border-white/40 transition text-center"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Hire a Shopify Developer?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us what you need built. We will send a fixed quote and start work — you pay only when you are satisfied.
          </p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Quote →
          </CreateTaskButton>
        </div>
      </section>

    </main>
  );
}
