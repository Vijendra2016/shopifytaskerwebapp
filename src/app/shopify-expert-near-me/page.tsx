import { Metadata } from "next";
import Link from "next/link";
import cities from "@/lib/cities.json";
import TestimonialCard from "@/app/components/TestimonialCard";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import CreateTaskButton from "./CreateTaskButton";

export const metadata: Metadata = {
  title: "Shopify Expert Near Me | Find Local Shopify Experts | ShopifyTasker",
  description:
    "Find top-rated Shopify experts near you across 170+ US cities. ShopifyTasker provides full-service Shopify — design, development, SEO, migrations, and ongoing support. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/shopify-expert-near-me",
  },
  openGraph: {
    title: "Shopify Expert Near Me | ShopifyTasker",
    description: "Top-rated Shopify experts across 170+ US cities. Full-service design, development & SEO. Pay after delivery.",
    url: "https://www.shopifytasker.com/shopify-expert-near-me",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const usStates = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const groupedByState = usStates.reduce<Record<string, typeof cities>>((acc, state) => {
  const stateCities = cities.filter((c) => c.state === state);
  if (stateCities.length > 0) acc[state] = stateCities;
  return acc;
}, {});

export default function ShopifyExpertNearMe() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Shopify Expert Near Me" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify Expert Services &nbsp;·&nbsp; United States
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[1.06] tracking-tight text-white max-w-4xl mb-8">
            Shopify Expert Near Me
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-2xl mb-10">
            ShopifyTasker provides full-service Shopify expertise across 170+ US cities — store
            design, custom development, SEO, platform migrations, and ongoing support.
            Transparent pricing, no upfront payment, pay after delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get a Free Quote
            </CreateTaskButton>
            <Link
              href="/shopify-expert-services"
              className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[
            { value: "500+", label: "Shopify Stores Delivered" },
            { value: "10+", label: "Years of Shopify Experience" },
            { value: "170+", label: "US Cities Served" },
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
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What We Do</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Full-Service Shopify Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Store Design & Theme Customisation", body: "Custom store design from scratch, Liquid theme customisation, mobile-first layouts, and brand-aligned UI/UX built to convert." },
              { num: "02", title: "Development & App Integration", body: "Custom Liquid development, private Shopify apps, ERP and CRM integrations, and complex builds that go beyond what a theme can do." },
              { num: "03", title: "Store Setup & Launch", body: "Full store configuration from zero — products, payments, shipping, taxes, apps, and domain. Properly configured from day one." },
              { num: "04", title: "SEO & Speed Optimisation", body: "On-page SEO, structured data, Core Web Vitals, image compression, and Liquid refactoring that boosts rankings and conversions." },
              { num: "05", title: "Platform Migration", body: "Full migrations from WooCommerce, Magento, BigCommerce, or custom platforms with products, data, SEO redirects, and a rebuilt design." },
              { num: "06", title: "Ongoing Support & Retainers", body: "Monthly retainer plans — design updates, development tasks, bug fixes, new integrations, and performance monitoring every month." },
            ].map((s, i) => (
              <div key={i} className="border border-white/[0.08] p-8 -mt-px -ml-px hover:bg-white/[0.04] transition">
                <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">{s.num}</p>
                <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              The Shopify Experts US Businesses Trust
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Pay After Delivery", body: "No upfront payment — ever. You pay only once the work is done and you are satisfied." },
              { title: "10+ Years on Shopify", body: "A decade of Shopify experience across every industry, project type, and platform version." },
              { title: "Fixed Price Quotes", body: "Detailed quotes before we start. No scope creep charges, no billing surprises, ever." },
              { title: "Fast Turnarounds", body: "Small tasks in 24–72 hours. Larger projects in 2–5 weeks with clear milestones." },
              { title: "Full-Service Team", body: "Designers, developers, SEO specialists — all in-house at rates from $20/hr." },
              { title: "Every Shopify Service", body: "Design, dev, SEO, migration, support — one team for every Shopify need." },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="border-b border-white/[0.08]">
        <TestimonialCard />
      </section>

      {/* ─── CITIES BY STATE ─── */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Coverage</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Find a Shopify Expert Near You
            </h2>
            <p className="text-[15px] text-white/55 mt-4 max-w-xl leading-[1.7]">
              Select your city for a dedicated Shopify expert page with local information and city-specific content.
            </p>
          </div>
          <div className="space-y-10">
            {Object.entries(groupedByState).map(([state, stateCities]) => (
              <div key={state}>
                <p className="text-[11px] font-mono tracking-widest text-white/30 uppercase mb-4">{state}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {stateCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/shopify-expert-near-me/${city.slug}`}
                      className="text-[14px] text-white/50 hover:text-white hover:underline underline-offset-2 transition"
                    >
                      {city.city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Hire a Shopify Expert?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us what you need. We will send a fixed quote and you pay only when you are satisfied.
          </p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Quote →
          </CreateTaskButton>
        </div>
      </section>
    </main>
  );
}
