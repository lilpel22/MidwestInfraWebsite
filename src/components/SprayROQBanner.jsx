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
    <section className="bg-primary relative overflow-hidden py-16 lg:py-24">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #fff 0px, #fff 1px,
            transparent 1px, transparent 60px
          )`,
        }}
      />

      {/* Decorative large text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-oswald text-[180px] lg:text-[260px] font-bold text-white/[0.04] leading-none select-none pointer-events-none -mr-8 uppercase">
        Certified
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">

          {/* Left: Logo + status */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-none"
          >
            {/* Logo on blue — needs contrast. Use filter to make it white */}
            <div className="mb-5 bg-white/10 px-6 py-5 inline-block">
              <img
                src={sprayroqLogo}
                alt="Sprayroq"
                className="h-12 lg:h-14 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="font-oswald text-xs tracking-[0.22em] uppercase text-white/70">
                Active Certified Partner
              </span>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px self-stretch bg-white/15 flex-none" />

          {/* Center: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-secondary" />
              <span className="font-oswald text-[10px] tracking-[0.32em] uppercase text-secondary font-medium">
                Certified Partner
              </span>
            </div>

            <h3 className="font-oswald text-2xl lg:text-3xl xl:text-4xl font-bold text-white uppercase leading-tight mb-5">
              Official Sprayroq™ Certified Partner
            </h3>

            <p className="font-roboto text-base text-white/85 leading-relaxed mb-8 max-w-xl">
              Midwest Infra is an authorized, factory-trained Sprayroq™ applicator — one of a
              select few certified partners serving the Michigan market. Our crews are trained
              directly by Sprayroq on SprayWall® polyurethane application standards, quality
              control protocols, and structural rehabilitation best practices.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-2.5"
                >
                  <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-roboto text-base text-white/90">{cred}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Certification seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-none flex-col items-center"
          >
            <div className="w-36 h-36 rounded-full border-2 border-white/25 flex flex-col items-center justify-center text-center bg-white/8">
              <div className="font-oswald text-[9px] tracking-[0.25em] uppercase text-secondary mb-0.5">Certified</div>
              <div className="font-oswald text-lg font-bold text-white uppercase leading-tight">
                Michigan<br />Partner
              </div>
              <div className="font-oswald text-[9px] tracking-[0.2em] uppercase text-white/50 mt-0.5">Sprayroq™</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
