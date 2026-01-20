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

  // ✅ Human-written, city + state optimized FAQs
  const faqs: CityFaq[] = [
    {
      question: `Why hire a Shopify web designer in ${city}, ${state}?`,
      answer: `Because your store should feel like it truly belongs in ${city}. We design Shopify websites that reflect your brand, connect with local customers, and build trust from the first click — not just cookie-cutter templates.`,
    },
    {
      question: `Can you create a custom Shopify design for my brand?`,
      answer: `Absolutely. Whether you're launching a new brand or upgrading an existing store in ${city}, ${state}, we craft custom Shopify designs that match your identity, style, and business goals.`,
    },
    {
      question: `Will my Shopify store be mobile-friendly?`,
      answer: `Yes. Every Shopify store we design is fully responsive. Your customers in ${city} and across ${state} will enjoy a smooth shopping experience on mobile, tablet, and desktop.`,
    },
    {
      question: `Do you redesign existing Shopify stores?`,
      answer: `Definitely. If your current Shopify store looks outdated or isn’t converting well, we’ll redesign it with modern UI, improved UX, and faster performance — giving your ${city} business a fresh start.`,
    },
    {
      question: `Will my Shopify website be optimized for sales?`,
      answer: `Yes. We design Shopify stores that don’t just look good — they guide visitors toward checkout, improve product discovery, and increase conversions for businesses in ${city}, ${state}.`,
    },
    {
      question: `How long does a Shopify web design project take in ${city}?`,
      answer: `Most Shopify web design projects take about 2–5 weeks. We follow a clear, collaborative process so your ${city} store launches smoothly and on time.`,
    },
    {
      question: `Do you offer ongoing Shopify support after launch?`,
      answer: `Yes. We provide continuous Shopify support, updates, and growth assistance for stores in ${city}, ${state}, so your website keeps improving long after launch.`,
    },
  ];

  return (
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.6fr_2.4fr] gap-20">

        {/* Left Side */}
        <div>
          <p className="text-sm tracking-[0.3em] text-black mb-10 uppercase">
            FAQs
          </p>

          <h2 className="text-4xl leading-[1.02] font-light text-black">
            Hire Shopify
            Web
            Designer <br />
            in {city}
          </h2>
        </div>

        {/* Right Side */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className=" py-2">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-[28px] font-thin leading-[1.3] text-black pr-2">
                  {faq.question}
                </span>

                <span className="text-[30px] font-bold text-black">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-1 text-sm font-thin text-black max-w-2xl">
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
