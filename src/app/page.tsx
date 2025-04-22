import Image from "next/image";
import ClientTell from "./components/Clienttel";
import PromoGrid from "./components/PromoGrid";
import TestimonialCardGrid from "./components/TestimonialCardGrid";
import WhyShopifyTasker from "./components/WhyShopifyTasker";
import FashionSlider from "./components/FashionSlider";


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen  gap-8">
  <main className="flex flex-col gap-8 w-full text-center sm:text-left">
    <section className="bg-[#CADCFC]">
    <div className="services flex flex-col items-center justify-center text-center text-black px-6 py-16 space-y-6 max-w-5xl mx-auto">
<h2 className="text-3xl md:text-9xl Black font-medium ">Shopify talent,on demand.</h2>
<h3 className="text-lg md:text-5xl Black "> No upfront payment required </h3>
<h4 className="text-lg md:text-4xl Black "> <span className="bg-[#a5f1cb]">Pay only after</span> your task is completed to your satisfaction. </h4>
<h4 className="text-lg md:text-3xl Black "> 10 Years experience in shopify ecosystem </h4>


</div>
    </section>
  
  <section>
  <div className="services flex flex-col items-center justify-center text-center text-black px-6 py-16 space-y-6 max-w-5xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-regular ">
  ShopifyTasker can assist you with the following areas of your Shopify and Shopify Plus store:</h2>
  <p className="text-gray-600 text-lg">
  The ShopifyTasker team handles all kinds of tasks on Shopify and Shopify Plus stores. Hire our Shopify developers and experts today
        </p>
  </div>

  </section>
 
  <FashionSlider/>  

  <div className="py-16 ">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
    {/* Service 1 */}
    <div className="flex flex-col bg-[#CADCFC] items-center text-center p-6 ">
      <h3 className="text-lg font-regular md:text-3xl ">Custom Development</h3>
      <Image
      className="w-full h-half object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fbeb9998c2ae38fe52ad18_pexels-pixabay-159299.jpg"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
      <p className="text-sm text-gray-600 mt-2">We provide fully customized Shopify solutions tailored to your business goals. Whether you need a bespoke theme, unique store functionality, or seamless third-party integrations, our team ensures your store operates smoothly and efficiently. </p>
    </div>

    {/* Service 2 */}
    <div className="flex bg-[#CADCFC] flex-col items-center text-center p-6  rounded-lg ">
    <Image
      className="w-full h-half object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fba5d00276e79ad605e790_Ontology_Core_1.png"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
      <h3 className="text-lg font-semibold">Speed Optimization</h3>
      <p className="text-sm text-gray-600 mt-2">Enhancing Shopify store performance and load times.</p>
    </div>

    {/* Service 3 */}
    <div className="flex flex-col  bg-[#CADCFC] items-center text-center p-6  rounded-lg ">
      <h3 className="text-lg font-semibold">Shopify Theme custimization Updates</h3>
      <p className="text-sm text-gray-600 mt-2">Stay up-to-date with the latest Shopify theme customizations. We offer expert updates to enhance design, functionality, and performance for your online store.</p>
    </div>
  </div>
</div>

  
  
 
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


  </main>

      
      
    </div>
  );
}
