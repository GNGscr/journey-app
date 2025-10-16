# Choose Your Journey - Interactive Web Experience #

A smooth, playful interactive website built with Next.js, React, and Framer Motion that guides users through a themed journey with beautiful animations and transitions.

---


> ⚠️ **Note regarding code submission**
>
> The version in the **`main`** branch represents the exact code submitted **before the assignment deadline**.
>
> A separate branch, **`post-submission-refactor`**, was created **after submission** to improve structure and readability.
>  
> These updates include **refactoring, cleanup, and code organization only** —  
> no new features, design changes were made.

> # This version represents how I would have submitted the project if I had a bit more time to polish it.


---

# 🚀 Live Demo
View Live Site (Replace with your actual Vercel URL)
📋 Table of Contents

Features
Tech Stack
Getting Started
Project Structure
Design Decisions
Future Improvements

---

# ✨ Features
Core Functionality

Landing Page - Hero animation with engaging call-to-action
Multi-Step Journey - Three interactive steps guiding user choices:

# Choose Your Destination
Pick Your Activity
Select Your Guide


Summary Page - Displays user selections with animated elements
Journey Reset - Smooth restart functionality

# Animations & Interactions

Page Transitions - Smooth sliding/fading between steps using Framer Motion
Element Entrances - Staggered animations for cards and content
Hover Effects - Interactive feedback on all clickable elements
Progress Indicator - Visual step counter showing journey progress
Surprise Animation - Confetti celebration on completion

# Technical Features

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

# Prerequisites

Node.js 18+
npm or yarn

# Installation

Clone the repository

bashgit clone https://github.com/yourusername/choose-your-journey.git
cd choose-your-journey

---

# Install dependencies

bashnpm install
# or
yarn install

Run the development server

bashnpm run dev
# or
yarn dev

Open http://localhost:3000 in your browser

# Build for Production
bashnpm run build

npm start

# 📁 Project Structure

├── app/
│   ├── api/
│   │   └── journey/
│   │       └── route.ts          # API endpoint
│   ├── layout.tsx                # Root layout with theme provider
│   └── page.tsx                  # Landing page
├── components/
│   ├── JourneyApp.tsx            # Main journey flow
│   ├── ChoiceStep.tsx            # Journey steps
│   ├── ConfettiAnimation.tsx     # Celebration animation
│   ├── ProgressIndicator.tsx     # Step counter
│   ├── SummaryPage.tsx           # Summary page
│   └── ThemeToggle.tsx           # Dark/light mode switch
├── hooks/
│   └── useJourneyData.ts         # Custom data fetching hook
├── data/
│   └── journey-data.json         # Static journey choices
└── public/
└── images/                   # Assets

---

# 🎨 Design Decisions

# Architecture

Component Composition: Separated concerns with focused, single-responsibility components
Type Safety: Defined strict TypeScript interfaces for all data structures

# Animation Strategy

Framer Motion Variants: Used for consistent, reusable animation patterns
useMemo Optimization: Memoized complex animation objects to prevent unnecessary recalculations
Staggered Children: Implemented sequential animations for better visual flow

# Styling Approach

Tailwind Utilities: Leveraged utility classes for rapid development
Responsive Design: Mobile-first breakpoints (sm, md, lg, xl)
Theme Variables: CSS custom properties for seamless dark/light mode transitions

# SEO Implementation

Metadata API: Used Next.js 14 metadata objects for each route
Dynamic Titles: Step-specific titles and descriptions
Open Graph: Social sharing optimization with preview images

# 🚀 Deployment (Vercel)

Push code to GitHub

bashgit add .
git commit -m "Initial commit"
git push origin main

Visit vercel.com and sign in with GitHub
Click "New Project" → "Import Git Repository"
Select your repository and click "Import"
Vercel will auto-detect Next.js settings - click "Deploy"
Your site will be live at https://your-project.vercel.app

# 🔮 Future Improvements

# Features

 User authentication to save journey history
 Social sharing of completed journeys
 More journey themes (Adventure, Wellness, Learning)
 Journey templates and recommendations
 Analytics to track popular choices

# Technical

 Add E2E tests with Playwright
 Implement React Query for advanced data fetching
 Add Storybook for component documentation
 Performance monitoring with Vercel Analytics
 Accessibility audit and improvements (WCAG 2.1 AA)

# UX Enhancements

 Sound effects for interactions (optional toggle)
 More animation variations and Easter eggs
 Journey export as shareable image/PDF
 Undo/back functionality between steps
 Keyboard navigation support

# 📝 License

MIT

# 👤 Author

Daniel Ehrlich - GitHub

Built with ❤️ for Appcharge Frontend Assignment