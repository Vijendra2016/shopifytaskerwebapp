import { Metadata } from "next";
import Image from "next/image";
import CTAQuote from "../components/Cta-Quote";

export const metadata: Metadata = {
  title: "Shopify Website Development Company in United States | Top-Rated Shopify Developers",
  description:
"Hire a top-rated Shopify website development company in the United States. Our expert team of Shopify designers and developers delivers high-quality, custom solutions for your online store.",
};


export default function smallTask() {
  return (
    <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-0">

       <section className="relative flex items-center justify-center h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Background image (optimized by Next.js) */}
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6847bffadae7ca228106419b_shopify-web-developer.png" // put the file in /public/images
          alt="shopify website development company"
          fill             // makes the image cover the parent <section>
          sizes="100vw"     // tell Next how wide it can be
          style={{ objectFit: "cover" }}
          priority         // loads this image first
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-normal text-white">
            Your Trusted Shopify Website Development <br></br>
            Company & Agency Partner
          </h1>
            
          <p className="mt-4 text-lg md:text-2xl text-white">
             Test Hire top rated shopify website development company start from $20/hr <br></br>We are top rated and experience team of the shopfiy developer and expert.          </p>
        
        <CTAQuote/>
        </div>
               
      
      </section>
       
         
         <section className="flex flex-col items-center gap-6 px-4 md:px-12 lg:px-20 py-20 text-black">
  <div className="w-full max-w-4xl text-center">
    <h2 className="text-3xl md:text-5xl font-normal mb-4">
      What types of small Shopify tasks can ShopifyTasker help with
    </h2>
    <p className="text-lg">
   Our shopify developer & experts can take care of any shopify related tasks from quick bug fixes, speed enhancements, home page redesign to shopify theme tweak , shopify theme customization as per your brand , shopify theme new version update 

    </p>
  </div>

  
</section>

       
    



    </main>
  );
}

