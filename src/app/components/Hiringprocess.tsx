const steps = [
    {
      title: "Tell us what you need done",
      description: "Projects and retainers big and small. Kick off your first project in under 3 min.",
    },
    {
      title: "We introduce you to the right person",
      description: "Often within a few hours, we’ll introduce you to freelancers who will be a great fit.",
    },
    {
      title: "Hire, pay, collaborate, continue",
      description: "Access an entire network of freelance talent and a seamless process end to end.",
    },
  ];
  
  export default function HiringProcess() {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-semibold italic mb-8">
          Freelance hiring - <span className="font-normal">fixed</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((step, index) => (
            <div key={index}>
              <span className="text-lg font-semibold">{index + 1}.</span>
              <h3 className="text-xl font-bold mt-2">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  