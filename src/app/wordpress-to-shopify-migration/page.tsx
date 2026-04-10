import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "WordPress to Shopify Migration | Expert Migration Service | ShopifyTasker",
  description:
    "Migrate from WordPress (WooCommerce) to Shopify with zero data loss. We transfer products, customers, orders, blogs, SEO, and 301 redirects. Pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/wordpress-to-shopify-migration",
  },
  openGraph: {
    title: "WordPress to Shopify Migration | ShopifyTasker",
    description:
      "Expert WordPress to Shopify migration service. Products, customers, orders, SEO & redirects — all migrated. No upfront payment.",
    url: "https://www.shopifytasker.com/wordpress-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/wordpress-to-shopify-migration";

const faqs = [
  {
    question: "How long does a WordPress to Shopify migration take?",
    answer:
      "Most WordPress to Shopify migrations are completed in 1–3 weeks depending on the number of products, orders, customer records, and blog posts. ShopifyTasker provides a clear timeline estimate before work begins.",
  },
  {
    question: "Will my SEO rankings be affected when moving from WordPress to Shopify?",
    answer:
      "ShopifyTasker handles full SEO migration including 301 redirects from your WordPress URLs to Shopify URLs, meta title and description migration, canonical tags, and sitemap submission — minimising any SEO impact during the transition.",
  },
  {
    question: "Can you migrate my WooCommerce products and orders to Shopify?",
    answer:
      "Yes. We migrate all WooCommerce product data including variants, images, descriptions, inventory levels, customer records, and order history to Shopify with complete accuracy.",
  },
  {
    question: "Do I need to pay upfront for the WordPress to Shopify migration?",
    answer:
      "No. ShopifyTasker operates on a pay-after-delivery model. You pay only once the migration is completed and you are satisfied with the result.",
  },
  {
    question: "Can you rebuild my WordPress blog on Shopify?",
    answer:
      "Yes. We migrate all blog posts from WordPress to Shopify including images, categories, authors, and publish dates — and set up the Shopify blog to match your content structure.",
  },
  {
    question: "How much does WordPress to Shopify migration cost?",
    answer:
      "Migration pricing depends on the size of your store and the complexity of data. ShopifyTasker provides a fixed-price quote before starting. Rates begin at $20/hr and fixed project packages are available.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Scoping",
    body: "We audit your WordPress/WooCommerce store — products, orders, customers, plugins, SEO, and blog content — then provide a detailed migration plan and fixed quote.",
  },
  {
    num: "02",
    title: "Shopify Store Setup",
    body: "We configure your new Shopify store — theme, navigation, payment gateways, shipping zones, tax settings, and any apps needed to replicate your WordPress functionality.",
  },
  {
    num: "03",
    title: "Data Migration",
    body: "Products, variants, images, customer records, order history, and blog posts are all migrated with precision — preserving relationships, SKUs, and custom fields.",
  },
  {
    num: "04",
    title: "SEO & Redirects",
    body: "All your WordPress URLs are mapped to their Shopify equivalents and 301 redirects are implemented. Meta data, structured data, and sitemaps are fully configured.",
  },
  {
    num: "05",
    title: "QA & Testing",
    body: "We run thorough QA across every migrated element — product pages, checkout flows, customer accounts, and payment methods — before going live.",
  },
  {
    num: "06",
    title: "Launch & Support",
    body: "Your Shopify store goes live. We monitor performance for 15 days post-launch and remain available for any issues that surface in a live environment.",
  },
];

const whatWeMigrate = [
  "All WooCommerce products, variants, images & descriptions",
  "Customer accounts, addresses & order history",
  "Blog posts, categories & media from WordPress",
  "301 redirects from every WordPress URL to Shopify",
  "Meta titles, descriptions & SEO structured data",
  "Discount codes, gift cards & custom pricing rules",
  "Third-party plugin replacements with Shopify apps",
  "Payment gateway & shipping configuration",
];

const keywords = [
  "transfer wordpress to shopify",
  "move wordpress to shopify",
  "switch from wordpress to shopify",
  "migrate wordpress store to shopify",
  "move woocommerce to shopify",
  "transfer woocommerce to shopify",
  "move wordpress website to shopify",
  "switch woocommerce to shopify",
];

const otherMigrations = [
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function WordPressToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from WordPress to Shopify",
    description:
      "Step-by-step process ShopifyTasker follows to migrate a WordPress or WooCommerce store to Shopify with zero data loss.",
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
        serviceName="WordPress to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates WordPress and WooCommerce stores to Shopify with zero data loss — including products, customers, orders, blogs, SEO, and 301 redirects. Pay after delivery, no upfront cost."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "WordPress to Shopify Migration", url: pageUrl },
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
          <li className="text-white/70" aria-current="page">WordPress to Shopify</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Platform Migration &nbsp;·&nbsp; WordPress → Shopify
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              WordPress to Shopify Migration Done Right
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Move your WooCommerce store to Shopify without losing a single product, customer, order, or ranking.
              Full data transfer, SEO migration, and 301 redirects — pay only after delivery.
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
              alt="WordPress to Shopify migration expert at ShopifyTasker"
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
            { value: "Zero", label: "Data Loss Guarantee" },
            { value: "10+", label: "Years Shopify Experience" },
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
              Everything Migrated from WordPress to Shopify
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">
              We transfer every asset, record, and configuration from your WordPress or WooCommerce store to Shopify — no shortcuts, no missing data.
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

      {/* Migration Process */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Our Process</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              How We Migrate Your WordPress Store to Shopify
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
              Why Businesses Choose Us for WordPress to Shopify Migration
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              We have handled over 200 platform migrations. Our process is proven, our results are documented, and you never pay until you are satisfied.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "No Upfront Payment", body: "You pay only after your Shopify store is live and you are fully satisfied. No deposit, no risk." },
              { title: "SEO-Safe Migration", body: "Every URL is redirected. Your rankings are protected from day one with a complete 301 redirect implementation." },
              { title: "Zero Data Loss", body: "Products, orders, customers, and blogs are migrated with full accuracy — verified against your original WordPress data." },
              { title: "Fixed-Price Quotes", body: "A detailed quote is agreed before any work starts. No surprise charges, no scope creep billing." },
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
              WordPress to Shopify Migration — Common Questions
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
            Ready to Move from WordPress to Shopify?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us about your WordPress store. We will send a fixed quote, migrate everything, and you pay only when you are satisfied.
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
