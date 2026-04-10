import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "Magento to Shopify Migration | Expert Migration Service | ShopifyTasker",
  description:
    "Migrate from Magento 1 or Magento 2 to Shopify or Shopify Plus. Full product, customer, order, and SEO migration. Enterprise-grade process. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/magento-to-shopify-migration",
  },
  openGraph: {
    title: "Magento to Shopify Migration | ShopifyTasker",
    description: "Magento 1 & 2 to Shopify and Shopify Plus migration experts. Full data, integrations, and SEO migration. No upfront payment.",
    url: "https://www.shopifytasker.com/magento-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/magento-to-shopify-migration";

const faqs = [
  { question: "Can you migrate from both Magento 1 and Magento 2 to Shopify?", answer: "Yes. ShopifyTasker handles migrations from both Magento 1 (including end-of-life Magento 1.x stores) and Magento 2.x to Shopify or Shopify Plus — with full data migration and SEO preservation." },
  { question: "How long does a Magento to Shopify migration take?", answer: "Magento migrations typically take 4–10 weeks depending on catalogue size, custom extensions, third-party integrations, and whether you are moving to Shopify or Shopify Plus. ShopifyTasker provides a detailed timeline before starting." },
  { question: "Will my Magento custom extensions work on Shopify?", answer: "Shopify has a different architecture to Magento. ShopifyTasker audits all your Magento extensions and identifies native Shopify app alternatives or builds custom Shopify solutions to replicate the same functionality." },
  { question: "How is SEO handled in a Magento to Shopify migration?", answer: "We implement a full SEO migration — URL mapping, 301 redirects from all Magento URLs, meta title and description transfer, structured data setup, canonical tags, and sitemap resubmission to Google Search Console." },
  { question: "Should I migrate from Magento to Shopify or Shopify Plus?", answer: "If you process over $1M/year in revenue, require B2B functionality, or need multiple storefronts, Shopify Plus is recommended. For most mid-market merchants migrating from Magento, standard Shopify provides a powerful and cost-effective upgrade." },
  { question: "How much does Magento to Shopify migration cost?", answer: "Pricing depends on your catalogue size, custom extension requirements, and integration complexity. ShopifyTasker provides a fixed-price quote after a discovery session. No upfront payment — you pay only after the migration is complete." },
];

const processSteps = [
  { num: "01", title: "Magento Audit", body: "We perform a full audit of your Magento instance — catalogues, extensions, custom code, EAV attributes, customer groups, and third-party integrations — and document everything." },
  { num: "02", title: "Shopify Architecture Plan", body: "We design your Shopify or Shopify Plus store architecture — product taxonomy, customer segmentation, integration strategy, and custom development scope." },
  { num: "03", title: "Data Migration", body: "Products, categories, attributes, customers, orders, and reviews are migrated from Magento to Shopify with complete accuracy and validated against your source data." },
  { num: "04", title: "Extension Replacement", body: "Magento extensions are replaced with Shopify app equivalents or custom-built solutions — ensuring all your critical business functionality works on Shopify." },
  { num: "05", title: "SEO Migration & Redirects", body: "Every Magento URL is mapped and 301 redirected. Meta data, structured data, canonical tags, and sitemaps are configured for Shopify from day one." },
  { num: "06", title: "QA, Launch & Support", body: "Thorough QA across all migrated data, checkout flows, and integrations. Managed go-live with 15 days post-launch monitoring and support included." },
];

const whatWeMigrate = [
  "All Magento products, categories, attributes & custom fields",
  "Product images, descriptions, variants & inventory",
  "Customer accounts, addresses & order history",
  "Magento reviews and ratings",
  "CMS pages, blog posts & media assets",
  "Custom extension functionality rebuilt on Shopify",
  "ERP, CRM & third-party integrations",
  "SEO: 301 redirects, meta data & structured data",
];

const keywords = [
  "transfer magento to shopify",
  "move magento to shopify",
  "switch from magento to shopify",
  "magento to shopify transfer",
  "migrate magento 2 to shopify",
  "move magento store to shopify",
  "magento 1 to shopify migration",
  "magento to shopify plus migration",
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function MagentoToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from Magento to Shopify",
    description: "Step-by-step Magento to Shopify migration process by ShopifyTasker — for both Magento 1 and Magento 2.",
    step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body, position: parseInt(s.num) })),
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Magento to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates Magento 1 and Magento 2 stores to Shopify and Shopify Plus — including products, customers, orders, extensions, SEO, and 301 redirects. Pay after delivery."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "Magento to Shopify Migration", url: pageUrl },
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
          <li className="text-white/70" aria-current="page">Magento to Shopify</li>
        </ol>
      </nav>

      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Platform Migration &nbsp;·&nbsp; Magento 1 & 2 → Shopify / Shopify Plus</p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Magento to Shopify Migration — Proven Process, Zero Data Loss</h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">Migrate from Magento 1 or Magento 2 to Shopify or Shopify Plus with full data integrity, SEO protection, and extension replacement. Pay only after delivery.</p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">Get a Free Migration Quote</CreateTaskButton>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition">Talk to a Migration Expert</Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[520px] overflow-hidden rounded-t-2xl">
            <Image src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp" alt="Magento to Shopify migration expert at ShopifyTasker" fill className="object-cover object-top" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[{ value: "100+", label: "Magento Migrations Done" }, { value: "M1 & M2", label: "Both Versions Supported" }, { value: "10+", label: "Years Shopify Experience" }, { value: "$0 upfront", label: "Pay After Delivery" }].map((s, i) => (
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
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What's Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Everything Migrated from Magento to Shopify</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">Magento migrations require careful handling of complex EAV data, custom extensions, and third-party integrations. We manage every layer with precision.</p>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">How We Migrate Your Magento Store to Shopify</h2>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Why Brands Choose Us for Magento to Shopify Migration</h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">Magento to Shopify is one of the most complex migrations in eCommerce. Our team has completed over 100 of them — and we know how to do it right.</p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Both Magento Versions", body: "We migrate from Magento 1 and Magento 2 — including stores running outdated end-of-life Magento 1.x versions with no official support." },
              { title: "Extension Expertise", body: "We audit your Magento extensions and rebuild all critical functionality in Shopify using apps or custom development — nothing is lost." },
              { title: "SEO-Safe Migration", body: "All Magento URLs are 301 redirected. Structured data, canonical URLs, and sitemaps are configured to protect your organic traffic." },
              { title: "Fixed Price, No Upfront", body: "You receive a detailed fixed-price quote. Work begins, migration completes, you pay — only when fully satisfied." },
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
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">Magento to Shopify — Common Questions</h2>
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
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Ready to Move from Magento to Shopify?</h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">Tell us about your Magento store. We will scope the migration, send a fixed quote, and deliver — you pay only when satisfied.</p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">Get a Free Migration Quote →</CreateTaskButton>
        </div>
      </section>

      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Migration Services</p>
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
