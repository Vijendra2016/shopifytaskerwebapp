import ArticleCard from "./BlogCard";
import HeaderSection from "./HeaderSection";

const articles = [
  {
    title: "A spotlight on Shopify Editions, The Renaissance Edition",
    excerpt:
      "We unpack the most impactful updates for brands and retailers and assess their potential to reshape your business.",
    image: "https://cdn.prod.website-files.com/61eeae68059cd4f3157a61e0/6724f5340c62db5a86bdfdb1_P448%20wins%20Awwwards%20site%20of%20the%20day%20award%20-%20Share%20Image.jpg",
    author: "Vidi Patel",
    date: "11 Feb 2026",
    slug: "shopify-editions-renaissance",
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
