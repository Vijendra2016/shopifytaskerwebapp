import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Shopify SEO Services | Rank Higher & Boost Your Sales",
  description:
    "Improve your Shopify store's visibility with expert SEO. From technical optimization to keyword strategy, we help you attract more traffic and convert better.",
};

const services = [
  {
    num: "01",
    title: "Technical SEO Audit",
    body: "A full crawl of your Shopify store covering page speed, crawlability, duplicate content, broken links, structured data, and Core Web Vitals — with a prioritised fix list.",
  },
  {
    num: "02",
    title: "Keyword Research & Strategy",
    body: "We identify the exact search terms your customers use and map them to product, collection, and landing pages to drive qualified, purchase-intent traffic.",
  },
  {
    num: "03",
    title: "On-Page Optimisation",
    body: "Meta titles, descriptions, heading structure, image alt text, internal linking, and schema markup — all optimised to the current Google quality guidelines.",
  },
  {
    num: "04",
    title: "Core Web Vitals & Speed",
    body: "We improve LCP, CLS, and INP scores by optimising images, scripts, and Liquid rendering so your store passes Google's page experience signals.",
  },
  {
    num: "05",
    title: "Content Strategy",
    body: "SEO-driven blog content, collection page copy, and product descriptions written to rank and convert — not just fill space.",
  },
  {
    num: "06",
    title: "Monthly SEO Retainer",
    body: "Ongoing rank tracking, reporting, algorithm-proofing, and continuous improvements so your Shopify store keeps moving up the results.",
  },
];

export default function ShopifySEOPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Shopify SEO Services"
        serviceDescription="ShopifyTasker provides expert Shopify SEO services including technical SEO audits, keyword strategy, Core Web Vitals optimization, on-page SEO, and ongoing monthly SEO. Pay after delivery — no upfront fees."
        pageUrl="https://www.shopifytasker.com/shopify-seo"
        breadcrumbs={[{ name: "Shopify SEO", url: "https://www.shopifytasker.com/shopify-seo" }]}
        faqs={[
          { question: "What does Shopify SEO include?", answer: "Shopify SEO from ShopifyTasker includes a technical SEO audit, keyword research, meta title and description optimisation, image alt text, schema markup, internal linking, Core Web Vitals improvements, and blog content strategy. Monthly SEO retainers include ongoing rank tracking and reporting." },
          { question: "How long does it take to see results from Shopify SEO?", answer: "Most Shopify stores see measurable improvements in organic traffic within 3 to 6 months of implementing a comprehensive SEO strategy. Technical fixes often show results within 4 to 8 weeks." },
          { question: "Does ShopifyTasker offer Shopify SEO audits?", answer: "Yes. ShopifyTasker provides free Shopify SEO audits as a starting point. The audit covers technical issues, keyword gaps, page speed, mobile usability, and structured data. Contact the team to request your free audit." },
        ]}
      />

      {/* Hero */}
      <section className="px-6 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify SEO
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl mb-8">
            Shopify SEO That Drives Real Organic Growth
          </h1>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mb-10">
            From technical audits to monthly retainers — we help Shopify stores rank higher, attract better traffic, and convert more visitors into customers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/create-task"
              className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
            >
              Get a Free SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[
            { value: "500+", label: "Shopify Stores Optimised" },
            { value: "10+", label: "Years of Shopify Experience" },
            { value: "3–6 mo", label: "Typical Time to Results" },
            { value: "$0 upfront", label: "Pay After Delivery" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What We Do</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              Shopify SEO Services
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-md">
              A full-spectrum SEO approach built specifically for Shopify stores and the way Google evaluates them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="border border-white/[0.08] p-8 flex flex-col -mt-px -ml-px hover:bg-white/[0.04] transition"
              >
                <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">{s.num}</p>
                <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker SEO</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              SEO Built for Shopify — Not Generic Websites
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              Shopify has unique SEO constraints — canonical tags, duplicate collection URLs, pagination, and theme-level rendering. We understand all of it.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Shopify-Specific Expertise", body: "We work exclusively on Shopify stores. We know the platform's SEO quirks and how to work with — and around — them." },
              { title: "Fixed-Price Transparency", body: "Every project comes with a detailed scope and fixed price before we start. No retainer lock-ins without results." },
              { title: "Pay After Delivery", body: "We do not charge upfront. You pay only once the work is done and you are satisfied." },
              { title: "Measurable Reporting", body: "Monthly reports covering keyword rankings, organic traffic, Core Web Vitals, and conversion impact so you always know your ROI." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 py-7 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono text-white/20 shrink-0 pt-1 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Grow Your Shopify Traffic?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Request a free SEO audit. We review your store and send a prioritised action plan — no commitment required.
          </p>
          <Link
            href="/create-task"
            className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition"
          >
            Get a Free SEO Audit
          </Link>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
