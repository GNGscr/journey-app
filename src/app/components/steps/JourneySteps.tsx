"use client";
import React from "react";
import { Plane, Compass, Users } from "lucide-react";
const ChoiceStep = React.lazy(() => import("./ChoiceStep"));
const LandingPage = React.lazy(() => import("../pages/LandingPage"));
const SummaryPage = React.lazy(() => import("../pages/SummaryPage"));
import { Theme, JourneyItem, Selections } from "../../constants/types";
import { stepSeoMeta } from "../../constants/seoMeta/seoMeta";

const JourneySteps = (
  journeyData: {
    destinations: JourneyItem[];
    activities: JourneyItem[];
    guides: JourneyItem[];
  },
  handleSelection: (
    type: string,
    item: JourneyItem
  ) => void,
  selections: Selections,
  restartJourney: () => void,
  showConfetti: boolean,
  theme: Theme,
  setCurrentStep: (step: number) => void
) => {
  return [
    {
      key: "landing",
      component: (
        <LandingPage theme={theme} onStart={() => setCurrentStep(1)} />
      ),
    },
    {
      key: "destination",
      component: (
        <ChoiceStep
          title={stepSeoMeta?.destination?.title}
          description={stepSeoMeta?.destination?.description}
          icon={<Plane className="w-16 h-16 mx-auto mb-4 text-blue-400" />}
          items={journeyData.destinations}
          theme={theme}
          onSelect={(item) => handleSelection("destination", item)}
        />
      ),
    },
    {
      key: "activity",
      component: (
        <ChoiceStep
          title={stepSeoMeta?.activity?.title}
          description={stepSeoMeta?.activity?.description}
          icon={<Compass className="w-16 h-16 mx-auto mb-4 text-green-400" />}
          items={journeyData.activities}
          theme={theme}
          onSelect={(item) => handleSelection("activity", item)}
        />
      ),
    },
    {
      key: "guide",
      component: (
        <ChoiceStep
          title={stepSeoMeta?.guide?.title}
          description={stepSeoMeta?.guide?.description}
          icon={<Users className="w-16 h-16 mx-auto mb-4 text-purple-400" />}
          items={journeyData.guides}
          theme={theme}
          onSelect={(item) => handleSelection("guide", item)}
        />
      ),
    },
    {
      key: "summary",
      component: (
        <SummaryPage
          selections={selections}
          theme={theme}
          showConfetti={showConfetti}
          onRestart={restartJourney}
        />
      ),
    },
  ];
};

export default JourneySteps;
