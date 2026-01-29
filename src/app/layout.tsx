import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import WelcomeCard from "./components/WelcomeCard";
import { Viewport } from "next";
import dynamic from 'next/dynamic'
import SchemaOrganization from "./components/SchemaOrganization";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
  title: "ShopifyTasker: Get Shopify Tasks Done by Top-Rated Shopify Shopify Experts",
  description: "ShopifyTasker connects you with trusted Shopify experts for theme customization, store design, speed optimization, and ongoing support. Reliable help for every Shopify project—big or small.",
  themeColor: '#d9e1eb',
};

const CrispWithNoSSR = dynamic(
    () => import('./components/crisp')
  )

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <CrispWithNoSSR />
            <GoogleTagManager gtmId="G-RH64BGD6GT" />

      <Head>
        <meta name="theme-color" content="#000000" />
         

      </Head>
      
      <Script
          id="clarity-script"
          strategy="afterInteractive"
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
        className={`${geistSans.variable}  antialiased`}
      >

         {/* ✅ Organization Schema – MUST be inside body */}
        <SchemaOrganization />

         
      
        <Navbar />



        {children}

        
      <Footer />

      
      <Analytics/>
      <WelcomeCard/>
     
      </body>
      <GoogleAnalytics gaId="G-RH64BGD6GT" />
      
    </html>
  );
}
