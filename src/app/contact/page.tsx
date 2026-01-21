
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowRight } from 'lucide-react'

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
    description: 'Available for calls'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Redmond, Washington',
    href: null,
    description: 'Open to relocation'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Open to new opportunities, collaborations, or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-card border-none hover:bg-white/5 transition-colors">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground/65">{method.label}</p>
                      {method.href ? (
                        <a href={method.href} className="text-foreground font-semibold hover:text-blue-500 transition-colors truncate block">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold truncate">{method.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4">
              <Button size="lg" variant="outline" className="flex-1 gap-2" asChild>
                <a href="https://github.com/tannerlee119" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 gap-2" asChild>
                <a href="https://linkedin.com/in/tannerlee119" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Social / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full glass-card border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardHeader>
                <CardTitle className="text-2xl">Let&apos;s build something together.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/75 leading-relaxed">
                  I&apos;m currently looking for full-time software development roles.
                  If you have an interesting project or position, please reach out!
                </p>

                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Full-stack development
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> AI Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Mobile Apps
                  </li>
                </ul>

                <Button className="w-full gap-2" size="lg" asChild>
                  <a href="mailto:tanner.lee2022@outlook.com">
                    <Send className="w-4 h-4" /> Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

