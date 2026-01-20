"use client";

import { useState } from "react";

export type CityFaq = {
  question: string;
  answer: string;
};

type Props = {
  city: string;
  state: string;
};

export default function CityFaqSection({ city, state }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ Auto-generated city-specific FAQs
  const faqs: CityFaq[] = [
    {
      question: `Why hire a Shopify web designer in ${city}, ${state}?`,
      answer: `Hiring a local Shopify web designer in ${city} ensures your store is tailored to your market, customers, and business goals.`,
    },
    {
      question: `What services does a Shopify web designer in ${city} offer?`,
      answer: `We provide custom Shopify design, theme customization, SEO optimization, app integrations, and ongoing support for ${city} businesses.`,
    },
    {
      question: `How much does a Shopify website design cost in ${city}?`,
      answer: `Pricing depends on your project scope. We offer fair, transparent pricing for ${city} businesses with no upfront payment.`,
    },
    {
      question: `How long does it take to build a Shopify store in ${city}?`,
      answer: `Most Shopify projects in ${city} take between 2–6 weeks depending on complexity and feedback cycles.`,
    },
    {
      question: `Do you provide ongoing Shopify support in ${city}?`,
      answer: `Yes — we offer monthly Shopify maintenance, updates, SEO, and growth support for stores in ${city}.`,
    },
    {
      question: `Will I own my Shopify store after development?`,
      answer: `Absolutely. You keep full ownership of your Shopify store, design, and content.`,
    },
  ];

  return (
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.9fr_2.4fr] gap-20">

        {/* Left Side */}
        <div>
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-10 uppercase">
            FAQs
          </p>

          <h2 className="text-[72px] leading-[1.02] font-light text-black">
            Shopify <br />
            web <br />
            designer <br />
            in {city}
          </h2>
        </div>

        {/* Right Side */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-10">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-[28px] text-black pr-8">
                  {faq.question}
                </span>

                <span className="text-[34px] font-light text-black">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-6 text-[18px] text-gray-600 max-w-2xl">
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
