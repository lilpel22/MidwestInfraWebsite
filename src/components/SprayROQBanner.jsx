import { motion } from 'framer-motion'
import sprayroqLogo from '../../logos/sprayroq-logo.svg'

const credentials = [
  'Factory-trained applicator certified directly by Sprayroq',
  'Authorized to apply SprayWall® structural polyurethane systems',
  'One of a select group of certified Michigan partners',
  'Quality control protocols aligned with Sprayroq standards',
]

export default function SprayroqBanner() {
  return (
    <section className="bg-white border-y border-gray-200 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top row: logo + badge */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 mb-12 lg:mb-0">

          {/* Logo block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4"
          >
            <img
              src={sprayroqLogo}
              alt="Sprayroq"
              className="h-16 lg:h-[72px] w-auto"
            />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-oswald text-xs tracking-[0.22em] uppercase text-gray-500">
                Active Certified Partner
              </span>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px self-stretch bg-gray-200" />

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="w-6 h-px bg-secondary hidden lg:block" />
              <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
                Certified Partner
              </span>
            </div>

            <h3 className="font-oswald text-2xl lg:text-3xl font-bold text-primary-deep uppercase leading-tight mb-4">
              Official Sprayroq™ Certified Partner — State of Michigan
            </h3>

            <p className="font-roboto text-sm text-gray-600 font-light leading-relaxed mb-7 max-w-2xl">
              Midwest Infra is an authorized, factory-trained Sprayroq™ applicator — one of a
              select few certified partners serving the Michigan market. Our crews are trained
              directly by Sprayroq on SprayWall® polyurethane application standards, quality
              control protocols, and structural rehabilitation best practices for municipal
              and DOT infrastructure.
            </p>

            {/* Credential list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-2.5"
                >
                  <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-roboto text-sm text-gray-600">{cred}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certification badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0 hidden lg:block"
          >
            <div className="w-32 h-32 rounded-full border-[3px] border-primary flex flex-col items-center justify-center bg-primary/5 text-center">
              <div className="font-oswald text-[10px] tracking-[0.2em] uppercase text-primary/60 mb-0.5">
                Certified
              </div>
              <div className="font-oswald text-lg font-bold text-primary uppercase leading-tight">
                Michigan<br />Partner
              </div>
              <div className="font-oswald text-[9px] tracking-[0.15em] uppercase text-primary/50 mt-0.5">
                Sprayroq™
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
