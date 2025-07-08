
import Link from "next/link";
import React from "react";
const ShopifyExpertServices = () => {
  return (
<section className="bg-[#fefaf6] py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold text-black-900 leading-tight">
      Explore our Shopify Expert services
    </h2>
    </div>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <div className="text-green-900 text-5xl mb-8">🎨</div>
        <h3 className="text-2xl font-bold text-black mb-2">
          Shopify Store Design
        </h3>
        <p className="text-black mb-10">
          We craft clean, user-friendly Shopify stores that truly reflect your
          brand and keep your customers engaged.
        </p>
      </div>

      <Link
        href="/shopify-store-design"
        className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
      >
        Learn More
      </Link>
    </div>

    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <div className="text-green-900 text-5xl mb-8">🖌️</div>
        <h3 className="text-2xl font-bold text-black mb-2">
          Theme Customization
        </h3>
        <p className="text-black mb-10">
          We tailor your Shopify theme or create custom layouts to improve
          functionality and match your brand perfectly.
        </p>
      </div>
       <Link 
  href="/theme-customization" 
  className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
>
  Learn More
</Link>
    </div>

    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <div className="text-green-900 text-5xl mb-8">🛠️</div>
        <h3 className="text-2xl font-bold text-black mb-2">
          Custom Development
        </h3>
        <p className="text-black mb-10">
          Build custom features, integrations, or functionalities to take your
          Shopify store to the next level.
        </p>
      </div>
      <Link 
  href="/custom-development" 
  className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
>
  Learn More
</Link>
    </div>

    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <div className="text-green-900 text-5xl mb-8">🔌</div>
        <h3 className="text-2xl font-bold text-black mb-2">App Integration</h3>
        <p className="text-black mb-10">
          Connect essential apps like CRM, shipping tools, analytics, and
          marketing platforms with ease.
        </p>
      </div>
     <Link 
  href="/app-integration" 
  className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
>
  Learn More
</Link>
    </div>

    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <div className="text-green-900 text-5xl mb-8">⚙️</div>
        <h3 className="text-2xl font-bold text-black mb-2">Ongoing Support</h3>
        <p className="text-black mb-10">
          Keep your Shopify store running smoothly with regular updates, fixes,
          and enhancements.
        </p>
      </div>
    <Link 
  href="/ongoing-support" 
  className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
>
  Learn More
</Link>
    </div>

    <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <div className="text-green-900 text-5xl mb-8">📈</div>
        <h3 className="text-2xl font-bold text-black mb-2">Shopify SEO</h3>
        <p className="text-black mb-10">
          Optimize your store with technical SEO and keyword strategies to boost
          visibility and sales.
        </p>
      </div>
     <Link 
  href="/shopify-seo" 
  className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
>
  Learn More
</Link>
    </div>
  </div>
</section>
  )
};

export default ShopifyExpertServices;