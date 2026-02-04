'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Award, Target, Users } from 'lucide-react'

const skills = [
  {
    category: 'Strategy',
    items: ['RTM Transformation', 'GTM Strategy', 'Commercial Synergy', 'Account Planning', 'M&A Strategy', 'Revenue Growth Management']
  },
  {
    category: 'Operations',
    items: ['Supply Chain Network Design', 'S&OP', 'Manpower Productivity', 'Service Transformation', 'After-Sales Analytics']
  },
  {
    category: 'Tech & Data',
    items: ['Python (SARIMA/VARMAX)', 'SQL', 'Salesforce CRM', 'Blue Yonder', 'Power BI', 'Tableau']
  },
  {
    category: 'Industries',
    items: ['Building Materials', 'Automotive', 'Banking', 'Metals', 'Industrial Products']
  },
]

const timeline = [
  {
    year: '2022 – Present',
    title: 'Associate Vice President',
    company: 'EY-Parthenon India',
    description: 'Lead high-stakes strategy engagements, managing teams of 3–6 consultants to deliver board-level growth and digital roadmaps across Building Materials, Automotive, and Banking sectors. Promoted from Senior Consultant.',
    icon: Briefcase,
    highlights: [
      '$1B+ growth strategies architected',
      '85% service cycle compression (Automotive OEM)',
      '12% YoY revenue growth (Cement major)',
    ],
  },
  {
    year: '2017 – 2020',
    title: 'Sales Manager (Flat Products)',
    company: 'Tata Steel India',
    description: 'Managed P&L of ₹2k Cr/month for Flat Products division, overseeing distribution across West Bengal & Odisha. Led dealer networks and trade influencers.',
    icon: Target,
    highlights: [
      '₹10 Cr incremental revenue via TPM',
      '4,000 tons/year additional volume',
      '20% improvement in order visibility',
    ],
  },
  {
    year: '2015 – 2017',
    title: 'PGDM in Marketing & Finance',
    company: 'Indian Institute of Management (IIM) Rohtak',
    description: 'Post Graduate Diploma in Management with specialization in Marketing and Finance from one of India\'s premier business schools.',
    icon: GraduationCap,
  },
  {
    year: '2010 – 2014',
    title: 'B.E. in Electrical & Electronics',
    company: 'Birla Institute of Technology (BIT) Mesra',
    description: 'Bachelor of Engineering degree providing strong analytical and technical foundation.',
    icon: GraduationCap,
  },
]

const expertise = [
  {
    icon: Target,
    label: 'Route-to-Market Strategy',
    description: 'Redesigning RTM models to optimize sales coverage and dealer engagement'
  },
  {
    icon: Users,
    label: 'Sales Transformation',
    description: 'Deploying beat-planning algorithms and incentive structures for large sales teams'
  },
  {
    icon: Award,
    label: 'Digital Excellence',
    description: 'Implementing CRM, DMS, and analytics solutions with high user adoption'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Rudrek Pan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={itemVariants}
                className="badge badge-primary mb-4"
              >
                About Me
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold mb-6"
              >
                Bridging <span className="gradient-text">Strategy</span> and <span className="gradient-text">Execution</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-6"
              >
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
                <p>
                  I&apos;m a Growth Strategy Leader with 7.5+ years of experience across EY-Parthenon and Tata Steel. I specialize in Route-to-Market (RTM) transformation, Revenue Growth Management (RGM), and Digital Sales Activation in complex, multi-tiered distribution environments.
                </p>
                <p>
                  My expertise spans Building Materials, Metals, Automotive, and Banking sectors. I have a proven track record of architecting $1B+ growth strategies and leading cross-functional teams to compress service cycles by 85% and drive double-digit YoY revenue growth.
                </p>
                <p>
                  At EY-Parthenon, I lead high-stakes strategy engagements, managing teams of 3–6 consultants to deliver board-level growth and digital roadmaps. Previously at Tata Steel, I managed a ₹2k Cr/month P&L and led distribution networks across West Bengal & Odisha.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Core Expertise</h2>
            <p className="section-subheading mx-auto">
              What I bring to every engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-hover p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.label}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Skills & Capabilities</h2>
            <p className="section-subheading mx-auto">
              The domains and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-display font-bold text-lg mb-4 text-slate-900 dark:text-slate-100">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">My Journey</h2>
            <p className="section-subheading mx-auto">
              Career milestones and education
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                )}

                {/* Icon */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className="card p-6">
                  <span className="badge badge-accent mb-2">{item.year}</span>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-500 font-medium mb-2">
                    {item.company}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    {item.description}
                  </p>
                  {item.highlights && (
                    <ul className="space-y-1">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Highlight */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 bg-gradient-to-br from-primary-500 to-primary-600 border-0"
            >
              <GraduationCap className="w-12 h-12 text-white/80 mb-4" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                IIM Rohtak
              </h3>
              <p className="text-white/80 mb-1">PGDM in Marketing & Finance</p>
              <p className="text-white/60 text-sm">2015 – 2017</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 bg-gradient-to-br from-accent-500 to-accent-600 border-0"
            >
              <GraduationCap className="w-12 h-12 text-white/80 mb-4" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                BIT Mesra
              </h3>
              <p className="text-white/80 mb-1">B.E. in Electrical & Electronics</p>
              <p className="text-white/60 text-sm">2010 – 2014</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
