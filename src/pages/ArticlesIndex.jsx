import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import { articles, CATEGORIES } from '../data/articlesLoader'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function ArticlesIndex() {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') || 'All'

  useDocumentMeta({
    title: 'Articles | Midwest Infra',
    description:
      'Field insights on trenchless rehabilitation, hydrovac excavation, and sewer cleaning across Michigan — from the crew at Midwest Infra.',
    path: '/articles',
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const filtered = useMemo(() => {
    if (active === 'All') return articles
    return articles.filter((a) => a.category === active)
  }, [active])

  const setCategory = (cat) => {
    if (cat === 'All') setParams({}, { replace: true })
    else setParams({ category: cat }, { replace: true })
  }

  const allTabs = ['All', ...CATEGORIES]

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Hero band */}
      <section className="relative bg-primary-deep pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              From the Field
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl lg:text-[64px] font-bold text-white uppercase leading-tight max-w-4xl"
          >
            Articles from the<br />
            <span className="text-secondary">Midwest Infra Crew</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-roboto text-base lg:text-lg text-white/70 mt-6 max-w-2xl leading-relaxed"
          >
            Field notes, project write-ups, and practical guidance on trenchless
            rehabilitation, non-destructive excavation, and sewer maintenance for
            municipalities, MDOT, and county road commissions across Michigan.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-20 lg:top-24 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 lg:gap-6 overflow-x-auto py-5 -mx-2 px-2 no-scrollbar">
            {allTabs.map((tab) => {
              const isActive = tab === active
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setCategory(tab)}
                  className={`relative flex-shrink-0 font-oswald text-[11px] lg:text-xs tracking-[0.22em] uppercase font-medium px-3 py-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-500 hover:text-primary-deep'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.span
                      layoutId="articles-tab-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-secondary"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-oswald text-lg tracking-[0.14em] uppercase text-gray-500">
                No articles in this category yet — check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filtered.map((a, i) => (
                <motion.div
                  key={a.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                >
                  <ArticleCard article={a} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
