import { Metadata } from "next";
import Image from "next/image";
import GeoMessage from "../components/GeoMessage";

export const metadata: Metadata = {
  title: "Shopify Expert from india | Top-Rated Freelancer Shopify Developer",
  description:
    "Hire top rated expert shopify developer from most trusted shopify expert developer team",
};

export default function smallTask() {
  return (
    <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-0">

       <section className="relative flex items-center justify-center h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background image (optimized by Next.js) */}
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683fd721e974f858fdfc6121_shopify-small-task-by-shopify-expert.png" // put the file in /public/images
          alt="Shopify expert from india"
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
           We build modern eCommerce stores <br></br> using the latest technologies
          </h1>
          <p className="mt-4 text-lg md:text-1xl text-white">
           We create modern eCommerce stores that not only look great but perform beautifully. 
           <br></br>By using the latest technologies,we make sure your store is fast, easy to manage, and ready to grow with your business.
          </p>
        </div>
      </section>
        
         <section className="flex flex-col items-center gap-6 px-4 md:px-12 lg:px-10 py-10 text-black">
  <div className="w-full max-w-4xl text-center">
    <h2 className="text-3xl md:text-5xl font-normal mb-4">
      We work in modern tech stack

    </h2>
    <p className="text-lg">
We use a modern tech stack to build eCommerce stores that are fast, flexible, and built to grow. Whether it Shopify, Shopify Plus, or headless setups with Next.js and Hydrogen—we use the right tools to match your needs. We also work with platforms like Klaviyo and Rebuy to help you personalise the shopping experience, automate smarter, and scale your store with confidence.
    </p>

   
     
  </div>

  
</section>

<section className="flex flex-col items-center gap-3 px-4 md:px-12 lg:px-20 py-10 text-black">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
            <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6854f3ab3b2bc9c92a773a97_Shopify%20expert%20team.png"
  alt="Sponsorships and Integrations"
  width={500}
  height={500}
  
/>

          </div>

          
          <h3 className="text-lg  text-black font-semibold leading-snug">
            Shopify Store Developmet
          </h3>
          <p className="text-black text-sm">
         We build Shopify stores that look great, work fast, and help your business grow—customised exactly the way you need.

          </p>
        
        </div>

        {/* Card 2 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
           <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6854f4aa336475111c2f40ed_Shopify%20plus%20%20expert%20%20developerteam.png"
  alt="Sponsorships and Integrations"
  width={500}
  height={500}

/>

          </div>
          <h3 className="text-lg font-semibold leading-snug">
           Shopify Plus Development
          </h3>
          <p className="text-black text-sm">
            We build custom Shopify Plus stores designed to scale—fast, flexible, and tailored to fit your growing business needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
          <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6854f5ad2876b66d7e7d0938_Next%20js%20shopify%20development.png"
  alt="Sponsorships and Integrations"
  width={500}
  height={500}
  
/>

          </div>
          <h3 className="text-lg font-semibold leading-snug">
            Next.js (headless or custom builds)

          </h3>
          <p className="text-black text-sm">

Modern eCommerce, powered by Next.js and Shopify.
          </p>
        </div>


{/* Card 3 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
          <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6854f67d5e9cc865a78fe5c6_Klaviyo%20shopify%20development.png"
  alt=" Klaviyo Integrations expert "
  width={500}
  height={500}
  
/>

          </div>
          <h3 className="text-lg font-semibold leading-snug">
             Klaviyo
          </h3>
          <p className="text-black text-sm">

Smarter marketing, powered by Klaviyo. Turn data into personalized emails, automation, and real results.


          </p>
        </div>


        {/* Card 3 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
          <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6854f7721a7ab92f393b95e4_Rebuy%20shopify%20development.png"
  alt="Rebuy Integrations"
  width={500}
  height={500}
  
/>

          </div>
          <h3 className="text-lg font-semibold leading-snug">
            Rebuy

          </h3>
          <p className="text-black text-sm">

Boost sales with Rebuy. Personalize product recommendations, upsells, and bundles that convert—right where your customers shop.
          </p>
        </div>


{/* Card 3 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
          <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6854fa61c1f6a53457682591_Shopify%20Hydrogen%20Development.png"
  alt="Sponsorships and Integrations"
  width={500}
  height={500}
  
/>

          </div>
          <h3 className="text-lg font-semibold leading-snug">
            Shopify Hydrogen Development
          </h3>
          <p className="text-gray-600 text-sm">

Build blazing-fast headless storefronts with Hydrogen and modern tech.
          </p>
        </div>


      </div>

</section>
<GeoMessage/>
       
    



    </main>
  );
}

