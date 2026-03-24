import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/shopify-store-setup-industries";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "./CreateTaskButton";
import GsapScrollReveal from "./GsapScrollReveal";
import GsapStaggerReveal from "./GsapStaggerReveal";
import IndustrySetupMarquee from "./IndustrySetupMarquee";

export const metadata: Metadata = {
  title: "Shopify Store Setup by Industry | ShopifyTasker",
  description:
    "Expert Shopify store setup, Shopify website setup and development for every industry — florists, jewellery, kids fashion, food brands, skincare, pet stores & 17+ more. Fixed price. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/shopify-store-setup/",
  },
  openGraph: {
    type: "website",
    siteName: "ShopifyTasker",
    url: "https://www.shopifytasker.com/shopify-store-setup/",
    title: "Shopify Store Setup by Industry | ShopifyTasker",
    description:
      "Expert Shopify store setup for every industry. Fixed price. Pay after delivery.",
  },
};

const setupProcess = [
  {
    step: "01",
    title: "Tell us your industry & goals",
    desc: "Describe your business and what you need. We review and respond within 1 hour with a fixed-price quote.",
  },
  {
    step: "02",
    title: "Receive a fixed-price quote",
    desc: "A detailed quote with exact scope, timeline, and price — no hidden costs, no hourly billing.",
  },
  {
    step: "03",
    title: "We build your store",
    desc: "Our Shopify experts configure every element: theme, products, payments, shipping, apps, and SEO foundations.",
  },
  {
    step: "04",
    title: "Review, approve & launch",
    desc: "You review the store, request tweaks, approve. We launch. You pay only when you are satisfied.",
  },
];

const alwaysIncluded = [
  "Shopify theme installation & brand customisation",
  "Product catalogue setup with all variants",
  "Payment gateway (Stripe, PayPal, Apple Pay)",
  "Shipping zones, rates & delivery rules",
  "Domain connection & SSL certificate",
  "Mobile-first navigation & responsive design",
  "Google Analytics 4 & Meta Pixel",
  "Essential pages (About, Contact, Returns, FAQ)",
  "Pre-launch QA checklist & test order",
  "Store walkthrough recording & handover",
  "Industry-specific apps & integrations",
  "SEO meta titles & descriptions",
];

const allIndustryNames = industries.map((i) => i.name);

export default function ShopifyStoreSetupHub() {
  return (
    <>
      <ServicePageSchema
        serviceName="Shopify Store Setup by Industry"
        serviceDescription="ShopifyTasker provides expert Shopify store setup services for 17+ industries. Fixed-price quotes, 3–7 day delivery, pay after completion."
        pageUrl="https://www.shopifytasker.com/shopify-store-setup/"
        breadcrumbs={[{ name: "Shopify Store Setup", url: "https://www.shopifytasker.com/shopify-store-setup/" }]}
        faqs={[
          { question: "How long does Shopify store setup take?", answer: "Most stores are set up in 3–7 business days depending on industry, product count, and features required." },
          { question: "Do you set up Shopify stores for any industry?", answer: "Yes. ShopifyTasker sets up Shopify stores for 17+ industries including florists, jewellery, kids fashion, food brands, skincare, pet stores, and many more." },
          { question: "Do I pay upfront?", answer: "No. ShopifyTasker operates on a pay-after-delivery model. You only pay once your store is set up and you are satisfied." },
        ]}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-black text-white px-6 md:px-14 pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <GsapScrollReveal y={20}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6 font-medium">
              Shopify Store Setup &nbsp;·&nbsp; All Industries
            </p>
          </GsapScrollReveal>

          <GsapScrollReveal y={60} delay={0.05}>
            <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[1.02] tracking-tight mb-6 max-w-4xl">
              Shopify store setup &amp;<br />
              <span className="text-[#DFF976]">website development</span><br />
              for every industry.
            </h1>
          </GsapScrollReveal>

          <GsapScrollReveal y={30} delay={0.12}>
            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-3">
              Whether you sell flowers, jewellery, artisan food, kids clothing, or handmade candles — we set up your Shopify store and website end-to-end so you can start selling fast.
            </p>
            <p className="text-white/30 text-sm max-w-md leading-relaxed mb-10">
              Shopify website setup · Shopify store setup · Shopify website development · Set up Shopify store
            </p>
          </GsapScrollReveal>

          <GsapScrollReveal y={20} delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-[#DFF976] text-black px-7 py-3.5 rounded-full font-semibold text-base hover:bg-[#d4f065] transition-colors cursor-pointer">
                Set Up My Store
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </CreateTaskButton>
              <a href="#industries" className="inline-flex items-center gap-2 text-white/40 px-7 py-3.5 text-base hover:text-white transition-colors">
                Browse {industries.length} industries
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>
          </GsapScrollReveal>

          <GsapScrollReveal y={10} delay={0.28}>
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Stores launched" },
                { value: "10+ yrs", label: "Shopify expertise" },
                { value: "1 hr", label: "Response time" },
                { value: "£0 upfront", label: "Pay after delivery" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────────── */}
      <IndustrySetupMarquee terms={allIndustryNames} />

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">

          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">The process</p>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
              From first message<br />to live store in days.
            </h2>
            <p className="text-gray-400 max-w-xl mb-14 text-sm leading-relaxed">
              Our Shopify website setup and development process is built to be transparent, fast, and fixed-price. No surprises.
            </p>
          </GsapScrollReveal>

          <GsapStaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {setupProcess.map((s) => (
              <div key={s.step} className="bg-white p-8">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-5">
                  <span className="text-[#DFF976] text-xs font-bold">{s.step}</span>
                </div>
                <h3 className="font-bold text-black text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </GsapStaggerReveal>

          <GsapScrollReveal className="mt-10 text-center">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-900 transition-colors cursor-pointer">
              Start Your Store Setup
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── INDUSTRIES GRID ──────────────────────────────────────────── */}
      <section id="industries" className="bg-[#f8f8f8] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">

          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Browse by industry</p>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-3">
              Find your industry
            </h2>
            <p className="text-gray-400 max-w-xl mb-12 text-base leading-relaxed">
              Each setup package is tailored to the specific features, apps, and configurations that {" "}
              matter most for that type of business.
            </p>
          </GsapScrollReveal>

          <GsapStaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industries.map((industry, idx) => (
              <Link
                key={industry.slug}
                href={`/shopify-store-setup/${industry.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-black hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <svg className="w-4 h-4 text-gray-200 group-hover:text-black group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <h3 className="font-bold text-black text-base mb-1.5 group-hover:underline underline-offset-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.tagline}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">{industry.category}</span>
                </div>
              </Link>
            ))}
          </GsapStaggerReveal>

          {/* Don't see your industry CTA */}
          <GsapScrollReveal className="mt-6">
            <div className="bg-black rounded-2xl p-10 md:p-14 text-center mt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 font-medium">Custom</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Don&apos;t see your industry?
              </h3>
              <p className="text-white/40 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                We set up Shopify stores for any type of business. Tell us what you sell and we&apos;ll tailor the setup to your exact requirements.
              </p>
              <CreateTaskButton className="inline-flex items-center gap-2 bg-[#DFF976] text-black px-8 py-4 rounded-full font-bold text-base hover:bg-[#d4f065] transition-colors cursor-pointer">
                Discuss My Store Setup
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </CreateTaskButton>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── ALWAYS INCLUDED ──────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <GsapScrollReveal className="md:sticky md:top-24">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Standard package</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
              What&apos;s always included<br />in every setup.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              Every Shopify store setup includes a core set of elements that ensures your store is professional, functional, and ready to take orders.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition-colors cursor-pointer">
              Get a Free Quote
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>

          <GsapScrollReveal delay={0.1}>
            <ul className="space-y-0">
              {alwaysIncluded.map((item, idx) => (
                <li key={item} className="flex items-center gap-4 py-3.5 border-b border-gray-100 last:border-0">
                  <span className="text-[11px] font-bold text-gray-200 tabular-nums w-5 flex-shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 text-sm flex-1">{item}</span>
                  <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </li>
              ))}
            </ul>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── SEO KEYWORD BLOCK ────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 py-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-4 font-medium">Our expertise</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-5xl">
              ShopifyTasker specialises in{" "}
              <strong className="text-gray-600">Shopify store setup</strong>,{" "}
              <strong className="text-gray-600">Shopify website setup</strong>,{" "}
              <strong className="text-gray-600">Shopify website setup and development</strong>,{" "}
              and full{" "}
              <strong className="text-gray-600">Shopify website development</strong>{" "}
              for businesses of every type and size.{" "}
              Whether you need to{" "}
              <strong className="text-gray-600">set up a Shopify store</strong>{" "}
              for the first time, launch a brand new{" "}
              <strong className="text-gray-600">Shopify website</strong>,{" "}
              or migrate your existing site to Shopify — our team delivers a complete, professional store ready to sell.
              All packages are fixed-price with no upfront payment required.
            </p>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-black text-white px-6 md:px-14 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <GsapScrollReveal y={60}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-8 font-medium">
              Shopify Store Setup
            </p>
            <h2 className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-5 max-w-3xl mx-auto">
              Your Shopify store could be<br />
              <span className="text-[#DFF976]">live in days, not months.</span>
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Tell us about your business and receive a fixed-price quote within 1 hour. No commitment required.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 bg-[#DFF976] text-black px-9 py-4 rounded-full font-bold text-lg hover:bg-[#d4f065] transition-colors cursor-pointer">
              Set Up My Shopify Store
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>

          <GsapScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-[10px] text-white/25 uppercase tracking-widest">
              <span>No upfront payment</span>
              <span>Fixed-price quote</span>
              <span>1-hour response</span>
              <span>10+ years expertise</span>
              <span>500+ stores launched</span>
            </div>
          </GsapScrollReveal>
        </div>
      </section>
    </>
  );
}
