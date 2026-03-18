import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Shopify Theme Customization Services | Designed for Your Brand",
  description:
    "We customize Shopify themes to match your brand's look and business needs. From layout adjustments to feature updates, we build stores that stand out and perform.",
};

const services = [
  {
    num: "01",
    title: "Section & Layout Customisation",
    body: "Custom homepage sections, collection layouts, product page redesigns, and structural changes using Shopify's Section Schema — all editable in the Theme Editor.",
  },
  {
    num: "02",
    title: "Brand Styling",
    body: "Typography, colour palette, spacing, and visual hierarchy adjusted to precisely match your brand guidelines across every page of your store.",
  },
  {
    num: "03",
    title: "Custom Functionality",
    body: "Interactive features like product filter panels, image comparison sliders, custom size guides, sticky bars, and dynamic content — built into your theme without third-party bloat.",
  },
  {
    num: "04",
    title: "Mobile Optimisation",
    body: "Every customisation is tested and refined across mobile, tablet, and desktop. Mobile-first is the baseline — not an afterthought.",
  },
  {
    num: "05",
    title: "Speed & Performance",
    body: "Lean Liquid rendering, deferred scripts, and optimised asset loading so your customised theme scores well on Core Web Vitals and loads fast.",
  },
  {
    num: "06",
    title: "Ongoing Theme Support",
    body: "Future updates, tweaks, and refinements handled on-demand or through a monthly retainer — so your theme stays current as your business grows.",
  },
];

const themes = [
  "Dawn", "Debut", "Impulse", "Prestige", "Impact",
  "Turbo", "Refresh", "Sense", "Craft", "Origin",
  "Context", "Ride", "Publisher", "Symmetry", "Narrative",
];

export default function ShopifyThemeCustomization() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Shopify Theme Customization Services"
        serviceDescription="ShopifyTasker customizes Shopify themes using Liquid to match your brand. From pixel-perfect edits and custom sections to speed optimization and mobile responsiveness — tailored to your business."
        pageUrl="https://www.shopifytasker.com/theme-customization"
        breadcrumbs={[{ name: "Theme Customization", url: "https://www.shopifytasker.com/theme-customization" }]}
        faqs={[
          { question: "What Shopify theme customization services does ShopifyTasker offer?", answer: "ShopifyTasker offers full Shopify theme customization including custom sections, layout edits, typography and color adjustments, interactive features like sliders and filters, mobile optimization, speed improvements, and brand-specific styling using Shopify Liquid." },
          { question: "Can ShopifyTasker customize any Shopify theme?", answer: "Yes. ShopifyTasker can customize any Shopify theme including Dawn, Debut, Impulse, Prestige, Impact, Turbo, and all other Shopify 2.0 themes. Custom and purchased third-party themes are also supported." },
          { question: "How long does Shopify theme customization take?", answer: "Simple theme customizations like colour changes, font updates, and section edits are typically completed within 1 to 3 business days. Complex customizations with new features or significant layout changes take 5 to 10 business days." },
        ]}
      />

      {/* Hero */}
      <section className="px-6 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Theme Customisation
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl mb-8">
            Shopify Theme Customisation Built for Your Brand
          </h1>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mb-10">
            Any Shopify theme, tailored precisely to your brand and business requirements. Clean Liquid code, fast performance, and fully editor-compatible.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/create-task"
              className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[
            { value: "500+", label: "Themes Customised" },
            { value: "1–10 days", label: "Typical Turnaround" },
            { value: "10+", label: "Years of Shopify Liquid" },
            { value: "$0 upfront", label: "Pay After Delivery" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What We Customise</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              Theme Customisation Services
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-md">
              From minor styling tweaks to full section rebuilds — we handle every type of Shopify theme customisation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="border border-white/[0.08] p-8 flex flex-col -mt-px -ml-px hover:bg-white/[0.04] transition"
              >
                <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">{s.num}</p>
                <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes supported */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Themes Supported</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              We Work With Any Shopify Theme
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-lg">
              All Shopify 2.0 themes, third-party purchased themes, and custom themes are supported. Bring us any theme and we will customise it.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {themes.map((theme, i) => (
              <div
                key={i}
                className="border border-white/[0.08] px-5 py-4 text-[14px] text-white/60 -mt-px -ml-px hover:bg-white/[0.04] hover:text-white transition"
              >
                {theme}
              </div>
            ))}
            <div className="border border-white/[0.08] px-5 py-4 text-[14px] text-white/30 -mt-px -ml-px italic">
              + all others
            </div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Customisation Done Right — Not Just Done
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              Many developers patch themes with overrides that break on updates. We write clean, structured Liquid that works with Shopify — not around it.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Editor-Compatible Code", body: "Customisations are built as proper Theme Editor sections and settings — your team can make content changes without touching code." },
              { title: "Update-Safe Implementation", body: "We build in a way that survives theme updates. No overrides that silently break when Shopify pushes a new theme version." },
              { title: "Fixed Price, No Surprises", body: "A detailed fixed-price quote is agreed before work starts. We stick to it." },
              { title: "Pay After Delivery", body: "You only pay once the customisation is live and you are satisfied with the result. No deposit required." },
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

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Customise Your Shopify Theme?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Describe what you need changed. We send a fixed quote, complete the work, and you pay only when you are satisfied.
          </p>
          <Link
            href="/create-task"
            className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
