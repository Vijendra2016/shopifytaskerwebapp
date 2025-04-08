import React from "react";

const FooterQuote = () => {
  return (
    <div className="w-full min-h-[300px] bg-gradient-to-r from-[#000e7c] via-[#001172] to-[#0fe4c9] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-16 text-white relative overflow-hidden space-y-8 md:space-y-0 md:space-x-8">
      <div className="z-10 text-center md:text-left max-w-xl">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Code. Design. Support.
          <br />
          All your Shopify needs—<span className="italic">handled</span>
        </h1>
        <p className="mt-4 text-sm md:text-base">
          From quick fixes to full builds, we’re your go-to Shopify partner.
          Whether it’s design, development, or troubleshooting, we handle it—so you can focus on growing your business.
        </p>
        <div className="text-xl mt-4 text-white/80 flex items-center space-x-2">
  <span>★★★★★</span>
  <span>4.9 out of 5 (200+ reviews)</span>
</div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-10">
        <button className="bg-white text-[#001172] px-6 py-3 rounded-md font-medium shadow-md hover:bg-gray-100 transition">
          Get a demo
        </button>
        <button className="border border-white px-6 py-3 rounded-md font-medium text-white hover:bg-white hover:text-[#001172] transition">
          Start free
        </button>
      </div>
    </div>
  );
};

export default FooterQuote;
