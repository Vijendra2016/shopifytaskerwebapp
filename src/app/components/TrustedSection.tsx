// components/TrustedSection.tsx
import Image from "next/image";

const logos = [
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "BossBabe" },
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "Stanford University" },
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "Female Entrepreneur Association" },
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "MIT" },
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "Project Life Mastery" },
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "Yale University" },
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "Chalene" },
  { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png", alt: "Foundr" },
  
];

const TrustedSection = () => {
  return (
    <section className="bg-teal-500 h-[600px] flex items-center text-center">

      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
          Trusted by over 500 customers worldwide.
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 sm:w-28 grayscale hover:grayscale-0 transition">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={112}
                height={40}
                className="mx-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <Image
            src="/trustpilot-logo.svg"
            alt="Trustpilot"
            width={120}
            height={24}
          />
          <Image
            src="/trustpilot-stars.png"
            alt="Trustpilot Rating"
            width={130}
            height={24}
          />
          <p className="text-sm text-gray-600">
            TrustScore <strong>4.8</strong> | 120+ reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
