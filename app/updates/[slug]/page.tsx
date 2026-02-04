import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { UpdatePageContent } from './UpdatePageContent'

// Sample blog post data - in production, this would come from MDX files
const posts: Record<string, {
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  category: string
  image?: string
}> = {
  'starting-new-chapter': {
    title: 'Starting a New Chapter',
    excerpt: 'Reflecting on the past year and sharing my plans for the upcoming months.',
    content: `The start of a new year always brings a sense of renewal and possibility. As I sit down to write this, I find myself reflecting on everything that happened in the past twelve months and looking forward to what lies ahead.

## Looking Back

2023 was a year of significant growth, both personally and professionally. I took on new challenges, learned new skills, and stepped outside my comfort zone more times than I can count. Some experiments succeeded, others didn't, but each one taught me something valuable.

One of the biggest lessons was the importance of consistency over intensity. It's easy to get excited about something new and go all-in for a few weeks, but sustainable progress comes from showing up day after day, even when motivation is low.

## What's Next

For the coming year, I'm focusing on three main areas:

**1. Building in Public**
I've decided to share more of my work and journey openly. This includes writing more, sharing projects earlier, and being transparent about both successes and failures.

**2. Deep Work**
Quality over quantity. I want to spend more time in focused, uninterrupted work sessions rather than spreading myself thin across too many projects.

**3. Health and Balance**
It's easy to neglect physical health when you're passionate about what you're building. This year, I'm making a conscious effort to maintain a better balance.

## The Road Ahead

I'm excited about what's coming. There are several projects in the pipeline that I can't wait to share, and I'm looking forward to connecting with more people who share similar interests and values.

If you're reading this, thank you for being part of this journey. Here's to a year of growth, learning, and building things that matter.`,
    date: 'January 15, 2024',
    readingTime: '5 min read',
    category: 'Life',
  },
  'building-in-public': {
    title: 'Building in Public',
    excerpt: 'Why I decided to share my journey building products and the lessons learned along the way.',
    content: `For most of my career, I built things in private. Projects would stay hidden until they were "ready" - which often meant they never saw the light of day. This year, I decided to change that.

## Why Build in Public?

The concept of building in public has gained popularity in recent years, but I was skeptical at first. Why would anyone want to see my work-in-progress? What if I fail publicly?

But the more I thought about it, the more I realized the benefits outweigh the risks:

**Accountability**: When you share your goals publicly, you're more likely to follow through. There's something about external accountability that keeps you moving forward.

**Feedback**: Getting feedback early and often helps you build better products. Waiting until launch means you might spend months building something nobody wants.

**Connection**: Building in public attracts like-minded people. Some of my best professional relationships started from sharing my work online.

## Getting Started

If you're thinking about building in public, here's what I've learned:

1. **Start small**: You don't need to share everything. Begin with weekly updates or progress posts.

2. **Be authentic**: Don't just share the highlights. The struggles and failures are often more valuable and relatable.

3. **Engage genuinely**: Building in public is a two-way street. Engage with others who are on similar journeys.

4. **Set boundaries**: You don't have to share everything. It's okay to keep some things private.

## The Results So Far

Since I started sharing more openly, I've noticed several positive changes. People reach out with helpful suggestions, I've found potential collaborators, and the accountability has definitely helped me ship faster.

Is it scary? Sometimes. Worth it? Absolutely.`,
    date: 'January 10, 2024',
    readingTime: '3 min read',
    category: 'Tech',
  },
  'power-of-side-projects': {
    title: 'The Power of Side Projects',
    excerpt: 'How working on personal projects has shaped my career and helped me grow as a developer.',
    content: `Some of my biggest career opportunities have come from side projects. What started as weekend experiments turned into portfolio pieces that opened doors I never expected.

## Why Side Projects Matter

In a world where everyone has similar resumes and credentials, side projects help you stand out. They demonstrate initiative, curiosity, and the ability to ship.

**Learning by Doing**: There's no better way to learn a new technology than building something real with it. Tutorials and courses can only take you so far.

**Creative Freedom**: Unlike work projects with constraints and stakeholders, side projects let you experiment freely. This is where innovation happens.

**Building a Portfolio**: Concrete examples of your work are more convincing than a list of skills on a resume.

## Finding Time

"I don't have time for side projects" is something I hear often. And it's a valid concern - we all have busy lives. But here's the thing: you don't need huge chunks of time.

Some of my most successful projects were built in small increments: 30 minutes here, an hour there. The key is consistency, not marathon coding sessions.

## Choosing the Right Projects

Not all side projects are created equal. The best ones are:

- **Personally interesting**: If you're not excited about it, you won't stick with it.
- **Achievable**: Pick something you can actually finish. An incomplete project teaches less than a complete one.
- **Shareable**: Build something you can show others. It doesn't have to be revolutionary, just done.

## The Compound Effect

The real magic of side projects is the compound effect. Each project builds on the last. Skills transfer, code gets reused, and your portfolio grows. Over time, this adds up to something significant.`,
    date: 'December 28, 2023',
    readingTime: '4 min read',
    category: 'Career',
  },
  'year-in-review-2023': {
    title: 'Year in Review: 2023',
    excerpt: 'A look back at the highlights, challenges, and lessons from the past year.',
    content: `Another year in the books. 2023 was filled with highs, lows, and everything in between. Here's my reflection on what happened and what I learned.

## Highlights

**Projects Shipped**: I managed to ship three side projects this year, which is a personal record. Not all of them were successful, but all of them taught me something.

**Skills Acquired**: Dove deep into TypeScript and Next.js. Also spent significant time learning about AI and machine learning, which is becoming increasingly relevant.

**Connections Made**: Met some amazing people through Twitter, Discord communities, and virtual events. The tech community continues to be incredibly welcoming and supportive.

## Challenges

**Burnout**: Had a rough patch mid-year where motivation was at an all-time low. Learned that rest is productive and pushing through isn't always the answer.

**Imposter Syndrome**: Still battles with this regularly. The more I learn, the more I realize how much I don't know.

**Work-Life Balance**: Struggled to maintain boundaries, especially when working from home. This is a work in progress.

## Key Lessons

1. **Done is better than perfect**: Shipping something imperfect taught me more than endlessly polishing something that never launches.

2. **Consistency beats intensity**: Small, regular efforts compound over time.

3. **Community matters**: Having people to share the journey with makes everything better.

4. **Rest is productive**: Taking breaks isn't laziness; it's necessary for sustainable progress.

## Looking Forward

2024 will be about building on this foundation. More shipping, more sharing, and more connecting. Here's to another year of growth.`,
    date: 'December 20, 2023',
    readingTime: '8 min read',
    category: 'Life',
  },
  'ai-tools-developers': {
    title: 'Exploring AI Tools for Developers',
    excerpt: 'My experience integrating AI tools into my development workflow and the productivity gains.',
    content: `The past year has seen an explosion of AI tools for developers. From code completion to automated testing, AI is changing how we write software. Here's my experience integrating these tools into my workflow.

## Tools I've Tried

**GitHub Copilot**: The most talked-about AI coding assistant. It's impressive how it understands context and suggests relevant code. Not perfect, but genuinely useful for boilerplate and common patterns.

**ChatGPT**: Beyond coding, I use it for brainstorming, explaining concepts, and rubber duck debugging. It's like having a knowledgeable colleague available 24/7.

**AI-powered documentation search**: Several tools now let you ask questions about documentation in natural language. This has been a game-changer for learning new technologies.

## The Productivity Question

Do these tools actually make you more productive? My experience says yes, but with caveats.

**Where AI shines**:
- Generating boilerplate code
- Explaining unfamiliar code
- Suggesting test cases
- Writing documentation

**Where it falls short**:
- Complex architectural decisions
- Understanding business logic
- Debugging subtle issues
- Code that requires deep domain knowledge

## Best Practices

1. **Verify everything**: AI makes mistakes. Always review and test generated code.

2. **Learn the fundamentals**: AI is a tool, not a replacement for understanding. If you don't know the basics, you can't evaluate AI's suggestions.

3. **Use it for learning**: AI explanations can help you understand new concepts faster.

4. **Set boundaries**: Don't become dependent. You should be able to code without AI when needed.

## The Future

AI tools will only get better. The developers who thrive will be those who learn to work effectively with AI while maintaining their core skills.`,
    date: 'December 5, 2023',
    readingTime: '6 min read',
    category: 'Tech',
  },
  'lessons-shipping-fast': {
    title: 'Lessons from Shipping Fast',
    excerpt: 'What I learned from launching a product in just two weeks, and why speed matters.',
    content: `Two weeks. That's how long it took to go from idea to launch on my latest project. It wasn't perfect, but it was out there. Here's what I learned from the experience.

## Why Ship Fast?

The longer you spend building in isolation, the higher the risk of building something nobody wants. Shipping fast lets you validate assumptions quickly.

**Feedback loops**: You can only get real feedback from real users. The sooner you ship, the sooner you learn.

**Momentum**: Shipping creates momentum. Each launch, no matter how small, builds confidence for the next one.

**Perfectionism is the enemy**: Waiting for perfect means waiting forever. Good enough today beats perfect never.

## How to Ship Fast

**1. Ruthlessly prioritize**: List everything you want to build. Now cut it in half. Cut it again. Ship the smallest thing that could possibly work.

**2. Use familiar tools**: A two-week project isn't the time to learn a new framework. Use what you know.

**3. Accept technical debt**: Some corners can be cut initially. Document them and plan to fix them later.

**4. Set a hard deadline**: Parkinson's law says work expands to fill available time. A tight deadline forces focus.

## The Trade-offs

Fast shipping isn't free. Here's what you're trading:

- **Quality**: The initial version won't be polished.
- **Features**: You'll ship less than you wanted.
- **Sleep**: Two weeks of intense work is tiring.

But you gain something invaluable: real-world data about whether your idea has legs.

## When Not to Ship Fast

This approach isn't for everything. Some projects need more time:

- When mistakes have serious consequences
- When building for enterprise customers
- When technical foundations need to be solid from day one

## The Bottom Line

For side projects and experiments, bias toward shipping. Learn from the market, not from your assumptions.`,
    date: 'November 18, 2023',
    readingTime: '5 min read',
    category: 'Tech',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function UpdatePage({ params }: PageProps) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return <UpdatePageContent post={post} />
}
