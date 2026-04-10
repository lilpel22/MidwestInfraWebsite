import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    id: '01',
    slug: 'sprayroq-coatings',
    title: 'Sprayroq Structural Coatings',
    subtitle: 'Certified Michigan Partner',
    description:
      'Spray-applied polyurethane structural lining for large-diameter CMP culverts, manholes, lift stations, wet wells, tanks, clarifiers, and digesters. SprayWall® technology rehabilitates aging infrastructure from the inside — no excavation, no road disruption, far lower cost than full asset replacement.',
    capabilities: [
      'SprayWall® polyurethane structural lining',
      'Two-part epoxy & cementitious coatings',
      'Inflow & infiltration (I&I) mitigation',
      'Load-bearing renewal without excavation',
      'Secondary containment floor & wall rehab',
      'H₂S-resistant wet well & lift station lining',
    ],
    image: '/images/sprayservice.jpg',
    imageAlt: 'Sprayroq SprayWall® structural lining application',
    imageRight: false,
  },
  {
    id: '02',
    slug: 'sewer-jetting',
    title: 'High-Pressure Hot Water Sewer Jetting',
    subtitle: 'Line Clearing & Preparation',
    description:
      'Industrial-grade high-pressure water jetting to clear root intrusion, grease buildup, heavy debris, and blockages from municipal sewer mains, storm drains, and force mains. Restores hydraulic capacity and serves as critical pre-lining pipe preparation for structural rehabilitation work.',
    capabilities: [
      'Root intrusion and grease deposit removal',
      'Heavy blockage and debris clearance',
      'Pre-lining sewer pipe preparation',
      'Storm drain and sewer mainline jetting',
      'Hydraulic capacity restoration',
      'Force main and large-diameter pipe clearing',
    ],
    image: '/images/20241203-DJI_20241203150121_0033_D.jpg',
    imageAlt: 'High-pressure sewer jetting operations',
    imageRight: true,
  },
  {
    id: '03',
    slug: 'hydrovac',
    title: 'Hydrovac Services',
    subtitle: 'Non-Destructive Excavation',
    description:
      'Precision potholing, non-destructive subsurface excavation, and debris removal using pressurized water and high-powered vacuum. Safe for utility exposure, subsurface investigation, catch basin cleanout, and debris removal in environments where mechanical excavation would damage buried infrastructure.',
    capabilities: [
      'Utility potholing and daylight verification',
      'Non-destructive subsurface excavation',
      'Catch basin and manhole debris removal',
      'Sediment and spoils extraction',
      'Safe operation around buried utilities',
      'Support for pre-construction investigation',
    ],
    image: '/images/20250812-AR1_2427.jpg',
    imageAlt: 'Hydrovac precision excavation operations',
    imageRight: false,
  },
]

function ServicePanel({ service, index }) {
  const imageFirst = !service.imageRight

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col ${imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[520px] border-b-4 border-gray-100 last:border-b-0`}
    >
      {/* Image */}
      <div className="relative flex-none lg:w-[55%] h-64 sm:h-80 lg:h-auto overflow-hidden">
        <motion.img
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-6 left-6 font-oswald text-7xl font-bold text-white/15 leading-none select-none">
          {service.id}
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 flex items-center px-8 sm:px-12 lg:px-14 xl:px-16 py-16 lg:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FB]'}`}>
        <div className="max-w-lg">
          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-secondary" />
            <span className="font-oswald text-[11px] tracking-[0.32em] uppercase text-primary font-medium">
              {service.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-oswald text-3xl lg:text-4xl font-bold text-primary-deep uppercase leading-tight mb-5">
            {service.title}
          </h3>

          <p className="font-roboto text-base text-gray-700 leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {service.capabilities.map((cap, j) => (
              <div key={j} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-roboto text-sm text-gray-600 leading-snug">{cap}</span>
              </div>
            ))}
          </div>

          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 font-oswald text-xs tracking-[0.2em] uppercase text-primary font-semibold border-b-2 border-secondary pb-0.5 hover:text-secondary transition-colors duration-200 group"
          >
            Learn More
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-white">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
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
                What We Do
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl lg:text-5xl font-bold text-primary-deep uppercase leading-tight"
            >
              Specialized Services<br />
              <span className="text-primary">for Michigan Infrastructure</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-roboto text-base text-gray-600 max-w-xs leading-relaxed lg:text-right"
          >
            Trenchless rehabilitation — preserving aging assets from the inside
            without excavation, road disruption, or full-replacement cost.
          </motion.p>
        </div>
      </div>

      {/* Service panels */}
      <div className="border-t border-gray-100">
        {services.map((service, i) => (
          <ServicePanel key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
