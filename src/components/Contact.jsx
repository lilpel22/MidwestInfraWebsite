import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const contactDetails = [
  { label: 'Phone', value: '(810) 721-1933', href: 'tel:8107211933' },
  { label: 'Email', value: 'Miradmin@mwcc.biz', href: 'mailto:Miradmin@mwcc.biz' },
  { label: 'Address', value: '115 E Capac Rd, Imlay City, MI 48444', href: 'https://maps.google.com/?q=115+E+Capac+Rd+Imlay+City+MI+48444' },
  { label: 'Hours', value: 'Mon–Fri 8am–4:30pm' },
]

const EMPTY = { firstName: '', lastName: '', company: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const encode = (data) =>
    Object.entries(data)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', 'bot-field': '', ...form }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(EMPTY)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/40 text-white font-roboto text-base placeholder-white/60 py-3.5 focus:outline-none focus:border-secondary transition-colors duration-200'
  const labelClass =
    'font-oswald text-sm tracking-[0.22em] uppercase text-white font-semibold'

  return (
    <section id="contact" className="bg-primary-deep py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-secondary" />
              <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6"
            >
              Request a Quote<br />
              <span className="text-secondary">or Site Assessment</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-roboto text-sm text-white/60 font-light leading-relaxed mb-10"
            >
              Ready to rehabilitate your infrastructure without excavation? Our team
              serves municipalities, MDOT, county road commissions, and private industrial
              clients across Michigan. Contact us for a site assessment and project quote.
            </motion.p>

            <div className="space-y-5">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.22 + i * 0.08 }}
                >
                  <div className="font-oswald text-[10px] tracking-[0.28em] uppercase text-secondary mb-0.5">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-roboto text-sm text-white/80 hover:text-white transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-roboto text-sm text-white/80">{item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile-only CTA — replaces the form on small screens */}
            <Link
              to="/contact"
              className="lg:hidden mt-10 inline-flex w-full items-center justify-center px-8 py-4 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:bg-secondary-dark transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Right: Form (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-start justify-center h-full py-12">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-3">Message Sent</h3>
                <p className="font-roboto text-sm text-white/60 leading-relaxed mb-8">
                  Thanks for reaching out. We'll review your project details and be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-oswald text-xs tracking-[0.22em] uppercase text-secondary hover:text-white transition-colors duration-200"
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-7">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-first-name" className={labelClass}>First Name</label>
                    <input id="contact-first-name" type="text" name="firstName" value={form.firstName} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-last-name" className={labelClass}>Last Name</label>
                    <input id="contact-last-name" type="text" name="lastName" value={form.lastName} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className={labelClass}>Email Address</label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className={labelClass}>Phone Number</label>
                    <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-company" className={labelClass}>Company / Organization</label>
                  <input id="contact-company" type="text" name="company" value={form.company} onChange={handleChange} className={inputClass} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-service" className={labelClass}>Service of Interest</label>
                  <div className="relative">
                    <select id="contact-service" name="service" value={form.service} onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/40 text-white/80 font-roboto text-base py-3.5 focus:outline-none focus:border-secondary transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-primary-deep">Select a service...</option>
                      <option value="sprayroq" className="bg-primary-deep">Sprayroq Structural Coatings</option>
                      <option value="jetting" className="bg-primary-deep">High-Pressure Hot Water Sewer Jetting</option>
                      <option value="hydrovac" className="bg-primary-deep">Hydrovac Services</option>
                      <option value="multiple" className="bg-primary-deep">Multiple Services</option>
                      <option value="assessment" className="bg-primary-deep">Site Assessment / Consultation</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className={labelClass}>Project Details</label>
                  <textarea id="contact-message" name="message" placeholder="Describe your project — asset type (manhole, culvert, wet well), location, estimated scope, and any known conditions..."
                    rows={5} value={form.message} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 text-white font-roboto text-base placeholder-white/60 py-3.5 focus:outline-none focus:border-secondary transition-colors duration-200 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-roboto text-sm text-red-400">
                    Something went wrong. Please try again or email us directly at Miradmin@mwcc.biz.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:bg-secondary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Submit Request'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
