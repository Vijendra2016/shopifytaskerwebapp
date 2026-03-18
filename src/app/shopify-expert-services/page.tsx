

import { Metadata } from "next";
import MotionFadeIn from '../components/motion/MotionFadeIn';
import ShopifytaskerServices from "../components/ShopifytaskerServices";
import GeoMessage from "../components/GeoMessage";
import ServicePageSchema from "../components/ServicePageSchema";

export const metadata: Metadata = {
  title: "Shopify Expert Services | Design, Development & Support",
  description:
    "Explore the full range of Shopify expert services at ShopifyTasker — from store design and custom development to SEO, speed optimization, and ongoing support.",
};


export default function howitswork() {
  return (
    <main className=" bg-black flex flex-col  pt-20 w-full text-center ">
      <ServicePageSchema
        serviceName="Shopify Expert Services"
        serviceDescription="ShopifyTasker offers a full range of Shopify expert services including store design, theme customization, custom development, SEO, platform migration, app integration, and ongoing support. Pay after delivery."
        pageUrl="https://www.shopifytasker.com/shopify-expert-services"
        breadcrumbs={[{ name: "Shopify Expert Services", url: "https://www.shopifytasker.com/shopify-expert-services" }]}
        faqs={[
          { question: "What Shopify expert services does ShopifyTasker provide?", answer: "ShopifyTasker provides a complete range of Shopify expert services including custom store design, theme customization, Shopify Plus development, store migrations, technical SEO, app integration, virtual assistant services, and ongoing monthly support retainers." },
          { question: "How do I hire a Shopify expert from ShopifyTasker?", answer: "Submit your project through the ShopifyTasker website by describing what you need. The team reviews your request and sends a fixed-price quote within 24 hours. Work begins once you approve the quote — no upfront payment required." },
          { question: "Are ShopifyTasker experts certified?", answer: "Yes. ShopifyTasker works with vetted Shopify specialists who have experience across a wide range of Shopify projects. The team has collectively managed over 500 Shopify stores across multiple industries and markets." },
        ]}
      />
        <MotionFadeIn delay={0.2}>
        <h1 className="text-3xl md:text-6xl  pb-20 font-bold uppercase text-white tracking-tight">Shopify Expert Services</h1>
      </MotionFadeIn>
       <ShopifytaskerServices/>
  

<GeoMessage />
    </main>
  );
}
