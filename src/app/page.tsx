import ClientTell from "./components/Clienttel";
import TestimonialCardGrid from "./components/TestimonialCardGrid";
import WhyShopifyTasker from "./components/WhyShopifyTasker";
import GeoMessage from "./components/GeoMessage";
import WhySwitchSection from "./components/whysection";
import ShopifytaskerServices from "./components/ShopifytaskerServices";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center min-h-screen  gap-8">

  <main className="flex flex-col  w-full text-center sm:text-left">
    <section className="bg-[#CADCFC]">
    <div className="services flex flex-col items-center justify-center text-center text-black px-6 py-16 space-y-6 max-w-5xl mx-auto">
<h2 className="text-3xl md:text-9xl Black font-medium ">Shopify talent,on demand.</h2>
<h3 className="text-lg md:text-5xl Black "> No upfront payment required </h3>
<h4 className="text-lg md:text-4xl Black "> <span className="bg-[#a5f1cb]">Pay only after</span> your task is completed to your satisfaction. </h4>
<h4 className="text-lg md:text-3xl Black "> 10 Years experience in shopify ecosystem </h4>


</div>

    </section>
    <ShopifytaskerServices />
  
  
 

  
  
<WhySwitchSection/>
 
    < WhyShopifyTasker />

< ClientTell />
<section>
<div className="services flex flex-col items-center justify-center text-center text-black px-6 py-16 space-y-6 max-w-5xl mx-auto">
  <h3 className="text-3xl md:text-6xl font-regular ">
    How its work</h3>
  
    <p>It is simple — just submit your task, and within 5 hours, you will hear back from us with a detailed quote. If we need any additional information, we will arrange a quick discovery call to understand your requirements better.</p>

  </div>
</section>

<TestimonialCardGrid />
<GeoMessage />

  </main>

      
      
    </div>
  );
}
