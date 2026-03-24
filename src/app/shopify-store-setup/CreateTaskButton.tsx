"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import StartProjectModal from "@/app/components/StartProjectModal";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CreateTaskButton({ children, className }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only portal after client hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={className}
      >
        {children}
      </button>

      {/* Portal renders the modal directly on document.body, bypassing any
          ancestor CSS stacking contexts (e.g. GSAP transform/opacity) that
          would break position: fixed positioning. */}
      {mounted &&
        createPortal(
          <StartProjectModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
