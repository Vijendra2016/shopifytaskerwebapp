import Link from "next/link";
import cities from "@/lib/cities.json";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Top Shopify Expert Near You | Local Shopify Experts",
  description:
    "Discover top-rated Shopify Expert across the United States. Browse by city to find trusted experts who deliver fast, custom, and conversion-focused eCommerce solutions.",
};

export default function HomePage() {
  return (
    <main>
      <section className="text-center">
        <h1 className="w-full text-center text-3xl md:text-8xl font-regular py-18 px-10 bg-black text-white">
          Shopify Website Experts Nearby
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-10">
          {cities.map((city, index) => (
            <div key={index} className="p-4">
              <Link
                href={`/shopify-expert-near-me/${city.slug}`}
                className="block text-xl font-semibold text-black transition hover:text-[#00bda5]"
              >
                {city.city}, {city.state}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
