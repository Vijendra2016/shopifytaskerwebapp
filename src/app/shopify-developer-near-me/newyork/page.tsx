import { Metadata } from "next";
import TestimonialCardGrid from "@/app/components/TestimonialCardGrid";
export const metadata: Metadata = {
  title: "Shopify Developer in New York | Hire Shopify Expert",
  description:
    "Looking to hire a Shopify developer in New York? Our expert team offers affordable Shopify development services tailored to your business needs. Get started today!",
};

export default function pricing() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        <h1 className="text-3xl md:text-6xl font-regular">Looking to hire shopify developer in  new york       </h1>
      
          <p className="text-gray-600 text-lg">
          ShopifyTasker is highly praised for its reliable and efficient services, offering expert help with store setup,
           optimization, and marketing. Users appreciate its quick turnaround and excellent customer support

        </p>
<TestimonialCardGrid/>

    </main>
  );
}
