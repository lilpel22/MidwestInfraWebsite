import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    id: '01',
    slug: 'sprayroq-coatings',
    title: 'Sprayroq Structural Coatings',
    subtitle: 'Certified Michigan Partner',
    image: '/images/sprayservice.jpg',
    imageAlt: 'SprayWall® polyurethane lining application inside infrastructure',
    capabilities: [
      'SprayWall® polyurethane structural lining',
      'Two-part epoxy & cementitious coatings',
      'Inflow & infiltration (I&I) mitigation',
      'Load-bearing renewal without excavation',
      'Secondary containment floor & wall rehab',
      'H₂S-resistant wet well & lift station lining',
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" />
        <path d="M24 4V44M4 14L44 14M4 34L44 34" strokeOpacity="0.35" />
        <circle cx="24" cy="24" r="5" strokeOpacity="0" fill="currentColor" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    id: '02',
    slug: 'sewer-jetting',
    title: 'High-Pressure Sewer Jetting',
    subtitle: 'Line Clearing & Preparation',
    image: '/images/vactruck1.jpg',
    imageAlt: 'Midwest Infra high-pressure sewer jetting truck on-site',
    capabilities: [
      'Root intrusion and grease deposit removal',
      'Heavy blockage and debris clearance',
      'Pre-lining sewer pipe preparation',
      'Storm drain and sewer mainline jetting',
      'Hydraulic capacity restoration',
      'Force main and large-diameter pipe clearing',
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 24C6 24 12 14 24 14C36 14 42 24 42 24" />
        <path d="M6 24C6 24 12 34 24 34C36 34 42 24 42 24" />
        <path d="M3 24H45" strokeDasharray="4 3" strokeOpacity="0.5" />
        <circle cx="24" cy="24" r="5" strokeOpacity="0" fill="currentColor" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    id: '03',
    slug: 'hydrovac',
    title: 'Hydrovac Services',
    subtitle: 'Non-Destructive Excavation',
    image: '/images/20250812-AR1_2427.jpg',
    imageAlt: 'Hydrovac precision excavation crew on-site',
    capabilities: [
      'Utility potholing and daylight verification',
      'Non-destructive subsurface excavation',
      'Catch basin and manhole debris removal',
      'Sediment and spoils extraction',
      'Safe operation around buried utilities',
      'Support for pre-construction investigation',
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="11" y="5" width="26" height="22" rx="2" />
        <path d="M11 27L5 43H43L37 27" />
        <path d="M24 27V43" strokeOpacity="0.5" />
        <path d="M17 36H31" strokeOpacity="0.5" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl lg:text-[56px] font-bold text-primary-deep uppercase leading-tight"
          >
            Specialized Services<br />
            <span className="text-primary">for Michigan Infrastructure</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
            >
            <Link
              to={`/services/${service.slug}`}
              aria-label={`Learn more about ${service.title}`}
              className="group bg-white border border-gray-200 hover:border-primary/25 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden h-full"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle bottom fade — keeps image clean while grounding the card */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary-deep/25 to-transparent" />
              </div>

              <div className="p-8 lg:p-9 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-oswald text-xl lg:text-2xl font-bold text-primary-deep uppercase leading-tight mb-4">
                  {service.title}
                </h3>

                {/* Capabilities list */}
                <ul className="space-y-2 mt-auto">
                  {service.capabilities.map((cap, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      <span className="font-roboto text-xs text-gray-500 leading-snug">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card footer CTA */}
              <div className="px-8 lg:px-9 pb-7">
                <div className="pt-5 border-t border-gray-100">
                  <span className="inline-flex items-center gap-2 font-oswald text-[11px] tracking-[0.22em] uppercase text-primary font-medium group-hover:text-secondary transition-colors">
                    Learn More
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
