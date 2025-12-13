
'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, MapPin, Briefcase, Award, Code, Database, Wrench, Globe, Smartphone, Brain } from 'lucide-react'

// Experience Data
const experiences = [
  {
    type: 'Technical Experience',
    items: [
      {
        company: 'Gabooja',
        role: 'Software Developer Intern',
        period: 'June 2025 - Present',
        location: 'Brooklyn, NY',
        achievements: [
          'Engineered full-stack web applications with Node.js architecture and real-time updates',
          'Built scalable user interfaces including Gabooja\'s Creator Discovery platform',
          'Implemented AI data-enrichment features with OpenAI API, TypeScript, and PostgreSQL (Supabase)',
          'Created detailed architecture documentation with C4 diagrams'
        ]
      },
      {
        company: 'SIDO',
        role: 'Data Management Intern',
        period: 'Jan 2024 - Aug 2024',
        location: 'Remote',
        achievements: [
          'Manually reviewed and cleaned League of Legends match data',
          'Identified inconsistent statistics and updated team composition records',
          'Troubleshot API connectivity issues with Riot Games servers'
        ]
      }
    ]
  },
  {
    type: 'Leadership',
    items: [
      {
        company: 'Crestwood Coding Club',
        role: 'Program Leader',
        period: 'Jan 2025 - May 2025',
        location: 'Madison, WI',
        achievements: [
          'Developed and executed a 12-week, project-based curriculum for 25 elementary students',
          'Introduced foundational computer science principles using MIT\'s Scratch platform'
        ]
      },
      {
        company: 'Handshake',
        role: 'Community Leader & Content Creator',
        period: 'Jan 2025 - May 2025',
        location: 'Remote',
        achievements: [
          'Achieved 30,000+ engagements creating high-impact content including blogs and video tutorials'
        ]
      }
    ]
  }
]

// Skills Data
const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL']
  },
  {
    title: 'Frameworks',
    icon: Globe,
    skills: ['React', 'Next.js', 'Node.js', 'React Native', 'Tailwind CSS', 'NestJS']
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['PostgreSQL', 'Firebase', 'Supabase', 'Drizzle ORM', 'SQLite']
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'VS Code', 'Cursor', 'OpenAI API', 'Google Places API']
  }
]

export default function ResumePage() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Tanner Lee Resume.pdf'
    link.download = 'Tanner_Lee_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Resume</h1>
          <p className="text-xl text-muted-foreground">My professional journey and technical expertise.</p>
          <Button onClick={handleDownloadResume} className="gap-2" size="lg">
            <Download className="w-4 h-4" /> Download PDF
          </Button>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((section, sectionIndex) => (
            <div key={section.type}>
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                {section.type === 'Technical Experience' ? <Code className="text-blue-500" /> : <Award className="text-blue-500" />}
                {section.type}
              </h2>
              <div className="space-y-8 relative border-l-2 border-border ml-3 pl-8 pb-4">
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-blue-500" />
                    <Card className="glass-card border-none">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <CardTitle className="text-xl font-bold">{item.role}</CardTitle>
                          <Badge variant="secondary" className="w-fit">{item.period}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground font-medium">
                          <Briefcase className="w-4 h-4" /> {item.company}
                          <span className="mx-2">•</span>
                          <MapPin className="w-4 h-4" /> {item.location}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Brain className="text-blue-500" />
            Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full glass-card border-none">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <category.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-background/50">
                          {skill}
                        </Badge>
                      ))}
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

