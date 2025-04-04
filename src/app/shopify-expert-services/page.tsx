import { Metadata } from "next";

export const metadata: Metadata = {
  title: "shopify expert services",
  description:
    "shopify expert services from the india based developer",
};

export default function pricing() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        <h1 className="text-3xl md:text-6xl font-regular">Shopify Expert Services</h1>
        <h2 className="text-3xl md:text-4xl font-regular">If you're ready to design, develop or scale on Shopify we have the solution.
        </h2>
    <p>Commercial Shopify themes & apps are great for lower level merchants.  But not for big brands.  You can’t share a design with another company by using a template.  You just can’t.  You need a custom build, created around your brand.  Each and every pixel needs to be yours.  Design.  Development.  100% unique.

At Liquify we specialise in building custom Shopify themes from scratch as well as custom apps.  We build compete bespoke ecommerce experiences around brands and very specific merchant needs.

Custom builds take considerable time and effort and projects typically last for 2-5 months depending on the complexity.  Cost bracket of $20k-120k.

Interested to know what we can do to help?  Use the form below to start the conversation.</p>
    </main>
  );
}
