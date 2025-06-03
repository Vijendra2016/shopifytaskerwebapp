import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Topbar from "./components/Annocmentbar";
import WelcomeCard from "./components/WelcomeCard";
import { Viewport } from "next";
import dynamic from 'next/dynamic'

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
      
      <body
        className={`${geistSans.variable}  antialiased`}
      >

         <Topbar/>
      
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
