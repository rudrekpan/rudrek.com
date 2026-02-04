'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UpdateCard } from '@/components/UpdateCard'

const updates = [
  {
    title: 'The Art of Route-to-Market Strategy',
    excerpt: 'Lessons learned from optimizing RTM models across building materials and manufacturing sectors. How to bridge the gap between strategy and execution in fragmented dealer networks.',
    slug: 'route-to-market-strategy',
    date: 'Jan 15, 2024',
    readingTime: '5 min read',
    category: 'Strategy',
  },
  {
    title: 'Digital Transformation in Traditional Industries',
    excerpt: 'Why legacy industries struggle with digital adoption and how to achieve 90%+ user adoption in CRM and DMS implementations within 3 months.',
    slug: 'digital-transformation-traditional-industries',
    date: 'Jan 10, 2024',
    readingTime: '4 min read',
    category: 'Digital',
  },
  {
    title: 'Revenue Growth Management: A Framework',
    excerpt: 'A practical framework for implementing RGM in manufacturing and building materials companies. From pricing strategy to trade promotion optimization.',
    slug: 'revenue-growth-management-framework',
    date: 'Dec 28, 2023',
    readingTime: '6 min read',
    category: 'Strategy',
  },
  {
    title: 'From Sales Manager to Strategy Consultant',
    excerpt: 'Reflections on transitioning from industry (Tata Steel) to consulting (EY-Parthenon). The skills that transfer and the new ones you need to develop.',
    slug: 'sales-manager-to-consultant',
    date: 'Dec 20, 2023',
    readingTime: '5 min read',
    category: 'Career',
  },
  {
    title: 'Building High-Performing Sales Teams',
    excerpt: 'Insights from designing incentive structures and beat-planning algorithms for 500+ sales officers. What drives performance in field sales.',
    slug: 'high-performing-sales-teams',
    date: 'Dec 5, 2023',
    readingTime: '4 min read',
    category: 'Leadership',
  },
  {
    title: 'The Power of Data in Sales Operations',
    excerpt: 'How automated dashboards and analytics transformed sales operations at Tata Steel, reducing stock-outs by 15% and improving lead conversion.',
    slug: 'data-in-sales-operations',
    date: 'Nov 18, 2023',
    readingTime: '5 min read',
    category: 'Digital',
  },
]

const categories = ['All', 'Strategy', 'Digital', 'Leadership', 'Career']

export default function UpdatesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredUpdates = updates.filter(
    (update) => activeCategory === 'All' || update.category === activeCategory
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
            <span className="badge badge-accent mb-4">Insights</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Thoughts & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Insights on strategy consulting, digital transformation, leadership, and career development from my experience at EY-Parthenon and Tata Steel.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Updates Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredUpdates.map((update) => (
                <motion.div
                  key={update.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <UpdateCard {...update} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredUpdates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-600 dark:text-slate-400">
                No updates found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
