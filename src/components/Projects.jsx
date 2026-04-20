import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const examples = [
  {
    id: '01',
    title: 'Manhole Rehabilitation - SprayWall',
    tag: 'Sprayroq Coatings',
    slug: 'sprayroq-coatings',
    image: '/images/sprayroq-example-1.jpg',
    alt: 'Interior of a rehabilitated sanitary manhole coated with SprayWall® polyurethane structural lining — smooth, monolithic, corrosion-resistant surface.',
    description:
      'Aging sanitary manholes with significant I&I and failed prior liners, rehabilitated trenchlessly with SprayWall® applied at 250 mils — delivering a monolithic, corrosion-resistant interior and ~40% cost savings versus dig-and-replace.',
  },
  {
    id: '02',
    title: 'High-Pressure Sewer Jetting',
    tag: 'Sewer Jetting',
    slug: 'sewer-jetting',
    image: '/images/20241203-DJI_20241203094827_0009_D.jpg',
    alt: 'Aerial view of a Midwest Infra high-pressure sewer jetting truck on a municipal job site, with hoses deployed into a manhole access point.',
    description:
      'Industrial-grade hot water jetting clears root intrusion, grease buildup, and consolidated debris from municipal sewer mains and storm drains. Restores full hydraulic capacity and preps pipe surfaces for lining.',
  },
  {
    id: '03',
    title: 'Hydrovac Utility Potholing',
    tag: 'Hydrovac',
    slug: 'hydrovac',
    image: '/images/hydrovac-example-3.jpg',
    alt: 'Hydrovac excavation crew using pressurized water and vacuum to safely expose buried utilities in an open potholing trench.',
    description:
      'Precision pressurized water excavation safely exposes buried gas, water, and electrical utilities for pre-construction verification — with no mechanical risk to subsurface infrastructure.',
  },
]

function ExampleCard({ example, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.14 }}
    >
      <Link
        to={`/services/${example.slug}#example`}
        aria-label={`View example: ${example.title}`}
        className="group flex flex-col h-full block"
      >
        {/* Image area */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={example.image}
            alt={example.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
        </div>

        {/* Text panel */}
        <div className="bg-primary-deep flex-1 flex flex-col px-6 py-5 border-t-2 border-transparent transition-colors duration-300 group-hover:border-secondary">
          <h3 className="font-oswald text-xl font-bold text-white uppercase leading-tight mb-2 transition-colors duration-300 group-hover:text-secondary">
            {example.title}
          </h3>
          <p className="font-roboto text-xs text-white/65 font-light leading-relaxed">
            {example.description}
          </p>

          {/* Footer CTA — matches Services card "Learn More" */}
          <div className="mt-auto pt-5 border-t border-white/10">
            <span className="inline-flex items-center gap-2 font-oswald text-[11px] tracking-[0.22em] uppercase text-white/70 font-medium group-hover:text-secondary transition-colors">
              View Example
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
  )
}

export default function Projects() {
  return (
    <section id="examples" className="bg-primary-deep py-24 lg:py-32 relative overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              Service Examples
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl lg:text-[56px] font-bold text-white uppercase leading-tight"
          >
            Our Services<br />
            <span className="text-secondary">in Practice</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {examples.map((example, i) => (
            <ExampleCard key={example.id} example={example} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
