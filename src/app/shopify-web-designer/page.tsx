import Link from "next/link";
import cities from "@/lib/cities.json";
import { Metadata } from "next";
import CreateTaskButton from "./CreateTaskButton";

export const metadata: Metadata = {
  title: "Hire a Shopify Web Designer Near You | ShopifyTasker",
  description:
    "Find top-rated Shopify web designers across the United States. Custom Shopify store design, theme customization, and store redesigns — pay only after work is done.",
};

const services = [
  {
    num: "01",
    title: "Custom Shopify Store Design",
    body: "We design Shopify stores from scratch — brand-aligned, mobile-first, and built to convert visitors into customers.",
    href: "/shopify-store-design",
  },
  {
    num: "02",
    title: "Shopify Theme Customization",
    body: "We customize any Shopify theme using Liquid — custom sections, layouts, and brand-specific styling beyond the editor.",
    href: "/theme-customization",
  },
  {
    num: "03",
    title: "Shopify Store Redesign",
    body: "Outdated or underperforming? We redesign Shopify stores with modern UI, improved UX, and faster load times.",
    href: "/shopify-website-redesign-service",
  },
  {
    num: "04",
    title: "Mobile-First Design",
    body: "Every store we design is fully responsive — optimized for mobile where the majority of eCommerce traffic comes from.",
    href: "/shopify-store-design",
  },
  {
    num: "05",
    title: "SEO & Speed Optimization",
    body: "We fix Core Web Vitals, implement technical SEO, and structure pages so your Shopify store ranks and performs.",
    href: "/shopify-seo",
  },
  {
    num: "06",
    title: "Ongoing Design Support",
    body: "Monthly retainer plans covering design updates, new pages, seasonal campaigns, and any ongoing Shopify needs.",
    href: "/ongoing-support",
  },
];

export default function ShopifyWebDesignerPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* ─── HERO ─── */}
      <section className="px-6 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify Web Design
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl mb-8">
            Top-Rated Shopify Web Designers Near You
          </h1>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mb-10">
            Find a trusted Shopify web designer in your city. Custom designs,
            fast delivery, transparent pricing, and a pay-after-work model.
          </p>
          <div className="flex flex-wrap gap-3">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get a Free Quote
            </CreateTaskButton>
            <Link
              href="#cities"
              className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
            >
              Find Your City
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[
            { value: "500+", label: "Shopify Stores Designed" },
            { value: "10+", label: "Years of Shopify Experience" },
            { value: "25+", label: "In-House Specialists" },
            { value: "$0 upfront", label: "Pay After Work is Done" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What We Offer</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              Shopify Web Design Services
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-md">
              Everything your Shopify store needs to look great and sell more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="border border-white/[0.08] p-8 flex flex-col justify-between -mt-px -ml-px group hover:bg-white/[0.04] transition">
                <div>
                  <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">{s.num}</p>
                  <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7] mb-6">{s.body}</p>
                </div>
                <Link href={s.href} className="text-[13px] text-white/50 underline underline-offset-4 hover:text-white transition w-fit">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              The Smarter Way to Hire a Shopify Web Designer
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              A full-service Shopify team at freelancer rates, with the confidence of a pay-after-delivery model.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Pay After Delivery", body: "We do not charge upfront. You pay only once you are satisfied with the work. No risk, no surprises." },
              { title: "10+ Years of Shopify", body: "Over a decade of experience across hundreds of Shopify stores in every niche and industry." },
              { title: "Full-Service Team", body: "Designers, developers, SEO specialists, and support staff — all in-house at transparent rates starting at $20/hr." },
              { title: "Fixed Pricing", body: "You receive a detailed fixed-price quote before we start. We stick to it — no hidden fees, no surprises." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 py-7 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono text-white/20 shrink-0 pt-1 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CITY DIRECTORY ─── */}
      <section id="cities" className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Browse by Location</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              Find a Shopify Web Designer in Your City
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-lg">
              We serve businesses across the United States. Click your city to see local Shopify web design services.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {cities.map((city, i) => (
              <Link
                key={i}
                href={`/shopify-web-designer/${city.slug}`}
                className="border border-white/[0.08] px-5 py-4 text-[14px] text-white/60 -mt-px -ml-px hover:bg-white/[0.04] hover:text-white transition"
              >
                {city.city}, <span className="text-white/30">{city.state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Build Your Shopify Store?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us what you need. We send a fixed quote, start work, and you pay only when you are satisfied.
          </p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Quote →
          </CreateTaskButton>
        </div>
      </section>
    </main>
  );
}
