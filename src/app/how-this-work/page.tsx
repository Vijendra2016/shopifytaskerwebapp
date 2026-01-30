import { Metadata } from "next";

import TestimonialCard from "../components/TestimonialCard";

import GeoMessage from "../components/GeoMessage";

import HowItWorks from "../components/HowItWorks";

export const metadata: Metadata = {
  title: "About ShopifyTasker | Your Trusted Shopify Development Partner",
  description:
    "Learn more about ShopifyTasker, a trusted name in Shopify development. We help businesses build, customize, and scale their online stores effectively.",
    themeColor: '#d9e1eb',  
  };

export default function About() {
  return (
    <main className=" w-full  mx-auto px-0 py-10 text-center pt-0">

      <HowItWorks/>


        
<TestimonialCard/>

 
 
 <GeoMessage/>
    </main>
  );
}
