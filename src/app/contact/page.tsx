import { Metadata } from "next";
import GeoMessage from "../components/GeoMessage";
import ContactSection from "./ContactSection";

export const metadata: Metadata = {
  title: "Freelancer Shopify developer | Your Trusted Shopify Development Partner",
  description:
    "Learn more about ShopifyTasker, a trusted name in Shopify development. We help businesses build, customize, and scale their online stores effectively.",
    themeColor: '#d9e1eb',  
  };

export default function Contactus() {
  return (
    <main className="container mx-auto px-0 py-10 text-center pt-0">
        <ContactSection/>
        <GeoMessage/>
    </main>
  );
}
