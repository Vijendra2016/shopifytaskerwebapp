"use client"

import { useState } from 'react';
import { TfiPlus, TfiMinus } from 'react-icons/tfi';

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left cursor-pointer"
      >
        <span className="text-3xl font-medium">{question}</span>
        <span className="bg-black text-white rounded-full w-8 h-8 flex items-center cursor-pointer justify-center">
          {isOpen ? <TfiMinus size={14} /> : <TfiPlus size={14} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-xl text-gray-600 text-sm transition-all  text-left  duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}
