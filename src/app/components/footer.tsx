import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] text-sm text-black py-12 px-6">
      

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="footer-logo  pb-10">
        <Image
          className="dark:invert w-full h-auto"
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fbcdd5db493a47b8982ee6_Shopifytaskernewlogovidinew%20(1).png"
          alt="shopify developer in USA"
          width={200}
          height={30}
          priority
        />
      </div>
        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
        
          <h6 className="underline text-base md:text-1xl font-thin">About</h6>
          <Link href="/" className="underline">about us</Link>
          <Link href="/how-it-works">how it works</Link>
          <Link href="/experts">our expert</Link>
          <Link href="/customers">reviews</Link>
          <Link href="/pricing">pricing</Link>
          <Link href="/support">support</Link>
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
          <Link href="/expert-login">expert login</Link>
          <Link href="/partner-login">partner login</Link>
          <Link href="/customer-login">customer login</Link>
        </div>
         {/* Column 3 - Duplicate of Column 2 (you may want to change heading/content) */}
         <div className="flex flex-col space-y-2">
          <h6 className=" underline text-base font-thin">Headless Shopify Development</h6>
          <Link href="/become-expert">Shopify Hyrogen Store Setup</Link>
          <Link href="/partner">Shopify Headless Store Managment</Link>
          <Link href="/start-project">start a project</Link>
          <Link href="/reviews">public reviews</Link>
          <Link href="/expert-login">expert login</Link>
          <Link href="/partner-login">partner login</Link>
          <Link href="/customer-login">customer login</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className=" underline text-base font-thin">Headless Shopify Development</h6>
          <Link href="/become-expert">Shopify Hyrogen Store Setup</Link>
          <Link href="/partner">Shopify Headless Store Managment</Link>
          <Link href="/start-project">start a project</Link>
          <Link href="/reviews">public reviews</Link>
          <Link href="/expert-login">expert login</Link>
          <Link href="/partner-login">partner login</Link>
          <Link href="/customer-login">customer login</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h6 className=" underline text-base font-thin">Platform Migration</h6>
          <Link href="/become-expert">Wordpress to Shopify Migration</Link>
          <Link href="/partner">Salesfoce to Shopify Plus</Link>
          <Link href="/start-project">Squarespace to shopify</Link>
          <Link href="/reviews">Square to shopify</Link>
          <Link href="/expert-login">Maganto to Shopify</Link>
          <Link href="/partner-login">Nw</Link>
          <Link href="/customer-login">customer login</Link>
        </div>

        <div className="flex flex-col space-y-2">
          <h6 className=" text-xl md:text-lg text-base font-regular">Theme Customization & Update Service</h6>
          <Link href="/shopify-themes/impulse-customization-update">Impulse theme Customization & Update</Link>
          <Link href="/partner">Shopify Headless Store Managment</Link>
          <Link href="/start-project">start a project</Link>
          <Link href="/reviews">public reviews</Link>
          <Link href="/expert-login">expert login</Link>
          <Link href="/partner-login">partner login</Link>
          <Link href="/customer-login">customer login</Link>
        </div>
      </div>
    </footer>
  );
}
