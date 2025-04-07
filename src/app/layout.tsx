import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Topbar from "./components/Annocmentbar";

import Head from "next/head";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "ShopifyTasker: Get Shopify Tasks Done by Top-Rated Shopify Shopify Experts",
  description:
  "ShopifyTasker connects you with trusted Shopify experts for theme customization, store design, speed optimization, and ongoing support. Reliable help for every Shopify project—big or small.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#3498db" />
      </Head>
      <Navbar />
      <Topbar/>
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
      <Footer />
      
    </html>
  );
}
