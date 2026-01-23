'use client';

import Link from 'next/link';

export default function HeroImageSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/695b5c7a517bcce3c046a407_Homebannerimage.png"
        alt="eCommerce growth"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-2 flex h-full items-end">
        <div className="px-10 pb-10 max-w-4xl">
            <div className="services flex flex-col items-center justify-center text-center text-black ">
<h1 className="text-3xl md:text-3xl text-white font-medium tracking-tight ">Hire Shopify Expert & Developer,on demand.</h1>
<h3 className="text-lg md:text-2xl text-white  font-medium tracking-tight"> No upfront payment required </h3>
<h4 className="text-lg md:text-2xl text-white tracking-tight"> <span className="bg-[#DFF976] text-black">Pay only after</span> your task is completed to your satisfaction. </h4>
<h4 className="text-lg md:text-2xl text-white tracking-tight "> 10 Years experience in shopify ecosystem </h4>


</div>
          

          <Link
            href="/contact"
            className="inline-block mt-10 rounded-full border border-white 
                       px-8 py-3 text-white text-sm 
                       hover:bg-white hover:text-black 
                       transition-colors duration-300"
          >
            Contact
          </Link>

          <Link
            href="https://calendly.com/commercetasker/discovery-call"
            className="inline-block mt-10 rounded-full border border-white 
                       px-8 py-3 text-white text-sm 
                       hover:bg-white hover:text-black 
                       transition-colors duration-300"
          >
            Book A Call 
          </Link>
        </div>
      </div>
    </section>
  );
}
