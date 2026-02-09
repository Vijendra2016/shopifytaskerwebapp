
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
    
    <footer className="bg-black  text-sm text-white/90 py-12 px-6">
      
        <div className="flex justify-center mb-20">
      <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6815f5f9c4f106f73030c696_file.svg" // Replace with your actual image path
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
           <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition">
           store setup and development
          </button>
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
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition">
          Wordpress to Shopify Migration
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
          Salesfoce to Shopify Plus
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Squarespace to shopify          
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Square to shopify   
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Maganto to Shopify 
          </button>
          <button onClick={openStartProject} className="text-left cursor-pointer hover:underline hover:decoration-white/90 underline-offset-4 transition ">
           Custom to Shopify 
          </button>
          
          
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
