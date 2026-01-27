"use client";

import { useState } from "react";

const faqs = [
  "What does a Shopify SEO agency do?",
  "How is Shopify SEO different from SEO on other platforms?",
  "How long does Shopify SEO take to see results?",
  "What is included in your Shopify SEO services?",
  "Do you work with Shopify Plus brands?",
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[0.9fr_2.4fr] gap-20">

        {/* Left Side */}
        <div className="pt-2">
          <p className="text-5xl  font-thin  text-black mb-10 uppercase">
            FAQs
          </p>

          <h2 className="text-[40px] leading-[1.02] font-thin text-black">
            Why Hire Shopify web designer in Chesapeake, VA
          </h2>
        </div>

        {/* Right Side */}
        <div>
          {faqs.map((question, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-10"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-[28px] font-normal text-black pr-8">
                  {question}
                </span>

                <span className="text-[34px] font-light text-black">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {/* Optional Answer */}
              {openIndex === index && (
                <p className="mt-6 text-[18px] text-gray-600 max-w-2xl">
                  Answer text goes here if you want accordion content.
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
