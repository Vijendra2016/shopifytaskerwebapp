import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";
import CreateTaskButton from "../components/CreateTaskButton";

export const metadata: Metadata = {
  title: "Wix to Shopify Migration | Expert Migration Service | ShopifyTasker",
  description:
    "Migrate from Wix to Shopify with zero downtime. Transfer products, content, blog posts, SEO, and 301 redirects. Move your Wix website to Shopify — pay after delivery.",
  alternates: {
    canonical: "https://www.shopifytasker.com/wix-to-shopify-migration",
  },
  openGraph: {
    title: "Wix to Shopify Migration | ShopifyTasker",
    description: "Expert Wix to Shopify migration. Products, content, SEO & 301 redirects all migrated. Transfer your Wix site to Shopify — no upfront payment.",
    url: "https://www.shopifytasker.com/wix-to-shopify-migration",
    siteName: "ShopifyTasker",
    type: "website",
  },
};

const pageUrl = "https://www.shopifytasker.com/wix-to-shopify-migration";

const faqs = [
  { question: "How long does a Wix to Shopify migration take?", answer: "Most Wix to Shopify migrations are completed in 1–2 weeks depending on the number of products, pages, blog posts, and any custom design work required. ShopifyTasker provides a clear timeline estimate before work begins." },
  { question: "Can you transfer my Wix products to Shopify?", answer: "Yes. We migrate all Wix store products including images, descriptions, variants, pricing, inventory levels, and SKUs to Shopify — ready to sell from day one on the new platform." },
  { question: "Will my Wix blog content transfer to Shopify?", answer: "Yes. We migrate all Wix blog posts including images, content, categories, tags, and publish dates to the Shopify blog — preserving your full content history." },
  { question: "Can I keep my domain when moving from Wix to Shopify?", answer: "Yes. You keep your existing domain. We reconnect your domain to your new Shopify store during the DNS cutover — with zero downtime and no change to your domain provider." },
  { question: "Will my SEO be protected when I move my Wix website to Shopify?", answer: "Yes. ShopifyTasker implements full SEO migration including 301 redirects from all your Wix URLs, meta data transfer, structured data setup, and Google Search Console resubmission — protecting your search rankings throughout." },
  { question: "How much does Wix to Shopify migration cost?", answer: "Migration pricing depends on your product count, content volume, and any custom design work. ShopifyTasker provides a fixed-price quote before starting. You pay only once the migration is complete and you are satisfied." },
];

const processSteps = [
  { num: "01", title: "Wix Store Audit", body: "We review your Wix store — all products, pages, blog posts, media, forms, apps, and SEO settings — and produce a detailed migration scope, plan, and fixed-price quote." },
  { num: "02", title: "Shopify Store Setup", body: "Your new Shopify store is configured — theme, navigation, payment methods, tax settings, shipping zones, and all apps needed to match your Wix functionality." },
  { num: "03", title: "Content & Product Migration", body: "Products, variants, blog posts, pages, and media are migrated to Shopify with complete accuracy — preserving all content formatting, images, and relationships." },
  { num: "04", title: "SEO & 301 Redirects", body: "Every Wix URL is mapped and 301 redirected to the corresponding Shopify URL. Meta titles, descriptions, and structured data are configured to maintain your search rankings." },
  { num: "05", title: "Design & QA Testing", body: "We apply your brand identity to the Shopify theme and run full QA across products, pages, checkout flows, and payment methods before going live." },
  { num: "06", title: "Launch & Handover", body: "DNS is switched to Shopify, your store goes live, and we monitor performance for 15 days post-launch. Full admin handover and documentation included." },
];

const whatWeMigrate = [
  "All Wix store products, variants, images & descriptions",
  "Blog posts, categories, tags & media",
  "Custom pages and content",
  "Customer accounts & order history",
  "301 redirects from all Wix URLs to Shopify",
  "Meta titles, descriptions & SEO structured data",
  "Email marketing & form connections",
  "Wix app functionality replaced with Shopify equivalents",
];

const keywords = [
  "transfer wix to shopify",
  "move website wix to shopify",
  "move wix to shopify",
  "switch from wix to shopify",
  "wix to shopify transfer",
  "migrate wix store to shopify",
  "move wix website to shopify",
  "wix ecommerce to shopify",
  "transfer wix store to shopify",
  "wix to shopify switch",
];

const otherMigrations = [
  { name: "WordPress to Shopify", href: "/wordpress-to-shopify-migration" },
  { name: "WooCommerce to Shopify", href: "/woocommerce-to-shopify-migration" },
  { name: "BigCommerce to Shopify", href: "/bigcommerce-to-shopify-migration" },
  { name: "Squarespace to Shopify", href: "/squarespace-to-shopify-migration" },
  { name: "Square to Shopify", href: "/square-to-shopify-migration" },
  { name: "Magento to Shopify", href: "/magento-to-shopify-migration" },
  { name: "Salesforce to Shopify Plus", href: "/salesforce-to-shopify-plus-migration" },
  { name: "Custom Platform to Shopify", href: "/custom-to-shopify-migration" },
];

export default function WixToShopifyMigration() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Migrate from Wix to Shopify",
    description: "Step-by-step Wix to Shopify migration process by ShopifyTasker — transfer your Wix website to Shopify with zero data loss.",
    step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body, position: parseInt(s.num) })),
  };

  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Wix to Shopify Migration Service"
        serviceDescription="ShopifyTasker migrates Wix stores and websites to Shopify with zero data loss — including products, blog posts, pages, SEO, and 301 redirects. Transfer your Wix website to Shopify — pay after delivery."
        pageUrl={pageUrl}
        breadcrumbs={[
          { name: "Shopify Migration", url: "https://www.shopifytasker.com/shopify-migration" },
          { name: "Wix to Shopify Migration", url: pageUrl },
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
          <li className="text-white/70" aria-current="page">Wix to Shopify</li>
        </ol>
      </nav>

      <section className="px-6 pt-20 pb-0 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Platform Migration &nbsp;·&nbsp; Wix → Shopify</p>
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
              Wix to Shopify Migration — Move Your Website with Zero Data Loss
            </h1>
            <p className="text-[15px] text-white/60 leading-[1.7] max-w-lg mb-10">
              Transfer your Wix website to Shopify without losing products, content, blog posts, or SEO rankings.
              Full migration service with zero downtime — pay only after delivery.
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
            <Image src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp" alt="Wix to Shopify migration expert at ShopifyTasker" fill className="object-cover object-top" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[{ value: "200+", label: "Migrations Completed" }, { value: "Zero", label: "Downtime on Launch" }, { value: "10+", label: "Years Shopify Experience" }, { value: "$0 upfront", label: "Pay After Delivery" }].map((s, i) => (
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Everything Transferred from Wix to Shopify</h2>
            <p className="text-[15px] text-white/60 leading-[1.7] mt-6 max-w-md">From your Wix store products to your blog content and SEO authority — we move everything to Shopify accurately so you can keep growing without disruption.</p>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">How We Move Your Wix Website to Shopify</h2>
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
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">Why Businesses Choose Us to Transfer Wix to Shopify</h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">We have helped hundreds of businesses move from Wix to Shopify. No data loss, no ranking drops, no downtime — and you pay only after delivery.</p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Zero Downtime", body: "Your Wix site stays live throughout the entire migration. We switch DNS to Shopify only once the new store is fully tested and approved." },
              { title: "SEO Fully Protected", body: "Every Wix URL gets a 301 redirect to Shopify on launch day — your domain authority and search rankings transfer with you." },
              { title: "Content Preserved", body: "Every product, blog post, page, and image is migrated accurately — nothing left behind, nothing reformatted incorrectly." },
              { title: "Pay After Delivery", body: "You pay only once your Shopify store is live and you are completely satisfied. No deposit, no risk." },
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
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">Wix to Shopify — Common Questions</h2>
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
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">Ready to Move from Wix to Shopify?</h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">Tell us about your Wix site. We will scope the transfer, send a fixed quote, and you pay only when your Shopify store is live.</p>
          <CreateTaskButton className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition cursor-pointer">
            Get a Free Migration Quote →
          </CreateTaskButton>
        </div>
      </section>

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

      <section className="px-6 py-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">Other Migration Services</p>
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
