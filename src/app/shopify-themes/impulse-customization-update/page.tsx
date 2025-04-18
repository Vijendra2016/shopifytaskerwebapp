import { Metadata } from "next";
import TestimonialCard from "@/app/components/TestimonialCard";
import QuoteRequestForm from "@/app/components/QuoteRequestForm";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Impulse Theme Customization & Update Services | Shopify Experts",
  description:
    "Get expert customization and update services for your Shopify Impulse theme. Optimize performance, tailor design, and keep your store running smoothly with ShopifyTasker.",
};

export default function Pricing() {
  return (
    <div className="flex min-h-screen ">
        
      {/* Left Sidebar */}
      <aside className="hidden md:block w-64 bg-black  p-6 border-r border-gray-200 pt-20">
        <div className="sticky top-40">
        <div className="bg-green-50 rounded-lg border border-green-100 p-5">
            <h3 className="font-semibold text-green-800 mb-2">Did you know?</h3>
            <p className="text-sm text-green-700 mb-3">Well-optimized Impulse themes can load up to 40% faster, significantly improving conversion rates.</p>
            <p className="text-xs text-green-600">Based on our client performance data</p>
          </div>
          
          <div className="mt-8 p-4 bg-pink-300 rounded-lg border border-blue-100">
            <h4 className="font-medium text-white-800 mb-2">Need urgent help?</h4>
            <p className="text-sm text-blue-700 mb-3">We offer priority support for critical issues.</p>
            <a href="#quote" className="text-sm font-medium text-blue-600 hover:text-blue-800">Get in touch →</a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
          
          

              
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Impulse Theme Customization & Update Services
        </h1>

        
        <p className="text-lg text-gray-700 mb-6 text-center">
          Running your store on the Impulse theme and need to make it your own? Your are in the right place.
        </p>
        <Image
                className="w-full h-half object-cover"
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6802343c7aef14f4179fc9c6_Penny%C2%AE%20Skateboards%20Australia%20Official%20Store%20%E2%80%93%20Penny%20Skateboards.png"
                alt="Shopify Development"
                width={500}
                height={250}
                priority
              />
        
        <p className="text-base text-gray-800 mb-4">
          Whether your are looking to fine-tune the layout, update the design, improve performance, or add custom features — we got you covered. Our team specializes in working with  Impulse shopify theme to deliver fast, reliable, and on-brand customizations that actually convert.
        </p>
        
        <p className="text-base text-gray-800 mb-4">
          Already using an older version of Impulse? No worries. We handle seamless theme updates too — keeping all your custom features intact without breaking your site.
        </p>
        
        <p className="text-base text-gray-800 mb-8">
          Every Shopify store is unique, and our goal is to make your version of Impulse reflect that — whether you are just starting out or scaling fast.
        </p>
        
        <h2 id="customization" className="text-2xl font-semibold mt-10 mb-4">💡 What We Can Help With:</h2>
        <ul className="list-disc list-inside text-left text-gray-700 mb-8 space-y-2">
          <li>Layout and section adjustments</li>
          <li>Speed & performance optimization</li>
          <li>Theme updates with custom code retention</li>
          <li>Mobile responsiveness tweaks</li>
          <li>Conversion-focused design upgrades</li>
        </ul>
        
        <h2 id="updates" className="text-2xl font-semibold mb-4">🤝 Why Work With Us?</h2>
        <p className="text-base text-gray-800 mb-12">
          We are Shopify theme pros who know Impulse inside and out. No guesswork, no bloated code — just clean, efficient solutions tailored to your brand.
        </p>
        
        <h2 id="performance" className="text-2xl font-semibold mb-4">⚡ Performance Optimization</h2>
        <p className="text-base text-gray-800 mb-12">
          We make your Impulse theme run lightning fast with our performance tuning, ensuring you do not  lose sales due to slow page loads or mobile issues.
        </p>
        
        <h2 id="testimonials" className="text-2xl font-semibold mb-6 text-center">What Our Clients Say</h2>
        <div className="mb-12">
          <TestimonialCard />

        </div>
        
        <QuoteRequestForm />
        {/* Quote Request Form */}

        <h4>Top Website Buidl on Impulse Theme </h4>
        <Image
                className="w-full h-half object-cover"
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6802343c7aef14f4179fc9c6_Penny%C2%AE%20Skateboards%20Australia%20Official%20Store%20%E2%80%93%20Penny%20Skateboards.png"
                alt="Shopify Development"
                width={500}
                height={250}
                priority
              />
        
        
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block w-64 bg-black p-6 border-l border-gray-200 pt-20">
        <div className="sticky top-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mb-6 ">
            <h3 className="font-semibold text-lg mb-3">Quick Quote</h3>
            <p className="text-sm text-gray-600 mb-4">Need a ballpark figure? Common services start at:</p>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Basic Customization</span>
                <span className="font-medium">$299</span>
              </li>
              <li className="flex justify-between">
                <span>Theme Update</span>
                <span className="font-medium">$349</span>
              </li>
              <li className="flex justify-between">
                <span>Performance Optimization</span>
                <span className="font-medium">$449</span>
              </li>
            </ul>
            <a href="#quote" className="mt-4 inline-block text-sm font-medium bg-green-300 text-black px-4 py-2 rounded-full text-lg font-medium hover:bg-pink-400 transition">Get exact pricing →</a>
          </div>
          
          <div className="bg-green-50 rounded-lg border border-green-100 p-5">
            <h3 className="font-semibold text-green-800 mb-2">Did you know?</h3>
            <p className="text-sm text-green-700 mb-3">Well-optimized Impulse themes can load up to 40% faster, significantly improving conversion rates.</p>
            <p className="text-xs text-green-600">Based on our client performance data</p>
          </div>

          
        </div>

        
      </aside>
      
    </div>
    
  );
}