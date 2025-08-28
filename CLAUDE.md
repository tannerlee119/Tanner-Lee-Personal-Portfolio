# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Tanner Lee. The project is currently in the initial planning phase with only a Product Requirements Document (PRD.txt) defining the specifications.

### Architecture & Tech Stack

Based on the PRD, this will be a modern single-page application (SPA) built with:
- **Framework**: Next.js
- **Styling**: Tailwind CSS with shadcn/ui components
- **Theme**: "Classic Tech (Dark Mode)" with specific color palette
- **Deployment**: Vercel
- **Typography**: Inter font family

### Design System

**Color Palette:**
- Background: `#111827` (Slate 900)
- Primary Text: `#F3F4F6` (Gray 100) 
- Secondary Text: `#9CA3AF` (Gray 400)
- Primary Accent: `#3B82F6` (Blue 500) for interactive elements

**Layout:**
- Single-page application with sticky navigation
- Responsive design with mobile-first approach
- Sections: Hero, About, Experience, Projects, Skills, Contact

### Key Features

1. **Hero Section**: Professional avatar, headline, bio, and CTA buttons
2. **About Section**: Personal narrative and interests
3. **Experience Section**: Technical experience and leadership roles in card format
4. **Projects Section**: Grid layout with project cards containing screenshots, tech stack badges, and links
5. **Skills Section**: Categorized skills with badges/icons
6. **Contact Section**: Contact information and social links

### Development Guidelines

- Use semantic HTML for accessibility (WCAG AA compliance)
- Implement proper alt text for all images
- Ensure keyboard navigation support
- Include subtle micro-interactions and animations
- Use consistent iconography (Lucide Icons recommended)
- Maintain responsive design across all breakpoints

### Accessibility Requirements

- Semantic HTML structure with proper tags (`<nav>`, `<main>`, `<section>`)
- Descriptive alt text for all images
- Color contrast meeting minimum ratios
- Full keyboard navigation support

## Project Status

The codebase is currently empty except for the PRD. This is a greenfield project ready for initial setup and development.