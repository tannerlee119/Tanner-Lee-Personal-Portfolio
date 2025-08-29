'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'none'
  delay?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getAnimationClass = () => {
    if (animation === 'none') return ''
    
    const baseClass = isVisible ? 'opacity-100' : 'opacity-0'
    const animationClass = isVisible 
      ? (() => {
          switch (animation) {
            case 'fade-up': return 'animate-fade-in-up'
            case 'fade-left': return 'animate-fade-in-left'
            case 'fade-right': return 'animate-fade-in-right'
            case 'scale': return 'animate-slide-in-scale'
            default: return 'animate-fade-in-up'
          }
        })()
      : ''
    
    const delayClass = delay > 0 ? `animation-delay-${delay}` : ''
    
    return `${baseClass} ${animationClass} ${delayClass}`.trim()
  }

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}