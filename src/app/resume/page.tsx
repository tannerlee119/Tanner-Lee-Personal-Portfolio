'use client'

import { motion } from 'framer-motion'
import { Download, ArrowUpRight } from 'lucide-react'

const experiences = [
  {
    type: 'Experience',
    items: [
      {
        company: 'Gabooja',
        role: 'Software Developer Intern',
        period: 'June 2025 - Present',
        location: 'Brooklyn, NY',
        achievements: [
          'Engineered full-stack web applications with Node.js architecture and real-time updates',
          'Built scalable user interfaces including Gabooja\'s Creator Discovery platform',
          'Implemented AI data-enrichment features with OpenAI API, TypeScript, and PostgreSQL',
          'Created detailed architecture documentation with C4 diagrams'
        ]
      },
      {
        company: 'SIDO',
        role: 'Data Management Intern',
        period: 'Jan 2024 - Aug 2024',
        location: 'Remote',
        achievements: [
          'Reviewed and cleaned League of Legends match data for analysis',
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
          'Developed a 12-week curriculum for 25 elementary students',
          'Introduced foundational computer science using MIT\'s Scratch platform'
        ]
      },
      {
        company: 'Handshake',
        role: 'Community Leader & Content Creator',
        period: 'Jan 2025 - May 2025',
        location: 'Remote',
        achievements: [
          'Achieved 30,000+ engagements creating blogs and video tutorials'
        ]
      }
    ]
  }
]

const skillCategories = [
  { title: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'] },
  { title: 'Frameworks', skills: ['React', 'Next.js', 'Node.js', 'React Native', 'NestJS'] },
  { title: 'Backend', skills: ['PostgreSQL', 'Firebase', 'Supabase', 'Redis'] },
  { title: 'Tools', skills: ['Git', 'Docker', 'OpenAI API', 'Playwright'] }
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
            Resume
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            My professional journey and technical expertise.
          </p>
          <button
            onClick={handleDownloadResume}
            className="group inline-flex items-center gap-3 px-6 py-3 
                     border border-foreground/30 text-foreground rounded-full
                     uppercase tracking-[0.15em] text-sm
                     transition-all duration-300 hover:border-foreground hover:tracking-[0.2em]"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </motion.div>

        {/* Experience Timeline */}
        {experiences.map((section, sectionIndex) => (
          <motion.div
            key={section.type}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: sectionIndex * 0.2 }}
            className="mb-20"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-10">
              {section.type}
            </h2>
            
            <div className="space-y-12 relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border/50" />
              
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pl-8 relative"
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] bg-foreground rounded-full" />
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-foreground">{item.role}</h3>
                      <p className="text-muted-foreground">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-2 w-1 h-1 bg-muted-foreground/50 rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Skills
          </h2>
          
          <div className="grid grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-foreground font-medium mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs uppercase tracking-[0.1em] 
                               border border-foreground/20 rounded-full text-muted-foreground
                               transition-colors duration-200 hover:border-foreground/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
