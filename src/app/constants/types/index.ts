// Types

export type Theme = 'dark' | 'light';

export type SelectionType = 'destination' | 'activity' | 'guide';

export type ErrorType = {
  error: string | 'Something went worng!';
};

export type ErrorMessageType = {
  error: string;
  theme: Theme;
};

// Interfaces

export interface JourneyItem {
  id: string;
  name: string;
  emoji: string;
  description: string;
}
  
export interface JourneyData {
  destinations: JourneyItem[];
  activities: JourneyItem[];
  guides: JourneyItem[];
}

export interface Selections {
  destination: JourneyItem | null;
  activity: JourneyItem | null;
  guide: JourneyItem | null;
}

export interface SummaryPageProps {
  selections: Selections;
  theme: Theme;
  showConfetti: boolean;
  onRestart: () => void;
}

export interface ChoiceStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: JourneyItem[];
  theme: Theme;
  onSelect: (item: JourneyItem) => void;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  theme: Theme;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  theme: Theme;
}

export interface LandingPageProps {
  theme: Theme;
  onStart: () => void;
}

export interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}