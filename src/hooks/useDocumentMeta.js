import { useEffect } from 'react'

/**
 * Sets document <title>, <meta name="description">, <link rel="canonical">,
 * and Open Graph title/description/url for the current route.
 *
 * React SPA pages all serve the same index.html, so per-route SEO requires
 * updating these tags on mount. Modern Googlebot will see these after JS
 * renders. Static crawlers (LinkedIn, FB) get the index.html fallback values.
 *
 * @param {object} opts
 * @param {string}  opts.title           Full page title (e.g. "About | Midwest Infra")
 * @param {string}  opts.description     Meta description (~155 chars)
 * @param {string}  opts.path            Path on midwestinfra.biz (e.g. "/about")
 * @param {boolean} opts.noindex         If true, tells search engines not to index this page
 */
export function useDocumentMeta({ title, description, path, noindex = false }) {
  useEffect(() => {
    const SITE = 'https://www.midwestinfra.biz'
    const url = `${SITE}${path || ''}`

    if (title) document.title = title
    setMeta('name', 'description', description)
    setLink('canonical', url)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

    return () => {
      // On unmount, reset robots to default so it doesn't leak to next page
      setMeta('name', 'robots', 'index, follow')
    }
  }, [title, description, path, noindex])
}

function setMeta(attr, value, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
