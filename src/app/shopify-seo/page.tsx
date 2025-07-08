import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";

export const metadata: Metadata = {
  title: "Shopify SEO Services | Rank Higher & Boost Your Sales",
  description:
    "Improve your Shopify store’s visibility with expert SEO. From technical optimization to keyword strategy, we help you attract more traffic and convert better.",
};

export default function ShopifySEOPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 md:px-30 h-[60vh] md:h-[80vh] py-16 bg-black text-white">
        <div className="services flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-8xl font-medium tracking-tight p-5">
            Grow Shopify Stores with Smart SEO Strategies
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">
            Want to rank higher on Google and bring more customers to your
            store? Our Shopify SEO services cover everything from audits to
            content and keyword strategy.
          </p>
        </div>
      </section>

      <section className="bg-[#fefaf6] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left Column */}
          <div className="md:w-[30%]">
            <h2 className="text-5xl font-extrabold text-black leading-tight">
              Smarter SEO for Growing Shopify Store
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              From keyword research to technical fixes, we help your Shopify
              store gain visibility and stay ahead of competitors.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Get a Free SEO Audit
            </Link>
          </div>

          <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🔍</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Keyword Strategy
                </h3>
                <p className="text-gray-700">
                  Target the right keywords that bring qualified traffic and
                  convert into sales.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">⚙️</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">Technical SEO</h3>
                <p className="text-gray-700">
                  Improve site speed, structure, and mobile optimization for
                  better indexing and performance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">📝</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">Content Setup</h3>
                <p className="text-gray-700">
                  Create SEO-friendly product titles, meta descriptions, and
                  blog content that drives organic traffic.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">📈</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">Ongoing SEO</h3>
                <p className="text-gray-700">
                  Monthly reporting, performance tracking, and keyword updates
                  to keep your rankings strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00bca9] text-white py-20 rounded-t-[80px] text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-8">
          Ready to grow your traffic with expert Shopify SEO?
        </h2>
        <Link href="/create-task" passHref>
          <div className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition cursor-pointer">
            <span className="mr-3">Let’s Get Started</span>
          </div>
        </Link>
      </section>

      {/* Additional Services */}
      <ShopifyExpertServices />
    </main>
  );
}
