import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";

export const metadata: Metadata = {
  title: "Shopify App Integration Services | CRM, Shipping & More",
  description:
    "We integrate essential apps like CRMs, shipping solutions, analytics, and marketing tools into your Shopify store — seamlessly and reliably.",
};

export default function ShopifyAppIntegration() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 md:px-30 h-[60vh] md:h-[80vh] py-16 bg-black text-white">
        <div className="services flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-8xl text-white font-medium tracking-tight">
            Shopify App Integration Experts
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">
            Make your Shopify store work harder for you. From CRMs and shipping tools to marketing platforms and beyond — we integrate the apps and systems you rely on, so everything works together smoothly.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#fefaf6] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left Column */}
          <div className="md:w-[30%]">
            <h2 className="text-5xl font-extrabold text-black leading-tight">
              Seamless App Integrations for Shopify
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Whether you are connecting a marketing platform or a shipping
              provider, we handle the integration so you can focus on growth.
              No conflicts, no downtime — just results.
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
                <span className="text-3xl">🔗</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  CRM & Email Tools
                </h3>
                <p className="text-gray-700">
                  Integrate tools like Klaviyo, Mailchimp, HubSpot, and more to
                  manage customer data and campaigns effectively.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🚚</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Shipping Providers
                </h3>
                <p className="text-gray-700">
                  We connect platforms like ShipStation, EasyShip, and
                  AfterShip to streamline your shipping process and improve
                  delivery tracking.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">📊</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Analytics & Insights
                </h3>
                <p className="text-gray-700">
                  Track performance with tools like Google Analytics,
                  Hotjar, or custom dashboard integrations.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">📦</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Inventory & ERP Systems
                </h3>
                <p className="text-gray-700">
                  We connect your Shopify store to inventory or ERP systems like
                  Zoho, NetSuite, and QuickBooks for real-time sync.
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
