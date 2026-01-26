'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getProjectBySlug } from '@/data/projects'
import { notFound } from 'next/navigation'

export default function ProjectDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-28 pb-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <Link 
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] 
                                 text-muted-foreground transition-all duration-300 hover:text-foreground hover:tracking-[0.2em]"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Project Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Featured Badge & Title */}
                    <div className="space-y-4 mb-8">
                        {project.featured && (
                            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Featured Project
                            </span>
                        )}
                        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-normal">
                            {project.title}
                        </h1>
                    </div>

                    {/* Project Image */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-card mb-10">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]" />
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-sm uppercase tracking-widest">
                                Preview
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-10"
                >
                    {/* Description */}
                    <div className="space-y-6">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            About this project
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {project.longDescription}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Technologies
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 text-xs uppercase tracking-[0.15em] 
                                             border border-foreground/20 rounded-full text-muted-foreground
                                             transition-colors duration-200 hover:border-foreground/40 hover:text-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 pt-6 border-t border-border/30">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] 
                                         text-foreground transition-all duration-300 hover:tracking-[0.25em]"
                            >
                                View Live Project
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                                View Code
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
