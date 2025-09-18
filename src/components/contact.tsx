import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tanner.lee2022@outlook.com',
    href: 'mailto:tanner.lee2022@outlook.com',
    description: 'Best way to reach me'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(425) 735-3055',
    href: 'tel:+14257353055',
    description: 'Available for calls with notice'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Redmond, Washington',
    href: null,
  }
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/tannerlee119',
    description: 'Check out my code'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tannerlee119',
    description: 'Let\'s connect professionally'
  }
]

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:tanner.lee2022@outlook.com?subject=Let%27s Connect!&body=Hi Tanner,%0A%0AI came across your portfolio and would like to connect.%0A%0A'
  }

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I am always open to discussing new opportunities, collaborating on interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you are a recruiter looking for talent, a fellow developer interested in collaboration, 
                or someone who wants to discuss technology, I would love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-blue-500/50 transition-colors">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <method.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-medium">{method.label}:</span>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-blue-500 hover:text-blue-400 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-blue-500">{method.value}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-100">Find Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    asChild
                    className="flex-1 h-auto p-4 flex-col gap-2"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <social.icon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-xs text-gray-400">{social.description}</div>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-gray-100">
                  Ready to Start a Conversation?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    I&apos;m currently looking for:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2 text-left list-disc list-inside mb-6">
                    <li>Full-time software development opportunities</li>
                    <li>Freelance and consulting projects</li>
                    <li>Open source collaborations</li>
                    <li>Technical discussions and mentorship</li>
                  </ul>
                </div>

                <Button
                  onClick={handleEmailClick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Me a Message
                </Button>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    I typically respond within 24-48 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gray-800/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-gray-100 font-medium">Currently Available</p>
                    <p className="text-gray-400 text-sm">
                      Actively seeking opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}