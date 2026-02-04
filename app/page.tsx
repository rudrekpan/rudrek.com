'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Mail, ChevronDown, Briefcase, TrendingUp } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'
import { UpdateCard } from '@/components/UpdateCard'

const featuredProjects = [
  {
    title: 'Sales Transformation & RTM Redesign',
    description: 'Architected comprehensive RTM overhaul for a leading cement major facing 4 consecutive quarters of de-growth. Reversed 12-month decline to achieve 12% YoY revenue growth.',
    slug: 'sales-transformation-rtm',
    tags: ['RTM Strategy', 'Sales Transformation', 'Cement Industry'],
    status: 'completed' as const,
  },
  {
    title: '5-Year Corporate Growth Strategy',
    description: 'Developed strategic roadmap for a $250M conglomerate to scale 5x to $1.2B by FY29. Secured Board approval with 10% PBT projection.',
    slug: 'corporate-growth-strategy',
    tags: ['Corporate Strategy', 'M&A', 'Growth Planning'],
    status: 'ongoing' as const,
  },
  {
    title: 'Service Transformation - Automotive',
    description: 'Led "war-room" transformation reducing service TAT by 85% (45 days to 5 days) for a 2W OEM. Cleared 30% of 5,000+ vehicle backlog.',
    slug: 'service-transformation-automotive',
    tags: ['Service Operations', 'Python Analytics', 'Automotive'],
    status: 'completed' as const,
  },
  {
    title: 'IT Cost Optimization - Banking',
    description: 'Directed strategic sourcing initiative for a Tier-1 Bank. Unlocked $1M+ in savings over 3 years through demand-side management.',
    slug: 'it-cost-optimization-banking',
    tags: ['IT Strategy', 'Cost Optimization', 'Banking'],
    status: 'completed' as const,
  },
]

const recentUpdates = [
  {
    title: 'The Art of Route-to-Market Strategy',
    excerpt: 'Lessons learned from optimizing RTM models across building materials and manufacturing sectors. How to bridge the gap between strategy and execution.',
    slug: 'route-to-market-strategy',
    date: 'Jan 15, 2024',
    readingTime: '5 min read',
    category: 'Strategy',
  },
  {
    title: 'Digital Transformation in Traditional Industries',
    excerpt: 'Why legacy industries struggle with digital adoption and how to achieve 90%+ user adoption in just 3 months.',
    slug: 'digital-transformation-traditional-industries',
    date: 'Jan 10, 2024',
    readingTime: '4 min read',
    category: 'Digital',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 mesh-gradient dark:mesh-gradient-dark opacity-30" />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Profile image */}
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-block"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-75 animate-pulse-slow" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800">
                  <Image
                    src="/images/rudrek.JPG"
                    alt="Rudrek Pan"
                    fill
                    className="object-cover scale-[3.2] translate-y-[2%]"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              <span className="block">Hey, I&apos;m</span>
              <span className="gradient-text">Rudrek Pan</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 max-w-3xl mx-auto text-balance"
            >
              Strategy & Operations Leader driving Digital Transformation and Commercial Excellence
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-500 dark:text-slate-500 mb-8 max-w-2xl mx-auto"
            >
              Associate Vice President at EY-Parthenon | 8+ years optimizing Route-to-Market strategies for complex industries
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <Link href="/projects" className="btn btn-primary">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn btn-secondary">
                About Me
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/rudrekpan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:rudrekpan.work@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-xs font-medium">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '4+', label: 'Years in B2B Sales' },
              { value: '4+', label: 'Years in Strategy Consulting' },
              { value: '∞', label: 'Curious Since Birth' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Experience</h2>
            <p className="section-subheading mx-auto">
              Driving commercial transformation at leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <span className="badge badge-primary mb-2">2022 – Present</span>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 mb-1">
                    Associate Vice President
                  </h3>
                  <p className="text-primary-500 font-medium mb-3">EY-Parthenon</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Leading engagement teams of 3–6 consultants delivering large-scale commercial transformation and digital strategy for C-suite clients in building materials and manufacturing sectors.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <span className="badge badge-accent mb-2">2017 – 2020</span>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 mb-1">
                    Sales Manager (Flat Products)
                  </h3>
                  <p className="text-accent-500 font-medium mb-3">Tata Steel</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Managed P&L and channel operations for a ₹2,400 Cr annual portfolio. Led dealer networks and trade influencers across West Bengal & Odisha markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-heading">Featured Projects</h2>
              <p className="section-subheading">
                Select engagements showcasing impact and expertise
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors group"
            >
              View all
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="btn btn-secondary">
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-heading">Insights & Updates</h2>
              <p className="section-subheading">
                Thoughts on strategy, digital transformation, and leadership
              </p>
            </div>
            <Link
              href="/updates"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors group"
            >
              View all
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentUpdates.map((update) => (
              <UpdateCard key={update.slug} {...update} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/updates" className="btn btn-secondary">
              View all updates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Interested in discussing strategy, digital transformation, or potential collaborations? I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-primary-600 hover:bg-slate-100 shadow-xl"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
