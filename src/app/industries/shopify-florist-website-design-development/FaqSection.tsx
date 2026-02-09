"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you build Shopify websites specifically for florists and flower shops?",
    a: "Yes. We design and develop Shopify websites specifically for florists, flower shops, and floral brands—covering local delivery florists, wedding & event florists, subscription flower businesses, and luxury floral studios.",
  },
  {
    q: "What’s included in your Shopify florist website design & development service?",
    a: "Our florist-focused service typically includes UX planning, custom Shopify theme design, bouquet and collection templates, delivery date & location logic, CRO optimization, mobile performance, SEO setup, app integrations, and a smooth launch process.",
  },
  {
    q: "Can you redesign an existing florist Shopify store without losing SEO?",
    a: "Yes. We follow an SEO-safe redesign process—preserving URLs where possible, setting up 301 redirects, keeping metadata intact, and optimizing performance so your florist website retains rankings and local visibility.",
  },
  {
    q: "Do you support flower delivery scheduling and local delivery setup on Shopify?",
    a: "Absolutely. We configure delivery date pickers, local delivery zones, same-day or next-day delivery rules, cutoff times, and checkout logic tailored for florist operations.",
  },
  {
    q: "Can you build subscription-based flower delivery on Shopify?",
    a: "Yes. We set up flower subscription models such as weekly, bi-weekly, or monthly deliveries using Shopify subscriptions or trusted apps, with customer portals and retention-focused UX.",
  },
  {
    q: "Do you migrate florist websites from WooCommerce, Wix, Squarespace, or custom platforms?",
    a: "Yes. We handle full Shopify migrations for florists—products, collections, customer data, content pages, SEO elements, and redirects—ensuring a clean and reliable launch.",
  },
  {
    q: "Do you optimize florist Shopify stores for conversion rate and mobile users?",
    a: "Yes. We optimize key florist conversion elements like bouquet presentation, product photography layouts, trust signals, delivery clarity, sticky add-to-cart flows, cart & checkout UX, and mobile speed.",
  },
  {
    q: "Do you work with high-volume florists or Shopify Plus stores?",
    a: "Yes. We support growing and high-volume florists on Shopify Plus, including advanced customizations, performance optimization, integrations, and scalable storefront architecture.",
  },
  {
    q: "Can you help with SEO for florist Shopify websites?",
    a: "Yes. We implement florist-specific Shopify SEO, including local SEO structure, optimized collection pages, metadata, schema markup, internal linking, image optimization, and best practices for indexing and speed.",
  },
  {
    q: "How long does a Shopify florist website build or redesign take?",
    a: "Most florist Shopify projects take around 2–4 weeks, depending on design complexity, number of templates, delivery logic, integrations, and content readiness. We provide a clear timeline upfront.",
  },
  {
    q: "Do you provide ongoing Shopify support and maintenance for florists?",
    a: "Yes. We offer monthly Shopify support for florists, including bug fixes, app updates, seasonal landing pages, CRO improvements, performance tuning, SEO upkeep, and ongoing feature enhancements.",
  },
  {
    q: "Do you offer dedicated Shopify developer support for florist businesses?",
    a: "Yes. We provide dedicated Shopify developer support for florists who need ongoing help with new features, delivery updates, promotional campaigns, design tweaks, and technical maintenance.",
  },
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first by default (optional)

  return (
    <section className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[0.9fr_2.4fr] gap-20">
        {/* Left Side */}
        <div className="pt-2">
          <p className="text-5xl font-thin text-black mb-10 uppercase">FAQs</p>

          <h4 className="text-lg leading-[1.02] font-semibold text-black">
            Most common questions about
            <br />
             Florist Shopify Website Design & Development
          </h4>
        </div>

        {/* Right Side */}
        <div>
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="cursor-pointer w-full flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-[18px] font-bold text-black pr-8">
                  {item.q}
                </span>

                <span className="text-[25px] font-light text-black">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-[16px] text-black font-light max-w-2xl">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


