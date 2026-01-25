

import Hero from "../Hero";
import Intro from "../Intro";
import ImageGallery from "../ImageGallery";
import SplitSection from "../SplitSection";
import Features from "../Features";
import CaseStudyAccordion from "../CaseStudyAccordion";


export default function IndustryPage() {
  return (
    <>
      <Hero
        title="Shopify Health Wellness Website Design and development"
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
        image="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69759cf5d41af8667e35d0fc_poko-skincare-fJ0fQhYEHAE-unsplash%20(1).jpg"
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

     
    </>
  );
}
