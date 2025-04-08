

import { Metadata } from "next";
import MotionFadeIn from '../components/motion/MotionFadeIn';
import FooterQuote from "../components/footerquote";


export const metadata: Metadata = {
  title: "shopify expert services",
  description:
    "shopify expert services from the india based developer",
};


export default function howitswork() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        <MotionFadeIn delay={0.2}>
        <h1 className="text-3xl md:text-6xl font-regular">Shopify Expert Services</h1>
      </MotionFadeIn>
       
    <p>Commercial Shopify themes </p>
    <FooterQuote />
    </main>
  );
}
