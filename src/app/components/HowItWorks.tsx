"use client";

import React from "react";
import Image from "next/image";


interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Share Your Task",
    description:
      "Click on 'Create Task'  to submit your task with a full description. You can also choose from our task catalogue. We'll analyze it and get back to you within few hours.",
  },
  {
    number: 2,
    title: "Get Estimation of your task",
    description:
      "After task submission, we provide a quotation. Once approved, we request store access and begin working on it.",
  },
  {
    number: 3,
    title: "Get work done",
    description:
      "After completion, we send you the results. Not satisfied? We revise it until you are. Pay only after you're happy — no upfront charges.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-6xl text-white font-bold tracking-tight mb-4"> ShopifyTasker work process</h1>
        <p className="text-lg text-white  tracking-tight  mb-16">
          Our process is simple 
        </p>

        <div className="grid grid-cols-5 gap-6 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="col-span-1 flex flex-col items-center text-center max-w-xs mx-auto">
                <div className="relative mb-6">
                  <Image
                    src="https://cdn.prod.website-files.com/6104b3a7e4a13d0c0b88c2db/6104b3a7e4a13d2abe88c2f4_Circle%20Wave%2001.svg"
                    alt="circle wave"
                    width={96}
                    height={96}
                    className="w-24 h-24"
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-8xl">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl tracking-tight  font-semibold mb-2">{step.title}</h3>
                <p className="text-sm tracking-tight ">{step.description}</p>
              </div>

              {/* Insert arrow after step 1 and 2 only */}
              {index < steps.length - 1 && (
                <div className="col-span-1 flex justify-center">
                  <Image
                    src={
                      index === 0
                        ? "https://cdn.prod.website-files.com/6104b3a7e4a13d0c0b88c2db/6104b3a7e4a13d58a488c2f3_Arrow%20Next.svg"
                        : "https://cdn.prod.website-files.com/6104b3a7e4a13d0c0b88c2db/6104b3a7e4a13d4bb388c2f5_Arrow%20Next%20Large.svg"
                    }
                    alt="arrow"
                    width={80}
                   height={20}
                    className="w-20 md:w-28"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
