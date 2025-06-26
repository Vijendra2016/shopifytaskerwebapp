// ✅ DO NOT DEFINE YOUR OWN `type Props`
// import the official PageProps type instead:
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import cities from '@/lib/cities.json';

// ✅ Use the built-in type `PageProps`
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
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

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

// ✅ Component must be async
export default async function CityPage({ params }: { params: { city: string } }) {
  const cityData = cities.find((c) => c.slug === params.city);

  if (!cityData) return notFound();

  return (
    <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-0">
      <section className="relative flex items-center justify-center h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/685a270f4b652a6b3c6ec851_hustong%20-ca-shopify-developer.jpg"
          alt="Shopify Virtual Assistant Services"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-normal text-white">
            Shopify Website Design & Development in {cityData.city}
            <br />
            Expert Shopify Developers
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Hire the best expert Shopify developer and designer for your ecommerce business. We provide development services hourly or on a project basis.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 px-4 md:px-12 lg:px-10 py-10 text-black">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-normal mb-4">
            Why Hire Our Shopify Virtual Assistants?
          </h2>
          <p className="text-lg">
            We have 10 years of experience in the Shopify ecosystem. Our experts understand the key challenges store owners face. Our Shopify VAs help you manage stores efficiently and effectively with complete attention to detail.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-6 text-left">
        <h2 className="text-3xl font-bold mb-4">Shopify Developer in {cityData.city}</h2>
        <p className="mb-4">{cityData.intro}</p>
        <p className="font-semibold">{cityData.cta}</p>
      </div>
    </main>
  );
}
