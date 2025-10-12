"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Plane, Compass, Users } from 'lucide-react';
import { Theme, SelectionType, JourneyItem, JourneyData, Selections } from '@/app/types';
import ThemeToggle from './ThemeToggle';
import ProgressIndicator from './ProgressIndicator';
import LandingPage from './LandingPage';
import ChoiceStep from './ChoiceStep';
import SummaryPage from './SummaryPage';
import * as basicJourneyData from '@/app/data/journeyData.json';

const defaultJourneyData: JourneyData = basicJourneyData;

const JourneyApp: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selections, setSelections] = useState<Selections>({
    destination: null,
    activity: null,
    guide: null
  });
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const [journeyData, setJourneyData] = useState<JourneyData>(defaultJourneyData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("http://localhost:3000/api/journey", { 
        cache: "no-store"
      });
      
      if (!res.ok) {
        throw new Error('Failed to fetch journey data');
      }
      
      const data = await res.json();
      setJourneyData(data);
      // console.log('Journey data loaded:', data);
    } catch (err) {
      console.error('Error fetching journey data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const toggleTheme = (): void => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleSelection = (type: SelectionType, value: JourneyItem): void => {
    setSelections(prev => ({ ...prev, [type]: value }));
    setTimeout(() => setCurrentStep(prev => prev + 1), 400);
  };

  const restartJourney = (): void => {
    setSelections({ destination: null, activity: null, guide: null });
    setCurrentStep(0);
    setShowConfetti(false);
  };

  useEffect(() => {
    if (currentStep === 4) {
      setTimeout(() => setShowConfetti(true), 500);
    }
  }, [currentStep]);

  const themeBackground = theme === 'dark' 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white' 
    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900';

  if (!journeyData) return;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeBackground}`}>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <ProgressIndicator currentStep={currentStep} theme={theme} />

      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <LandingPage 
              theme={theme} 
              onStart={() => setCurrentStep(1)} 
            />
          )}

          {currentStep === 1 && (
            <ChoiceStep
              key="destination"
              title="Choose Your Destination"
              description="Where will your adventure take you?"
              icon={<Plane className="w-16 h-16 mx-auto mb-4 text-blue-400" />}
              items={journeyData.destinations}
              theme={theme}
              onSelect={(item) => handleSelection('destination', item)}
            />
          )}

          {currentStep === 2 && (
            <ChoiceStep
              key="activity"
              title="Pick Your Activity"
              description="What kind of experience are you seeking?"
              icon={<Compass className="w-16 h-16 mx-auto mb-4 text-green-400" />}
              items={journeyData.activities}
              theme={theme}
              onSelect={(item) => handleSelection('activity', item)}
            />
          )}

          {currentStep === 3 && (
            <ChoiceStep
              key="guide"
              title="Select Your Guide"
              description="Who will accompany you on this journey?"
              icon={<Users className="w-16 h-16 mx-auto mb-4 text-purple-400" />}
              items={journeyData.guides}
              theme={theme}
              onSelect={(item) => handleSelection('guide', item)}
            />
          )}

          {currentStep === 4 && (
            <SummaryPage
              selections={selections}
              theme={theme}
              showConfetti={showConfetti}
              onRestart={restartJourney}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JourneyApp;