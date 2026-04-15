import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const examples = [
  {
    id: '01',
    title: 'Sanitary Manhole Rehabilitation',
    tag: 'Sprayroq Coatings',
    slug: 'sprayroq-coatings',
    image: '/images/20241203-DSCF5801.jpg',
    description:
      'SprayWall® polyurethane structural lining applied at 250 mils inside aging sanitary manholes. Eliminates active infiltration and restores full structural integrity — with zero excavation and no road disruption.',
  },
  {
    id: '02',
    title: 'High-Pressure Sewer Jetting',
    tag: 'Sewer Jetting',
    slug: 'sewer-jetting',
    image: '/images/vactruck1.jpg',
    description:
      'Industrial-grade hot water jetting clears root intrusion, grease buildup, and consolidated debris from municipal sewer mains and storm drains. Restores full hydraulic capacity and preps pipe surfaces for lining.',
  },
  {
    id: '03',
    title: 'Hydrovac Utility Potholing',
    tag: 'Hydrovac',
    slug: 'hydrovac',
    image: '/images/20250812-AR1_2427.jpg',
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
        className="group flex flex-col h-full block"
      >
        {/* Image area */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={example.image}
            alt={example.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

          {/* Number — top left */}
          <div className="absolute top-4 left-4 z-10">
            <span className="font-oswald text-xs tracking-[0.28em] uppercase text-white/60 bg-black/35 backdrop-blur-sm px-2.5 py-1">
              {example.id}
            </span>
          </div>

          {/* Tag badge — top right */}
          <div className="absolute top-4 right-4 z-10">
            <span className="font-oswald text-[10px] tracking-[0.22em] uppercase text-secondary bg-black/40 backdrop-blur-sm border border-secondary/35 px-3 py-1.5 transition-colors duration-300 group-hover:bg-secondary/20 group-hover:border-secondary/70">
              {example.tag}
            </span>
          </div>

          {/* View example arrow — fades in on hover */}
          <div className="absolute bottom-4 right-4 z-10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex items-center gap-1.5 bg-secondary px-3 py-1.5">
              <span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-white">View Example</span>
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text panel */}
        <div className="bg-primary-deep flex-1 px-6 py-5 border-t-2 border-transparent transition-colors duration-300 group-hover:border-secondary">
          <h3 className="font-oswald text-xl font-bold text-white uppercase leading-tight mb-2 transition-colors duration-300 group-hover:text-secondary">
            {example.title}
          </h3>
          <p className="font-roboto text-xs text-white/65 font-light leading-relaxed">
            {example.description}
          </p>
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
