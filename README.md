# Choose Your Journey - Interactive Web Experience #

A smooth, playful interactive website built with Next.js, React, and Framer Motion that guides users through a themed journey with beautiful animations and transitions.

---

> ⚠️ **Note regarding code submission**
>
> The version in the **`main`** branch represents the exact code submitted **before the assignment deadline**.
>
> A separate branch, **`post-submission-refactor`**, was created **after submission** to improve structure and readability.
>  
> These updates include **refactoring, cleanup, custom loader, error component and code organization** 

> **💡 This version represents how I would have submitted the project if I had a bit more time to polish it.**
>

---

# Architecture Key Features

- Modular Architecture - Clean separation of concerns
- Type Safety - Full TypeScript coverage
- Custom Hooks - Reusable logic extraction
- API Layer - Abstracted data fetching
- Animations - Smooth Framer Motion transitions
- Theming - Dark/light mode support
- Error Handling - Graceful fallbacks
- Loading States - User feedback during async operations

---

**refactor(project-structure): reorganize folders into clear, modular architecture**


- Moved main layout (JourneyApp) into layouts/ for cleaner separation of app shell.
- Split components into domain-based folders:
  - pages/ for top-level screens (LandingPage, SummaryPage)
  - steps/ for step-by-step flow logic (ChoiceStep, JourneySteps)
  - ui/ for reusable visual components (Loader, Confetti, ProgressIndicator, etc.)
- Added services/ layer for data handling and API abstraction (journey.ts)
- Grouped enums, types, and variants under constants/ for centralized definitions.
- Improved project scalability and clarity by separating logic, UI, and data layers.

---


# 🧩 Folder Philosophy


**The project is organized for clarity, scalability, and maintainability:**

**Separation of Concerns –** UI, logic, and data are decoupled into focused layers (components, hooks, services).

**Scalable Structure –** Designed to grow naturally as features expand (e.g., new pages, steps, or API routes).

**Consistency & Reuse –** Shared logic is extracted into custom hooks and reusable UI components.

**Readable Architecture –** Each folder name reflects its responsibility, reducing cognitive load for future contributors.

**API Abstraction –** The services/ layer isolates data fetching, making it easy to migrate from static JSON to real APIs.

**Type Safety –** All domain entities and enums are centralized under constants/ for predictable behavior and typing.


---


# 📁 Project Structure


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
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx

```

---

# Note

This structure follows Next.js 14+ App Router conventions with:

Server components by default
Client components marked with 'use client'
API routes in app/api/
Clean separation between UI, logic, and data layers

---

## 📸 Preview

**🚀 Live site:** [Journey App](https://journey-app-kappa.vercel.app/) 

**📁 Code:** [GitHub Repository](journey-app)

---

# ✨ Features

**Core Functionality -**

Landing Page - Hero animation with engaging call-to-action
Multi-Step Journey - Three interactive steps guiding user choices:

**Choose Your Destination -**
Pick Your Activity
Select Your Guide


Summary Page - Displays user selections with animated elements
Journey Reset - Smooth restart functionality

**Animations & Interactions -**

Page Transitions - Smooth sliding/fading between steps using Framer Motion
Element Entrances - Staggered animations for cards and content
Hover Effects - Interactive feedback on all clickable elements
Progress Indicator - Visual step counter showing journey progress
Surprise Animation - Confetti celebration on completion

**Technical Features -**

SEO Optimized - Unique meta tags and Open Graph data for each page
Responsive Design - Mobile-first approach with Tailwind CSS
Dark/Light Theme - Animated theme toggle with persistent preference
Clean Architecture - Custom hooks and reusable components
Type Safety - Full TypeScript implementation

----

# 🛠 Tech Stack

Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
State Management: React Hooks (useState, useMemo, custom hooks)
Deployment: Vercel

--- 

# 🏃 Getting Started

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

Run the development server

```bash
bash npm run dev
```

**or**

```bash
yarn dev
```

Open http://localhost:3000 in your browser

# Build for Production

```bash
bash npm run build

npm start
```

---

# 🎨 Design Decisions

**Architecture -**

Component Composition: Separated concerns with focused, single-responsibility components
Type Safety: Defined strict TypeScript interfaces for all data structures

**Animation Strategy -**

Framer Motion Variants: Used for consistent, reusable animation patterns
useMemo Optimization: Memoized complex animation objects to prevent unnecessary recalculations
Staggered Children: Implemented sequential animations for better visual flow

**Styling Approach -**

Tailwind Utilities: Leveraged utility classes for rapid development
Responsive Design: Mobile-first breakpoints (sm, md, lg, xl)
Theme Variables: CSS custom properties for seamless dark/light mode transitions

**SEO Implementation -**

Metadata API: Used Next.js 14 metadata objects for each route
Dynamic Titles: Step-specific titles and descriptions
Open Graph: Social sharing optimization with preview images

---

# 🚀 Deployment (Vercel)

**Push code to GitHub -**

bash git add .
git commit -m "Initial commit"
git push origin main

Visit vercel.com and sign in with GitHub
Click "New Project" → "Import Git Repository"
Select your repository and click "Import"
Vercel will auto-detect Next.js settings - click "Deploy"
Your site will be live at https://your-project.vercel.app

---

# 🔮 Future Improvements

**Features -**

 User authentication to save journey history
 Social sharing of completed journeys
 More journey themes (Adventure, Wellness, Learning)
 Journey templates and recommendations
 Analytics to track popular choices

**Technical -**

 Add E2E tests with Playwright
 Implement React Query for advanced data fetching
 Add Storybook for component documentation
 Performance monitoring with Vercel Analytics
 Accessibility audit and improvements (WCAG 2.1 AA)

**UX Enhancements -**

 Sound effects for interactions (optional toggle)
 More animation variations and Easter eggs
 Journey export as shareable image/PDF
 Undo/back functionality between steps
 Keyboard navigation support

# 📝 License

MIT

# 👤 Author

Daniel Ehrlich - GitHub

**Built with ❤️ for Appcharge Frontend Assignment**
