'use client'

import React, { useEffect, useRef, useState } from 'react'

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
  sectionIndex: number
  transitionType?: 'slide' | 'zoom' | 'flip'
}

export function SectionTransition({ 
  children, 
  className = '', 
  sectionIndex,
  transitionType = 'slide' 
}: SectionTransitionProps) {
  // Hero section (index 0) should start visible, others start hidden immediately
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Set mounted state to prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
    if (sectionIndex === 0) {
      setIsVisible(true)
      setHasTriggered(true)
    }
  }, [sectionIndex])

  useEffect(() => {
    // Skip intersection observer for hero section
    if (sectionIndex === 0 || !isMounted) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true)
          setHasTriggered(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasTriggered, sectionIndex, isMounted])

  const getTransitionClass = () => {
    if (!isMounted) return 'opacity-0' // Prevent flash during hydration
    
    const baseClasses = 'section-entering'
    
    // Hero section (index 0) should always be visible without animation
    if (sectionIndex === 0) {
      return baseClasses
    }
    
    if (!isVisible) {
      // Before animation: set initial transform state
      switch (transitionType) {
        case 'slide':
          return `${baseClasses} section-slide-initial`
        case 'zoom':
          return `${baseClasses} section-zoom-initial`
        case 'flip':
          return `${baseClasses} section-flip-initial`
        default:
          return `${baseClasses} section-slide-initial`
      }
    }
    
    // During/after animation: apply the animation class
    switch (transitionType) {
      case 'slide':
        return `${baseClasses} section-slide-in`
      case 'zoom':
        return `${baseClasses} section-zoom-in`
      case 'flip':
        return `${baseClasses} section-flip-in`
      default:
        return `${baseClasses} section-slide-in`
    }
  }

  return (
    <div 
      ref={sectionRef}
      className={`section-transition-container ${getTransitionClass()} ${className}`}
      style={{
        animationDelay: sectionIndex === 0 ? '0s' : `${sectionIndex * 0.1}s`
      }}
    >
      {children}
    </div>
  )
}