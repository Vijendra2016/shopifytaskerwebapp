import React from "react";
import { TfiAlignLeft, TfiClose, TfiArrowCircleRight } from "react-icons/tfi";

type Step = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const steps: Step[] = [
  {
    title: "1. Share Your Task",
    description:
      "Need a design tweak, a feature added, or a layout fixed? Just tell us what you're looking for — no task is too small or too big.",
    icon: <TfiAlignLeft className="w-6 h-6" />,
  },
  {
    title: "2. Get a Quote",
    description:
      "We’ll take a look and send you a fair, upfront quote. No hidden fees, no surprises. Just approve when you're ready.",
    icon: <TfiClose className="w-6 h-6" />,
  },
  {
    title: "3. Sit Back, We’ve Got It",
    description:
      "Our Shopify experts jump in and get it done — fast, clean, and exactly how you imagined.",
    icon: <TfiArrowCircleRight className="w-6 h-6" />,
  },
];

const ThreeStepProcess: React.FC = () => {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
