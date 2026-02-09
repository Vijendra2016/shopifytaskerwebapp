export default function ServiceSection() {
  return (
    <section className="border-b border-black font-sans text-black">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT BIG TITLE */}
          <h2 className="text-3xl md:text-4xl text-black font-bold tracking-tight">
            Custom Shopify Websites for Florists That Drive Orders, Subscriptions & Local Deliveries
          </h2>

          {/* RIGHT ABOUT */}
          <div>
            <p className="text-sm uppercase tracking-widest mb-4">what we do</p>

            <p className="text-xl text-black leading-relaxed font-medium">
              We design and develop high-converting Shopify websites specifically for florists, flower shops, and floral brands.
              Our approach blends elegant visual design, smooth ordering experiences, and conversion-focused development to help
              florists increase online orders, grow subscriptions, and streamline local delivery sales. From seasonal collections
              to subscription bouquets and same-day delivery flows, every Shopify store we build is crafted to sell more flowers.
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-black" />

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* INTRO */}
          <div>
            <p className="text-sm text-black uppercase tracking-widest mb-3">
              Our services
            </p>

            <h2 className="text-2xl text-black font-semibold">
              Conversion-focused Shopify services for florists & flower shops
            </h2>

            <p className="text-lg max-w-3xl mt-4">
              Whether you’re launching a new flower shop, upgrading your existing website, or migrating to Shopify,
              we design, build, and optimize florist websites that attract local customers, increase average order value,
              and support seasonal sales and subscriptions.
            </p>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-16">
            {/* 1) SETUP & LAUNCH */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Shopify Setup & Launch for Florists
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>End-to-end Shopify store setup for florists & flower shops</li>
                <li>Theme setup with elegant, floral-focused design</li>
                <li>Delivery zones, pickup & local shipping configuration</li>
                <li>Essential app setup (subscriptions, reviews, email)</li>
                <li>Launch checklist, testing & handover</li>
              </ul>
            </div>

            {/* 2) MIGRATION */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-5">
                Shopify Migration for Florists
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Florist website migration to Shopify</li>
                <li>Migration from WooCommerce, Squarespace & custom platforms</li>
                <li>SEO-safe redirects (301s) to protect rankings</li>
                <li>Design refresh & UX improvements during migration</li>
                <li>Post-migration QA & ongoing support</li>
              </ul>
            </div>

            {/* 3) REDESIGN & CRO */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Shopify Redesign & CRO for Florists
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Shopify website redesign for florists</li>
                <li>High-converting product & bouquet pages</li>
                <li>Subscription flower programs & repeat orders</li>
                <li>Cart & checkout optimization</li>
                <li>Conversion rate optimization (CRO)</li>
              </ul>
            </div>

            {/* 4) SEO & PERFORMANCE */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Shopify SEO & Performance for Florists
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Local SEO for florist Shopify websites</li>
                <li>On-page SEO for bouquets & collections</li>
                <li>Core Web Vitals & speed optimization</li>
                <li>Structured data & search-friendly setup</li>
                <li>SEO audits & ongoing optimization</li>
              </ul>
            </div>

            {/* 5) CUSTOM DEVELOPMENT */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Custom Shopify Development for Florists
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Shopify & Shopify Plus development</li>
                <li>Custom sections for seasonal & occasion-based flowers</li>
                <li>Subscription, delivery date & cutoff-time logic</li>
                <li>Upsells, bundles & add-ons (cards, vases)</li>
                <li>Ongoing feature enhancements</li>
              </ul>
            </div>

            {/* 6) DEDICATED SUPPORT */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Dedicated Shopify Support for Florists
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Dedicated Shopify developer for florists</li>
                <li>Monthly support & maintenance</li>
                <li>Bug fixes, updates & seasonal changes</li>
                <li>Priority support during peak seasons</li>
                <li>Ongoing CRO & growth improvements</li>
                <li>Support for marketing & promotion campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
