import { Metadata } from "next";
import HowItWorks from "../components/HowItWorks";
import IndustryGrid from "../components/IndustriesGrid";
import GeoMessage from "../components/GeoMessage";
export const metadata: Metadata = {
  title: "Shopify Development services for industry ",
  description:
    "Hire freelance shopify developer hourly rate start from $10 per hour",
};

export default function pricing() {
  return (
    <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-20">
        <h1 className="text-3xl md:text-6xl font-regular">Industries we work  </h1>
      
          <p className="text-gray-600 text-lg">
          We offer a wide range of services for any industry those who want to enhance their  Online Presence and sell online via shopify.

        </p>
        <p className="text-gray-600 text-lg">

    No matter which industry you are in - retail , food,fashion and beauty or beyond , we can help you to build your shopify store development , maintenance , seo, digital marketing paid promotion we offer shopify development services that can help your business to grow.

        </p>

        <h2 className="text-3xl md:text-4xl font-regular">Some of the featured industries we work with</h2>
        < IndustryGrid/>
<HowItWorks/>
<GeoMessage/>
    </main>
  );
}
