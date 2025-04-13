import { Metadata } from "next";
import MotionTypewriter from "../components/motion/MotionWriting";
export const metadata: Metadata = {
  title: "shopify small tasks by shopify expert | Top Rated Developer",
  description:
    "shopify experts small tasks",
};

export default function smallTask() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
        
        <MotionTypewriter delay={0.5} speed={30} className="text-lg">
        <h1 className="text-3xl md:text-6xl font-regular">We are shopify experts small tasks    </h1>

        </MotionTypewriter>
    <p>We are top rate shopify developer based in udaipur rajsthan</p>



    </main>
  );
}

