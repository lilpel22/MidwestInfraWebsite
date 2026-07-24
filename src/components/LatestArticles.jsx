import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import { articles } from '../data/articlesLoader'

export default function LatestArticles() {
  const latest = articles.slice(0, 3)

  if (latest.length === 0) return null

  return (
    <section id="articles" className="bg-white py-24 lg:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 flex items-end justify-between flex-wrap gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
                From the Field
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl lg:text-[56px] font-bold text-primary-deep uppercase leading-tight"
            >
              Latest Articles
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 font-oswald text-[11px] tracking-[0.22em] uppercase text-primary font-medium hover:text-secondary transition-colors"
            >
              View All Articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {latest.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
            >
              <ArticleCard article={a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
