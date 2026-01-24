"use client";

import React, { useMemo, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
  title?: string;
  topLeftLabel?: string;
  topRightCta?: { label: string; href: string };
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function EyeIcon({ open }: { open: boolean }) {
  return (
    <span
      className={[
        "inline-flex h-7 w-7 items-center justify-center",
        "transition-transform duration-300 ease-out",
        open ? "rotate-180" : "rotate-0",
      ].join(" ")}
      aria-hidden="true"
    >
      {/* Simple “eye-ish” mark like the reference */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12c2.3-4.2 6-6.3 8-6.3S17.7 7.8 20 12c-2.3 4.2-6 6.3-8 6.3S6.3 16.2 4 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 12.2c.6 1.7 2 2.6 3.3 2.6 1.4 0 2.8-1 3.3-2.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function FaqBlacksmith({
  items,
  title = "FAQ - YOUR QUESTIONS",
  
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default first open

  const rows = useMemo(() => items ?? [], [items]);

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10">
        {/* Top bar 
        <div className="flex items-center justify-between text-xs font-semibold tracking-wide">
          <button
            className="uppercase hover:opacity-70"
            type="button"
            aria-label="Menu"
          >
            {topLeftLabel}
          </button>

          <a
            href={topRightCta.href}
            className="uppercase hover:opacity-70"
          >
            {topRightCta.label}
          </a>
        </div>
        (optional) */}

        {/* Big title */}
        <h1 className="mt-10 text-2xl font-semibold tracking-tight sm:text-2xl lg:text-5xl">
          {title}
        </h1>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-black/20" />

        {/* List */}
        <div className="divide-y divide-black/20">
          {rows.map((item, idx) => {
            const isOpen = openIndex === idx;
            const number = `(${pad2(idx + 1)})`;

            return (
              <div key={idx} className="py-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="grid w-full grid-cols-[80px_1fr_40px] items-center gap-4 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Left number */}
                  <div className="text-sm font-semibold tracking-wide">
                    {number}
                  </div>

                  {/* Question */}
                  <div className="text-sm font-semibold uppercase tracking-wide sm:text-base">
                    {item.question}
                  </div>

                  {/* Right icon */}
                  <div className="flex justify-end text-black/80">
                    <EyeIcon open={isOpen} />
                  </div>
                </button>

                {/* Answer (smooth expand) */}
                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-[80px] pr-10 text-sm leading-relaxed text-black/70 sm:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom divider like the reference */}
        <div className="h-px w-full bg-black/20" />
      </div>
    </section>
  );
}
