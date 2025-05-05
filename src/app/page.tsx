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
    <section className="px-6 md:px-30 py-16 bg-black text-white">
    <div className="services flex flex-col items-center justify-center text-center text-black ">
<h2 className="text-3xl md:text-9xl text-white font-medium tracking-tight ">Shopify Expert,on demand.</h2>
<h3 className="text-lg md:text-5xl text-white  font-medium tracking-tight"> No upfront payment required </h3>
<h4 className="text-lg md:text-4xl text-white tracking-tight"> <span className="bg-teal-500 text-black">Pay only after</span> your task is completed to your satisfaction. </h4>
<h4 className="text-lg md:text-3xl text-white tracking-tight "> 10 Years experience in shopify ecosystem </h4>


</div>

    </section>
    <ShopifytaskerServices />
  
  
 

  
  
<WhySwitchSection/>
 
    < WhyShopifyTasker />

< ClientTell />
<section className="bg-[#fefdf9] min-h-100">
<div className="services  flex flex-col items-center justify-center text-center text-black px-6 py-16 space-y-6 max-w-5xl mx-auto">
  <h3 className="text-3xl text-black md:text-6xl font-bold tracking-tight ">
    How its work</h3>
  
    <p className="text-3xl text-black tracking-tight">It is simple — just submit your task, and within 5 hours, you will hear back from us with a detailed quote. If we need any additional information, we will arrange a quick discovery call to understand your requirements better.</p>

  </div>
</section>

<TestimonialCardGrid />
<GeoMessage />

  </main>

      
      
    </div>
  );
}
