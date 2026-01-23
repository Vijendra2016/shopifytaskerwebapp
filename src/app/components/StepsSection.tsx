"use client";

import Image from "next/image";
import { useState } from "react";
import StartProjectModal from "./StartProjectModal";

type Step = {
  num: string;
  title: string;
  shortintro: string;
};

export default function StepsSection() {
  const [showModal, setShowModal] = useState(false);

  const steps: Step[] = [
    {
      num: "01",
      title: "Share your Project/Task",
      shortintro:
        "Tell us what you need—anything from a quick tweak to advanced Shopify development.",
    },
    {
      num: "02",
      title: "Get a clear estimate",
      shortintro:
        "We’ll confirm scope, timeline, and cost upfront—no surprises, no vague quotes.",
    },
    {
      num: "03",
      title: "Get it done — risk free",
      shortintro:
        "Approve the result first, then pay. If it’s not right, we’ll fix it—guaranteed.",
    },
  ];

  const onOpenCreateTask = () => setShowModal(true);

  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col justify-between min-h-[420px]">
            <span>How it works</span>
            <h2 className="text-[56px] leading-[0.95] tracking-tight text-black font-medium sm:text-[56px] lg:text-[64px]">
              
              
             A Simple Process <br />
             Expert Execution

            </h2>

          
 
            <div className="mt-10 lg:mt-0 flex items-end">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67865042d66ac44a8aeb0074_testnewpage.png"
                alt="Illustration"
                width={700}
                height={250}
                className="w-full max-w-[520px] h-auto"
                priority
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between">
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-black max-w-xl">
              Running your business is hard enough — dealing with developers shouldn’t be. ShopifyTasker makes it easy with fast turnarounds, total control, and payment only when the job’s done right.

            </p>

            <div className="mt-10">
              <ul className="divide-y divide-black/40">
                {steps.map((s) => (
                  <li key={s.num} className="py-6">
                    <button
                      type="button"
                      onClick={onOpenCreateTask}
                      className="w-full text-left group"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-10 text-sm font-medium text-black/70 pt-2">
                          {s.num}
                        </div>

                        <div className="flex-1">
                          <div className="text-[28px] sm:text-[34px] leading-none tracking-tight font-medium group-hover:opacity-70 transition">
                            {s.title}
                          </div>

                          <div className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-black/75 max-w-xl">
                            {s.shortintro}
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="mt-10">
                <button
                  type="button"
                  onClick={onOpenCreateTask}
                  className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#DFF976] px-10 py-4 text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition"
                >
                 Get a Clear Estimate  →
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <StartProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
}
