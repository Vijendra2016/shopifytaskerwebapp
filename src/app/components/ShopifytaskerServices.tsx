// components/ServicesSection.tsx
import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description:
      "We delve deep into understanding your target audience and competitive landscape. With this insight, we craft compelling brand stories, defining your values and messaging.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "User experience is at the heart of what we do in Rethink studio. Our UI/UX design services focus on creating intuitive, visually appealing interfaces that captivate users.",
  },
];

const ShopifytaskerServices: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-white text-black">
      {/* Scrolling title effect */}
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap text-6xl font-extrabold animate-marquee">
          <span className="mr-10">EXPERTISE</span>
          <span className="mr-10">EXPERTISE</span>
          <span className="mr-10">EXPERTISE</span>
        </div>
      </div>

      <div className="mt-12 space-y-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border-t pt-10"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl font-semibold">{service.id}.</div>
              <div className="text-2xl font-bold">{service.title}</div>
            </div>
            <div className="mt-4 md:mt-0 max-w-xl text-gray-500">
              {service.description}
            </div>
            <div className="mt-4 md:mt-0 md:ml-8 flex items-center justify-center w-16 h-16 rounded-full border border-gray-300">
              <TfiArrowTopRight className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopifytaskerServices;
