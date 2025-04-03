import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
        <div className="footer-logo  w-full">
         <Image
          className="dark:invert w-full h-auto"
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ee05feb6ce7c89fe4deabf_blackgackground.png"
          alt="shopify developer in USA"
          width={1080}
          height={58}
          priority
        />
       </div>     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        

        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
          <Link href="/" className="underline">home</Link>
          <Link href="/how-it-works">how it works</Link>
          <Link href="/experts">our experts</Link>
          <Link href="/customers">our customers</Link>
          <Link href="/pricing">pricing</Link>
          <Link href="/support">support</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <Link href="/become-expert">become an expert</Link>
          <Link href="/partner">partner with us</Link>
          <Link href="/start-project">start a project</Link>
          <Link href="/reviews">public reviews</Link>
          <Link href="/expert-login">expert login</Link>
          <Link href="/partner-login">partner login</Link>
          <Link href="/customer-login">customer login</Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2">
          <Link href="/blog">blog</Link>
          <Link href="/capital">capital</Link>
          <Link href="/reports">reports</Link>
          <Link href="/friends">friends</Link>
          <Link href="/examples">examples</Link>
          <Link href="/dtc-experts">dtc experts</Link>
          <Link href="/agencies">for agencies</Link>
        </div>

        {/* Join Network Section */}
        <div className="text-right">
          <p className="italic text-lg">
            Are you a talented <br /> Shopify developer, <br /> designer, or marketer?
          </p>
          <div className="mt-2">
            <span className="block text-xl animate-bounce">⬇</span>
            <button className="mt-3 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              join the network
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-between mt-10">
        
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>

        
      </div>
      <div className="flex justify-center items-center m-screen text-center">
     
        
        
        
  <h1 className="text-2xl md:text-6xl font-thin italic " >
    #Your on-demand Shopify Developer 
  </h1>
  
        
  
</div>

    </footer>
  );
}
