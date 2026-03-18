import { Metadata } from "next";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import GeoMessage from "../components/GeoMessage";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Shopify Theme Tweaks & Custom Fixes | Fast Edits by Experts",
  description:
    "Need quick Shopify theme changes? Get fast, affordable tweaks — layout edits, bug fixes, custom features & more. Trusted Shopify experts. Quick turnaround!",
};

export default function themetweak() {
  return (
    <main className="container mx-auto px-0 py-10 text-center pt-0">
      <ServicePageSchema
        serviceName="Shopify Support Retainers"
        serviceDescription="ShopifyTasker offers monthly Shopify support retainer plans covering bug fixes, theme updates, performance optimization, and ongoing store maintenance. Dedicated Shopify experts available on a retainer basis."
        pageUrl="https://www.shopifytasker.com/shopify-support-retainers"
        breadcrumbs={[{ name: "Shopify Support Retainers", url: "https://www.shopifytasker.com/shopify-support-retainers" }]}
        faqs={[
          { question: "What is a Shopify support retainer?", answer: "A Shopify support retainer from ShopifyTasker is a monthly plan that gives you a dedicated block of expert hours for ongoing store maintenance, updates, bug fixes, new feature additions, and performance improvements — without needing to raise a new quote each time." },
          { question: "What does a Shopify retainer plan include?", answer: "ShopifyTasker retainer plans cover theme updates, bug fixes, app updates, new section builds, content changes, speed audits, security patches, and priority response. Plans are tailored to how many hours per month your store requires." },
          { question: "How is a Shopify retainer billed?", answer: "ShopifyTasker retainer plans are billed monthly. The number of hours is agreed upfront and unused hours do not roll over. Custom retainer arrangements are available for stores with variable monthly needs." },
        ]}
      />
        <section className="bg-black text-white py-16 px-4">
        <h1 className="text-3xl md:text-5xl text-white font-bold tracking-tight mb-4"> Need a Quick Fix? <br></br> We Tweak Shopify Themes Fast.</h1>

  <h2 className="text-2xl md:text-2xl text-white font-bold tracking-tight mb-4">From layout changes to custom features <br></br>we handle small tweaks and quick fixes to enhance your Shopify store.</h2>
        </section>
<TestimonialCardGrid/>
<GeoMessage/>
    </main>
  );
}
