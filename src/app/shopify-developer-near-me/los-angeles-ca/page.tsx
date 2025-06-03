import { Metadata } from "next";
import TestimonialCardGrid from "@/app/components/TestimonialCardGrid";
import Image from "next/image";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Shopify Developer in New York | Hire Shopify Expert",
  description:
    "Looking to hire a Shopify developer in New York? Our expert team offers affordable Shopify development services tailored to your business needs. Get started today!",
};

export default function city() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
      <Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ShopifyTasker - Shopify Developer Los Angeles",
      "image": "https://www.shopifytasker.com/logo.jpg",
      "@id": "https://www.shopifytasker.com/shopify-developer-near-me/los-angeles-ca",
      "url": "https://www.shopifytasker.com/shopify-developer-near-me/los-angeles-ca",
      "telephone": "+1-123-456-7890",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Serving all areas in Los Angeles",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90001",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://www.facebook.com/shopifytasker",
        "https://www.instagram.com/shopifytasker"
      ]
    })}
  </script>
</Head>

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27426128936!2d-118.69192063653582!3d34.020730499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c6e9d7d7df%3A0x9db6d9dc15b81d07!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1717431320001!5m2!1sen!2sus"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-20 max-w-7xl mx-auto">
              {/* Left: Text content */}
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <h1 className="text-lg sm:text-3XL font-semibold text-gray-800">
                Hire  Shopify Developer in Los Angeles, CA
                </h1>
                <p className="text-gray-600 text-lg">
                Hire a trusted Shopify  developer & expert to build or scale your online store.We build high-performing, custom Shopify stores to help you reach more customers and grow your brand.
                </p>
                
              </div>
        
              {/* Right: Image */}
              <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
                <Image
             src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68072b50352ae24c799cbfde_shopify-developer-newyork.png" // Replace with actual URL

                 alt="shopify developer in los angeles"
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
