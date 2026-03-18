import { Metadata } from "next";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Top-Rated Shopify Website Design Company | ShopifyTasker",
  description:
    "ShopifyTasker is a top-rated Shopify website design company. Our expert designers and developers deliver beautiful, conversion-focused Shopify stores. Pay only after work is done.",
};

export default function pricing() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
      <ServicePageSchema
        serviceName="Shopify Website Design Company"
        serviceDescription="ShopifyTasker is a top-rated Shopify website design company delivering custom, conversion-focused Shopify stores. Expert designers and developers with 10+ years of experience. Pay after delivery."
        pageUrl="https://www.shopifytasker.com/shopify-website-design-company"
        breadcrumbs={[{ name: "Shopify Website Design Company", url: "https://www.shopifytasker.com/shopify-website-design-company" }]}
        faqs={[
          { question: "What makes ShopifyTasker a top-rated Shopify website design company?", answer: "ShopifyTasker has over 10 years of Shopify experience, has designed and developed more than 500 Shopify stores, offers transparent fixed pricing, and operates on a pay-after-delivery model meaning clients only pay when satisfied with the result." },
          { question: "Does ShopifyTasker design Shopify stores from scratch?", answer: "Yes. ShopifyTasker designs custom Shopify stores from scratch. This includes wireframing, UI design, Liquid theme development, mobile responsiveness, page speed optimization, and full launch support." },
          { question: "How do I get started with ShopifyTasker as a design company?", answer: "Submit your project requirements through the ShopifyTasker website. The team provides a fixed-price quote within 24 hours. Once approved, a dedicated designer is assigned and work begins — no upfront payment needed." },
        ]}
      />
        <h1 className="text-3xl md:text-6xl font-regular"> Top Rated Shopify Website Design Company</h1>
      
          <p className="text-gray-600 text-lg">
          ShopifyTasker is highly praised for its reliable and efficient services, offering expert help with store setup,
           optimization, and marketing. Users appreciate its quick turnaround and excellent customer support

        </p>
<TestimonialCardGrid/>

    </main>
  );
}
