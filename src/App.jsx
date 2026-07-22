import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import SprayROQBanner from './components/SprayROQBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import { useDocumentMeta } from './hooks/useDocumentMeta'

function HomePage() {
  useDocumentMeta({
    title: "Midwest Infra — Michigan's Trenchless Rehabilitation Specialists",
    description: 'Certified SprayROQ™ partner providing trenchless structural rehabilitation — manholes, CMP culverts, lift stations, and wet wells — for municipalities, MDOT, and county road commissions across Michigan.',
    path: '/',
  })
  return (
    <div className="font-roboto overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <SprayROQBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
