import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudyPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const study = caseStudies.find(c => c.id === id)

  useEffect(() => {
    if (!study) navigate('/', { replace: true })
    window.scrollTo(0, 0)
  }, [id])

  if (!study) return null

  const sectionIcons = {
    Situation: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    Solution: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    Results: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    Conclusion: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }

  return (
    <div className="font-roboto overflow-x-hidden bg-[#050D1A]">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end">
        <img
          src={study.heroImage}
          alt={study.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-black/55 to-black/20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-14 lg:pb-20 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <a href="/" className="font-roboto text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/70 transition-colors">
              Home
            </a>
            <span className="text-white/20 text-xs">/</span>
            <a href="/#projects" className="font-roboto text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/70 transition-colors">
              Project Spotlights
            </a>
            <span className="text-white/20 text-xs">/</span>
            <span className="font-roboto text-xs tracking-[0.15em] uppercase text-white/60">{study.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
              {study.tag} · {study.date}
            </span>
          </div>
          <h1 className="font-oswald text-4xl lg:text-6xl font-bold text-white uppercase leading-tight max-w-4xl">
            {study.title}
          </h1>
          <p className="font-oswald text-base lg:text-lg text-white/55 uppercase tracking-wider mt-3">
            {study.subtitle}
          </p>
        </div>
      </section>

      {/* ── Introduction / Client + Stats ── */}
      <section className="bg-primary-deep border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-18">

          {/* Client + location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-secondary/50" />
              <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
                Client
              </span>
              <div className="w-10 h-px bg-secondary/50" />
            </div>
            <p className="font-oswald text-2xl lg:text-3xl font-bold text-white uppercase">
              {study.overview.client}
            </p>
            <p className="font-roboto text-sm text-white/40 mt-2 tracking-wider">{study.location}</p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]"
          >
            {study.stats.map((stat, i) => (
              <div key={i} className="bg-primary-deep px-8 py-8 text-center">
                <div className="font-oswald text-4xl lg:text-5xl font-bold text-secondary leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-roboto text-xs text-white/40 uppercase tracking-widest leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Problem / Solution overview strip ── */}
      <section className="bg-[#060E1C] border-b border-white/[0.06] py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-secondary" />
                <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
                  The Problem
                </span>
              </div>
              <p className="font-roboto text-base text-white/70 leading-relaxed">
                {study.overview.problem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-secondary" />
                <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
                  The Solution
                </span>
              </div>
              <p className="font-roboto text-base text-white/70 leading-relaxed">
                {study.overview.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full sections: Situation / Solution / Results / Conclusion ── */}
      <section className="bg-primary-deep py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-14 lg:space-y-18">
            {study.sections.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                {/* Section heading */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-none w-9 h-9 border border-secondary/40 flex items-center justify-center text-secondary">
                    {sectionIcons[sec.heading] || sectionIcons['Conclusion']}
                  </div>
                  <h2 className="font-oswald text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide">
                    {sec.heading}
                  </h2>
                  <div className="flex-1 h-px bg-white/[0.07]" />
                </div>

                {/* Body — preserve newlines */}
                <div className="space-y-4 pl-[52px]">
                  {sec.body.split('\n\n').map((para, j) => (
                    <p key={j} className="font-roboto text-base text-white/65 leading-relaxed whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {study.gallery && study.gallery.length > 0 && (
        <section className="bg-[#060E1C] py-14 lg:py-20 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
                Project Gallery
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
              {study.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`overflow-hidden group ${i === 0 ? 'col-span-2 lg:col-span-2' : ''}`}
                >
                  <img
                    src={img}
                    alt={`${study.title} — project photo ${i + 1}`}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
                      i === 0 ? 'h-72 lg:h-96' : 'h-52 lg:h-64'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-primary py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-secondary" />
              <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
                Get Started
              </span>
            </div>
            <h2 className="font-oswald text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
              Ready to Rehabilitate<br />Your Infrastructure?
            </h2>
            <p className="font-roboto text-base text-white/65 mt-4 max-w-xl leading-relaxed">
              Our certified team is ready to assess your project and deliver a scoped rehabilitation plan — no excavation required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-none">
            <a
              href="/#contact"
              className="px-8 py-3.5 bg-secondary text-white font-oswald text-sm tracking-[0.18em] uppercase font-semibold hover:bg-secondary-dark transition-colors duration-200 text-center"
            >
              Get a Quote
            </a>
            <a
              href="/#projects"
              className="px-8 py-3.5 border-2 border-white/25 text-white font-oswald text-sm tracking-[0.18em] uppercase font-semibold hover:border-white/60 transition-colors duration-200 text-center"
            >
              All Projects
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
