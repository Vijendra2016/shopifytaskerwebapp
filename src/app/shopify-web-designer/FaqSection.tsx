"use client";

import { useState } from "react";

type Props = {
  city: string;
  state: string;
};

export default function FaqSection({ city, state }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does a Shopify web designer do?",
      answer:
        "A Shopify web designer creates the visual look, feel, and structure of your store — including theme customisation, branding, page layout, typography, colour schemes, and mobile responsiveness. Their goal is to make your store look professional and convert visitors into buyers.",
    },
    {
      question: "How is Shopify web design different from general web design?",
      answer:
        "Shopify web design requires platform-specific knowledge — Liquid templating, Shopify's section-based theme system, and eCommerce UX best practices. A Shopify specialist understands the platform's opportunities and constraints in a way that a generalist designer simply cannot.",
    },
    {
      question: "How long does a Shopify web design project take?",
      answer:
        "Most projects take 2–5 weeks. A theme customisation or specific page redesign can be done in a few days. A full custom Shopify store design from scratch typically takes 3–5 weeks. We always agree on a clear timeline before starting.",
    },
    {
      question: `What Shopify design services do you offer in ${city}, ${state}?`,
      answer: `We offer custom store design, theme customisation, store redesign, mobile optimisation, product page design, landing page design, Shopify SEO, speed optimisation, and ongoing monthly design support — all for businesses in ${city}.`,
    },
    {
      question: "Do you work with Shopify Plus brands?",
      answer:
        "Yes. We have experience designing for Shopify Plus brands — including checkout extensions, custom storefronts, B2B features, and high-volume store architectures. ShopifyTasker handles both standard Shopify and Shopify Plus accounts.",
    },
  ];

  return (
    <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">

        {/* Left */}
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
            FAQs
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal leading-[1.1] tracking-tight text-white">
            Shopify Web Design Questions Answered
          </h2>
        </div>

        {/* Accordion */}
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
