import { notFound } from "next/navigation";
import type { Metadata } from "next";
import cities from "@/lib/cities.json";
import Link from "next/link";
import Image from "next/image";
import TestimonialCard from "@/app/components/TestimonialCard";
import ExpertCityPageSchema from "../ExpertCityPageSchema";
import ExpertCityFaqSection from "../ExpertCityFaqSection";
import CreateTaskButton from "../CreateTaskButton";
import TrustedBySection from "@/app/components/TrustedBySection";

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
      alternates: { canonical: "https://www.shopifytasker.com/shopify-expert-near-me" },
    };
  }
  const canonicalUrl = `https://www.shopifytasker.com/shopify-expert-near-me/${cityData.slug}`;
  return {
    title: `Shopify Expert in ${cityData.city}, ${cityData.state} | ShopifyTasker`,
    description: `Top-rated Shopify expert in ${cityData.city}. Store design, development, SEO, migrations & ongoing support. Pay only after work is done.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Shopify Expert in ${cityData.city}, ${cityData.state} | ShopifyTasker`,
      description: `Top-rated Shopify experts in ${cityData.city}. Full-service agency — design, dev, SEO, support. No upfront payment.`,
      url: canonicalUrl,
      siteName: "ShopifyTasker",
      type: "website",
    },
  };
}

const services = [
  {
    title: "Shopify Store Design & Theme Customisation",
    body: "Custom Shopify store design from scratch, theme customisation via Liquid, mobile-first layouts, and brand-aligned UI/UX — built to look great and convert visitors into buyers.",
    href: "/shopify-store-design",
  },
  {
    title: "Shopify Development & App Integration",
    body: "Custom Liquid development, private Shopify apps, third-party API integrations, ERP and CRM connections, and complex backend builds that go beyond what a theme can do.",
    href: "/shopify-expert-services",
  },
  {
    title: "Shopify Store Setup & Launch",
    body: "Full store configuration from zero — products, collections, payments, shipping, taxes, apps, and domain setup. Everything properly configured so your store launches right the first time.",
    href: "/shopify-store-setup",
  },
  {
    title: "Shopify SEO & Speed Optimisation",
    body: "On-page SEO, structured data, Core Web Vitals improvements, image compression, Liquid refactoring, and page speed fixes that boost your search rankings and conversion rate.",
    href: "/shopify-seo",
  },
  {
    title: "Platform Migration to Shopify",
    body: "Full migrations from WooCommerce, Magento, BigCommerce, or custom platforms — including products, orders, customers, SEO redirects, and a rebuilt store design on Shopify or Shopify Plus.",
    href: "/shopify-expert-services",
  },
  {
    title: "Ongoing Shopify Support & Retainers",
    body: "Monthly retainer plans covering design updates, development tasks, bug fixes, new app integrations, speed monitoring, and any Shopify work your store needs — one fixed monthly fee.",
    href: "/shopify-support-retainers",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Submit Your Brief",
    body: "Click Get a Free Quote and describe what you need. The more detail you give us, the more accurate your quote will be. No obligation at this stage.",
  },
  {
    num: "02",
    title: "Receive a Fixed Quote",
    body: "We review your brief and send a detailed fixed-price quote with a clear scope and timeline. No vague estimates — you know exactly what you are getting and what it costs.",
  },
  {
    num: "03",
    title: "Work Begins",
    body: "Once you approve, we assign your project to the right expert — designer, developer, or SEO specialist — and work begins immediately with regular progress updates.",
  },
  {
    num: "04",
    title: "Review & Feedback",
    body: "You review the work, give feedback, and we make revisions until everything is exactly right. No limits on feedback rounds — we get it right before we close.",
  },
  {
    num: "05",
    title: "Final Delivery",
    body: "We deliver the completed work with full documentation and handover. Your store is live, your assets are yours, and everything is ready to perform.",
  },
  {
    num: "06",
    title: "Ongoing Support",
    body: "After delivery, we offer monthly retainer plans to keep your store evolving — new features, updates, bug fixes, and performance improvements every month.",
  },
];

export default async function CityPage(props: Props) {
  const params = await props.params;
  const cityData = cities.find((c) => c.slug === params.city);
  if (!cityData) return notFound();

  const faqsForSchema = [
    {
      question: `What Shopify expert services do you offer in ${cityData.city}?`,
      answer: `We offer a complete range of Shopify services for ${cityData.city}, ${cityData.state} businesses: store design and theme customisation, custom development and app integration, store setup and launch, SEO and speed optimisation, platform migrations from WooCommerce or Magento, Shopify Plus solutions, and ongoing monthly support retainers.`,
    },
    {
      question: `How do I hire a Shopify expert in ${cityData.city}?`,
      answer: `Submit your project brief using our Get a Free Quote form. We review your requirements, send a fixed-price quote with a clear timeline, and begin work once you approve. You pay only after the work is delivered to your satisfaction.`,
    },
    {
      question: `Can you redesign my existing Shopify store in ${cityData.city}?`,
      answer: `Yes. If your store looks outdated, is slow, or is not converting well, we will redesign it completely — new UI/UX, faster performance, mobile-first design, and full SEO migration. We have redesigned hundreds of Shopify stores for businesses across the US.`,
    },
    {
      question: "Do you work on Shopify Plus?",
      answer: "Yes. We handle full Shopify Plus development — checkout UI extensions, Shopify Functions, B2B portals, multi-store setups, Shopify Flow automation, and enterprise-grade custom builds.",
    },
    {
      question: "Why choose ShopifyTasker over a freelancer?",
      answer: "ShopifyTasker gives you a full-service team — designers, developers, SEO specialists — at freelancer rates. We operate on a pay-after-delivery model, charge transparent fixed prices starting at $20/hr, and bring 10+ years of dedicated Shopify experience.",
    },
    {
      question: `How long does a Shopify project in ${cityData.city} take?`,
      answer: `Small tasks and fixes take 24–72 hours. A full custom store design or development project typically takes 2–5 weeks. We agree on a clear timeline before starting and provide milestone updates throughout.`,
    },
  ];

  return (
    <main className="bg-black text-white">
      <ExpertCityPageSchema
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
          <li><Link href="/shopify-expert-near-me" className="hover:text-white/70 transition">Shopify Expert Near Me</Link></li>
          <li aria-hidden>/</li>
          <li className="text-white/70" aria-current="page">{cityData.city}, {cityData.state}</li>
        </ol>
      </nav>

      {/* ─── HERO ─── */}
      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Shopify Expert Services &nbsp;·&nbsp; {cityData.city}, {cityData.state}
            </p>
            <h1 className="text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              Hire a Shopify Expert in {cityData.city}, {cityData.state}
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Full-service Shopify expertise for {cityData.city} businesses — store design,
              custom development, SEO, platform migrations, and ongoing support. Pay only
              after the work is done.
            </p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-normal px-7 py-3.5  uppercase hover:bg-white/90 transition cursor-pointer">
                Get a Free Quote
              </CreateTaskButton>
              <Link
                href="/shopify-expert-services"
                className="inline-flex items-center gap-2 text-white text-[15px] font-normal uppercase px-7 py-3.5  border border-white hover:border-white/60 transition"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative h-[620px] overflow-hidden ">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69e715cd268f8cdfac3cbac4_shopifyexpertinusa.png"
              alt={`Shopify expert working on a store for a ${cityData.city} business`}
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
            { value: "500+", label: "Shopify Stores Delivered" },
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
              Top-Rated Shopify Expert Serving {cityData.city}, {cityData.state}
            </h2>
          </div>
          <div className="space-y-5 text-[15px] text-white/60 leading-[1.7]">
            <p>{cityData.intro}</p>
            <p>
              Whether you need a full store design, a technical development build,
              an SEO overhaul, or a platform migration, ShopifyTasker gives {cityData.city}{" "}
              businesses access to a full in-house team — designers, developers, and SEO
              specialists — without the overhead of a traditional agency.
            </p>
            <p className="text-white/80">{cityData.cta}</p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-2 bg-white text-black text-[15px] font-normal px-7 py-3.5 uppercase hover:bg-white/90 transition cursor-pointer">
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
              Shopify Expert Services in {cityData.city}
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
              { title: "Pay After Delivery", body: "We never ask for upfront payment. You pay only once the work is done and you are satisfied. No risk, no surprises." },
              { title: "10+ Years on Shopify", body: "A decade of Shopify experience across hundreds of stores — every industry, every project type, from startups to Shopify Plus enterprise brands." },
              { title: "Full-Service Team", body: "Designers, developers, SEO specialists, and support staff — all in-house. The full-service agency at transparent rates starting at $20/hr." },
              { title: "Fixed Pricing", body: "You receive a detailed fixed-price quote before we start. We stick to it — no hidden fees, no scope creep charges, no billing surprises." },
              { title: "Fast Turnarounds", body: "Small tasks in 24–72 hours. Larger projects delivered in 2–5 weeks with clear milestones and regular progress updates throughout." },
              { title: "Everything Shopify", body: "Design, development, SEO, migration, support — we cover every Shopify service so you never need to find a different expert for each task." },
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
              How We Work with {cityData.city} Businesses
            </h2>
            <p className="text-[14px] text-white/55 leading-[1.7] mt-5">
              A simple, transparent process from brief to delivery — no surprises, no delays.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-normal uppercase px-7 py-3.5  hover:bg-white/90 transition cursor-pointer">
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

<TrustedBySection/>
      {/* ─── MIGRATION ─── */}
      <section className="bg-black  px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Platform Migration</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Moving to Shopify? We Handle Everything.
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">
              ShopifyTasker manages complete migrations from WooCommerce, Magento, BigCommerce,
              Salesforce, and custom platforms to Shopify or Shopify Plus — data, design,
              SEO, and integrations fully handled.
            </p>
            
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-normal uppercase px-7 py-3.5  hover:bg-white/90 transition cursor-pointer">
              Discuss Your Migration →
            </CreateTaskButton>
          </div>
          <ul className="border-t border-white/[0.08]">
            {[
              "WooCommerce, Magento, BigCommerce, Salesforce & custom platform migrations",
              "Full product, customer, order, and historical data migration",
              "New Shopify theme design or Liquid port from your existing design",
              "SEO migration — 301 redirects, URL mapping, metadata, structured data",
              "Third-party integrations rebuilt on Shopify APIs",
              "Post-migration QA, performance testing, and speed review",
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
      <ExpertCityFaqSection city={cityData.city} state={cityData.state} />

      {/* ─── FINAL CTA ─── */}
     <section className="relative border-t border-white/[0.08] px-6 py-24 md:py-32">

  {/* Background image — isolated overflow so fixed modal is unaffected */}
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src="https://cdn.prod.website-files.com/68a42ed7e787a4a306819ed6/68b8cc7ed6c5fd3ad833d3ee_cta-background.avif"
      alt=""
      fill
      className="object-cover object-center"
      priority
      aria-hidden="true"
    />
  </div>

  {/* Content sits above the image */}
  <div className="relative max-w-4xl mx-auto text-center">
    <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
      Ready to Grow Your <em className="not-italic font-normal">{cityData.city}</em> Shopify Store?
    </h2>
    <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
      Tell us what you need. We will send a fixed quote and you pay only when you are satisfied.
    </p>
    <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
      Get a Free Quote →
    </CreateTaskButton>
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
                  href={`/shopify-expert-near-me/${c.slug}`}
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
