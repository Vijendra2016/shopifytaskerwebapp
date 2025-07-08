import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
export const metadata: Metadata = {
  title: "Shopify Theme Customization Services | Designed for Your Brand",
  description:
    "We customize Shopify themes to match your brand's look and business needs. From layout adjustments to feature updates, we build stores that stand out and perform."
}

export default function ShopifyThemeCustomization() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 md:px-30 h-[60vh] md:h-[80vh] py-16 bg-black text-white">
        <div className="services flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-8xl text-white font-medium tracking-tight">
            Expert Shopify Theme Customization
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">
            If you are starting your store from scratch or just want to improve your current Shopify theme, we’ll help you shape it around your brand. No pre-made designs — everything is built with your business in mind.
          </p>
        </div>
      </section>

      {/* Features Section */}
     <section className="bg-[#fefaf6] py-20 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
    {/* Left Column */}
    <div className="md:w-[30%]">
      <h2 className="text-5xl font-extrabold text-black leading-tight">
        Custom Shopify Theme Solutions
      </h2>
      <p className="mt-6 text-lg text-gray-700">
        Whether you’re building a store from scratch or improving your existing one, we create a fully tailored Shopify theme that reflects your brand’s voice and goals. No generic templates, no shortcuts — just clean, handcrafted design made to fit your business perfectly.
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
          <span className="text-3xl">🎨</span>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-black">
            Pixel-Perfect Edits
          </h3>
          <p className="text-gray-700">
            Every detail matters. From spacing to typography, we refine each element to make your store visually sharp and aligned with your brand style.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex gap-4">
        <div className="p-4 rounded-xl h-fit">
          <span className="text-3xl">⚙️</span>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-black">
            Custom Functionality
          </h3>
          <p className="text-gray-700">
            Need custom features like interactive sliders, smart product filters, or dynamic sections? We build them into your theme without compromising performance.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex gap-4">
        <div className="p-4 rounded-xl h-fit">
          <span className="text-3xl">📱</span>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-black">
            Speed & Mobile Optimized
          </h3>
          <p className="text-gray-700">
            Your theme will load fast and adapt beautifully across all devices — from desktops to tablets and phones — so your customers get the best experience every time.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex gap-4">
        <div className="p-4 rounded-xl h-fit">
          <span className="text-3xl">🔧</span>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-black">
            Ongoing Theme Support
          </h3>
          <p className="text-gray-700">
            We don’t disappear after launch. Need help with future updates or tweaks? Count on us for reliable support whenever you need it.
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

     

      {/* Additional Services Section */}
      <ShopifyExpertServices />
    </main>
  );
}
