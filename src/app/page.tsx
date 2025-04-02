"use client";  // For Next.js App Router

import Image from "next/image";
import HiringProcess from "./components/Hiringprocess"; 
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-2 sm:p-2 gap-8">
  <main className="flex flex-col gap-8 w-full text-center sm:text-left">
  <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67eced430ff1ff13480c2186_testbannervidi.png"
        alt="Banner Image"
        layout="fill"
        priority
      />
      

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
        <h1 className="text-3xl md:text-5xl font-medium">Shopify talent,on demand.</h1>
        <p className="mt-2 text-lg md:text-xl">pay only after your task is completed to your satisfaction.
        Shopify Developer | Shopify Expert | Marketer |Designers</p>
        <button className="mt-4 px-6 py-3 bg-black border-2 border-white hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
  Create your task
</button>


       
      </div>
    </section>
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    Hello, World!
  </motion.div>

  
  <section>
  <div className="services flex flex-col items-center justify-center h-full text-center text-black px-6 py-12">
  <motion.h2 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 2, delay: 0.5 }}
      className="text-2xl md:text-3xl font-medium"
    >
      ShopifyTasker works with brands across the following core services:
    </motion.h2>
  <h2 className="text-2xl md:text-3xl font-medium">
    ShopifyTasker works with brands across the following core services:
  </h2>
  <p className="mt-4  md:text-xl max-w-3xl text-gray-600 text-gray-600 mt-2">
    At ShopifyTasker, we collaborate with brands to deliver outstanding results across our core service offerings. Our team of skilled developers and marketers work closely with you to ensure success in every possible way. We pride ourselves on providing exceptional outcomes tailored to your unique business needs.
  </p>
</div>


  </section>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center pl-20 pr-20">
    <div className="details">
  <h1 className="text-2xl md:text-6xl font-medium">Get up to 3.5x more data about them</h1>
  <p>At ShopifyTasker, we collaborate with brands to deliver outstanding results across our core service offerings. Our team of skilled developers and marketers work closely with you to ensure success in every possible way. We pride ourselves on providing exceptional outcomes tailored to your unique business needs.
</p>
</div>
<Image
  className="dark:invert w-full h-auto"
  src="https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708%2F67288b2fb22e7ee7c157fe73_home%205050%201-poster-00001.jpg"
  alt="Next.js logo"
  width={1080}
  height={58}
  priority
/>
        </div>
  <HiringProcess />
  <Image
  className="dark:invert w-full h-auto"
  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67eceaa92bab401ae3f7c353_pexels-googledeepmind-17486101.jpg"
  alt="Next.js logo"
  width={1080}
  height={58}
  priority
/>

   
    

<section className="py-18 pt-30 pb-30 bg-black text-center overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
      Trusted by brands
      </h2>
      <div className="relative w-full mt-8 overflow-hidden">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />

           {/* Duplicate the logos for seamless looping */}
           <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
      {/* Duplicate the logos for seamless looping */}
      <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />
          <img src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png" alt="Dollar Shave Club" className="h-12" />

        </div>
      </div>
    </section>


    
  </main>

      
      
    </div>
  );
}
