'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle, Lightbulb, Compass, BookOpen, Puzzle, Target, Sparkles, Zap, Eye } from 'lucide-react'

interface ProjectPageContentProps {
  project: {
    title: string
    description: string
    longDescription: string
    tags: string[]
    status: 'ongoing' | 'completed' | 'archived'
    github?: string
    demo?: string
    features: string[]
    challenges: string[]
  }
}

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

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  return (
    <>
      <article className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className={`badge ${statusColors[project.status]} mb-4`}>
              {statusLabels[project.status]}
            </span>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100">
              {project.title}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.header>

          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100">
              About the Project
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-600 dark:text-slate-400 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold mb-6 text-slate-900 dark:text-slate-100">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Challenges & Learnings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold mb-6 text-slate-900 dark:text-slate-100">
              Challenges & Learnings
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => {
                const learningStyles = [
                  { icon: Lightbulb, bg: 'bg-amber-50 dark:bg-amber-500/10', border: 'border-amber-200/60 dark:border-amber-500/20', iconColor: 'text-amber-500', iconBg: 'bg-amber-100 dark:bg-amber-500/20' },
                  { icon: Compass, bg: 'bg-sky-50 dark:bg-sky-500/10', border: 'border-sky-200/60 dark:border-sky-500/20', iconColor: 'text-sky-500', iconBg: 'bg-sky-100 dark:bg-sky-500/20' },
                  { icon: BookOpen, bg: 'bg-violet-50 dark:bg-violet-500/10', border: 'border-violet-200/60 dark:border-violet-500/20', iconColor: 'text-violet-500', iconBg: 'bg-violet-100 dark:bg-violet-500/20' },
                  { icon: Puzzle, bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200/60 dark:border-emerald-500/20', iconColor: 'text-emerald-500', iconBg: 'bg-emerald-100 dark:bg-emerald-500/20' },
                  { icon: Target, bg: 'bg-rose-50 dark:bg-rose-500/10', border: 'border-rose-200/60 dark:border-rose-500/20', iconColor: 'text-rose-400', iconBg: 'bg-rose-100 dark:bg-rose-500/20' },
                  { icon: Sparkles, bg: 'bg-fuchsia-50 dark:bg-fuchsia-500/10', border: 'border-fuchsia-200/60 dark:border-fuchsia-500/20', iconColor: 'text-fuchsia-500', iconBg: 'bg-fuchsia-100 dark:bg-fuchsia-500/20' },
                  { icon: Zap, bg: 'bg-orange-50 dark:bg-orange-500/10', border: 'border-orange-200/60 dark:border-orange-500/20', iconColor: 'text-orange-500', iconBg: 'bg-orange-100 dark:bg-orange-500/20' },
                  { icon: Eye, bg: 'bg-teal-50 dark:bg-teal-500/10', border: 'border-teal-200/60 dark:border-teal-500/20', iconColor: 'text-teal-500', iconBg: 'bg-teal-100 dark:bg-teal-500/20' },
                ]
                const style = learningStyles[index % learningStyles.length]
                const Icon = style.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className={`flex items-start gap-4 p-4 rounded-xl ${style.bg} border ${style.border}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${style.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon className={`w-4 h-4 ${style.iconColor}`} />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{challenge}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

        </div>
      </article>
    </>
  )
}
