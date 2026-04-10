import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "Salesforce Commerce Cloud to Shopify Plus Migration | ShopifyTasker",
  description:
    "Migrate from Salesforce Commerce Cloud (Demandware) to Shopify Plus. Enterprise-grade migration including products, customers, orders, B2B setup, and integrations. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/salesforce-to-shopify-plus-migration",
  },
  openGraph: {
    title: "Salesforce to Shopify Plus Migration | ShopifyTasker",
    description:
      "Enterprise Salesforce Commerce Cloud to Shopify Plus migration. Full data, SEO, B2B, and integration migration. No upfront payment.",
    url: "https://www.shopifytasker.com/salesforce-to-shopify-plus-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/salesforce-to-shopify-plus-migration";

const faqs = [
  {
    question: "How long does a Salesforce Commerce Cloud to Shopify Plus migration take?",
    answer:
      "Enterprise Salesforce to Shopify Plus migrations typically take 6–12 weeks depending on data volume, custom integrations, B2B configurations, and the number of storefronts being migrated. ShopifyTasker provides a detailed project plan before work begins.",
  },
  {
    question: "Can you migrate Salesforce B2B configurations to Shopify Plus?",
    answer:
      "Yes. ShopifyTasker migrates B2B pricing rules, wholesale customer accounts, company profiles, custom catalogues, and volume discounts to Shopify Plus B2B — including Shopify's native B2B feature set and custom solutions where needed.",
  },
  {
    question: "Will my Salesforce integrations work on Shopify Plus?",
    answer:
      "We audit all your existing Salesforce Commerce Cloud integrations — ERP, CRM, OMS, PIM, and marketing platforms — and either connect native Shopify Plus integrations or build custom middleware to replicate your existing workflows.",
  },
  {
    question: "How is SEO handled during the Salesforce to Shopify Plus migration?",
    answer:
      "ShopifyTasker implements a complete SEO migration plan including URL mapping, 301 redirects, structured data migration, meta data transfer, and sitemap resubmission to protect your organic rankings throughout the transition.",
  },
  {
    question: "Do you have experience migrating from Demandware to Shopify Plus?",
    answer:
      "Yes. ShopifyTasker has completed enterprise migrations from Salesforce Commerce Cloud (formerly Demandware) to Shopify Plus, including multi-currency, multi-locale, and B2B configurations for complex enterprise operations.",
  },
  {
    question: "What is the cost of a Salesforce to Shopify Plus migration?",
    answer:
      "Enterprise migration pricing is quoted based on your specific data volumes, integrations, and customisation requirements. ShopifyTasker provides a fixed-price quote after a thorough discovery session. No payment is required until the migration is complete.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Enterprise Discovery",
    body: "We conduct a full audit of your Salesforce Commerce Cloud instance — catalogues, customer segments, B2B configurations, integrations, custom cartridges, and business logic.",
  },
  {
    num: "02",
    title: "Shopify Plus Architecture",
    body: "We design your Shopify Plus store architecture — organisation structure, storefronts, markets, B2B setup, headless considerations, and integration strategy.",
  },
  {
    num: "03",
    title: "Data Migration",
    body: "Products, catalogues, customer accounts, B2B company profiles, order history, and content are migrated with full fidelity — validated against your Salesforce data.",
  },
  {
    num: "04",
    title: "Integration Rebuild",
    body: "ERP, CRM, OMS, and marketing platform integrations are rebuilt on Shopify Plus using native apps, Shopify Flow, or custom API middleware.",
  },
  {
    num: "05",
    title: "SEO & UAT Testing",
    body: "Full SEO migration with 301 redirects, structured data, and sitemaps. User acceptance testing across all workflows, payment methods, and customer journeys.",
  },
  {
    num: "06",
    title: "Cutover & Hypercare",
    body: "Managed go-live with cutover planning, DNS transition, and a dedicated hypercare period — monitoring performance, resolving issues, and ensuring business continuity.",
  },
];

const whatWeMigrate = [
  "Product catalogues, variants, pricing rules & custom attributes",
  "B2B company profiles, wholesale accounts & custom price lists",
  "Customer accounts, order history & loyalty data",
  "ERP, CRM, OMS & PIM integrations rebuilt on Shopify Plus",
  "Multi-currency, multi-locale & multi-storefront configuration",
  "Custom business logic and promotional rules",
  "SEO: 301 redirects, structured data & meta data",
  "Content pages, blogs, assets & digital media",
];

const keywords = [
  "transfer salesforce to shopify plus",
  "move salesforce commerce cloud to shopify",
  "migrate demandware to shopify plus",
  "switch from salesforce to shopify plus",
  "salesforce to shopify plus transfer",
  "move salesforce to shopify",
  "demandware to shopify migration",
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function SalesforceToShopifyPlusMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from Salesforce Commerce Cloud to Shopify Plus",
    description:
      "Enterprise migration process from Salesforce Commerce Cloud (Demandware) to Shopify Plus by ShopifyTasker.",
    step: processSteps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.body,
      position: parseInt(s.num),
    })),
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Salesforce Commerce Cloud to Shopify Plus Migration"
        serviceDescription="ShopifyTasker migrates enterprise brands from Salesforce Commerce Cloud (Demandware) to Shopify Plus — including B2B configuration, ERP integrations, multi-currency, and full SEO migration. Pay after delivery."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "Salesforce to Shopify Plus Migration", url: pageUrl },
        ]}
        faqs={faqs}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] px-6 py-3">
        <ol className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] text-white/40">
          <li><Link href="/" className="hover:text-white/70 transition">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/shopify-migration" className="hover:text-white/70 transition">Shopify Migration</Link></li>
          <li aria-hidden>/</li>
          <li className="text-white/70" aria-current="page">Salesforce to Shopify Plus</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Enterprise Migration &nbsp;·&nbsp; Salesforce Commerce Cloud → Shopify Plus
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              Salesforce to Shopify Plus Migration for Enterprise Brands
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Migrate from Salesforce Commerce Cloud to Shopify Plus without disrupting your operations.
              Full data transfer, B2B setup, integration rebuilds, and SEO migration — pay only after delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
                Get a Free Migration Quote
              </CreateTaskButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
              >
                Talk to an Enterprise Expert
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[520px] overflow-hidden rounded-t-2xl">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp"
              alt="Salesforce to Shopify Plus enterprise migration experts at ShopifyTasker"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[
            { value: "50+", label: "Enterprise Migrations" },
            { value: "Shopify Plus", label: "Certified Partner" },
            { value: "10+", label: "Years Experience" },
            { value: "$0 upfront", label: "Pay After Delivery" },
          ].map((s, i) => (
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
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What's Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Everything Migrated from Salesforce to Shopify Plus
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">
              Enterprise migration requires more than moving products. We handle every layer of your Salesforce Commerce Cloud operation — rebuilt and optimised for Shopify Plus.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Start Your Migration →
            </CreateTaskButton>
          </div>
          <ul className="border-t border-white/[0.08]">
            {whatWeMigrate.map((item, i) => (
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

      {/* Process */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              How We Migrate Salesforce Commerce Cloud to Shopify Plus
            </h2>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              The Enterprise Migration Team Brands Trust
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              Salesforce Commerce Cloud migrations are complex. Our team has the Shopify Plus expertise and enterprise experience to manage every detail — without disrupting your business.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "No Upfront Cost", body: "You pay only after the migration is complete and your Shopify Plus store is live. No risk, no deposit." },
              { title: "Shopify Plus Expertise", body: "Our team works exclusively with Shopify and Shopify Plus — with deep knowledge of the platform's B2B, Flow, and API capabilities." },
              { title: "Integration Specialists", body: "We rebuild ERP, CRM, OMS, and PIM integrations on Shopify Plus using best-in-class connectors and custom API middleware." },
              { title: "SEO-Protected Migration", body: "Your Salesforce URLs are mapped, redirected, and monitored throughout the migration to prevent ranking drops." },
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

      {/* FAQ */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">FAQ</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Salesforce to Shopify Plus — Common Questions
            </h2>
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
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Move from Salesforce to Shopify Plus?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Share your Salesforce Commerce Cloud setup. We will scope the migration, provide a fixed quote, and deliver — you pay only when you are satisfied.
          </p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Migration Quote →
          </CreateTaskButton>
        </div>
      </section>

      {/* Keywords */}
      <section className="px-6 py-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Also Searched As</p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw, i) => (
              <span key={i} className="text-[12px] text-white/35 border border-white/[0.07] px-3 py-1.5 rounded-full">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Migration Services */}
      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Migration Services</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {otherMigrations.map((m, i) => (
              <Link key={i} href={m.href} className="border border-white/[0.08] px-4 py-3 text-[12px] text-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition rounded-sm">
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
