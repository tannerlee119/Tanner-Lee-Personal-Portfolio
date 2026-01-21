'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tanner.lee2022@outlook.com',
    href: 'mailto:tanner.lee2022@outlook.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(425) 735-3055',
    href: 'tel:+14257353055'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Redmond, Washington',
    href: null
  }
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/tannerlee119' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/tannerlee119' }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-normal mb-6">
            Contact
          </h1>
          <p className="text-muted-foreground text-lg">
            Open to new opportunities, collaborations, or just a friendly chat.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-6 py-6 border-b border-border/30"
            >
              <div className="w-12 h-12 border border-foreground/20 rounded-full flex items-center justify-center">
                <method.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-1">
                  {method.label}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-lg text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-lg text-foreground">{method.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-6 mb-20"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-foreground/20 rounded-full flex items-center justify-center
                       text-muted-foreground transition-all duration-300
                       hover:border-foreground/40 hover:text-foreground"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center border border-border/30 rounded-2xl p-10"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-normal mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I&apos;m currently looking for full-time software development roles.
            If you have an interesting project or position, please reach out.
          </p>
          <a
            href="mailto:tanner.lee2022@outlook.com"
            className="group inline-flex items-center gap-3 px-8 py-4 
                     border border-foreground text-foreground rounded-full
                     uppercase tracking-[0.15em] text-sm
                     transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Send Message
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </div>
  )
}
