'use client'

import { useEffect, useRef, useState } from 'react'

export function useParallaxScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(isInView)
      }
    }

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', handleScrollThrottled, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled)
    }
  }, [])

  return { scrollY, isVisible, elementRef }
}

interface UseAdvancedScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useAdvancedScrollAnimation(options: UseAdvancedScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options

  const [isInView, setIsInView] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    // Scroll progress calculation
    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + window.scrollY
      const elementHeight = rect.height
      const windowHeight = window.innerHeight
      
      const startOffset = elementTop - windowHeight
      const endOffset = elementTop + elementHeight
      const totalDistance = endOffset - startOffset
      
      const progress = Math.max(0, Math.min(1, 
        (window.scrollY - startOffset) / totalDistance
      ))
      
      setScrollProgress(progress)
    }

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', handleScrollThrottled, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollThrottled)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { isInView, scrollProgress, elementRef }
}