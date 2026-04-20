import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
        {/* Grey gradient — dark on the left under the title, fades to transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/30 sm:via-black/65 sm:to-black/15" />
        {/* Bottom fade for grounding */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              Certified Sprayroq™<br className="sm:hidden" /> Michigan Partner
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="font-oswald text-4xl sm:text-6xl lg:text-7xl xl:text-[82px] font-bold text-white uppercase leading-[1.02] sm:leading-[0.93] tracking-tight mb-7"
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
            className="font-roboto text-base lg:text-lg text-white/90 font-light leading-relaxed mb-10 max-w-[540px]"
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
              className="px-8 py-4 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:bg-secondary-dark transition-colors duration-200"
            >
              Our Services
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/40 text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:border-white hover:bg-white/10 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
