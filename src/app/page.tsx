'use client'

import { Hero } from '@/components/hero'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <main>
        <Hero />
        {/* We can add a "Featured" section here later if needed */}
      </main>

      <ScrollToTop />
    </div>
  )
}

