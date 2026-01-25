export default function CaseStudySection() {
  return (
    <section className="border-b border-black font-sans">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT BIG TITLE */}
          <h1 className="text-6xl font-bold tracking-tight">
         Shopify Health Wellness Website Design and development 
          </h1>

          {/* RIGHT ABOUT */}
          <div>
            <p className="text-sm uppercase tracking-widest mb-4">
              About
            </p>

            <p className="text-xl text-black leading-relaxed font-medium">
             
             We design and develop Shopify experiences specifically for Health & Wellness brands that want more than just a store. By combining strategy, clean and calming design, and conversion-driven development, we help wellness companies build trust, delight customers, and grow online revenue. From responsive mobile-first design to
              optimized product pages and seamless checkout, every store we build is crafted to increase engagement and sales.
            </p>
          </div>

        </div>

       
        

      </div>

      {/* DIVIDER */}
      <div className="border-t border-black"></div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* INDUSTRY */}
          <div>
            <p className="text-sm uppercase tracking-widest mb-3">
              Our services 
            </p>
            <p className="text-2xl font-semibold">
We help Health & Wellness brands grow with conversion-focused Shopify solutions
  </p>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2 grid grid-cols-2 gap-16">

            {/* STRATEGY */}
            <div>
              <h3 className="text-2xl font-semibold mb-5">strategy</h3>
              <ul className="space-y-2 text-lg">
                <li>Brand & Store Research</li>
                <li>Market & Competitor Analysis</li>
                <li>Conversion Strategy Planning</li>
                <li>Store Architecture & UX Planning</li>
                <li>Growth Roadmap Consulting</li>
              </ul>
            </div>

            {/* IDENTITY */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-5">identity</h3>
              <ul className="space-y-2  text-black text-lg">
  <li>Health & Wellness Brand Positioning</li>
  <li>Logo & Visual Identity Setup</li>
  <li>Typography & Color Systems</li>
  <li>Product & Lifestyle Visual Direction</li>
  <li>Brand Guidelines for Consistency</li>
</ul>

            </div>

            {/* EXPERIENCE */}
            <div>
              <h3 className="text-2xl  text-black font-semibold mb-5">experience</h3>
              <ul className="space-y-2 text-black  text-lg">
  <li>Mobile-First Store Design</li>
  <li>High-Converting Product Pages</li>
  <li>Smooth Checkout Experience</li>
  <li>Accessibility & Speed Optimization</li>
  <li>Trust & Credibility Building Elements</li>
</ul>

            </div>

            {/* TECHNOLOGY */}
            <div>
              <h3 className="text-2xl  text-black  font-semibold mb-5">technology</h3>
              <ul className="space-y-2  text-black  text-lg">
  <li>Shopify Store Development</li>
  <li>Custom Theme & Section Building</li>
  <li>App Integrations & Automation</li>
  <li>Subscription & Membership Setup</li>
  <li>Performance & SEO Optimization</li>
</ul>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
