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

       <section className="relative flex items-center justify-center h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Background image (optimized by Next.js) */}
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6858ea68535bcfb516945112_rings-1196145_1920.jpg" // put the file in /public/images
          alt="Shopify Virtual Assistant Services"
          fill             // makes the image cover the parent <section>
          sizes="100vw"     // tell Next how wide it can be
          style={{ objectFit: "cover" }}
          priority         // loads this image first
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-normal text-white">
           Hire Shopify Virtual Assistant <br></br>For Smooth Online Shopify <span className="bg-teal-500 text-black"> Store Administration</span>
          </h1>
          <p className="mt-4 text-lg md:text-1xl text-white">
          Hire our shopify virtual assistants they handle the operation load while you focus on scaling your business and boost profile,<br></br> our shopify virtual assistants will be handle all tasks from dev to markting.
          </p>
        </div>
      </section>
        
         <section className="flex flex-col items-center gap-6 px-4 md:px-12 lg:px-10 py-10 text-black">
  <div className="w-full max-w-4xl text-center">
    <h2 className="text-3xl md:text-5xl font-normal mb-4">
    Why Hire Our Shopify Virtual Assistants?


    </h2>
    <p className="text-lg">
We have 10 years experiecne on shopify ecosystem , we understand the key challenges shopify store owners face, our shopify expert va can help you to overcome them with easy and efficiency.  
Our Shopify VA can help you with shopify store managment on full of efficiency and details.
  </p>

     
  </div>

  
</section>

<section className="flex flex-col items-center gap-3 px-4 md:px-12 lg:px-20 py-10 text-black">
    
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
            <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6859254eebd1225acd1b36f3_order%20Managment.png"
  alt="Order managment"
  width={500}
  height={500}
  
/>

          </div>

          
          <h3 className="text-lg  text-black font-semibold leading-snug">
            Order Managment
          </h3>
          <p className="text-black text-sm">
         We build Shopify stores that look great, work fast, and help your business grow—customised exactly the way you need.

          </p>
        
        </div>

        {/* Card 2 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
           <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6859264b89a71ed355bae0a7_Store%20Managment.png"
  alt="Store Managment VA"
  width={500}
  height={500}

/>

          </div>
          <h3 className="text-lg font-semibold leading-snug">
           Shopify Store managment
          </h3>
          <p className="text-black text-sm">
      Our Expert shopify Virtual assistants provide shopify store managment services thats include theme updates ,small coding , store proformentce.

          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col space-y-4">
        <div className="w-full  flex items-center justify-center">
          <Image
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/685927decaa7051a78a95b78_seo%20shopify%20va%20services.png"
  alt="Sponsorships and Integrations"
  width={500}
  height={500}
  
/>

          </div>
          <h3 className="text-lg font-semibold leading-snug">
            Shopify SEO 

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

