import { Metadata } from "next";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import GeoMessage from "../components/GeoMessage";
export const metadata: Metadata = {
  title: "ShopifyTasker Reviews",
  description:
    "ShopifyTasker Reviews based developer",
};

export default function faq() {
  return (
    <main className="container mx-auto px-1 py-0 text-center pt-20">
        <h1 className="text-3xl md:text-6xl font-regular">We Have Answers  </h1>
       <p className="text-xl font-light text-gray-900 mb-4">
       ShopifyTasker is highly praised for its reliable and efficient services, offering expert help with store setup, optimization, and marketing. Users appreciate its quick turnaround and excellent customer support

          </p>
<TestimonialCardGrid/>
<GeoMessage/>
    </main>
  );
}
