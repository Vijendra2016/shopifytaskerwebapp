import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "Shopify Migration Agency | Expert Shopify Migration Services | ShopifyTasker",
  description:
    "ShopifyTasker is a leading Shopify migration agency. We migrate from WooCommerce, WordPress, Magento, BigCommerce, Wix, Squarespace, and more to Shopify — with zero data loss. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/shopify-migration",
  },
  openGraph: {
    title: "Shopify Migration Agency | ShopifyTasker",
    description:
      "Expert Shopify migration services. Move from any platform to Shopify with zero data loss, full SEO migration, and 301 redirects. No upfront payment.",
    url: "https://www.shopifytasker.com/shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/shopify-migration";

const migrationServices = [
  {
    platform: "WooCommerce",
    label: "WooCommerce to Shopify",
    href: "/woocommerce-to-shopify-migration",
    description:
      "Migrate all WooCommerce products, orders, customers, plugins, and SEO to Shopify with zero data loss.",
    tags: ["Products", "Orders", "Plugins", "SEO"],
  },
  {
    platform: "WordPress",
    label: "WordPress to Shopify",
    href: "/wordpress-to-shopify-migration",
    description:
      "Move your WordPress / WooCommerce store to Shopify including blog posts, pages, redirects, and full SEO migration.",
    tags: ["Blog Posts", "Pages", "Redirects", "SEO"],
  },
  {
    platform: "Magento",
    label: "Magento to Shopify",
    href: "/magento-to-shopify-migration",
    description:
      "Full Magento 1 and Magento 2 to Shopify migration — products, categories, orders, customers, and custom attributes.",
    tags: ["Magento 1", "Magento 2", "Attributes", "Orders"],
  },
  {
    platform: "BigCommerce",
    label: "BigCommerce to Shopify",
    href: "/bigcommerce-to-shopify-migration",
    description:
      "Migrate your BigCommerce store to Shopify including all product data, customer accounts, order history, and SEO.",
    tags: ["Products", "Customers", "Orders", "SEO"],
  },
  {
    platform: "Wix",
    label: "Wix to Shopify",
    href: "/wix-to-shopify-migration",
    description:
      "Switch from Wix to Shopify and unlock a fully scalable ecommerce platform — data, design, and SEO all handled.",
    tags: ["Products", "Pages", "SEO", "Design"],
  },
  {
    platform: "Squarespace",
    label: "Squarespace to Shopify",
    href: "/squarespace-to-shopify-migration",
    description:
      "Move from Squarespace to Shopify without losing products, content, or search rankings. Full redirect mapping included.",
    tags: ["Products", "Content", "Redirects", "SEO"],
  },
  {
    platform: "Square",
    label: "Square to Shopify",
    href: "/square-to-shopify-migration",
    description:
      "Migrate your Square POS and online store to Shopify — inventory, customers, and sales history transferred completely.",
    tags: ["Inventory", "Customers", "Orders", "POS"],
  },
  {
    platform: "Salesforce",
    label: "Salesforce to Shopify Plus",
    href: "/salesforce-to-shopify-plus-migration",
    description:
      "Enterprise-grade migration from Salesforce Commerce Cloud to Shopify Plus — data, integrations, and custom logic.",
    tags: ["Enterprise", "Integrations", "Data", "Shopify Plus"],
  },
  {
    platform: "Custom",
    label: "Custom Platform to Shopify",
    href: "/custom-to-shopify-migration",
    description:
      "Running a bespoke or headless store? We extract your data, rebuild your functionality on Shopify, and migrate everything cleanly.",
    tags: ["Custom DB", "API", "Headless", "Bespoke"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Platform Audit",
    body: "We audit your existing store — products, orders, customers, content, integrations, and SEO — and produce a detailed migration plan with a fixed-price quote.",
  },
  {
    num: "02",
    title: "Shopify Store Setup",
    body: "Your Shopify store is configured from scratch — theme, navigation, payment gateways, shipping zones, taxes, and all apps needed to replace your current platform's features.",
  },
  {
    num: "03",
    title: "Data Migration",
    body: "All products, variants, images, customer accounts, order history, discount codes, and custom data are migrated with full accuracy — verified against your source platform.",
  },
  {
    num: "04",
    title: "SEO & Redirect Mapping",
    body: "Every URL from your old platform is mapped to its Shopify equivalent and 301 redirected. Meta data, structured data, canonical tags, and sitemaps are fully configured.",
  },
  {
    num: "05",
    title: "QA & Testing",
    body: "Comprehensive QA across every migrated element — product pages, checkout flows, customer accounts, payment methods, and third-party integrations — before go-live.",
  },
  {
    num: "06",
    title: "Launch & Post-Migration Support",
    body: "Managed go-live with monitoring. We provide 15 days of post-launch support to address any issues that surface in the live Shopify environment.",
  },
];

const whatWeMigrate = [
  "All products, variants, images, SKUs & inventory levels",
  "Customer accounts, addresses & full order history",
  "Blog posts, pages & media content",
  "Third-party platform plugins / apps replaced with Shopify equivalents",
  "301 redirects from every old URL to its Shopify equivalent",
  "Meta titles, descriptions & structured data (SEO)",
  "Discount codes, gift cards & custom pricing rules",
  "Payment gateway & shipping configuration",
  "Custom attributes, metafields & product data structures",
  "Subscription products & recurring billing setups",
];

const faqs = [
  {
    question: "What is a Shopify migration agency?",
    answer:
      "A Shopify migration agency is a specialist team that moves your existing ecommerce store — from platforms like WooCommerce, Magento, BigCommerce, Wix, or Squarespace — to Shopify. ShopifyTasker handles the full process: data extraction, Shopify store setup, SEO migration, 301 redirects, and post-launch support.",
  },
  {
    question: "Which platforms can you migrate to Shopify?",
    answer:
      "ShopifyTasker migrates from WooCommerce, WordPress, Magento 1, Magento 2, BigCommerce, Wix, Squarespace, Square, Salesforce Commerce Cloud, PrestaShop, OpenCart, Volusion, Ecwid, and custom-built platforms. If your store is on a platform not listed, contact us — we handle bespoke migrations too.",
  },
  {
    question: "Will I lose any data during my Shopify migration?",
    answer:
      "No. ShopifyTasker operates a zero data loss policy. All products, variants, customer accounts, order history, blog posts, and custom fields are migrated with complete accuracy and verified against your source data before launch.",
  },
  {
    question: "How long does a Shopify migration take?",
    answer:
      "Most Shopify migrations are completed in 1–4 weeks depending on platform complexity, the volume of products and orders, and the amount of custom functionality that needs rebuilding. ShopifyTasker provides a clear timeline before work begins.",
  },
  {
    question: "Will my SEO rankings be protected during the migration?",
    answer:
      "Yes. Every URL from your old platform is mapped and 301 redirected to its Shopify equivalent on launch day. Meta titles, descriptions, structured data, canonical tags, and sitemaps are all configured — minimising any SEO disruption during the transition.",
  },
  {
    question: "Do I need to pay upfront for Shopify migration services?",
    answer:
      "No. ShopifyTasker works on a pay-after-delivery model for migration projects. You pay only once your Shopify store is live and you are fully satisfied. No deposit, no risk.",
  },
  {
    question: "Can you migrate to Shopify Plus?",
    answer:
      "Yes. ShopifyTasker handles Shopify Plus migrations for enterprise stores including Salesforce Commerce Cloud, Magento 2, and other complex platforms. Shopify Plus migrations include custom checkout, B2B setup, multi-storefront configuration, and full data migration.",
  },
  {
    question: "How much does Shopify migration cost?",
    answer:
      "Shopify migration pricing depends on your platform, the size of your store, and the complexity of custom functionality. ShopifyTasker provides a fixed-price quote before starting. Hourly rates begin at $20/hr and fixed project packages are available. Contact us for a free scoping call.",
  },
  {
    question: "Can you migrate my store from Shopify to another platform?",
    answer:
      "Yes. While most of our work is migrating to Shopify, we also handle migrations from Shopify to WooCommerce, Shopify to Magento, and Shopify to WordPress. Contact us to discuss your specific requirements.",
  },
];

const keywords = [
  "shopify migration",
  "shopify migration services",
  "shopify migration agency",
  "migrate website to shopify",
  "shopify data migration",
  "shopify store migration",
  "shopify plus migration",
  "shopify migration tool",
  "platform migration to shopify",
  "move to shopify",
  "transfer website to shopify",
  "switch to shopify",
  "shopify to shopify migration",
  "migrate from shopify",
  "shopify to woocommerce migration",
  "shopify to wordpress migration",
  "shopify to bigcommerce migration",
  "shopify to magento 2 migration",
  "migrate shopify to woocommerce",
  "migrate shopify to wordpress",
  "migrate from shopify to bigcommerce",
  "opencart to shopify migration",
  "prestashop to shopify migration",
  "volusion to shopify migration",
  "ecwid to shopify migration",
  "litextension shopify",
  "cart2cart shopify",
  "litextension store migration",
];

const allMigrationLinks = [
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function ShopifyMigrationAgency() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How ShopifyTasker Migrates Your Store to Shopify",
    description:
      "The step-by-step process ShopifyTasker uses to migrate any ecommerce platform to Shopify with zero data loss.",
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
        serviceName="Shopify Migration Agency — Expert Shopify Migration Services"
        serviceDescription="ShopifyTasker is a specialist Shopify migration agency. We migrate from WooCommerce, WordPress, Magento, BigCommerce, Wix, Squarespace, and more to Shopify with zero data loss. Pay after delivery."
        pageUrl={pageUrl}
        breadcrumbs={[{ name: "Shopify Migration", url: pageUrl }]}
        faqs={faqs}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
          <li className="text-white/70" aria-current="page">Shopify Migration Agency</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Shopify Migration Agency &nbsp;·&nbsp; Any Platform → Shopify
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              The Shopify Migration Agency That Guarantees Zero Data Loss
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Moving to Shopify from WooCommerce, Magento, BigCommerce, Wix, WordPress, or any other platform?
              ShopifyTasker handles every migration end-to-end — products, customers, orders, SEO, and redirects —
              with no upfront payment required.
            </p>
            <div className="flex flex-wrap gap-3">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
                Get a Free Migration Quote
              </CreateTaskButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
              >
                Talk to a Migration Expert
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[520px] overflow-hidden rounded-t-2xl">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp"
              alt="Shopify migration agency — ShopifyTasker expert team"
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
            { value: "200+", label: "Migrations Completed" },
            { value: "9+", label: "Platforms Supported" },
            { value: "Zero", label: "Data Loss Guarantee" },
            { value: "$0 upfront", label: "Pay After Delivery" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Migration Services Grid */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Shopify Migration Services</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-3xl">
              We Migrate Every Major Platform to Shopify
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-2xl">
              Whether you are on a hosted platform, an open-source CMS, or a fully custom solution, ShopifyTasker has a
              proven migration path ready for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {migrationServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="bg-[#0a0a0a] p-8 flex flex-col gap-4 hover:bg-white/[0.04] transition group"
              >
                <p className="text-[11px] font-mono text-white/20 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[18px] font-semibold text-white leading-snug group-hover:text-white/90 transition">
                  {service.label}
                </h3>
                <p className="text-[14px] text-white/50 leading-[1.7] flex-1">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[11px] text-white/30 border border-white/[0.07] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[13px] text-white/40 group-hover:text-white/70 transition mt-1">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Migrate */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What's Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Everything That Moves With You to Shopify
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">
              Our Shopify migration service covers every data type, every URL, and every configuration — so nothing
              is left behind on your old platform.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 mt-8 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
              Start Your Migration →
            </CreateTaskButton>
          </div>
          <ul className="border-t border-white/[0.08]">
            {whatWeMigrate.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-5 py-5 border-b border-white/[0.08] text-[14px] text-white/60 leading-[1.6]"
              >
                <span className="font-mono text-[11px] text-white/20 shrink-0 mt-0.5 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Migration Process */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              How Our Shopify Migration Process Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
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

      {/* Shopify Plus Migration */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Enterprise Migration</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Shopify Plus Migration for Enterprise Stores
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-lg">
              Moving a high-volume or enterprise store to Shopify Plus? ShopifyTasker handles the full migration
              including custom checkout, B2B pricing, multi-storefront setup, ERP integrations, and complex data
              structures — with dedicated project management throughout.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Custom checkout & scripts migration",
                "B2B / wholesale pricing and accounts",
                "Multi-storefront and international markets",
                "ERP, CRM & 3PL integrations rebuilt on Shopify Plus",
                "High-volume order and customer data migration",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-white/55">
                  <span className="text-white/20 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition cursor-pointer">
                Discuss Your Shopify Plus Migration
              </CreateTaskButton>
            </div>
          </div>
          <div className="border border-white/[0.08] p-10 rounded-sm">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-8">Platforms We Migrate to Shopify Plus</p>
            <div className="space-y-4">
              {[
                { from: "Salesforce Commerce Cloud", to: "Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
                { from: "Magento 2 (Adobe Commerce)", to: "Shopify Plus", href: "/magento-to-shopify-migration" },
                { from: "BigCommerce Enterprise", to: "Shopify Plus", href: "/bigcommerce-to-shopify-migration" },
                { from: "Custom Enterprise Platform", to: "Shopify Plus", href: "/custom-to-shopify-migration" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center justify-between py-4 border-b border-white/[0.07] group"
                >
                  <div>
                    <p className="text-[14px] text-white/70 group-hover:text-white transition">{item.from}</p>
                    <p className="text-[12px] text-white/30 mt-0.5">→ {item.to}</p>
                  </div>
                  <span className="text-white/20 group-hover:text-white/60 transition text-[13px]">View →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ShopifyTasker */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Why Choose ShopifyTasker as Your Shopify Migration Agency
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              We have completed over 200 platform migrations. Our process is refined across every major platform,
              and our pay-after-delivery model means you have zero risk.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              {
                title: "No Upfront Payment",
                body: "You pay only after your Shopify store is live and you are fully satisfied. No deposit, no retainer — zero financial risk to get started.",
              },
              {
                title: "Zero Data Loss Guarantee",
                body: "Every product, order, customer record, and content item is migrated with complete accuracy — validated against your source data before launch.",
              },
              {
                title: "SEO-Safe Migration",
                body: "Every URL is 301 redirected on launch day. Your organic traffic and search rankings are protected from the moment Shopify goes live.",
              },
              {
                title: "Fixed-Price Quotes",
                body: "A detailed, fixed-price quote is agreed before any work begins. No hourly surprises, no scope creep billing — just a clear price for a complete job.",
              },
              {
                title: "Post-Migration Support",
                body: "15 days of post-launch monitoring and support included with every migration. We are available to resolve any issues that appear in production.",
              },
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
              Shopify Migration — Common Questions
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
            Ready to Migrate Your Store to Shopify?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us which platform you are on and the size of your store. We will scope the migration, send a
            fixed quote, and you pay only when Shopify is live.
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
              <span
                key={i}
                className="text-[12px] text-white/35 border border-white/[0.07] px-3 py-1.5 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* All Migration Services */}
      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">All Migration Services</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
            {allMigrationLinks.map((m, i) => (
              <Link
                key={i}
                href={m.href}
                className="border border-white/[0.08] px-4 py-3 text-[12px] text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition rounded-sm text-center"
              >
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
