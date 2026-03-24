"use client";

import { useEffect, useState } from "react";

type PriceEntry = { symbol: string; amount: number; code: string };

const TIMEZONE_PRICE_MAP: Record<string, PriceEntry> = {
  // United Kingdom
  "Europe/London":          { symbol: "£", amount: 299, code: "GBP" },
  // Australia
  "Australia/Sydney":       { symbol: "A$", amount: 549, code: "AUD" },
  "Australia/Melbourne":    { symbol: "A$", amount: 549, code: "AUD" },
  "Australia/Brisbane":     { symbol: "A$", amount: 549, code: "AUD" },
  "Australia/Perth":        { symbol: "A$", amount: 549, code: "AUD" },
  "Australia/Adelaide":     { symbol: "A$", amount: 549, code: "AUD" },
  // New Zealand
  "Pacific/Auckland":       { symbol: "NZ$", amount: 599, code: "NZD" },
  // Canada
  "America/Toronto":        { symbol: "CA$", amount: 549, code: "CAD" },
  "America/Vancouver":      { symbol: "CA$", amount: 549, code: "CAD" },
  "America/Edmonton":       { symbol: "CA$", amount: 549, code: "CAD" },
  "America/Winnipeg":       { symbol: "CA$", amount: 549, code: "CAD" },
  // Singapore
  "Asia/Singapore":         { symbol: "S$", amount: 549, code: "SGD" },
  // UAE
  "Asia/Dubai":             { symbol: "AED", amount: 1499, code: "AED" },
  // Germany / Austria / Switzerland (EUR)
  "Europe/Berlin":          { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Vienna":          { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Zurich":          { symbol: "CHF", amount: 379, code: "CHF" },
  // France / Belgium / Netherlands / other EU
  "Europe/Paris":           { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Brussels":        { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Amsterdam":       { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Madrid":          { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Rome":            { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Stockholm":       { symbol: "kr", amount: 3999, code: "SEK" },
  "Europe/Oslo":            { symbol: "kr", amount: 3999, code: "NOK" },
  "Europe/Copenhagen":      { symbol: "kr", amount: 2799, code: "DKK" },
  "Europe/Warsaw":          { symbol: "zł", amount: 1499, code: "PLN" },
  "Europe/Dublin":          { symbol: "€", amount: 349, code: "EUR" },
  "Europe/Lisbon":          { symbol: "€", amount: 349, code: "EUR" },
  // India
  "Asia/Kolkata":           { symbol: "₹", amount: 24999, code: "INR" },
  // Pakistan
  "Asia/Karachi":           { symbol: "₨", amount: 99999, code: "PKR" },
  // Nigeria / Ghana (West Africa)
  "Africa/Lagos":           { symbol: "$", amount: 449, code: "USD" },
  "Africa/Accra":           { symbol: "$", amount: 449, code: "USD" },
  "Africa/Nairobi":         { symbol: "$", amount: 449, code: "USD" },
  // Japan
  "Asia/Tokyo":             { symbol: "¥", amount: 59800, code: "JPY" },
  // South Korea
  "Asia/Seoul":             { symbol: "₩", amount: 599000, code: "KRW" },
  // China
  "Asia/Shanghai":          { symbol: "¥", amount: 2999, code: "CNY" },
  // Brazil
  "America/Sao_Paulo":      { symbol: "R$", amount: 1999, code: "BRL" },
  // Mexico
  "America/Mexico_City":    { symbol: "MX$", amount: 7999, code: "MXN" },
  // Hong Kong
  "Asia/Hong_Kong":         { symbol: "HK$", amount: 3499, code: "HKD" },
};

const DEFAULT_PRICE: PriceEntry = { symbol: "$", amount: 449, code: "USD" };

function detectPrice(): PriceEntry {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TIMEZONE_PRICE_MAP[tz]) return TIMEZONE_PRICE_MAP[tz];

    // Fallback: check language for broad UK/EU hints
    const lang = navigator.language?.toLowerCase() ?? "";
    if (lang.startsWith("en-gb")) return { symbol: "£", amount: 299, code: "GBP" };
    if (lang.startsWith("en-au")) return { symbol: "A$", amount: 549, code: "AUD" };
    if (lang.startsWith("en-ca")) return { symbol: "CA$", amount: 549, code: "CAD" };
    if (lang.startsWith("en-nz")) return { symbol: "NZ$", amount: 599, code: "NZD" };
    if (lang.startsWith("de"))    return { symbol: "€", amount: 349, code: "EUR" };
    if (lang.startsWith("fr"))    return { symbol: "€", amount: 349, code: "EUR" };
    if (lang.startsWith("es"))    return { symbol: "€", amount: 349, code: "EUR" };
  } catch {
    // silently fall through
  }
  return DEFAULT_PRICE;
}

export default function GeoPriceBadge() {
  const [price, setPrice] = useState<PriceEntry | null>(null);

  useEffect(() => {
    setPrice(detectPrice());
  }, []);

  if (!price) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2 text-sm">
      <svg className="w-3.5 h-3.5 text-[#DFF976] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-white/50">Starting from</span>
      <span className="text-white font-bold">
        {price.symbol}{price.amount.toLocaleString()}+
      </span>
      <span className="text-white/25 text-xs">{price.code}</span>
    </div>
  );
}
