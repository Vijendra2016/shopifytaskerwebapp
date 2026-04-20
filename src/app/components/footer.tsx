
"use client";

import Link from "next/link";
import Image from "next/image";
import GsapMarquee from "./GsapMarquee";
import StartProjectModal from "./StartProjectModal";
import { useState } from "react";

export default function Footer() {
       
  const [showModal, setShowModal] = useState(false);

  const openStartProject = () => setShowModal(true);

  return (
    
    <footer className="bg-black  text-sm text-white py-12 px-6">
      
        
      <div className="flex justify-center mb-20">
      <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69e5abe0347acbcd2f8c40b4_Lightslogo.png" // Replace with your actual image path
            alt="ShopifyTasker Logo"
       
            width={1200} // Adjust width as needed
            height={250} // Adjust height as needed
            className="h-auto"
          />
      
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       
        <div className="flex flex-col space-y-2">
        
          <h6 className="text-sm md:text-sm text-base  uppercase font-extrabold">About</h6>
          <Link href="/" className="underline">who we are</Link>
          <Link href="/how-this-work">how it works</Link>
          <Link href="/our-tech-stack">our tech stack</Link>
          <Link href="https://www.trustpilot.com/review/shopifytasker.com" target="_blank">reviews</Link>
          <Link href="#">pricing</Link>
          <Link href="/contact">contact</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <h6 className=" text-sm md:text-sm text-base  uppercase font-extrabold">Our Services</h6>
          <Link href="/shopify-store-setup">store setup and development</Link>
           
           <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Platform migration
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Custom app development
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Retainer
          </button>
          
          <Link href="/shopify-small-task">shopify small tasks</Link>

          
        </div>

        {/* Column 3 - Duplicate of Column 2 (you may want to change heading/content) */}
        <div className="flex flex-col space-y-2">
          <h6 className="text-sm md:text-sm text-base  uppercase font-extrabold">Small Task</h6>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Shopify Theme tweak
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition">
           Shopify App Development
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Shopify Hydrogen
          </button>
          
          <Link href="/shopify-virtual-assistant-services">Shopify VA Services</Link>
          
        </div>
         {/* Column 3 - Duplicate of Column 2 (you may want to change heading/content) */}
         <div className="flex flex-col space-y-2">
          <h6 className=" text-sm md:text-sm text-base  uppercase font-extrabold">Headless Shopify Development</h6>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Shopify Hyrogen Store Setup
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Shopify Headless Store Managment
          </button>
          
           <Link href="/shopify-web-designer">Shopify Web Designer</Link>
            <Link href="/shopify-expert-near-me">Shopify Expert Near Me</Link>
          
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className=" text-sm md:text-sm text-base  uppercase font-extrabold">Shopify Developer Near Me</h6>
          <Link href="/shopify-developer-near-me/newyork">New York City</Link>
          <Link href="/shopify-developer-near-me/los-angeles-ca">Los Angeles</Link>
          
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className=" text-sm md:text-sm text-base  uppercase font-extrabold">Platform Migration</h6>
          <Link href="/shopify-migration">Shopify Migration Agency</Link>
          <Link href="/wordpress-to-shopify-migration">WordPress to Shopify Migration</Link>
          <Link href="/woocommerce-to-shopify-migration">WooCommerce to Shopify</Link>
          <Link href="/salesforce-to-shopify-plus-migration">Salesforce to Shopify Plus</Link>
          <Link href="/squarespace-to-shopify-migration">Squarespace to Shopify</Link>
          <Link href="/square-to-shopify-migration">Square to Shopify</Link>
          <Link href="/magento-to-shopify-migration">Magento to Shopify</Link>
          <Link href="/bigcommerce-to-shopify-migration">BigCommerce to Shopify</Link>
          <Link href="/wix-to-shopify-migration">Wix to Shopify</Link>
          <Link href="/custom-to-shopify-migration">Custom to Shopify</Link>
        </div>

        <div className="flex flex-col space-y-2">
          <h6 className=" text-sm md:text-sm text-base  uppercase font-extrabold">Theme Customization & Update Service</h6>
          <Link href="/shopify-themes/impulse-customization-update">Impulse theme Customization & Update</Link>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Shopify Headless Store Managment
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           start a project
          </button>
          
        </div>

        <div className="flex flex-col space-y-2">
        <Link href="/industries" className=" text-sm md:text-sm text-base  uppercase font-extrabold text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">Industries</Link>

          <Link href="/industries/hair-extension-shopify-web-design" className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">Hair Extensions</Link>
          <Link href="/industries/shopify-auto-parts-website-design-development" className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">Auto Parts</Link>
          <Link href="/industries/shopify-florist-website-design-development" className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">Florists</Link>
          <Link href="#">Fashion</Link>
          <Link href="/industries/shopify-health-wellness-website-design-development" className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">Health & Wellness</Link>
          <Link href="#">Custom and fine jewelery </Link>

          
        </div>


      </div>
      {/* Social Media Links */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
        <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">Follow Us</span>
        <a href="https://www.linkedin.com/company/shopifytasker/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-white transition text-sm">LinkedIn</a>
        <a href="https://www.facebook.com/shopifytasker" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-white transition text-sm">Facebook</a>
        <a href="https://twitter.com/shopifytasker" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white/50 hover:text-white transition text-sm">X (Twitter)</a>
        <a href="https://www.instagram.com/shopifytasker" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition text-sm">Instagram</a>
        <a href="https://www.youtube.com/@shopifytasker" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/50 hover:text-white transition text-sm">YouTube</a>
      </div>
      <br>
      </br>
       <GsapMarquee />
       <StartProjectModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
    />
    </footer>
  );
}
