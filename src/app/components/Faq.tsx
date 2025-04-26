'use client';

import { useState } from 'react';
import { TfiAngleDown } from 'react-icons/tfi';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

interface FaqSectionsProps {
  sections: FAQSection[];
}

export default function FaqSections({ sections }: FaqSectionsProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="bg-[#faebd7] max-w-4xl mx-auto p-6 space-y-10 mb-20">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-2xl font-bold mb-6 ">{section.title}</h2>
          <div className="space-y-0 cursor-pointer">
            {section.items.map((item, itemIndex) => {
              const isOpen = openQuestion === item.question;
              return (
                <div key={itemIndex} className="border-b bg-white ">
                  <button
                    onClick={() => toggleQuestion(item.question)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <span className="text-lg font-semibold cursor-pointer">{item.question}</span>
                    <TfiAngleDown
                      className={`h-5 cursor-pointer w-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-600 text-left">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
