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
  title: "ShopifyTasker Reviews",
  description:
    "ShopifyTasker Reviews based developer",
};

const faqSections = [
    {
      title: "General Questions",
      items: [
        {
          question: "Who is ShopifyTasker?",
          answer: "ShopifyTasker is your trusted on-demand Shopify development partner, offering professional Shopify services delivered by a team of experienced and certified experts.",
        },
        {
          question: "Why should I trust on ShopifyTasker Team?",
          answer: "At ShopifyTasker, we currently manage over 250+ Shopify stores and consistently provide ongoing services to our clients. We believe in the motto “Work is Worship,” which is why our experienced and professional team of Shopify experts and developers work hard to deliver each task to the highest standard.Another reason to trust us? We dont ask for any upfront payment—you only pay once the work is completed to your satisfaction.You can also check out our [reviews page] to see what our clients say about our services.So go ahead, create your first task on ShopifyTasker and experience the difference.",
        },
        {
            question: "There are plenty of freelancers and Shopify Partners out there—why should I choose ShopifyTask over the rest?",
            answer:"Yes, you absolutely have the option to go with freelancers or Shopify Partners. However, many of our competitors—including freelancers—typically require full upfront payment before any work begins. At ShopifyTasker, we believe in earning your trust first. That’s why we proudly offer a 'No Upfront Payment' policy—you only pay once the work is completed to your satisfaction",
        },
        {
            question:"Does ShopifyTasker work with agencies?",
            answer:"Yes, ShopifyTasker is work with different agencies.",

        },
        {
            question:"Does ShopifyTasker work on the weekends?",
            answer:"Yes, ShopifyTasker work on weekend but only when the task is created on emergency bases.",

        },
        
      ],
    },
    {
      title: "ShopifyTasker Services & how its work",
      items: [
        {
          question: "What services are offer by ShopifyTasker?",
          answer: "ShopifyTasker offers various services like, Shopify web development & designing, theme customization, E-commerce store products migration from various platforms to shopify, Shopify small tweaks, Setup shopify store, create custom page & digital marketing , shopify SEO.",
        },
        

          {
            question: "How a project/task will be created on ShopifyTasker?",
            answer :"Just create your project or task using the Create Task form. Select the services you need from us, provide a brief description of your project or task, and include your name and email. We get back to you within 5 hours. After analyzing your request, we will share a timeframe and quotation. Once you approve, we will begin working on your project or task."

          },
          {
            question: "How many tasks can I create at once and how much time it will take on completion",
            answer: "You can create as many tasks/project as you can on ShopifyTasker but time limit of each task completion is based on project/task type. The time limit of each task is mention in your task quotation.",
          },

          {
            question: "Is ShopifyTasker providing free support service?",
            answer: "Yes, ShopifyTasker is providing 15 days support service for the particular task you have created.",
          },

      ],
    },
    {
        title: "ShopifyTasker service cost & payment methods",
        items: [
          {
            question: "ShopifyTasker service cost & payment methods",
            answer: "ShopifyTasker service cost is based on task you created and also some of the tasks have their own fixed cost but our service cost is started from $20.",
          },

          {
           question:"Is ShopifyTasker charge upfront payment for each task?",
           answer:"No, ShopifyTasker says “No upfront payment, Pay after works get done”.",
          },
        ],
      },
  ];

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
