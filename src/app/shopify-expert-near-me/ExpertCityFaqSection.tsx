"use client";

import { useState } from "react";

export default function ExpertCityFaqSection({ city, state }: { city: string; state: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `What does a Shopify expert in ${city}, ${state} actually do?`,
      answer: `A Shopify expert handles the full spectrum of Shopify work — store design and theme customisation, custom development and app integration, SEO and speed optimisation, platform migrations, and ongoing monthly support. At ShopifyTasker, our ${city}-serving team covers every Shopify service so you never need multiple agencies.`,
    },
    {
      question: `What Shopify services do you offer in ${city}?`,
      answer: `For ${city} businesses we provide: Shopify store design and theme customisation, custom Liquid and app development, Shopify store setup and launch, SEO and Core Web Vitals optimisation, platform migrations from WooCommerce and Magento, Shopify Plus enterprise solutions, and ongoing monthly support retainers.`,
    },
    {
      question: `How do I get started with a Shopify project in ${city}?`,
      answer: `It is a simple three-step process. First, submit your project brief using the Get a Free Quote button — describe what you need. Second, we review your brief and send a fixed-price quote with a clear timeline. Third, once you approve, work begins immediately. You pay only after delivery.`,
    },
    {
      question: `Can you redesign my existing Shopify store?`,
      answer: `Yes. If your Shopify store is outdated, slow, or not converting well, we will redesign it from the ground up — new UI/UX, faster load times, mobile-first layouts, and a design that gives your ${city} business a competitive edge. We handle all SEO redirects and migration in the process.`,
    },
    {
      question: `Do you work on Shopify Plus for ${city} businesses?`,
      answer: `Yes. We have extensive Shopify Plus experience — checkout UI extensions, Shopify Functions, B2B wholesale portals, multi-store configurations, Shopify Flow automation, and custom enterprise builds. We work with Shopify Plus brands in ${city} and globally.`,
    },
    {
      question: `How much does a Shopify expert cost in ${city}?`,
      answer: `Our hourly rate starts from $20/hr and we offer fixed-price quotes for defined project scopes. All pricing is agreed upfront — and you pay only after the work is delivered to your satisfaction. No deposits, no hidden charges.`,
    },
    {
      question: `How long does a Shopify project take?`,
      answer: `Small tasks can be completed in 24–72 hours. A full custom store design or complex development project typically takes 2–5 weeks. We agree on a clear timeline with milestones before starting — no vague estimates.`,
    },
    {
      question: `Do you offer ongoing Shopify support after the project is done?`,
      answer: `Yes. Our monthly retainer plans cover ongoing design updates, development tasks, bug fixes, new integrations, SEO monitoring, and any Shopify work your ${city} store needs each month. One fixed monthly fee, no surprises.`,
    },
  ];

  return (
    <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">FAQs</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">
            Frequently Asked
            <br />
            Questions — Shopify
            <br />
            Expert in{" "}
            <span className="italic">{city}</span>
          </h2>
          <p className="text-[14px] text-white/50 leading-[1.7] mt-5">
            Everything you need to know before hiring a Shopify expert in {city}, {state}.
          </p>
        </div>
        <div className="border-t border-white/[0.08]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/[0.08]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start cursor-pointer justify-between gap-8 py-6 text-left group"
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
