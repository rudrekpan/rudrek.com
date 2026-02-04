import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PROJECTS_PATH = path.join(process.cwd(), 'content/projects')
const UPDATES_PATH = path.join(process.cwd(), 'content/updates')

export interface ProjectFrontmatter {
  title: string
  description: string
  tags: string[]
  status: 'ongoing' | 'completed' | 'archived'
  github?: string
  demo?: string
  featured?: boolean
  date: string
}

export interface UpdateFrontmatter {
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
}

function getReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export async function getProjects(): Promise<(ProjectFrontmatter & { slug: string })[]> {
  if (!fs.existsSync(PROJECTS_PATH)) {
    return []
  }

  const files = fs.readdirSync(PROJECTS_PATH).filter((file) => file.endsWith('.mdx'))

  const projects = files.map((file) => {
    const filePath = path.join(PROJECTS_PATH, file)
    const source = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(source)

    return {
      ...(data as ProjectFrontmatter),
      slug: file.replace('.mdx', ''),
    }
  })

  // Sort by date, most recent first
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
    slug,
  }
}

export async function getUpdates(): Promise<(UpdateFrontmatter & { slug: string; readingTime: string })[]> {
  if (!fs.existsSync(UPDATES_PATH)) {
    return []
  }

  const files = fs.readdirSync(UPDATES_PATH).filter((file) => file.endsWith('.mdx'))

  const updates = files.map((file) => {
    const filePath = path.join(UPDATES_PATH, file)
    const source = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(source)

    return {
      ...(data as UpdateFrontmatter),
      slug: file.replace('.mdx', ''),
      readingTime: getReadingTime(content),
    }
  })

  // Sort by date, most recent first
  return updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getUpdateBySlug(slug: string) {
  const filePath = path.join(UPDATES_PATH, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)

  return {
    frontmatter: data as UpdateFrontmatter,
    content,
    slug,
    readingTime: getReadingTime(content),
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
