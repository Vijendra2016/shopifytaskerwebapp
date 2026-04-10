import Link from "next/link";
import React from "react";

const services = [
  {
    num: "01",
    title: "Shopify Store Design",
    body: "Custom Shopify stores designed from scratch — brand-aligned, mobile-first, and built to convert visitors into customers.",
    href: "/shopify-store-design",
  },
  {
    num: "02",
    title: "Theme Customization",
    body: "We go beyond the theme editor — custom Liquid sections, bespoke layouts, and precise brand styling that makes your store stand out.",
    href: "/theme-customization",
  },
  {
    num: "03",
    title: "Custom Development",
    body: "Private apps, API integrations, advanced checkout logic, and backend automations — built for how your business actually works.",
    href: "/custom-development",
  },
  {
    num: "04",
    title: "App Integration",
    body: "Connect your store with CRMs, ERPs, shipping platforms, and marketing tools through powerful Shopify API integrations.",
    href: "/app-integration",
  },
  {
    num: "05",
    title: "Ongoing Support",
    body: "Monthly retainer plans covering updates, fixes, new pages, and any ongoing Shopify work your business needs post-launch.",
    href: "/ongoing-support",
  },
  {
    num: "06",
    title: "Shopify SEO",
    body: "Technical SEO, Core Web Vitals, structured data, and keyword strategy — built to improve rankings and drive organic traffic.",
    href: "/shopify-seo",
  },
];

const ShopifyExpertServices = () => {
  return (
    <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
            Our Services
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
            Explore Our Shopify Expert Services
          </h2>
          <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-md">
            From design and development to SEO and ongoing support — everything your Shopify store needs, under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="border border-white/[0.08] p-8 flex flex-col justify-between -mt-px -ml-px group hover:bg-white/[0.04] transition"
            >
              <div>
                <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">
                  {s.num}
                </p>
                <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[14px] text-white/55 leading-[1.7] mb-6">
                  {s.body}
                </p>
              </div>
              <Link
                href={s.href}
                className="text-[13px] text-white/50 underline underline-offset-4 hover:text-white transition w-fit"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyExpertServices;
