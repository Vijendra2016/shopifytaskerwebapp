import { Metadata } from "next";
import ClientTell from "./components/Clienttel";
import TestimonialCardGrid from "./components/TestimonialCardGrid";
import TrustedBySection from "./components/TrustedBySection";
import WhyShopifyTasker from "./components/WhyShopifyTasker";
import GeoMessage from "./components/GeoMessage";
import WhySwitchSection from "./components/whysection";
import StepsSection from "./components/StepsSection";
import HeroSearchFirst from "./components/HeroSearchFirst";
import ServicesPinned from "./components/ServicesPinned";

export const metadata: Metadata = {
  title: "ShopifyTasker: Hire Top-Rated Shopify Experts | On-Demand Help",
  description:
    "ShopifyTasker connects you with trusted Shopify experts for theme customization, store design, speed optimization, and ongoing support. Pay after work is done. Get started today.",
};

export default function Home() {
  return (
    
    <div className="flex flex-col items-center min-h-screen  gap-8">

  <main className="flex flex-col  w-full text-center sm:text-left">


      <HeroSearchFirst
        videoWebmUrl="https://cdn.shopify.com/videos/c/o/v/8ce3a3c8f8ee431caf66dc77c83385b4.mp4"
        videoUrl="https://cdn.shopify.com/videos/c/o/v/8ce3a3c8f8ee431caf66dc77c83385b4.mp4"
        ctas={[
          { label: "Start My Task", variant: "primary" },
          { label: "Hire a Shopify Expert", variant: "secondary" },
        ]}
      />
     
    

   
   {/* 
    <section className="px-6 md:px-30 py-16 bg-black text-white">
    <div className="services flex flex-col items-center justify-center text-center text-black ">
<h1 className="text-3xl md:text-9xl text-white font-medium tracking-tight ">Hire Shopify Expert & Developer,on demand.</h1>
<h3 className="text-lg md:text-5xl text-white  font-medium tracking-tight"> No upfront payment required </h3>
<h4 className="text-lg md:text-4xl text-white tracking-tight"> <span className="bg-[#DFF976] text-black">Pay only after</span> your task is completed to your satisfaction. </h4>
<h4 className="text-lg md:text-3xl text-white tracking-tight "> 10 Years experience in shopify ecosystem </h4>


</div>

    </section>
    */}


    <ServicesPinned />

  
  <StepsSection />
 

  
<WhySwitchSection/>

   
    
 

< ClientTell />

< WhyShopifyTasker />
  <TrustedBySection />
<TestimonialCardGrid />
<GeoMessage />

  </main>

      
      
    </div>
  );
}
