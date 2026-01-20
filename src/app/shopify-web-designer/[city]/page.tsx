// src/app/shopify-expert-near-me/[city]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import cities from "@/lib/cities.json";
import CitiesCta from "@/app/components/CitiesCta";
import TestimonialCard from "@/app/components/TestimonialCard";
import FAQSection, { FAQ } from "@/app/components/FAQSectionind";
import Link from "next/link";
import DesignServiceSection from "../DesignServiceSection";
import MigrationSection from "../MigrationSection";
import CityPageSchema from "../CityPageSchema";
import FaqSection from "../FaqSection";
import CityFaqSection from "../CityFaqSection";
type Props = {
  params: Promise<{
    city: string;
  }>;
};

// ✅ generateStaticParams
export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

// ✅ generateMetadata with proper async param handling
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { city } = params;

  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) {
    return {
      title: "City Not Found | ShopifyTasker",
      description: "This city page is not available.",
    };
  }

  return {
    title: `Hire  Top Rated Shopify Web Designer in ${cityData.city} | ShopifyTasker  `,
    description: `Hire Top Rated Shopify Web Designer in ${cityData.city} prices start from $10/hr,pay after work done`,
  };
}

// ✅ Page Component with proper async param handling
export default async function CityPage(props: Props) {
  const params = await props.params;
  const { city } = params;

  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) return notFound();
  const wigFaqs: FAQ[] = [
    {
      question: `What services do you provide in ${cityData.city}?`,
      answer:
        "We offer Shopify auto parts website design and development, store management, Shopify support, SEO, and digital marketing services.",
    },
    {
      question: "What is your process?",
      answer:
        "Just tell us your requirements. We handle all types of Shopify development and app-related tasks at affordable rates.",
    },
    {
      question: "I already have a website. Can you improve it?",
      answer:
        "Yes! If you already have a Shopify website and want improvements, feel free to contact us.",
    },
    {
      question: "Do you provide monthly Shopify website support?",
      answer:
        "Absolutely. Our monthly support includes custom development, store management, SEO, and more.",
    },
    {
      question: "Why should I hire the ShopifyTasker team?",
      answer:
        "We work on a pay-after-delivery model, have over 10 years of Shopify experience, and charge fair prices—not $150/hr like others.",
    },
    {
      question: "How many Shopify developers and experts are on your team?",
      answer:
        "Our team includes 25+ professionals, including Shopify developers, SEO specialists, and digital marketing experts.",
    },
  ];
  return (
    <main>

      <CityPageSchema
    city={cityData.city}
    state={cityData.state}
    slug={cityData.slug}
    faqs={wigFaqs}
  />
       
      <section className="px-6 md:px-30  h-[60vh] md:h-[80vh] py-30 bg-black text-white">
        <div className="services flex flex-col items-center justify-center text-center text-black ">
          <h1 className="text-3xl md:text-9xl text-white font-medium tracking-tight ">
            Hire Shopify web designer in {cityData.city}, {cityData.state}
          </h1>
          <h3 className="text-lg md:text-3xl text-white  font-medium tracking-tight p-10">
            {" "}
            Shopify Website Development | Shopify Tasks | Shopify Retainer |
            Shopify SEO
          </h3>
        </div>
      </section>
      <MigrationSection />

     <DesignServiceSection/>
     < FaqSection/>

     <CityFaqSection 
  city={cityData.city} 
  state={cityData.state} 
/>

      <section className="bg-[#fefaf6] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-thin text-black-900 leading-tight">
            Explore our {cityData.city} <br />
            Shopify Expert services
          </h2>
          <p className="text-lg text-black mt-2">
            This is {cityData.city} Shopify Expert at its best.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="text-green-900 text-5xl mb-8">🎨</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Shopify Store Design
              </h3>
              <p className="text-black mb-10">
                We craft clean, user-friendly Shopify stores that truly reflect
                your brand and keep your customers engaged.
              </p>
            </div>

            <Link
              href="/shopify-store-design"
              className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="text-green-900 text-5xl mb-8">🖌️</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Theme Customization
              </h3>
              <p className="text-black mb-10">
                We customize your Shopify theme or create custom layouts to
                improve functionality and match your brand perfectly.
              </p>
            </div>
            <Link
              href="/theme-customization"
              className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="text-green-900 text-5xl mb-8">🛠️</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Custom Development
              </h3>
              <p className="text-black mb-10">
                Build custom features, integrations, or functionalities to take
                your Shopify store to the next level.
              </p>
            </div>
            <Link
              href="/custom-development"
              className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="text-green-900 text-5xl mb-8">🔌</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                App Integration
              </h3>
              <p className="text-black mb-10">
                Connect essential apps like CRM, shipping tools, analytics, and
                marketing platforms with ease.
              </p>
            </div>
            <Link
              href="/app-integration"
              className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="text-green-900 text-5xl mb-8">⚙️</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Ongoing Support
              </h3>
              <p className="text-black mb-10">
                Keep your Shopify store running smoothly with regular updates,
                fixes, and enhancements.
              </p>
            </div>
            <Link
              href="/ongoing-support"
              className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="text-green-900 text-5xl mb-8">📈</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Shopify SEO
              </h3>
              <p className="text-black mb-10">
                Optimize your store with technical SEO and keyword strategies to
                boost visibility and sales.
              </p>
            </div>
            <Link
              href="/shopify-seo"
              className="mt-auto w-fit bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fefaf6] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black-900 leading-tight">
            Premium Shopify Experts in {cityData.city} for Seamless Online
            Growth
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Launch faster, sell smarter. Our Shopify developers in{" "}
            {cityData.city} design, build, and scale stores that convert
            visitors into loyal customers.{" "}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-5">
            <div className="bg-[#f3fca8] w-16 h-16 flex items-center justify-center rounded-xl p-5">
              <span className="text-3xl">🛒</span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">
                Custom Shopify Store Development
              </h3>
              <p className="text-gray-800">
                Custom Shopify Store Development We design and develop Shopify
                stores from scratch—built to be fast, mobile-friendly, and
                tailored to your business in California. From setup to advanced
                features, everything is crafted to help your store grow and
                reflect your brand, down to the last detail.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-5">
            <div className="bg-[#f3fca8] w-16 h-16 flex items-center justify-center rounded-xl p-5">
              <span className="text-3xl">🎨</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">
                Branded UI/UX & Theme Customization
              </h3>
              <p className="text-gray-800">
                We craft visually stunning and intuitive designs that elevate
                your brand. Our UI/UX team in {cityData.city} customizes themes
                or creates bespoke layouts that guide customers toward making a
                purchase, resulting in higher engagement and conversions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-5">
            <div className="bg-[#f3fca8] w-16 h-16 flex items-center justify-center rounded-xl p-5">
              <span className="text-3xl">⚙️</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">
                Advanced Shopify Functionalities & APIs
              </h3>
              <p className="text-gray-800">
                Looking to do more than just install apps? We create custom
                features, build API-based workflows, and integrate your Shopify
                store with tools like ERP, CRM, and other third-party systems —
                all tailored to how your business operates.{" "}
              </p>{" "}
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex gap-5">
            <div className="bg-[#f3fca8] w-16 h-16 flex items-center justify-center rounded-xl p-5">
              <span className="text-3xl">🚀</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">
                Launch Strategy & Final QA
              </h3>
              <p className="text-gray-800">
                Before we launch your store, we carefully check everything—how
                it looks, how it works, and how it feels on all devices. No
                rushed jobs here. We make sure everything runs smoothly so when
                your store goes live, it’s ready to go from day one—no
                surprises, no stress.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex gap-5">
            <div className="bg-[#f3fca8] w-16 h-16 flex items-center justify-center rounded-xl p-5">
              <span className="text-3xl">🔍</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">
                Shopify SEO & Speed Optimization
              </h3>
              <p className="text-gray-800">
                We help your store show up better on Google and load faster for
                your visitors. That means going through your site, fixing the
                little things that slow it down, and making sure your pages are
                set up properly so the right people can find you and stick
                around.{" "}
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex gap-5">
            <div className="bg-[#f3fca8] w-16 h-16 flex items-center justify-center rounded-xl p-5">
              <span className="text-3xl">📈</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">
                Ongoing Store Growth & Analytics Insights
              </h3>
              <p className="text-gray-800">
                Post-launch, we help you grow. From setting up event tracking to
                interpreting metrics and offering growth suggestions — our team
                provides proactive monthly support for your Shopify store’s
                success in {cityData.state}.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-4">
          Why hire Shopify expert in {cityData.city} from shopifyTasker ?
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">{cityData.intro}</p>
        <p className="font-semibold text-blue-600">{cityData.cta}</p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-4">
          How do i hire a shopify expert near {cityData.city} on ShopifyTasker
        </h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Hire shopify expert on shopifytasker is three step process. Click on
          Get Free Quote Write your project scope Get Submit Project we will be
          back to you with proper cost .
        </p>

        <h3 className="text-3xl font-bold mb-4">
          Why Hire a shopify expert near {cityData.city} on ShopifyTasker
        </h3>

        <p className="font-semibold text-blue-600">
          we have 10 years experience on shopify ecosystem , we work on real
          prices not much price like $150/hr our hourly prices is fixed $20 and
          we dont take any upfront payment .
        </p>
      </section>
       <DesignServiceSection/>

      <TestimonialCard />
      <CitiesCta />
      <FAQSection faqs={wigFaqs} />
    </main>
  );
}
