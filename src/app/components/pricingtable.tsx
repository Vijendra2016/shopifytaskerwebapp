import React from "react";

const pricingPlans = [
  {
    title: "Ongoing SEO",
    price: "$3.5k+",
    per: "per month",
    features: [
      "Monthly reporting",
      "Transparent process",
      "Content driven",
      "Backlinks",
      "Crush the competition",
    ],
    buttonText: "Get a Quote",
    highlight: false,
    color: "bg-black text-white",
  },
  {
    title: "Paid Advertising",
    price: "$3.5k+",
    per: "per month",
    features: [
      "Monthly reporting",
      "Facebook",
      "Google",
      "Instagram",
      "Amazon",
      "+ More",
      "% Management Fee",
    ],
    buttonText: "Get a Quote",
    highlight: false,
    color: "bg-black text-white",
  },
  {
    title: "Basic Retainer",
    price: "$1.6k+",
    per: "per month",
    features: [
      "Design",
      "Development",
      "Marketing",
      "Site updates",
      "Email support",
      "10+ hours per month",
      "More hours = lower rate",
    ],
    buttonText: "Get a Quote",
    highlight: true,
    color: "bg-purple-600 text-white",
  },
  {
    title: "Premium Retainer",
    price: "$2.5k+",
    per: "per month",
    features: [
      "Premium design",
      "Best developers",
      "Marketing",
      "Faster site updates",
      "Email support",
      "Phone support",
      "Emergency guarantee",
      "15+ hours per month",
    ],
    buttonText: "Get a Quote",
    highlight: false,
    color: "bg-yellow-400 text-black",
  },
];

const PricingTable = () => {
  return (
    <div className="container mx-auto px-4 py-18">
      <div className="grid md:grid-cols-3 gap-18">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg shadow-lg ${
              plan.highlight ? "border-purple-500" : "border-gray-300"
            }`}
          >
            <div className={`text-lg font-bold py-2 px-4 ${plan.color} rounded-t-md`}>
              {plan.title}
            </div>
            <div className="text-3xl font-bold mt-4">{plan.price}</div>
            <p className="text-gray-500">{plan.per}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700 flex items-center">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
