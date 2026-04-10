import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ContactForm } from '../components/Contact'

const contactDetails = [
  { label: 'Phone', value: '(810) 721-1933', href: 'tel:8107211933' },
  { label: 'Email', value: 'info@mwcc.biz', href: 'mailto:info@mwcc.biz' },
  { label: 'Address', value: '115 E Capac Rd, Imlay City, MI 48444', href: 'https://maps.google.com/?q=115+E+Capac+Rd+Imlay+City+MI+48444' },
  { label: 'Hours', value: 'Mon–Thu 8am–4:30pm · Fri by appointment' },
]

export default function ContactPage() {
  return (
    <div className="font-roboto overflow-x-hidden">
      <Header forceScrolled />

      {/* Page hero */}
      <div className="bg-primary-deep pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-secondary font-medium">
                Contact Us
              </span>
            </div>
            <h1 className="font-oswald text-4xl lg:text-6xl font-bold text-white uppercase leading-tight mb-5">
              Let's Talk About<br />
              <span className="text-secondary">Your Project</span>
            </h1>
            <p className="font-roboto text-base text-white/75 font-light leading-relaxed max-w-xl">
              Whether you're managing a municipal rehabilitation program, an MDOT corridor project,
              or a private industrial site — our team is ready to provide a site assessment and
              detailed project quote.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-[#EEF4FA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Contact info card */}
              <div className="bg-primary-deep text-white p-8 lg:p-10">
                <p className="font-oswald text-[11px] tracking-[0.3em] uppercase text-secondary mb-6">
                  Contact Information
                </p>
                <div className="space-y-0">
                  {contactDetails.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-5 py-4 border-b border-white/10 last:border-0"
                    >
                      <span className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/60 flex-none w-16 mt-0.5">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-roboto text-base text-white/90 hover:text-secondary transition-colors leading-snug"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-roboto text-base text-white/90 leading-snug">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-white p-8 border-l-4 border-secondary">
                <p className="font-oswald text-[11px] tracking-[0.3em] uppercase text-primary mb-5">
                  What to Expect
                </p>
                <ul className="space-y-4">
                  {[
                    'Response within one business day',
                    'Free site assessment for qualifying projects',
                    'Detailed scope and cost estimate provided',
                    'Certified Sprayroq™ application guaranteed',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-roboto text-base text-gray-700 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-white shadow-lg shadow-primary/8 p-8 lg:p-10"
            >
              <p className="font-oswald text-[11px] tracking-[0.3em] uppercase text-primary mb-2">
                Project Inquiry Form
              </p>
              <h2 className="font-oswald text-2xl lg:text-3xl font-bold text-primary-deep uppercase leading-tight mb-7">
                Request a Quote or<br />
                <span className="text-primary">Site Assessment</span>
              </h2>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
