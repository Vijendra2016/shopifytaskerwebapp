import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import WelcomeCard from "./components/WelcomeCard";
import { Viewport } from "next";
import SchemaOrganization from "./components/SchemaOrganization";
import Script from "next/script";

const overusedGrotesk = localFont({
  src: "./fonts/OverusedGrotesk-VF.woff2",
  variable: "--font-overused-grotesk",
  weight: "300 800",
  display: "swap",
});



export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "ShopifyTasker: Get Shopify Tasks Done by Top-Rated Shopify Experts",
  description: "ShopifyTasker connects you with trusted Shopify experts for theme customization, store design, speed optimization, and ongoing support. Reliable help for every Shopify project — big or small.",
  metadataBase: new URL("https://www.shopifytasker.com"),
  alternates: {
    canonical: "https://www.shopifytasker.com",
    languages: {
      "en": "https://www.shopifytasker.com",
      "en-US": "https://www.shopifytasker.com",
      "x-default": "https://www.shopifytasker.com",
    },
  },
  openGraph: {
    title: "ShopifyTasker — Hire Shopify Experts. Pay After Work is Done.",
    description: "Top-rated Shopify experts for store design, development, SEO, migrations, and ongoing support. Transparent pricing. No upfront payment.",
    url: "https://www.shopifytasker.com",
    siteName: "ShopifyTasker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopifyTasker — Hire Shopify Experts",
    description: "Top-rated Shopify experts for design, development & SEO. Pay after delivery.",
  },
};

import RotatingWhatsAppLoader from './components/RotatingWhatsAppLoader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <GoogleTagManager gtmId="G-RH64BGD6GT" />

      <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;
                t.src="https://www.clarity.ms/tag/" + i;
                y=l.getElementsByTagName(r)[0].parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v90f2ilxad");
            `,
          }}
        />
      <body
        className={`${overusedGrotesk.variable} antialiased`}
      >

         {/* ✅ Organization Schema – MUST be inside body */}
        <SchemaOrganization />

         
      
        <Navbar />



        {children}
            
        
      <Footer />

      
      <Analytics/>
      <WelcomeCard/>
      <RotatingWhatsAppLoader />
     
      <GoogleAnalytics gaId="G-RH64BGD6GT" />
      </body>
      
    </html>
  );
}
