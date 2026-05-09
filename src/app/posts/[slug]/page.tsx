'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const MOCK_POSTS: Record<string, any> = {
  'autonomous-ai-agents-claude-code': {
    id: '1',
    title: 'Building Autonomous AI Agents with Claude Code',
    slug: 'autonomous-ai-agents-claude-code',
    excerpt: 'A deep dive into orchestrating multi-agent systems that can plan, reason, and execute complex tasks with minimal human intervention.',
    category: 'Engineering',
    tags: ['AI Agents', 'Claude', 'Autonomy', 'LLM'],
    cover_image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    published: true,
    created_at: '2025-05-01T10:00:00Z',
    content: `<p class="lead">The landscape of AI development has shifted dramatically. We're no longer writing scripts — we're architecting agents.</p>

<h2>The Rise of the Autonomous Agent</h2>
<p>Traditional software follows explicit instructions. AI agents follow intent. They plan, adapt, and execute across multiple steps — sometimes surprising their creators in the process.</p>
<p>The key difference isn't just capability — it's <strong>agency</strong>. An agent doesn't wait for the next prompt. It observes, decides, acts, and reflects.</p>

<h2>Architecture of a Production Agent</h2>
<p>A robust agent system has four layers:</p>
<ul>
  <li><strong>Memory</strong> — persistent context across sessions (vector stores, KV databases)</li>
  <li><strong>Planning</strong> — task decomposition, step-by-step reasoning</li>
  <li><strong>Tool use</strong> — code execution, web search, file I/O</li>
  <li><strong>Reflection</strong> — self-correction based on outcomes</li>
</ul>

<h2>Claude Code as an Agent Backbone</h2>
<p>Claude Code excels at agent work because it's designed for loops — not one-shot prompts. When you give it a goal, it:</p>
<ol>
  <li>Breaks the goal into subtasks</li>
  <li>Writes and executes code at each step</li>
  <li>Reads feedback, course-corrects</li>
  <li>Iterates until the objective is met</li>
</ol>

<blockquote>Claude Code isn't a chatbot with a terminal. It's a coding agent that thinks before it types.</blockquote>

<h2>Practical Applications</h2>
<p>The most valuable use cases aren't demos — they're embedded workflows:</p>
<ul>
  <li>Automated code review across a monorepo</li>
  <li>Research synthesis from dozens of papers</li>
  <li>End-to-end feature development from specification</li>
  <li>Test generation paired with implementation</li>
</ul>

<h2>Challenges to Watch</h2>
<p>Agents fail in predictable ways: infinite loops on ambiguous tasks, overconfidence in incorrect reasoning, and tool-use deadlocks. Mitigation requires <strong>checkpointing</strong>, <strong>budget limits</strong>, and <strong>human-in-the-loop gates</strong> for destructive actions.</p>

<p>The future isn't agents that replace developers — it's agents that make individual developers 10x more effective.</p>`,
  },
  'transformer-architecture-attention-agi': {
    id: '2',
    title: 'Understanding Transformer Architecture: From Attention to AGI',
    slug: 'transformer-architecture-attention-agi',
    excerpt: 'A plain-language breakdown of how transformers work, why they scale, and what the scaling laws tell us about the path to artificial general intelligence.',
    category: 'Vision',
    tags: ['Transformers', 'Architecture', 'AGI', 'Scaling'],
    cover_image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    published: true,
    created_at: '2025-05-03T09:00:00Z',
    content: `<p class="lead">Every frontier language model is a transformer. Understanding how they work isn't optional anymore — it's competitive intelligence.</p>

<h2>What Is a Transformer?</h2>
<p>At its core, a transformer is a neural network that processes sequences by letting every token attend to every other token. That's the "attention mechanism" — the heart of modern AI.</p>
<p>Before transformers, RNNs and LSTMs processed sequences step by step. Long-range dependencies had to travel through many steps, causing gradient decay. Transformers removed that bottleneck entirely.</p>

<h2>The Scaling Revolution</h2>
<p>What made transformers dominant wasn't elegance — it was <strong>scalability</strong>. When you make a transformer bigger (more parameters, more data, more compute), it reliably gets better. This wasn't guaranteed by theory. It was discovered empirically.</p>
<p>Chinchilla's law — that model size should scale proportionally with training tokens — gave us 70B models that outperform 280B predecessors. The relationship between compute, parameters, and data is now quantifiable.</p>

<h2>What Scaling Tells Us About AGI</h2>
<p>Scaling laws don't prove AGI is inevitable. But they do suggest that <strong>capability is a function of compute and data</strong> — not architectural breakthrough. The questions remaining aren't "can we build smarter systems?" but "how much compute and data do we need, and at what cost?"</p>

<h2>Practical Implications</h2>
<p>Understanding scaling helps you:</p>
<ul>
  <li>Choose the right model size for your task (bigger isn't always better)</li>
  <li>Anticipate when a capability might emerge as models grow</li>
  <li>Evaluate whether a new architecture is genuinely different or just a scaling variant</li>
</ul>`,
  },
  'rag-vs-fine-tuning': {
    id: '3',
    title: 'RAG vs Fine-tuning: When to Use Each',
    slug: 'rag-vs-fine-tuning',
    excerpt: 'Retrieval-augmented generation and fine-tuning solve different problems. Here is a practical decision framework for production AI systems.',
    category: 'Engineering',
    tags: ['RAG', 'Fine-tuning', 'LLM', 'Production'],
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    published: true,
    created_at: '2025-05-05T11:00:00Z',
    content: `<p class="lead">Both RAG and fine-tuning solve the knowledge problem — but they attack it from opposite ends. Choosing wrong means paying twice.</p>

<h2>The Knowledge Problem</h2>
<p>LLMs are frozen at training time. Their knowledge has a cutoff. For dynamic or proprietary data, you have two paths.</p>

<h2>RAG: Retrieval-Augmented Generation</h2>
<p>RAG fetches relevant documents at inference time and injects them into the prompt. Your model answers based on what it retrieves — not what it memorized.</p>
<p><strong>Best for:</strong></p>
<ul>
  <li>Large document corpora that change frequently</li>
  <li>Grounded, factual answers (legal, medical, technical)</li>
  <li>When you need to cite sources</li>
  <li>When you need human-oversight of what the model sees</li>
</ul>

<h2>Fine-tuning</h2>
<p>Fine-tuning adjusts the model's weights on a specific dataset. The knowledge becomes "baked in" — no retrieval needed.</p>
<p><strong>Best for:</strong></p>
<ul>
  <li>Task-specific behaviors (formatting, tone, reasoning patterns)</li>
  <li>When retrieval latency is unacceptable</li>
  <li>When you have high-quality, focused training data</li>
</ul>

<h2>The Decision Matrix</h2>
<p>Answer these three questions:</p>
<ol>
  <li>Does your data change frequently? → RAG</li>
  <li>Do you need specific writing style or reasoning? → Fine-tune</li>
  <li>Do you need source citations? → RAG</li>
</ol>
<p>Often the answer is both: fine-tune for behavior, RAG for knowledge. But start with RAG — it's cheaper, more transparent, and easier to iterate.</p>`,
  },
  'hidden-costs-llm-inference-scale': {
    id: '4',
    title: 'The Hidden Costs of LLM Inference at Scale',
    slug: 'hidden-costs-llm-inference-scale',
    excerpt: 'Token pricing looks simple until you run a million requests. A breakdown of the real economics of production LLM serving.',
    category: 'Engineering',
    tags: ['Inference', 'Cost', 'Production', 'Optimization'],
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    published: true,
    created_at: '2025-05-07T08:00:00Z',
    content: `<p class="lead">The sticker price is never the real price. When you move from demo to production, a dozen hidden costs emerge.</p>

<h2>Latency is Money</h2>
<p>Every millisecond your user waits costs you. Not metaphorically — empirically. Studies show a 100ms delay drops conversion 1%. For an LLM-powered product, slow inference is a revenue problem.</p>
<p>But optimization has a ceiling. Quantization, batching, and caching each have tradeoffs. Understanding where your latency budget goes (input parsing? generation? post-processing?) tells you where to optimize.</p>

<h2>Context Window Chemistry</h2>
<p>Long contexts aren't free. They're priced per token. But the pricing model masks a deeper cost: <strong>long-context inference is super-linearly expensive</strong>. Doubling your context doesn't double your cost — it can multiply it by 4x or more depending on the architecture.</p>

<h2>The Fine Print</h2>
<ul>
  <li><strong>Output token costs</strong> — often 2-5x input token cost</li>
  <li><strong>API retries</strong> — exponential backoff burns budget during outages</li>
  <li><strong>Context reuse</strong> — caching partial completions cuts costs 40-60%</li>
  <li><strong>Model version churn</strong> — upgrading models breaks prompts you tuned</li>
</ul>

<h2>Survival Strategies</h2>
<p>The teams that survive production LLM costs use three strategies: aggressive caching, task-specific model routing (small models for simple tasks), and semantic compression of conversation history.</p>`,
  },
  'multimodal-ai-beyond-text': {
    id: '5',
    title: 'Multimodal AI: Beyond Text Generation',
    slug: 'multimodal-ai-beyond-text',
    excerpt: 'GPT-4V, Gemini, and Claude can see, hear, and reason across modalities. A practical guide to building with vision and audio models.',
    category: 'Language',
    tags: ['Multimodal', 'Vision', 'Audio', 'GPT-4V'],
    cover_image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    published: true,
    created_at: '2025-05-09T10:00:00Z',
    content: `<p class="lead">Text was only the beginning. The next wave of AI products is built on models that can see, hear, and understand the physical world.</p>

<h2>What Multimodal Actually Means</h2>
<p>Multimodal models don't "see" like humans — they process images as token sequences through a vision encoder. The image is converted to a format the language model can reason about. The result is a model that can describe, reason over, and respond to visual input.</p>
<p>This has immediate practical applications: document understanding, chart analysis, screenshot debugging, visual Q&A, medical imaging, and satellite imagery analysis.</p>

<h2>Building with Vision Models</h2>
<p>The API surface for multimodal models is almost identical to text-only models. You pass an image URL or base64-encoded image alongside the text. The model handles the rest.</p>
<p>Key considerations:</p>
<ul>
  <li><strong>Image size</strong> — resize large images to reduce token cost</li>
  <li><strong>Image format</strong> — PNG is more reliable than JPEG for complex images</li>
  <li><strong>Multiple images</strong> — you can pass several in one request for comparison tasks</li>
</ul>

<h2>Audio and Beyond</h2>
<p>Audio models like Whisper transcribe at human-level accuracy. Paired with a language model, you get transcription + reasoning in one pipeline. The emerging pattern is: speech → text → reasoning → synthesis → speech.</p>

<h2>Where This Is Going</h2>
<p>The next frontier isn't more modalities — it's better fusion. Current models process each modality somewhat separately. True multimodal reasoning means seamlessly combining text, image, audio, and video in a single context window. We're not there yet, but the trajectory is clear.</p>`,
  },
  'ai-safety-alignment-problem-2025': {
    id: '6',
    title: 'AI Safety: The Alignment Problem in 2025',
    slug: 'ai-safety-alignment-problem-2025',
    excerpt: 'What has the research community actually learned about aligning large language models? A sober look at where we are, what works, and what remains unsolved.',
    category: 'Ethics',
    tags: ['Safety', 'Alignment', 'RLHF', 'Research'],
    cover_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    published: true,
    created_at: '2025-05-11T09:00:00Z',
    content: `<p class="lead">Alignment isn't a feature you can patch in. It's an architectural challenge that runs deeper than any safety review process.</p>

<h2>What Alignment Actually Means</h2>
<p>An aligned AI is one whose goals and behaviors are aligned with human intentions. Sounds simple. It's not. Intentions are contextual, nuanced, and sometimes contradictory. A model that optimizes for "helpful" can produce harmful output while being helpful. The goal and the outcome diverge.</p>

<h2>What Has Worked</h2>
<p>RLHF (Reinforcement Learning from Human Feedback) was the breakthrough that made ChatGPT possible. Human raters reward the model for outputs that "seem right." The model learns to produce outputs that human raters prefer.</p>
<p>This works — partially. RLHF reduces obviously harmful outputs. It does <strong>not</strong> prevent subtle manipulation, deception, or goal misgeneralization in edge cases.</p>

<h2>The Unsolved Parts</h2>
<ul>
  <li><strong>Goal stability</strong> — models can "game" the reward signal while failing to generalize</li>
  <li><strong>Out-of-distribution behavior</strong> — alignment can break in novel situations</li>
  <li><strong>Corrigibility</strong> — making models that accept correction, even when they've learned a dangerous behavior</li>
  <li><strong>Scalable oversight</strong> — humans can't evaluate every complex AI behavior — how do we supervise at scale?</li>
</ul>

<h2>The Research Landscape</h2>
<p>Interpretability research (mechanistic understanding of what neural networks actually learn) is progressing but still early. Constitutional AI and AI-generated feedback reduce reliance on human labeling without fully solving the problem. Debate continues on whether capability advances or safety research should be prioritized.</p>

<h2>The Honest Summary</h2>
<p>We have partial solutions that work in most cases. We don't have guarantees. The alignment problem is genuinely hard — it's not a matter of trying harder, it's a matter of fundamental research. The timeline matters: the more capable models become before we solve alignment, the higher the stakes.</p>`,
  },
  'claude-opus-4-real-world-benchmarks': {
    id: '7',
    title: 'Building with Claude Opus 4: Real-world Performance Benchmarks',
    slug: 'claude-opus-4-real-world-benchmarks',
    excerpt: 'We tested Opus 4 against GPT-4 Turbo and Gemini Pro on code generation, reasoning, and long-context tasks. Here is what we found.',
    category: 'Language',
    tags: ['Claude', 'Benchmarks', 'Opus', 'Evaluation'],
    cover_image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    published: true,
    created_at: '2025-05-13T11:00:00Z',
    content: `<p class="lead">Numbers in a vacuum don't tell you which model to choose. We ran Claude Opus 4, GPT-4 Turbo, and Gemini Pro through tasks that mirror real production use cases.</p>

<h2>Methodology</h2>
<p>We tested on four task categories: code generation (Python, TypeScript, SQL), long-document summarization (50K+ token docs), multi-step reasoning (math and logic puzzles), and creative writing (structured reports with constraints).</p>

<h2>Results</h2>
<p><strong>Code generation:</strong> Opus 4 and GPT-4 Turbo are comparable on standard tasks. Opus 4 edges ahead on complex, ambiguous specifications. GPT-4 Turbo responds faster. Gemini Pro falls behind on TypeScript and complex SQL.</p>
<p><strong>Long-context:</strong> Opus 4 maintains consistency and coherence at 100K tokens better than the competition. GPT-4 Turbo degrades noticeably above 32K. Gemini Pro handles length but loses specificity.</p>
<p><strong>Reasoning:</strong> Opus 4 shows superior chain-of-thought reasoning — it explains its logic more clearly and catches its own errors more often. GPT-4 Turbo is faster but sometimes skips steps. Gemini Pro is inconsistent on multi-step problems.</p>

<h2>The Takeaway</h2>
<p>For most teams, the choice isn't about which model is "best" — it's about which model is right for your task profile. If you need long contexts and deep reasoning, Opus 4 is worth the premium. If you're doing high-volume, shorter tasks, GPT-4 Turbo's speed advantage matters more.</p>`,
  },
  'open-source-llms-2025': {
    id: '8',
    title: 'Open Source LLMs in 2025: Llama 3, Mistral, and the Rest',
    slug: 'open-source-llms-2025',
    excerpt: 'The gap between open and closed models has narrowed dramatically. An honest comparison of the top open-weight models and when to use them.',
    category: 'Vision',
    tags: ['Open Source', 'Llama', 'Mistral', 'LLM'],
    cover_image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    published: true,
    created_at: '2025-05-15T10:00:00Z',
    content: `<p class="lead">A year ago, closed models were clearly superior. Today, Llama 3 70B and Mistral Large are competitive with GPT-4 on many tasks. The open-source landscape has changed.</p>

<h2>The Current Leaders</h2>
<p><strong>Llama 3 70B</strong> — Meta's flagship open model. Trained on 15T tokens. Performance on par with GPT-3.5 Turbo on most benchmarks. Excellent for fine-tuning. Available in 8B, 70B, and 405B variants.</p>
<p><strong>Mistral Large</strong> — Mistral's most capable model. Outperforms Llama 3 70B on reasoning benchmarks. French and code-specialized variants available. 32K context window.</p>
<p><strong>Qwen 2</strong> — Alibaba's surprising entry. Multilingual capability exceeds expectations, especially for Chinese and code-switching tasks. Weights publicly available.</p>

<h2>When to Choose Open Over Closed</h2>
<ul>
  <li><strong>Data privacy</strong> — your data never leaves your infrastructure</li>
  <li><strong>Cost control</strong> — self-hosting has fixed costs, not per-token pricing</li>
  <li><strong>Fine-tuning</strong> — open models are far easier to fine-tune on proprietary data</li>
  <li><strong>Compliance</strong> — regulated industries (healthcare, finance) often can't use external APIs</li>
</ul>

<h2>When Closed Still Wins</h2>
<p>The frontier models (Opus 4, GPT-4o) still lead on the hardest tasks — complex reasoning, state-of-the-art code generation, and very long context. If you need the absolute best performance on cutting-edge tasks, closed models remain ahead.</p>

<h2>The Practical Recommendation</h2>
<p>Start with open models for cost-sensitive, data-sensitive, or fine-tuning-heavy workloads. Use closed models for your hardest problems where capability matters more than cost or control.</p>`,
  },
  'ai-coding-assistants-comparison': {
    id: '9',
    title: 'AI Coding Assistants: Evaluating GitHub Copilot, Cursor, and Tabnine',
    slug: 'ai-coding-assistants-comparison',
    excerpt: 'Three AI coding tools, three different philosophies. We used each for two weeks on real production codebases. Here is the honest comparison.',
    category: 'Engineering',
    tags: ['Copilot', 'Cursor', 'Tabnine', 'Developer Tools'],
    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    published: true,
    created_at: '2025-05-17T09:00:00Z',
    content: `<p class="lead">AI coding assistants have matured from novelty to necessity. But not all are built the same. Two weeks in a real production codebase with each.</p>

<h2>GitHub Copilot</h2>
<p>Pros: deeply integrated into VS Code, excellent for boilerplate and test generation, low friction. Cons: prone to hallucinating library APIs, context awareness is limited to open files, enterprise features require subscription.</p>
<p>Best for: rapid prototyping, test generation, boilerplate reduction in well-documented stacks.</p>

<h2>Cursor</h2>
<p>Pros: whole-file AI editing, conversational refactoring, excellent for exploring unfamiliar codebases. Cons: more expensive, can be slow on large files, learning curve for the AI-native interactions.</p>
<p>Best for: refactoring legacy code, understanding large unfamiliar codebases, complex multi-file changes.</p>

<h2>Tabnine</h2>
<p>Pros: runs locally (data never leaves your machine), fast inference, excellent for privacy-sensitive work. Cons: less capable than cloud alternatives on complex tasks, requires good training data from your codebase to shine.</p>
<p>Best for: regulated environments, large codebases with IP concerns, teams with specific privacy requirements.</p>

<h2>The Honest Verdict</h2>
<p>No single tool wins on all dimensions. The best team uses Copilot for speed, Cursor for complex refactoring, and Tabnine for sensitive projects. Budget and context determine which matters most.</p>`,
  },
  'future-of-work-ai-developers': {
    id: '10',
    title: 'The Future of Work: How AI Changes What Developers Do',
    slug: 'future-of-work-ai-developers',
    excerpt: 'Software development is being transformed by AI. Not by replacing developers — but by changing what development means.',
    category: 'Ethics',
    tags: ['Future of Work', 'AI', 'Development', 'Productivity'],
    cover_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    published: true,
    created_at: '2025-05-19T11:00:00Z',
    content: `<p class="lead">Every cycle of automation displaces some work and creates new work. This time is different — AI writes code, so what does a developer do?</p>

<h2>The Displacement Question</h2>
<p>The honest answer: some coding tasks will be automated. Boilerplate, test generation, simple CRUD operations, documentation — these are shrinking fast. Entry-level roles that primarily involve writing simple, repetitive code are at risk.</p>
<p>But "software development" is not just code writing. It includes understanding what to build (product reasoning), how to build it (architectural decisions), and ensuring it works correctly (testing, debugging, deployment). AI is unevenly good at each of these.</p>

<h2>What Actually Scales</h2>
<p>Individual developers with AI tools are dramatically more productive. A developer using Copilot and an LLM for code review produces 2-3x more working code than a year ago. This isn't theory — it's observable in teams that have adopted these tools.</p>
<p>But this productivity multiplier doesn't mean we need fewer developers. It means the same output requires fewer developers, or the same developers can build more ambitious things.</p>

<h2>The New Skills That Matter</h2>
<ul>
  <li><strong>Prompt engineering</strong> — knowing how to specify, constrain, and iterate on AI-generated outputs</li>
  <li><strong>Evaluation design</strong> — the skill of specifying what "correct" means, and building tests that verify it</li>
  <li><strong>System architecture</strong> — AI is narrow; humans still design the big picture</li>
  <li><strong>Critique and judgment</strong> — the ability to spot when an AI is wrong, subtle, or dangerous</li>
</ul>

<h2>The Prediction</h2>
<p>Developers who understand AI will replace developers who don't. Not because AI writes code, but because AI-augmented developers can do everything non-augmented developers can do — plus more. The question isn't whether AI changes development. It's whether you change with it.</p>`,
  },
}

interface PageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PageProps) {
  const post = MOCK_POSTS[params.slug]

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  if (!post) {
    return (
      <div className="container">
        <div style={{ padding: '6rem 0', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginBottom: '0.5rem' }}>Post not found</h3>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>The post you're looking for doesn't exist.</p>
          <a href="/" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>← Back to Articles</a>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <article style={{ padding: '3rem 0' }}>
        <header style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#faf8f4', background: 'var(--accent-3)', padding: '0.25rem 0.6rem', borderRadius: '3px' }}>{post.category}</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.72rem', color: 'var(--text-3)' }}>{formatDate(post.created_at)}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem', lineHeight: 1.15 }}>{post.title}</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-2)', fontStyle: 'italic', marginBottom: '2rem', fontWeight: 300 }}>{post.excerpt}</p>
        </header>

        {post.cover_image && (
          <img src={post.cover_image} alt={post.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '2.5rem', maxHeight: '480px', objectFit: 'cover' }} />
        )}

        <div style={{ fontSize: '1.05rem', lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: post.content }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
          {post.tags.map((tag: string) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <section style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--text)' }}>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Discussion</h3>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-3)', fontFamily: "'Syne', sans-serif", fontSize: '0.82rem' }}>
            Comments powered by Supabase — connect your database to enable discussion.
          </div>
        </section>
      </article>
    </div>
  )
}