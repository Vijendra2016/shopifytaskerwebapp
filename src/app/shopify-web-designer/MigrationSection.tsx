import Link from "next/link";


export default function MigrationSection() {
  return (
    <section className="w-full bg-white  pt-30 pb-30 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Heading */}
        <h1 className="text-4xl md:text-5xl font-thin text-black leading-tight">
          We are a Shopify migration agency, re-platforming stores to Shopify & Shopify Plus.
        
        </h1>

        {/* Right Content */}
        <div className="space-y-8 text-lg text-gray-900">

          <p>
            Charle is a trusted and experienced Shopify migration agency. We support our merchants to
            migrate or re-platform from{" "}
            <span className="underline underline-offset-4">Magento</span>,{" "}
            <span className="underline underline-offset-4">WooCommerce</span>,{" "}
            <span className="underline underline-offset-4">BigCommerce</span>,{" "}
            <span className="underline underline-offset-4">Salesforce</span>,{" "}
            <span className="underline underline-offset-4">Visualsoft</span>{" "}
            and more to Shopify or Shopify Plus.
          </p>

          <ul className="space-y-3 list-disc list-inside">
            <li>Magento, WooCommerce, BigCommerce & custom platform migrations</li>
            <li>Product, customer & order data migration</li>
            <li>Shopify theme rebuilds or template customisation</li>
            <li>SEO migration, redirects & URL structure management</li>
            <li>Third party app & system integrations</li>
          </ul>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Get In Touch
            <span className="text-xl">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
