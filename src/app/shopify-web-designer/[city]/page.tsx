import { notFound } from "next/navigation";
import type { Metadata } from "next";
import cities from "@/lib/cities.json";
import Link from "next/link";
import Image from "next/image";
import TestimonialCard from "@/app/components/TestimonialCard";
import CityPageSchema from "../CityPageSchema";
import CityFaqSection from "../CityFaqSection";
import CreateTaskButton from "../CreateTaskButton";

type Props = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const cityData = cities.find((c) => c.slug === params.city);
  if (!cityData) {
    return {
      title: "City Not Found | ShopifyTasker",
      description: "This city page is not available.",
    };
  }
  return {
    title: `Shopify Web Designer in ${cityData.city}, ${cityData.state} | ShopifyTasker`,
    description: `Top-rated Shopify web designer in ${cityData.city}. Custom stores, redesigns & theme customization. Pay only after work is done — no upfront cost.`,
  };
}

const services = [
  {
    title: "Custom Shopify Store Design",
    body: "We design Shopify stores from scratch — brand-aligned, mobile-first, and built to convert. Every element is crafted to reflect your identity and guide customers to checkout.",
    href: "/shopify-store-design",
  },
  {
    title: "Shopify Theme Customization",
    body: "We go beyond the theme editor — custom Liquid sections, bespoke layouts, and precise brand styling that makes your store look and perform exactly as you need it to.",
    href: "/theme-customization",
  },
  {
    title: "Shopify Store Redesign",
    body: "Underperforming or outdated store? We redesign it with modern UI, improved user flows, and faster load times — a complete refresh that drives measurable improvements.",
    href: "/shopify-website-redesign-service",
  },
  {
    title: "Mobile-First Design",
    body: "Over 70% of Shopify traffic is mobile. Every store we design is built mobile-first — responsive, touch-friendly, and optimized for the screens your customers actually use.",
    href: "/shopify-store-design",
  },
  {
    title: "Shopify SEO & Speed Optimization",
    body: "We fix Core Web Vitals, compress assets, implement structured data, and build pages that search engines reward with higher rankings and more organic traffic.",
    href: "/shopify-seo",
  },
  {
    title: "Ongoing Design Support",
    body: "Monthly retainer plans covering design updates, new landing pages, seasonal banners, and any ongoing Shopify design work your business needs post-launch.",
    href: "/ongoing-support",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Brief",
    body: "We start with a detailed intake — your brand, goals, competitors, and design preferences. The more context you give us, the more tailored the outcome.",
  },
  {
    num: "02",
    title: "Wireframes & Mockups",
    body: "Before any code is written, we create visual mockups for you to review and approve. You see exactly what your store will look like before we build it.",
  },
  {
    num: "03",
    title: "Build & Development",
    body: "We build your Shopify store using Liquid, custom sections, and performance best practices — implementing the approved design pixel-perfectly.",
  },
  {
    num: "04",
    title: "Review & Refinement",
    body: "You review the live staging store, request changes, and we refine until everything meets your standard. No rush, no limitations on feedback rounds.",
  },
  {
    num: "05",
    title: "Launch & Handover",
    body: "We run final QA checks across devices, launch your store, and hand over full documentation. You own everything — code, assets, and access.",
  },
  {
    num: "06",
    title: "Post-Launch Support",
    body: "After launch, we remain available for updates, fixes, and growth-focused improvements. Our retainer plans keep your store evolving month by month.",
  },
];

export default async function CityPage(props: Props) {
  const params = await props.params;
  const cityData = cities.find((c) => c.slug === params.city);
  if (!cityData) return notFound();

  const faqsForSchema = [
    {
      question: `What Shopify web design services do you offer in ${cityData.city}?`,
      answer: `We offer custom Shopify store design, theme customization, store redesign, mobile-first layouts, Shopify SEO, speed optimization, and ongoing monthly design support for businesses in ${cityData.city}, ${cityData.state}.`,
    },
    {
      question: "What is your Shopify web design process?",
      answer:
        "We start with a discovery call, create mockups for approval, build the design in Shopify, gather feedback, refine, and launch — with clear milestones and communication throughout.",
    },
    {
      question: `Can you redesign my existing Shopify store in ${cityData.city}?`,
      answer: `Yes. If your Shopify store looks outdated, is slow, or is not converting well, we will redesign it completely — new UI/UX, faster performance, and a design that gives your ${cityData.city} business a competitive edge.`,
    },
    {
      question: "Do you offer monthly Shopify design support?",
      answer:
        "Yes. Our monthly retainer plans cover ongoing design updates, new pages, seasonal changes, speed monitoring, and any design-related Shopify work you need each month.",
    },
    {
      question: "Why should I hire ShopifyTasker instead of a freelancer?",
      answer:
        "ShopifyTasker gives you a full-service team — designers, developers, SEO specialists — at freelancer rates. We work on a pay-after-delivery model, charge fair prices starting at $20/hr, and have 10+ years of Shopify experience.",
    },
    {
      question: `How long does a Shopify web design project in ${cityData.city} take?`,
      answer: `Most projects take 2–5 weeks. A theme customization can take a few days, while a full custom store design from scratch takes 3–5 weeks. We agree on a clear timeline before starting.`,
    },
  ];

  return (
    <main className="bg-[#0a0a0a] text-white">
      <CityPageSchema
        city={cityData.city}
        state={cityData.state}
        slug={cityData.slug}
        faqs={faqsForSchema}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] px-6 py-3">
        <ol className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] text-white/40">
          <li><Link href="/" className="hover:text-white/70 transition">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/shopify-web-designer" className="hover:text-white/70 transition">Shopify Web Designer</Link></li>
          <li aria-hidden>/</li>
          <li className="text-white/70" aria-current="page">{cityData.city}, {cityData.state}</li>
        </ol>
      </nav>

      {/* ─── HERO ─── */}
      <section className="px-6 pt-5 pb-0 md:pt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 ">
              Shopify Web Design &nbsp;·&nbsp; {cityData.city}, {cityData.state}
            </p>
            <Image
                            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69dce472b9d05292850a7040_startrating.png"
                            alt="Top Rated Shopify Web Designer in {cityData.city} - 5 Star Rating"
                            width={100}
                            height={20}
                            className="object-contain"
                          />
            <h1 className="text-[clamp(1.6rem,6vw,2.5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-4">
              Hire  Shopify Web Designer in {cityData.city}, {cityData.state}
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-2">
              Custom Shopify store design, theme customisation, and store
              redesigns for businesses in {cityData.city}. Pay only after the
              work is done — no upfront costs.
            </p>
             <div className="flex justify-left mb-4">
                          <Image
                            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680baca7a144a823c527edf7_shopifytasker-review.png"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="object-contain "
                          />
                        </div>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
                Get a Free Quote
              </CreateTaskButton>
              <Link
                href="/shopify-store-design"
                className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right — Image */}
          <div className="hidden lg:block relative h-[520px] overflow-hidden   rounded-xl">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69ddc8228d962e44081ff343_shopifywebdesignerservices.png"
              alt={`Shopify web designer working on a store for a ${cityData.city} business`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-y border-white/[0.08]">
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

      {/* ─── INTRO ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
              About Our Work in {cityData.city}
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Top-Rated Shopify Web Designer Serving {cityData.city}, {cityData.state}
            </h2>
          </div>
          <div className="space-y-5 text-[15px] text-white/60 leading-[1.7]">
            <p>{cityData.intro}</p>
            <p>
              Whether you are launching a new Shopify store in {cityData.city}{" "}
              or refreshing an existing one, ShopifyTasker gives you access to a
              full team of Shopify designers, developers, and SEO specialists —
              without the overhead of a traditional agency.
            </p>
            <p className="text-white/80">{cityData.cta}</p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Start Your Project →
            </CreateTaskButton>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What We Do</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Web Design Services in {cityData.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="border border-white/[0.08] p-8 flex flex-col justify-between -mt-px -ml-px group hover:bg-white/[0.04] transition">
                <div>
                  <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </p>
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

      {/* ─── WHY US ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why Us</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              Why {cityData.city} Businesses Choose ShopifyTasker
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.08]">
            {[
              { title: "Pay After Delivery", body: "We never ask for upfront payment. You pay only once your Shopify store is delivered and you are satisfied. No risk, no surprises." },
              { title: "10+ Years of Shopify", body: "Our team has over a decade of hands-on Shopify experience — across hundreds of stores, every industry, from startups to Shopify Plus brands." },
              { title: "Full-Service Team", body: "Designers, developers, SEO specialists, and support staff — all in-house. A complete agency team at transparent rates starting at $20/hr." },
              { title: "Fixed Pricing", body: "Before we start, you receive a detailed fixed-price quote. We stick to it — no hidden fees, no scope creep charges, no surprises at the end." },
              { title: "Fast Turnarounds", body: "Design tasks are typically completed in 24–72 hours. Full store designs go live in 2–5 weeks, with clear milestones throughout." },
              { title: "Conversion-Focused", body: "Every design decision is guided by what drives sales. Your store will look great and be structured to turn visitors into buyers." },
            ].map((item, i) => (
              <div key={i} className="border-b border-r border-white/[0.08] py-8 pr-8 last:border-r-0">
                <p className="text-[11px] font-mono text-white/20 mb-5 tracking-widest">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[16px] font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              How We Design Your {cityData.city} Shopify Store
            </h2>
            <p className="text-[14px] text-white/55 leading-[1.7] mt-5">
              A clear, collaborative process from brief to launch — so you always know what happens next.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get Started →
            </CreateTaskButton>
          </div>
          <div className="border-t border-white/[0.08]">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-8 py-8 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono text-white/20 shrink-0 pt-1 tracking-widest">{step.num}</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MIGRATIONS ─── */}
      <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Platform Migration</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Migrating to Shopify? We Handle Everything.
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">
              ShopifyTasker supports full platform migrations from Magento, WooCommerce,
              BigCommerce, Salesforce, and Visualsoft to Shopify or Shopify Plus —
              including design, data, SEO, and redirects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
            >
              Discuss Your Migration →
            </Link>
          </div>
          <ul className="border-t border-white/[0.08]">
            {[
              "Magento, WooCommerce, BigCommerce & custom platform migrations",
              "Full product, customer, and order data migration",
              "Shopify theme rebuild or custom design from scratch",
              "SEO migration — 301 redirects, URL structure, metadata",
              "Third-party app and system integrations",
              "Post-launch QA, performance testing, and speed review",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-5 py-5 border-b border-white/[0.08] text-[14px] text-white/60 leading-[1.6]">
                <span className="font-mono text-[11px] text-white/20 shrink-0 mt-0.5 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="border-t border-white/[0.08]">
        <TestimonialCard />
      </section>

      {/* ─── FAQ ─── */}
      <CityFaqSection city={cityData.city} state={cityData.state} />

      {/* ─── FINAL CTA ─── */}
      <section className="border-t border-white/[0.08] px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Build Your <em className="not-italic font-normal">{cityData.city}</em> Shopify Store?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us what you need. We will send a fixed quote, start work, and you pay only when you are satisfied.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
              Get a Free Quote →
            </CreateTaskButton>
            
          </div>
        </div>
      </section>

      {/* ─── RELATED CITIES ─── */}
      <section className="border-t border-white/[0.08] px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Locations</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-y-3 gap-x-6">
            {cities
              .filter((c) => c.slug !== cityData.slug)
              .slice(0, 36)
              .map((c, i) => (
                <Link
                  key={i}
                  href={`/shopify-web-designer/${c.slug}`}
                  className="text-[13px] text-white/40 hover:text-white/80 hover:underline underline-offset-2 transition"
                >
                  {c.city}, {c.state}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
