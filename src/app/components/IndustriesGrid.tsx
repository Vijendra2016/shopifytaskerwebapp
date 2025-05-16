import React from "react";
import Image from "next/image";
import Link from "next/link";

type Industry = {
  title: string;
  tags: string;
  url: string;
  image: string;
};

const industries: Industry[] = [
  {
    title: "Hair Extension",
    tags: "Shopify Website Design, Shopify Hair Extension",
    url: "/industries/hair-extension",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6827175e5ab4aae9c7a45403_hair-extension-shopify-website-design.png",
  },
  {
    title: "Health and wellness",
    tags: " shopify store development for wellness brands",
    url: "/industries/nordic-design",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/682719eda8c781d89c98050d_heath-and-wellness-shopify-website-development.png",
  },
   {
    title: "Fashion",
    tags: "Shopify Website Design, Shopify Hair Extension",
    url: "/industries/hair-extension",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/682723ec805c496bf9be5338_Shopify-fashion-websites.png",
  },
  {
    title: "Kids Clothing ",
    tags: " shopify store development for kids clothing brands",
    url: "/industries/nordic-design",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/682724f1598128ac093b0ca4_Shopify%20Kids%20clothing%20websites.png",
  },
   {
    title: "Hair Extension",
    tags: "Shopify Website Design, Shopify Hair Extension",
    url: "/industries/hair-extension",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6827175e5ab4aae9c7a45403_hair-extension-shopify-website-design.png",
  },
  {
    title: "Health and wellness",
    tags: " shopify store development for wellness brands",
    url: "/industries/nordic-design",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/682719eda8c781d89c98050d_heath-and-wellness-shopify-website-development.png",
  },
   {
    title: "Hair Extension",
    tags: "Shopify Website Design, Shopify Hair Extension",
    url: "/industries/hair-extension",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6827175e5ab4aae9c7a45403_hair-extension-shopify-website-design.png",
  },
  {
    title: "Health and wellness",
    tags: " shopify store development for wellness brands",
    url: "/industries/nordic-design",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/682719eda8c781d89c98050d_heath-and-wellness-shopify-website-development.png",
  },
   {
    title: "Hair Extension",
    tags: "Shopify Website Design, Shopify Hair Extension",
    url: "/industries/hair-extension",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6827175e5ab4aae9c7a45403_hair-extension-shopify-website-design.png",
  },
  {
    title: "Health and wellness",
    tags: " shopify store development for wellness brands",
    url: "/industries/nordic-design",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/682719eda8c781d89c98050d_heath-and-wellness-shopify-website-development.png",
  },
  // Add more industries as needed
];

const IndustryGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-2 hover:shadow-lg transition-all"
          >
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {industry.tags}
            </p>
            <Link            className=" cursor-pointer   inline-flex items-center bg-black  text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400  transition" href={industry.url}>
              
                View Industry
             
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryGrid;
