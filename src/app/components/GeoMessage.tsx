// components/GeoMessage.tsx
"use client";

import React, { useEffect, useState } from "react";

const GeoMessage = () => {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setCity(data.city);
      } catch (error) {
        console.error("Failed to fetch location", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="p-4 bg-blue-50 rounded-2xl shadow-md text-center text-lg font-medium text-gray-800">
      {city
        ? `Are you looking to hire Shopify developer or expert in ${city}?`
        : "Are you looking to hire a Shopify developer or expert?"}
    </div>
  );
};

export default GeoMessage;
