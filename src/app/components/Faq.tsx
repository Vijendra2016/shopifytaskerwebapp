import { useState } from 'react';
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi';

const faqs = [
  {
    question: 'What is Plex?',
    answer: 'Plex is a streaming media service that lets you watch free TV, movies, and more.',
  },
  {
    question: 'Is Plex really free?',
    answer: 'Yes! Plex offers a ton of free content. Some features may require a Plex Pass.',
  },
  {
    question: 'Where is Plex available?',
    answer: 'Plex is available worldwide, but content may vary by region.',
  },
  {
    question: 'Where can I watch Plex?',
    answer: 'You can watch Plex on smart TVs, mobile apps, web browsers, and streaming devices.',
  },
  {
    question: 'Do I need a Plex account?',
    answer: 'You can enjoy a lot of content without an account, but signing in gives more features.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container  min-h-[90vh] bg-black mx-auto px-4 py-18">
      <h2 className="text-3xl font-bold text-center mb-10">
        Question or two? Here’s an answer or two.
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#0e0e0e] rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold hover:bg-neutral-800 transition"
            >
              {faq.question}
              {openIndex === index ? <TfiAngleUp size={18} /> : <TfiAngleDown size={18} />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-neutral-300">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
