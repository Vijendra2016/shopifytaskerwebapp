import { Metadata } from "next";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
export const metadata: Metadata = {
  title: "Shopify Website Redesign Service | Refresh Your Store's Look & Speed",
  description:
    "Give your Shopify store a modern makeover with our website redesign service. We improve UX, speed, mobile responsiveness, and conversions — all with a fresh, branded design.",
};

export default function pricing() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        <h1 className="text-3xl md:text-6xl font-regular"> Top Rated Shopify Website Design Company</h1>
      
          <p className="text-gray-600 text-lg">
          ShopifyTasker is highly praised for its reliable and efficient services, offering expert help with store setup,
           optimization, and marketing. Users appreciate its quick turnaround and excellent customer support

        </p>
<TestimonialCardGrid/>

    </main>
  );
}
