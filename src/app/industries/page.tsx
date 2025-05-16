import { Metadata } from "next";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
export const metadata: Metadata = {
  title: "Shopify Developer Near Me",
  description:
    "Hire freelance shopify developer hourly rate start from $10 per hour",
};

export default function pricing() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        <h1 className="text-3xl md:text-6xl font-regular">Industries we work  </h1>
      
          <p className="text-gray-600 text-lg">
          We offer a wide range of services for any industry those who want to enhance their  Online Presence and sell online via shopify.

        </p>
        <p className="text-gray-600 text-lg">

    No matter which industry you are in - retail , food,fashion and beauty or beyond , we can help you to build your shopify store development , maintenance , seo, digital marketing paid promotion we offer shopify development services that can help your business to grow.

        </p>

        <h2 className="text-3xl md:text-4xl font-regular">Some of the featured industries we work with</h2>
<TestimonialCardGrid/>

    </main>
  );
}
