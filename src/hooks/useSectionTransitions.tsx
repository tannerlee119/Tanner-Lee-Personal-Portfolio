'use client'

import { useEffect, useRef, useState } from 'react'

export function useSectionTransitions() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return

      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      sectionsRef.current.forEach((section, index) => {
        if (!section) return
        
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (index !== currentSection) {
            setIsTransitioning(true)
            setCurrentSection(index)
            
            // Reset transition state after animation completes
            setTimeout(() => setIsTransitioning(false), 1000)
          }
        }
      })
    }

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [currentSection, isTransitioning])

  const registerSection = (element: HTMLElement | null, index: number) => {
    if (element) {
      sectionsRef.current[index] = element
    }
  }

  return {
    currentSection,
    isTransitioning,
    registerSection
  }
}