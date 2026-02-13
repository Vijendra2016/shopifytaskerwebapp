'use client'

import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { TfiArrowTopRight } from 'react-icons/tfi';

const WhyShopifyTasker = () => {
  const [text] = useTypewriter({
    words: ['Fast Turnaround', 'Simplified Process', 'Proven Experts', 'Affordable Rates'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-20 max-w-7xl mx-auto">
      {/* Left: Text content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-lg sm:text-3XL font-semibold text-gray-800">
          Why ShopifyTasker –{' '}
          <span className="text-green-300">
            {text}
        
            <Cursor cursorStyle="|" />
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Inhouse Team of Shopify Developer & Expert, 10+ years Shopify custom development experience.
          Easy to use platform to hire a Shopify expert to solve your Shopify-related problems.
        </p>
        <a
          href="https://wa.me/+917014716631"
          target="_blank"
          className=" cursor-pointer inline-flex items-center bg-green-300 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400  transition"
        >
          Any Question? Contact Us by WhatsApp
          <TfiArrowTopRight className="ml-2" />
        </a>
      </div>

      {/* Right: Image */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6805e4d90c84d966fe2fda46_SHOPIFYTASKERTEAMNEWVIDI.png" // place your image in /public/images/
          alt="Why ShopifyTasker"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default WhyShopifyTasker
