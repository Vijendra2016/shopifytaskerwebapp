import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "Square to Shopify Migration Service | ShopifyTasker",
  description:
    "Square to Shopify migration. Products, inventory, orders & SEO transferred. Store live throughout. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/square-to-shopify-migration",
  },
  openGraph: {
    title: "Square to Shopify Migration | ShopifyTasker",
    description: "Expert Square Online to Shopify migration. Products, customers, orders & inventory migrated safely. No upfront payment.",
    url: "https://www.shopifytasker.com/square-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/square-to-shopify-migration";

const faqs = [
  {
    question: "How long does a Square to Shopify migration take?",
    answer: "Most Square to Shopify migrations are completed in 1–2 weeks. Timeline depends on product catalogue size, order volume, and any custom design or integration requirements. ShopifyTasker provides a clear estimate upfront.",
  },
  {
    question: "Can you migrate my Square inventory to Shopify?",
    answer: "Yes. We migrate your full Square product catalogue including variants, SKUs, pricing, inventory levels, images, and descriptions — ready to use in Shopify from day one.",
  },
  {
    question: "Will my Square customer data transfer to Shopify?",
    answer: "Yes. We migrate your Square customer database including names, email addresses, order history, and contact details to Shopify — preserving your customer relationships.",
  },
  {
    question: "Can I keep taking orders during the Square to Shopify migration?",
    answer: "Yes. Your Square store remains live throughout the entire migration process. We only switch your domain to Shopify once the new store has been fully tested and approved.",
  },
  {
    question: "Do I need to rebuild my store design when moving from Square to Shopify?",
    answer: "We can either rebuild your existing Square design on Shopify or design a new, more conversion-optimised Shopify store — based on your preference and budget.",
  },
  {
    question: "How much does Square to Shopify migration cost?",
    answer: "Migration pricing depends on your product count, data volume, and design requirements. ShopifyTasker provides a fixed-price quote before starting. You pay only once the migration is complete and you are satisfied.",
  },
];

const processSteps = [
  { num: "01", title: "Square Store Audit", body: "We review your Square Online store — products, inventory, customer data, orders, pages, and payment setup — and provide a detailed migration plan." },
  { num: "02", title: "Shopify Store Configuration", body: "Your Shopify store is configured with the right theme, navigation, payment gateways, tax settings, and shipping options to match your Square setup." },
  { num: "03", title: "Product & Inventory Migration", body: "All products, variants, SKUs, pricing, images, and inventory levels are migrated from Square to Shopify with complete accuracy." },
  { num: "04", title: "Customer & Order Migration", body: "Customer accounts and order history are transferred to Shopify — preserving your business relationships and sales records." },
  { num: "05", title: "Design & QA Testing", body: "We apply your brand design to Shopify, configure apps to match Square features, and run thorough testing across products, checkout, and payments." },
  { num: "06", title: "Launch & Support", body: "Your domain is switched to Shopify, the store goes live, and we provide 15 days of post-launch monitoring and support." },
];

const whatWeMigrate = [
  "All Square products, variants, SKUs & inventory levels",
  "Product images, descriptions & pricing",
  "Customer database, email addresses & contact details",
  "Order history and transaction records",
  "Gift cards and store credits",
  "Tax settings and shipping configurations",
  "Store pages and content",
  "SEO: 301 redirects & meta data from Square URLs",
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function SquareToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from Square Online to Shopify",
    description: "Step-by-step process for migrating from Square Online to Shopify by ShopifyTasker.",
    step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body, position: parseInt(s.num) })),
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Square to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates Square Online stores to Shopify with zero downtime — including products, inventory, customers, orders, and SEO. Pay after delivery, no upfront cost."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "Square to Shopify Migration", url: pageUrl },
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
          <li className="text-white/70" aria-current="page">Square to Shopify</li>
        </ol>
      </nav>

      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Platform Migration &nbsp;·&nbsp; Square → Shopify</p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Square to Shopify Migration — Fast, Safe & Complete</h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">Move from Square Online to Shopify without losing products, customers, orders, or inventory. Your Square store stays live throughout — pay only after delivery.</p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">Get a Free Migration Quote</CreateTaskButton>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition">Talk to a Migration Expert</Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[520px] overflow-hidden rounded-t-2xl">
            <Image src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp" alt="Square to Shopify migration expert at ShopifyTasker" fill className="object-cover object-top" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[{ value: "200+", label: "Migrations Completed" }, { value: "Zero", label: "Store Downtime" }, { value: "10+", label: "Years Shopify Experience" }, { value: "$0 upfront", label: "Pay After Delivery" }].map((s, i) => (
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Everything Migrated from Square to Shopify</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">We transfer your entire Square Online operation to Shopify — inventory, customers, orders, and design — so you can hit the ground running on a more powerful platform.</p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">Start Your Migration →</CreateTaskButton>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">How We Migrate Your Square Store to Shopify</h2>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Why Businesses Choose Us for Square to Shopify Migration</h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">We have helped hundreds of businesses move to Shopify from Square and other platforms. Our process is fast, safe, and backed by a pay-after-delivery guarantee.</p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Store Stays Live", body: "Your Square store keeps taking orders while we build your Shopify store. Zero interruption to your sales." },
              { title: "No Upfront Payment", body: "You pay only after your Shopify store is fully migrated, tested, and live. No deposit required." },
              { title: "Complete Data Transfer", body: "Every product, customer, and order is migrated from Square to Shopify with full accuracy — verified before launch." },
              { title: "Shopify Growth Unlock", body: "Shopify gives you better apps, faster checkout, more payment options, and stronger analytics than Square Online." },
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
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">Square to Shopify — Common Questions</h2>
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
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Ready to Move from Square to Shopify?</h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">Tell us about your Square store. We will scope the migration, send a fixed quote, and you pay only when Shopify is live.</p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">Get a Free Migration Quote →</CreateTaskButton>
        </div>
      </section>

      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Migration Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherMigrations.map((m, i) => (
              <Link key={i} href={m.href} className="border border-white/[0.08] px-5 py-4 text-[13px] text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition rounded-sm">{m.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
