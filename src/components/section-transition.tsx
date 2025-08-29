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
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true)
          setHasTriggered(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasTriggered])

  const getTransitionClass = () => {
    if (!isVisible) return 'opacity-0'
    
    switch (transitionType) {
      case 'slide':
        return 'section-slide-in section-entering'
      case 'zoom':
        return 'section-zoom-in section-entering'
      case 'flip':
        return 'section-flip-in section-entering'
      default:
        return 'section-slide-in section-entering'
    }
  }

  return (
    <div 
      ref={sectionRef}
      className={`section-transition-container ${getTransitionClass()} ${className}`}
      style={{
        animationDelay: `${sectionIndex * 0.2}s`
      }}
    >
      {children}
    </div>
  )
}