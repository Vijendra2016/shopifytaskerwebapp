"use client";  // For Next.js App Router
import ClientTell from "./components/Clienttel";
import MotionFadeIn from './components/motion/MotionFadeIn';


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen   gap-8">
  <main className="flex flex-col gap-8 w-full text-center sm:text-left">
  <section className="relative w-full h-[100vh] bg-gradient-to-br from-[#0a0c55] via-[#141b8a] to-[#0b76a3]">
  {/* Overlay Content */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <MotionFadeIn delay={0.7}>
            
          
    <h1 className="text-3xl md:text-6xl ">
      Easy and Affordable way to hire <br /> Shopify expert developers
    </h1>
    </MotionFadeIn>
    <p className="mt-4 text-lg md:text-xl max-w-4xl">
      Affordable help for your Shopify & Shopify Plus store. Simple pricing, no upfront payment.<br />
      Payment is required only upon successful completion of your task to your satisfaction <br />
      Shopify Developer | Shopify Expert | Marketer | Designers
    </p>
    <button className="mt-6 px-6 py-3 bg-black border-2 border-white hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
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

  <ul>
    <li>Shopify Development</li>
    <li>Shopify Development</li>

    <li>Shopify Development</li>
    <li>Shopify Development</li>


  </ul>
  </div>

  </section>

 

  


  <MotionFadeIn delay={0.7}>
  <ClientTell/>   
  </MotionFadeIn>

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
