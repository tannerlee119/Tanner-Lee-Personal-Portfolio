import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Play } from 'lucide-react'

const projects = [
  {
    title: 'Ranked Log',
    description: 'A full-stack web application for tracking and analyzing League of Legends performance with comprehensive statistics and filtering.',
    longDescription: 'Built with Next.js 15, TypeScript, and SQLite for League of Legends performance tracking. Features game logging with champion picks and performance stats (K/D/A, Kill Participation, CS per minute), advanced filtering by role, game type, and champions, calculated average metrics, and complete game history visualization.',
    image: '/projects/ranked-log.png',
    technologies: ['Next.js 15', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Better-SQLite3', 'Performance Analytics'],
    githubUrl: 'https://github.com/tannerlee119/Ranked-Log',
    liveUrl: 'https://ranked-log.vercel.app/stats',
    featured: true
  },
  {
    title: 'Gabooja Creator Discovery',
    description: 'A Next.js application for discovering and analyzing social media creators across Instagram and TikTok with AI-powered insights.',
    longDescription: 'Built with Next.js 15, TypeScript, and Supabase for comprehensive creator analysis. Features AI-powered insights using OpenAI GPT, web scraping with Playwright, advanced filtering system, and real-time analytics for multi-platform creator discovery.',
    image: '/projects/gabooja.png',
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Playwright', 'OpenAI GPT', 'Radix UI'],
    githubUrl: 'https://github.com/tannerlee119/gaboojacreatordiscovery',
    liveUrl: 'https://gaboojacreatordiscovery.vercel.app',
    featured: true
  },
  {
    title: 'BiteRank',
    description: 'A full-stack restaurant review web app that enables users to track, rate, and discover restaurants with interactive map features.',
    longDescription: 'Built with React, TypeScript, Node.js, and PostgreSQL using Drizzle ORM. Features Google Places API integration for restaurant discovery, interactive map visualization with custom markers, geocoding, and a comprehensive bookmarking system with external data synchronization.',
    image: '/projects/biterank.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Google Places API', 'Maps Integration'],
    githubUrl: 'https://github.com/tannerlee119/BiteRank',
    liveUrl: null,
    featured: true
  },
  {
    title: 'The Move',
    description: 'A class team project built in React Native designed to help groups create, track, and manage group activities with ease.',
    longDescription: 'Engineered with React Native and Firebase integration for secure authentication. Enables users to create, update, and access events with real-time data synchronization, providing a seamless group coordination experience.',
    image: '/projects/the-move.png',
    technologies: ['React Native', 'Firebase', 'Real-time Sync', 'Authentication', 'Mobile Development'],
    githubUrl: 'https://github.com/tannerlee119/The_Move',
    liveUrl: null,
    featured: true
  },
  {
    title: 'Sorting Visualizer',
    description: 'An interactive web application that visualizes 15 different sorting algorithms in real-time to enhance algorithmic understanding.',
    longDescription: 'Developed with React, JavaScript, HTML, and CSS. Features asynchronous functions to animate sorting processes, helping users understand algorithmic steps, time complexity, and performance characteristics of various sorting methods.',
    image: '/projects/sorting-visualizer.png',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Algorithm Visualization', 'Animation'],
    githubUrl: 'https://github.com/tannerlee119/sorting-visualizer',
    liveUrl: 'https://sorting-visualizer-seven-kappa.vercel.app/',
    featured: false
  }
]

interface ProjectCardProps {
  project: typeof projects[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={`group h-full ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="aspect-video bg-gray-700 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
          {/* Placeholder for project screenshot */}
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <div className="text-center p-6">
              <Play className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Project Screenshot</p>
              <p className="text-gray-500 text-xs mt-1">{project.title}</p>
            </div>
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
              
              {project.liveUrl && (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-gray-100 group-hover:text-blue-500 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.longDescription}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 sm:flex-none"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, 
            mobile applications, and interactive web experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            asChild
            className="px-8 py-3"
          >
            <a
              href="https://github.com/tannerlee119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}