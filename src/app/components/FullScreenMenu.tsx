"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

type MenuItem = {
  num: string; // "01"
  label: string;
  href: string;
};

export default function FullScreenMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const items: MenuItem[] = [
    { num: "01", label: "Home", href: "/" },
    { num: "02", label: "How it works", href: "/how-this-work" },
    { num: "03", label: "Services", href: "/shopify-expert-services" },
    { num: "04", label: "Contact", href: "/contact" },
  ];

  // ESC closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] transition",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={[
          "absolute inset-0 transition-transform duration-300 ease-out",
          open ? "scale-100" : "scale-[1.02]",
          "bg-[#DFF976] text-black", // neon-ish like Debuut (change if needed)
        ].join(" ")}
      />

      {/* Content */}
      <div className="relative h-full w-full">
        {/* Top bar */}
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="flex items-start justify-between">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6815f5f9c4f106f73030c696_file.svg"
                alt="CommerceTasker"
                width={160}
                height={40}
                className="h-auto w-[150px]"
              />
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-black hover:opacity-70 transition text-4xl leading-none"
            >
              ×
            </button>
          </div>

          {/* optional small meta row like Debuut */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-black/80">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-black" />
              <span>Shopify Experts Studio</span>
            </div>
            <div className="sm:text-center">
              <div className="font-medium text-black">Remote / Global</div>
              <div className="text-black/70">Fast Turnaround · Fixed Pricing</div>
            </div>
            <div className="sm:text-right">
              <div className="font-medium text-black">Available Q1 2026</div>
              <div className="text-black/70">Get 50% Price Cut</div>
            </div>
          </div>
        </div>

        {/* Big menu */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-10 sm:mt-14">
            <nav className="space-y-2 sm:space-y-3">
              {items.map((item) => (
                <Link
                  key={item.num}
                  href={item.href}
                  onClick={onClose}
                  className="group relative block"
                >
                  {/* number */}
                  <span className="absolute -left-1 sm:-left-10 top-3 sm:top-6 text-xl sm:text-2xl font-medium text-black/70">
                    {item.num}
                  </span>

                  {/* huge label */}
                  <span
                    className={[
                      "block font-black tracking-tight uppercase leading-[0.9]",
                      "text-[12vw] sm:text-[6.5vw] lg:text-[92px]",
                      "text-black",
                      "group-hover:opacity-70 transition",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="mx-auto max-w-7xl px-6 pb-6 pt-10">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-end sm:justify-between text-sm text-black/70">
              <div>© {new Date().getFullYear()} CommerceTasker</div>

              <div className="flex items-center gap-4">
                <a className="hover:text-black transition" href="#" target="_blank" rel="noreferrer">
                  IG
                </a>
                <a className="hover:text-black transition" href="#" target="_blank" rel="noreferrer">
                  IN
                </a>
                <a className="hover:text-black transition" href="#" target="_blank" rel="noreferrer">
                  FB
                </a>
                <a className="hover:text-black transition" href="#" target="_blank" rel="noreferrer">
                  BE
                </a>
              </div>

              <div className="flex items-center gap-6">
                <Link className="hover:text-black transition" href="/terms" onClick={onClose}>
                  Terms
                </Link>
                <Link className="hover:text-black transition" href="/privacy" onClick={onClose}>
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Click outside to close (optional) */}
        <button
          aria-label="Close menu overlay"
          onClick={onClose}
          className="absolute inset-0 -z-10"
        />
      </div>
    </div>
  );
}
