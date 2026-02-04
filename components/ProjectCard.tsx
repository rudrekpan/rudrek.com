'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  slug: string
  tags: string[]
  status: 'ongoing' | 'completed' | 'archived'
  github?: string
  demo?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  slug,
  tags,
  status,
  github,
  demo,
  featured = false,
}: ProjectCardProps) {
  const statusColors = {
    ongoing: 'badge-success',
    completed: 'badge-primary',
    archived: 'badge-warning',
  }

  const statusLabels = {
    ongoing: 'In Progress',
    completed: 'Completed',
    archived: 'Archived',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`card card-hover p-6 ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className={`badge ${statusColors[status]} mb-2`}>
              {statusLabels[status]}
            </span>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                aria-label="View demo"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  )
}
