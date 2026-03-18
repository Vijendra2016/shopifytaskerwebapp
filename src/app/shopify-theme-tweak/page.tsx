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
        serviceName="Shopify Theme Tweaks & Custom Fixes"
        serviceDescription="ShopifyTasker provides fast, affordable Shopify theme tweaks including layout edits, bug fixes, custom feature additions, and styling changes. Expert Shopify developers with quick turnaround. Pay after delivery."
        pageUrl="https://www.shopifytasker.com/shopify-theme-tweak"
        breadcrumbs={[{ name: "Shopify Theme Tweak", url: "https://www.shopifytasker.com/shopify-theme-tweak" }]}
        faqs={[
          { question: "What types of Shopify theme tweaks can ShopifyTasker handle?", answer: "ShopifyTasker handles all types of Shopify theme tweaks including layout changes, font and colour updates, section reordering, bug fixes, mobile display issues, custom feature additions, navigation edits, and banner or image updates." },
          { question: "How fast can ShopifyTasker complete a theme tweak?", answer: "Simple Shopify theme tweaks are typically completed within 24 to 48 hours. More complex changes may take 2 to 4 business days. A timeline and fixed price are confirmed before work begins." },
          { question: "Do I need to pay upfront for Shopify theme tweaks?", answer: "No. ShopifyTasker does not charge upfront for theme tweaks. You pay only after the changes are made and you are satisfied. This applies to all theme tweak and small task services." },
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
