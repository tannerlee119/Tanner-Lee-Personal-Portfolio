import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin } from 'lucide-react'

const technicalExperience = [
  {
    company: 'Gabooja',
    position: 'Software Developer Intern',
    location: 'Brooklyn, NY',
    period: 'June 2025 - Present',
    logo: '/logos/gabooja-logo.png',
    description: 'Full-stack development for creator discovery platform',
    achievements: [
      'Engineered full-stack web applications with Node.js architecture and real-time updates',
      'Built scalable user interfaces including Gabooja\'s Creator Discovery platform',
      'Implemented AI data-enrichment features with OpenAI API, TypeScript, and PostgreSQL (Supabase)',
      'Architected and optimized PostgreSQL databases with complex querying systems for data analytics'
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'OpenAI API', 'React']
  }
]

const leadershipExperience = [
  {
    organization: 'Crestwood Coding Club',
    position: 'Program Leader',
    location: 'Madison, WI',
    period: 'January 2025 - May 2025',
    logo: '/logos/crestwood-logo.png',
    description: 'Computer science education for elementary students',
    achievements: [
      'Developed and executed a 12-week, project-based curriculum for 25 elementary students',
      'Introduced foundational computer science principles using MIT\'s Scratch platform',
      'Guided 100% of students through full development process to create interactive games',
      'Drove 30% increase in club enrollment through strategic outreach and showcases'
    ],
    technologies: ['MIT Scratch', 'Curriculum Design', 'Educational Technology']
  },
  {
    organization: 'Handshake',
    position: 'Community Leader & Content Creator',
    location: 'Remote',
    period: 'January 2025 - May 2025',
    logo: '/logos/handshake-logo.png',
    description: 'Content creation and community engagement for university students',
    achievements: [
      'Achieved 30,000+ engagements creating high-impact content including blogs and video tutorials',
      'Curated engaging video content for niche university students focusing on career development',
      'Amplified diverse voices by spotlighting unique student perspectives and career stories',
      'Enhanced platform engagement through strategic content creation and community building'
    ],
    technologies: ['Content Creation', 'Video Production', 'Community Management', 'Social Media Strategy']
  },
  {
    organization: 'Hwang\'s Tae Kwon Do',
    position: 'Instructor',
    location: 'Redmond, WA',
    period: 'May 2014 - August 2022',
    logo: '/logos/taekwondo-logo.png',
    description: 'Martial arts instruction and program leadership',
    achievements: [
      'Designed and led advanced competition classes for high-level athletes',
      'Co-led demonstration team, choreographing routines and managing performance logistics',
      'Instructed daily classes for diverse groups up to 30 students (ages 4 to adult)',
      'Developed adaptive teaching methods fostering discipline, confidence, and skill progression'
    ],
    technologies: ['Leadership', 'Program Development', 'Performance Management', 'Team Coordination']
  }
]

interface ExperienceCardProps {
  item: typeof technicalExperience[0]
}

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <Card className="group h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-500 font-bold text-lg">
                  {item.company ? item.company[0] : item.organization[0]}
                </span>
              </div>
              <div className="min-w-0">
                <CardTitle className="text-xl text-gray-100 group-hover:text-blue-500 transition-colors">
                  {'company' in item ? item.company : item.organization}
                </CardTitle>
                <CardDescription className="text-blue-400 font-medium">
                  {item.position}
                </CardDescription>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400 mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {item.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {item.location}
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">{item.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-4">
          <ul className="space-y-2">
            {item.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-blue-500 mt-2 flex-shrink-0">•</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {/* Technical Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">💻</span>
              </span>
              Technical Experience
            </h3>
            
            <div className="grid gap-6">
              {technicalExperience.map((item, index) => (
                <ExperienceCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Leadership & Community Involvement */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🌟</span>
              </span>
              Leadership & Community Involvement
            </h3>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {leadershipExperience.map((item, index) => (
                <ExperienceCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}