// src/app/shopify-expert-near-me/[city]/page.tsx

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import cities from '@/lib/cities.json';
import CitiesCta from '@/app/components/CitiesCta';
import TestimonialCard from '@/app/components/TestimonialCard';
type Props = {
  params: Promise<{
    city: string;
  }>;
};

// ✅ generateStaticParams
export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

// ✅ generateMetadata with proper async param handling
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { city } = params;

  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) {
    return {
      title: 'City Not Found | ShopifyTasker',
      description: 'This city page is not available.',
    };
  }

  return {
    title: `Hire Shopify Expert in ${cityData.city} | ShopifyTasker  `,
    description:  `Shopify expert in ${cityData.city} prices start from $10/hr,pay after work done`  ,
  };
}

// ✅ Page Component with proper async param handling
export default async function CityPage(props: Props) {
  const params = await props.params;
  const { city } = params;

  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) return notFound();

  return (
    <main>

      <section className="px-6 md:px-30  h-[60vh] md:h-[80vh] py-16 bg-black text-white">
    <div className="services flex flex-col items-center justify-center text-center text-black ">
<h1 className="text-3xl md:text-9xl text-white font-medium tracking-tight ">Hire Shopify Expert in {cityData.city}, {cityData.state}</h1>
<h3 className="text-lg md:text-3xl text-white  font-medium tracking-tight"> Shopify Website Development | Shopify Tasks | Shopify Retainer | Shopify SEO</h3>


</div>

    </section>
      

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-4">
          Shopify Developer in {cityData.city}
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">{cityData.intro}</p>
        <p className="font-semibold text-blue-600">{cityData.cta}</p>
      </section>

<section className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-4">
          How do i hire a shopify expert near  {cityData.city} on ShopifyTasker

        </h3>
        <p className="mb-4 text-gray-700 leading-relaxed">Hire shopify expert on shopifytasker is three step process.
Click on Get Free Quote 
Write your project scope 
Get Submit Project we will be back to you with proper cost .
</p>

<h3 className="text-3xl font-bold mb-4">
          Why Hire a shopify expert near  {cityData.city} on ShopifyTasker

        </h3>
    
        <p className="font-semibold text-blue-600">we have 10 years experience on shopify ecosystem , we work on real prices not much price like $150/hr our hourly prices is fixed $20 and we dont take any upfront payment .</p>
      
      
      </section>
      
      <TestimonialCard />
<CitiesCta/>
    </main>
  );
}