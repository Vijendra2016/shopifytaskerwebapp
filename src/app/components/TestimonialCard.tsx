import React from 'react';
import Image from 'next/image';
import { TfiArrowTopRight } from "react-icons/tfi";


const TestimonialCard = () => {
  return (
    <div className="bg-black min-h-auto flex items-center justify-center p-6">
      <div className="bg-teal-500 rounded-3xl   border  border-black flex flex-col md:flex-row items-center p-8 shadow-xl max-w-4xl w-full gap-8">
        
        <Image           className="w-48 h-48 rounded-full object-cover border-2 border-cyan-400"

                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6800863ad16a29c277021afe_1678553503844.jpeg"
                      alt="Shopify Development"
                      width={500}
                      height={500}
                      priority
                    />
        <div className="text-center md:text-left">
          <p className="text-xl font-light text-gray-900 mb-4">
            “Excellent communication and dedication to the timeline- even over a holiday! Shopifytasker did a great job from migration our website from Squarespace to shopify- going beyound expectations. Highly recommend!”
          </p>
          <p className="text-lg font-semibold text-black">Lou Childs</p>
          <p className="text-md text-black">COO at SlumberPod</p>
          <Image           

                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68008a90a4c1bef400fc2c2b_image%20(2).png"
                      alt="Shopify Development"
                      width={250}
                      height={100}
                      priority
                    />
                    <a
      href="https://www.slumberpod.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center bg-pink-300 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-400 transition"
    >
      slubmberpod.com
      <TfiArrowTopRight className="ml-2" />
    </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;