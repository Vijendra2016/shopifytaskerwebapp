// components/CharleStyleSection.tsx
import Image from "next/image";
import Link from "next/link";
export default function CharleStyleSection() {
  return (
    <section className="bg-black text-white pt-50 pb-50  overflow-hidden">
      <div className=" mx-auto px-3 lg:px-12 grid lg:grid-cols-2 gap-8 items-center">

        {/* IMAGE STACK */}
        <div className="relative w-full h-[520px]">

          {/* Back image */}
          <div className="absolute left-0 top-0 w-[460px] h-[480px] rounded-[32px] overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp"
              alt="Shopify support service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Front image */}
          <div className="absolute left-[200px] top-[140px] w-[300px] h-[420px] rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp"
              alt="Shopify expert"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div>
          <p className="text-sm  font-light  tracking-widest text-[#ffffff99] mb-4">
            Common Shopify Problems We Solve
          </p>

          <h2 className="text-5xl font-light  text-white leading-tight mb-6">
            Fixing Issues Fast, Protecting Performance, and Keeping Stores
            Trading
          </h2>

          <p className="text-gray-300 leading-relaxed mb-5">
            Most Shopify and Shopify Plus stores face recurring issues as they
            scale. Apps introduce conflicts, theme updates create unexpected
            bugs, and small changes can have a disproportionate impact on
            functionality, user experience, and conversions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Our Shopify support and maintenance services are built to
            troubleshoot problems quickly, reduce disruption, and keep your
            store performing.
          </p>

          <Link
  href="/services/shopify-support"
  className="inline-flex items-center gap-3 bg-white text-black px-7 py-3 rounded-full font-medium hover:bg-gray-200 transition"
>
  Explore Support Services →
</Link>
        </div>
      </div>
    </section>
  );
}
