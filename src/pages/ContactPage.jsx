import { useEffect } from 'react'
import Header from '../components/Header'
import ContactPageForm from '../components/ContactPageForm'
import Footer from '../components/Footer'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />
      <ContactPageForm />
      <Footer />
    </div>
  )
}
