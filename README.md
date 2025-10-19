# Choose Your Journey - Interactive Web Experience #

A smooth, playful interactive website built with Next.js, React, and Framer Motion that guides users through a themed journey with beautiful animations and transitions.

---

> ⚠️ **Note regarding code submission**
>
> The version in the **`main`** branch represents the exact code submitted **before the assignment deadline**.
>
> A separate branch, **`post-submission-refactor`**, was created **after submission** to improve structure and readability.
>  
> These updates include **refactoring, cleanup, optimization, code organization + adding custom loader, error component** 

---

> ***This version represents how I would have submitted the project if I had a bit more time to polish it.***
>


---


# Architecture Overview

***The project follows a modular and scalable architecture, designed for clarity, maintainability, and future growth.***

It emphasizes separation of concerns, type safety, and a clean layered structure between **UI**, **logic**, and **data**.

# Key Features & Design Decisions

**Modular Architecture** - each layer (`UI`, `logic`, `data`) has a dedicated responsibility.

**Separation of Concerns** - presentation in **`components/`**, logic in **`hooks/`**, data in **`services/`**.

**Scalable Structure** - new `pages`, `steps`, or `data sources` can be added effortlessly.

**Type Safety** - centralized `enums`, `types`, and motion `variants` under **`constants/.`**

**Reusable Logic** - introduced custom hooks (`useJourneyData`, `useHandleSelection`, etc.) to reduce duplication.

**Data Layer Abstraction** - `services/journey.ts` cleanly separates data access, ready for future `API` or `DB integration`.

**Layout Separation** - `layouts/JourneyApp.tsx` defines the app shell and supports global providers or theming.

**Composable UI** - `ui/` folder contains small, reusable visual components (e.g. `BarsLoader`, `Confetti`, `ProgressIndicator`).

**Dynamic Theming** - implemented **`light`** / **`dark`** mode toggle via `useToggleTheme`.

**Error & Loading States** - added smooth user feedback with `ErrorMessage` and custom loader components.

**Animation Management** - centralized Framer Motion variants in **`variants/`** for cleaner, consistent animation logic.

**Optimized Rendering** - unified repeated **`JSX`** blocks (`destination`/`activity`/`guide`) into a dynamic map structure.

**Fallback UI** - added Error Boundary to prevent page from crash and to provide a custom fallback component.

**Future-Ready** - easy to expand, migrate data sources, or enhance `UX` without breaking the architecture.

---

# Folder Structure Philosophy

***Folder Responsibility***

**components -** Contains all UI building blocks, divided into `pages/`, `steps/`, and `ui/` for clarity.

**hooks -**	Encapsulates state and logic for reuse and cleaner component trees.

**services -**	`Data abstraction layer` — communicates with APIs or static files.

**constants -**	Centralized `enums`, `types`, and `variants` for predictable behavior.

**layouts -**	Defines `app` structure and `global` wrappers.

**data -**	Stores local JSON (`journeyData.json`) — easily replaceable with API data.


---


# Note - For Static Site Generation (SSG)

Currently this App is purely client side.
To improve SEO, I would split each step into a different route,
Example:  `/journey/[step]`
and use the SSG that Next.js provides.

* This enable to define `generateMetadata` to each 'page',
so that the `title` and the `description` would be adjusted to the current step.

- In case the data was `dynamic`, I would consider moving to SSR insead of SSG.

 
***Starting by adding a Journey Folder to display Dynamic page that support SEO*** -

 ```bash
    /journey/destination
    /journey/activity
    /journey/guide
```

***Folder structure*** - 

```bash
    journey/
      [step]/   # destination/ activity/ guide
        page.tsx
```

***Example Page*** -

```bash

import { Metadata } from "next";
import journeyData from "@/app/data/journeyData.json";
import ChoiceStep from "@/app/components/steps/ChoiceStep";
import { Plane, Compass, Users } from "lucide-react";
import { stepConfig } from "";

const stepConfig = {
  destination: {
    title: "Choose Your Destination",
    description: "Where will your adventure take you?",
    icon: <Plane className="w-16 h-16 mx-auto mb-4 text-blue-400" />,
    items: journeyData.destinations,
  },
  activity: {
    title: "Pick Your Activity",
    description: "What kind of experience are you seeking?",
    icon: <Compass className="w-16 h-16 mx-auto mb-4 text-green-400" />,
    items: journeyData.activities,
  },
  guide: {
    title: "Select Your Guide",
    description: "Who will accompany you on this journey?",
    icon: <Users className="w-16 h-16 mx-auto mb-4 text-purple-400" />,
    items: journeyData.guides,
  },
};

# Will be added/ moved to a utils folder
export async function generateStaticParams() {
  return Object.keys(stepConfig).map((key) => ({ step: key }));
}
# Will be added to a utils folder
export async function generateMetadata({ params }): Promise<Metadata> {
  const step = stepConfig[params.step];
  return {
    title: step?.title || "Journey Step",
    description: step?.description,
  };
}

export default function StepPage({ params }) {
  const step = stepConfig[params.step];
  if (!step) return <div>Not found</div>;

  return (
    <ChoiceStep
      title={step.title}
      description={step.description}
      icon={step.icon}
      items={step.items}
      theme="dark"
      onSelect={() => {}}
    />
  );
}

```


---


# Project Structure

```bash
src/
├── app/
│   ├── api/
│   │   └── journey/
│   │       └── route.ts                # API endpoint serving journey data
│   ├── layouts/
│   │   └── JourneyApp.tsx              # Main layout wrapper
│   ├── components/
│   │   ├── pages/                      # Top-level pages (entry points)
│   │   │   ├── LandingPage.tsx
│   │   │   └── SummaryPage.tsx
│   │   ├── steps/                      # Step-by-step flow components
│   │   │   ├── ChoiceStep.tsx
│   │   │   └── JourneySteps.tsx
│   │   └── ui/                         # Reusable UI elements and micro-interactions
│   │       ├── BarsLoader.tsx
│   │       ├── Confetti.tsx
│   │       ├── ErrorMessage.tsx
│   │       ├── ProgressIndicator.tsx
│   │       └── ThemeToggle.tsx
│   ├── data/
│   │   └── journeyData.json            # Default static dataset
│   ├── services/
│   │   └── journey.ts                  # API / data-fetching abstraction layer
│   ├── hooks/                          # Custom hooks for logic reusability
│   │   ├── useConfettiEffect.ts
│   │   ├── useHandleSelection.ts
│   │   ├── useJourneyData.ts
│   │   ├── useThemeBackground.ts
│   │   └── useToggleTheme.ts
│   ├── constants/
│   │   ├── enums/
│   │   │   └── index.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── variants/
│   │       └── variants.ts
│   ├── ErrorBoundary.js                # Error Boundary for UI fallback
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx

```

---


## Preview

**Live site:** [Journey App](https://journey-app-kappa.vercel.app/) 

**Code:** [GitHub Repository](journey-app)

---

# Note

This structure follows Next.js 14+ App Router conventions with:

- Server components by default
- Client components marked with `'use client'`
- API routes in `app/api/`
- Clean separation between **UI**, **logic**, and **data layers**

---

# Features


**Core Functionality -**

- Landing Page - Hero animation with engaging call-to-action
- Multi-Step Journey - Three interactive steps guiding user choices:

**Choose Your Destination -**
- Pick Your Activity
- Select Your Guide


- Summary Page - Displays user selections with animated elements
- Journey Reset - Smooth restart functionality

**Animations & Interactions -**

- Page Transitions - Smooth sliding/fading between steps using Framer Motion
- Element Entrances - Staggered animations for cards and content
- Hover Effects - Interactive feedback on all clickable elements
- Progress Indicator - Visual step counter showing journey progress
- Surprise Animation - Confetti celebration on completion

**Technical Features -**

- SEO Optimized - Unique meta tags and Open Graph data for each page
- Responsive Design - Mobile-first approach with Tailwind CSS
- Dark/Light Theme - Animated theme toggle with persistent preference
- Clean Architecture - Custom hooks and reusable components
- Type Safety - Full TypeScript implementation

----

# Tech Stack

**Framework:** Next.js 14+ (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS
**Animations:** Framer Motion
**State Management:** React Hooks (useState, useMemo, custom hooks)
**Deployment:** Vercel

--- 

# Getting Started

**Prerequisites**

Node.js 18+
npm or yarn

**Installation**

Clone the repository

```bash
bash git clone https://github.com/GNGscr/journey-app.git
cd journey-app
```

---

# Install dependencies

```bash
bash npm install
```

**or**

```bash
yarn install
```

# Run the development server

```bash
bash npm run dev
```

**or**

```bash
yarn dev
```

Open `http://localhost:3000` in your browser

---

# Build for Production

```bash
bash npm run build

npm start
```

---

# Design Decisions

**Architecture -**

- Component Composition: Separated concerns with focused, single-responsibility components
- Type Safety: Defined strict TypeScript interfaces for all data structures

**Animation Strategy -**

- Framer Motion Variants: Used for consistent, reusable animation patterns
- useMemo Optimization: Memoized complex animation objects to prevent unnecessary recalculations
- Staggered Children: Implemented sequential animations for better visual flow

**Styling Approach -**

- Tailwind Utilities: Leveraged utility classes for rapid development
- Responsive Design: Mobile-first breakpoints (sm, md, lg, xl)
- Theme Variables: CSS custom properties for seamless dark/light mode transitions

**SEO Implementation -**

- Metadata API: Used Next.js 14 metadata objects for each route
- Dynamic Titles: Step-specific titles and descriptions
- Open Graph: Social sharing optimization with preview images

---

# Deployment (Vercel)

**Push code to GitHub -**

```bash
bash git add .
git commit -m "Initial commit"
git push origin main
```

---

# Future Improvements

**Features -**

 - User authentication to save journey history
 - Social sharing of completed journeys
 - More journey themes (Adventure, Wellness, Learning)
 - Journey templates and recommendations
 - Analytics to track popular choices

**Technical -**

 - Add unit tests with jest
 - Add E2E tests with Playwright
 - Implement React Query for advanced data fetching
 - Add Storybook for component documentation
 - Performance monitoring with Vercel Analytics
 - Accessibility audit and improvements (WCAG 2.1 AA)

**UX Enhancements -**

 - Sound effects for interactions (optional toggle)
 - More animation variations and Easter eggs
 - Journey export as shareable image/PDF
 - Undo/back functionality between steps
 - Keyboard navigation support

 ---

# License

MIT

---

# Author

Daniel Ehrlich

***Built with ❤️ for Appcharge Frontend Assignment***
