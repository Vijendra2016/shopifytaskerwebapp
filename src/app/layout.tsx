import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Topbar from "./components/Annocmentbar";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "ShopifyTasker | Best Shopify Developer in India for High-Performance Stores",
  description: "Hire top-rated Shopify developers in India to build, optimize, and scale your online store. Expert Shopify solutions for seamless eCommerce growth.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
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
