import { Metadata } from "next";
import TestimonialCard from "@/app/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Impulse Theme Customization & Update Services | Shopify Experts",
  description:
    "Get expert customization and update services for your Shopify Impulse theme. Optimize performance, tailor design, and keep your store running smoothly with ShopifyTasker.",
};

export default function Pricing() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="hidden md:block w-64 bg-gray-50 p-6 border-r border-gray-200 pt-10">
        <div className="sticky top-10">
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <nav className="space-y-2">
            <a href="#customization" className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700">Theme Customization</a>
            <a href="#updates" className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700">Theme Updates</a>
            <a href="#performance" className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700">Performance Optimization</a>
            <a href="#themetweak" className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700">Impulse theme tweaks</a>

            <a href="#testimonials" className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700">Client Testimonials</a>
            <a href="#quote" className="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700">Request a Quote</a>
          </nav>
          
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
          Running your store on the Impulse theme and need to make it your own? You're in the right place.
        </p>
        
        <p className="text-base text-gray-800 mb-4">
          Whether you're looking to fine-tune the layout, update the design, improve performance, or add custom features — we've got you covered. Our team specializes in working with Shopify's Impulse theme to deliver fast, reliable, and on-brand customizations that actually convert.
        </p>
        
        <p className="text-base text-gray-800 mb-4">
          Already using an older version of Impulse? No worries. We handle seamless theme updates too — keeping all your custom features intact without breaking your site.
        </p>
        
        <p className="text-base text-gray-800 mb-8">
          We don't do generic. Every Shopify store is unique, and our goal is to make your version of Impulse reflect that — whether you're just starting out or scaling fast.
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
          We're Shopify theme pros who know Impulse inside and out. No guesswork, no bloated code — just clean, efficient solutions tailored to your brand.
        </p>
        
        <h2 id="performance" className="text-2xl font-semibold mb-4">⚡ Performance Optimization</h2>
        <p className="text-base text-gray-800 mb-12">
          We'll make your Impulse theme run lightning fast with our performance tuning, ensuring you don't lose sales due to slow page loads or mobile issues.
        </p>
        
        <h2 id="testimonials" className="text-2xl font-semibold mb-6 text-center">What Our Clients Say</h2>
        <div className="mb-12">
          <TestimonialCard />
        </div>
        
        {/* Quote Request Form */}
        <div id="quote" className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Request a Quote</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="storeUrl">Shopify Store URL</label>
              <input 
                type="url" 
                id="storeUrl" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                placeholder="https://your-store.myshopify.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="serviceType">Service Type</label>
              <select 
                id="serviceType" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a service</option>
                <option value="customization">Theme Customization</option>
                <option value="update">Theme Update</option>
                <option value="performance">Performance Optimization</option>
                <option value="other">Other (please specify)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="details">Project Details</label>
              <textarea 
                id="details" 
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Tell us about your project requirements"
                required
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="budget">Estimated Budget (USD)</label>
              <select 
                id="budget" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select budget range</option>
                <option value="below-500">Below $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="above-2000">Above $2,000</option>
                <option value="not-sure">Not sure / Need consultation</option>
              </select>
            </div>
            
            <div className="mt-4">
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block w-64 bg-gray-50 p-6 border-l border-gray-200">
        <div className="sticky top-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mb-6">
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
            <a href="#quote" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800">Get exact pricing →</a>
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