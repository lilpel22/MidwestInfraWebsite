import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import {
  getArticleBySlug,
  getRelatedArticles,
  formatDate,
} from '../data/articlesLoader'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function ArticlePost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = getArticleBySlug(slug)

  useDocumentMeta({
    title: article
      ? `${article.title} | Midwest Infra`
      : 'Article | Midwest Infra',
    description:
      article?.excerpt ||
      'Field insights on trenchless rehabilitation, hydrovac excavation, and sewer maintenance across Michigan.',
    path: `/articles/${slug || ''}`,
  })

  useEffect(() => {
    if (!article) navigate('/articles', { replace: true })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug, article, navigate])

  if (!article) return null

  const related = getRelatedArticles(article.slug, 3)

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Title band */}
      <section className="bg-primary-deep pt-32 lg:pt-40 pb-14 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <Link
              to="/articles"
              className="font-oswald text-[10px] tracking-[0.32em] uppercase text-white/60 hover:text-secondary transition-colors"
            >
              ← All Articles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span className="inline-block bg-secondary px-3 py-1.5 font-oswald text-[10px] tracking-[0.22em] uppercase text-white font-medium mb-6">
              {article.category}
            </span>
            <h1 className="font-oswald text-3xl lg:text-5xl font-bold text-white uppercase leading-tight">
              {article.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 font-oswald text-[11px] tracking-[0.28em] uppercase text-white/60 font-medium">
              <span>{formatDate(article.date)}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{article.readTime} min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      {article.hero && (
        <div className="relative -mt-8 lg:-mt-12 max-w-5xl mx-auto px-6 lg:px-10">
          <div className="aspect-[16/9] overflow-hidden shadow-xl">
            <img
              src={article.hero}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {article.excerpt && (
            <p className="font-roboto text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 pb-10 border-b border-gray-100">
              {article.excerpt}
            </p>
          )}
          <article
            className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:uppercase prose-headings:text-primary-deep prose-headings:font-bold prose-h2:tracking-tight prose-h2:text-3xl prose-h3:text-xl prose-p:font-roboto prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary prose-strong:text-primary-deep prose-li:font-roboto prose-li:text-gray-700 prose-blockquote:border-secondary prose-blockquote:text-gray-600 prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#F5F5F5] py-16 lg:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-secondary" />
                  <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
                    More from the Field
                  </span>
                </div>
                <h2 className="font-oswald text-2xl lg:text-3xl font-bold text-primary-deep uppercase leading-tight">
                  Keep Reading
                </h2>
              </div>
              <Link
                to="/articles"
                className="font-oswald text-[11px] tracking-[0.22em] uppercase text-primary hover:text-secondary transition-colors font-medium"
              >
                View All Articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
