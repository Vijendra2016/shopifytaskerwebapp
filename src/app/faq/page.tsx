import { Metadata } from "next";
import GeoMessage from "../components/GeoMessage";
import FaqBlacksmith from "../components/FaqBlacksmith";


const faqItems = [
  {
    question: "Who is ShopifyTasker?",
    answer:
      "ShopifyTasker is an on-demand Shopify development partner providing professional Shopify services through a team of experienced and certified experts.",
  },
  {
    question: "Why should I trust the ShopifyTasker team?",
    answer:
      "ShopifyTasker currently manages over 250+ Shopify stores and provides ongoing services to clients worldwide. We follow the motto “Work is Worship” and focus on delivering every task to the highest standard. We also offer a no upfront payment policy—you only pay once the work is completed to your satisfaction. You can review client feedback on our reviews page.",
  },
  {
    question:
      "There are many freelancers and Shopify Partners—why choose ShopifyTasker?",
    answer:
      "While freelancers and Shopify Partners are available, many require full upfront payment before starting work. ShopifyTasker follows a no upfront payment policy, allowing you to pay only after the task is completed and approved.",
  },
  {
    question: "Does ShopifyTasker work with agencies?",
    answer:
      "Yes, ShopifyTasker works with agencies and provides white-label Shopify development and ongoing support services.",
  },
  {
    question: "Does ShopifyTasker work on weekends?",
    answer:
      "Yes, ShopifyTasker works on weekends for emergency or high-priority tasks when required.",
  },
  {
    question: "What services does ShopifyTasker offer?",
    answer:
      "ShopifyTasker provides Shopify design and development services including custom theme development, theme customization, store setup, product migration, small tweaks, custom pages, Shopify SEO, and digital marketing services.",
  },
  {
    question: "How do I create a project or task on ShopifyTasker?",
    answer:
      "You can create a task by submitting the Create Task form. Select the required services, describe your task, and provide your contact details. Our team will review your request and respond within 5 hours with a timeline and quotation.",
  },
  {
    question: "How many tasks can I create and how long do they take?",
    answer:
      "You can create multiple tasks or projects at once. The completion time depends on the task type and complexity and is clearly mentioned in your quotation.",
  },
  {
    question: "Does ShopifyTasker provide free support?",
    answer:
      "Yes, ShopifyTasker provides 15 days of free support for the specific task completed.",
  },
  {
    question: "How much do ShopifyTasker services cost?",
    answer:
      "ShopifyTasker pricing depends on the task or project. Some services have fixed pricing, and overall pricing starts from $20.",
  },
  {
    question: "Does ShopifyTasker charge upfront payment?",
    answer:
      "No. ShopifyTasker follows a strict no upfront payment policy—you pay only after the work is completed.",
  },
];


export const metadata: Metadata = {
  title: "ShopifyTasker FAQ | Shopify Development & Support Questions",
  description:
    "Find answers to common questions about ShopifyTasker services, pricing, turnaround time, payments, and support. Learn how our on-demand Shopify experts help grow your store.",
};



export default function faq() {
  return (
    <main className="bg-black mx-auto  py-0 text-center pt-20" >
        <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-tight  text-white">Frequently Asked Questions </h1>
      
<FaqBlacksmith
        items={faqItems}
        
      />

   
      <GeoMessage/> 

    
    </main>
  );
}
