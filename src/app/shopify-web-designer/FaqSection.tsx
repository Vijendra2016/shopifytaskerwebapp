"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does a Shopify SEO agency do?",
    answer:
      "A Shopify SEO agency optimizes your Shopify store to rank higher on search engines. This includes technical SEO, on-page optimization, content strategy, and link building to increase organic traffic and sales.",
  },
  {
    question: "How is Shopify SEO different from SEO on other platforms?",
    answer:
      "Shopify SEO focuses on Shopify’s platform-specific structure, Liquid templates, collections, product pages, and app integrations. It requires specialized optimization techniques unique to Shopify.",
  },
  {
    question: "How long does Shopify SEO take to see results?",
    answer:
      "Typically, noticeable results appear within 3–6 months, depending on competition, website condition, and content strategy.",
  },
  {
    question: "What is included in your Shopify SEO services?",
    answer:
      "Our services include technical SEO audits, keyword research, on-page optimization, content creation, speed optimization, schema setup, and monthly performance tracking.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* Left Title */}
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
            FAQs
          </p>
          <h2 className="text-5xl font-light leading-tight">
            Shopify <br /> SEO <br /> Agency
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-xl font-medium">
                  {faq.question}
                </span>
                <span className="text-3xl font-light">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
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
