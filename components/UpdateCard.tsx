'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface UpdateCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  readingTime: string
  category: string
}

export function UpdateCard({
  title,
  excerpt,
  slug,
  date,
  readingTime,
  category,
}: UpdateCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card card-hover p-6 group"
    >
      <Link href={`/updates/${slug}`} className="block">
        {/* Category */}
        <span className="badge badge-accent mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
        </div>

        {/* Read more */}
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          Read more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.article>
  )
}
