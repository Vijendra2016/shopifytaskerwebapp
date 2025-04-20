import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Create Task",
    description:
      "Click on 'Create Task' or 'Login' to submit your task with a full description. You can also choose from our task catalogue. We'll analyze it and get back to you within 2–3 hours.",
    image: "/how-it-works/step1.png",
  },
  {
    number: "02",
    title: "Get Estimation of your task",
    description:
      "After task submission, we’ll provide a quotation. Once approved, we’ll request store access and begin working on it.",
    image: "/how-it-works/step2.png",
  },
  {
    number: "03",
    title: "Assign Shopify expert on your Task",
    description:
      "Once approved, a Shopify expert will be assigned to your task and will update you regularly via the dashboard.",
    image: "/how-it-works/step3.png",
  },
  {
    number: "04",
    title: "Get work done",
    description:
      "After completion, we’ll send you the results. Not satisfied? We’ll revise it until you are. Pay only after you're happy — no upfront charges.",
    image: "/how-it-works/step4.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className="w-16 h-16 relative shrink-0">
              <Image
                src={step.image}
                alt={`Step ${step.number}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-4xl font-bold text-gray-200">{step.number}</p>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
