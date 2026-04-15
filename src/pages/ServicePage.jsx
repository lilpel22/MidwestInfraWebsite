import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getServiceBySlug, servicesData } from '../data/servicesData'

export default function ServicePage() {
  const { slug } = useParams()
  const { hash } = useLocation()
  const navigate = useNavigate()
  const service = getServiceBySlug(slug)

  useEffect(() => {
    if (!service) navigate('/', { replace: true })

    if (hash) {
      // Reset to top instantly, then smooth-scroll to the anchor after layout settles
      window.scrollTo({ top: 0, behavior: 'instant' })
      const id = hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const headerOffset = 88
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [slug, hash])

  if (!service) return null

  const otherServices = servicesData.filter(s => s.slug !== slug)

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Hero */}
      <section className="relative h-[52vh] min-h-[380px] flex items-center pt-20 lg:pt-24">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="font-oswald text-4xl lg:text-6xl font-bold text-white uppercase leading-tight max-w-3xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
            className="font-roboto text-base lg:text-lg text-white/80 mt-4 max-w-xl"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 lg:gap-20">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-secondary" />
                <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-primary font-medium">
                  Service Overview
                </span>
              </div>
              <div className="space-y-5">
                {service.description.map((para, i) => (
                  <p key={i} className="font-roboto text-base text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Asset types sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="bg-[#F8F9FB] border border-gray-100 p-8">
                <h3 className="font-oswald text-[11px] tracking-[0.32em] uppercase text-primary font-medium mb-5">
                  Asset Types Served
                </h3>
                <ul className="space-y-2.5">
                  {service.assets.map((asset, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span className="font-roboto text-base text-gray-700">{asset}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA */}
              <div className="mt-6 bg-primary p-8">
                <p className="font-oswald text-lg font-bold text-white uppercase leading-tight mb-3">
                  Ready to get started?
                </p>
                <p className="font-roboto text-sm text-white/80 mb-5 leading-relaxed">
                  Contact our team for a site assessment and project scope.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-oswald text-xs tracking-[0.18em] uppercase font-semibold hover:bg-secondary hover:text-white transition-all duration-200"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#F8F9FB] py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-primary font-medium">
              Capabilities
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white border border-gray-100 px-6 py-5"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-roboto text-sm text-gray-700 leading-snug">{cap}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-primary font-medium">
              Our Process
            </span>
          </div>
          <h2 className="font-oswald text-3xl lg:text-4xl font-bold text-primary-deep uppercase leading-tight mb-14">
            How We Execute
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-none">
                  <div className="font-oswald text-5xl font-bold text-gray-100 leading-none select-none">
                    {step.step}
                  </div>
                </div>
                <div className="pt-1.5">
                  <h3 className="font-oswald text-lg font-bold text-primary-deep uppercase tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="font-roboto text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Work */}
      {service.example && (
        <section id="example" className="bg-primary-deep py-16 lg:py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-secondary font-medium">
                Example Work
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: description + highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <h2 className="font-oswald text-3xl lg:text-4xl font-bold text-white uppercase leading-tight mb-6">
                  {service.example.title}
                </h2>
                <p className="font-roboto text-base text-white/65 leading-relaxed mb-8">
                  {service.example.description}
                </p>
                <ul className="space-y-4">
                  {service.example.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-roboto text-sm text-white/70 leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
                className="grid grid-cols-2 gap-3"
              >
                {service.example.images.map((img, i) => (
                  <div key={i} className={`overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}>
                    <img
                      src={img}
                      alt={`${service.example.title} example ${i + 1}`}
                      className={`w-full object-cover ${i === 0 ? 'h-64 lg:h-72' : 'h-40 lg:h-48'}`}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="bg-primary-deep py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-secondary" />
              <span className="font-oswald text-[10px] tracking-[0.32em] uppercase text-secondary font-medium">
                Get Started
              </span>
            </div>
            <h2 className="font-oswald text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
              Ready to Rehabilitate<br />Your Infrastructure?
            </h2>
            <p className="font-roboto text-base text-white/80 mt-4 max-w-xl leading-relaxed">
              Our team is ready to assess your project and deliver a scoped rehabilitation plan. Contact us today for a consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-none">
            <a
              href="/#contact"
              className="px-8 py-3.5 bg-secondary text-white font-oswald text-sm tracking-[0.18em] uppercase font-semibold hover:bg-secondary-dark transition-colors duration-200 text-center"
            >
              Get a Quote
            </a>
            <Link
              to="/"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-oswald text-sm tracking-[0.18em] uppercase font-semibold hover:border-white/70 transition-colors duration-200 text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-primary font-medium">
              Also Available
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-200 hover:shadow-md"
              >
                <div className="relative w-40 flex-none overflow-hidden">
                  <img
                    src={s.heroImage}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 px-6 py-5">
                  <span className="font-oswald text-[10px] tracking-[0.28em] uppercase text-secondary font-medium">
                    {s.subtitle}
                  </span>
                  <h3 className="font-oswald text-lg font-bold text-primary-deep uppercase leading-tight mt-1 mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-roboto text-sm text-gray-600 leading-snug">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
