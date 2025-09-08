# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Tanner Lee, built as a modern single-page application with smooth scroll animations and responsive design.

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint to check code quality (configured with Next.js rules)
```

## Architecture & Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Icons**: Lucide React
- **Deployment**: Vercel (configured)
- **Typography**: Inter font family via Google Fonts

## Code Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and animations
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page with section routing
├── components/         # React components
│   ├── ui/            # shadcn/ui base components (Avatar, Badge, Button, Card)
│   ├── hero.tsx       # Landing section
│   ├── experience.tsx # Work experience cards
│   ├── projects.tsx   # Project showcase
│   ├── skills.tsx     # Skills display
│   ├── contact.tsx    # Contact information
│   ├── navigation.tsx # Sticky header nav (note: there's also navigation 2.tsx)
│   ├── smooth-section.tsx # Optimized scroll animations
│   └── animated-section.tsx # Alternative animation component
├── hooks/             # Custom React hooks (if present)
│   ├── useScrollAnimation.tsx    # Basic scroll trigger
│   ├── useParallaxScroll.tsx    # Parallax effects
│   └── useSectionTransitions.tsx # Section management
└── lib/
    └── utils.ts       # Utility functions (cn helper)
```

## Animation System

**Current Implementation**: Uses `SmoothSection` component for performant, flash-free animations:
- CSS transitions instead of complex keyframes
- Intersection Observer for scroll triggers
- Minimal transforms (translate, scale, opacity only)
- No blur effects or heavy 3D transforms
- Proper hydration handling to prevent flashing

**Legacy**: The `SectionTransition` component had flash issues due to complex animations and should be avoided.

## Design System

**Color Palette** (Tailwind classes):
- Background: `bg-slate-900` (#0f172a)
- Primary Text: `text-gray-100` (#f3f4f6)
- Secondary Text: `text-gray-400` (#9ca3af)
- Primary Accent: `text-blue-500` (#3b82f6)
- Cards: `bg-slate-800/20` with hover effects

**Component Patterns**:
- Consistent card layouts using shadcn/ui Card components
- Badge components for tech stacks and skills
- Hover effects with `hover-magnetic` and `card-hover-effect` classes
- Responsive grid layouts with `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Key Files

- `src/app/page.tsx` - Main page layout and section organization
- `src/app/globals.css` - All animations, keyframes, and custom styles
- `src/components/smooth-section.tsx` - Optimized animation wrapper
- `src/components/navigation.tsx` - Sticky navigation with smooth scrolling
- `src/components/experience.tsx` - Main experience component (not the "2" version)

## Performance Notes

- Uses `'use client'` directives appropriately for interactive components
- Intersection Observer for efficient scroll detection
- `requestAnimationFrame` for smooth scroll handling
- Passive event listeners for scroll performance
- CSS `transform` and `opacity` for GPU-accelerated animations

## Accessibility Features

- Semantic HTML structure (`<nav>`, `<main>`, `<section>`)
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Keyboard navigation support
- Color contrast compliance
- `scroll-behavior: smooth` for navigation links