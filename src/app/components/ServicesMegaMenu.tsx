"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TfiArrowRight } from "react-icons/tfi";

const BASE = "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/";

const categories = [
  {
    id: "design",
    label: "Design & Themes",
    services: [
      {
        title: "Shopify Store Design",
        desc: "Custom stores built from scratch — brand-aligned, mobile-first, conversion-optimised.",
        href: "/shopify-store-design",
        image: BASE + "69dccb71526cafe880af2c67_shopifyfashionwebsite.png",
      },
      {
        title: "Theme Customization",
        desc: "Custom Liquid sections, bespoke layouts and precise brand styling.",
        href: "/theme-customization",
        image: BASE + "6853aa2c855c81d9ecaa8a23_Shopify%20Theme%20Tweak.png",
      },
      {
        title: "Theme Customization with ai",
        desc: "Custom Liquid sections, bespoke layouts and precise brand styling.",
        href: "/theme-customization-1",
        image: BASE + "6853aa2c855c81d9ecaa8a23_Shopify%20Theme%20Tweak.png",
      },
      {
        title: "Theme Customization by expert",
        desc: "Custom Liquid sections, bespoke layouts and precise brand styling.",
        href: "/theme-customization",
        image: BASE + "6853aa2c855c81d9ecaa8a23_Shopify%20Theme%20Tweak.png",
      },
    ],
  },
  {
    id: "development",
    label: "Store Development",
    services: [
      {
        title: "Shopify Store Development",
        desc: "Full end-to-end store builds — from blank canvas to launch-ready.",
        href: "/shopify-store-setup",
        image: BASE + "6847bffadae7ca228106419b_shopify-web-developer.png",
      },
      {
        title: "Shopify Plus Tasks",
        desc: "Expert-level tasks for enterprise Shopify Plus stores.",
        href: "/shopify-expert-services",
        image: BASE + "6854f4aa336475111c2f40ed_Shopify%20plus%20%20expert%20%20developerteam.png",
      },
    ],
  },
  {
    id: "custom",
    label: "Custom Development",
    services: [
      {
        title: "Custom Development",
        desc: "Private apps, API integrations, checkout logic and backend automations.",
        href: "/custom-development",
        image: BASE + "6854f5ad2876b66d7e7d0938_Next%20js%20shopify%20development.png",
      },
      {
        title: "Shopify Hydrogen",
        desc: "Headless storefronts built with Shopify's Hydrogen React framework.",
        href: "/shopify-expert-services",
        image: BASE + "6854fa61c1f6a53457682591_Shopify%20Hydrogen%20Development.png",
      },
    ],
  },
  {
    id: "apps",
    label: "App & Integrations",
    services: [
      {
        title: "App Integration",
        desc: "Connect your store with CRMs, ERPs, shipping and marketing platforms.",
        href: "/app-integration",
        image: BASE + "6854f67d5e9cc865a78fe5c6_Klaviyo%20shopify%20development.png",
      },
      {
        title: "App Configuration",
        desc: "Install, configure and troubleshoot third-party Shopify apps.",
        href: "/shopify-expert-services",
        image: BASE + "6854f7721a7ab92f393b95e4_Rebuy%20shopify%20development.png",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Growth",
    services: [
      {
        title: "Shopify SEO",
        desc: "Technical SEO, Core Web Vitals, structured data and keyword strategy.",
        href: "/shopify-seo",
        image: BASE + "685927decaa7051a78a95b78_seo%20shopify%20va%20services.png",
      },
      {
        title: "Store Speed Optimisation",
        desc: "Page speed fixes that improve rankings and reduce bounce rates.",
        href: "/shopify-seo",
        image: BASE + "683fd721e974f858fdfc6121_shopify-small-task-by-shopify-expert.png",
      },
    ],
  },
  {
    id: "support",
    label: "Support & Migration",
    services: [
      {
        title: "Ongoing Support",
        desc: "Monthly retainer plans covering updates, fixes and new pages post-launch.",
        href: "/ongoing-support",
        image: BASE + "68183d299128df529d5bfa26_footernewimage.png",
      },
      {
        title: "Platform Migration",
        desc: "Seamless migrations from WooCommerce, Magento, BigCommerce and more.",
        href: "/shopify-expert-services",
        image: BASE + "696dcbeb8d05bb84b09c39db_feature-3-1.webp",
      },
    ],
  },
];

interface ServicesMegaMenuProps {
  onClose: () => void;
  onOpenModal: () => void;
}

export default function ServicesMegaMenu({ onClose, onOpenModal }: ServicesMegaMenuProps) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const active = categories.find((c) => c.id === activeId)!;
  const previewSvc = active.services[hoveredIdx] ?? active.services[0];

  const handleCategoryChange = (id: string) => {
    setActiveId(id);
    setHoveredIdx(0);
  };

  return (
    <div className="fixed top-14 left-0 right-0 bg-[#FAFAFA] border-t border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-50">
      <div className="max-w-19xl mx-auto flex min-h-[300px]">

        {/* ── Category sidebar ── */}
        <div className="w-52 border-r border-black/[0.08] py-6 flex-shrink-0 flex flex-col justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => handleCategoryChange(cat.id)}
              onClick={() => handleCategoryChange(cat.id)}
              className={[
                "w-full text-left px-5 py-2.5 text-[13px] font-medium flex items-center gap-2.5 transition-colors cursor-pointer",
                activeId === cat.id
                  ? "text-black bg-black/[0.05]"
                  : "text-black/45 hover:text-black hover:bg-black/[0.03]",
              ].join(" ")}
            >
              <span className={[
                "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-150",
                activeId === cat.id ? "bg-black" : "bg-black/15",
              ].join(" ")} />
              {cat.label}
            </button>
          ))}

          <div className="mx-5 mt-5 pt-4 border-t border-black/[0.08]">
            <Link
              href="/shopify-expert-services"
              onClick={onClose}
              className="text-[12px] text-black/35 hover:text-black/70 transition flex items-center gap-1.5"
            >
              All services <TfiArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>

        {/* ── Service list ── */}
        <div className="flex-1 flex flex-col justify-center px-7 py-6">
          <p className="text-[9px] uppercase tracking-[0.26em] text-black/90 mb-3">
            {active.label}
          </p>

          <div className="flex flex-col gap-0.5">
            {active.services.map((svc, i) => (
              <Link
                key={svc.href + svc.title}
                href={svc.href}
                onClick={onClose}
                onMouseEnter={() => setHoveredIdx(i)}
                className={[
                  "group flex items-start gap-3 px-3.5 py-3 rounded-lg transition-all duration-150 cursor-pointer",
                  hoveredIdx === i
                    ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
                    : "hover:bg-black/[0.025]",
                ].join(" ")}
              >
                {/* Animated left bar */}
                <div className="flex-shrink-0 flex flex-col items-center pt-[5px] self-stretch">
                  <span className={[
                    "w-px flex-1 rounded-full transition-colors duration-200",
                    hoveredIdx === i ? "bg-black" : "bg-black/10",
                  ].join(" ")} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className={[
                    "text-[13px] font-semibold leading-snug transition-colors duration-150",
                    hoveredIdx === i ? "text-black" : "text-black/60",
                  ].join(" ")}>
                    {svc.title}
                  </p>
                  <p className={[
                    "text-[11.5px] mt-0.5 leading-relaxed transition-all duration-150 overflow-hidden",
                    hoveredIdx === i
                      ? "text-black/45 max-h-12 opacity-100"
                      : "text-black/35 max-h-0 opacity-0",
                  ].join(" ")}>
                    {svc.desc}
                  </p>
                  <span className={[
                    "inline-flex items-center gap-1 text-[10.5px] font-medium transition-all duration-150",
                    hoveredIdx === i
                      ? "mt-1.5 opacity-100 text-black/50"
                      : "mt-0 opacity-0",
                  ].join(" ")}>
                    Learn more <TfiArrowRight className="text-[9px]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Image preview panel ── */}
        <div className="w-96 flex-shrink-0 relative my-4 mr-4 rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.14)]">
          {/* Crossfading images — all stacked, only active one visible */}
          {active.services.map((svc, i) => (
            <div
              key={svc.image + i}
              className={[
                "absolute inset-0 transition-opacity duration-300 ease-in-out",
                i === hoveredIdx ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover object-top"
                sizes="384px"
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

          {/* Title + CTA overlaid at bottom */}
          <div className="absolute bottom-0 inset-x-0 px-5 pb-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-1">
              {active.label}
            </p>
            <p className="text-white text-[14px] font-bold leading-snug">
              {previewSvc.title}
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <Link
                href={previewSvc.href}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1.5 rounded-full transition"
              >
                View service <TfiArrowRight className="text-[9px]" />
              </Link>
              <button
                onClick={() => { onClose(); onOpenModal(); }}
                className="inline-flex items-center gap-1.5 bg-white  hover:opacity-90 text-black text-[11px] font-semibold px-3 py-1.5 rounded-full transition cursor-pointer"
              >
                Get a Free Quote <TfiArrowRight className="text-[9px]" />
              </button>
            </div>
          </div>
        </div>

        {/* ── CTA panel ── */}
        <div className="w-90 bg-black flex-shrink-0 flex flex-col justify-between py-7 px-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Get Started
            </p>
            <h3 className="text-[17px] font-bold text-white leading-snug">
             Work with experienced Shopify Developer & Experts
            </h3>
            <p className="text-[12px] text-white/55 mt-3 leading-relaxed">
              From design to development and growth, we handle everything so you can focus on scaling your business.
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            <div className="flex justify-center">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680baca7a144a823c527edf7_shopifytasker-review.png"
                alt="Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { onClose(); onOpenModal(); }}
                className="w-full bg-white text-black text-[12px] font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer"
              >
                Get a Free Estimate <TfiArrowRight />
              </button>
              <Link
                href="/shopify-expert-services"
                onClick={onClose}
                className="w-full border border-white/20 text-white text-[12px] font-medium py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
