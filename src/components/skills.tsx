import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Wrench, Globe, Smartphone, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    description: 'Core languages I use for development',
    skills: [
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Python', level: 'Proficient' },
      { name: 'Java', level: 'Proficient' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: Globe,
    description: 'Modern web development tools',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Proficient' },
      { name: 'Node.js', level: 'Proficient' },
      { name: 'React Native', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Proficient' }
    ]
  },
  {
    title: 'Databases & Backend',
    icon: Database,
    description: 'Data management and server technologies',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'Supabase', level: 'Advanced' },
      { name: 'Drizzle ORM', level: 'Intermediate' },
      { name: 'SQL', level: 'Proficient' }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    description: 'Development and productivity tools',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Cursor', level: 'Proficient' },
      { name: 'n8n', level: 'Beginner' },
      // { name: 'Puppeteer', level: 'Proficient' }
    ]
  },
  {
    title: 'APIs & Integration',
    icon: Smartphone,
    description: 'Third-party services and integrations',
    skills: [
      { name: 'OpenAI API', level: 'Advanced' },
      { name: 'Google Places API', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Intermediate' },
      { name: 'Real-time Data Sync', level: 'Proficient' }
    ]
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    description: 'Essential interpersonal abilities',
    skills: [
      { name: 'Leadership', level: 'Advanced' },
      { name: 'Team Collaboration', level: 'Advanced' },
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Adaptability', level: 'Advanced' },
      { name: 'Creative Thinking', level: 'Advanced' }
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-500 text-white'
    case 'Proficient':
      return 'bg-blue-500 text-white'
    case 'Intermediate':
      return 'bg-yellow-500 text-black'
    case 'Beginner':
      return 'bg-gray-500 text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}

interface SkillCategoryProps {
  category: typeof skillCategories[0]
}

function SkillCategory({ category }: SkillCategoryProps) {
  const IconComponent = category.icon

  return (
    <Card className="group h-full">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors w-fit">
          <IconComponent className="h-8 w-8 text-blue-500" />
        </div>
        <CardTitle className="text-xl text-gray-100 group-hover:text-blue-500 transition-colors">
          {category.title}
        </CardTitle>
        <p className="text-gray-400 text-sm">
          {category.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {category.skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between gap-3">
              <span className="text-gray-300 text-sm font-medium flex-1">
                {skill.name}
              </span>
              <Badge 
                className={`${getLevelColor(skill.level)} text-xs px-2 py-1 flex-shrink-0`}
              >
                {skill.level}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build modern, 
            scalable applications and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="text-sm text-gray-400">
              <span className="font-medium text-gray-300">Currently Learning:</span> Advanced React Patterns, System Design, Cloud Architecture
            </div>
          </div>
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 flex justify-center">
          <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-medium text-gray-300 mb-3 text-center">Skill Level Guide</h4>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Badge className="bg-gray-500 text-white px-2 py-1">Beginner</Badge>
                <span className="text-gray-400">3 to 6 months experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500 text-black px-2 py-1">Intermediate</Badge>
                <span className="text-gray-400">6 months to 1 year</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500 text-white px-2 py-1">Proficient</Badge>
                <span className="text-gray-400">1 to 2 years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500 text-white px-2 py-1">Advanced</Badge>
                <span className="text-gray-400">2+ years experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}