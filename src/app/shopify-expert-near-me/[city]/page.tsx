import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import cities from '@/lib/cities.json';
import Image from "next/image";

interface PageProps {
  params: {
    city: string;
  };
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityData = cities.find((c) => c.slug === params.city);

  if (!cityData) {
    return {
      title: 'City Not Found | ShopifyTasker',
      description: 'This city page is not available.',
    };
  }

  return {
    title: `Best ${cityData.city} Shopify Web Design, Development, and Maintenance Agency`,
    description: cityData.intro,
  };
}

export default function CityPage({ params }: PageProps) {
  const cityData = cities.find((c) => c.slug === params.city);

  if (!cityData) return notFound();
  return (
      <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-0">

        <section className="relative flex items-center justify-center h-[60vh] md:h-[80vh] overflow-hidden">
                {/* Background image (optimized by Next.js) */}
                <Image
                  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/685a270f4b652a6b3c6ec851_hustong%20-ca-shopify-developer.jpg" // put the file in /public/images
                  alt="Shopify Virtual Assistant Services"
                  fill             // makes the image cover the parent <section>
                  sizes="100vw"     // tell Next how wide it can be
                  style={{ objectFit: "cover" }}
                  priority         // loads this image first
                />
        
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />
        
                {/* Text */}
                <div className="relative z-10 text-center px-4">
                  <h1 className="text-4xl md:text-5xl font-normal text-white">
                  
        Shopify Website Design & Development in {cityData.city} <br></br> Expert Shopify Developers
        
        
                  </h1>
                  <p className="mt-4 text-lg md:text-1xl text-white">
                 Hire best expert shopify developer and designer for your ecommerce business , we provide development services hourly , project basis.
        
                  </p>
                </div>
              </section>
                
                 <section className="flex flex-col items-center gap-6 px-4 md:px-12 lg:px-10 py-10 text-black">
          <div className="w-full max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-normal mb-4">
            Why Hire Our Shopify Virtual Assistants?
        
        
            </h2>
            <p className="text-lg">
        We have 10 years experiecne on shopify ecosystem , we understand the key challenges shopify store owners face, our shopify expert va can help you to overcome them with easy and efficiency.  
        Our Shopify VA can help you with shopify store managment on full of efficiency and details.
          </p>
        
             

          </div>
        
          
        </section>

      <h1 className="text-3xl font-bold mb-4">
        Shopify Developer in {cityData.city}
      </h1>
      <p className="mb-4">{cityData.intro}</p>
      <p className="font-semibold">{cityData.cta}</p>
    </main>
  );
}
