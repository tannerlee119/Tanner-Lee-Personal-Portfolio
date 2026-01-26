'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navigationItems = [
  { name: 'Work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' }
]

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
      </div>

      {/* Bottom navigation links */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-3"
      >
        {navigationItems.map((item, index) => (
          <div key={item.name} className="flex items-center gap-3">
            <Link
              href={item.href}
              className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground 
                         transition-all duration-300 hover:text-foreground hover:tracking-[0.25em]"
            >
              {item.name}
            </Link>
            {index < navigationItems.length - 1 && (
              <span className="text-muted-foreground/40">/</span>
            )}
          </div>
        ))}
      </motion.nav>
    </section>
  )
}