import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Shopify Website Redesign Service | Refresh Your Store's Look & Speed",
  description:
    "Give your Shopify store a modern makeover with our website redesign service. We improve UX, speed, mobile responsiveness, and conversions — all with a fresh, branded design.",
};

const services = [
  {
    num: "01",
    title: "UX & Design Audit",
    body: "We analyse your current store's user experience, conversion blockers, mobile usability, and design gaps before a single pixel is changed.",
  },
  {
    num: "02",
    title: "New Design Direction",
    body: "A fresh, brand-aligned visual concept covering homepage, product pages, collection pages, and key landing pages — built to convert.",
  },
  {
    num: "03",
    title: "Liquid Theme Development",
    body: "Your new design is implemented directly in Shopify Liquid — clean, maintainable code that works with the Shopify editor, not against it.",
  },
  {
    num: "04",
    title: "Mobile-First Optimisation",
    body: "Every section is built and tested for mobile first. Over 70% of Shopify traffic is mobile — your redesigned store will reflect that.",
  },
  {
    num: "05",
    title: "SEO-Safe Migration",
    body: "URL structures preserved, 301 redirects implemented, meta data carried over, and structured data updated — so your rankings are protected throughout the redesign.",
  },
  {
    num: "06",
    title: "Post-Launch QA & Support",
    body: "A thorough pre-launch checklist and 15 days of post-launch support to catch and resolve anything that needs attention after going live.",
  },
];

export default function ShopifyWebsiteRedesign() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Shopify Website Redesign Service"
        serviceDescription="ShopifyTasker delivers Shopify website redesign services that modernize your store's UI, improve UX, boost mobile responsiveness, and increase conversion rates. Pay only after you are satisfied."
        pageUrl="https://www.shopifytasker.com/shopify-website-redesign-service"
        breadcrumbs={[{ name: "Shopify Website Redesign Service", url: "https://www.shopifytasker.com/shopify-website-redesign-service" }]}
        faqs={[
          { question: "What is included in a Shopify website redesign?", answer: "A ShopifyTasker Shopify redesign includes a full UX audit, new design concept, Liquid theme development, mobile optimization, page speed improvements, SEO structure preservation, 301 redirects where needed, and post-launch QA." },
          { question: "How long does a Shopify store redesign take?", answer: "A full Shopify website redesign typically takes 2 to 6 weeks depending on the size and complexity of the store. A detailed timeline is included in the fixed-price quote provided before work begins." },
          { question: "Will a Shopify redesign affect my SEO rankings?", answer: "ShopifyTasker takes an SEO-safe approach to redesigns. URL structures are preserved where possible, 301 redirects are implemented for changed URLs, meta data is maintained, and structured data is updated to ensure minimal ranking disruption." },
        ]}
      />

      {/* Hero */}
      <section className="px-6 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Shopify Redesign
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl mb-8">
            Redesign Your Shopify Store. Convert More.
          </h1>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mb-10">
            Outdated design, slow load times, or poor mobile experience? We redesign Shopify stores from the ground up — modern, fast, and built to perform.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/create-task"
              className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
          {[
            { value: "500+", label: "Shopify Stores Redesigned" },
            { value: "2–6 wks", label: "Typical Project Timeline" },
            { value: "10+", label: "Years of Shopify Experience" },
            { value: "$0 upfront", label: "Pay After Delivery" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 py-8">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-[13px] text-white/40 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What Is Included</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              A Complete Shopify Redesign Process
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-md">
              Every redesign project follows a structured process — from audit to launch — with clear milestones and communication at each stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
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

      {/* Why section */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Why ShopifyTasker</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              The Smarter Way to Redesign a Shopify Store
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              A full-service redesign team at transparent rates, with fixed pricing and a pay-after-delivery model that removes all the risk.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Pay After Delivery", body: "You pay only once the redesigned store is complete and you are satisfied. No risk, no deposit required." },
              { title: "SEO-Safe Process", body: "We protect your existing rankings throughout the redesign. URL changes are handled with redirects and structured data is preserved and updated." },
              { title: "Fixed Price, No Surprises", body: "A detailed fixed-price quote is provided before work begins. We stick to it — no scope creep charges or hidden fees." },
              { title: "Shopify-Native Development", body: "Everything is built in Shopify Liquid — no page builders or third-party editors that create long-term technical debt." },
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

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">Get Started</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-white mb-6">
            Ready to Rebuild Your Shopify Store?
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us about your current store and goals. We send a fixed quote, start the redesign, and you pay only when you are satisfied.
          </p>
          <Link
            href="/create-task"
            className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
