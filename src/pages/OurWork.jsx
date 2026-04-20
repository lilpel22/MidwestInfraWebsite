import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudies'

export default function OurWork() {
  return (
    <div className="font-roboto overflow-x-hidden bg-[#050D1A]">
      <Header />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-primary-deep overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.028]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)
            `,
          }}
        />
        {/* Blue glow accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              Project Spotlights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl lg:text-[60px] font-bold text-white uppercase leading-tight max-w-3xl"
          >
            Our Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-roboto text-base lg:text-lg text-white/55 mt-5 max-w-2xl leading-relaxed"
          >
            Real projects. Documented results. Certified Sprayroq™ structural rehabilitation
            across Michigan and the Great Lakes region.
          </motion.p>
        </div>
      </section>

      {/* ── Case Study List ── */}
      <section className="bg-[#060E1C] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-8 lg:gap-10">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/case-study/${study.id}`}
                  className="group flex flex-col lg:flex-row overflow-hidden border border-white/[0.07] hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40"
                >
                  {/* Image */}
                  <div className="relative lg:w-[440px] xl:w-[520px] flex-none overflow-hidden aspect-[16/9] lg:aspect-auto">
                    <img
                      src={study.cardImage}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060E1C] opacity-0 lg:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

                    {/* Number badge */}
                    <div className="absolute top-4 left-4">
                      <span className="font-oswald text-xs tracking-[0.28em] uppercase text-white/60 bg-black/40 backdrop-blur-sm px-2.5 py-1">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Tag badge */}
                    <div className="absolute top-4 right-4 lg:hidden">
                      <span className="font-oswald text-[10px] tracking-[0.22em] uppercase text-secondary bg-black/40 backdrop-blur-sm border border-secondary/35 px-3 py-1.5">
                        {study.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 bg-primary-deep group-hover:bg-[#071020] transition-colors duration-500 px-8 lg:px-12 py-8 lg:py-10 flex flex-col justify-between">
                    {/* Top content */}
                    <div>
                      {/* Tag + location */}
                      <div className="hidden lg:flex items-center gap-4 mb-5">
                        <span className="font-oswald text-[10px] tracking-[0.28em] uppercase text-secondary border border-secondary/30 px-3 py-1.5">
                          {study.tag}
                        </span>
                        <span className="font-roboto text-xs text-white/35 tracking-wide">
                          {study.location}
                        </span>
                        <span className="font-roboto text-xs text-white/25">·</span>
                        <span className="font-roboto text-xs text-white/35 tracking-wide">
                          {study.date}
                        </span>
                      </div>

                      {/* Mobile location row */}
                      <div className="flex lg:hidden items-center gap-2 mb-3">
                        <span className="font-roboto text-[10px] text-white/40 tracking-wide uppercase">{study.location}</span>
                        <span className="text-white/20 text-xs">·</span>
                        <span className="font-roboto text-[10px] text-white/40 tracking-wide">{study.date}</span>
                      </div>

                      <h2 className="font-oswald text-2xl lg:text-3xl xl:text-4xl font-bold text-white uppercase leading-tight mb-3">
                        {study.title}
                      </h2>
                      <p className="font-oswald text-sm lg:text-base text-secondary/80 uppercase tracking-wide mb-5">
                        {study.subtitle}
                      </p>

                      <p className="font-roboto text-sm text-white/55 leading-relaxed max-w-xl">
                        {study.overview.problem}
                      </p>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
                      {study.stats.map((stat, j) => (
                        <div key={j} className="bg-primary-deep group-hover:bg-[#071020] transition-colors duration-500 px-4 py-4 text-center">
                          <div className="font-oswald text-2xl lg:text-3xl font-bold text-secondary leading-none mb-1">
                            {stat.value}
                          </div>
                          <div className="font-roboto text-[9px] text-white/35 uppercase tracking-wider leading-snug">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA arrow */}
                    <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-secondary transition-colors duration-300">
                      <span className="font-oswald text-[11px] tracking-[0.22em] uppercase">
                        View Case Study
                      </span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-secondary text-white font-oswald text-sm tracking-[0.18em] uppercase font-semibold hover:bg-secondary-dark transition-colors duration-200 text-center"
            >
              Get a Quote
            </Link>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3.5 border-2 border-white/25 text-white font-oswald text-sm tracking-[0.18em] uppercase font-semibold hover:border-white/60 transition-colors duration-200 text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
