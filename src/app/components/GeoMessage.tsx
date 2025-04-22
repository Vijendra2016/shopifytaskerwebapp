"use client";

import { useEffect, useState } from "react";

const GeoMessage = () => {
  const [city, setCity] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipwho.is/?fields=city");
        const data = await res.json();
        if (!data.success) throw new Error("IP lookup failed");
        setCity(data.city);
      } catch (err) {
        console.error("Location fetch error:", err);
        setError(true);
      }
    };

    fetchLocation();
  }, []);

  if (error) return null;

  return (
    <p className="text-gray-800 text-lg font-medium text-center">
      {city
        ? `Leaving already? If you’re in ${city}, we can offer same-day consultation!`
        : "Leaving already? We can offer same-day Shopify consultation!"}
    </p>
  );
};

export default GeoMessage;
