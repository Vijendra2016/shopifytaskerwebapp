import Image from "next/image";

type Brand = {
  name: string;
  url: string;
  image: string;
  description: string;
  features?: string[];
};

type Props = {
  brands: Brand[];
};

export default function BrandEditorial({ brands }: Props) {
  return (
    <section className="bg-[#f5f4f2] py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Health & Wellness Brands on Shopify
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A curated look at beautifully designed and high-performing Shopify stores.
          </p>
        </div>

        {/* Editorial Blocks */}
        {brands.map((brand, index) => (
          <div key={index} className="space-y-6">

           {/* Featured Image */}
<div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden ">
  

   <Image
          src={brand.image}
          alt={brand.name}
          width={1200}
          height={800}
          className="w-full h-auto object-contain rounded-md"
        />

</div>


            {/* Text Content */}
            <div className="max-w-3xl">
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-gray-900 hover:underline"
              >
                {brand.name}
              </a>

              <p className="mt-3 text-gray-700 leading-relaxed">
                {brand.description}
              </p> 
              <p className="mt-3 text-gray-700  text-xl font-semibold leading-relaxed">Standout store features:</p>

              {brand.features && (
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                  {brand.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
