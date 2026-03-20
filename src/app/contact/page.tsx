import { Metadata } from "next";
import GeoMessage from "../components/GeoMessage";
import ContactSection from "./ContactSection";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Shopify Developer | ShopifyTasker – Get Expert Help Today",
  description:
    "Get in touch with ShopifyTasker to discuss your Shopify store needs. Contact a freelance Shopify developer for custom development, fixes, speed optimization, or ongoing support.",
};


export default function Contactus() {
  return (
    <main className="w-full  mx-auto px-0 py-10 text-center pt-0">
        <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
        <ContactSection/>
        <GeoMessage/>
    </main>
  );
}
