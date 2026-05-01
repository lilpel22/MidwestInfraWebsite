import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhoWeAre from '../components/WhoWeAre'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function About() {
  useDocumentMeta({
    title: 'About Midwest Infra | Michigan Trenchless Rehabilitation',
    description: 'A division of Midwest Commercial Construction, Midwest Infra is a certified SprayROQ™ partner specializing in trenchless structural rehabilitation across Michigan.',
    path: '/about',
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Hero */}
      <section className="relative bg-primary-deep flex items-center pt-20 lg:pt-24" style={{ minHeight: '38vh' }}>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              About Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="font-oswald text-4xl lg:text-6xl font-bold text-white uppercase leading-tight"
          >
            About Midwest Infra
          </motion.h1>
        </div>
      </section>

      <WhoWeAre />

      <Footer />
    </div>
  )
}
