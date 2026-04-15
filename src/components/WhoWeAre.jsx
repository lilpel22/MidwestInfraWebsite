import { motion } from 'framer-motion'
import vactruckImg from '../../images/vactruck action.jpg'
import excavationImg from '../../images/excavation underground utilities precision.png'

const clients = [
  'Michigan Municipalities',
  'MDOT (State DOT)',
  'County Road Commissions',
  'Private Industrial Clients',
]

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl lg:text-5xl font-bold text-primary-deep uppercase leading-tight mb-6"
            >
              Michigan-Based.<br />
              Field-Proven.<br />
              <span className="text-primary">Infrastructure-Ready.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-roboto text-base text-gray-600 font-light leading-relaxed mb-5"
            >
              Midwest Infra is a certified Sprayroq™ partner operating across the State of
              Michigan. We specialize in trenchless structural rehabilitation — preserving aging
              infrastructure assets from the inside without the cost, disruption, or timeline
              of full-replacement construction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="font-roboto text-base text-gray-600 font-light leading-relaxed mb-10"
            >
              From CMP culvert structural renewal and manhole rehabilitation to high-pressure
              sewer jetting and precision hydrovac excavation, our crews deliver measurable
              outcomes — extended asset life, reduced inflow & infiltration, and restored
              hydraulic capacity — on schedule and within budget.
            </motion.p>

            {/* Who we serve */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="font-oswald text-[10px] tracking-[0.32em] uppercase text-gray-400 mb-5">
                Who We Serve
              </p>
              <div className="grid grid-cols-2 gap-3">
                {clients.map((client, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-4 h-px bg-secondary flex-shrink-0" />
                    <span className="font-roboto text-sm text-gray-700">{client}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Image mosaic */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative"
          >
            {/* Background accent blocks */}
            <div className="absolute -top-5 -right-5 w-3/4 h-3/4 bg-primary/8 -z-10" />
            <div className="absolute -bottom-5 -left-5 w-1/2 h-1/2 bg-secondary/10 -z-10" />

            {/* Main image */}
            <img
              src={vactruckImg}
              alt="Midwest Infra vactruck field operations"
              className="w-full h-[440px] lg:h-[500px] object-cover shadow-2xl"
            />

            {/* Secondary inset image */}
            <div className="absolute -bottom-8 -left-8 w-44 h-32 border-4 border-white shadow-xl overflow-hidden hidden lg:block">
              <img
                src={excavationImg}
                alt="Precision underground utility excavation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certification badge overlay */}
            <div className="absolute top-6 right-6 bg-primary/95 backdrop-blur-sm text-white px-5 py-4 shadow-xl">
              <div className="font-oswald text-[10px] tracking-[0.25em] uppercase text-secondary mb-1">
                Certified Partner
              </div>
              <div className="font-oswald text-base font-bold uppercase leading-tight">
                Sprayroq™<br />Michigan
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
