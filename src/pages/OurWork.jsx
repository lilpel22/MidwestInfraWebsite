import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CaseStudyCard({ study, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <Link to={`/case-study/${study.id}`} className="group flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={study.cardImage}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />
        </div>

        {/* Text */}
        <div className="bg-white pt-5 pb-6 px-5 flex flex-col flex-1">
          <h2 className="font-oswald text-xl font-bold text-neutral-900 uppercase leading-tight mb-4">
            {study.title}
          </h2>
          <div className="border-t border-neutral-200 pt-4 flex items-center justify-between mt-auto">
            <span className="font-roboto text-sm text-neutral-500">
              {study.location}
            </span>
            <svg
              className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function OurWork() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Page Hero */}
      <div className="bg-primary-deep pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)
            `,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              Field-Proven Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-5xl lg:text-[64px] font-bold text-white uppercase leading-tight mb-5"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-roboto text-base text-white/55 font-light max-w-xl leading-relaxed"
          >
            Documented case studies from certified trenchless infrastructure rehabilitation
            projects — structural lining, I&I mitigation, and asset life extension delivered
            across Michigan and beyond.
          </motion.p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-oswald text-3xl lg:text-4xl font-bold text-white uppercase leading-tight mb-2">
              Have a Project in Mind?
            </h2>
            <p className="font-roboto text-white/60 font-light text-sm">
              Get a free assessment from Michigan's certified Sprayroq™ partner.
            </p>
          </div>
          <Link
            to="/#contact"
            className="flex-shrink-0 px-10 py-4 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.2em] uppercase hover:bg-amber-600 transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
