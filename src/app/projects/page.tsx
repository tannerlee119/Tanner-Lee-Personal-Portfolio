'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
    {
        title: 'Personal Travel Diary',
        description: 'A collaborative travel planning and journaling web application for couples and groups to plan, document, and relive trips together.',
        longDescription: 'Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4 using Supabase for auth and database. Features an interactive world map with Mapbox for trip visualization, kanban-style itinerary planning with drag-and-drop scheduling, comprehensive trip documentation including restaurant reviews, activity logs, and photo galleries with HEIC conversion, multi-user collaboration with per-user color coding, and AWS S3 integration for photo storage.',
        image: '/projects/dubu-diaries.png',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox', 'AWS S3'],
        githubUrl: null,
        liveUrl: 'https://dubu-diaries.vercel.app',
        featured: true
    },
    {
        title: 'Eat with Lee',
        description: 'A modern food blogging website for restaurant reviews, ratings, and location-based culinary discovery.',
        longDescription: 'Built with Next.js 15, TypeScript, and Tailwind CSS featuring a clean, news-inspired design. Includes detailed restaurant reviews with ratings and photos, interactive location-based restaurant discovery, tagging system for cuisines, admin dashboard for review management, and social media integration.',
        image: '/projects/eatwithlee.png',
        technologies: ['Next.js', 'TypeScript', 'Tailwind'],
        githubUrl: 'https://github.com/tannerlee119/eatwithlee',
        liveUrl: 'https://eatwithlee.com',
        featured: true
    },
    {
        title: 'Ranked Log',
        description: 'A full-stack web application for tracking and analyzing League of Legends performance with comprehensive statistics.',
        longDescription: 'Built with Next.js 15, TypeScript, and SQLite for League of Legends performance tracking. Features game logging with champion picks and performance stats, advanced filtering by role and game type, calculated average metrics, and complete game history visualization.',
        image: '/projects/ranked-log.png',
        technologies: ['Next.js', 'TypeScript', 'SQLite'],
        githubUrl: 'https://github.com/tannerlee119/Ranked-Log',
        liveUrl: 'https://ranked-log.vercel.app/stats',
        featured: true
    },
    {
        title: 'Gabooja Creator Discovery',
        description: 'A Next.js application for discovering and analyzing social media creators across Instagram and TikTok with AI-powered insights.',
        longDescription: 'Built with Next.js 15, TypeScript, and Supabase for comprehensive creator analysis. Features AI-powered insights using OpenAI GPT, web scraping with Playwright, advanced filtering system, and real-time analytics.',
        image: '/projects/gabooja.png',
        technologies: ['Next.js', 'Supabase', 'OpenAI'],
        githubUrl: 'https://github.com/tannerlee119/gaboojacreatordiscovery',
        liveUrl: 'https://gaboojacreatordiscovery.vercel.app',
        featured: true
    },
    {
        title: 'BiteRank',
        description: 'A full-stack restaurant review web app with interactive map features and Google Places integration.',
        longDescription: 'Built with React, TypeScript, Node.js, and PostgreSQL using Drizzle ORM. Features Google Places API integration for restaurant discovery, interactive map visualization, and comprehensive bookmarking system.',
        image: '/projects/biterank.png',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/tannerlee119/BiteRank',
        liveUrl: null,
        featured: true
    },
    {
        title: 'The Move',
        description: 'A React Native app designed to help groups create, track, and manage group activities with real-time sync.',
        longDescription: 'Engineered with React Native and Firebase integration for secure authentication. Enables users to create, update, and access events with real-time data synchronization.',
        image: '/projects/the-move.png',
        technologies: ['React Native', 'Firebase'],
        githubUrl: 'https://github.com/tannerlee119/The_Move',
        liveUrl: null,
        featured: true
    },
    {
        title: 'Sorting Visualizer',
        description: 'An interactive web application that visualizes 15 different sorting algorithms in real-time.',
        longDescription: 'Developed with React and JavaScript. Features asynchronous functions to animate sorting processes, helping users understand algorithmic steps and time complexity.',
        image: '/projects/sorting-visualizer.png',
        technologies: ['React', 'JavaScript'],
        githubUrl: 'https://github.com/tannerlee119/sorting-visualizer',
        liveUrl: 'https://sorting-visualizer-seven-kappa.vercel.app/',
        featured: false
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-normal mb-6">
                        Work
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        A showcase of my technical journey, featuring full-stack applications 
                        and interactive experiments.
                    </p>
                </motion.div>

                {/* Projects List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-24"
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-card mb-8">
                                {project.featured && (
                                    <span className="absolute top-6 left-6 z-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                        Featured Project
                                    </span>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-[1]" />
                                <div className="w-full h-full bg-muted flex items-center justify-center">
                                    <span className="text-muted-foreground text-sm uppercase tracking-widest">
                                        Preview
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="space-y-6">
                                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal">
                                    {project.title}
                                </h2>
                                
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                    {project.longDescription}
                                </p>

                                {/* Technologies - Outlined pills */}
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-1.5 text-xs uppercase tracking-[0.15em] 
                                                     border border-foreground/20 rounded-full text-muted-foreground
                                                     transition-colors duration-200 hover:border-foreground/40 hover:text-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-8 pt-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] 
                                                     text-foreground transition-all duration-300 hover:tracking-[0.25em]"
                                        >
                                            View Project
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] 
                                                     text-muted-foreground transition-all duration-300 hover:text-foreground hover:tracking-[0.25em]"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Separator */}
                            {index < projects.length - 1 && (
                                <div className="mt-24 border-t border-border/30" />
                            )}
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
