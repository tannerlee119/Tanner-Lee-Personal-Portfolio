'use client'

import { motion } from 'framer-motion'
import { Music, Mountain, Coffee, Footprints, Theater, Trophy } from 'lucide-react'

const interests = [
  { name: 'Piano', icon: Music, description: '16 years of experience' },
  { name: 'Bouldering', icon: Mountain, description: 'Rock climbing enthusiast' },
  { name: 'Food Blogging', icon: Coffee, description: 'Culinary exploration' },
  { name: 'Theatre', icon: Theater, description: 'Creative expression' },
  { name: 'Running', icon: Footprints, description: 'Track & Field Captain' },
  { name: 'Tae Kwon Do', icon: Trophy, description: 'Third-Degree Black Belt' }
]

const coreValues = [
  'Continuous Learning', 'Collaboration', 'User-Centered Design',
  'Technical Excellence', 'Creative Problem Solving', 'Community Impact'
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-normal mb-6">
            About
          </h1>
          <p className="text-muted-foreground text-lg">
            Passionate about building meaningful solutions.
          </p>
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8 mb-24"
        >
          <p className="text-lg text-foreground/90 leading-relaxed">
            I am a software developer recently graduated from UW-Madison,
            driven by curiosity and a deep love for building meaningful solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey into technology began with a simple curiosity about how things work.
            That curiosity evolved into a career path where I can combine technical problem-solving
            with creative design.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe in using code to create real-world impact. Whether building a food blog
            platform or a data analysis tool, my goal is always to improve the user&apos;s life
            through intuitive and performant software.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-normal mb-10 text-center">
            Values
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {coreValues.map((value, i) => (
              <span
                key={i}
                className="px-5 py-2 text-sm uppercase tracking-[0.12em] border border-foreground/20 
                         rounded-full text-muted-foreground transition-colors duration-200
                         hover:border-foreground/40 hover:text-foreground"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-normal mb-10 text-center">
            Beyond Code
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 
                              border border-foreground/20 rounded-full 
                              transition-colors duration-300 group-hover:border-foreground/40">
                  <interest.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="text-foreground font-medium mb-1">{interest.name}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
