'use client'

import { ReactNode } from 'react'
import { useAdvancedScrollAnimation, useParallaxScroll } from '@/hooks/useParallaxScroll'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'hero-reveal' | 'parallax-float' | 'none'
  delay?: number
  parallax?: boolean
  intensity?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  parallax = false,
  intensity = 0.3
}: AnimatedSectionProps) {
  const { isInView, scrollProgress, elementRef } = useAdvancedScrollAnimation({
    threshold: 0.1,
    triggerOnce: true // Always trigger only once
  })

  const getAnimationClass = () => {
    if (animation === 'none') return ''
    
    const baseClass = isInView ? 'opacity-100' : 'opacity-0'
    const animationClass = isInView 
      ? (() => {
          switch (animation) {
            case 'fade-up': return 'animate-fade-in-up'
            case 'fade-left': return 'animate-fade-in-left'
            case 'fade-right': return 'animate-fade-in-right'
            case 'scale': return 'animate-slide-in-scale'
            case 'hero-reveal': return 'animate-hero-reveal'
            case 'parallax-float': return 'animate-parallax-float'
            default: return 'animate-fade-in-up'
          }
        })()
      : ''
    
    const delayClass = delay > 0 ? `animation-delay-${delay}` : ''
    
    return `${baseClass} ${animationClass} ${delayClass} hover-magnetic`.trim()
  }

  // Apply parallax transform based on scroll progress
  const parallaxStyle = parallax ? {
    transform: `translateY(${scrollProgress * 80 * intensity}px) scale(${1 + scrollProgress * 0.02})`,
    filter: `blur(${scrollProgress * 1}px)`
  } : {}

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
        ...parallaxStyle
      }}
    >
      {children}
    </div>
  )
}

export function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}) {
  const { scrollY, isVisible, elementRef } = useParallaxScroll()
  
  const transform = direction === 'up' 
    ? `translateY(${scrollY * speed}px)` 
    : `translateY(${-scrollY * speed}px)`

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'animate-parallax-float' : ''}`}
      style={{ 
        transform: isVisible ? transform : 'translateY(0)',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  )
}