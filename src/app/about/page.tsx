import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ShopifyTasker | Your Trusted Shopify Development Partner",
  description:
    "Learn more about ShopifyTasker, a trusted name in Shopify development. We help businesses build, customize, and scale their online stores effectively.",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
      <h1 className="text-2xl md:text-6xl font-medium">Your On-Demand Shopify Developer</h1>
      <p className="text-lg text-gray-600 mt-4">
        We provide expert Shopify development, customization, and support to help you grow your online store.
      </p>

<br>
</br>
<br>
</br>
      <h2 className="text-2xl md:text-6xl font-medium">Who We Are      </h2>
      <p className="text-lg text-gray-600 mt-4">
      We are a team of experienced Shopify developers, designers, and eCommerce experts passionate about helping businesses succeed online. From small startups to established brands, we provide tailored Shopify solutions to bring your vision to life.
      </p>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">What We Do</h2>
      <ul className="space-y-3">
        <li className="flex items-start"><span className="mr-2">✅</span> <strong>Shopify Development & Customization</strong> – Need a unique feature? We customize Shopify stores to fit your exact needs.</li>
        <li className="flex items-start"><span className="mr-2">✅</span> <strong>Performance Optimization</strong> – Speed, SEO, and user experience improvements to boost sales.</li>
        <li className="flex items-start"><span className="mr-2">✅</span> <strong>Theme Development & Tweaks</strong> – Custom Shopify themes or small tweaks? No problem.</li>
        <li className="flex items-start"><span className="mr-2">✅</span> <strong>App Integrations & API Development</strong> – Seamlessly connect Shopify with third-party apps and custom functionalities.</li>
        <li className="flex items-start"><span className="mr-2">✅</span> <strong>Ongoing Support & Maintenance</strong> – Reliable support so your store runs smoothly 24/7.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Why Choose Us?</h2>
      <ul className="space-y-3">
        <li className="flex items-start"><span className="mr-2">💡</span> <strong>Expertise You Can Trust</strong> – Years of experience working with Shopify Plus and custom eCommerce solutions.</li>
        <li className="flex items-start"><span className="mr-2">🚀</span> <strong>Fast & Reliable Delivery</strong> – We get things done on time without compromising quality.</li>
        <li className="flex items-start"><span className="mr-2">🤝</span> <strong>Your Growth Partner</strong> – We don't just develop; we help you scale your business.</li>
      </ul>
    </div>
    </main>
  );
}
