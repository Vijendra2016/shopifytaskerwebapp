"use client";

import { useEffect, useState } from "react";

const LocationMessage = () => {
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [error, setError] = useState(false);

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

  const LocationMessage = () => {
    switch (country) {
      case "US":
        return city
          ? `Looking Shopify developer & expert near ${city}, U.S.? Local Shopify developers typically charge $80 t0 $120/hour — our experts deliver the same quality from just $25/hour, and you pay only after delivery`
          : "Looking Shopify developer & expert in the U.S.? Local Shopify  developers typically charge $80 t0 $120/hour — our experts deliver the same quality from just $25/hour, and you pay only after delivery!";
  
      case "AU":
        return city
          ? `Looking Shopify developer & expert near ${city}, Australia? While local developers often charge $100+/hour, our experienced team offers the same premium quality for just $35 AUD/hour.Trusted by leading Australian brands · 100+ projects delivered · Pay later with confidence`
          : "Looking Shopify developer & expert in Australia? Local devs cost $100+/hour — get the same quality from us at $35 AUD/hour, pay later!";
  
      case "IN":
        return city
          ? `Looking Shopify developer & expert near  ${city}, India? Get expert Shopify help at local-friendly rates — no upfront payment needed.`
          : "Based in India? Get expert Shopify help at local-friendly rates — no upfront payment needed.";
  
      default:
        return city
          ? ` If you're in ${city}, ${country}, we can offer same-day Shopify consultation at lower rates.`
          : "Looking for shopify expert and developer ? Get Shopify expert help at lower cost — only pay after the work is done.";
    }
  };
  
  return (
    <p className="text-white text-sm mb-2">
      {LocationMessage()}
    </p>
  );
};

export default LocationMessage;
