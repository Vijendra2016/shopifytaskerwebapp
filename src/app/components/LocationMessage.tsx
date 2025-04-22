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
          ? `In ${city}, U.S.? Local Shopify developers typically charge $80 t0 $120/hour — our experts deliver the same quality from just $25/hour, and you pay only after delivery`
          : "In the U.S.? Local Shopify  developers typically charge $80 t0 $120/hour — our experts deliver the same quality from just $25/hour, and you pay only after delivery!";
  
      case "AU":
        return city
          ? `In ${city}, Australia? Local devs cost $100+/hour — get the same quality from us at $35 AUD/hour, pay later!`
          : "In Australia? Local devs cost $100+/hour — get the same quality from us at $35 AUD/hour, pay later!";
  
      case "IN":
        return city
          ? `Based in ${city}, India? Get expert Shopify help at local-friendly rates — no upfront payment needed.`
          : "Based in India? Get expert Shopify help at local-friendly rates — no upfront payment needed.";
  
      default:
        return city
          ? `Leaving already? If you're in ${city}, ${country}, we can offer same-day Shopify consultation at lower rates.`
          : "Leaving already? Get Shopify help at lower cost — only pay after the work is done.";
    }
  };
  
  return (
    <p className="text-white text-lg font-medium text-center">
      {LocationMessage()}
    </p>
  );
};

export default LocationMessage;
