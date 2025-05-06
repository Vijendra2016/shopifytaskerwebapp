import { Metadata } from "next";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import GeoMessage from "../components/GeoMessage";
export const metadata: Metadata = {
  title: "Shopify Theme Tweaks & Custom Fixes | Fast Edits by Experts",
  description:
    "Need quick Shopify theme changes? Get fast, affordable tweaks — layout edits, bug fixes, custom features & more. Trusted Shopify experts. Quick turnaround!",
};

export default function themetweak() {
  return (
    <main className="container mx-auto px-0 py-10 text-center pt-0">
        <section className="bg-black text-white py-16 px-4">
        <h1 className="text-3xl md:text-5xl text-white font-bold tracking-tight mb-4"> Need a Quick Fix? <br></br> We Tweak Shopify Themes Fast.</h1>

  <h2 className="text-2xl md:text-2xl text-white font-bold tracking-tight mb-4">From layout changes to custom features <br></br>we handle small tweaks and quick fixes to enhance your Shopify store.</h2>
        </section>
<TestimonialCardGrid/>
<GeoMessage/>
    </main>
  );
}
