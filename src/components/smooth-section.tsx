'use client'

import React, { useEffect, useRef, useState } from 'react'

interface SmoothSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'fade' | 'slide' | 'scale'
}

export function SmoothSection({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade'
}: SmoothSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '20px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isMounted])

  const getAnimationClass = () => {
    if (!isMounted) return 'opacity-0'
    
    const base = 'transition-all duration-700 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'slide':
          return `${base} opacity-0 translate-y-8`
        case 'scale':
          return `${base} opacity-0 scale-95`
        default:
          return `${base} opacity-0`
      }
    }

    return `${base} opacity-100 translate-y-0 scale-100`
  }

  return (
    <div 
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}