'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function WritePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        window.location.href = '/login'
      } else {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  if (loading) return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const title = formData.get('title') as string
    const category = formData.get('category') as string
    const cover_image = formData.get('cover_image') as string
    const tags = (formData.get('tags') as string)
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)
    const content = formData.get('content') as string
    const published = formData.get('published') === 'on'

    const post = {
      title,
      slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      excerpt: content.slice(0, 160).replace(/<[^>]*>/g, '') + '...',
      content,
      cover_image: cover_image || null,
      category,
      tags,
      published,
    }

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    window.location.href = '/'
  }

  return (
    <div className="container">
      <div className="write-page">
        <h1>Write a Post</h1>
        <p className="subtitle">Share your insights with the world.</p>

        <form className="write-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Post title..."
            required
          />

          <div className="meta-row">
            <select name="category" required>
              <option value="">Select category</option>
              <option value="Vision">Vision</option>
              <option value="Language">Language</option>
              <option value="Reasoning">Reasoning</option>
              <option value="Ethics">Ethics</option>
              <option value="Engineering">Engineering</option>
            </select>

            <input
              type="text"
              name="cover_image"
              placeholder="Cover image URL (optional)"
            />
          </div>

          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated: AI, ML, Neural Networks)"
          />

          <textarea
            name="content"
            placeholder="Write your post content here..."
            required
          />

          <div className="form-actions">
            <label className="publish-toggle">
              <input type="checkbox" name="published" />
              <span className="toggle-switch" />
              Publish immediately
            </label>

            <button type="submit" className="btn btn-primary">
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}