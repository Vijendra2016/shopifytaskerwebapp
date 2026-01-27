"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you build Shopify stores for health & wellness and supplement brands?",
    a: "Yes. We design and develop conversion-focused Shopify (and Shopify Plus) stores for health & wellness brands—supplements, fitness, beauty, skincare, and wellness products—optimized for UX, mobile, speed, and revenue.",
  },
  {
    q: "What’s included in your Health & Wellness Shopify website design & development service?",
    a: "Typically: store strategy + UX planning, custom theme development, product/collection templates, conversion optimization (CRO), performance improvements, SEO setup (titles, meta, schema), app integrations, and a launch checklist.",
  },
  {
    q: "Can you redesign an existing Shopify health & wellness store without losing SEO?",
    a: "Yes. We handle Shopify redesigns with an SEO-safe approach—URL mapping, 301 redirects when needed, metadata preservation, technical SEO checks, and performance optimization so rankings and traffic are protected during the transition.",
  },
  {
    q: "Do you handle migrations to Shopify from WooCommerce, Magento, or custom platforms?",
    a: "Yes. We migrate products, collections, customers, orders (when required), content pages, and SEO elements. We also set up redirects and validate tracking so your health & wellness store launches cleanly on Shopify.",
  },
  {
    q: "Can you set up subscriptions for supplements and wellness products on Shopify?",
    a: "Absolutely. We can implement Shopify subscriptions (or subscription apps), configure recurring plans, customer portal flows, bundle options, and subscription-first UX to increase retention and LTV.",
  },
  {
    q: "Do you optimize Shopify stores for conversion rate (CRO) and mobile performance?",
    a: "Yes. We improve key conversion elements like navigation, PDP layout, trust signals, reviews, bundles, sticky add-to-cart UX, cart/checkout friction, and speed—especially on mobile where most health & wellness traffic happens.",
  },
  {
    q: "Do you work with Shopify Plus for high-volume health & wellness brands?",
    a: "Yes. We support Shopify Plus builds and improvements, including advanced integrations, performance tuning, and scalable storefront architecture for fast growth and larger catalogs.",
  },
  {
    q: "Can you help with SEO for health & wellness Shopify websites?",
    a: "Yes. We implement technical and on-page Shopify SEO: clean site structure, metadata, internal linking, schema markup, speed, image optimization, and indexation best practices—plus guidance for content and landing pages.",
  },
  {
    q: "How long does a Shopify website build or redesign usually take?",
    a: "Most projects take 2–4 weeks depending on scope (design depth, number of templates, integrations, migration complexity, and content readiness). We’ll provide a clear timeline after reviewing your current store and goals.",
  },
  {
    q: "Do you provide ongoing Shopify support and monthly maintenance?",
    a: "Yes. We offer monthly support retainers for health & wellness stores—bug fixes, app updates, new sections, CRO experiments, speed improvements, SEO upkeep, and ongoing feature development.",
  },
   {
    q: "Do you provide dedicated developer support for health & wellness stores?",
    a: "Yes. We offer  dedicated develope support for health & wellness stores—bug fixes, app updates, new sections, CRO experiments, speed improvements, SEO upkeep, and ongoing feature development.",
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
            Health & Wellness Shopify Website Design & Development
          </h4>
        </div>

        {/* Right Side */}
        <div>
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
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
