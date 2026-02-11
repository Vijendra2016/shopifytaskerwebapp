import ArticleCard from "./BlogCard";
import HeaderSection from "./HeaderSection";


const articles = [
  {
    title: "Checkout A/B Testing for Shopify: How to Increase Conversions & Revenue",
    excerpt:
      "We break down proven checkout A/B testing strategies that help Shopify brands increase conversion rates and maximize revenue at the final step of the buying journey.",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/698c6dd4117985f9f9dbf85f_shopify-checkout-ab-test.png",
    author: "Vijendra Singh",
    date: "11 Feb 2026",
    slug: "shopify-checkout-ab-testing",
  },
  {
    title: "Shopify Fragrances , perfumes and colognes online Shop - Shopify is Best eCommerce solution for selling Fragrances , perfumes and colognes online.",
    excerpt:
      "Sell fragrances, perfumes, and colognes online using Shopify — a powerful and scalable eCommerce solution.",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/698c5bce32a0604ff46d9a7e_chandradas-balan-NGSOdAaTS68-unsplash.jpg",
    author: "Vijendra Singh",
    date: "14 June 2022",
    slug: "shopify-fragrances-perfumes-colognes",
  },
];

export default function ArticlesPage() {
  return (
    
    <section className="bg-[#eeeeee]">
      <HeaderSection />
  <div className="w-full mx-auto px-8">
    {articles.map((article) => (
      <ArticleCard key={article.slug} {...article} />
    ))}
  </div>
</section>

  );
}
