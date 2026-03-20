"use client";

import { useState } from "react";

type Props = {
  city: string;
  country: string;
  currency: string;
  localPayments: string;
};

export default function IntlCityFaqSection({ city, country, currency, localPayments }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `Why hire a Shopify developer in ${city}, ${country}?`,
      answer: `Hiring a Shopify developer for your ${city} business means getting a specialist who understands both Shopify's technical platform and your local market — including ${currency} currency configuration, ${country}-specific tax compliance, local payment gateways like ${localPayments}, and the regional consumer behaviour that affects how your store should be built. ShopifyTasker has worked with ${country}-based Shopify merchants across industries and delivers fully localised, technically expert stores.`,
    },
    {
      question: `What Shopify development services do you provide in ${city}?`,
      answer: `For ${city}-based businesses, we provide: custom Shopify app development, Liquid theme builds, third-party API integrations (ERP, CRM, 3PL, payment gateways), Shopify Plus enterprise development, platform migrations from WooCommerce or Magento, headless Shopify builds, performance optimisation, and ongoing monthly developer retainer plans.`,
    },
    {
      question: `Can you configure my Shopify store for ${country}?`,
      answer: `Yes. We configure ${currency} as the store currency, set up country-specific tax rules, integrate local payment methods (${localPayments}), configure ${country}-specific shipping carriers and rates, and ensure your store meets ${country}'s legal and compliance requirements for eCommerce.`,
    },
    {
      question: `Can you build a custom Shopify app for my ${city} business?`,
      answer: `Yes. We build private Shopify apps, custom admin tools, subscription systems, loyalty programmes, B2B portals, and complex backend integrations tailored to your specific business requirements — all compatible with Shopify's latest APIs and app frameworks.`,
    },
    {
      question: `Do you work on Shopify Plus for ${country} enterprise brands?`,
      answer: `Yes. We have extensive Shopify Plus experience — checkout UI extensions, Shopify Functions, B2B wholesale portals, multi-store configurations, Shopify Flow automation, and custom enterprise solutions. We work with Shopify Plus brands in ${country} and globally.`,
    },
    {
      question: `How much does Shopify development cost in ${city}?`,
      answer: `Our hourly rate starts from $20/hr (USD) and we offer fixed-price quotes for defined project scopes. All pricing is agreed upfront — and you pay only after the work is delivered to your satisfaction. No upfront deposits, no hidden fees. We work with ${country}-based clients on the same transparent model as all our global clients.`,
    },
    {
      question: `How long does a Shopify development project take?`,
      answer: `Small tasks and integrations can be completed in 24–72 hours. Full custom app builds or complex system integrations typically take 2–6 weeks. We provide a detailed scope and clear timeline before starting, with milestone updates throughout the project.`,
    },
    {
      question: `Do you offer ongoing Shopify support for ${city} businesses?`,
      answer: `Yes. We offer monthly retainer plans for ongoing Shopify development in ${city} — covering bug fixes, new feature development, integrations, performance monitoring, app updates, and any technical work your store needs. Retainers give you a dedicated developer available month by month.`,
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
            Developer in{" "}
            <span className="italic">{city}</span>
          </h2>
          <p className="text-[14px] text-white/50 leading-[1.7] mt-5">
            Everything you need to know before hiring a Shopify developer in {city}, {country}.
          </p>
        </div>
        <div className="border-t border-white/[0.08]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/[0.08]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
