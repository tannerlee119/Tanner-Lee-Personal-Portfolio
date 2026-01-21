'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-500 mb-4">Hello, I&apos;m</h2>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
              Tanner Lee<span className="text-blue-500">.</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground/70 mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Recent Computer Science graduate from UW-Madison tailored for building scalable,
              high-performance web applications. I craft digital experiences that are
              fast, accessible, and visually stunning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="text-base px-8 py-6 h-auto" asChild>
              <Link href="/projects">
                View Work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto" asChild>
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6 justify-center lg:justify-start pt-4"
          >
            <a href="https://github.com/tannerlee119" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground/60 hover:text-blue-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/tannerlee119" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/60 hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:tanner.lee2022@outlook.com" aria-label="Send Email" className="text-foreground/60 hover:text-blue-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <Avatar className="w-full h-full border-4 border-background shadow-2xl">
              <AvatarImage src="/Tanner_Lee_Headshot.jpeg" alt="Tanner Lee" className="object-cover" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

      </div>
    </section>
  )
}