import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-display font-bold mb-6 text-slate-900 dark:text-slate-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-display font-bold mt-8 mb-4 text-slate-900 dark:text-slate-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-display font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href || '#'}
        className="text-primary-500 hover:text-primary-600 underline underline-offset-4"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-slate-600 dark:text-slate-400">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-600 dark:text-slate-400">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-slate-600 dark:text-slate-400">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-slate-600 dark:text-slate-400 my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-xl overflow-x-auto my-4 border border-slate-700">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={400}
        className="rounded-xl my-4"
      />
    ),
    hr: () => (
      <hr className="border-slate-200 dark:border-slate-700 my-8" />
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900 dark:text-slate-100">
        {children}
      </strong>
    ),
    ...components,
  }
}
