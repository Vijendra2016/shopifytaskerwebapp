// hooks/useExitIntent.ts
import { useEffect } from "react";

const useExitIntent = (onExit: () => void) => {
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        onExit();
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, [onExit]);
};

export default useExitIntent;
