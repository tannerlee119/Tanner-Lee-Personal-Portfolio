'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigationItems = [
  { name: 'Work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-background/80 backdrop-blur-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Editorial serif style */}
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-xl tracking-tight text-foreground 
                       transition-all duration-300 hover:tracking-wide"
          >
            Tanner Lee
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-[0.15em] transition-all duration-300
                  hover:tracking-[0.25em] hover:text-foreground
                  ${pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social icons separator */}
            <span className="text-muted-foreground/30">|</span>
            
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/tannerlee119" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/tannerlee119" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:tanner.lee2022@outlook.com" 
                aria-label="Send Email"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 bg-background z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-[family-name:var(--font-playfair)] text-3xl text-foreground mb-8"
              >
                Tanner Lee
              </Link>
              
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl uppercase tracking-[0.2em] transition-all duration-300
                      hover:tracking-[0.35em]
                      ${pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Close button positioned at top right */}
            <button
              className="absolute top-6 right-6 p-2 text-foreground"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}