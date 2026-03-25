import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { industries, getIndustry, industrySlug } from "@/lib/shopify-store-setup-industries";
import { getReviews } from "@/lib/industry-reviews";
import { getEnhancement } from "@/lib/industry-enhancements";
import CreateTaskButton from "../CreateTaskButton";

import GsapScrollReveal from "../GsapScrollReveal";
import GsapStaggerReveal from "../GsapStaggerReveal";
import GsapCountUp from "../GsapCountUp";
import IndustrySetupMarquee from "../IndustrySetupMarquee";
import IndustryReviewsSwiper from "../IndustryReviewsSwiper";
import GeoPriceBadge from "../GeoPriceBadge";
import type {
  WithContext,
  Service,
  FAQPage,
  Organization,
  WebPage,
  BreadcrumbList,
  WebSite,
} from "schema-dts";

type Props = { params: Promise<{ industry: string }> };

export function generateStaticParams() {
  return industrySlug;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { industry } = await props.params;
  const data = getIndustry(industry);
  if (!data) return { title: "Not Found | ShopifyTasker" };
  const url = `https://www.shopifytasker.com/shopify-store-setup/${data.slug}/`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "en": url,
        "en-US": url,
        "x-default": url,
      },
    },
    openGraph: { type: "website", siteName: "ShopifyTasker", url, title: data.metaTitle, description: data.metaDescription },
    twitter: { card: "summary_large_image", title: data.metaTitle, description: data.metaDescription },
  };
}

export default async function IndustrySetupPage(props: Props) {
  const { industry } = await props.params;
  const data = getIndustry(industry);
  if (!data) notFound();

  const orgId   = "https://www.shopifytasker.com/#organization";
  const websiteId = "https://www.shopifytasker.com/#website";
  const pageUrl = `https://www.shopifytasker.com/shopify-store-setup/${data.slug}/`;

  const reviewData = getReviews(data.slug);
  const enhancement = getEnhancement(data.slug);

  const combinedJsonLd = [
    { "@context": "https://schema.org", "@type": "WebSite", "@id": websiteId, url: "https://www.shopifytasker.com/", name: "ShopifyTasker", publisher: { "@id": orgId } } as WithContext<WebSite>,
    { "@context": "https://schema.org", "@type": "Organization", "@id": orgId, name: "ShopifyTasker", url: "https://www.shopifytasker.com/" } as WithContext<Organization>,
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: data.metaTitle, description: data.metaDescription, isPartOf: { "@id": websiteId } } as WithContext<WebPage>,
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shopifytasker.com/" },
        { "@type": "ListItem", position: 2, name: "Shopify Store Setup", item: "https://www.shopifytasker.com/shopify-store-setup/" },
        { "@type": "ListItem", position: 3, name: data.name, item: pageUrl },
      ],
    } as WithContext<BreadcrumbList>,
    { "@context": "https://schema.org", "@type": "Service", "@id": `${pageUrl}#service`, name: `Shopify Store Setup for ${data.name}`, serviceType: `Shopify store setup for ${data.name} businesses.`, provider: { "@id": orgId }, areaServed: "Worldwide" } as WithContext<Service>,
    {
      "@context": "https://schema.org", "@type": "FAQPage", "@id": `${pageUrl}#faq`,
      mainEntity: data.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    } as WithContext<FAQPage>,
    ...(reviewData ? [{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#business`,
      name: "ShopifyTasker",
      url: "https://www.shopifytasker.com/",
      description: `Shopify store setup and development services for ${data.name} businesses.`,
      priceRange: "$$",
      areaServed: "Worldwide",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: reviewData.aggregateRating.toFixed(1),
        reviewCount: reviewData.reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
      review: reviewData.reviews.map((r) => {
        const reviewDate = new Date();
        reviewDate.setDate(reviewDate.getDate() - r.daysAgo);
        return {
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating.toString(),
            bestRating: "5",
            worstRating: "1",
          },
          name: r.title,
          reviewBody: r.body,
          datePublished: reviewDate.toISOString().split("T")[0],
        };
      }),
    }] : []),
  ];

  const relatedIndustries = industries.filter((i) => i.slug !== data.slug).slice(0, 6);
  const marqueeTerms = data.whyShopify.map((w) => w.title);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": combinedJsonLd }) }} />

      {/* ─── BREADCRUMB ──────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-100 px-6 md:px-14 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
          <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/shopify-store-setup" className="hover:text-black transition-colors">Store Setup</Link></li>
          <li>/</li>
          <li className="text-black font-medium">{data.name}</li>
        </ol>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-black text-white px-6 md:px-14 pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Label */}
          <GsapScrollReveal y={20}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6 font-medium">
              {data.category} &nbsp;·&nbsp; Shopify Store Setup
            </p>
          </GsapScrollReveal>

          {/* Headline */}
          <GsapScrollReveal y={50} delay={0.05}>
            <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl">
              {enhancement?.heroHeadline ?? data.headline}
            </h1>
          </GsapScrollReveal>

          {/* Subheadline */}
          <GsapScrollReveal y={30} delay={0.12}>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-3">
              {enhancement?.heroSub ?? data.subheadline}
            </p>
            <p className="text-white/30 text-sm max-w-xl leading-relaxed mb-10">
              Shopify website setup &amp; development for {data.name.toLowerCase()} businesses — end-to-end, fixed price, pay after delivery.
            </p>
          </GsapScrollReveal>

          {/* CTAs */}
          <GsapScrollReveal y={20} delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <CreateTaskButton className="inline-flex items-center gap-2 bg-[#DFF976] text-black px-7 py-3.5 rounded-full font-semibold text-base hover:bg-[#d4f065] transition-colors cursor-pointer">
                Set Up My {data.name} Store
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </CreateTaskButton>
              <Link href="/shopify-store-setup" className="inline-flex items-center gap-2 text-white/50 px-7 py-3.5 text-base hover:text-white transition-colors">
                View all industries
              </Link>
            </div>
          </GsapScrollReveal>

          {/* Trust facts */}
          <GsapScrollReveal y={10} delay={0.28}>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-xs text-white/30 uppercase tracking-widest">
              <span>No upfront payment</span>
              <span className="text-white/10">—</span>
              <span>Fixed-price quote</span>
              <span className="text-white/10">—</span>
              <span>1-hour response</span>
              <span className="text-white/10">—</span>
              <span>Pay after delivery</span>
            </div>
            <div className="mt-5">
              <GeoPriceBadge />
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────────── */}
      <IndustrySetupMarquee terms={marqueeTerms} />

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <GsapStaggerReveal className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {data.stats.map((stat) => (
              <div key={stat.label} className="px-8 py-8 text-center md:text-left">
                <div className="text-[clamp(2rem,2vw,2.75rem)] font-bold text-black leading-none tracking-tight mb-1">
                  <GsapCountUp value={stat.value} />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">{stat.label}</div>
              </div>
            ))}
          </GsapStaggerReveal>
        </div>
      </section>

      {/* ─── OVERVIEW + CHECKLIST ─────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 pb-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left: description + CTA */}
          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-5 font-medium">About this setup</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
              Shopify website setup &amp; development for {data.name}.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">{data.description}</p>
            <CreateTaskButton className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition-colors cursor-pointer">
              Get a Free Quote
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>

          {/* Right: numbered checklist */}
          <GsapScrollReveal delay={0.1}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-5 font-medium">What&apos;s included</p>
            <ul className="space-y-0">
              {data.setupIncludes.map((item, idx) => (
                <li key={item} className="flex items-start gap-4 py-3.5 border-b border-gray-100 last:border-0 group">
                  <span className="text-[11px] font-bold text-gray-300 tabular-nums mt-0.5 w-5 flex-shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  <svg className="w-3.5 h-3.5 text-gray-200 flex-shrink-0 mt-0.5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </li>
              ))}
            </ul>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── CHALLENGES ───────────────────────────────────────────────── */}
      {enhancement && (
        <section className="bg-white px-6 md:px-14 py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <GsapScrollReveal>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Common problems we solve</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-3">
                The real challenges of selling {data.name.toLowerCase()} online
              </h2>
              <p className="text-gray-400 max-w-xl mb-14 text-base leading-relaxed">
                Generic Shopify setups miss these. We&apos;ve built for {data.name.toLowerCase()} businesses specifically — so we solve these before they become problems.
              </p>
            </GsapScrollReveal>

            <GsapStaggerReveal className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
              {enhancement.challenges.map((c, idx) => (
                <div key={c.title} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4 block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-black font-bold text-base mb-3 leading-snug">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </GsapStaggerReveal>
          </div>
        </section>
      )}

      {/* ─── WHY SHOPIFY ──────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 font-medium">Platform advantage</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Why Shopify for<br />{data.name}?
            </h2>
            <p className="text-white/40 max-w-xl mb-14 text-base leading-relaxed">
              Shopify has specific capabilities built for {data.name.toLowerCase()} businesses. Here&apos;s what matters most for your store type.
            </p>
          </GsapScrollReveal>

          <GsapStaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {data.whyShopify.map((reason, idx) => (
              <div key={reason.title} className="bg-[#0a0a0a] p-7 hover:bg-white/[0.03] transition-colors">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-3 block">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-semibold text-base mb-2">{reason.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </GsapStaggerReveal>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">What we deliver</p>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-3">
              Our {data.name} setup services
            </h2>
            <p className="text-gray-400 max-w-xl mb-14 text-base">
              Everything to get your {data.name.toLowerCase()} Shopify store live and ready to sell, backed by 10+ years of Shopify expertise.
            </p>
          </GsapScrollReveal>

          <GsapStaggerReveal className="grid md:grid-cols-3 gap-5">
            {data.services.map((service, idx) => (
              <div
                key={service.title}
                className={`rounded-2xl p-8 border ${idx === 0
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-150 border-gray-200"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 block ${idx === 0 ? "text-[#DFF976]" : "text-gray-300"}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className={`text-xl font-bold mb-3 ${idx === 0 ? "text-white" : "text-black"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${idx === 0 ? "text-white/50" : "text-gray-400"}`}>
                  {service.desc}
                </p>
                <ul className="space-y-2.5 border-t pt-5 ${idx === 0 ? 'border-white/10' : 'border-gray-100'}">
                  {service.included.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-sm ${idx === 0 ? "text-white/70" : "text-gray-600"}`}>
                      <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${idx === 0 ? "text-[#DFF976]" : "text-green-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </GsapStaggerReveal>

          <GsapScrollReveal className="mt-10 text-center">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-[#DFF976] text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-[#d4f065] transition-colors cursor-pointer">
              Start My Store Setup
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 font-medium">Why ShopifyTasker</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              ShopifyTasker vs Fiverr &amp; Upwork developers
            </h2>
            <p className="text-white/40 max-w-xl mb-12 text-base leading-relaxed">
              Anyone can list themselves as a Shopify expert on Fiverr or Upwork. Very few understand what a {data.name.toLowerCase()} business actually needs to convert and grow.
            </p>
          </GsapScrollReveal>

          <GsapScrollReveal>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 text-white/30 font-medium text-xs uppercase tracking-widest w-1/2">Feature</th>
                    <th className="text-center px-6 py-4 text-white/30 font-medium text-xs uppercase tracking-widest">Fiverr / Upwork</th>
                    <th className="text-center px-6 py-4 text-[#DFF976] font-medium text-xs uppercase tracking-widest">ShopifyTasker</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...(enhancement?.comparisonRows ?? []),
                    { label: `${data.name} industry knowledge` },
                    { label: "Pay after delivery — zero upfront risk" },
                    { label: "Fixed-price quote — no hourly billing surprises" },
                    { label: "1-hour response time (no timezone delays)" },
                    { label: "10+ years dedicated Shopify expertise" },
                    { label: "Ongoing support included after launch" },
                    { label: "No disappearing after delivery" },
                    { label: "No fake reviews or inflated portfolios" },
                  ].map((row, idx) => (
                    <tr key={row.label} className={`border-b border-white/5 last:border-0 ${idx < (enhancement?.comparisonRows.length ?? 0) ? "bg-white/[0.03]" : ""}`}>
                      <td className="px-6 py-4 text-white/70">{row.label}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-400/70 text-base">✕</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-[#DFF976] text-base">✓</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GsapScrollReveal>

          <GsapScrollReveal className="mt-10 text-center">
            <CreateTaskButton className="inline-flex items-center gap-2 bg-[#DFF976] text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-[#d4f065] transition-colors cursor-pointer">
              Work With ShopifyTasker
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────── */}
      <section className="bg-[#f8f8f8] px-6 md:px-14 py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left: sticky label */}
          <GsapScrollReveal className="md:sticky md:top-24">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">The process</p>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-5">
              From brief<br />to live store.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              A clear, professional setup process. You know exactly what&apos;s happening at every step — and you only pay when you&apos;re satisfied.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition-colors cursor-pointer">
              Begin Your Setup
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>

          {/* Right: steps */}
          <GsapStaggerReveal className="space-y-0">
            {data.processSteps.map((step) => (
              <div key={step.num} className="flex gap-6 py-7 border-b border-gray-200 last:border-0">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#DFF976] text-xs font-bold">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-1.5">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </GsapStaggerReveal>
        </div>
      </section>

      {/* ─── REVIEWS ──────────────────────────────────────────────────── */}
      {reviewData && (
        <IndustryReviewsSwiper data={reviewData} industryName={data.name} />
      )}

      {/* ─── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="bg-[#DFF976] px-6 md:px-14 py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <GsapScrollReveal>
            <p className="text-2xl md:text-4xl font-bold text-black leading-tight">
              Ready to launch your<br />{data.name} store?
            </p>
            <p className="text-black/60 mt-2 text-base">
              Fixed-price quote · {data.stats[0]?.value} delivery · Pay after completion
            </p>
          </GsapScrollReveal>
          <GsapScrollReveal delay={0.1}>
            <CreateTaskButton className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-900 transition-colors cursor-pointer flex-shrink-0">
              Create My Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>
        </div>
      </section>

      
      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-16 items-start">

          {/* Left label */}
          <GsapScrollReveal className="md:sticky md:top-24">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Common questions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4">
              Frequently asked
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Questions about setting up a Shopify store for {data.name.toLowerCase()} businesses.
            </p>
          </GsapScrollReveal>

          {/* Right: accordion */}
          <GsapStaggerReveal className="space-y-0">
            {data.faqs.map((faq, idx) => (
              <details key={faq.q} className="group border-b border-gray-100 py-5" open={idx === 0}>
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-black font-semibold text-base leading-snug">{faq.q}</h3>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-200 group-open:bg-black group-open:border-black flex items-center justify-center mt-0.5 transition-colors">
                    <svg className="w-2.5 h-2.5 text-gray-400 group-open:text-white transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-500 text-sm leading-relaxed mt-4 pr-8">{faq.a}</p>
              </details>
            ))}
          </GsapStaggerReveal>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-black text-white px-6 md:px-14 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <GsapScrollReveal y={60}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-8 font-medium">
              {data.name} · Shopify Store Setup
            </p>
            <p className="text-[clamp(2.4rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
              Your {data.name} store<br />could be live in days.
            </p>
            <p className="text-white/40 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Expert setup, fixed price. We handle every detail so you can focus on your business.
            </p>
            <CreateTaskButton className="inline-flex items-center gap-2 bg-[#DFF976] text-black px-9 py-4.5 rounded-full font-bold text-lg hover:bg-[#d4f065] transition-colors cursor-pointer">
              Set Up My {data.name} Store
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </CreateTaskButton>
          </GsapScrollReveal>

          <GsapScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-[10px] text-white/25 uppercase tracking-widest">
              <span>No upfront payment</span>
              <span>Fixed-price quote</span>
              <span>1-hour response</span>
              <span>10+ years expertise</span>
              <span>500+ stores launched</span>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── SEO KEYWORD BLOCK ────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-14 py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-4 font-medium">Related services</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
              ShopifyTasker provides{" "}
              <strong className="text-gray-600">Shopify store setup</strong>,{" "}
              <strong className="text-gray-600">Shopify website setup</strong>,{" "}
              <strong className="text-gray-600">Shopify website setup and development</strong>,{" "}
              and{" "}
              <strong className="text-gray-600">Shopify website development</strong>{" "}
              for {data.name.toLowerCase()} businesses worldwide.{" "}
              Whether you need to{" "}
              <strong className="text-gray-600">set up a Shopify store</strong>{" "}
              from scratch, migrate an existing site, or{" "}
              <strong className="text-gray-600">set up a Shopify website</strong>{" "}
              with industry-specific features, our experts handle every step end-to-end.
            </p>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ─── RELATED INDUSTRIES ───────────────────────────────────────── */}
      <section className="bg-[#f8f8f8] px-6 md:px-14 py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <GsapScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Also available</p>
            <h2 className="text-2xl font-bold text-black mb-10">Other industry setups</h2>
          </GsapScrollReveal>

          <GsapStaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/shopify-store-setup/${ind.slug}`}
                className="group flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-black transition-all"
              >
                <div>
                  <div className="font-semibold text-black text-sm">{ind.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{ind.tagline}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </GsapStaggerReveal>

          <GsapScrollReveal className="mt-8">
            <Link href="/shopify-store-setup" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors font-medium">
              View all industry setups
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </GsapScrollReveal>
        </div>
      </section>
    </>
  );
}
