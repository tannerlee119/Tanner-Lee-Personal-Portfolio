'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Music, Mountain, Coffee, Footprints, Theater, Trophy, Heart, Zap } from 'lucide-react'

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
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I am a passionate software developer recently graduated from UW-Madison,
            driven by curiosity and a deep love for building meaningful solutions.
          </p>
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6"
        >
          <p>
            My journey into technology began with a simple curiosity about how things work.
            That curiosity evolved into a career path where I can combine technical problem-solving
            with creative design.
          </p>
          <p>
            I believe in using code to create real-world impact. Whether building a food blog
            platform or a data analysis tool, my goal is always to improve the user&apos;s life
            through intuitive and performant software.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Heart className="text-red-500 w-6 h-6" /> Core Values
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {coreValues.map((value, i) => (
              <Badge key={i} variant="secondary" className="px-4 py-2 text-sm bg-secondary/50 backdrop-blur-sm">
                {value}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Interests Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Zap className="text-yellow-500 w-6 h-6" /> Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full glass-card border-none hover:bg-white/10 transition-colors">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <interest.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{interest.name}</h3>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
