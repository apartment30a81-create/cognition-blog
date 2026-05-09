'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Building Autonomous AI Agents with Claude Code',
    slug: 'autonomous-ai-agents-claude-code',
    excerpt: 'A deep dive into orchestrating multi-agent systems that can plan, reason, and execute complex tasks with minimal human intervention.',
    cover_image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    category: 'Engineering',
    tags: ['AI Agents', 'Claude', 'Autonomy', 'LLM'],
    published: true,
    created_at: '2025-05-01T10:00:00Z',
  },
  {
    id: '2',
    title: 'Understanding Transformer Architecture: From Attention to AGI',
    slug: 'transformer-architecture-attention-agi',
    excerpt: 'A plain-language breakdown of how transformers work, why they scale, and what the scaling laws tell us about the path to AGI.',
    cover_image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    category: 'Vision',
    tags: ['Transformers', 'Architecture', 'AGI', 'Scaling'],
    published: true,
    created_at: '2025-05-03T09:00:00Z',
  },
  {
    id: '3',
    title: 'RAG vs Fine-tuning: When to Use Each',
    slug: 'rag-vs-fine-tuning',
    excerpt: 'Retrieval-augmented generation and fine-tuning solve different problems. A practical decision framework for production AI systems.',
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    category: 'Engineering',
    tags: ['RAG', 'Fine-tuning', 'LLM', 'Production'],
    published: true,
    created_at: '2025-05-05T11:00:00Z',
  },
  {
    id: '4',
    title: 'The Hidden Costs of LLM Inference at Scale',
    slug: 'hidden-costs-llm-inference-scale',
    excerpt: 'Token pricing looks simple until you run a million requests. A breakdown of the real economics of production LLM serving.',
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Engineering',
    tags: ['Inference', 'Cost', 'Production', 'Optimization'],
    published: true,
    created_at: '2025-05-07T08:00:00Z',
  },
  {
    id: '5',
    title: 'Multimodal AI: Beyond Text Generation',
    slug: 'multimodal-ai-beyond-text',
    excerpt: 'GPT-4V, Gemini, and Claude can see, hear, and reason across modalities. A practical guide to building with vision and audio models.',
    cover_image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    category: 'Language',
    tags: ['Multimodal', 'Vision', 'Audio', 'GPT-4V'],
    published: true,
    created_at: '2025-05-09T10:00:00Z',
  },
  {
    id: '6',
    title: 'AI Safety: The Alignment Problem in 2025',
    slug: 'ai-safety-alignment-problem-2025',
    excerpt: 'What has the research community actually learned about aligning large language models? A sober look at where we are and what remains unsolved.',
    cover_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    category: 'Ethics',
    tags: ['Safety', 'Alignment', 'RLHF', 'Research'],
    published: true,
    created_at: '2025-05-11T09:00:00Z',
  },
  {
    id: '7',
    title: 'Building with Claude Opus 4: Real-world Performance Benchmarks',
    slug: 'claude-opus-4-real-world-benchmarks',
    excerpt: 'We tested Opus 4 against GPT-4 Turbo and Gemini Pro on code generation, reasoning, and long-context tasks. Here is what we found.',
    cover_image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    category: 'Language',
    tags: ['Claude', 'Benchmarks', 'Opus', 'Evaluation'],
    published: true,
    created_at: '2025-05-13T11:00:00Z',
  },
  {
    id: '8',
    title: 'Open Source LLMs in 2025: Llama 3, Mistral, and the Rest',
    slug: 'open-source-llms-2025',
    excerpt: 'The gap between open and closed models has narrowed dramatically. An honest comparison of the top open-weight models.',
    cover_image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    category: 'Vision',
    tags: ['Open Source', 'Llama', 'Mistral', 'LLM'],
    published: true,
    created_at: '2025-05-15T10:00:00Z',
  },
  {
    id: '9',
    title: 'AI Coding Assistants: Evaluating GitHub Copilot, Cursor, and Tabnine',
    slug: 'ai-coding-assistants-comparison',
    excerpt: 'Three AI coding tools, three different philosophies. We used each for two weeks on real production codebases. Here is the honest comparison.',
    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    category: 'Engineering',
    tags: ['Copilot', 'Cursor', 'Tabnine', 'Developer Tools'],
    published: true,
    created_at: '2025-05-17T09:00:00Z',
  },
  {
    id: '10',
    title: 'The Future of Work: How AI Changes What Developers Do',
    slug: 'future-of-work-ai-developers',
    excerpt: 'Software development is being transformed by AI. Not by replacing developers — but by changing what development means.',
    cover_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    category: 'Ethics',
    tags: ['Future of Work', 'AI', 'Development', 'Productivity'],
    published: true,
    created_at: '2025-05-19T11:00:00Z',
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function HomePage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(8)
        if (data && data.length > 0) setPosts(data)
        else setPosts(MOCK_POSTS)
      } catch {
        setPosts(MOCK_POSTS)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Featured</p>
          <h1>The Frontier of <em>Machine Intelligence</em></h1>
          <p className="hero-desc">
            In-depth tutorials, research breakdowns &amp; practical guides for AI practitioners and enthusiasts
          </p>
        </div>
      </section>

      <section className="posts-section">
        <div className="container-wide">
          <div className="section-header">
            <h2>Latest Articles</h2>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-3)' }}>Loading...</div>
          ) : (
            <div className="post-grid">
              {posts.map((post, i) => (
                <article key={post.id} className={`post-card animate-in`} style={{ animationDelay: `${i * 0.05}s` }}>
                  {post.cover_image && (
                    <img src={post.cover_image} alt={post.title} className="post-card-image" loading="lazy" />
                  )}
                  <div className="post-card-body">
                    <p className="post-card-category">{post.category}</p>
                    <h3 className="post-card-title">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="post-card-excerpt">{post.excerpt}</p>
                    <div className="post-card-meta">
                      <time>{formatDate(post.created_at)}</time>
                      <span className="dot" />
                      <span>{Array.isArray(post.tags) ? post.tags.slice(0, 2).join(', ') : ''}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}