import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../../logos/Midwest Infra logo1.png'

const serviceItems = [
  {
    label: 'Sprayroq Structural Coatings',
    description: 'SprayWall® polyurethane lining',
    to: '/services/sprayroq-coatings',
  },
  {
    label: 'High-Pressure Hot Water Sewer Jetting',
    description: 'Hot water jetting & cleaning',
    to: '/services/sewer-jetting',
  },
  {
    label: 'Hydrovac Services',
    description: 'Non-destructive excavation',
    to: '/services/hydrovac',
  },
]

export default function Header({ forceScrolled = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  const servicesButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setMobileOpen(false)

  const isScrolled = forceScrolled || scrolled

  const navText = isScrolled
    ? 'text-gray-900 hover:text-secondary'
    : 'text-white hover:text-secondary'

  const barColor = isScrolled ? 'bg-gray-900' : 'bg-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-gradient-to-b from-black/65 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20 lg:h-24">

        {/* Logo — always routes to homepage */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-shrink-0"
        >
          <img src={logo} alt="Midwest Infra" className="h-11 lg:h-13 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(e) => {
              if (!servicesRef.current?.contains(e.relatedTarget)) setServicesOpen(false)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape' && servicesOpen) {
                setServicesOpen(false)
                servicesButtonRef.current?.focus()
              }
            }}
          >
            <button
              ref={servicesButtonRef}
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setServicesOpen(true)
                  requestAnimationFrame(() => {
                    servicesRef.current?.querySelector('a[href]')?.focus()
                  })
                }
              }}
              className={`flex items-center gap-1.5 font-oswald text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-secondary focus-visible:outline-offset-4 ${navText}`}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-0 pt-3 w-80"
                >
                <div className="bg-white shadow-2xl shadow-primary/10 overflow-hidden">
                  {/* Gold accent bar */}
                  <div className="h-[3px] bg-secondary" />

                  <div className="py-2">
                    {serviceItems.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={() => setServicesOpen(false)}
                        className="group relative flex items-start gap-4 px-6 py-4 transition-colors duration-200 hover:bg-gray-50/80"
                      >
                        {/* Left accent — appears on hover */}
                        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

                        <div className="flex-1 min-w-0">
                          <div className="font-oswald text-[13px] font-semibold tracking-[0.14em] uppercase text-gray-900 group-hover:text-primary transition-colors duration-200">
                            {item.label}
                          </div>
                          <div className="mt-1 font-roboto text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                            {item.description}
                          </div>
                        </div>

                        {/* Arrow — slides in on hover */}
                        <svg
                          className="w-4 h-4 mt-1 flex-shrink-0 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/articles" className={`font-oswald text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${navText}`}>
            Articles
          </Link>
          <Link to="/about" className={`font-oswald text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${navText}`}>
            About
          </Link>
          <Link to="/contact" className={`font-oswald text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${navText}`}>
            Contact Us
          </Link>

          <Link
            to="/contact"
            className="ml-2 px-7 py-3 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.18em] uppercase hover:bg-secondary-dark transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-12 h-12 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${barColor} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${barColor} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${barColor} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`lg:hidden overflow-hidden border-t ${
              isScrolled
                ? 'bg-white border-gray-200'
                : 'bg-primary-deep/98 backdrop-blur-md border-white/10'
            }`}
          >
            <nav id="mobile-nav" aria-label="Mobile navigation" className="px-6 py-6 flex flex-col gap-5">
              <a
                href="/#services"
                onClick={close}
                className={`font-oswald text-lg tracking-[0.15em] uppercase hover:text-secondary transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Services
              </a>
              <div className="pl-4 flex flex-col gap-3 border-l border-secondary/40">
                {serviceItems.map((s) => (
                  <Link
                    key={s.label}
                    to={s.to}
                    onClick={close}
                    className={`font-roboto text-sm hover:text-secondary transition-colors ${
                      isScrolled ? 'text-gray-600' : 'text-white/60'
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/articles"
                onClick={close}
                className={`font-oswald text-lg tracking-[0.15em] uppercase hover:text-secondary transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Articles
              </Link>
              <Link
                to="/about"
                onClick={close}
                className={`font-oswald text-lg tracking-[0.15em] uppercase hover:text-secondary transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={close}
                className={`font-oswald text-lg tracking-[0.15em] uppercase hover:text-secondary transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                onClick={close}
                className="mt-2 py-3.5 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.18em] uppercase text-center hover:bg-secondary-dark transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
