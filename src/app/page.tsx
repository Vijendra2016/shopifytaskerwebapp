import ClientTell from "./components/Clienttel";
import TestimonialCardGrid from "./components/TestimonialCardGrid";
import WhyShopifyTasker from "./components/WhyShopifyTasker";
import GeoMessage from "./components/GeoMessage";
import WhySwitchSection from "./components/whysection";
import ShopifytaskerServices from "./components/ShopifytaskerServices";
import StepsSection from "./components/StepsSection";
import HeroSearchFirst from "./components/HeroSearchFirst";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center min-h-screen  gap-8">

  <main className="flex flex-col  w-full text-center sm:text-left">


      <HeroSearchFirst
        backgroundImageUrl="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6973b8965bf02fccbc736ecf_tobias-rademacher-NuBvAE6VfSM-unsplash.jpg"
        ctas={[
          { label: "Get free estimation", href: "#search-first", variant: "primary" },
          { label: "Explore Services", href: "#services", variant: "secondary" },
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

    <ShopifytaskerServices />
  
  <StepsSection />
 

  
<WhySwitchSection/>

   
    
 

< ClientTell />

< WhyShopifyTasker />
  
<TestimonialCardGrid />
<GeoMessage />

  </main>

      
      
    </div>
  );
}
