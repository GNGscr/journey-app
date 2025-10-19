"use client";
import { useCallback, useRef, useEffect } from "react";
import { JourneyItem, Selections } from "../constants/types";

const useHandleSelection = (
  setSelections: React.Dispatch<React.SetStateAction<Selections>>,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);
    return useCallback(
      (type: string, value: JourneyItem) => {
        setSelections((prev: Selections) => ({ ...prev, [type]: value }));
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCurrentStep((prev) => prev + 1), 400);
      },
      [setSelections, setCurrentStep]
    );
};

export default useHandleSelection;