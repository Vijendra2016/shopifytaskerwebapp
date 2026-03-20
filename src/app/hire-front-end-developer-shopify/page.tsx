import { Metadata } from "next";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
export const metadata: Metadata = {
  title: "Hire a Shopify Front-End Developer | Expert UI & Theme Specialists",
  description:
    "Hire a dedicated Shopify front-end developer from ShopifyTasker. We specialize in theme customization, Liquid templating, and pixel-perfect UI builds starting from $20/hr.",
};

export default function smallTask() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Hire Shopify Front-End Developer", href: "/hire-front-end-developer-shopify" }]} />
        <h1>Hire shopify front end developer @10 per hours  </h1>
       
    <p>We can help you with shopify development company india </p>


    </main>
  );
}

