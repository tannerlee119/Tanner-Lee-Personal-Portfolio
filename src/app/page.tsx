'use client'

import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-slate-800/50 border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tanner Lee. Built with Next.js, Tailwind CSS, and shadcn/ui.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed with accessibility and performance in mind.
          </p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  )
}
