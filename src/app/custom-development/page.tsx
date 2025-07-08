import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";

export const metadata: Metadata = {
  title: "Shopify Custom Development Services | Built for Your Business",
  description:
    "From custom features to full backend logic, we build Shopify solutions that go beyond the theme layer. Get advanced functionality designed around your unique business needs.",
};

export default function ShopifyCustomDevelopment() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 md:px-30 h-[60vh] md:h-[80vh] py-16 bg-black text-white">
        <div className="services flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-8xl text-white font-medium tracking-tight p-5">
            Power Up Your Store with Custom Development
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">
            Need more than what themes offer? We build custom apps, features,
            and integrations that power your unique business workflows on
            Shopify.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#fefaf6] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left Column */}
          <div className="md:w-[30%]">
            <h2 className="text-5xl font-extrabold text-black leading-tight">
              Built for Scalability & Flexibility
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              From backend automation to complex logic and third-party
              integrations — we develop Shopify features that grow with your
              business.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Right Column - Features */}
          <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🧱</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Custom Apps & Scripts
                </h3>
                <p className="text-gray-700">
             We create private apps, custom features, and smart automations that take Shopify beyond its default limits — tailored to how your business really works.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🔌</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  API Integrations
                </h3>
                <p className="text-gray-700">
                 Easily connect your store with CRMs, ERPs, shipping platforms, and other external tools using powerful Shopify API integrations.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🛒</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Advanced Cart Logic
                </h3>
                <p className="text-gray-700">
                  Implement custom checkout rules, discount logic, and customer
                  flows tailored to your sales model.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">⚙️</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Backend Development
                </h3>
                <p className="text-gray-700">
                  We handle the tech behind the scenes — webhooks, data
                  syncing, custom middleware, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="bg-[#00bca9] text-white py-20 rounded-t-[80px] text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-8">
          Ready to start your Shopify project?
        </h2>
        <Link href="/create-task" passHref>
          <div className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition cursor-pointer">
            <span className="mr-3">Get a quote</span>
          </div>
        </Link>
      </section>


      {/* Additional Services */}
      <ShopifyExpertServices />
    </main>
  );
}
