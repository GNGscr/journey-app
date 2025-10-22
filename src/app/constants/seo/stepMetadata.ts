import { StepMetadata } from "../types";
  
export const stepMetadata: Record<string, StepMetadata> = {
  0: {
    name: 'landing',
    title: 'Choose Your Journey - Start Your Adventure',
    description: 'Begin your personalized journey. Select your dream destination, activities, and travel guide for an unforgettable adventure.',
    keywords: ['travel', 'journey', 'adventure', 'vacation planning', 'travel guide']
  },
  1: {
    name: 'destination',
    title: 'Choose Your Destination - Travel Adventures',
    description: 'Select from exotic destinations around the world. Paris, Tokyo, Bali, or Iceland - where will your journey take you?',
    keywords: ['travel destinations', 'paris', 'tokyo', 'bali', 'iceland', 'vacation spots']
  },
  2: {
    name: 'activity',
    title: 'Pick Your Activity - Adventure Awaits',
    description: 'Choose your perfect travel experience. Adventure, culture, relaxation, or cuisine - what kind of traveler are you?',
    keywords: ['travel activities', 'adventure', 'culture', 'relaxation', 'cuisine', 'travel experiences']
  },
  3: {
    name: 'guide',
    title: 'Select Your Guide - Expert Travel Companions',
    description: 'Find the perfect travel companion. Local experts, adventurers, photographers, or foodies to enhance your journey.',
    keywords: ['travel guide', 'local expert', 'tour guide', 'travel companion', 'photography tours']
  },
  4: {
    name: 'summary',
    title: 'Your Journey Summary - Adventure Planning Complete',
    description: 'Review your personalized travel plan. Your selected destination, activity, and guide are ready for an amazing adventure.',
    keywords: ['travel summary', 'trip planning', 'vacation itinerary', 'travel plan']
  }
};
