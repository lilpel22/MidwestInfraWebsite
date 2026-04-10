import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen pt-18 lg:pt-20 overflow-hidden">

      {/* Left: White editorial panel */}
      <div className="relative flex-none lg:w-[46%] flex items-center bg-white px-8 sm:px-12 lg:px-14 xl:px-20 py-16 lg:py-0">
        {/* Left edge accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />

        <div className="w-full max-w-xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-6 h-px bg-secondary" />
            <span className="font-oswald text-[11px] tracking-[0.3em] uppercase text-primary font-medium">
              Certified Sprayroq™ Michigan Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            className="font-oswald text-[52px] sm:text-6xl xl:text-[70px] font-bold text-primary-deep uppercase leading-[0.9] tracking-tight mb-7"
          >
            Michigan's<br />
            Trenchless<br />
            <span className="text-primary">Infrastructure</span><br />
            Specialists
          </motion.h1>

          {/* Divider rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="h-px bg-gray-200 mb-7"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-roboto text-base lg:text-lg text-gray-700 font-light leading-relaxed mb-10 max-w-md"
          >
            Spray-applied structural lining for CMP culverts, manholes, lift stations,
            and wet wells — non-destructive rehabilitation for municipalities, MDOT,
            and county road commissions statewide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#services"
              className="px-8 py-3.5 bg-primary text-white font-oswald text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary-dark transition-colors duration-200"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 border-2 border-primary text-primary font-oswald text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-200"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right: Full-bleed image panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.05 }}
        className="relative flex-1 h-[55vw] sm:h-[45vw] lg:h-auto min-h-[400px]"
      >
        <img
          src="/images/20241203-DJI_20241203094827_0009_D.jpg"
          alt="Midwest Infra aerial jobsite operations"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle blue wash */}
        <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Certification stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="absolute top-8 right-8 w-24 h-24 rounded-full bg-white/95 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center text-center border-2 border-secondary/30"
        >
          <div className="font-oswald text-[8px] tracking-[0.2em] uppercase text-secondary mb-0.5">Certified</div>
          <div className="font-oswald text-xs font-bold text-primary-deep uppercase leading-tight">
            Sprayroq™<br />Partner
          </div>
          <div className="font-oswald text-[8px] tracking-[0.15em] uppercase text-gray-500 mt-0.5">Michigan</div>
        </motion.div>
      </motion.div>

    </section>
  )
}
