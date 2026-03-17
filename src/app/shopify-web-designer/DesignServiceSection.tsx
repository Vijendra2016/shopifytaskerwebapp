import Image from "next/image";
import Link from "next/link";

export default function DesignServiceSection() {
  return (
    <section className="border-t border-white/[0.08] px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative h-[420px] md:h-[520px] overflow-hidden rounded-xl hidden lg:block">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/696dcbeb8d05bb84b09c39db_feature-3-1.webp"
            alt="Shopify support and maintenance service"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
            Shopify Support
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.1] tracking-tight text-white mb-6">
            Fixing Issues Fast and Keeping Your Store Trading
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] mb-5">
            Most Shopify stores encounter recurring issues as they grow — app
            conflicts, theme bugs after updates, and small changes that
            unexpectedly impact performance, user experience, and conversions.
          </p>
          <p className="text-[15px] text-white/60 leading-[1.7] mb-8">
            Our Shopify support and maintenance services are built to resolve
            problems quickly, minimise disruption, and keep your store
            performing at its best.
          </p>
          <Link
            href="/ongoing-support"
            className="inline-flex items-center gap-2 bg-white text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition"
          >
            Explore Support Services →
          </Link>
        </div>

      </div>
    </section>
  );
}
