'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Play } from 'lucide-react'

const projects = [
    {
        title: 'Eat with Lee',
        description: 'A modern food blogging website for restaurant reviews, ratings, and location-based culinary discovery.',
        longDescription: 'Built with Next.js 15, TypeScript, and Tailwind CSS featuring a clean, news-inspired design. Includes detailed restaurant reviews with ratings and photos, interactive location-based restaurant discovery, tagging system for cuisines, admin dashboard for review management, and social media integration for discovering the finest culinary experiences.',
        whatILearned: 'Gained hands-on experience building a content management system from scratch, learning to balance clean UI/UX design principles with functional admin workflows, while deepening expertise in Next.js 15 App Router architecture and TypeScript type safety for scalable web applications.',
        image: '/projects/eatwithlee.png',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Content Management'],
        githubUrl: 'https://github.com/tannerlee119/eatwithlee',
        liveUrl: 'https://eatwithlee.com',
        featured: true
    },
    {
        title: 'Ranked Log',
        description: 'A full-stack web application for tracking and analyzing League of Legends performance with comprehensive statistics and filtering.',
        longDescription: 'Built with Next.js 15, TypeScript, and SQLite for League of Legends performance tracking. Features game logging with champion picks and performance stats (K/D/A, Kill Participation, CS per minute), advanced filtering by role, game type, and champions, calculated average metrics, and complete game history visualization.',
        whatILearned: 'Developed expertise in database design and SQL optimization with SQLite, learning to implement complex filtering logic and aggregate calculations for performance analytics, while mastering server-side rendering patterns in Next.js for efficient data management.',
        image: '/projects/ranked-log.png',
        technologies: ['Next.js 15', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Better-SQLite3'],
        githubUrl: 'https://github.com/tannerlee119/Ranked-Log',
        liveUrl: 'https://ranked-log.vercel.app/stats',
        featured: true
    },
    {
        title: 'Gabooja Creator Discovery',
        description: 'A Next.js application for discovering and analyzing social media creators across Instagram and TikTok with AI-powered insights.',
        longDescription: 'Built with Next.js 15, TypeScript, and Supabase for comprehensive creator analysis. Features AI-powered insights using OpenAI GPT, web scraping with Playwright, advanced filtering system, and real-time analytics for multi-platform creator discovery.',
        whatILearned: 'Mastered integration of AI APIs and web scraping tools, learning to orchestrate complex data pipelines combining OpenAI GPT analysis with Playwright automation, while developing skills in prompt engineering and handling asynchronous data processing at scale.',
        image: '/projects/gabooja.png',
        technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Playwright', 'OpenAI GPT'],
        githubUrl: 'https://github.com/tannerlee119/gaboojacreatordiscovery',
        liveUrl: 'https://gaboojacreatordiscovery.vercel.app',
        featured: true
    },
    {
        title: 'BiteRank',
        description: 'A full-stack restaurant review web app that enables users to track, rate, and discover restaurants with interactive map features.',
        longDescription: 'Built with React, TypeScript, Node.js, and PostgreSQL using Drizzle ORM. Features Google Places API integration for restaurant discovery, interactive map visualization with custom markers, geocoding, and a comprehensive bookmarking system with external data synchronization.',
        whatILearned: 'Strengthened full-stack development skills by building a complete Node.js backend with PostgreSQL and Drizzle ORM, learning database schema design, API integration patterns with Google Places, and implementing efficient data synchronization between client and server.',
        image: '/projects/biterank.png',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Google Places API'],
        githubUrl: 'https://github.com/tannerlee119/BiteRank',
        liveUrl: null,
        featured: true
    },
    {
        title: 'The Move',
        description: 'An in-class team project built in React Native designed to help groups create, track, and manage group activities with ease.',
        longDescription: 'Engineered with React Native and Firebase integration for secure authentication. Enables users to create, update, and access events with real-time data synchronization, providing a seamless group coordination experience.',
        whatILearned: 'Gained mobile development experience with React Native and Firebase, learning cross-platform mobile architecture, real-time database synchronization, authentication flows, and collaborative development practices working within a team environment.',
        image: '/projects/the-move.png',
        technologies: ['React Native', 'Firebase', 'Real-time Sync', 'Authentication'],
        githubUrl: 'https://github.com/tannerlee119/The_Move',
        liveUrl: null,
        featured: true
    },
    {
        title: 'Sorting Visualizer',
        description: 'An interactive web application that visualizes 15 different sorting algorithms in real-time to enhance algorithmic understanding.',
        longDescription: 'Developed with React, JavaScript, HTML, and CSS. Features asynchronous functions to animate sorting processes, helping users understand algorithmic steps, time complexity, and performance characteristics of various sorting methods.',
        whatILearned: 'Deepened understanding of data structures and algorithms by implementing 15 sorting algorithms from scratch, learning to visualize complex computational processes with animation timing, asynchronous JavaScript patterns, and performance optimization techniques.',
        image: '/projects/sorting-visualizer.png',
        technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Algorithm Visualization'],
        githubUrl: 'https://github.com/tannerlee119/sorting-visualizer',
        liveUrl: 'https://sorting-visualizer-seven-kappa.vercel.app/',
        featured: false
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Featured Projects</h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        A showcase of my technical journey, featuring full-stack applications,
                        mobile apps, and interactive experiments.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full glass-card overflow-hidden group border-none">
                                <div className="relative aspect-video overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                        {/* Placeholder or Image */}
                                        <div className="text-center p-4">
                                            <Play className="w-12 h-12 text-white/20 mx-auto mb-2" />
                                            <span className="text-sm text-white/40">Preview</span>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                                        {project.githubUrl && (
                                            <Button variant="outline" size="sm" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2" /> Code
                                                </a>
                                            </Button>
                                        )}
                                        {project.liveUrl && (
                                            <Button size="sm" asChild className="bg-white text-black hover:bg-white/90">
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="flex justify-between items-start gap-2">
                                        <span className="text-xl font-bold group-hover:text-blue-500 transition-colors">{project.title}</span>
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-sm text-foreground/75 line-clamp-3">
                                        {project.longDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-secondary/50">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <Badge variant="outline" className="text-muted-foreground">
                                                +{project.technologies.length - 4}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
