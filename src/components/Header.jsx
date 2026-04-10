import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../logos/Midwest Infra logo1.png'

const serviceItems = [
  { label: 'Sprayroq Structural Coatings', href: '/services/sprayroq-coatings' },
  { label: 'High-Pressure Hot Water Sewer Jetting', href: '/services/sewer-jetting' },
  { label: 'Hydrovac Services', href: '/services/hydrovac' },
]

export default function Header({ forceScrolled = false }) {
  const [scrolled, setScrolled] = useState(forceScrolled)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (forceScrolled) {
      setScrolled(true)
      return
    }
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [forceScrolled])

  const close = () => setMobileOpen(false)

  const handleAnchorClick = (href) => {
    close()
    if (isHome && href.startsWith('/#')) {
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 lg:h-20">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
          <div className="w-1 h-9 bg-secondary hidden sm:block" />
          <img src={logo} alt="Midwest Infra" className="h-10 lg:h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">

          {/* Services dropdown */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="font-oswald text-sm font-medium tracking-[0.15em] uppercase text-gray-700 hover:text-primary transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-secondary"
            >
              Services
            </Link>
            <button
              className="ml-1 p-0.5 text-gray-500 hover:text-primary transition-colors duration-200"
              aria-label="Toggle services menu"
            >
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
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-2 w-max min-w-[340px] bg-white border border-gray-100 shadow-xl shadow-gray-200/60"
                >
                  <div className="h-0.5 bg-secondary w-full" />
                  {serviceItems.map((item, i) => (
                    <Link
                      key={i}
                      to={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-gray-600 font-roboto text-sm hover:text-primary hover:bg-gray-50 transition-all duration-150 border-b border-gray-50 last:border-0 whitespace-nowrap"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { label: 'Our Work', href: '/our-work', isRoute: true },
            { label: 'About', href: '/#about' },
            { label: 'Contact', href: '/contact', isRoute: true },
          ].map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="font-oswald text-sm font-medium tracking-[0.15em] uppercase text-gray-700 hover:text-primary transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-secondary"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="font-oswald text-sm font-medium tracking-[0.15em] uppercase text-gray-700 hover:text-primary transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-secondary"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/#contact"
            onClick={() => handleAnchorClick('/#contact')}
            className="ml-1 px-6 py-2.5 border-2 border-primary text-primary font-oswald text-sm font-semibold tracking-[0.18em] uppercase hover:bg-primary hover:text-white transition-all duration-200"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <Link
                to="/services"
                onClick={close}
                className="font-oswald text-lg tracking-[0.12em] uppercase text-gray-800 hover:text-primary transition-colors"
              >
                Services
              </Link>
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-secondary/40">
                {serviceItems.map((s) => (
                  <Link
                    key={s.label}
                    to={s.href}
                    onClick={close}
                    className="font-roboto text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>

              {[
                { label: 'Our Work', href: '/our-work', isRoute: true },
                { label: 'About', href: '/#about' },
                { label: 'Contact', href: '/contact', isRoute: true },
              ].map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={close}
                    className="font-oswald text-lg tracking-[0.12em] uppercase text-gray-800 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    className="font-oswald text-lg tracking-[0.12em] uppercase text-gray-800 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link
                to="/#contact"
                onClick={() => handleAnchorClick('/#contact')}
                className="mt-2 py-3.5 border-2 border-primary text-primary font-oswald text-sm font-semibold tracking-[0.18em] uppercase text-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
