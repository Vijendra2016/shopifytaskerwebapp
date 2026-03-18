import Link from "next/link";
import { Metadata } from "next";
import ShopifyExpertServices from "../components/ShopifyExpertServices";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Shopify Ongoing Support Services | Keep Your Store Running Smoothly",
  description:
    "We provide reliable ongoing support for your Shopify store — from updates and bug fixes to performance improvements and long-term maintenance.",
};

const services = [
  {
    num: "01",
    title: "Bug Fixes & Error Resolution",
    body: "We identify and resolve theme errors, layout breaks, app conflicts, and checkout issues quickly so your customers never experience disruption.",
  },
  {
    num: "02",
    title: "Performance Optimisation",
    body: "Regular speed audits and improvements to page load time, Core Web Vitals, image compression, and script management to keep your store fast.",
  },
  {
    num: "03",
    title: "Theme & App Updates",
    body: "We test and apply theme updates and app upgrades in a staged environment before pushing live — avoiding the risk of untested changes breaking your store.",
  },
  {
    num: "04",
    title: "Security Monitoring",
    body: "Timely platform and app patches, security reviews, and proactive monitoring to keep your store and customer data protected.",
  },
  {
    num: "05",
    title: "Content & Product Updates",
    body: "Banner swaps, product edits, collection updates, landing page changes — handled quickly by our team without you needing developer access.",
  },
  {
    num: "06",
    title: "Priority Response",
    body: "When something urgent comes up, priority support clients get a fast response — usually within a few hours during business hours.",
  },
];

export default function ShopifyOngoingSupport() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <ServicePageSchema
        serviceName="Shopify Ongoing Support Services"
        serviceDescription="ShopifyTasker provides reliable ongoing Shopify support including bug fixes, performance optimization, security updates, theme maintenance, and priority assistance. Pay after delivery — no upfront fees."
        pageUrl="https://www.shopifytasker.com/ongoing-support"
        breadcrumbs={[{ name: "Ongoing Support", url: "https://www.shopifytasker.com/ongoing-support" }]}
        faqs={[
          { question: "What does Shopify ongoing support include?", answer: "ShopifyTasker ongoing support covers bug fixes, theme updates, app updates, performance audits, speed optimization, security patches, content changes, and priority response for urgent issues. Support plans are available on a monthly retainer basis." },
          { question: "How quickly does ShopifyTasker respond to support requests?", answer: "Standard support requests are addressed within 24 hours. Priority support clients receive responses within a few hours. Emergency issues are handled as soon as possible depending on the support plan." },
          { question: "Does ShopifyTasker offer monthly Shopify maintenance plans?", answer: "Yes. ShopifyTasker offers monthly Shopify maintenance and support retainer plans. These cover a set number of hours each month for updates, tweaks, bug fixes, and ongoing improvements. Contact the team for a tailored plan quote." },
        ]}
      />

      {/* Hero */}
      <section className="px-6 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Ongoing Support
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl mb-8">
            Reliable Shopify Support — Every Month
          </h1>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mb-10">
            Keep your Shopify store fast, secure, and up to date. Our ongoing support plans give you a dedicated team handling everything behind the scenes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/create-task"
              className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
            >
              Request a Support Plan
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
            { value: "500+", label: "Shopify Stores Supported" },
            { value: "24 hrs", label: "Standard Response Time" },
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
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">What Is Covered</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white max-w-2xl">
              Everything Your Store Needs to Stay Healthy
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-4 max-w-md">
              Our support plans are designed so you never have to worry about the operational side of your Shopify store.
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

      {/* How it works */}
      <section className="px-6 py-20 md:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">How It Works</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Simple, Transparent, No Lock-In
            </h2>
            <p className="text-[15px] text-white/55 leading-[1.7] mt-5 max-w-md">
              We do not tie you into long contracts. Our support plans run month to month, billed only after work is delivered.
            </p>
          </div>
          <div className="border-t border-white/[0.08]">
            {[
              { title: "Tell Us What Your Store Needs", body: "Share your ongoing requirements — updates, bug fixes, content changes, or a mix. We scope a monthly plan around your actual workload." },
              { title: "We Assign a Dedicated Team", body: "A project manager and Shopify specialist are assigned to your store. They learn your setup and handle requests without needing repeated context." },
              { title: "Work Happens, You Stay Informed", body: "Tasks are tracked and reported monthly. You always know what has been done, what is next, and how your store is performing." },
              { title: "Pay After Work Is Done", body: "No upfront retainer lock-in on your first engagement. Pay after the work is completed and you are satisfied with the results." },
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
            Let Us Handle the Store — You Handle the Business
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] max-w-xl mx-auto mb-10">
            Tell us what ongoing support your Shopify store needs. We will send a tailored plan with transparent monthly pricing.
          </p>
          <Link
            href="/create-task"
            className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/90 transition"
          >
            Request a Support Plan
          </Link>
        </div>
      </section>

      <ShopifyExpertServices />
    </main>
  );
}
