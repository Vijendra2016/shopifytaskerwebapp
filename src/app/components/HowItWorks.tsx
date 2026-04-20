"use client";

import React, { useState } from "react";
import { LuFilePen, LuClipboardCheck, LuBadgeCheck } from "react-icons/lu";
import StartProjectModal from "./StartProjectModal";

interface Step {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
  tag: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Share Your Task",
    description:
      "Click 'Start My Task' and describe what you need — from a quick tweak to a full custom build. You can also pick from our task catalogue.",
    detail: "We analyse your request and get back within a few hours.",
    icon: <LuFilePen size={28} />,
    tag: "Takes 2 minutes",
  },
  {
    number: "02",
    title: "Get a Clear Estimate",
    description:
      "We send you a transparent quote — scope, timeline, and price upfront. Once approved, we request store access and get to work.",
    detail: "No vague quotes, no hidden fees. Ever.",
    icon: <LuClipboardCheck size={28} />,
    tag: "No surprises",
  },
  {
    number: "03",
    title: "Get It Done — Risk Free",
    description:
      "We deliver the results for your review. Not satisfied? We revise until you are. You pay only after you're happy — zero upfront charges.",
    detail: "100% satisfaction guarantee on every task.",
    icon: <LuBadgeCheck size={28} />,
    tag: "Pay after delivery",
  },
];

const HowItWorks: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="bg-black text-white py-20 px-4 overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white mb-4">
                Process
              </span>
              <h2 className="text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.92] tracking-tight font-medium">
                How It Works
              </h2>
            </div>
            <p className="text-white/60 text-lg max-w-sm lg:text-right leading-relaxed">
              Three simple steps. Expert execution. Pay only when you&apos;re happy.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-black p-8 lg:p-10 flex flex-col gap-6 hover:bg-white/[0.03] transition-colors duration-300 relative group"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="text-[64px] leading-none  text-white font-medium tracking-tighter text-white/10 group-hover:text-white/20 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#31852f]/10 flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Tag */}
                <span className="inline-flex items-center w-fit text-xs font-semibold tracking-wide uppercase bg-white/5 text-white/50 px-3 py-1 rounded-full border border-white/10">
                  {step.tag}
                </span>

                {/* Title */}
                <h3 className="text-[26px] sm:text-[30px] leading-tight tracking-tight font-medium">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-[15px] leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Detail line */}
                <p className="text-[#31852f] text-sm font-medium border-t border-white/10 pt-5">
                  {step.detail}
                </p>

                {/* Step connector dot for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-[#31852f] z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
            <p className="text-white/50 text-base max-w-md text-center sm:text-left">
              Most tasks are completed within 24–72 hours. We handle everything — you stay focused on your business.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer inline-flex items-center gap-2  bg-white text-black px-8 py-4 text-sm font-normal tracking-wide uppercase hover:opacity-90 transition whitespace-nowrap"
            >
              Start My Task →
            </button>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default HowItWorks;
