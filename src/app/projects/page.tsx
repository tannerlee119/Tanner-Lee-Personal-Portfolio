'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-28 pb-16 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-normal mb-4">
                        Work
                    </h1>
                    <p className="text-muted-foreground text-base max-w-lg mx-auto">
                        A showcase of my technical journey, featuring full-stack applications 
                        and interactive experiments.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.slug}
                            variants={itemVariants}
                            className="group"
                        >
                            <Link href={`/projects/${project.slug}`} className="block">
                                {/* Project Card */}
                                <div className="relative rounded-xl overflow-hidden bg-card border border-border/40 
                                              transition-all duration-300 hover:border-border hover:shadow-lg">
                                    {/* Project Image */}
                                    <div className="relative aspect-[16/9] bg-muted">
                                        {project.featured && (
                                            <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-[0.15em] 
                                                           text-muted-foreground bg-background/80 px-2 py-1 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]" />
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-muted-foreground text-xs uppercase tracking-widest">
                                                Preview
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-5 space-y-3">
                                        <h2 className="font-[family-name:var(--font-playfair)] text-xl font-normal 
                                                     group-hover:text-foreground transition-colors">
                                            {project.title}
                                        </h2>
                                        
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Technologies - Max 3 */}
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] 
                                                             border border-foreground/15 rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] 
                                                               text-muted-foreground/60">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
