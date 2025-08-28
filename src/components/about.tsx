import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Music, Mountain, Coffee, Footprints, Theater, Trophy } from 'lucide-react'

const interests = [
  { name: 'Piano', icon: Music, description: '16 years of experience' },
  { name: 'Bouldering', icon: Mountain, description: 'Rock climbing enthusiast' },
  { name: 'Food Blogging', icon: Coffee, description: 'Culinary exploration' },
  { name: 'Theatre', icon: Theater, description: 'Creative expression' },
  { name: 'Running', icon: Footprints, description: 'HS Track Captain' },
  { name: 'Tae Kwon Do', icon: Trophy, description: 'Third-Degree Black Belt and Instructor' }
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* Personal Narrative */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              <p className="text-lg">
                I&apos;m a passionate full-stack developer recently graduated with a Bachelor&apos;s degree in Computer Science 
                from the University of Wisconsin-Madison.
              </p>
              
              <p className="text-lg">
                Currently studying abroad at Korea University in Seoul, I&apos;m expanding my global perspective 
                while diving deeper into advanced computer science concepts. This international experience 
                has not only broadened my technical skills but also enhanced my ability to collaborate 
                across cultures and adapt to new environments.
              </p>
              
              <p className="text-lg">
                What drives me most is the intersection of creativity and problem-solving that programming 
                offers. Whether I&apos;m architecting a full-stack web application, optimizing database queries, 
                or mentoring elementary students in coding, I approach each challenge with enthusiasm and 
                attention to detail. I believe the best solutions come from understanding both the technical 
                requirements and the human needs behind every project.
              </p>
            </div>
          </div>

          {/* Interests Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-8 text-center">
              Beyond Coding
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest) => (
                <Card key={interest.name} className="group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                        <interest.icon className="h-8 w-8 text-blue-500" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">
                      {interest.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Values */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-100 mb-8">Core Values</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Continuous Learning
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Collaboration
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                User-Centered Design
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Technical Excellence
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Creative Problem Solving
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Community Impact
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}