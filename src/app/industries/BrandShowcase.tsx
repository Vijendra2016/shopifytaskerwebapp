// components/industry/BrandShowcase.tsx
import Image from "next/image";

type Brand = {
  name: string;
  url: string;
  image: string;
  description?: string;
  features?: string[];
};

type Props = {
  brands: Brand[];
};

export default function BrandShowcase({ brands }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Leading Health & Wellness Brands on Shopify
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Inspiration from high-performing Shopify health and wellness stores.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gray-200 bg-white overflow-hidden
                         shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {brand.name}
                </h3>

                {brand.description && (
                  <p className="mt-3 text-gray-600">
                    {brand.description}
                  </p>
                )}

                {brand.features && (
                  <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                    {brand.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
