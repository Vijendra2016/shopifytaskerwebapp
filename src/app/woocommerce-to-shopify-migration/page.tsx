import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "WooCommerce to Shopify Migration Service | ShopifyTasker",
  description:
    "WooCommerce to Shopify migration. Products, orders, customers, plugins & SEO migrated. Zero data loss. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/woocommerce-to-shopify-migration",
  },
  openGraph: {
    title: "WooCommerce to Shopify Migration | ShopifyTasker",
    description: "Expert WooCommerce to Shopify migration. Products, orders, customers & SEO migrated safely. No upfront payment.",
    url: "https://www.shopifytasker.com/woocommerce-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/woocommerce-to-shopify-migration";

const faqs = [
  { question: "How long does a WooCommerce to Shopify migration take?", answer: "Most WooCommerce to Shopify migrations take 1–3 weeks depending on the number of products, orders, customer records, and WooCommerce plugins in use. ShopifyTasker provides a clear timeline before work begins." },
  { question: "Will all my WooCommerce products migrate to Shopify?", answer: "Yes. We migrate all WooCommerce products including simple, variable, grouped, and external product types — with all variants, attributes, images, SKUs, pricing, and stock levels transferred accurately to Shopify." },
  { question: "Can you replace my WooCommerce plugins with Shopify apps?", answer: "Yes. We audit all your active WooCommerce plugins and identify Shopify app equivalents or build custom solutions where needed — ensuring every piece of functionality carries over to Shopify." },
  { question: "Will my SEO rankings be protected during the WooCommerce to Shopify migration?", answer: "ShopifyTasker implements a complete SEO migration including 301 redirects from all WooCommerce URLs, meta title and description migration, structured data setup, and Google Search Console resubmission to protect your rankings." },
  { question: "Can you migrate my WooCommerce subscriptions to Shopify?", answer: "Yes. We migrate WooCommerce subscription products and recurring billing configurations to Shopify using Shopify's native subscription APIs or third-party subscription apps — maintaining your recurring revenue setup." },
  { question: "How much does WooCommerce to Shopify migration cost?", answer: "Migration pricing depends on your store size, plugin complexity, and any custom development required. ShopifyTasker provides a fixed-price quote before starting. You pay only after the migration is complete and you are satisfied." },
];

const processSteps = [
  { num: "01", title: "WooCommerce Store Audit", body: "We audit your WooCommerce store — all products, orders, customers, active plugins, custom code, and SEO configuration — and produce a detailed migration plan and fixed-price quote." },
  { num: "02", title: "Shopify Store Configuration", body: "Your Shopify store is configured from scratch — theme, navigation, payment gateways, shipping zones, tax settings, and Shopify apps needed to replace your WooCommerce plugin stack." },
  { num: "03", title: "Product & Customer Migration", body: "All WooCommerce products, variations, customer accounts, and order history are migrated to Shopify with full accuracy — verified against your live WooCommerce database." },
  { num: "04", title: "Plugin Replacement", body: "Every active WooCommerce plugin is reviewed and replaced with the closest Shopify equivalent — or custom-built on Shopify where no direct replacement exists." },
  { num: "05", title: "SEO Migration & Redirects", body: "All WooCommerce URLs are mapped and 301 redirected. Meta data, structured data, canonical tags, and sitemaps are fully configured for Shopify from day one." },
  { num: "06", title: "QA, Launch & Support", body: "Full QA across products, checkout, payments, and customer accounts. Managed go-live with 15 days of post-launch monitoring and support included." },
];

const whatWeMigrate = [
  "All WooCommerce products, variants, SKUs, images & descriptions",
  "Variable, grouped, and subscription product types",
  "Customer accounts, addresses & full order history",
  "WooCommerce plugin functionality replaced with Shopify apps",
  "Blog posts, categories & WordPress media",
  "301 redirects from all WooCommerce & WordPress URLs",
  "Meta titles, descriptions & SEO structured data",
  "Discount codes, coupons & gift cards",
];

const keywords = [
  "transfer woocommerce to shopify",
  "move woocommerce to shopify",
  "switch from woocommerce to shopify",
  "woocommerce to shopify transfer",
  "migrate woocommerce store to shopify",
  "move woocommerce store to shopify",
  "woocommerce shopify migration service",
  "switch woocommerce to shopify",
  "woocommerce to shopify switch",
  "move from woocommerce to shopify",
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function WooCommerceToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from WooCommerce to Shopify",
    description: "Step-by-step WooCommerce to Shopify migration process by ShopifyTasker with zero data loss.",
    step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body, position: parseInt(s.num) })),
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="WooCommerce to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates WooCommerce stores to Shopify with zero data loss — including products, customers, orders, plugins, SEO, and 301 redirects. Pay after delivery, no upfront cost."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "WooCommerce to Shopify Migration", url: pageUrl },
        ]}
        faqs={faqs}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] px-6 py-3">
        <ol className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] text-white/40">
          <li><Link href="/" className="hover:text-white/70 transition">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/shopify-migration" className="hover:text-white/70 transition">Shopify Migration</Link></li>
          <li aria-hidden>/</li>
          <li className="text-white/70" aria-current="page">WooCommerce to Shopify</li>
        </ol>
      </nav>

      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Platform Migration &nbsp;·&nbsp; WooCommerce → Shopify</p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              WooCommerce to Shopify Migration — Fast, Safe & Complete
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Transfer your WooCommerce store to Shopify without losing a single product, customer, order, or ranking.
              Plugin replacement, SEO migration, and 301 redirects all included — pay only after delivery.
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
            <Image src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp" alt="WooCommerce to Shopify migration expert at ShopifyTasker" fill className="object-cover object-top" priority />
          </div>
        </div>
      </section>

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

      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What&apos;s Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Everything Migrated from WooCommerce to Shopify</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">From products and orders to plugin functionality and SEO — we migrate every layer of your WooCommerce store to Shopify with no compromises.</p>
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

      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">How We Migrate Your WooCommerce Store to Shopify</h2>
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

      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Why Businesses Choose Us for WooCommerce to Shopify Migration</h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">WooCommerce to Shopify is one of the most common migrations we handle. Our process is refined, fast, and comes with a pay-after-delivery guarantee.</p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Plugin Stack Replaced", body: "Every WooCommerce plugin is reviewed and replaced with a Shopify equivalent — or custom-built where needed. Your functionality is never left behind." },
              { title: "SEO-Safe Migration", body: "All WooCommerce and WordPress URLs are 301 redirected to Shopify on launch day — protecting your search rankings and organic traffic." },
              { title: "Zero Data Loss", body: "Products, orders, customers, and blog content are migrated with full accuracy — validated against your live WooCommerce database." },
              { title: "No Upfront Payment", body: "You pay only once your Shopify store is live and you are completely satisfied. No deposit, no risk." },
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

      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">FAQ</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">WooCommerce to Shopify — Common Questions</h2>
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

      <section className="px-6 py-24 md:py-32 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Ready to Move from WooCommerce to Shopify?</h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">Tell us about your WooCommerce store. We will scope the migration, send a fixed quote, and you pay only when Shopify is live.</p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Migration Quote →
          </CreateTaskButton>
        </div>
      </section>

      <section className="px-6 py-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Also Searched As</h2>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw, i) => (
              <span key={i} className="text-[12px] text-white/35 border border-white/[0.07] px-3 py-1.5 rounded-full">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Migration Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {otherMigrations.map((m, i) => (
              <Link key={i} href={m.href} className="border border-white/[0.08] px-4 py-3 text-[12px] text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition rounded-sm text-center">{m.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
