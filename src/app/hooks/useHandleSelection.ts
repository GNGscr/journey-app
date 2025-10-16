import { useCallback } from "react";
import { JourneyItem, Selections } from "@/app/types";

const useHandleSelection = (
  setSelections: React.Dispatch<React.SetStateAction<Selections>>,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>) => {
  return useCallback(
    (type: string, value: JourneyItem): void => {
      setSelections((prev: Selections) => ({ ...prev, [type]: value }));
      setTimeout(() => setCurrentStep((prev) => prev + 1), 400);
    },
    [setSelections, setCurrentStep]
  );
};

export default useHandleSelection;