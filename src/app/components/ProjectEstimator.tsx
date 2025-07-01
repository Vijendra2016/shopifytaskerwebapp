"use client";

import { useState } from "react";

const steps = [
  {
    question: "What type of business are you?",
    options: ["Fashion", "Auto Parts", "CBD", "Other"],
    field: "businessType",
  },
  {
    question: "What features do you need?",
    options: ["Design", "Development", "SEO"],
    multi: true,
    field: "features",
  },
  {
    question: "What is your store size?",
    options: ["Small", "Medium", "Large"],
    field: "storeSize",
  },
  {
    question: "When do you need the project delivered?",
    options: ["In 1 week", "In 2-4 weeks", "In 1-2 months"],
    field: "timeline",
  },
];

export default function ProjectQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [result, setResult] = useState("");

  const handleSelect = (value: string) => {
    const currentStep = steps[step];
    if (currentStep.multi) {
      const prev = answers[currentStep.field] || [];
      const updated = prev.includes(value)
        ? prev.filter((v: string) => v !== value)
        : [...prev, value];
      setAnswers({ ...answers, [currentStep.field]: updated });
    } else {
      setAnswers({ ...answers, [currentStep.field]: value });
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const calculateEstimate = () => {
    let price = 300;
    if (answers.storeSize === "Medium") price += 200;
    if (answers.storeSize === "Large") price += 400;
    if (Array.isArray(answers.features))
      price += answers.features.length * 150;
    if (answers.timeline === "In 1 week") price += 200;

    const min = price;
    const max = price + 300;
    setResult(`Your estimated project cost: $${min} – $${max}`);
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      calculateEstimate();
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl mx-auto mt-10 text-center">
      {result ? (
        <div className="text-2xl font-bold text-green-700">{result}</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {steps[step].question}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {steps[step].options.map((option) => {
              const isSelected = steps[step].multi
                ? answers[steps[step].field]?.includes(option)
                : answers[steps[step].field] === option;
              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-6 py-2 rounded-full border font-medium ${
                    isSelected
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {steps[step].multi && (
            <button
              onClick={nextStep}
              className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
            >
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
}
