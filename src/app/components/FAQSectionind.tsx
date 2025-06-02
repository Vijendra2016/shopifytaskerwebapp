
import FAQItem from "./FAQItemindustry";

export type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}
