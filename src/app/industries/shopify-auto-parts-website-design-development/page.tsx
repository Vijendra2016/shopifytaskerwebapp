import { Metadata } from "next";
import Image from "next/image";
import FAQSection , { FAQ }  from "@/app/components/FAQSectionind";


import GeoMessage from "@/app/components/GeoMessage";
export const metadata: Metadata = {
  title: "Shopify auto parts website Design & Development| Expert Shopify Developer ",
  description: 
    " Looking Shopify expert for design and development Shopify auto parts website? Hire a top-rated freelance Shopify developer to build beautiful, conversion-focused Shopify stores.",
};


const wigFaqs: FAQ[] = [
  {
    question: 'What services you provide for Auto Parts business ',
    answer: 'We provide Shopify auto parts website design and devlopment , store managment , Shopify auto parts website support, SEO, Digital marketing'
  },
  {
    question: 'What your process',
    answer: 'Tell us what you need from our side we can do all type of shopify related web development app development on best prices.'
  },
  {
    question: 'Do you provide monthly shopify website support',
    answer: 'Yes, we provide the shopify website monthly support like custom code and development , store handle and managment , SEO.'
  }
];
export default function pricing() {
  return (
    <main className="container bg-[#fefdf9] mx-auto px-0 py-0 text-center pt-0">

      <section className="relative flex items-center justify-center h-[60vh] md:h-[100vh] overflow-hidden">
        {/* Background image (optimized by Next.js) */}
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683d95669924f9c4127e8ebb_shopify%20auto%20part%20website%20development.png" // put the file in /public/images
          alt="CDB website in Shopify "
          fill             // makes the image cover the parent <section>
          sizes="100vw"     // tell Next how wide it can be
          style={{ objectFit: "cover" }}
          priority         // loads this image first
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-normal text-white">
            We Build High-Performance Shopify Auto Parts Websites

          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            Professional Shopify auto parts website  design—crafted by shopify experts and developers since 2015.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-2 pr-2 pl-2 lg:pr-20 lg:pl-20  md:pr-20 md:pl-20 pt-20 pb-20 text-black">
        <h2 className="text-3xl md:text-5xl font-regular">
            We provide Shopify auto parts website design and development Service
</h2>
      
          <p className="text-black text-lg">

Our expert Shopify developers and designers specialize in creating custom Shopify auto parts websites that are both powerful and easy to navigate. With a mobile-first approach, we ensure your store is responsive, fast, and optimized for conversions. From product listings to checkout, we design every detail to drive sales and deliver a seamless shopping experience for your customers.         
        </p>


        <h3  className="text-3xl md:text-5xl font-regular">Best auto parts store in Shopify</h3>
        <p className="text-black text-lg">we gether list of top best auto part website build in shopify</p>
       </section>

         
        
       <div className="container mx-auto px-4 py-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
     <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683d9cc7185b2a8d1e4cef1d_Lasfit%20shopify%20auto%20part%20website.png"
                alt="auto parts  website example in shopify"
                
                width={1280}
                    height={680}
                    className="object-contain "
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lasfit </h3>
            <p className="text-sm text-gray-500 mb-4">
Lasfit is a leading automotive parts and accessories brand, established in 2015. Known for combining quality, value, and innovation, Lasfit® offers high-performance products at competitive prices—backed by exceptional customer service and expert technical support.            </p>
            <a
  href="https://www.lasfit.com/"
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
                    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683d9df9daa49aa9fc70f05d_Kies%20shopify%20auto%20part%20website.png" 
                    alt="auto parts  shopify website"
                    width={1280}
                    height={680}
                    className="object-contain "
                  /> 
            </div>
            <h3 className="text-lg font-semibold mb-2">Kies Motorsports</h3>
            <p className="text-sm text-gray-500 mb-4">

Kies Motorsports is a premier automotive performance and styling brand specializing in BMW upgrades and accessories. Known for high-quality parts, expert installation guides, and outstanding customer support, Kies Motorsports helps enthusiasts transform their vehicles with confidence and precision.
            </p>
            <a
  href="https://www.kiesmotorsports.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>
      </div>

       
      
      
      </div>

      
      
</div>

 <h3 className="text-3xl pt-20  font-semibold mb-2"> Most common Question regarding <br></br> Shopify auto parts  website design & Develoment </h3>
    <FAQSection faqs={wigFaqs} />

           < GeoMessage/>


    </main>
  );
}
