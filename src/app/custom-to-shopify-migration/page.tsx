import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "Custom Platform to Shopify Migration | Any Platform → Shopify | ShopifyTasker",
  description:
    "Migrate from any custom-built platform, bespoke CMS, or legacy eCommerce system to Shopify. Full product, data, SEO, and integration migration. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/custom-to-shopify-migration",
  },
  openGraph: {
    title: "Custom Platform to Shopify Migration | ShopifyTasker",
    description: "Migrate from any custom or legacy eCommerce platform to Shopify. Full data, SEO & integration migration. No upfront payment.",
    url: "https://www.shopifytasker.com/custom-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/custom-to-shopify-migration";

const faqs = [
  { question: "Can you migrate from a completely custom-built website to Shopify?", answer: "Yes. ShopifyTasker specialises in migrations from custom-built platforms, bespoke eCommerce systems, and legacy websites to Shopify — regardless of the technology stack or database structure. We extract and migrate your data through direct database access, API connections, or CSV export." },
  { question: "How long does a custom platform to Shopify migration take?", answer: "Custom migrations typically take 3–8 weeks depending on the complexity of your current platform, data volume, custom functionality, and integrations. ShopifyTasker provides a detailed timeline after a technical discovery session." },
  { question: "What if my custom platform has unusual data structures?", answer: "Custom data structures are our specialty. We analyse your database schema, map each data field to the appropriate Shopify equivalent, and write custom migration scripts to ensure complete accuracy — no data left behind." },
  { question: "Can you replicate custom functionality from my existing website in Shopify?", answer: "Yes. We audit your custom platform's functionality and rebuild it in Shopify using native apps, Shopify Functions, custom Liquid sections, or custom app development — ensuring your business operations continue without interruption." },
  { question: "How is SEO handled when migrating from a custom platform to Shopify?", answer: "We implement a full SEO migration plan — URL mapping, 301 redirects from every old URL, meta data transfer, structured data setup, canonical tags, and sitemap resubmission — to protect your search rankings throughout the transition." },
  { question: "How much does a custom to Shopify migration cost?", answer: "Custom migration pricing depends on the complexity of your existing platform, data volume, and custom functionality requirements. ShopifyTasker provides a fixed-price quote after a technical discovery session. You pay only after the migration is complete." },
];

const processSteps = [
  { num: "01", title: "Technical Discovery", body: "We conduct a deep technical audit of your existing platform — database structure, product schema, customer data, order records, custom functionality, and all third-party integrations." },
  { num: "02", title: "Data Extraction & Mapping", body: "We extract your data via database access, APIs, or exports — and map every field from your custom schema to the appropriate Shopify data structure." },
  { num: "03", title: "Shopify Store Build", body: "Your Shopify store is configured and designed — theme, navigation, payment methods, shipping, tax, and all the apps needed to run your business operations on Shopify." },
  { num: "04", title: "Custom Functionality Rebuild", body: "Custom features, unique business logic, and platform-specific tools are rebuilt on Shopify using apps, Shopify Functions, or custom development." },
  { num: "05", title: "SEO Migration & Testing", body: "All legacy URLs are mapped and 301 redirected. Structured data, meta data, and sitemaps are configured. Full QA testing across all migrated data and functionality." },
  { num: "06", title: "Launch & Ongoing Support", body: "Managed go-live with DNS cutover and 15 days of post-launch monitoring. Ongoing Shopify development support available if needed." },
];

const whatWeMigrate = [
  "Products, categories, variants & custom product attributes",
  "Customer accounts, addresses & purchase history",
  "Order history and transaction records",
  "Custom CMS pages and content",
  "Unique business logic rebuilt as Shopify custom functionality",
  "Third-party service integrations (ERP, CRM, fulfilment, etc.)",
  "SEO: 301 redirects from all legacy URLs to Shopify",
  "Media assets, digital files & documents",
];

const platformsWeHandle = [
  { name: "Custom PHP / Laravel", desc: "MySQL database extraction and migration to Shopify" },
  { name: "Custom .NET / C#", desc: "SQL Server data migration and API reconstruction" },
  { name: "OpenCart", desc: "Full product and customer data transfer to Shopify" },
  { name: "osCommerce", desc: "Legacy eCommerce migration with full data preservation" },
  { name: "PrestaShop", desc: "Complete catalogue, customer and order migration" },
  { name: "Volusion", desc: "Product and customer data extracted and migrated to Shopify" },
  { name: "3dcart / Shift4Shop", desc: "Full migration including product history and accounts" },
  { name: "Bespoke CMS", desc: "Any custom-built content and commerce system" },
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
];

export default function CustomToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from a Custom Platform to Shopify",
    description: "Step-by-step process for migrating from any custom-built eCommerce platform to Shopify by ShopifyTasker.",
    step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body, position: parseInt(s.num) })),
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Custom Platform to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates any custom-built or legacy eCommerce platform to Shopify — including products, customers, orders, custom functionality, and SEO. Pay after delivery, no upfront cost."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "Custom to Shopify Migration", url: pageUrl },
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
          <li className="text-white/70" aria-current="page">Custom to Shopify</li>
        </ol>
      </nav>

      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Platform Migration &nbsp;·&nbsp; Any Custom Platform → Shopify</p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Migrate from Any Custom Platform to Shopify</h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">On a custom-built website, legacy eCommerce system, or an obscure platform? We handle migrations from any technical stack to Shopify — full data transfer, custom functionality rebuilt, SEO protected. Pay only after delivery.</p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">Get a Free Migration Quote</CreateTaskButton>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition">Talk to a Migration Expert</Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[520px] overflow-hidden rounded-t-2xl">
            <Image src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp" alt="Custom platform to Shopify migration expert at ShopifyTasker" fill className="object-cover object-top" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[{ value: "Any", label: "Platform Supported" }, { value: "200+", label: "Migrations Completed" }, { value: "10+", label: "Years Shopify Experience" }, { value: "$0 upfront", label: "Pay After Delivery" }].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms We Handle */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Platforms We Support</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">We Migrate from Any Platform to Shopify</h2>
            <p className="text-[15px] text-white/55 mt-5 leading-[1.7] max-w-lg">Whether you are on a custom PHP build, a niche platform, or a legacy system no longer supported — we have the technical capability to migrate you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {platformsWeHandle.map((p, i) => (
              <div key={i} className="border border-white/[0.08] p-6 -mt-px -ml-px hover:bg-white/[0.04] transition">
                <p className="text-[11px] font-mono text-white/20 mb-4 tracking-widest">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[15px] font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-[13px] text-white/50 leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What&apos;s Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Everything Migrated to Shopify — Whatever Your Platform</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">We extract your data from wherever it lives, map it accurately to Shopify&apos;s data model, and rebuild all your custom functionality — so you lose nothing in the move.</p>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">How We Migrate Your Custom Platform to Shopify</h2>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">The Migration Team for Complex & Custom Platforms</h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">Most agencies only handle standard platforms. ShopifyTasker handles the complex ones — custom databases, unique architectures, and bespoke business logic that most migration tools cannot touch.</p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Any Platform, Any Stack", body: "PHP, .NET, Python, Ruby — we extract data from any technology stack using custom migration scripts and direct database access." },
              { title: "Custom Functionality Rebuilt", body: "Unique business logic, custom checkout flows, and platform-specific features are rebuilt in Shopify — not skipped or simplified." },
              { title: "SEO Migration Included", body: "Every legacy URL gets a 301 redirect. Your SEO authority transfers to Shopify from day one of going live." },
              { title: "No Upfront Cost", body: "You pay only after your Shopify store is live and everything is verified. No deposit, no risk, no surprises." },
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
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">Custom to Shopify Migration — Common Questions</h2>
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
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Ready to Move Your Custom Platform to Shopify?</h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">Tell us what platform you are on and what you need to move. We will assess the complexity, send a fixed quote, and you pay only when Shopify is live.</p>
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
