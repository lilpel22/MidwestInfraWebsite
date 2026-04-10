import { useEffect, useState, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  if (total === 0) return null

  return (
    <div className="w-full select-none">
      {/* Viewport — clips the sliding track */}
      <div
        className="relative overflow-hidden"
        style={{ height: 'calc(55vw * 9 / 16)' }}
      >
        {/* Sliding track — all images in a row, animates on current change */}
        <motion.div
          className="absolute top-0 left-0 flex"
          style={{ width: `${total * 55}vw` }}
          initial={false}
          animate={{ x: `calc(22.5vw - ${current} * 55vw)` }}
          transition={{ type: 'spring', stiffness: 300, damping: 36, mass: 0.85 }}
        >
          {images.map((img, i) => (
            <div
              key={img}
              className="flex-shrink-0 relative"
              style={{ width: '55vw', height: 'calc(55vw * 9 / 16)' }}
            >
              <img
                src={img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              {/* Dim overlay fades out on current image */}
              <motion.div
                className="absolute inset-0 bg-white/50 pointer-events-none"
                animate={{ opacity: i === current ? 0 : 1 }}
                transition={{ duration: 0.35 }}
              />
            </div>
          ))}
        </motion.div>

        {/* Left arrow zone */}
        <div
          className="absolute left-0 top-0 h-full flex items-center justify-center cursor-pointer z-10"
          style={{ width: '22.5vw' }}
          onClick={prev}
        >
          <div
            className="bg-primary hover:bg-primary/80 transition-colors duration-200 flex items-center justify-center"
            style={{ width: 52, height: 52 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        {/* Right arrow zone */}
        <div
          className="absolute right-0 top-0 h-full flex items-center justify-center cursor-pointer z-10"
          style={{ width: '22.5vw' }}
          onClick={next}
        >
          <div
            className="bg-primary hover:bg-primary/80 transition-colors duration-200 flex items-center justify-center"
            style={{ width: 52, height: 52 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Counter — aligned under center image */}
      <div className="mt-5" style={{ paddingLeft: '22.5vw' }}>
        <span className="font-oswald text-neutral-500 text-sm tracking-widest">
          {String(current + 1).padStart(2, '0')}
          <span className="mx-2 text-secondary font-light">/</span>
          {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default function CaseStudyPage() {
  const { id } = useParams()
  const study = caseStudies.find((s) => s.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!study) return <Navigate to="/our-work" replace />

  const otherStudies = caseStudies.filter((s) => s.id !== id)

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Hero — taller, title centered */}
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <img
          src={study.heroImage}
          alt={study.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

        <div className="relative h-full flex items-center justify-center px-6 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-oswald text-4xl lg:text-[62px] font-bold text-white uppercase leading-tight text-center max-w-4xl"
          >
            {study.title}
          </motion.h1>
        </div>
      </div>

      {/* Main content + sidebar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Left: narrative */}
            <div className="lg:col-span-2">
              {study.sections.map((section, i) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="mb-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-5 h-px bg-secondary flex-shrink-0" />
                    <h2 className="font-oswald text-xl font-bold text-neutral-900 uppercase tracking-wide">
                      {section.heading}
                    </h2>
                  </div>
                  {section.body.split('\n\n').map((para, pi) => {
                    if (para.includes('\n•') || para.startsWith('•')) {
                      const lines = para.split('\n')
                      return (
                        <div key={pi} className="mb-4">
                          {lines.map((line, li) =>
                            line.startsWith('•') ? (
                              <div key={li} className="flex gap-3 mb-1.5">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <p className="font-roboto text-base text-neutral-600 leading-relaxed">
                                  {line.replace(/^•\s*/, '')}
                                </p>
                              </div>
                            ) : (
                              <p key={li} className="font-roboto text-base text-neutral-600 leading-relaxed mb-3">
                                {line}
                              </p>
                            )
                          )}
                        </div>
                      )
                    }
                    return (
                      <p key={pi} className="font-roboto text-base text-neutral-600 leading-relaxed mb-4">
                        {para}
                      </p>
                    )
                  })}
                </motion.div>
              ))}
            </div>

            {/* Right: sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-primary-deep text-white p-7 sticky top-28">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-4 h-px bg-secondary" />
                  <span className="font-oswald text-[10px] tracking-[0.28em] uppercase text-secondary">
                    Project Overview
                  </span>
                </div>

                <div className="space-y-5 mb-7">
                  <div>
                    <div className="font-oswald text-[10px] tracking-[0.22em] uppercase text-white/40 mb-1">Client</div>
                    <div className="font-roboto text-sm text-white/85">{study.overview.client}</div>
                  </div>
                  <div>
                    <div className="font-oswald text-[10px] tracking-[0.22em] uppercase text-white/40 mb-1">Problem</div>
                    <div className="font-roboto text-sm text-white/75 leading-relaxed">{study.overview.problem}</div>
                  </div>
                  <div>
                    <div className="font-oswald text-[10px] tracking-[0.22em] uppercase text-white/40 mb-1">Solution</div>
                    <div className="font-roboto text-sm text-white/75 leading-relaxed">{study.overview.solution}</div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="font-oswald text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">Key Metrics</div>
                  <div className="grid grid-cols-2 gap-3">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="bg-white/5 border border-white/10 px-3 py-3">
                        <div className="font-oswald text-2xl font-bold text-secondary leading-none mb-1">
                          {stat.value}
                        </div>
                        <div className="font-roboto text-[10px] text-white/45 uppercase tracking-wide leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.18em] uppercase hover:bg-amber-600 transition-colors duration-200"
                >
                  Get a Quote
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Full-width gallery — outside constrained container */}
      {study.gallery.length > 0 && (
        <div className="bg-white border-t border-neutral-100 pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-5 h-px bg-secondary flex-shrink-0" />
              <h2 className="font-oswald text-xl font-bold text-neutral-900 uppercase tracking-wide">
                Project Gallery
              </h2>
            </div>
          </div>
          <ImageCarousel images={study.gallery} />
        </div>
      )}

      {/* More Case Studies */}
      {otherStudies.length > 0 && (
        <section className="bg-neutral-50 py-16 lg:py-20 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px bg-secondary" />
              <h2 className="font-oswald text-2xl font-bold text-neutral-900 uppercase tracking-wide">
                More Case Studies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {otherStudies.map((other) => (
                <Link
                  key={other.id}
                  to={`/case-study/${other.id}`}
                  className="group flex gap-5 bg-white border border-neutral-200 hover:border-primary p-5 transition-colors duration-300"
                >
                  <div className="w-28 h-20 flex-shrink-0 overflow-hidden">
                    <img
                      src={other.cardImage}
                      alt={other.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="font-roboto text-[10px] tracking-widest uppercase text-secondary font-medium block mb-1">
                      {other.location}
                    </span>
                    <h3 className="font-oswald text-base font-bold text-neutral-900 uppercase leading-tight group-hover:text-primary transition-colors duration-200">
                      {other.title}
                    </h3>
                    <span className="font-roboto text-xs text-neutral-400 mt-1 block">{other.tag}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
