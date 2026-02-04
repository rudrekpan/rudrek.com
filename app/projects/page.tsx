'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'

const projects = [
  {
    title: 'Sales Transformation & RTM Redesign',
    description: 'Reversed 12-month decline to achieve 12% YoY revenue growth for a leading cement manufacturer.',
    slug: 'sales-transformation-rtm',
    tags: ['RTM Strategy', 'Sales Transformation', 'Cement Industry'],
    status: 'completed' as const,
    featured: true,
  },
  {
    title: '5-Year Corporate Growth Strategy',
    description: 'Board-approved roadmap to scale a $250M conglomerate 5x to $1.2B by FY29.',
    slug: 'corporate-growth-strategy',
    tags: ['Corporate Strategy', 'M&A', 'Growth Planning'],
    status: 'ongoing' as const,
    featured: true,
  },
  {
    title: 'Service Transformation & After-Sales Analytics',
    description: 'Reduced service TAT by 85% (45 days to 5 days) for a 2-Wheeler Automotive OEM.',
    slug: 'service-transformation-automotive',
    tags: ['Service Operations', 'Python Analytics', 'Automotive'],
    status: 'completed' as const,
  },
  {
    title: 'Supply Chain & Network Optimization',
    description: '14-year capacity expansion plan for 7M tons using Blue Yonder optimization.',
    slug: 'supply-chain-network-design',
    tags: ['Blue Yonder', 'Supply Chain', 'Building Materials'],
    status: 'completed' as const,
  },
  {
    title: 'IT Cost Optimization & P&L Shielding',
    description: 'Unlocked $1M+ in savings over 3 years for a Tier-1 Retail Bank.',
    slug: 'it-cost-optimization-banking',
    tags: ['IT Strategy', 'Cost Optimization', 'Banking'],
    status: 'completed' as const,
  },
  {
    title: 'Digital Transformation - CRM & DMS',
    description: 'Achieved 90%+ user adoption within 3 months for Salesforce CRM & DMS rollout.',
    slug: 'digital-transformation-crm-dms',
    tags: ['Salesforce CRM', 'DMS', 'Digital Transformation'],
    status: 'completed' as const,
  },
  {
    title: 'Trade Promotion Excellence Program',
    description: 'Generated ₹10 Cr incremental revenue through pre-seasonal dealer reward program.',
    slug: 'trade-promotion-tata-steel',
    tags: ['TPM', 'Dealer Programs', 'Steel Industry'],
    status: 'completed' as const,
  },
  {
    title: 'Market Mapping & Expansion',
    description: 'Unlocked 4,000 tons/year additional volume through density mapping in East India.',
    slug: 'market-mapping-expansion',
    tags: ['Market Entry', 'Channel Development', 'Steel Industry'],
    status: 'completed' as const,
  },
  {
    title: 'Digital Sales Activation & Dashboards',
    description: 'Improved order visibility by 20% through interactive sales and logistics dashboards.',
    slug: 'digital-sales-activation',
    tags: ['Sales Analytics', 'Dashboards', 'Automation'],
    status: 'completed' as const,
  },
  {
    title: 'SKU-Level Demand Forecasting',
    description: 'Achieved 8% forecasting accuracy uplift for 1,000+ automotive SKUs using Python.',
    slug: 'demand-forecasting-automotive',
    tags: ['Python', 'SARIMA', 'Forecasting', 'Automotive'],
    status: 'completed' as const,
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'In Progress', value: 'ongoing' },
  { label: 'Completed', value: 'completed' },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.status === activeFilter
  )

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Client <span className="gradient-text">Engagements</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Select projects from my consulting practice at EY-Parthenon and industry experience at Tata Steel. Expertise spans Building Materials, Automotive, Banking, and Industrial sectors.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { value: '$1B+', label: 'Growth Strategies Architected' },
              { value: '85%', label: 'Service Cycle Compression' },
              { value: '12%', label: 'YoY Revenue Growth' },
              { value: '8%', label: 'Forecasting Accuracy Uplift' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 text-center">
                <div className="text-xl md:text-2xl font-display font-bold text-primary-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Industry Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <span className="text-sm text-slate-500 dark:text-slate-500 mr-2">Industries:</span>
            {['Building Materials', 'Automotive', 'Banking', 'Steel', 'Industrial'].map((industry) => (
              <span
                key={industry}
                className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {industry}
              </span>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={project.featured ? 'md:col-span-2' : ''}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-600 dark:text-slate-400">
                No projects found with the selected filter.
              </p>
            </motion.div>
          )}

          {/* Confidentiality Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 text-center"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Note:</strong> Client names and specific details have been anonymized to maintain confidentiality. Impact metrics are representative of actual project outcomes.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
