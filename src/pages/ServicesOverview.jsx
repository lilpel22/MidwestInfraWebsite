import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { servicesData } from '../data/servicesData'

const icons = [
  // Coating / shield icon
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Water / pipe icon
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>,
  // Excavation / truck icon
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>,
]

export default function ServicesOverview() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Page Hero */}
      <section className="bg-primary-deep pt-28 lg:pt-36 pb-16 lg:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)`,
          }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-oswald text-[160px] lg:text-[240px] font-bold text-white/[0.04] leading-none select-none pointer-events-none -mr-4 uppercase">
          Services
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
              What We Do
            </span>
          </div>
          <h1 className="font-oswald text-4xl lg:text-6xl font-bold text-white uppercase leading-tight max-w-2xl">
            Specialized Infrastructure Services
          </h1>
          <p className="font-roboto text-base lg:text-lg text-white/80 mt-5 max-w-xl leading-relaxed">
            Trenchless structural rehabilitation, high-pressure sewer jetting, and precision hydrovac excavation — delivered by certified crews across the State of Michigan.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-6">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex flex-col lg:flex-row overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative flex-none lg:w-80 xl:w-96 h-56 lg:h-auto overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                    <div className="absolute top-5 left-5 font-oswald text-6xl font-bold text-white/20 leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-8 lg:px-12 py-10 lg:py-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-secondary">
                          {icons[i]}
                        </div>
                        <span className="font-oswald text-[11px] tracking-[0.32em] uppercase text-primary font-medium">
                          {service.subtitle}
                        </span>
                      </div>

                      <h2 className="font-oswald text-2xl lg:text-3xl font-bold text-primary-deep uppercase leading-tight mb-4 group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h2>

                      <p className="font-roboto text-base text-gray-700 leading-relaxed mb-6 max-w-2xl">
                        {service.description[0]}
                      </p>

                      {/* Capabilities preview */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.capabilities.slice(0, 4).map((cap, j) => (
                          <span
                            key={j}
                            className="inline-block font-roboto text-xs text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5"
                          >
                            {cap}
                          </span>
                        ))}
                        {service.capabilities.length > 4 && (
                          <span className="inline-block font-roboto text-xs text-primary bg-primary/5 border border-primary/10 px-3 py-1.5">
                            +{service.capabilities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-oswald text-xs tracking-[0.2em] uppercase text-primary font-semibold border-b-2 border-secondary pb-0.5 w-fit group-hover:text-secondary transition-colors duration-200">
                      View Service Details
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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

      {/* Who we serve strip */}
      <section className="bg-[#F8F9FB] border-t border-gray-100 py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
            <div className="flex-none">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-secondary" />
                <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-primary font-medium">
                  Who We Serve
                </span>
              </div>
              <h2 className="font-oswald text-2xl lg:text-3xl font-bold text-primary-deep uppercase leading-tight">
                Michigan's Infrastructure<br />Clients
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: 'Municipalities', sub: 'Cities, townships, and villages' },
                { label: 'MDOT', sub: 'Michigan Dept. of Transportation' },
                { label: 'County Road Commissions', sub: 'County-level infrastructure owners' },
                { label: 'Private & Industrial', sub: 'Commercial and industrial clients' },
              ].map((client, i) => (
                <div key={i} className="border-l-2 border-secondary/40 pl-4">
                  <div className="font-oswald text-sm font-bold text-primary-deep uppercase leading-tight mb-1">
                    {client.label}
                  </div>
                  <div className="font-roboto text-xs text-gray-500 leading-snug">
                    {client.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-oswald text-2xl lg:text-3xl font-bold text-white uppercase leading-tight">
              Not sure which service you need?
            </h2>
            <p className="font-roboto text-base text-white/80 mt-3 max-w-lg leading-relaxed">
              Our team can assess your project and recommend the right approach. Reach out for a no-obligation consultation.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-none px-8 py-3.5 bg-white text-primary font-oswald text-sm tracking-[0.18em] uppercase font-semibold hover:bg-secondary hover:text-white transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
