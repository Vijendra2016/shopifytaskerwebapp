import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "Squarespace to Shopify Migration | Expert Migration Service | ShopifyTasker",
  description:
    "Migrate your Squarespace store to Shopify with zero downtime. We transfer products, content, blog posts, SEO, and 301 redirects. Pay only after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/squarespace-to-shopify-migration",
  },
  openGraph: {
    title: "Squarespace to Shopify Migration | ShopifyTasker",
    description:
      "Expert Squarespace to Shopify migration. Products, blog posts, content, and SEO migrated safely. No upfront payment.",
    url: "https://www.shopifytasker.com/squarespace-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/squarespace-to-shopify-migration";

const faqs = [
  {
    question: "How long does a Squarespace to Shopify migration take?",
    answer:
      "Most Squarespace to Shopify migrations take 1–2 weeks. The timeline depends on the number of products, blog posts, custom pages, and the complexity of your Squarespace design. ShopifyTasker provides a clear estimate before starting.",
  },
  {
    question: "Can you migrate my Squarespace blog posts to Shopify?",
    answer:
      "Yes. We migrate all blog posts from Squarespace to Shopify including images, content, categories, tags, author information, and publish dates — preserving your content history.",
  },
  {
    question: "Will my SEO be preserved when moving from Squarespace to Shopify?",
    answer:
      "Yes. ShopifyTasker implements full SEO migration including 301 redirects from all your Squarespace URLs, meta data transfer, structured data setup, and Google Search Console resubmission to protect your search rankings.",
  },
  {
    question: "Can you replicate my Squarespace design on Shopify?",
    answer:
      "Yes. We can either rebuild your existing Squarespace design on Shopify using a custom theme or upgrade you to a new, more conversion-optimised Shopify design — your choice.",
  },
  {
    question: "What happens to my Squarespace domain during migration?",
    answer:
      "Your domain continues to point to your Squarespace site during migration. We do a final DNS cutover only once your Shopify store is fully tested and ready to launch — ensuring zero downtime.",
  },
  {
    question: "How much does Squarespace to Shopify migration cost?",
    answer:
      "Migration pricing depends on store size, content volume, and any custom design work required. ShopifyTasker provides a fixed-price quote before starting. You pay only after the migration is complete.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Store Audit",
    body: "We review your Squarespace store — all products, pages, blog posts, media, forms, and SEO settings — and produce a detailed migration scope and timeline.",
  },
  {
    num: "02",
    title: "Shopify Setup",
    body: "Your new Shopify store is configured — theme, navigation, payment methods, tax settings, shipping zones, and any apps needed to replace Squarespace's built-in features.",
  },
  {
    num: "03",
    title: "Content Migration",
    body: "Products, blog posts, pages, media, and metadata are migrated to Shopify accurately — preserving formatting, images, and content relationships.",
  },
  {
    num: "04",
    title: "SEO & Redirects",
    body: "Every Squarespace URL is mapped and 301 redirected to the corresponding Shopify URL. Meta titles, descriptions, and structured data are set up to maintain rankings.",
  },
  {
    num: "05",
    title: "Design & QA",
    body: "We apply your design to the Shopify theme, match your brand identity, and run thorough QA across all pages, products, checkout, and payment flows.",
  },
  {
    num: "06",
    title: "Launch & Handover",
    body: "DNS is switched, your Shopify store goes live, and we monitor performance for 15 days. Full documentation and admin handover are included.",
  },
];

const whatWeMigrate = [
  "All Squarespace products, variants, images & descriptions",
  "Blog posts, categories, tags & author data",
  "Custom pages, content blocks & media",
  "301 redirects from all Squarespace URLs",
  "Meta titles, descriptions & SEO structured data",
  "Customer accounts & order history",
  "Forms and email marketing list connections",
  "Squarespace payment & shipping configuration",
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "Wix to Shopify", href: "/wix-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function SquarespaceToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from Squarespace to Shopify",
    description: "Step-by-step migration process from Squarespace to Shopify by ShopifyTasker with zero data loss.",
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
        serviceName="Squarespace to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates Squarespace stores to Shopify with zero data loss — including products, blog posts, pages, customer data, SEO, and 301 redirects. Pay after delivery."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "Squarespace to Shopify Migration", url: pageUrl },
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
          <li className="text-white/70" aria-current="page">Squarespace to Shopify</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Platform Migration &nbsp;·&nbsp; Squarespace → Shopify
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              Squarespace to Shopify Migration — Seamless & Safe
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Move from Squarespace to Shopify without losing your products, blog content, SEO rankings, or customer data.
              Full migration service with zero downtime — pay only after delivery.
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
              alt="Squarespace to Shopify migration expert at ShopifyTasker"
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
            { value: "Zero", label: "Downtime on Launch" },
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
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What&apos;s Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Everything Migrated from Squarespace to Shopify
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">
              From your products to your blog posts to your SEO authority — we migrate every piece of your Squarespace presence to Shopify with precision.
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
              How We Migrate Your Squarespace Store to Shopify
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
              Why Businesses Choose Us for Squarespace to Shopify Migration
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              We have moved hundreds of businesses from Squarespace to Shopify. No data loss, no ranking drops, no downtime.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Zero Downtime Launch", body: "Your Squarespace site stays live throughout the migration. We only switch your DNS once Shopify is fully tested and ready." },
              { title: "SEO Preserved", body: "Every Squarespace URL gets a 301 redirect to Shopify. Your domain authority and rankings are protected from the moment you go live." },
              { title: "Content Preserved", body: "Every blog post, product, page, and image is migrated accurately — nothing left behind, nothing reformatted incorrectly." },
              { title: "Pay After Delivery", body: "You pay only once your Shopify store is live and you are completely satisfied. No deposit required." },
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
              Squarespace to Shopify — Common Questions
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
            Ready to Move from Squarespace to Shopify?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us about your Squarespace site. We will scope the migration, send a fixed quote, and you pay only when your Shopify store is live.
          </p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Migration Quote →
          </CreateTaskButton>
        </div>
      </section>

      {/* Other Migration Services */}
      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Migration Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherMigrations.map((m, i) => (
              <Link key={i} href={m.href} className="border border-white/[0.08] px-5 py-4 text-[13px] text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition rounded-sm">
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
