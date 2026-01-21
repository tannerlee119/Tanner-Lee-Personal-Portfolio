'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      
      {/* Main Content - Centered */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name in serif */}
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl sm:text-8xl lg:text-9xl font-normal tracking-tight">
            Tanner Lee
          </h1>
          
          {/* Title - uppercase, wide tracking */}
          <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-muted-foreground">
            Software Developer
          </p>
        </motion.div>

        {/* Brief intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Recent Computer Science graduate from UW-Madison. Building 
          scalable, high-performance web applications with a focus on 
          elegant user experiences.
        </motion.p>

        {/* CTA Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] 
                       text-foreground transition-all duration-300 hover:tracking-[0.3em]"
          >
            View Work
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          
          <span className="hidden sm:block text-muted-foreground/30">—</span>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] 
                       text-muted-foreground transition-all duration-300 hover:text-foreground hover:tracking-[0.3em]"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Bottom social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center gap-8"
      >
        <a 
          href="https://github.com/tannerlee119" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://linkedin.com/in/tannerlee119" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="mailto:tanner.lee2022@outlook.com" 
          aria-label="Send Email"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <Mail className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}