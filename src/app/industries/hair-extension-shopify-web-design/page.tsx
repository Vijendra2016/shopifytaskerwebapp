import { Metadata } from "next";
import Image from "next/image";


import GeoMessage from "@/app/components/GeoMessage";
export const metadata: Metadata = {
  title: "Hair Extension Shopify Web Design | Expert Shopify Developer ",
  description:
    "    Looking for Hair Extension Shopify web design? Hire a top-rated freelance Shopify developer to build beautiful, conversion-focused Shopify stores.",
};

export default function pricing() {
  return (
    <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-0">

      <section className="relative flex items-center justify-center h-[60vh] md:h-[100vh] overflow-hidden">
        {/* Background image (optimized by Next.js) */}
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68286994dea96f12ea72684a_woman-2593366_1920.jpg" // put the file in /public/images
          alt="Hair extensions in different shades"
          fill             // makes the image cover the parent <section>
          sizes="100vw"     // tell Next how wide it can be
          style={{ objectFit: "cover" }}
          priority         // loads this image first
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-neutral-900/60" />

        {/* Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-normal text-white">
            We build beautiful <br>
            </br>hair extensions shopify websites
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            Professional hair extension Shopify web design—crafted by experts since 2015.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-2 pr-2 pl-2 lg:pr-20 lg:pl-20  md:pr-20 md:pl-20 pt-20 pb-20 text-black">
        <h2 className="text-3xl md:text-5xl font-regular"> Dedicated & experienced account manager and Shopify website designer for every Hair Extensions project.

</h2>
      
          <p className="text-black text-lg">
Enjoy a truly handson build experience: every Hair Extensions store we craft comes with a dedicated project manager who keeps timelines tight and communication clear, plus an expert Shopify designer who tailors the look, feel, and flow of your site to match your brand and boost conversions. 
        </p>
       </section>
           < GeoMessage/>


    </main>
  );
}
