import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black  text-sm text-white py-12 px-6">
        <div className="flex justify-center mb-20">
      <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6815f5f9c4f106f73030c696_file.svg" // Replace with your actual image path
            alt="ShopifyTasker Logo"
            width={1200} // Adjust width as needed
            height={250} // Adjust height as needed
            className="h-auto"
          />
      
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       
        <div className="flex flex-col space-y-2">
        
          <h6 className="underline text-base md:text-1xl font-thin">About</h6>
          <Link href="/" className="underline">who we are</Link>
          <Link href="/how-this-work">how it works</Link>
          <Link href="/experts">our tech stack</Link>
          <Link href="https://www.trustpilot.com/review/shopifytasker.com" target="_blank">reviews</Link>
          <Link href="/pricing">pricing</Link>
          <Link href="/support">contact</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <h6 className=" underline text-base md:text-1xl font-thin">Our Services</h6>
          <Link href="#">store setup and development</Link>
          <Link href="/partner">Platform migration</Link>
          <Link href="/start-project">Custom app development</Link>
          <Link href="/reviews">Checkout extension Development</Link>
          <Link href="/expert-login">Retainer</Link>
          <Link href="/shopify-small-task">shopify small tasks</Link>

          
        </div>

        {/* Column 3 - Duplicate of Column 2 (you may want to change heading/content) */}
        <div className="flex flex-col space-y-2">
          <h6 className="underline text-base md:text-1xl font-thin">Small Task</h6>
          <Link href="/become-expert">Shopify Theme tweak</Link>
          <Link href="/partner">Shopify App Development</Link>
          <Link href="/start-project">Shopify Hydrogen</Link>
          <Link href="/reviews">public reviews</Link>
          
        </div>
         {/* Column 3 - Duplicate of Column 2 (you may want to change heading/content) */}
         <div className="flex flex-col space-y-2">
          <h6 className=" underline text-base font-thin">Headless Shopify Development</h6>
          <Link href="/become-expert">Shopify Hyrogen Store Setup</Link>
          <Link href="/partner">Shopify Headless Store Managment</Link>
          
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className=" underline text-base font-thin">Shopify Developer Near Me</h6>
          <Link href="/shopify-developer-near-me/newyork">New York City</Link>
          <Link href="/shopify-developer-near-me/los-angeles-ca">Los Angeles</Link>
          
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className=" underline text-base font-thin">Platform Migration</h6>
          <Link href="/become-expert">Wordpress to Shopify Migration</Link>
          <Link href="/partner">Salesfoce to Shopify Plus</Link>
          <Link href="/start-project">Squarespace to shopify</Link>
          <Link href="/reviews">Square to shopify</Link>
          <Link href="/expert-login">Maganto to Shopify</Link>
          
        </div>

        <div className="flex flex-col space-y-2">
          <h6 className=" text-xl md:text-lg text-base font-regular">Theme Customization & Update Service</h6>
          <Link href="/shopify-themes/impulse-customization-update">Impulse theme Customization & Update</Link>
          <Link href="/partner">Shopify Headless Store Managment</Link>
          <Link href="/start-project">start a project</Link>
          
        </div>

        <div className="flex flex-col space-y-2">
        <Link href="/industries" className="text-white text-lg font-medium hover:underline hover:decoration-teal-500 underline-offset-4 transition duration-200">Industries</Link>

          <Link href="/industries/hair-extension-shopify-web-design" className="text-white text-sm font-medium hover:underline hover:decoration-teal-500 underline-offset-4 transition duration-200">Hair Extensions</Link>
          <Link href="#">Gym & Fitness</Link>
          <Link href="#">Fashion</Link>
          <Link href="#">Health & Wellness</Link>

          
        </div>


      </div>
    </footer>
  );
}
