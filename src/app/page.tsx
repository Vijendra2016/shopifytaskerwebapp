import Image from "next/image";
import HiringProcess from "./components/Hiringprocess"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-20 gap-8">
  <main className="flex flex-col gap-8 w-full text-center sm:text-left">
  <HiringProcess />
  <Image
  className="dark:invert w-full h-auto"
  src="https://dutchcargobike.com.au/cdn/shop/articles/Untitled_3000_x_2000_px-740510.png?v=1736760671&width=1500"
  alt="Next.js logo"
  width={1080}
  height={508}
  priority
/>

    <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight">
      ShopifyTasker
    </h1>

    <h2 className="text-xl sm:text-3xl font-medium tracking-tight">
      We are top-rated Shopify developers based in India
    </h2>

    <h3 className="text-lg sm:text-2xl font-medium text-yellow-500">
      Freelance hiring - <span className="text-green-800">fixed</span>
    </h3>

    <Image
  className="dark:invert w-full h-auto"
  src="https://dutchcargobike.com.au/cdn/shop/articles/Untitled_3000_x_2000_px-740510.png?v=1736760671&width=1500"
  alt="Next.js logo"
  width={1080}
  height={508}
  priority
/>

<Image
  className="dark:invert w-full h-auto"
  src="https://dutchcargobike.com.au/cdn/shop/articles/Untitled_3000_x_2000_px-740510.png?v=1736760671&width=1500"
  alt="Next.js logo"
  width={1080}
  height={508}
  priority
/>

<Image
  className="dark:invert w-full h-auto"
  src="https://dutchcargobike.com.au/cdn/shop/articles/Untitled_3000_x_2000_px-740510.png?v=1736760671&width=1500"
  alt="Next.js logo"
  width={1080}
  height={508}
  priority
/>
<Image
  className="dark:invert w-full h-auto"
  src="https://dutchcargobike.com.au/cdn/shop/articles/Untitled_3000_x_2000_px-740510.png?v=1736760671&width=1500"
  alt="Next.js logo"
  width={1080}
  height={508}
  priority
/>


    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <a
        className="w-full sm:w-auto px-5 py-3 bg-black text-white rounded-md text-center"
        href="#"
      >
        Deploy Now
      </a>
      <a
        className="w-full sm:w-auto px-5 py-3 border border-black rounded-md text-center"
        href="#"
      >
        Read Docs
      </a>
    </div>
  </main>

      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
