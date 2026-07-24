import { marked } from 'marked'

const rawArticles = import.meta.glob('/content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

marked.setOptions({ gfm: true, breaks: false })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/)
    if (!m) continue
    let value = m[2].trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[m[1]] = value
  }
  return { data, body: match[2] }
}

function estimateReadTime(markdown) {
  const words = markdown.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

export const articles = Object.entries(rawArticles)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const slug = data.slug || slugFromPath(path)
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      category: data.category || 'Uncategorized',
      excerpt: data.excerpt || '',
      hero: data.hero || '',
      card_image: data.card_image || data.hero || '',
      readTime: estimateReadTime(body),
      html: marked.parse(body),
      body,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export const CATEGORIES = [
  'Cleaning',
  'Trenchless Excavation',
  'Trenchless Rehabilitation',
]

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(slug, limit = 3) {
  const current = getArticleBySlug(slug)
  if (!current) return []
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category
  )
  const rest = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category
  )
  return [...sameCategory, ...rest].slice(0, limit)
}

export function formatDate(iso) {
  if (!iso) return ''
  // Parse YYYY-MM-DD as noon local time so US timezones don't shift the day back.
  const raw = String(iso).slice(0, 10)
  const d = new Date(`${raw}T12:00:00`)
  if (isNaN(d)) return String(iso)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
