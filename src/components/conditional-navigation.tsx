'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'

export function ConditionalNavigation() {
  const pathname = usePathname()
  
  // Hide navigation on homepage - it will have its own bottom nav
  if (pathname === '/') {
    return null
  }
  
  return <Navigation />
}
