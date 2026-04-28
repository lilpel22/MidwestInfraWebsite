import { useState } from 'react'
import { motion } from 'framer-motion'

const contactDetails = [
  { label: 'Phone', value: '(810) 721-1933', href: 'tel:8107211933' },
  { label: 'Email', value: 'Miradmin@mwcc.biz', href: 'mailto:Miradmin@mwcc.biz' },
  { label: 'Address', value: '115 E Capac Rd, Imlay City, MI 48444', href: 'https://maps.google.com/?q=115+E+Capac+Rd+Imlay+City+MI+48444' },
  { label: 'Hours', value: 'Mon–Fri 8am–4:30pm' },
]

const EMPTY = { firstName: '', lastName: '', company: '', email: '', phone: '', service: '', message: '' }

const inputClass =
  'w-full bg-transparent border-b border-white/40 text-white font-roboto text-base placeholder-white/60 py-3.5 focus:outline-none focus:border-secondary transition-colors duration-200'
const labelClass = 'font-oswald text-sm tracking-[0.22em] uppercase text-white font-semibold'

export default function ContactPageForm() {
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

  return (
    <section className="relative bg-primary-deep pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/20241203-DJI_20241203094827_0009_D.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-primary-deep/60" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 lg:px-0">

        {/* Large heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="font-oswald text-5xl lg:text-7xl font-bold text-white uppercase leading-tight mb-4"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-roboto text-sm text-white/60 leading-relaxed mb-12"
        >
          Ready to discuss your project? Fill out the form below or reach us directly — we'll respond promptly.
        </motion.p>

        {/* Form or success state */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
        >
          {status === 'success' ? (
            <div className="py-12">
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
            <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cp-first-name" className={labelClass}>First Name</label>
                  <input id="cp-first-name" type="text" name="firstName" value={form.firstName} onChange={handleChange} required className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cp-last-name" className={labelClass}>Last Name</label>
                  <input id="cp-last-name" type="text" name="lastName" value={form.lastName} onChange={handleChange} required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cp-email" className={labelClass}>Email Address</label>
                  <input id="cp-email" type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cp-phone" className={labelClass}>Phone Number</label>
                  <input id="cp-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cp-company" className={labelClass}>Company / Organization</label>
                <input id="cp-company" type="text" name="company" value={form.company} onChange={handleChange} className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cp-service" className={labelClass}>Service of Interest</label>
                <div className="relative">
                  <select id="cp-service" name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/40 text-white/80 font-roboto text-base py-3.5 focus:outline-none focus:border-secondary transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-primary-deep">Select a service...</option>
                    <option value="sprayroq" className="bg-primary-deep">Sprayroq Structural Coatings</option>
                    <option value="jetting" className="bg-primary-deep">High-Pressure Hot Water Sewer Jetting</option>
                    <option value="hydrovac" className="bg-primary-deep">Hydrovac Services</option>
                    <option value="multiple" className="bg-primary-deep">Multiple Services</option>
                    <option value="other" className="bg-primary-deep">Other / Not Sure</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cp-message" className={labelClass}>Project Details</label>
                <textarea id="cp-message" name="message" placeholder="Describe your project — asset type, location, estimated scope, and any known conditions..."
                  rows={4} value={form.message} onChange={handleChange}
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

        {/* Contact details row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {contactDetails.map((item) => (
            <div key={item.label}>
              <div className="font-oswald text-[10px] tracking-[0.28em] uppercase text-secondary mb-1.5">
                {item.label}
              </div>
              {item.href ? (
                <a href={item.href} className="font-roboto text-sm text-white/65 hover:text-white transition-colors leading-relaxed block">
                  {item.value}
                </a>
              ) : (
                <span className="font-roboto text-sm text-white/65 leading-relaxed block">{item.value}</span>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
