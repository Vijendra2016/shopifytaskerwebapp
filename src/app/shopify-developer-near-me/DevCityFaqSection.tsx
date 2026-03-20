"use client";

import { useState } from "react";

type Props = {
  city: string;
  state: string;
};

export default function DevCityFaqSection({ city, state }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `Why hire a Shopify developer in ${city}, ${state}?`,
      answer: `Hiring a dedicated Shopify developer for your ${city} business means working with a specialist who understands the Shopify ecosystem in depth — from Liquid templating and Storefront API to custom app development and Shopify Plus. At ShopifyTasker, we bring 10+ years of Shopify development experience to every project, with a full team that handles everything from theme builds to complex integrations and ongoing technical support.`,
    },
    {
      question: `What Shopify development services do you offer in ${city}?`,
      answer: `We offer a full range of Shopify development services for ${city} businesses: custom Shopify app development, Liquid theme development, third-party API integrations (ERP, CRM, 3PL, payment gateways), Shopify Plus enterprise development, headless Shopify builds, platform migrations from WooCommerce or Magento, and ongoing retainer-based technical support.`,
    },
    {
      question: `Can you build a custom Shopify app for my ${city} business?`,
      answer: `Yes. We build private Shopify apps, public app listings, and backend systems tailored to your specific business requirements. Whether you need a custom inventory management tool, a bespoke subscription system, a loyalty programme, or a bespoke B2B portal, our developers can build it on the Shopify platform.`,
    },
    {
      question: `Can you integrate Shopify with my ERP, CRM, or third-party system?`,
      answer: `Absolutely. We handle complex API integrations between Shopify and third-party platforms — including NetSuite, SAP, Salesforce, HubSpot, QuickBooks, ShipStation, Brightpearl, and any custom API. We build robust, reliable integrations with proper error handling and monitoring.`,
    },
    {
      question: `Do you work on Shopify Plus for ${city} enterprise brands?`,
      answer: `Yes. We have extensive Shopify Plus experience — including checkout UI extensions, Shopify Functions, B2B wholesale portals, multi-store setups, automation flows with Shopify Flow, and custom checkout customisations. We work with Shopify Plus brands in ${city} and globally.`,
    },
    {
      question: `How long does a Shopify development project take?`,
      answer: `Timelines vary by project scope. A theme customisation or small integration can be done in 24–72 hours. A full custom Shopify app or complex integration typically takes 2–6 weeks. We provide a detailed scope and timeline before starting, with milestones throughout.`,
    },
    {
      question: `What does Shopify development cost in ${city}?`,
      answer: `Our hourly rate starts from $20/hr and we offer fixed-price quotes for defined project scopes. All pricing is agreed upfront — and you pay only after the work is delivered to your satisfaction. No upfront deposits, no hidden fees.`,
    },
    {
      question: `Do you offer ongoing Shopify developer support?`,
      answer: `Yes. We offer monthly retainer plans for ongoing Shopify development — covering bug fixes, feature additions, new integrations, performance monitoring, app updates, and any development work your ${city} store needs each month. Retainers give you a dedicated developer on call.`,
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
            Developer in{" "}
            <span className="italic">{city}</span>
          </h2>
          <p className="text-[14px] text-white/50 leading-[1.7] mt-5">
            Everything you need to know before hiring a Shopify developer in{" "}
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
