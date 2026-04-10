import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

function FeaturedCard({ study }) {
  return (
    <Link to={`/case-study/${study.id}`} className="group relative block overflow-hidden h-full min-h-[480px]">
      <img
        src={study.cardImage}
        alt={study.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/30 to-transparent" />

      <div className="absolute top-6 left-6">
        <span className="bg-secondary px-3 py-1.5 font-oswald text-[11px] tracking-[0.22em] uppercase text-white">
          {study.tag}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="font-oswald text-sm tracking-[0.22em] uppercase text-white/75 mb-2">
          {study.location} · {study.date}
        </div>
        <h3 className="font-oswald text-2xl lg:text-3xl font-bold text-white uppercase leading-tight mb-4">
          {study.title}
        </h3>
        <div className="flex items-center gap-2 text-secondary font-oswald text-xs tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Read Case Study
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

function SmallCard({ study }) {
  return (
    <Link to={`/case-study/${study.id}`} className="group relative block overflow-hidden flex-1 min-h-[220px]">
      <img
        src={study.cardImage}
        alt={study.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/20 to-transparent" />

      <div className="absolute top-4 left-4">
        <span className="bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 font-oswald text-[10px] tracking-[0.22em] uppercase text-white">
          {study.tag}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="font-oswald text-sm tracking-[0.2em] uppercase text-white/70 mb-1">
          {study.location}
        </div>
        <h3 className="font-oswald text-lg font-bold text-white uppercase leading-tight">
          {study.title}
        </h3>
        <div className="flex items-center gap-1.5 mt-2 text-secondary font-oswald text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Project
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  const [featured, ...rest] = caseStudies

  return (
    <section id="projects" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-primary font-medium">
                Project Spotlights
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl lg:text-5xl font-bold text-primary-deep uppercase leading-tight"
            >
              Proven Results<br />
              <span className="text-primary">Across Michigan</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/our-work"
              className="inline-flex items-center gap-3 font-oswald text-sm tracking-[0.22em] uppercase text-primary border-b-2 border-secondary pb-0.5 hover:text-secondary transition-colors duration-200 group"
            >
              View All Case Studies
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Featured project grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[560px]"
        >
          <div className="flex-none lg:w-[62%]">
            <FeaturedCard study={featured} />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {rest.slice(0, 2).map((study) => (
              <SmallCard key={study.id} study={study} />
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex items-center justify-between py-5 border-t border-gray-100"
        >
          <p className="font-roboto text-sm text-gray-600">
            Showing {Math.min(3, caseStudies.length)} of {caseStudies.length} documented projects
          </p>
          <Link
            to="/our-work"
            className="font-oswald text-sm tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors duration-200"
          >
            Browse Full Portfolio →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
