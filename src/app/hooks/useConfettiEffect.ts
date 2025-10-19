"use client";
import { useEffect } from "react";

const useConfettiEffect = (
  currentStep: number,
  setShowConfetti: (show: boolean) => void
) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentStep === 4) {
      timeoutId = setTimeout(() => setShowConfetti(true), 500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentStep, setShowConfetti]);
};

export default useConfettiEffect;