// components/industry/Features.tsx
type FeaturesProps = {
  features: string[];
};

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h3 className="text-3xl font-semibold">What We Deliver</h3>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
