import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import SprayROQBanner from './components/SprayROQBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyPage from './pages/CaseStudyPage'
import OurWork from './pages/OurWork'
import ServicePage from './pages/ServicePage'
import About from './pages/About'
import ContactPage from './pages/ContactPage'

function HomePage() {
  return (
    <div className="font-roboto overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <SprayROQBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
