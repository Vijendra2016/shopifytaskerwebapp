import { Metadata } from "next";
import MotionFadeIn from '../components/motion/MotionFadeIn';
import ClientTell from "../components/Clienttel";
import ThreeStepProcess from "../components/ThreeStepProcess"
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "About ShopifyTasker | Your Trusted Shopify Development Partner",
  description:
    "Learn more about ShopifyTasker, a trusted name in Shopify development. We help businesses build, customize, and scale their online stores effectively.",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-0">

<section className="w-full h-[300px] md:h-[500px] relative">
  <Image
    src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fc9f7e47c0d2d2a6db58c2_Frame_1__1_.png" // Replace with actual URL
    alt="Shopify Tasker Banner"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-3xl md:text-5xl font-bold">
      Get Your Shopify Tasks Done, Fast
    </h1>
    <p className="text-white text-base md:text-lg mt-4 max-w-xl">
      Design tweaks, custom features, or store setup — handled by pros.
    </p>
    <Link href="/create-task">
    <button className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
      Request a Quote
    </button>
    </Link>
  </div>
</section>

      <MotionFadeIn delay={0.2}>
      <h1 className="text-2xl md:text-6xl font-medium  pt-20">Custom Shopify Tweaks, Made Easy      </h1>

            </MotionFadeIn>

       
      

<br>
</br>
<p>With ShopifyTasker, getting expert help for your store is quick, clear, and stress-free.
</p>
<br>
</br>
      <p className="text-sm text-black mt-4">
      1. Share Your Task
Need a design tweak, a feature added, or a layout fixed? Just tell us what you re looking for — no task is too small or too big.

2. Get a Quote
We ll take a look and send you a fair, upfront quote. No hidden fees, no surprises. Just approve when youre ready.

3. Sit Back, We ve Got It
Our Shopify experts jump in and get it done — fast, clean, and exactly how you imagined.      </p>

<ThreeStepProcess />
 <ClientTell />
    </main>
  );
}
