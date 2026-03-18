import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Custom Shopify Store Design Services | Beautiful, Fast & Conversion-Driven",
  description:
    "Get a stunning, mobile-optimized Shopify store tailored to your brand. We design and develop Shopify websites that are fast, modern, and built to grow your business.",
};

const services = [
  {
    num: "01",
    title: "Discovery & Strategy",
    body: "We start by understanding your brand, audience, and goals. This shapes every design decision — from layout to typography to conversion flow.",
  },
  {
    num: "02",
    title: "Custom UI Design",
    body: "A bespoke design concept built for your brand — not adapted from a template. Clean, modern, and crafted to make your products the focal point.",
  },
  {
    num: "03",
    title: "Shopify Liquid Development",
    body: "Your design is built in native Shopify Liquid — editor-compatible, performant, and maintainable by your team without developer dependency.",
  },
  {
    num: "04",
    title: "Mobile-First Builds",
    body: "Every page is designed and tested mobile-first. With the majority of Shopify traffic on mobile, your store is built for where your customers actually shop.",
  },
  {
    num: "05",
    title: "Speed & Core Web Vitals",
    body: "Optimised images, deferred scripts, and lean Liquid so your store loads fast and passes Google's performance benchmarks from day one.",
  },
  {
    num: "06",
    title: "Launch & Post-Launch Support",
    body: "A thorough pre-launch QA followed by 15 days of free post-launch support to resolve anything that comes up after your store goes live.",
  },
];

export default function ShopifyStoreDesign() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Custom Shopify Store Design Services"
        serviceDescription="ShopifyTasker designs custom Shopify stores from scratch — mobile-first, brand-aligned, and built to convert. Rates start at $20/hr with a pay-after-delivery model. No upfront payment required."
        pageUrl="https://www.shopifytasker.com/shopify-store-design"
        breadcrumbs={[{ name: "Shopify Store Design", url: "https://www.shopifytasker.com/shopify-store-design" }]}
        faqs={[
          { question: "How much does a custom Shopify store design cost?", answer: "Shopify store design through ShopifyTasker starts at $20 per hour. Custom store design packages with a fixed price are also available. A detailed quote is provided before any work begins and you pay only after the work is completed to your satisfaction." },
          { question: "How long does it take to design a Shopify store?", answer: "A custom Shopify store design typically takes 2 to 4 weeks depending on the number of pages, complexity of the design, and any custom functionality required. ShopifyTasker provides a timeline in every quote." },
          { question: "Do I need to pay upfront for Shopify store design?", answer: "No. ShopifyTasker does not require any upfront payment. You pay only once the Shopify store design is completed and you are fully satisfied with the result." },
          { question: "Will my Shopify store be mobile-friendly?", answer: "Yes. Every Shopify store designed by ShopifyTasker is built mobile-first and tested across all device sizes. Mobile responsiveness is a standard part of every design project." },
        ]}
      />

      {/* Hero */}
      <section className="px-6 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify Store Design
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl mb-8">
            Custom Shopify Store Design Built to Convert
          </h1>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mb-10">
            We design and develop custom Shopify stores from scratch — brand-aligned, mobile-first, and engineered to turn visitors into customers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/create-task"
              className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
            >
              Get a Free Quote
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
            { value: "500+", label: "Shopify Stores Designed" },
            { value: "2–4 wks", label: "Typical Design Timeline" },
            { value: "10+", label: "Years of Shopify Experience" },
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
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              How We Design Your Shopify Store
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-md">
              Every store we design follows a proven process — from strategy to launch — with clear communication at every step.
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
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              A Design Team That Understands Shopify Commerce
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              We are not a generic web design agency. Every designer and developer on our team works exclusively on Shopify — and has done for over a decade.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Pay After Delivery", body: "No deposit required. You pay only once your Shopify store is designed, built, and you are fully satisfied with the result." },
              { title: "Dedicated Project Manager", body: "One point of contact throughout — no juggling multiple people or losing context between calls. Your PM keeps everything on track." },
              { title: "Fixed Pricing", body: "A detailed fixed-price quote is agreed before any work begins. The price you are quoted is the price you pay." },
              { title: "15 Days Free Support", body: "After launch, we provide 15 days of free post-launch support to resolve any issues that surface in a live environment." },
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
            Ready to Design Your Shopify Store?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us about your brand and what you need. We send a fixed quote, design your store, and you pay only when you are satisfied.
          </p>
          <Link
            href="/create-task"
            className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
