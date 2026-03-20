"use client";

import { useState } from "react";
import StartProjectModal from "@/app/components/StartProjectModal";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CreateTaskButton({ children, className }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)} className={className}>
        {children}
      </button>
      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
