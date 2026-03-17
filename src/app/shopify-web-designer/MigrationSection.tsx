import Link from "next/link";

type Props = {
  city?: string;
  state?: string;
};

export default function MigrationSection({ city }: Props = {}) {
  return (
    <section className="bg-white px-6 py-20 border-b border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
            Platform Migration
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-black leading-tight">
            Moving to Shopify from Another Platform?
            {city ? (
              <>
                {" "}
                We Handle It{" "}
                <span className="font-semibold">in {city}</span>.
              </>
            ) : null}
          </h2>
          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            ShopifyTasker is a trusted Shopify migration agency. We help
            merchants move from Magento, WooCommerce, BigCommerce, Salesforce,
            and Visualsoft to Shopify or Shopify Plus — without losing data,
            rankings, or revenue.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-900 transition"
          >
            Discuss Your Migration →
          </Link>
        </div>

        <ul className="border-t border-black/10 space-y-0">
          {[
            "Magento, WooCommerce, BigCommerce & custom platform migrations",
            "Full product, customer, and order data migration",
            "Shopify theme rebuild or custom design from scratch",
            "SEO migration — 301 redirects, URL structures, and metadata",
            "Third-party app and system integrations",
            "Post-launch QA, speed testing, and performance review",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 py-4 border-b border-black/10 text-gray-700 text-sm"
            >
              <span className="font-mono text-xs text-gray-300 shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
