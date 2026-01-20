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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* Left Side */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 mb-8">
            FAQs
          </p>

          <h2 className="text-[72px] leading-[1.05] font-light text-black">
            Shopify <br />
            SEO <br />
            Agency
          </h2>
        </div>

        {/* Right Side */}
        <div className="space-y-10">
          {faqs.map((question, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-[26px] font-normal text-black">
                  {question}
                </span>

                <span className="text-[32px] font-light text-black">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {/* Hidden answer area (kept for future if needed) */}
              {openIndex === index && (
                <p className="mt-6 text-lg text-gray-600 max-w-xl">
                  This answer area is ready if you want accordion content later.
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
