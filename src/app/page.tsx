"use client";  // For Next.js App Router
import Image from "next/image";
import HiringProcess from "./components/Hiringprocess"; 
import ClientTell from "./components/Clienttel";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-2 sm:p-2 gap-8">
  <main className="flex flex-col gap-8 w-full text-center sm:text-left">
  <section className="relative w-full h-[100vh]">
      {/* Background Image */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67eced430ff1ff13480c2186_testbannervidi.png"
        alt="Banner Image"
        layout="fill"
        priority
      />

      


      <div className="absolute inset-0 bg-black/50"></div>

  {/* Overlay Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
    <h1 className="text-3xl md:text-6xl font-extralight	">
      Easy and Affordable way to hire <br /> Shopify expert developers
    </h1>
    <p className="mt-2 text-lg md:text-lg">
    Affordable help for your Shopify & Shopify Plus store. Simple pricing, no upfront payment.<br />
    Payment is required only upon successful completion of your task to your satisfaction <br />

      Shopify Developer | Shopify Expert | Marketer | Designers
    </p>
    <button className="mt-4 px-6 py-3 bg-black border-2 border-white hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
      Create task
    </button>
  </div>
       
      
    </section>
    

  
  <section>
  <div className="services flex flex-col items-center justify-center text-center text-black px-6 py-16 space-y-6 max-w-5xl mx-auto">
  <h2 className="text-3xl md:text-6xl font-regular ">
    ShopifyTasker works with brands across the following core services:</h2>
  <p >
    At ShopifyTasker, we collaborate with brands to deliver outstanding results across our core service offerings. Our team of skilled developers and marketers work closely with you to ensure success in every possible way. We pride ourselves on providing exceptional outcomes tailored to your unique business needs.
  </p>
  </div>

  </section>

  <div className="py-16 ">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
    {/* Service 1 */}
    <div className="flex flex-col items-center text-center p-6 border border-black  ">
      <h3 className="text-lg font-regular md:text-3xl ">Custom Development</h3>
      <p className="text-sm text-gray-600 mt-2">We provide fully customized Shopify solutions tailored to your business goals. Whether you need a bespoke theme, unique store functionality, or seamless third-party integrations, our team ensures your store operates smoothly and efficiently. </p>
    </div>

    {/* Service 2 */}
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">Speed Optimization</h3>
      <p className="text-sm text-gray-600 mt-2">Enhancing Shopify store performance and load times.</p>
    </div>

    {/* Service 3 */}
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">Shopify Theme custimization Updates</h3>
      <p className="text-sm text-gray-600 mt-2">Stay up-to-date with the latest Shopify theme customizations. We offer expert updates to enhance design, functionality, and performance for your online store.</p>
    </div>
  </div>
</div>

  

<div className="grid grid-cols-1 lg:grid-cols-[75%_25%] items-center gap-8 px-10">
  {/* Text Content - 20% */}
  <div className="w-full h-half">
    <Image
      className="w-full h-half object-cover"
      src="https://cdn.prod.website-files.com/64a8329f0200796d9bea1ec9/66f9ad07f72f96ab850feb41_barrel-web-online-flaship.jpg"
      alt="Shopify Development"
      width={250}
      height={250}
      priority
    />
  </div>
  <div className="text-center lg:text-left">
    <h1 className="text-2xl md:text-3xl font-light">Shopify Development Tasks</h1>
    <p className="mt-4">
      At ShopifyTasker, we collaborate with brands to deliver outstanding results across our core service offerings. 
      Our team of skilled developers and marketers work closely with you to ensure success in every possible way. 
      We pride ourselves on providing exceptional outcomes tailored to your unique business needs.
    </p>
    <button className="mt-4 px-6 py-3 bg-black border-2 border-white hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
      Create task
    </button>
  </div>

  
</div>
  <HiringProcess />
  <ClientTell/>   




    
  </main>

      
      
    </div>
  );
}
