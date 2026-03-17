

import { Metadata } from "next";
import MotionFadeIn from '../components/motion/MotionFadeIn';
import ShopifytaskerServices from "../components/ShopifytaskerServices";
import GeoMessage from "../components/GeoMessage";

export const metadata: Metadata = {
  title: "Shopify Expert Services | Design, Development & Support",
  description:
    "Explore the full range of Shopify expert services at ShopifyTasker — from store design and custom development to SEO, speed optimization, and ongoing support.",
};


export default function howitswork() {
  return (
    <main className=" bg-black flex flex-col  pt-20 w-full text-center ">
        <MotionFadeIn delay={0.2}>
        <h1 className="text-3xl md:text-6xl  pb-20 font-bold uppercase text-white tracking-tight">Shopify Expert Services</h1>
      </MotionFadeIn>
       <ShopifytaskerServices/>
  

<GeoMessage />
    </main>
  );
}
