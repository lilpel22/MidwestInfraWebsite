import { motion } from 'framer-motion'

const clients = [
  'Michigan Municipalities',
  'MDOT (State DOT)',
  'County Road Commissions',
  'Private Industrial Clients',
]

const credentials = [
  { label: 'Founded', value: 'Imlay City, Michigan' },
  { label: 'Certification', value: 'Official Sprayroq™ Certified Partner' },
  { label: 'Service Area', value: 'Statewide — All 83 Michigan Counties' },
  { label: 'Specialization', value: 'Trenchless Structural Rehabilitation' },
]

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-[#F8F9FB] py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[680px]">

        {/* Left: Image stack */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex-none lg:w-[52%] h-80 sm:h-[420px] lg:h-auto"
        >
          {/* Main background image */}
          <img
            src="/images/20250812-AR1_2710.jpg"
            alt="Midwest Infra field operations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-deep/20" />

          {/* Inset image — overlapping corner */}
          <div className="absolute bottom-0 right-0 w-48 h-36 lg:w-64 lg:h-48 border-4 border-white overflow-hidden shadow-2xl">
            <img
              src="/images/20241203-IMG_3244.jpg"
              alt="Sprayroq lining application close-up"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top label */}
          <div className="absolute top-6 left-6 bg-secondary px-5 py-2.5">
            <span className="font-oswald text-xs tracking-[0.22em] uppercase text-white font-medium">
              Michigan-Based
            </span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 flex items-center px-8 sm:px-12 lg:px-14 xl:px-20 py-16 lg:py-20 bg-white">
          <div className="max-w-xl">

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-secondary font-medium">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl lg:text-5xl font-bold text-primary-deep uppercase leading-[0.95] mb-6"
            >
              Michigan-Based.<br />
              Field-Proven.<br />
              <span className="text-primary">Infrastructure-Ready.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-roboto text-sm text-gray-500 font-light leading-relaxed mb-4"
            >
              Midwest Infra is a certified Sprayroq™ partner operating across the State of
              Michigan. We specialize in trenchless structural rehabilitation — preserving aging
              infrastructure assets from the inside without the cost, disruption, or timeline
              of full-replacement construction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-roboto text-sm text-gray-500 font-light leading-relaxed mb-10"
            >
              From CMP culvert structural renewal and manhole rehabilitation to high-pressure
              sewer jetting and precision hydrovac excavation, our crews deliver measurable
              outcomes — extended asset life, reduced I&I, and restored hydraulic capacity
              — on schedule and within budget.
            </motion.p>

            {/* Credential rows */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="space-y-3 mb-10"
            >
              {credentials.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                  <span className="font-oswald text-[10px] tracking-[0.25em] uppercase text-secondary flex-none w-28">
                    {item.label}
                  </span>
                  <span className="font-roboto text-sm text-gray-700">{item.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Who we serve pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <p className="font-oswald text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-4">
                Who We Serve
              </p>
              <div className="flex flex-wrap gap-2">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="px-4 py-2 border border-gray-200 font-roboto text-xs text-gray-600 bg-white"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
