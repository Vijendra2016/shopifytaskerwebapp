import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Thirteen bridal wear brands on Shopify",
  description:
    "Explore inspiring bridal wear brands built on Shopify and discover what makes them successful.",
};

export default function ArticlePage({ params }: Props) {
  return (
    <article className="bg-white text-neutral-900">
      
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
          <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight">
            Thirteen bridal wear brands on Shopify
          </h1>
        </div>

        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/698c5bce32a0604ff46d9a7e_chandradas-balan-NGSOdAaTS68-unsplash.jpg" // put your image inside public folder
            alt="Bridal wear brands"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        
        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
          Shopify has become the preferred platform for modern bridal wear
          brands looking to combine luxury storytelling with seamless
          eCommerce performance.
        </p>

        <h2 className="text-2xl md:text-3xl font-serif mt-12 mb-6">
          Why Bridal Brands Choose Shopify
        </h2>

        <p className="text-neutral-700 leading-relaxed mb-6">
          Bridal fashion requires elegance, visual storytelling, and a
          frictionless buying experience. Shopify enables designers to create
          immersive product pages, manage global orders, and scale effortlessly.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-6">
          From custom gowns to accessories, Shopify provides flexibility,
          performance, and design freedom for luxury fashion brands.
        </p>

        <blockquote className="border-l-4 border-neutral-900 pl-6 italic text-xl my-12">
          “Luxury is in each detail.” – Hubert de Givenchy
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-serif mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="text-neutral-700 leading-relaxed">
          Whether you're launching a bridal boutique or scaling an established
          fashion house, Shopify provides the foundation for a premium online
          presence.
        </p>
      </section>
    </article>
  );
}
