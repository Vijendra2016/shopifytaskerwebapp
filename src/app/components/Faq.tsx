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
    <div className="pr-2 pl-2 lg:pr-20 lg:pl-20  md:pr-20 md:pl-20 pt-20 pb-20  bg-black text-white">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-5xl tracking-tight font-bold mb-6 pt-10 ">{section.title}</h2>
          <div className="space-y-0 cursor-pointer">
            {section.items.map((item, itemIndex) => {
              const isOpen = openQuestion === item.question;
              return (
                <div key={itemIndex} className="border-t border-cyan-400 bg-black ">
                  <button
                    onClick={() => toggleQuestion(item.question)}
                    className="w-full flex cursor-pointer justify-between items-center p-4 text-left"
                  >
                    <span className="text-3xl  tracking-tight text-white font-semibold cursor-pointer">{item.question}</span>
                    <TfiAngleDown
                      className={`h-5 cursor-pointer text-white  w-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-white text-lg text-left">
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
