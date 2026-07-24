import { Link } from 'react-router-dom'
import { formatDate } from '../data/articlesLoader'

export default function ArticleCard({ article }) {
  const image = article.card_image || article.hero

  return (
    <Link
      to={`/articles/${article.slug}`}
      aria-label={`Read: ${article.title}`}
      className="group bg-white border border-gray-200 hover:border-primary/25 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden h-full"
    >
      {/* Image with category chip */}
      <div className="relative overflow-hidden h-52">
        {image ? (
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-deep to-primary" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary-deep/25 to-transparent" />

        <span className="absolute top-4 left-4 bg-secondary px-3 py-1.5 font-oswald text-[10px] tracking-[0.22em] uppercase text-white font-medium">
          {article.category}
        </span>
      </div>

      <div className="p-8 lg:p-9 flex-1 flex flex-col">
        <h3 className="font-oswald text-xl lg:text-2xl font-bold text-primary-deep uppercase leading-tight mb-4">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="font-roboto text-sm text-gray-600 leading-relaxed mb-6">
            {article.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center gap-3 font-oswald text-[10px] tracking-[0.22em] uppercase text-gray-400 font-medium">
          <span>{formatDate(article.date)}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{article.readTime} min read</span>
        </div>
      </div>

      <div className="px-8 lg:px-9 pb-7">
        <div className="pt-5 border-t border-gray-100">
          <span className="inline-flex items-center gap-2 font-oswald text-[11px] tracking-[0.22em] uppercase text-primary font-medium group-hover:text-secondary transition-colors">
            Read Article
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
