"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Theme, Selections } from "@/app/types";
import useJourneyData from "../hooks/useJourneyData";
import useThemeBackground from "../hooks/useThemeBackground";
import useHandleSelection from "../hooks/useHandleSelection";
import useConfettiEffect from "../hooks/useConfettiEffect";
import JourneySteps from "../steps/JourneySteps";
const ThemeToggle = React.lazy(() => import("../components/ThemeToggle"));
const ProgressIndicator = React.lazy(() => import("../components/ProgressIndicator"));
const BarsLoader = React.lazy(() => import("../components/BarsLoader"));
const ErrorMessage = React.lazy(() => import("../components/ErrorMessage"));

export default function JourneyApp() {
  const nullSelections = { destination: null, activity: null, guide: null };

  const [theme, setTheme] = useState<Theme>("dark");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selections, setSelections] = useState<Selections>(nullSelections);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const { journeyData, isLoading, error } = useJourneyData({
    url: "/api/journey",
  });

  const toggleTheme = (): void =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleSelection = useHandleSelection(setSelections, setCurrentStep);

  const restartJourney = (): void => {
    setSelections(nullSelections);
    setCurrentStep(0);
    setShowConfetti(false);
  };

  useConfettiEffect(currentStep, setShowConfetti);

  const themeBackground = useThemeBackground({ theme });

  const steps = JourneySteps(
    journeyData,
    handleSelection,
    selections,
    restartJourney,
    showConfetti,
    theme,
    setCurrentStep
  );

  if (!journeyData) return null;
  if (isLoading) return <BarsLoader theme={theme} />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${themeBackground}`}
    >
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <ProgressIndicator currentStep={currentStep} theme={theme} />

      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          {steps[currentStep]?.component}
        </AnimatePresence>
      </div>
    </div>
  );
}
