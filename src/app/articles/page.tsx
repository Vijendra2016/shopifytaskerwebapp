import ArticleCard from "./BlogCard";

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
    title: "Twenty four health and wellness brands on Shopify",
    excerpt:
      "From food-grown supplements to science-backed medical technology, we showcase 24 health and wellness brands using Shopify.",
    image: "https://cdn.prod.website-files.com/61eeae68059cd4f3157a61e0/6724f5340c62db5a86bdfdb1_P448%20wins%20Awwwards%20site%20of%20the%20day%20award%20-%20Share%20Image.jpg",
    author: "Vidi Patel",
    date: "09 Feb 2026",
    slug: "health-wellness-brands",
  },
];

export default function ArticlesPage() {
  return (
    <section className="bg-[#f3f2ef]">
  <div className="w-full mx-auto px-8">
    {articles.map((article) => (
      <ArticleCard key={article.slug} {...article} />
    ))}
  </div>
</section>

  );
}
