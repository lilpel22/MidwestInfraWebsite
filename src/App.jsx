import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import SprayroqBanner from './components/SprayroqBanner'
import Footer from './components/Footer'
import OurWork from './pages/OurWork'
import CaseStudyPage from './pages/CaseStudyPage'
import ContactPage from './pages/ContactPage'
import ServicesOverview from './pages/ServicesOverview'
import ServicePage from './pages/ServicePage'

function HomePage() {
  return (
    <div className="font-roboto overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <SprayroqBanner />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  )
}
