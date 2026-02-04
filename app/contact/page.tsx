'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Download, Linkedin, Phone, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rudrekpan',
    icon: Linkedin,
    description: 'Connect professionally',
  },
  {
    name: 'Email',
    href: 'mailto:rudrekpan.work@gmail.com',
    icon: Mail,
    description: 'Send me an email',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="badge badge-primary mb-4">Contact</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Interested in discussing strategy consulting, digital transformation, or potential collaborations? I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="space-y-8">
                {/* Quick Info */}
                <div className="card p-6">
                  <h2 className="text-xl font-display font-bold mb-6 text-slate-900 dark:text-slate-100">
                    Get in Touch
                  </h2>

                  <div className="space-y-4">
                    <a
                      href="mailto:rudrekpan.work@gmail.com"
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary-500" />
                      </div>
                      <span>rudrekpan.work@gmail.com</span>
                    </a>

                    <a
                      href="tel:+918797446463"
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent-500" />
                      </div>
                      <span>+91 8797446463</span>
                    </a>

                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-emerald-500" />
                      </div>
                      <span>India</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-amber-500" />
                      </div>
                      <span>Usually responds within 24h</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card p-6">
                  <h2 className="text-xl font-display font-bold mb-6 text-slate-900 dark:text-slate-100">
                    Connect Online
                  </h2>

                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                          <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-slate-100">
                            {social.name}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-500">
                            {social.description}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <div className="card p-6 bg-gradient-to-br from-primary-500 to-accent-500 border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-white mb-1">
                        Download Resume
                      </h3>
                      <p className="text-sm text-white/80">
                        Get my full CV in PDF format
                      </p>
                    </div>
                    <motion.a
                      href="/resume.pdf"
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    >
                      <Download className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                <h2 className="text-2xl font-display font-bold mb-2 text-slate-900 dark:text-slate-100">
                  Send a Message
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>

                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Collaboration */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100">
              Areas of Collaboration
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I&apos;m open to discussions on the following topics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategy Consulting',
                description: 'Commercial strategy, Route-to-Market optimization, Revenue Growth Management',
              },
              {
                title: 'Digital Transformation',
                description: 'CRM/DMS implementation, Sales operations automation, Change management',
              },
              {
                title: 'Speaking & Advisory',
                description: 'Industry events, workshops, advisory roles for startups and enterprises',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
