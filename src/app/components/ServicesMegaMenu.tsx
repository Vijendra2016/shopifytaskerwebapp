"use client";

import Link from "next/link";
import { useState } from "react";
import { TfiArrowRight } from "react-icons/tfi";

const categories = [
  {
    id: "design",
    label: "Design & Themes",
    services: [
      {
        icon: "ST",
        title: "Shopify Store Design",
        desc: "Custom stores built from scratch — brand-aligned, mobile-first, conversion-optimised.",
        href: "/shopify-store-design",
      },
      {
        icon: "TC",
        title: "Theme Customization",
        desc: "Custom Liquid sections, bespoke layouts and precise brand styling.",
        href: "/theme-customization",
      },
    ],
  },
  {
    id: "development",
    label: "Store Development",
    services: [
      {
        icon: "SD",
        title: "Shopify Store Development",
        desc: "Full end-to-end store builds — from blank canvas to launch-ready.",
        href: "/shopify-store-setup",
      },
      {
        icon: "SP",
        title: "Shopify Plus Tasks",
        desc: "Expert-level tasks for enterprise Shopify Plus stores.",
        href: "/shopify-expert-services",
      },
    ],
  },
  {
    id: "custom",
    label: "Custom Development",
    services: [
      {
        icon: "CD",
        title: "Custom Development",
        desc: "Private apps, API integrations, checkout logic and backend automations.",
        href: "/custom-development",
      },
      {
        icon: "H2",
        title: "Shopify Hydrogen",
        desc: "Headless storefronts built with Shopify's Hydrogen React framework.",
        href: "/shopify-expert-services",
      },
    ],
  },
  {
    id: "apps",
    label: "App & Integrations",
    services: [
      {
        icon: "AI",
        title: "App Integration",
        desc: "Connect your store with CRMs, ERPs, shipping and marketing platforms.",
        href: "/app-integration",
      },
      {
        icon: "AC",
        title: "App Configuration",
        desc: "Install, configure and troubleshoot third-party Shopify apps.",
        href: "/shopify-expert-services",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Growth",
    services: [
      {
        icon: "SE",
        title: "Shopify SEO",
        desc: "Technical SEO, Core Web Vitals, structured data and keyword strategy.",
        href: "/shopify-seo",
      },
      {
        icon: "SO",
        title: "Store Speed Optimisation",
        desc: "Page speed fixes that improve rankings and reduce bounce rates.",
        href: "/shopify-seo",
      },
    ],
  },
  {
    id: "support",
    label: "Support & Migration",
    services: [
      {
        icon: "OS",
        title: "Ongoing Support",
        desc: "Monthly retainer plans covering updates, fixes and new pages post-launch.",
        href: "/ongoing-support",
      },
      {
        icon: "PM",
        title: "Platform Migration",
        desc: "Seamless migrations from WooCommerce, Magento, BigCommerce and more.",
        href: "/shopify-expert-services",
      },
    ],
  },
];

interface ServicesMegaMenuProps {
  onClose: () => void;
  onOpenModal: () => void;
}

export default function ServicesMegaMenu({
  onClose,
  onOpenModal,
}: ServicesMegaMenuProps) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <div className="fixed top-14 left-0 right-0 bg-black border-t border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-50">
      <div className="max-w-7xl mx-auto flex">
        {/* Left — category sidebar */}
        <div className="w-52 border-r border-white/[0.08] py-5 flex-shrink-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveId(cat.id)}
              onClick={() => setActiveId(cat.id)}
              className={[
                "w-full text-left px-5 py-2.5 text-[13px] font-medium flex items-center gap-2.5 transition-colors cursor-pointer",
                activeId === cat.id
                  ? "text-[#DFF976] bg-white/[0.05]"
                  : "text-white/55 hover:text-white/90 hover:bg-white/[0.03]",
              ].join(" ")}
            >
              {activeId === cat.id ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFF976] flex-shrink-0" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-transparent flex-shrink-0" />
              )}
              {cat.label}
            </button>
          ))}

          <div className="mx-5 mt-4 pt-4 border-t border-white/[0.08]">
            <Link
              href="/shopify-expert-services"
              onClick={onClose}
              className="text-[12px] text-white/35 hover:text-white/60 transition flex items-center gap-1.5"
            >
              All services <TfiArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>

        {/* Centre — service cards */}
        <div className="flex-1 py-6 px-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 mb-5">
            {active.label}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {active.services.map((svc) => (
              <Link
                key={svc.href + svc.title}
                href={svc.href}
                onClick={onClose}
                className="group flex gap-3.5 p-4 rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition"
              >
                <div className="w-9 h-9 rounded-lg bg-[#DFF976]/[0.08] border border-[#DFF976]/[0.15] flex-shrink-0 flex items-center justify-center">
                  <span className="text-[#DFF976] text-[10px] font-bold tracking-wide">
                    {svc.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-white/90 group-hover:text-white transition leading-snug">
                    {svc.title}
                  </p>
                  <p className="text-[11.5px] text-white/40 mt-1 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — CTA panel */}
        <div className="w-60 bg-white flex-shrink-0 flex flex-col justify-between py-7 px-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-black/45 mb-3">
              Get Started
            </p>
            <h3 className="text-[17px] font-bold text-black leading-snug">
              Expert Shopify help, delivered fast.
            </h3>
            <p className="text-[12px] text-black/65 mt-3 leading-relaxed">
              Tell us what you need — design, dev, SEO or support. We&apos;ll handle the rest.
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenModal();
              }}
              className="w-full bg-black text-white text-[12px] font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer"
            >
              Get A Free Quote<TfiArrowRight />
            </button>
            <Link
              href="/shopify-expert-services"
              onClick={onClose}
              className="w-full border border-black/25 text-black text-[12px] font-medium py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-black/10 transition"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
