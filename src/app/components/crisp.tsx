"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("20c3f81c-281b-422d-975d-4f8d5c9f39fc");
  });

  return null;
}

export default CrispChat;