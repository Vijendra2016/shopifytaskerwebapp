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
  title?: string;
  subtitle?: string;
};

export default function BrandShowcase({
  brands,
  title = "Leading Health & Wellness Brands on Shopify",
  subtitle = "Inspiration from high-performing Shopify health and wellness stores.",
}: Props) {
  return (
    <section className="py-14 bg-black text-white/90">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-3 text-white max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {brand.name}
                </h3>

                {brand.description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {brand.description}
                  </p>
                )}

                {brand.features && (
                  <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
                    {brand.features.slice(0, 4).map((item, index) => (
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
