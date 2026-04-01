import { motion } from 'framer-motion'
import heroImage from '../../images/vactruck 1.jpg'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Midwest Infra operations"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/92 via-primary-deep/70 to-primary-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-10 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              Certified SprayROQ™ Michigan Partner
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="font-oswald text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-bold text-white uppercase leading-[0.93] tracking-tight mb-7"
          >
            Michigan's<br />
            <span className="text-secondary">Trenchless</span><br />
            Infrastructure<br />
            Specialists
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="font-roboto text-base lg:text-lg text-white/70 font-light leading-relaxed mb-10 max-w-[540px]"
          >
            Spray-applied structural lining for CMP culverts, manholes, lift stations,
            and wet wells — non-destructive rehabilitation for municipalities, MDOT,
            and county road commissions statewide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:bg-secondary-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/40 text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-oswald text-[10px] tracking-[0.35em] uppercase text-white/35">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-9 bg-gradient-to-b from-secondary/80 to-transparent"
        />
      </motion.div>
    </section>
  )
}
