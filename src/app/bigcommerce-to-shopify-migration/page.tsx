import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "BigCommerce to Shopify Migration Service | ShopifyTasker",
  description:
    "BigCommerce to Shopify migration. Products, customers, orders & SEO transferred. Zero data loss. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/bigcommerce-to-shopify-migration",
  },
  openGraph: {
    title: "BigCommerce to Shopify Migration | ShopifyTasker",
    description: "Expert BigCommerce to Shopify migration. Full data, SEO & integration transfer. No upfront payment.",
    url: "https://www.shopifytasker.com/bigcommerce-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/bigcommerce-to-shopify-migration";

const faqs = [
  { question: "How long does a BigCommerce to Shopify migration take?", answer: "Most BigCommerce to Shopify migrations are completed in 2–4 weeks depending on catalogue size, custom integrations, and design requirements. ShopifyTasker provides a clear estimate before starting." },
  { question: "Will my BigCommerce products and customers migrate to Shopify?", answer: "Yes. We migrate all BigCommerce product data including variants, custom fields, pricing, images, descriptions, customer accounts, and order history to Shopify with complete accuracy." },
  { question: "Can you replicate BigCommerce custom features on Shopify?", answer: "Yes. We audit all your BigCommerce custom features, scripts, and third-party integrations — and rebuild the equivalent functionality on Shopify using apps, Shopify Functions, or custom Liquid development." },
  { question: "Will my SEO rankings be protected during the BigCommerce to Shopify migration?", answer: "Yes. ShopifyTasker implements a full SEO migration — 301 redirects from all BigCommerce URLs, meta data transfer, structured data setup, and sitemap resubmission — to protect your search rankings throughout." },
  { question: "Should I migrate from BigCommerce to Shopify or Shopify Plus?", answer: "For stores generating over $1M/year, requiring B2B functionality, or needing multiple storefronts, Shopify Plus is the recommended upgrade. For most BigCommerce merchants, standard Shopify is a powerful and cost-effective choice." },
  { question: "How much does BigCommerce to Shopify migration cost?", answer: "Migration pricing depends on catalogue size, custom functionality, and design requirements. ShopifyTasker provides a fixed-price quote before starting. You pay only after the migration is complete and you are satisfied." },
];

const processSteps = [
  { num: "01", title: "BigCommerce Audit", body: "We review your BigCommerce store — products, categories, custom fields, customer data, apps, integrations, and SEO configuration — and produce a detailed migration plan." },
  { num: "02", title: "Shopify Store Setup", body: "Your Shopify store is configured with the right theme, navigation, payment gateways, tax settings, shipping zones, and apps needed to match your BigCommerce setup." },
  { num: "03", title: "Data Migration", body: "Products, variants, custom fields, customer accounts, order history, and reviews are migrated from BigCommerce to Shopify with full accuracy and verified against source data." },
  { num: "04", title: "Feature & Integration Rebuild", body: "BigCommerce apps and custom scripts are replaced with Shopify equivalents or rebuilt using Shopify APIs — ensuring all business functionality continues on the new platform." },
  { num: "05", title: "SEO Migration & QA", body: "All BigCommerce URLs are mapped and 301 redirected. Meta data and structured data are configured. Full QA across products, checkout flows, and customer accounts." },
  { num: "06", title: "Launch & Support", body: "Your Shopify store goes live with a managed DNS cutover. We monitor performance for 15 days post-launch and provide support for any issues that arise." },
];

const whatWeMigrate = [
  "All BigCommerce products, variants, custom fields & images",
  "Customer accounts, addresses & order history",
  "Product reviews and ratings",
  "BigCommerce app functionality rebuilt on Shopify",
  "Third-party ERP, CRM & fulfilment integrations",
  "301 redirects from all BigCommerce URLs",
  "Meta titles, descriptions & SEO structured data",
  "Gift cards, discount codes & promotional rules",
];

const keywords = [
  "transfer bigcommerce to shopify",
  "move bigcommerce store to shopify",
  "switch from bigcommerce to shopify",
  "bigcommerce to shopify transfer",
  "bigcommerce migration to shopify",
  "move from bigcommerce to shopify",
  "bigcommerce to shopify plus migration",
  "bigcommerce store migration service",
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function BigCommerceToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from BigCommerce to Shopify",
    description: "Step-by-step BigCommerce to Shopify migration process by ShopifyTasker with zero data loss.",
    step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body, position: parseInt(s.num) })),
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="BigCommerce to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates BigCommerce stores to Shopify and Shopify Plus with zero data loss — including products, customers, orders, integrations, SEO, and 301 redirects. Pay after delivery."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "BigCommerce to Shopify Migration", url: pageUrl },
        ]}
        faqs={faqs}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] px-6 py-3">
        <ol className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] text-white/40">
          <li><Link href="/" className="hover:text-white/70 transition">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/shopify-migration" className="hover:text-white/70 transition">Shopify Migration</Link></li>
          <li aria-hidden>/</li>
          <li className="text-white/70" aria-current="page">BigCommerce to Shopify</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Platform Migration &nbsp;·&nbsp; BigCommerce → Shopify</p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              BigCommerce to Shopify Migration — Complete & Accurate
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Move from BigCommerce to Shopify without losing products, customers, orders, or SEO rankings.
              Full data migration, feature rebuild, and 301 redirects — pay only after delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
                Get a Free Migration Quote
              </CreateTaskButton>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition">
                Talk to a Migration Expert
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[520px] overflow-hidden rounded-t-2xl">
            <Image src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp" alt="BigCommerce to Shopify migration expert at ShopifyTasker" fill className="object-cover object-top" priority />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[{ value: "200+", label: "Migrations Completed" }, { value: "Zero", label: "Data Loss Guarantee" }, { value: "10+", label: "Years Shopify Experience" }, { value: "$0 upfront", label: "Pay After Delivery" }].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Migrate */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What&apos;s Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Everything Migrated from BigCommerce to Shopify</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">We transfer every product, customer record, order, and integration from your BigCommerce store to Shopify — with full accuracy verified before go-live.</p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Start Your Migration →
            </CreateTaskButton>
          </div>
          <ul className="border-t border-white/[0.08]">
            {whatWeMigrate.map((item, i) => (
              <li key={i} className="flex items-start gap-5 py-5 border-b border-white/[0.08] text-[14px] text-white/60 leading-[1.6]">
                <span className="font-mono text-[11px] text-white/20 shrink-0 mt-0.5 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">How We Migrate Your BigCommerce Store to Shopify</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <div key={i} className="border border-white/[0.08] p-8 flex flex-col -mt-px -ml-px hover:bg-white/[0.04] transition">
                <p className="text-[11px] font-mono text-white/20 mb-6 tracking-widest">{s.num}</p>
                <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ShopifyTasker */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Why Businesses Choose Us for BigCommerce to Shopify Migration</h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">We have migrated hundreds of stores from BigCommerce and other platforms to Shopify. Our process is proven, fast, and backed by a pay-after-delivery guarantee.</p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "No Upfront Payment", body: "You pay only after your Shopify store is live and you are fully satisfied. No deposit, no risk." },
              { title: "SEO-Safe Migration", body: "Every BigCommerce URL is 301 redirected to Shopify from launch day — protecting your organic rankings and domain authority." },
              { title: "Full Feature Parity", body: "All BigCommerce apps and custom features are audited and rebuilt on Shopify — nothing is lost in the move." },
              { title: "Fixed-Price Quotes", body: "A detailed quote is agreed before any work starts. No hidden fees, no scope creep, no billing surprises." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 py-7 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono text-white/20 shrink-0 pt-1 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[14px] text-white/55 leading-[1.7]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">FAQ</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">BigCommerce to Shopify — Common Questions</h2>
          </div>
          <div className="border-t border-white/[0.08]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7 border-b border-white/[0.08]">
                <h3 className="text-[15px] font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-[14px] text-white/55 leading-[1.7]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 md:py-32 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Ready to Move from BigCommerce to Shopify?</h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">Tell us about your BigCommerce store. We will scope the migration, send a fixed quote, and you pay only when your Shopify store is live.</p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Migration Quote →
          </CreateTaskButton>
        </div>
      </section>

      {/* Keywords / Also Searched As */}
      <section className="px-6 py-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Also Searched As</h2>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw, i) => (
              <span key={i} className="text-[12px] text-white/35 border border-white/[0.07] px-3 py-1.5 rounded-full">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Migration Services */}
      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Migration Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {otherMigrations.map((m, i) => (
              <Link key={i} href={m.href} className="border border-white/[0.08] px-4 py-3 text-[12px] text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition rounded-sm text-center">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
