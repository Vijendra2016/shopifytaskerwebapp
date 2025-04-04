import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ShopifyTasker Reviews",
  description:
    "ShopifyTasker Reviews based developer",
};

export default function pricing() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        <h1 className="text-3xl md:text-6xl font-regular">ShopifyTasker Reviews</h1>
        <h2 className="text-3xl md:text-4xl font-regular">If youre ready to design, develop or scale on Shopify we have the solution.
        </h2>
    <p>Commercial Shopify themes & apps are great for lower level merchants.  But not for big brands.  You can’t share a design with another company by using a template.  You just can’t.  You need a custom build, created around your brand.  Each and every pixel needs to be yours.  Design.  Development.  100% unique.
</p>

<div className="container mx-auto px-4 py-18">
  <div className="grid md:grid-cols-3 gap-18">
    <Image
      className="object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ef6c2866f369a5062fca06_Shopifytasker%20review.png"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
    <Image
      className="object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ef6c2866f369a5062fca06_Shopifytasker%20review.png"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
    <Image
      className="object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ef6c2866f369a5062fca06_Shopifytasker%20review.png"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
   <Image
      className="object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ef6c2866f369a5062fca06_Shopifytasker%20review.png"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
    <Image
      className="object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ef6c2866f369a5062fca06_Shopifytasker%20review.png"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
   <Image
      className="object-cover"
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ef6c2866f369a5062fca06_Shopifytasker%20review.png"
      alt="Shopify Development"
      width={500}
      height={250}
      priority
    />
  </div>
</div>


    </main>
  );
}
