

import Hero from "../Hero";
import Intro from "../Intro";
import ImageGallery from "../ImageGallery";
import SplitSection from "../SplitSection";
import Features from "../Features";
import CaseStudyAccordion from "../CaseStudyAccordion";
import { Metadata } from "next";
import GeoMessage from "@/app/components/GeoMessage";
import BrandShowcase from "../BrandShowcase";
import BrandEditorial from "../BrandEditorial";
import { healthEditorialBrands } from "../data/healthEditorialBrands";
export const metadata: Metadata = {
  title: "Health & Wellness Shopify Store Design, Redesign & Migration",
  description: 
    "Launch, redesign or migrate your health & wellness Shopify store. Expert Shopify design, development, subscriptions and monthly support.",
};




export default function IndustryPage() {
  return (
    <>
      <Hero
        title="Health & Wellness Shopify Website Design & Development | ShopifyTasker"
        subtitle="High-performance eCommerce solutions for Health Wellness brands"
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6975a2fbcd94a67b75206290_glenna-haug-DuNXXPScbJM-unsplash.jpg"
      />

<CaseStudyAccordion/>

      <Intro
        heading="Driving Growth for Health Wellness Stores"
        text="We create fast, conversion-focused Shopify experiences for Health Wellness businesses."
      />

      <ImageGallery
        images={[
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69759cf5d41af8667e35d0fc_poko-skincare-fJ0fQhYEHAE-unsplash%20(1).jpg",
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69759cf5d41af8667e35d0fc_poko-skincare-fJ0fQhYEHAE-unsplash%20(1).jpg",
          "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69759cf5d41af8667e35d0fc_poko-skincare-fJ0fQhYEHAE-unsplash%20(1).jpg",
        ]}
      />

      <SplitSection
        title="Built for Performance"
        text="Lightning-fast storefronts optimized for SEO, CRO and mobile."
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg"
      />

      <Features
        features={[
          "Custom Shopify Theme",
          "SEO-Optimized Structure",
          "Mobile-First Design",
          "Conversion Focused UX",
          "App Integrations",
          "Ongoing Support",
        ]}
      />

      <BrandShowcase
  brands={[
    {
      name: "Huel",
      url: "https://huel.com",
      image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg",
      description: "Nutrition-first meal replacement brand.",
      features: ["Subscriptions", "Ingredient transparency"],
    },
    {
      name: "Ritual",
      url: "https://ritual.com",
      image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg",
      description: "Vitamin brand with storytelling.",
      features: ["Minimal design", "Sticky CTA"],
    },
    {
      name: "AG1",
      url: "https://athleticgreens.com",
      image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg",
      description: "High-converting supplement funnel.",
      features: ["Video storytelling", "Bundles"],
    },
     {
      name: "Huelb",
      url: "https://huel.com",
      image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg",
      description: "Nutrition-first meal replacement brand.",
      features: ["Subscriptions", "Ingredient transparency"],
    },
    {
      name: "RitualF",
      url: "https://ritual.com",
      image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg",
      description: "Vitamin brand with storytelling.",
      features: ["Minimal design", "Sticky CTA"],
    },
    {
      name: "AG1b",
      url: "https://athleticgreens.com",
      image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69762bfba9a011d369307f41_reuben-mansell-oFgXybl7z3E-unsplash.jpg",
      description: "High-converting supplement funnel.",
      features: ["Video storytelling", "Bundles"],
    },

  ]}
/>
 <BrandEditorial brands={healthEditorialBrands} />

     <GeoMessage/>
    </>
  );
}
