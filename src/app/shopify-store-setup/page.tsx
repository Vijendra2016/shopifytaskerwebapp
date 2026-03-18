import { Metadata } from "next";
import HeaderSection from "./HeaderSection";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Shopify Store Setup Services | Launch Your Store the Right Way",
  description:
    "Get your Shopify store set up by experts. From theme installation and product uploads to payment configuration and launch — we handle everything so you can start selling fast.",
};

export default function MainPage() {
  return (
    <>
      <ServicePageSchema
        serviceName="Shopify Store Setup Services"
        serviceDescription="ShopifyTasker sets up new Shopify stores end-to-end including theme installation, product uploads, payment configuration, shipping setup, and launch readiness checks. Pay only after the store is ready."
        pageUrl="https://www.shopifytasker.com/shopify-store-setup"
        breadcrumbs={[{ name: "Shopify Store Setup", url: "https://www.shopifytasker.com/shopify-store-setup" }]}
        faqs={[
          { question: "What does Shopify store setup include?", answer: "ShopifyTasker Shopify store setup covers theme installation and customization, product uploading, collection setup, payment gateway configuration, shipping zones and rates, tax settings, domain connection, navigation setup, and a full pre-launch QA checklist." },
          { question: "How long does it take to set up a Shopify store?", answer: "A standard Shopify store setup takes 3 to 7 business days depending on the number of products and the level of customization required. A timeline is included in the fixed-price quote before work begins." },
          { question: "Can ShopifyTasker set up a Shopify store for a new business?", answer: "Yes. ShopifyTasker sets up Shopify stores for new businesses from scratch. This includes selecting an appropriate theme, configuring all store settings, setting up products and collections, connecting payment and shipping providers, and preparing the store for launch." },
        ]}
      />
      <section className="bg-[#eeeeee]">
        <HeaderSection />
        <div className="w-full mx-auto px-8">
        </div>
      </section>
    </>
  );
}
