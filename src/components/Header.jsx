import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../logos/Midwest Infra logo1.png'

const serviceItems = [
  { label: 'SprayROQ Structural Coatings', href: '#services' },
  { label: 'High-Pressure Sewer Jetting', href: '#services' },
  { label: 'Hydrovac Services', href: '#services' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setMobileOpen(false)

  // Text color switches based on header background
  const navText = scrolled
    ? 'text-gray-900 hover:text-secondary'
    : 'text-white hover:text-secondary'

  const barColor = scrolled ? 'bg-gray-900' : 'bg-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-gradient-to-b from-black/65 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20 lg:h-24">

        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Midwest Infra" className="h-11 lg:h-13 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center gap-1.5 font-oswald text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${navText}`}>
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
                  initial={{ opacity: 0, y: -8, scaleY: 0.94 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -8, scaleY: 0.94 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  style={{ transformOrigin: 'top' }}
                  className="absolute top-full left-0 mt-3 w-64 bg-white border-t-2 border-secondary shadow-xl"
                >
                  {serviceItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-3 px-5 py-3.5 text-gray-700 font-roboto text-sm hover:text-secondary hover:bg-gray-50 transition-all duration-150 border-b border-gray-100 last:border-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { label: 'Our Work', href: '#projects' },
            { label: 'About', href: '#about' },
            { label: 'Contact Us', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-oswald text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${navText}`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 px-7 py-3 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.18em] uppercase hover:bg-secondary-dark transition-colors duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
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
              scrolled
                ? 'bg-white border-gray-200'
                : 'bg-primary-deep/98 backdrop-blur-md border-white/10'
            }`}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <a
                href="#services"
                onClick={close}
                className={`font-oswald text-lg tracking-[0.15em] uppercase hover:text-secondary transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Services
              </a>
              <div className={`pl-4 flex flex-col gap-3 border-l border-secondary/40`}>
                {serviceItems.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={close}
                    className={`font-roboto text-sm hover:text-secondary transition-colors ${
                      scrolled ? 'text-gray-600' : 'text-white/60'
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              {[
                { label: 'Our Work', href: '#projects' },
                { label: 'About', href: '#about' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className={`font-oswald text-lg tracking-[0.15em] uppercase hover:text-secondary transition-colors ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-2 py-3.5 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.18em] uppercase text-center hover:bg-secondary-dark transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
