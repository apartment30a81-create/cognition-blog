     1|'use client'
     2|
     3|import { use } from 'react'
     4|
     5|const MOCK_POSTS: Record<string, any> = {
     6|  'autonomous-ai-agents-claude-code': {
     7|    id: '1',
     8|    title: 'Building Autonomous AI Agents with Claude Code',
     9|    slug: 'autonomous-ai-agents-claude-code',
    10|    excerpt: 'A deep dive into orchestrating multi-agent systems that can plan, reason, and execute complex tasks with minimal human intervention.',
    11|    category: 'Engineering',
    12|    tags: ['AI Agents', 'Claude', 'Autonomy', 'LLM'],
    13|    cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    14|    published: true,
    15|    created_at: '2026-05-01T10:00:00Z',
    16|    content: `<p class="lead">The landscape of AI development has shifted dramatically. We're no longer writing scripts — we're architecting agents.</p>
    17|
    18|<h2>The Rise of the Autonomous Agent</h2>
    19|<p>Traditional software follows explicit instructions. AI agents follow intent. They plan, adapt, and execute across multiple steps — sometimes surprising their creators in the process.</p>
    20|<p>The key difference isn't just capability — it's <strong>agency</strong>. An agent doesn't wait for the next prompt. It observes, decides, acts, and reflects.</p>
    21|
    22|<h2>Architecture of a Production Agent</h2>
    23|<p>A robust agent system has four layers:</p>
    24|<ul>
    25|  <li><strong>Memory</strong> — persistent context across sessions (vector stores, KV databases)</li>
    26|  <li><strong>Planning</strong> — task decomposition, step-by-step reasoning</li>
    27|  <li><strong>Tool use</strong> — code execution, web search, file I/O</li>
    28|  <li><strong>Reflection</strong> — self-correction based on outcomes</li>
    29|</ul>
    30|
    31|<h2>Claude Code as an Agent Backbone</h2>
    32|<p>Claude Code excels at agent work because it's designed for loops — not one-shot prompts. When you give it a goal, it:</p>
    33|<ol>
    34|  <li>Breaks the goal into subtasks</li>
    35|  <li>Writes and executes code at each step</li>
    36|  <li>Reads feedback, course-corrects</li>
    37|  <li>Iterates until the objective is met</li>
    38|</ol>
    39|
    40|<blockquote>Claude Code isn't a chatbot with a terminal. It's a coding agent that thinks before it types.</blockquote>
    41|
    42|<h2>Practical Applications</h2>
    43|<p>The most valuable use cases aren't demos — they're embedded workflows:</p>
    44|<ul>
    45|  <li>Automated code review across a monorepo</li>
    46|  <li>Research synthesis from dozens of papers</li>
    47|  <li>End-to-end feature development from specification</li>
    48|  <li>Test generation paired with implementation</li>
    49|</ul>
    50|
    51|<h2>Challenges to Watch</h2>
    52|<p>Agents fail in predictable ways: infinite loops on ambiguous tasks, overconfidence in incorrect reasoning, and tool-use deadlocks. Mitigation requires <strong>checkpointing</strong>, <strong>budget limits</strong>, and <strong>human-in-the-loop gates</strong> for destructive actions.</p>
    53|
    54|<p>The future isn't agents that replace developers — it's agents that make individual developers 10x more effective.</p>`,
    55|  },
    56|  'transformer-architecture-attention-agi': {
    57|    id: '2',
    58|    title: 'Understanding Transformer Architecture: From Attention to AGI',
    59|    slug: 'transformer-architecture-attention-agi',
    60|    excerpt: 'A plain-language breakdown of how transformers work, why they scale, and what the scaling laws tell us about the path to artificial general intelligence.',
    61|    category: 'Vision',
    62|    tags: ['Transformers', 'Architecture', 'AGI', 'Scaling'],
    63|    cover_image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    64|    published: true,
    65|    created_at: '2026-05-03T09:00:00Z',
    66|    content: `<p class="lead">Every frontier language model is a transformer. Understanding how they work isn't optional anymore — it's competitive intelligence.</p>
    67|
    68|<h2>What Is a Transformer?</h2>
    69|<p>At its core, a transformer is a neural network that processes sequences by letting every token attend to every other token. That's the "attention mechanism" — the heart of modern AI.</p>
    70|<p>Before transformers, RNNs and LSTMs processed sequences step by step. Long-range dependencies had to travel through many steps, causing gradient decay. Transformers removed that bottleneck entirely.</p>
    71|
    72|<h2>The Scaling Revolution</h2>
    73|<p>What made transformers dominant wasn't elegance — it was <strong>scalability</strong>. When you make a transformer bigger (more parameters, more data, more compute), it reliably gets better. This wasn't guaranteed by theory. It was discovered empirically.</p>
    74|<p>Chinchilla's law — that model size should scale proportionally with training tokens — gave us 70B models that outperform 280B predecessors. The relationship between compute, parameters, and data is now quantifiable.</p>
    75|
    76|<h2>What Scaling Tells Us About AGI</h2>
    77|<p>Scaling laws don't prove AGI is inevitable. But they do suggest that <strong>capability is a function of compute and data</strong> — not architectural breakthrough. The questions remaining aren't "can we build smarter systems?" but "how much compute and data do we need, and at what cost?"</p>
    78|
    79|<h2>Practical Implications</h2>
    80|<p>Understanding scaling helps you:</p>
    81|<ul>
    82|  <li>Choose the right model size for your task (bigger isn't always better)</li>
    83|  <li>Anticipate when a capability might emerge as models grow</li>
    84|  <li>Evaluate whether a new architecture is genuinely different or just a scaling variant</li>
    85|</ul>`,
    86|  },
    87|  'rag-vs-fine-tuning': {
    88|    id: '3',
    89|    title: 'RAG vs Fine-tuning: When to Use Each',
    90|    slug: 'rag-vs-fine-tuning',
    91|    excerpt: 'Retrieval-augmented generation and fine-tuning solve different problems. Here is a practical decision framework for production AI systems.',
    92|    category: 'Engineering',
    93|    tags: ['RAG', 'Fine-tuning', 'LLM', 'Production'],
    94|    cover_image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    95|    published: true,
    96|    created_at: '2026-05-05T11:00:00Z',
    97|    content: `<p class="lead">Both RAG and fine-tuning solve the knowledge problem — but they attack it from opposite ends. Choosing wrong means paying twice.</p>
    98|
    99|<h2>The Knowledge Problem</h2>
   100|<p>LLMs are frozen at training time. Their knowledge has a cutoff. For dynamic or proprietary data, you have two paths.</p>
   101|
   102|<h2>RAG: Retrieval-Augmented Generation</h2>
   103|<p>RAG fetches relevant documents at inference time and injects them into the prompt. Your model answers based on what it retrieves — not what it memorized.</p>
   104|<p><strong>Best for:</strong></p>
   105|<ul>
   106|  <li>Large document corpora that change frequently</li>
   107|  <li>Grounded, factual answers (legal, medical, technical)</li>
   108|  <li>When you need to cite sources</li>
   109|  <li>When you need human-oversight of what the model sees</li>
   110|</ul>
   111|
   112|<h2>Fine-tuning</h2>
   113|<p>Fine-tuning adjusts the model's weights on a specific dataset. The knowledge becomes "baked in" — no retrieval needed.</p>
   114|<p><strong>Best for:</strong></p>
   115|<ul>
   116|  <li>Task-specific behaviors (formatting, tone, reasoning patterns)</li>
   117|  <li>When retrieval latency is unacceptable</li>
   118|  <li>When you have high-quality, focused training data</li>
   119|</ul>
   120|
   121|<h2>The Decision Matrix</h2>
   122|<p>Answer these three questions:</p>
   123|<ol>
   124|  <li>Does your data change frequently? → RAG</li>
   125|  <li>Do you need specific writing style or reasoning? → Fine-tune</li>
   126|  <li>Do you need source citations? → RAG</li>
   127|</ol>
   128|<p>Often the answer is both: fine-tune for behavior, RAG for knowledge. But start with RAG — it's cheaper, more transparent, and easier to iterate.</p>`,
   129|  },
   130|  'hidden-costs-llm-inference-scale': {
   131|    id: '4',
   132|    title: 'The Hidden Costs of LLM Inference at Scale',
   133|    slug: 'hidden-costs-llm-inference-scale',
   134|    excerpt: 'Token pricing looks simple until you run a million requests. A breakdown of the real economics of production LLM serving.',
   135|    category: 'Engineering',
   136|    tags: ['Inference', 'Cost', 'Production', 'Optimization'],
   137|    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
   138|    published: true,
   139|    created_at: '2026-05-07T08:00:00Z',
   140|    content: `<p class="lead">The sticker price is never the real price. When you move from demo to production, a dozen hidden costs emerge.</p>
   141|
   142|<h2>Latency is Money</h2>
   143|<p>Every millisecond your user waits costs you. Not metaphorically — empirically. Studies show a 100ms delay drops conversion 1%. For an LLM-powered product, slow inference is a revenue problem.</p>
   144|<p>But optimization has a ceiling. Quantization, batching, and caching each have tradeoffs. Understanding where your latency budget goes (input parsing? generation? post-processing?) tells you where to optimize.</p>
   145|
   146|<h2>Context Window Chemistry</h2>
   147|<p>Long contexts aren't free. They're priced per token. But the pricing model masks a deeper cost: <strong>long-context inference is super-linearly expensive</strong>. Doubling your context doesn't double your cost — it can multiply it by 4x or more depending on the architecture.</p>
   148|
   149|<h2>The Fine Print</h2>
   150|<ul>
   151|  <li><strong>Output token costs</strong> — often 2-5x input token cost</li>
   152|  <li><strong>API retries</strong> — exponential backoff burns budget during outages</li>
   153|  <li><strong>Context reuse</strong> — caching partial completions cuts costs 40-60%</li>
   154|  <li><strong>Model version churn</strong> — upgrading models breaks prompts you tuned</li>
   155|</ul>
   156|
   157|<h2>Survival Strategies</h2>
   158|<p>The teams that survive production LLM costs use three strategies: aggressive caching, task-specific model routing (small models for simple tasks), and semantic compression of conversation history.</p>`,
   159|  },
   160|  'multimodal-ai-beyond-text': {
   161|    id: '5',
   162|    title: 'Multimodal AI: Beyond Text Generation',
   163|    slug: 'multimodal-ai-beyond-text',
   164|    excerpt: 'GPT-4V, Gemini, and Claude can see, hear, and reason across modalities. A practical guide to building with vision and audio models.',
   165|    category: 'Language',
   166|    tags: ['Multimodal', 'Vision', 'Audio', 'GPT-4V'],
   167|    cover_image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
   168|    published: true,
   169|    created_at: '2026-05-09T10:00:00Z',
   170|    content: `<p class="lead">Text was only the beginning. The next wave of AI products is built on models that can see, hear, and understand the physical world.</p>
   171|
   172|<h2>What Multimodal Actually Means</h2>
   173|<p>Multimodal models don't "see" like humans — they process images as token sequences through a vision encoder. The image is converted to a format the language model can reason about. The result is a model that can describe, reason over, and respond to visual input.</p>
   174|<p>This has immediate practical applications: document understanding, chart analysis, screenshot debugging, visual Q&A, medical imaging, and satellite imagery analysis.</p>
   175|
   176|<h2>Building with Vision Models</h2>
   177|<p>The API surface for multimodal models is almost identical to text-only models. You pass an image URL or base64-encoded image alongside the text. The model handles the rest.</p>
   178|<p>Key considerations:</p>
   179|<ul>
   180|  <li><strong>Image size</strong> — resize large images to reduce token cost</li>
   181|  <li><strong>Image format</strong> — PNG is more reliable than JPEG for complex images</li>
   182|  <li><strong>Multiple images</strong> — you can pass several in one request for comparison tasks</li>
   183|</ul>
   184|
   185|<h2>Audio and Beyond</h2>
   186|<p>Audio models like Whisper transcribe at human-level accuracy. Paired with a language model, you get transcription + reasoning in one pipeline. The emerging pattern is: speech → text → reasoning → synthesis → speech.</p>
   187|
   188|<h2>Where This Is Going</h2>
   189|<p>The next frontier isn't more modalities — it's better fusion. Current models process each modality somewhat separately. True multimodal reasoning means seamlessly combining text, image, audio, and video in a single context window. We're not there yet, but the trajectory is clear.</p>`,
   190|  },
   191|  'ai-safety-alignment-problem-2025': {
   192|    id: '6',
   193|    title: 'AI Safety: The Alignment Problem in 2025',
   194|    slug: 'ai-safety-alignment-problem-2025',
   195|    excerpt: 'What has the research community actually learned about aligning large language models? A sober look at where we are, what works, and what remains unsolved.',
   196|    category: 'Ethics',
   197|    tags: ['Safety', 'Alignment', 'RLHF', 'Research'],
   198|    cover_image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&q=80',
   199|    published: true,
   200|    created_at: '2026-05-11T09:00:00Z',
   201|    content: `<p class="lead">Alignment isn't a feature you can patch in. It's an architectural challenge that runs deeper than any safety review process.</p>
   202|
   203|<h2>What Alignment Actually Means</h2>
   204|<p>An aligned AI is one whose goals and behaviors are aligned with human intentions. Sounds simple. It's not. Intentions are contextual, nuanced, and sometimes contradictory. A model that optimizes for "helpful" can produce harmful output while being helpful. The goal and the outcome diverge.</p>
   205|
   206|<h2>What Has Worked</h2>
   207|<p>RLHF (Reinforcement Learning from Human Feedback) was the breakthrough that made ChatGPT possible. Human raters reward the model for outputs that "seem right." The model learns to produce outputs that human raters prefer.</p>
   208|<p>This works — partially. RLHF reduces obviously harmful outputs. It does <strong>not</strong> prevent subtle manipulation, deception, or goal misgeneralization in edge cases.</p>
   209|
   210|<h2>The Unsolved Parts</h2>
   211|<ul>
   212|  <li><strong>Goal stability</strong> — models can "game" the reward signal while failing to generalize</li>
   213|  <li><strong>Out-of-distribution behavior</strong> — alignment can break in novel situations</li>
   214|  <li><strong>Corrigibility</strong> — making models that accept correction, even when they've learned a dangerous behavior</li>
   215|  <li><strong>Scalable oversight</strong> — humans can't evaluate every complex AI behavior — how do we supervise at scale?</li>
   216|</ul>
   217|
   218|<h2>The Research Landscape</h2>
   219|<p>Interpretability research (mechanistic understanding of what neural networks actually learn) is progressing but still early. Constitutional AI and AI-generated feedback reduce reliance on human labeling without fully solving the problem. Debate continues on whether capability advances or safety research should be prioritized.</p>
   220|
   221|<h2>The Honest Summary</h2>
   222|<p>We have partial solutions that work in most cases. We don't have guarantees. The alignment problem is genuinely hard — it's not a matter of trying harder, it's a matter of fundamental research. The timeline matters: the more capable models become before we solve alignment, the higher the stakes.</p>`,
   223|  },
   224|  'claude-opus-4-real-world-benchmarks': {
   225|    id: '7',
   226|    title: 'Building with Claude Opus 4: Real-world Performance Benchmarks',
   227|    slug: 'claude-opus-4-real-world-benchmarks',
   228|    excerpt: 'We tested Opus 4 against GPT-4 Turbo and Gemini Pro on code generation, reasoning, and long-context tasks. Here is what we found.',
   229|    category: 'Language',
   230|    tags: ['Claude', 'Benchmarks', 'Opus', 'Evaluation'],
   231|    cover_image: 'https://images.unsplash.com/photo-1555949963-aa79bcee37c1?w=800&q=80',
   232|    published: true,
   233|    created_at: '2026-05-13T11:00:00Z',
   234|    content: `<p class="lead">Numbers in a vacuum don't tell you which model to choose. We ran Claude Opus 4, GPT-4 Turbo, and Gemini Pro through tasks that mirror real production use cases.</p>
   235|
   236|<h2>Methodology</h2>
   237|<p>We tested on four task categories: code generation (Python, TypeScript, SQL), long-document summarization (50K+ token docs), multi-step reasoning (math and logic puzzles), and creative writing (structured reports with constraints).</p>
   238|
   239|<h2>Results</h2>
   240|<p><strong>Code generation:</strong> Opus 4 and GPT-4 Turbo are comparable on standard tasks. Opus 4 edges ahead on complex, ambiguous specifications. GPT-4 Turbo responds faster. Gemini Pro falls behind on TypeScript and complex SQL.</p>
   241|<p><strong>Long-context:</strong> Opus 4 maintains consistency and coherence at 100K tokens better than the competition. GPT-4 Turbo degrades noticeably above 32K. Gemini Pro handles length but loses specificity.</p>
   242|<p><strong>Reasoning:</strong> Opus 4 shows superior chain-of-thought reasoning — it explains its logic more clearly and catches its own errors more often. GPT-4 Turbo is faster but sometimes skips steps. Gemini Pro is inconsistent on multi-step problems.</p>
   243|
   244|<h2>The Takeaway</h2>
   245|<p>For most teams, the choice isn't about which model is "best" — it's about which model is right for your task profile. If you need long contexts and deep reasoning, Opus 4 is worth the premium. If you're doing high-volume, shorter tasks, GPT-4 Turbo's speed advantage matters more.</p>`,
   246|  },
   247|  'open-source-llms-2025': {
   248|    id: '8',
   249|    title: 'Open Source LLMs in 2025: Llama 3, Mistral, and the Rest',
   250|    slug: 'open-source-llms-2025',
   251|    excerpt: 'The gap between open and closed models has narrowed dramatically. An honest comparison of the top open-weight models and when to use them.',
   252|    category: 'Vision',
   253|    tags: ['Open Source', 'Llama', 'Mistral', 'LLM'],
   254|    cover_image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
   255|    published: true,
   256|    created_at: '2026-05-15T10:00:00Z',
   257|    content: `<p class="lead">A year ago, closed models were clearly superior. Today, Llama 3 70B and Mistral Large are competitive with GPT-4 on many tasks. The open-source landscape has changed.</p>
   258|
   259|<h2>The Current Leaders</h2>
   260|<p><strong>Llama 3 70B</strong> — Meta's flagship open model. Trained on 15T tokens. Performance on par with GPT-3.5 Turbo on most benchmarks. Excellent for fine-tuning. Available in 8B, 70B, and 405B variants.</p>
   261|<p><strong>Mistral Large</strong> — Mistral's most capable model. Outperforms Llama 3 70B on reasoning benchmarks. French and code-specialized variants available. 32K context window.</p>
   262|<p><strong>Qwen 2</strong> — Alibaba's surprising entry. Multilingual capability exceeds expectations, especially for Chinese and code-switching tasks. Weights publicly available.</p>
   263|
   264|<h2>When to Choose Open Over Closed</h2>
   265|<ul>
   266|  <li><strong>Data privacy</strong> — your data never leaves your infrastructure</li>
   267|  <li><strong>Cost control</strong> — self-hosting has fixed costs, not per-token pricing</li>
   268|  <li><strong>Fine-tuning</strong> — open models are far easier to fine-tune on proprietary data</li>
   269|  <li><strong>Compliance</strong> — regulated industries (healthcare, finance) often can't use external APIs</li>
   270|</ul>
   271|
   272|<h2>When Closed Still Wins</h2>
   273|<p>The frontier models (Opus 4, GPT-4o) still lead on the hardest tasks — complex reasoning, state-of-the-art code generation, and very long context. If you need the absolute best performance on cutting-edge tasks, closed models remain ahead.</p>
   274|
   275|<h2>The Practical Recommendation</h2>
   276|<p>Start with open models for cost-sensitive, data-sensitive, or fine-tuning-heavy workloads. Use closed models for your hardest problems where capability matters more than cost or control.</p>`,
   277|  },
   278|  'ai-coding-assistants-comparison': {
   279|    id: '9',
   280|    title: 'AI Coding Assistants: Evaluating GitHub Copilot, Cursor, and Tabnine',
   281|    slug: 'ai-coding-assistants-comparison',
   282|    excerpt: 'Three AI coding tools, three different philosophies. We used each for two weeks on real production codebases. Here is the honest comparison.',
   283|    category: 'Engineering',
   284|    tags: ['Copilot', 'Cursor', 'Tabnine', 'Developer Tools'],
   285|    cover_image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
   286|    published: true,
   287|    created_at: '2026-05-17T09:00:00Z',
   288|    content: `<p class="lead">AI coding assistants have matured from novelty to necessity. But not all are built the same. Two weeks in a real production codebase with each.</p>
   289|
   290|<h2>GitHub Copilot</h2>
   291|<p>Pros: deeply integrated into VS Code, excellent for boilerplate and test generation, low friction. Cons: prone to hallucinating library APIs, context awareness is limited to open files, enterprise features require subscription.</p>
   292|<p>Best for: rapid prototyping, test generation, boilerplate reduction in well-documented stacks.</p>
   293|
   294|<h2>Cursor</h2>
   295|<p>Pros: whole-file AI editing, conversational refactoring, excellent for exploring unfamiliar codebases. Cons: more expensive, can be slow on large files, learning curve for the AI-native interactions.</p>
   296|<p>Best for: refactoring legacy code, understanding large unfamiliar codebases, complex multi-file changes.</p>
   297|
   298|<h2>Tabnine</h2>
   299|<p>Pros: runs locally (data never leaves your machine), fast inference, excellent for privacy-sensitive work. Cons: less capable than cloud alternatives on complex tasks, requires good training data from your codebase to shine.</p>
   300|<p>Best for: regulated environments, large codebases with IP concerns, teams with specific privacy requirements.</p>
   301|
   302|<h2>The Honest Verdict</h2>
   303|<p>No single tool wins on all dimensions. The best team uses Copilot for speed, Cursor for complex refactoring, and Tabnine for sensitive projects. Budget and context determine which matters most.</p>`,
   304|  },
   305|  'future-of-work-ai-developers': {
   306|    id: '10',
   307|    title: 'The Future of Work: How AI Changes What Developers Do',
   308|    slug: 'future-of-work-ai-developers',
   309|    excerpt: 'Software development is being transformed by AI. Not by replacing developers — but by changing what development means.',
   310|    category: 'Ethics',
   311|    tags: ['Future of Work', 'AI', 'Development', 'Productivity'],
   312|    cover_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
   313|    published: true,
   314|    created_at: '2026-05-19T11:00:00Z',
   315|    content: `<p class="lead">Every cycle of automation displaces some work and creates new work. This time is different — AI writes code, so what does a developer do?</p>
   316|
   317|<h2>The Displacement Question</h2>
   318|<p>The honest answer: some coding tasks will be automated. Boilerplate, test generation, simple CRUD operations, documentation — these are shrinking fast. Entry-level roles that primarily involve writing simple, repetitive code are at risk.</p>
   319|<p>But "software development" is not just code writing. It includes understanding what to build (product reasoning), how to build it (architectural decisions), and ensuring it works correctly (testing, debugging, deployment). AI is unevenly good at each of these.</p>
   320|
   321|<h2>What Actually Scales</h2>
   322|<p>Individual developers with AI tools are dramatically more productive. A developer using Copilot and an LLM for code review produces 2-3x more working code than a year ago. This isn't theory — it's observable in teams that have adopted these tools.</p>
   323|<p>But this productivity multiplier doesn't mean we need fewer developers. It means the same output requires fewer developers, or the same developers can build more ambitious things.</p>
   324|
   325|<h2>The New Skills That Matter</h2>
   326|<ul>
   327|  <li><strong>Prompt engineering</strong> — knowing how to specify, constrain, and iterate on AI-generated outputs</li>
   328|  <li><strong>Evaluation design</strong> — the skill of specifying what "correct" means, and building tests that verify it</li>
   329|  <li><strong>System architecture</strong> — AI is narrow; humans still design the big picture</li>
   330|  <li><strong>Critique and judgment</strong> — the ability to spot when an AI is wrong, subtle, or dangerous</li>
   331|</ul>
   332|
   333|<h2>The Prediction</h2>
   334|<p>Developers who understand AI will replace developers who don't. Not because AI writes code, but because AI-augmented developers can do everything non-augmented developers can do — plus more. The question isn't whether AI changes development. It's whether you change with it.</p>`,
   335|  },
   336|  'hermes-agent-practical-guide': {
   337|    id: '11',
   338|    title: 'Getting Started with Hermes Agent: A Complete Practical Guide',
   339|    slug: 'hermes-agent-practical-guide',
   340|    excerpt: 'Hermes Agent is a powerful AI assistant that can plan, reason, and execute tasks autonomously. Here is how to get the most out of it.',
   341|    category: 'Engineering',
   342|    tags: ['Hermes', 'Agent', 'Tutorial', 'AI'],
   343|    cover_image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
   344|    published: true,
   345|    created_at: '2026-05-20T09:00:00Z',
   346|    content: `<p class="lead">Hermes Agent is not just another chatbot. It is an autonomous agent that can plan, delegate, search the web, write code, and execute multi-step workflows — all from a single prompt.</p>
   347|
   348|<h2>What Makes Hermes Different</h2>
   349|<p>Unlike simple text generators, Hermes is built for agency. It maintains memory across sessions, can spawn subagents for parallel work, integrates with tools like GitHub, Vercel, Telegram, and the browser. It is designed to be your AI teammate, not just an answering machine.</p>
   350|
   351|<h2>Core Concepts</h2>
   352|<ul>
   353|  <li><strong>Tasks and Goals</strong> — Give Hermes a goal and it breaks it down, delegates, and coordinates</li>
   354|  <li><strong>Skills</strong> — Modular instruction sets that extend Hermes's capabilities</li>
   355|  <li><strong>Memory</strong> — Persistent context across sessions so it remembers your projects</li>
   356|  <li><strong>Delegation</strong> — Spawn subagents to handle independent subtasks in parallel</li>
   357|  <li><strong>Tools</strong> — Web search, terminal, file system, GitHub, Vercel, Telegram, and more</li>
   358|</ul>
   359|
   360|<h2>A Simple Workflow</h2>
   361|<p>Start with a clear, specific goal. "Build and deploy a Next.js blog to Vercel" is better than "make me a website." Hermes will ask clarifying questions, plan the steps, execute them, and report back. For complex tasks, it can spawn multiple subagents to work simultaneously.</p>
   362|
   363|<h2>Best Practices</h2>
   364|<ul>
   365|  <li>Be specific about the desired outcome, not the process</li>
   366|  <li>Leverage skills for specialized tasks (code review, research, design)</li>
   367|  <li>Use memory to teach Hermes about your preferences and projects</li>
   368|  <li>Review agent work — trust but verify for critical tasks</li>
   369|</ul>
   370|
   371|<h2>What to Try First</h2>
   372|<p>Start with something bounded: "Search for the latest news on AI agents and summarize the top 3 stories." Then scale up to multi-step tasks. The more you use it, the better you understand how to phrase requests for optimal results.</p>`,
   373|  },
   374|  'hermes-vs-claude-ai-assistants': {
   375|    id: '12',
   376|    title: 'Hermes Agent vs Claude: Comparing AI Assistants in 2025',
   377|    slug: 'hermes-vs-claude-ai-assistants',
   378|    excerpt: 'Two powerful AI systems, two different philosophies. We break down capabilities, use cases, and which one to reach for first.',
   379|    category: 'Vision',
   380|    tags: ['Hermes', 'Claude', 'Comparison', 'AI'],
   381|    cover_image: 'https://images.unsplash.com/photo-1535378917042-10a22a959095?w=800&q=80',
   382|    published: true,
   383|    created_at: '2026-05-21T10:00:00Z',
   384|    content: `<p class="lead">Both Hermes and Claude are capable AI assistants. But they are built for different purposes, and understanding those differences is the key to using both effectively.</p>
   385|
   386|<h2>Hermes: The Agent-First System</h2>
   387|<p>Hermes is designed as an autonomous agent. It can plan multi-step workflows, delegate to subagents, execute code, manage files, and interact with external services. It is built for people who want an AI teammate that can handle complex, real-world tasks with minimal hand-holding.</p>
   388|<p>Hermes excels at: end-to-end project execution, research synthesis, automation pipelines, and integration work across multiple platforms and services.</p>
   389|
   390|<h2>Claude: The Reasoning Specialist</h2>
   391|<p>Claude from Anthropic is a frontier language model optimized for deep reasoning, nuanced analysis, and thoughtful response generation. It excels at tasks that require careful consideration — legal analysis, complex code architecture, creative writing, and philosophical exploration.</p>
   392|<p>Claude's strengths: conversation depth, ethical reasoning, safety alignment, and the ability to engage with ambiguous, multi-faceted questions.</p>
   393|
   394|<h2>How to Use Both</h2>
   395|<p>Think of Claude as your thinking partner for complex reasoning tasks, and Hermes as your execution partner for getting things done. Use Claude when you need to work through a hard problem. Use Hermes when you have a clear goal and need someone (something?) to drive toward it.</p>
   396|<p>The most productive power users switch between both: Claude for analysis and planning, Hermes for execution and automation.</p>
   397|
   398|<h2>The Honest Take</h2>
   399|<p>Hermes is newer and the ecosystem is still evolving. Claude has years of research behind it and a proven safety record. Neither is universally better — they complement each other. If you only had to pick one, the choice depends on whether you need a thinker or a doer.</p>`,
   400|  },
   401|  'building-custom-agents-hermes': {
   402|    id: '13',
   403|    title: 'Building Custom Agents with Hermes: Skills and Toolchains',
   404|    slug: 'building-custom-agents-hermes',
   405|    excerpt: 'Hermes skills let you teach it specialized knowledge and workflows. A guide to authoring, testing, and deploying custom agent behaviors.',
   406|    category: 'Engineering',
   407|    tags: ['Hermes', 'Agents', 'Skills', 'Development'],
   408|    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
   409|    published: true,
   410|    created_at: '2026-05-22T09:00:00Z',
   411|    content: `<p class="lead">Hermes is extensible. Skills are modular instruction sets that add specialized capabilities — from domain knowledge to custom workflows to integrations with proprietary tools.</p>
   412|
   413|<h2>What Is a Skill?</h2>
   414|<p>A skill is a markdown file with YAML frontmatter that defines: when to use the skill, what steps to follow, what tools are available, and how to verify success. Skills can reference scripts, templates, and external resources.</p>
   415|<p>Skills live in the ~/.hermes/skills/ directory. Hermes loads them on startup and uses them contextually based on the task at hand.</p>
   416|
   417|<h2>Skill Anatomy</h2>
   418|<ul>
   419|  <li><strong>Trigger</strong> — conditions that activate the skill (task keywords, context patterns)</li>
   420|  <li><strong>Steps</strong> — numbered instructions the agent follows</li>
   421|  <li><strong>Tools</strong> — specific toolsets enabled for this skill (terminal, file, web, etc.)</li>
   422|  <li><strong>Verification</strong> — how to confirm the skill worked correctly</li>
   423|  <li><strong>Pitfalls</strong> — common mistakes to avoid</li>
   424|</ul>
   425|
   426|<h2>Creating Your First Skill</h2>
   427|<p>Start by identifying a recurring task with a clear pattern. Writing a skill forces you to be explicit about the process — which often reveals improvements to the workflow itself. The skill file becomes both documentation and executable behavior.</p>
   428|
   429|<h2>Real-World Examples</h2>
   430|<ul>
   431|  <li>A "code-review" skill that knows your team's standards and applies them automatically</li>
   432|  <li>A "research" skill that follows a specific methodology for gathering and synthesizing information</li>
   433|  <li>A "deployment" skill that packages, pushes, and verifies a release end-to-end</li>
   434|</ul>
   435|
   436|<h2>Sharing Skills</h2>
   437|<p>Skills can be published and shared. The Hermes ecosystem includes community skills for common tasks. Start with existing skills, adapt them, and contribute back when you build something useful for others.</p>`,
   438|  },
   439|  'hermes-api-integration-guide': {
   440|    id: '14',
   441|    title: 'Hermes API: Integrating AI Agents into Your Applications',
   442|    slug: 'hermes-api-integration-guide',
   443|    excerpt: 'The Hermes API lets you embed autonomous agent capabilities into any product. A practical guide to authentication, endpoints, and real-world patterns.',
   444|    category: 'Engineering',
   445|    tags: ['Hermes', 'API', 'Integration', 'Developer'],
   446|    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
   447|    published: true,
   448|    created_at: '2026-05-23T11:00:00Z',
   449|    content: `<p class="lead">The Hermes API exposes agent capabilities to external applications. Build AI-powered products that delegate tasks to Hermes, receive results, and integrate them into existing workflows.</p>
   450|
   451|<h2>Authentication</h2>
   452|<p>All API requests use Bearer token authentication. Generate tokens from the Hermes dashboard. Tokens can be scoped to specific capabilities — read-only for monitoring, full execution for agent tasks.</p>
   453|
   454|<h2>Core Endpoints</h2>
   455|<ul>
   456|  <li><strong>POST /tasks</strong> — Create a new agent task with a natural language goal</li>
   457|  <li><strong>GET /tasks/:id</strong> — Check task status and retrieve results</li>
   458|  <li><strong>GET /tasks/:id/logs</strong> — Stream execution logs in real-time</li>
   459|  <li><strong>POST /tasks/:id/cancel</strong> — Cancel a running task</li>
   460|  <li><strong>GET /agents</strong> — List available agent configurations</li>
   461|</ul>
   462|
   463|<h2>Real-World Patterns</h2>
   464|<p><strong>Async workflow automation:</strong> Create a task, store the task ID, poll for completion. Use webhooks to receive push notifications when the task finishes.</p>
   465|<p><strong>Human-in-the-loop:</strong> Set task breakpoints that pause execution and wait for human approval before continuing. Critical for destructive or expensive operations.</p>
   466|<p><strong>Parallel delegation:</strong> Create multiple tasks simultaneously — Hermes handles coordination and returns consolidated results.</p>
   467|
   468|<h2>Error Handling</h2>
   469|<p>Agent tasks can fail for reasons beyond API errors: ambiguous goals, tool failures, timeout limits. Design for graceful degradation: if a task fails, log the failure, notify the user, and provide partial results when available.</p>
   470|
   471|<h2>Pricing and Limits</h2>
   472|<p>The API is priced per task based on complexity and execution time. Free tier includes 100 tasks/month. Higher tiers offer longer task timeouts, more tool access, and priority execution.</p>`,
   473|  },
   474|  'multi-agent-orchestration-hermes': {
   475|    id: '15',
   476|    title: 'Multi-Agent Orchestration with Hermes: Parallel Thinking at Scale',
   477|    slug: 'multi-agent-orchestration-hermes',
   478|    excerpt: 'Complex problems benefit from multiple specialized agents working in parallel. How to design, coordinate, and verify multi-agent systems.',
   479|    category: 'Engineering',
   480|    tags: ['Hermes', 'Multi-Agent', 'Orchestration', 'AI'],
   481|    cover_image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
   482|    published: true,
   483|    created_at: '2026-05-24T09:00:00Z',
   484|    content: `<p class="lead">Single agents hit ceilings on complex tasks. Multi-agent systems distribute work across specialized roles — research, coding, review — and synthesize results into coherent outputs.</p>
   485|
   486|<h2>Why Multi-Agent?</h2>
   487|<p>Different agents can specialize. One agent researches, another writes code, a third reviews. They work in parallel, each using the tools and context best suited to their subtask. The orchestrator synthesizes their outputs into the final result.</p>
   488|<p>This mirrors how teams work: specialists who contribute to a shared goal, coordinated by a lead.</p>
   489|
   490|<h2>Designing Multi-Agent Systems</h2>
   491|<ul>
   492|  <li><strong>Role assignment</strong> — each agent has a clear, focused responsibility</li>
   493|  <li><strong>Shared context</strong> — agents need a common understanding of the problem</li>
   494|  <li><strong>Output contracts</strong> — each agent knows exactly what to produce</li>
   495|  <li><strong>Synthesis layer</strong> — a coordinator that combines agent outputs</li>
   496|  <li><strong>Verification gates</strong> — checkpoints before proceeding to the next phase</li>
   497|</ul>
   498|
   499|<h2>Hermes Subagent API</h2>
   500|<p>Hermes supports spawning subagents directly via the delegate_task tool. Specify the goal, context, and available toolsets. Subagents run in isolated contexts and return results to the parent.</p>
   501|