import { Metadata } from "next";
import Image from "next/image";
import FAQSection , { FAQ }  from "@/app/components/FAQSectionind";


import GeoMessage from "@/app/components/GeoMessage";
export const metadata: Metadata = {
  title: "CDB Shopify Web Design | Expert Shopify Developer ",
  description:
    " Looking for CDB Shopify web design? Hire a top-rated freelance Shopify developer to build beautiful, conversion-focused Shopify stores.",
};


const wigFaqs: FAQ[] = [
  {
    question: 'What services you provide for CDB business ',
    answer: 'We provide shopify cdb store design and devlopment , store managment , shopify cdb shopify website support, SEO, Digital marketing'
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
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683d4430f86ca7daba4fbd8c_cbd-shopify-website-design.png" // put the file in /public/images
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
            We build design & develop  <br>
            </br>CBD shopify websites
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            Professional CBD Shopify web design—crafted by experts since 2015.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-2 pr-2 pl-2 lg:pr-20 lg:pl-20  md:pr-20 md:pl-20 pt-20 pb-20 text-black">
        <h2 className="text-3xl md:text-5xl font-regular">
            We provide CBD shopify website design and development Service
</h2>
      
          <p className="text-black text-lg">
        Our Shopify developer and designer will design and develop a CBD product-selling website on Shopify that is unique and easy for your customers to navigate. We focus on a mobile-first approach to create a responsive CBD Shopify store that is optimized for sales
         
        </p>


        <h3  className="text-3xl md:text-5xl font-regular">Best CBD store in Shopify</h3>
        <p className="text-black text-lg">we gether list of top best CBD website build in shopify</p>
       </section>

         
        
       <div className="container mx-auto px-4 py-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
     <div className="bg-white  shadow p-2 hover:shadow-lg transition-all">
            <div className="relative w-full h-108 mb-4 rounded-md overflow-hidden">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683d8727cc862905567b0411_cdb-shopify-website-example.jpg"
                alt="cdb website in shopify"
                
                width={1280}
                    height={680}
                    className="object-contain "
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sagely Naturals </h3>
            <p className="text-sm text-gray-500 mb-4">
             Sagely Naturals is a wellness brand that offers high-quality, CBD-infused products designed to support everyday health, balance, and relief. Their products are made with plant-based ingredients and are formulated to be safe, effective, and easy to use.
            </p>
            <a
  href="https://sagelynaturals.com/"
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
                    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/683d8935d5d5038028a8e5c3_be-you-cdb-shopify-website.png" 
                    alt="Be you cdb shopify website"
                    width={1280}
                    height={680}
                    className="object-contain "
                  /> 
            </div>
            <h3 className="text-lg font-semibold mb-2">BeYou </h3>
            <p className="text-sm text-gray-500 mb-4">
             BeYou is a UK-based CBD brand committed to transparency, quality, and trust. With a focus on zero-THC products, BeYou is trusted by Olympic athletes and everyday users alike.

            </p>
            <a
  href="https://beyoucbd.co.uk/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500  transition"
>
  Visit Website
</a>
      </div>

       
      
      
      </div>

      
      
</div>

 <h3 className="text-3xl pt-20  font-semibold mb-2"> Most common Question regarding <br></br> CDB shopify website Develoment </h3>
    <FAQSection faqs={wigFaqs} />

           < GeoMessage/>


    </main>
  );
}
