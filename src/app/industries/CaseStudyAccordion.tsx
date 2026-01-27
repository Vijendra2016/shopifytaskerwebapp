export default function CaseStudySection() {
  return (
    <section className="border-b border-black font-sans text-black">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT BIG TITLE */}
          <h2 className="text-3xl md:text-4xl text-black font-bold tracking-tight">
            Custom Shopify Stores for Health & Wellness Brands that Convert & Retain Customers
          </h2>

          {/* RIGHT ABOUT */}
          <div>
            <p className="text-sm uppercase tracking-widest mb-4">what we do</p>

            <p className="text-xl text-black leading-relaxed font-medium">
              We design and develop Shopify experiences specifically for Health & Wellness brands that want more than just a store.
              By combining strategy, clean and calming design, and conversion-driven development, we help wellness companies build
              trust, delight customers, and grow online revenue. From responsive mobile-first design to optimized product pages and
              seamless checkout, every store we build is crafted to increase engagement and sales.
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
            <p className="text-sm text-black uppercase tracking-widest mb-3">Our services</p>

            <h2 className="text-2xl text-black font-semibold">
              Conversion-focused Shopify services for Health & Wellness brands
            </h2>

            <p className="text-lg max-w-3xl mt-4">
              Whether you’re launching a new brand, upgrading an existing store, or migrating to Shopify — we design, develop, and
              optimize Shopify experiences that build trust, increase repeat revenue, and scale with your growth.
            </p>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-16">
            {/* 1) SETUP & LAUNCH */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Health & Wellness Shopify Setup & Launch
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Shopify store setup for Health & Wellness brands (end-to-end)</li>
                <li>Theme setup & conversion-focused customization</li>
                <li>Payments, shipping & tax configuration</li>
                <li>Essential app setup (reviews, email, subscriptions)</li>
                <li>Launch checklist, QA & handover</li>
              </ul>
            </div>

            {/* 2) MIGRATION */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-5">
                Health & Wellness Brands Shopify Migration
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Migration for Health & Wellness brands</li>
                <li>Migration from WooCommerce, Magento & custom platforms</li>
                <li>SEO-safe redirects (301s) & URL mapping</li>
                <li>Theme rebuild + UX improvements during migration</li>
                <li>Post-migration QA & support</li>
              </ul>
            </div>

            {/* 3) REDESIGN & CRO */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Health & Wellness Brands Shopify Redesign & CRO
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Shopify website redesign for Health & Wellness brands</li>
                <li>High-converting product pages & funnels</li>
                <li>Subscription & replenishment experience</li>
                <li>Cart & checkout optimization</li>
                <li>Conversion rate optimization (CRO)</li>
              </ul>
            </div>

            {/* 4) SEO & PERFORMANCE */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Shopify Website SEO & Performance for Health & Wellness Brands
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>SEO optimization for Health & Wellness Shopify websites</li>
                <li>On-page SEO for collections & products</li>
                <li>Core Web Vitals & speed optimization</li>
                <li>Structured data & search-friendly setup</li>
                <li>SEO audits + monthly optimization</li>
              </ul>
            </div>

            {/* 5) CUSTOM DEVELOPMENT */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Custom Shopify Development for Health & Wellness Brands
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Shopify & Shopify Plus development</li>
                <li>Custom theme & section building for Health & Wellness brands</li>
                <li>App integrations & store automation</li>
                <li>Custom bundles, upsells & promotions</li>
                <li>Ongoing feature enhancements</li>
              </ul>
            </div>

            {/* 6) DEDICATED SUPPORT */}
            <div>
              <h3 className="text-xl text-black font-semibold mb-5">
                Dedicated Shopify Developer for Health & Wellness Brands
              </h3>
              <ul className="space-y-2 text-black text-sm">
                <li>Dedicated Shopify developer (monthly)</li>
                <li>Monthly support for Health & Wellness Shopify websites</li>
                <li>Bug fixes, updates & maintenance</li>
                <li>Priority support & faster turnarounds</li>
                <li>Ongoing CRO + growth improvements</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
