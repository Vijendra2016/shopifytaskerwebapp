import { Metadata } from "next";
import MotionFadeIn from '../components/motion/MotionFadeIn';
import ClientTell from "../components/Clienttel";
import ThreeStepProcess from "../components/ThreeStepProcess"
export const metadata: Metadata = {
  title: "About ShopifyTasker | Your Trusted Shopify Development Partner",
  description:
    "Learn more about ShopifyTasker, a trusted name in Shopify development. We help businesses build, customize, and scale their online stores effectively.",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
      <MotionFadeIn delay={0.2}>
      <h1 className="text-2xl md:text-6xl font-medium">Custom Shopify Tweaks, Made Easy      </h1>

            </MotionFadeIn>

       
      

<br>
</br>
<p>With ShopifyTasker, getting expert help for your store is quick, clear, and stress-free.
</p>
<br>
</br>
      <p className="text-lg text-gray-600 mt-4">
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
