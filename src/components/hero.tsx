import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a')
    link.href = '/Tanner Lee Resume.pdf' // We'll need to move the resume to the public folder
    link.download = 'Tanner_Lee_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Column */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <Avatar className="w-80 h-80 ring-4 ring-blue-500 ring-offset-4 ring-offset-slate-900">
              <AvatarImage 
                src="/profile-photo.jpg" 
                alt="Tanner Lee professional headshot"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl font-bold bg-blue-500 text-white">
                TL
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Content Column */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="text-gray-100">Tanner</span>{' '}
              <span className="text-blue-500">Lee</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6">
              Full-Stack Developer
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science student at UW-Madison with experience building scalable web applications. 
              Currently studying abroad at Korea University, passionate about creating innovative solutions 
              that make a meaningful impact.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleContactClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://github.com/tannerlee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Tanner's GitHub profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/tanner-lee2022" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Tanner's LinkedIn profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleDownloadResume}
                  aria-label="Download Tanner's resume"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}