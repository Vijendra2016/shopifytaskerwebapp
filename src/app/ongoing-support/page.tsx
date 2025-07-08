import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";

export const metadata: Metadata = {
  title: "Shopify Ongoing Support Services | Keep Your Store Running Smoothly",
  description:
    "We provide reliable ongoing support for your Shopify store — from updates and bug fixes to performance improvements and long-term maintenance.",
};

export default function ShopifyOngoingSupport() {
  return (
    <main>
     
      <section className="px-6 md:px-30 h-[60vh] md:h-[80vh] py-16 bg-black text-white">
        <div className="services flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-8xl font-medium tracking-tight p-5">
          Reliable Ongoing Support for Your Shopify Store
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">
            We help you keep your Shopify store secure, updated, and running
            smoothly with regular maintenance, performance checks, and
            priority support.
          </p>
        </div>
      </section>

    
      <section className="bg-[#fefaf6] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left Column */}
          <div className="md:w-[30%]">
            <h2 className="text-5xl font-extrabold text-black leading-tight">
              Peace of Mind with Professional Support
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Our team ensures your Shopify site stays up-to-date, bug-free, and
              optimized. You focus on business — we’ll take care of the rest.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Request a Support Plan
            </Link>
          </div>

          {/* Right Column - Features */}
          <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🛠️</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">Bug Fixes</h3>
                <p className="text-gray-700">
                  We resolve errors, glitches, and display issues quickly so
                  your customers never notice a thing.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🚀</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Performance Optimization
                </h3>
                <p className="text-gray-700">
                  Regular audits and improvements to speed up your store and
                  improve user experience.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🔒</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  Security & Updates
                </h3>
                <p className="text-gray-700">
                  Stay safe with timely theme, app, and platform updates that
                  prevent vulnerabilities.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-xl h-fit">
                <span className="text-3xl">🤝</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">Priority Help</h3>
                <p className="text-gray-700">
                  Get quick assistance when you need it most — we’re just a
                  message away.
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
