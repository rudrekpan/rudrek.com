'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

interface UpdatePageContentProps {
  post: {
    title: string
    excerpt: string
    content: string
    date: string
    readingTime: string
    category: string
  }
}

export function UpdatePageContent({ post }: UpdatePageContentProps) {
  // Simple markdown-like parsing for content
  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let currentParagraph: string[] = []

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ')
        elements.push(
          <p key={elements.length} className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            {text}
          </p>
        )
        currentParagraph = []
      }
    }

    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        flushParagraph()
        elements.push(
          <h2 key={elements.length} className="text-2xl font-display font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('**') && line.endsWith('**')) {
        flushParagraph()
        elements.push(
          <p key={elements.length} className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      } else if (line.startsWith('- ')) {
        flushParagraph()
        elements.push(
          <li key={elements.length} className="text-slate-600 dark:text-slate-400 ml-4 mb-1">
            {line.replace('- ', '')}
          </li>
        )
      } else if (line.match(/^\d+\. /)) {
        flushParagraph()
        elements.push(
          <li key={elements.length} className="text-slate-600 dark:text-slate-400 ml-4 mb-2 list-decimal">
            {line.replace(/^\d+\. /, '')}
          </li>
        )
      } else if (line.trim() === '') {
        flushParagraph()
      } else {
        currentParagraph.push(line)
      }
    })

    flushParagraph()
    return elements
  }

  return (
    <>
      <article className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Updates
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="badge badge-accent mb-4">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-slate-100 text-balance">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </motion.header>

          {/* Divider */}
          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="border-slate-200 dark:border-slate-700 mb-12"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 dark:text-slate-400">
                Thanks for reading! Share your thoughts on{' '}
                <a
                  href="https://twitter.com/rudrek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Twitter
                </a>
                .
              </p>
              <Link
                href="/updates"
                className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
              >
                View all posts
              </Link>
            </div>
          </motion.footer>
        </div>
      </article>
    </>
  )
}
