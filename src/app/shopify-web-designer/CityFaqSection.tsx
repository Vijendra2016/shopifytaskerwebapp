"use client";

import { useState } from "react";

type Props = {
  city: string;
  state: string;
};

export default function CityFaqSection({ city, state }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `Why hire a Shopify web designer in ${city}, ${state}?`,
      answer: `Hiring a Shopify specialist in ${city} means working with someone who understands both the Shopify platform and your local market. At ShopifyTasker, we design stores that reflect your brand identity, connect with your target audience, and are built to convert — not generic templates with your logo dropped in.`,
    },
    {
      question: `Can you create a fully custom Shopify design for my brand?`,
      answer: `Yes. Whether you are launching a new brand or upgrading an existing store in ${city}, ${state}, we build fully custom Shopify designs from scratch — custom Liquid sections, unique layouts, branded typography, and imagery. Every design is unique to your business.`,
    },
    {
      question: `Will my Shopify store be mobile-friendly?`,
      answer: `Absolutely. Every Shopify store we design is built mobile-first. Over 70% of eCommerce traffic comes from mobile devices, so we ensure your ${city} store delivers a fast, smooth, and conversion-ready experience on every screen.`,
    },
    {
      question: `Can you redesign my existing Shopify store?`,
      answer: `Yes. If your current store looks outdated, loads slowly, or is not converting well, we will redesign it completely — new UI/UX, faster load times, and a look that gives your ${city} business a competitive edge. We also handle data and SEO migration.`,
    },
    {
      question: `Will my Shopify store be optimised for sales?`,
      answer: `Conversion-focused design is at the core of everything we build. We structure your navigation, product pages, and checkout flow to reduce friction and guide visitors in ${city}, ${state} toward completing a purchase — not just browsing.`,
    },
    {
      question: `How long does a Shopify web design project take?`,
      answer: `Most projects take 2–5 weeks from brief to launch. A theme customisation can be completed in a few days, while a full custom store design typically takes 3–5 weeks. We provide a clear timeline with milestones before we start any work.`,
    },
    {
      question: `Do you offer ongoing Shopify support after launch?`,
      answer: `Yes. We offer monthly retainer plans that include ongoing design updates, new landing pages, seasonal banners, speed monitoring, and any Shopify-related work your ${city} business needs after launch.`,
    },
    {
      question: `What does Shopify web design cost in ${city}?`,
      answer: `Our pricing is transparent and task-based. Hourly rates start from $20/hr, and we offer fixed-price quotes for defined projects. All pricing is agreed upfront — and you pay only after the work is delivered to your satisfaction.`,
    },
  ];

  return (
    <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">

        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
            FAQs
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal leading-[1.1] tracking-tight text-white">
            Frequently Asked
            <br />
            Questions — Shopify
            <br />
            Web Design in{" "}
            <span className="italic">{city}</span>
          </h2>
          <p className="text-[14px] text-white/50 leading-[1.7] mt-5">
            Everything you need to know before hiring a Shopify web designer in{" "}
            {city}, {state}.
          </p>
        </div>

        {/* Right — Accordion */}
        <div className="border-t border-white/[0.08]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/[0.08]">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-start justify-between gap-8 py-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-[15px] md:text-[16px] font-medium text-white/80 group-hover:text-white leading-snug transition">
                  {faq.question}
                </span>
                <span className="text-[22px] font-light text-white/40 group-hover:text-white/70 shrink-0 mt-0.5 transition">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-7 text-[14px] text-white/55 leading-[1.75] max-w-2xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
