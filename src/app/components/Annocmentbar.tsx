"use client";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[70] bg-[#DFF976] text-black text-xs sm:text-sm text-center py-2 px-4 flex items-center justify-center gap-2">
      <span>
        🚀 Limited spots available for Q2 2026 —{" "}
        <span className="font-semibold underline underline-offset-2 cursor-pointer">
          Book your free consultation today
        </span>
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black transition-colors text-base leading-none"
      >
        ✕
      </button>
    </div>
  );
}
