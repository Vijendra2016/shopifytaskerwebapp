import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00246B] text-2xl text-white py-12 px-6">
      <div className="footer-logo w-full pb-20">
        <Image
          className="dark:invert w-full h-auto"
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fbc81c0276e79ad61c0764_whitebackgrond-Photoroom.png"
          alt="shopify developer in USA"
          width={1080}
          height={58}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
          <h6 className=" underline text-xl md:text-1xl font-thin">About</h6>
          <Link href="/" className="underline">about us</Link>
          <Link href="/how-it-works">how it works</Link>
          <Link href="/experts">our expert</Link>
          <Link href="/customers">reviews</Link>
          <Link href="/pricing">pricing</Link>
          <Link href="/support">support</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <h6 className=" underline text-xl md:text-1xl font-thin">Our Services</h6>
          <Link href="#">store setup and development</Link>
          <Link href="/partner">Platform migration</Link>
          <Link href="/start-project">Custom app development</Link>
          <Link href="/reviews">Checkout extension Development</Link>
          <Link href="/expert-login">Retainer</Link>
          <Link href="/shopify-small-task">shopify small tasks</Link>

          
        </div>

        {/* Column 3 - Duplicate of Column 2 (you may want to change heading/content) */}
        <div className="flex flex-col space-y-2">
          <h6 className="underline text-xl md:text-1xl font-thin">Small Task</h6>
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
          <h6 className=" underline text-3xl text-xl font-thin">Headless Shopify Development</h6>
          <Link href="/become-expert">Shopify Hyrogen Store Setup</Link>
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
