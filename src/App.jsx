import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import WhoWeAre from './components/WhoWeAre'
import Projects from './components/Projects'
import SprayROQBanner from './components/SprayROQBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-roboto overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <WhoWeAre />
      <Projects />
      <SprayROQBanner />
      <Contact />
      <Footer />
    </div>
  )
}
