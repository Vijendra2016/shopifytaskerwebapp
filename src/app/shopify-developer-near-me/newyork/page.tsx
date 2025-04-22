import { Metadata } from "next";
import TestimonialCardGrid from "@/app/components/TestimonialCardGrid";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Shopify Developer in New York | Hire Shopify Expert",
  description:
    "Looking to hire a Shopify developer in New York? Our expert team offers affordable Shopify development services tailored to your business needs. Get started today!",
};

export default function city() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">

        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-20 max-w-7xl mx-auto">
              {/* Left: Text content */}
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <h1 className="text-lg sm:text-3XL font-semibold text-gray-800">
                Top Shopify Developer in New York

                </h1>
                <p className="text-gray-600 text-lg">
                Hire a trusted Shopify expert to build or scale your online store.We build high-performing, custom Shopify stores to help you reach more customers and grow your brand.
                </p>
                <a
                  href="https://wa.me/+917014716631"
                  target="_blank"
                  className=" cursor-pointer inline-flex items-center bg-green-300 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400  transition"
                >
                  Any Question? Contact Us by WhatsApp
                  
                </a>
              </div>
        
              {/* Right: Image */}
              <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
                <Image
             src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68072b50352ae24c799cbfde_shopify-developer-newyork.png" // Replace with actual URL

                 alt="Why ShopifyTasker"
                  width={1200}
                  height={800}
                  className="object-contain"
                />
              </div>
            </section>
        
<TestimonialCardGrid/>

    </main>
  );
}
