import { Metadata } from "next";
import GeoMessage from "../components/GeoMessage";
import ContactSection from "./ContactSection";

export const metadata: Metadata = {
  title: "Contact Shopify Developer | ShopifyTasker – Get Expert Help Today",
  description:
    "Get in touch with ShopifyTasker to discuss your Shopify store needs. Contact a freelance Shopify developer for custom development, fixes, speed optimization, or ongoing support.",
  themeColor: "#d9e1eb",
};


export default function Contactus() {
  return (
    <main className="w-full  mx-auto px-0 py-10 text-center pt-0">
        <ContactSection/>
        <GeoMessage/>
    </main>
  );
}
