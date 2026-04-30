import { useEffect } from 'react'
import Header from '../components/Header'
import ContactPageForm from '../components/ContactPageForm'
import Footer from '../components/Footer'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function ContactPage() {
  useDocumentMeta({
    title: 'Contact Midwest Infra | Request a Quote or Site Assessment',
    description: 'Contact Midwest Infra for trenchless infrastructure rehabilitation in Michigan. Call (810) 721-1933 or request a site assessment for SprayROQ™ coatings, hydrovac, or sewer jetting.',
    path: '/contact',
  })

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
