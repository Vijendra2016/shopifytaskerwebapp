"use client";

import { useEffect, useState } from "react";
import { TfiArrowTopRight } from 'react-icons/tfi';
import StartProjectModal from "./StartProjectModal";
import Image from "next/image";

const GeoMessage = () => {
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipinfo.io/json?token=3eb3f909a65aed");
        const data = await res.json();
        setCity(data.city);
        setCountry(data.country);
      } catch (err) {
        console.error("Location fetch error:", err);
        setError(true);
      }
    };

    fetchLocation();
  }, []);
  
  if (error) return null;

  const getMessage = () => {
    switch (country) {
      case "US":
        return city
          ? `Looking shopify expert near ${city}, U.S.? Local Shopify developers typically charge $80 to $120/hour — our experts deliver the same quality from just $25/hour, and you pay only after delivery`
          : "Looking shopify expert in the U.S.? Local Shopify  developers typically charge $80 to $120/hour — our experts deliver the same quality from just $25/hour, and you pay only after delivery!";
  
      case "AU":
        return city
          ? `Looking shopify expert near ${city}, Australia? Local devs cost $100+/hour — get the same quality from us at $35 AUD/hour, pay later!`
          : "Looking shopify expert in Australia? Local devs cost $100+/hour — get the same quality from us at $35 AUD/hour, pay later!";
  
      case "IN":
        return city
          ? `Looking shopify developer & expert near ${city}, India? Get expert Shopify help at local-friendly rates — no upfront payment needed.`
          : "Based in India? Get expert Shopify help at local-friendly rates — no upfront payment needed.";
  
      default:
        return city
          ? ` If you're in ${city}, ${country}, we can offer same-day Shopify consultation at lower rates.`
          : " Get Shopify help at lower cost — only pay after the work is done.";
    }
  };
  
  return (
    <div className="w-full bg-[#fefdf9] flex flex-col items-center gap-2 pr-2 pl-2 lg:pr-20 lg:pl-20  md:pr-20 md:pl-20 pt-20 pb-20 text-white">
      <h6 className="text-black text-3xl lg:text-5xl md:text-5xl font-bold tracking-tight text-center">
        {getMessage()}
      </h6>
      <p className="text-black text-sm lg:text-2xl md:text-2xl text-center pt-5 pb-5">
        If you looking for upgrade your Shopify & Shopify Plus Store or setup Shopify store, we handle any task related to Shopify & Shopify Plus,
         go ahead and press on the following button to create task in less than a minute.
      </p>

      <button         
        onClick={() => setShowModal(true)}      
        className="flex cursor-pointer duration-300  ease-in items-center gap-4 bg-black text-white py-6 px-12 lg:px-56 md:px-66 rounded-full hover:bg-teal-500 transition"
      >     
        {/* Replace the below div with your logo image */}         
        <div className="bg-white p-2 rounded">           
          {/* Example placeholder for logo */}          
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231d7_Team%20Member%20Image%203.jpg" 
            alt="Logo"
            width={40}
            height={40}
            className="object-contain animate-wiggle animate-infinite"
          /> 
        </div>         
        <span className="text-2xl lg:text-5xl md:text-3xl  font-semibold ">Work with us</span>          
        <TfiArrowTopRight className="ml-2 text-5xl animate-jump animate-infinite" />       
      </button> 
      <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68183d299128df529d5bfa26_footernewimage.png" 
            alt="Logo"
            width={140}
            height={140}
            className="object-contain animate-fade-right animate-infinite"
          />  
      <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680baca7a144a823c527edf7_shopifytasker-review.png" 
            alt="Logo"
            width={140}
            height={140}
            className="object-contain"
          /> 
      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default GeoMessage; 