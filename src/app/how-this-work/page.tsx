import { Metadata } from "next";
import MotionFadeIn from '../components/motion/MotionFadeIn';
import MotionTypewriter from "../components/motion/MotionWriting";

export const metadata: Metadata = {
  title: "About ShopifyTasker | Your Trusted Shopify Development Partner",
  description:
    "Learn more about ShopifyTasker, a trusted name in Shopify development. We help businesses build, customize, and scale their online stores effectively.",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
      <MotionFadeIn delay={0.2}>
      <h1 className="text-2xl md:text-6xl font-medium">Easy and Affordable way to hire shopify expert developers</h1>

            </MotionFadeIn>

       
      
<MotionTypewriter delay={0.5} speed={30} className="text-lg">
 <h1>Easy and Affordable way to hire shopify expert developers
 </h1>
</MotionTypewriter>
<br>
</br>
<br>
</br>
      <h2 className="text-2xl md:text-6xl font-medium">Who We Are      </h2>
      <p className="text-lg text-gray-600 mt-4">
      We are a team of experienced Shopify developers, designers, and eCommerce experts passionate about helping businesses succeed online. From small startups to established brands, we provide tailored Shopify solutions to bring your vision to life.
      </p>

    </main>
  );
}
