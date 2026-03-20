import { Metadata } from "next";

import TestimonialCard from "../components/TestimonialCard";

import GeoMessage from "../components/GeoMessage";

import HowItWorks from "../components/HowItWorks";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About ShopifyTasker | Your Trusted Shopify Development Partner",
  description:
    "Learn more about ShopifyTasker, a trusted name in Shopify development. We help businesses build, customize, and scale their online stores effectively.",
};

export default function About() {
  return (
    <main className=" w-full  mx-auto px-0 py-10 text-center pt-0">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "How It Works", href: "/how-this-work" }]} />
      <HowItWorks/>


        
<TestimonialCard/>

 
 
 <GeoMessage/>
    </main>
  );
}
