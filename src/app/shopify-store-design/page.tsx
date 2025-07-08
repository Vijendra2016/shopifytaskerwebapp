import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
export const metadata: Metadata = {
  title: "Custom Shopify Store Design Services | Beautiful, Fast & Conversion-Driven",
  description:
    "Get a stunning, mobile-optimized Shopify store tailored to your brand. We design and develop Shopify websites that are fast, modern, and built to grow your business."
}

export default function ShopifyStoreDesign() {
  return (
    <main>
      <section className="px-6 md:px-30  h-[60vh] md:h-[80vh] py-16 bg-black text-white">
        <div className="services flex flex-col items-center justify-center text-center text-black ">
          <h1 className="text-3xl md:text-8xl text-white font-medium tracking-tight p-5 ">
            Beautiful Shopify Website Design
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">
            We create visually stunning, responsive, and high-converting Shopify
            stores designed to match your brand and business goals.
          </p>
        </div>
      </section>
      <section className="bg-[#fefaf6] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left side - narrow */}
          <div className="md:w-[30%]">
            <h2 className="text-5xl font-extrabold text-black leading-tight">
              High-Impact Shopify Design & Development
            </h2>
            <p className="mt-6 text-lg text-gray-700">
We have years of experience building Shopify stores and understand what actually works. Our team focuses on clean design, reliable performance, and helping your business grow. From layout to speed optimization, we handle everything so you can focus on running your store.            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-10">
  {/* Feature 1 */}
  <div className="flex gap-4">
    <div className="p-4 rounded-xl h-fit">
      <span className="text-3xl">🧰</span>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-black">
        Complete Setup
      </h3>
      <p className="text-gray-700 text-lg">
We handle everything from the first draft of your store design to launching it live. There is no need to worry about the technical side — our team takes care of it all so you can stay focused on your business.      </p>
    </div>
  </div>

  {/* Feature 2 */}
  <div className="flex gap-4">
    <div className="p-4 rounded-xl h-fit">
      <span className="text-3xl">👥</span>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-black">
        Experienced Team
      </h3>
      <p className="text-gray-700 text-lg">
Our designers and developers have worked on Shopify stores across different industries. We understand what makes a store stand out — and convert visitors into customers.

      </p>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="flex gap-4">
    <div className="p-4 rounded-xl h-fit">
      <span className="text-3xl">📋</span>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-black">
        Dedicated Manager
      </h3>
      <p className="text-gray-700 text-lg">
        You will work with one dedicated project manager who keeps things organized and communicates clearly at every stage — no back and forth or confusion.
      </p>
    </div>
  </div>

  {/* Feature 4 */}
  <div className="flex gap-4">
    <div className="p-4 rounded-xl h-fit">
      <span className="text-3xl">💬</span>
    </div>
    <div>
      <h3 className="text-4xl font-bold text-black">
        Ongoing Support
      </h3>
      <p className="text-gray-700 text-lg">
        Our support does not stop at launch. Whether it is updates, changes, or questions, we are here to make sure your Shopify store keeps running smoothly.
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
      <ShopifyExpertServices/>
    </main>
  );
}
