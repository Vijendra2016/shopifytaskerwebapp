import { Metadata } from "next";
import Image from "next/image";


import GeoMessage from "@/app/components/GeoMessage";
export const metadata: Metadata = {
  title: "Hair Extension Shopify Web Design | Expert Shopify Developer ",
  description:
    "    Looking for Hair Extension Shopify web design? Hire a top-rated freelance Shopify developer to build beautiful, conversion-focused Shopify stores.",
};

export default function pricing() {
  return (
    <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-0">

      <section className="relative flex items-center justify-center h-[60vh] md:h-[100vh] overflow-hidden">
        {/* Background image (optimized by Next.js) */}
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68346a2ebbcad1aabc32d4c8_hair-extension-shopify-web-design.png" // put the file in /public/images
          alt="Hair extensions in different shades"
          fill             // makes the image new iamge cover the parent <section>
          sizes="100vw"     // tell Next how wide it can be
          style={{ objectFit: "cover" }}
          priority         // loads this image first
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-neutral-900/60" />

        {/* Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-normal text-white">
            We build beautiful <br>
            </br>hair extensions shopify websites
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            Professional hair extension Shopify web design—crafted by experts since 2015.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-2 pr-2 pl-2 lg:pr-20 lg:pl-20  md:pr-20 md:pl-20 pt-20 pb-20 text-black">
        <h2 className="text-3xl md:text-5xl font-regular"> Dedicated & experienced account manager and Shopify website designer for every Hair Extensions project .

</h2>
      
          <p className="text-black text-lg">
Enjoy a truly handson build experience: every Hair Extensions store we craft comes with a dedicated project manager who keeps timelines tight and communication clear, plus an expert Shopify designer who tailors the look, feel, and flow of your site to match your brand and boost conversions. 
        </p>
        <h3  className="text-3xl md:text-5xl font-regular">Best Hair extensions stores in Shopify</h3>
        <p className="text-black text-lg">we gether list  vidi of top best hair extension website new  build in shopify, thats we buid real store thats build on shopify</p>
       </section>
        
       <div className="container mx-auto px-4 py-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
     <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68345a773b1765fb446d4c2f_Luxy%20Hair%20Co.png"
                alt="hair for the life"
                
                width={1280}
                    height={680}
                    className="object-contain "
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Luxy Hair </h3>
            <p className="text-sm text-gray-500 mb-4">
           Luxy Hair is one of the highest-rated hair extension brands worldwide, known for its premium clip-in extensions. With a focus on quality and confidence-boosting transformations, Luxy Hair makes it easy to elevate your look at home.
            </p>
            <a
  href="https://www.luxyhair.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>

      </div>
       <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683454c1dbe3f9c518aa4e29_bellamihair.png" 
                    alt="Logo"
                    width={1280}
                    height={680}
                    className="object-contain "
                  /> 
            </div>
            <h3 className="text-lg font-semibold mb-2">BELLAMI Hair </h3>
            <p className="text-sm text-gray-500 mb-4">
             BELLAMI Hair is a leading hair extension brand trusted by professionals and celebrities alike. Known for its high-quality, ready-to-wear clip-in extensions in a wide range of shades, BELLAMI helps customers achieve salon-worthy length, volume, and style from home.


            </p>
            <a
  href="https://www.bellamihair.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>
      </div>

       <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6834617ab5a8e63228510d0d_Indique%20hair%20extension.png" 
                    alt="Indique Hair extension website in shopify"
                    width={1280}
                    height={680}
                    className="object-contain "
                  /> 
            </div>
            <h3 className="text-lg font-semibold mb-2">Indique </h3>
            <p className="text-sm text-gray-500 mb-4">

Indique is a globally recognized hair extension brand offering 100% virgin human hair of premium quality. With over 30 years of industry experience and a strong presence across the U.S. and worldwide, Indique delivers long-lasting, versatile hair trusted by professionals and clients alike.


            </p>
            <a
  href="https://www.indiquehair.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>
      </div>
      <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683462f26ade823d30e89d8b_The%20Hair%20Shop.png" 
                    alt="The Hair Shop website in shopify"
                    width={1280}
                    height={680}
                    className="object-contain "
                  /> 
            </div>
            <h3 className="text-lg font-semibold mb-2">The Hair Shop</h3>
            <p className="text-sm text-gray-500 mb-4">
The Hair Shop is a pioneer in hair extension innovation, founded by Ryan Tokko. Known for its diverse range of colors, lengths, and textures, the brand is trusted by professionals for its cutting-edge application methods and commitment to quality and inclusivity.



            </p>
            <a
  href="https://thehairshop.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>
      </div>
      <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683467157a2d98c3d28be4d0_SHE%20Hair%20Extensions.png" 
                    alt="SHE Hair Extensions  website in shopify"
                    width={1280}
                    height={680}
                    className="object-contain "
                  /> 
            </div>
            <h3 className="text-lg font-semibold mb-2">SHE Hair Extensions  </h3>
            <p className="text-sm text-gray-500 mb-4">
SHE Hair Extensions, born in Italy, has been crafting premium hair products for over 50 years. As a global leader, the brand is known for its ethically sourced, 100% Remy human hair extensions trusted by professionals worldwide.



            </p>
              <a
  href="https://shehairpro.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>
      </div>
      <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6834687e4cc99a40189bec5d_zalahair.png" 
                    alt="Logo"
                    width={1280}
                    height={680}
                    className="object-contain "
                  /> 
            </div>
            <h3 className="text-lg font-semibold mb-2"> Zala Hair </h3>
            <p className="text-sm text-gray-500 mb-4">
Zala Hair Extensions offers ethically sourced, 100% Remy human hair designed to blend seamlessly and style effortlessly. Known for quality and innovation, Zala was named Volumizing Product of the Year in 2023 by the Beauty Awards – a trusted choice for natural, fuller-looking hair.



            </p>
              <a
  href="https://zalahair.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>
      </div>

      </div>

      
      
</div>

           < GeoMessage/>


    </main>
  );
}
