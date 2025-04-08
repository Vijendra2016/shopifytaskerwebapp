"use client";  // For Next.js App Router
import ClientTell from "./components/Clienttel";
import MotionFadeIn from './components/motion/MotionFadeIn';


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen   gap-8">
  <main className="flex flex-col gap-8 w-full text-center sm:text-left">
    




  <section className="w-full  min-h-[90vh] bg-gradient-to-r from-[#000e7c] via-[#001172] to-[#0fe4c9] py-12 px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    {/* Left Side - Text */}
    <div className="text-white max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
        Easy and Affordable way to hire <br />
        <span className="italic">Shopify expert developers</span>
      </h2>
      <p className="mt-4 text-sm md:text-base">
        Affordable help for your Shopify & Shopify Plus store. Simple pricing, no upfront payment.
        <br />
        Payment is required only upon successful completion of your task.
      </p>
      <div className="text-sm mt-4 text-white/80 flex items-center space-x-2">
      <span>★★★★★</span>
      <span>4.9 out of 5 (1,500+ reviews)</span>
    </div>
    </div>

    {/* Right Side - Button */}
    <div className="flex-shrink-0">
      

      <button className="bg-black text-white font-semibold px-10 py-3 rounded-full shadow hover:bg-gray-900 transition">
      Create Task
</button>

    </div>
  </div>
</section>


    

  
  <section>
  <div className=" min-h-[70vh] services flex flex-col items-center justify-center text-center text-black px-6 py-16 space-y-6 max-w-5xl mx-auto">
  <h2 className="text-3xl md:text-6xl font-regular ">
    ShopifyTasker works with brands across the following core services:</h2>
  <p >
    At ShopifyTasker, we collaborate with brands to deliver outstanding results across our core service offerings. Our team of skilled developers and marketers work closely with you to ensure success in every possible way. We pride ourselves on providing exceptional outcomes tailored to your unique business needs.
  </p>

  <div className="text-sm mt-4 text-white/80 flex items-center space-x-2">
      <span>★★★★★</span>
      <span>4.9 out of 5 (1,500+ reviews)</span>
    </div>
  
  </div>
  <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 py-1 px-4 sm:px-8">
    <div className="services">
<h1 className="text-3xl md:text-3xl font-regular ">Shopify Development</h1> 
<p>All your store need</p>
</div>

<MotionFadeIn delay={0.2}>
<h1 className="text-3xl md:text-3xl font-regular ">Shopify Theme updates services</h1> 
</MotionFadeIn>
<h1 className="text-3xl md:text-3xl font-regular ">Shopify store redsign</h1> 
<h1 className="text-3xl md:text-3xl font-regular ">Store optimization</h1> 

<h1 className="text-3xl md:text-3xl font-regular ">Store speed improvment</h1> 
<h1 className="text-3xl md:text-3xl font-regular ">Shopify Development</h1> 
<h1 className="text-3xl md:text-3xl font-regular ">Shopify Development</h1> 
<h1 className="text-3xl md:text-3xl font-regular ">Shopify Development</h1> 


</div>

  </section>

 

  


  
  <ClientTell/>   
  
<h1 className="text-2xl md:text-3xl font-light">Shopify Development Tasks</h1>

<p className="mt-4">
      At ShopifyTasker, we collaborate with brands to deliver outstanding results across our core service offerings. 
      Our team of skilled developers and marketers work closely with you to ensure success in every possible way. 
      We pride ourselves on providing exceptional outcomes tailored to your unique business needs.
    </p>
    
  </main>

      
      
    </div>
  );
}
