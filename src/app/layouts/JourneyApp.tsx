"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Theme, Selections } from "../constants/types";
import useJourneyData from "../hooks/useJourneyData";
import useThemeBackground from "../hooks/useThemeBackground";
import useHandleSelection from "../hooks/useHandleSelection";
import useConfettiEffect from "../hooks/useConfettiEffect";
import JourneySteps from "../components/steps/JourneySteps";
import { Themes } from "../constants/enums";
import SEOHead from "../components/SEOHead";
const ThemeToggleButton = React.lazy(() => import("../components/ui/ThemeToggleButton"));
const ProgressIndicator = React.lazy(() => import("../components/ui/ProgressIndicator"));
const BarsLoader = React.lazy(() => import("../components/ui/BarsLoader"));
const ErrorMessage = React.lazy(() => import("../components/ui/ErrorMessage"));

export default function JourneyApp() {

  const nullSelections = { destination: null, activity: null, guide: null };
    
  const { DARK, LIGHT } = Themes;
  const [theme, setTheme] = useState<Theme>(DARK);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selections, setSelections] = useState<Selections>(nullSelections);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const { journeyData, isLoading, error } = useJourneyData({
    url: "/api/journey",
  });

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

if (isLoading) return <BarsLoader theme={theme} />;
if (error) return <ErrorMessage error={error} theme={theme} />;
if (!journeyData) return null;

  return (
    <>
        <SEOHead step={currentStep} />
        <div
        className={`min-h-screen transition-colors duration-500 ${themeBackground}`}
        >
        <ThemeToggleButton
            theme={theme}
            onToggle={() => setTheme((prev) => (prev === DARK ? LIGHT : DARK))}
        />
        <ProgressIndicator currentStep={currentStep} theme={theme} steps={3} />

        <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
            <AnimatePresence mode="wait">
            {steps[currentStep]?.component}
            </AnimatePresence>
        </div>
        </div>
    </>
  );
};
