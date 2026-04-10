import { useState } from 'react'
import { motion } from 'framer-motion'

const contactDetails = [
  {
    label: 'Phone',
    value: '(810) 721-1933',
    href: 'tel:8107211933',
  },
  {
    label: 'Email',
    value: 'info@mwcc.biz',
    href: 'mailto:info@mwcc.biz',
  },
  {
    label: 'Address',
    value: '115 E Capac Rd, Imlay City, MI 48444',
    href: 'https://maps.google.com/?q=115+E+Capac+Rd+Imlay+City+MI+48444',
  },
  {
    label: 'Hours',
    value: 'Mon–Thu 8am–4:30pm · Fri by appointment',
  },
]

export function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-oswald text-[11px] tracking-[0.28em] uppercase text-gray-600 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 text-gray-800 font-roboto text-base placeholder-gray-400 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-oswald text-[11px] tracking-[0.28em] uppercase text-gray-600 font-medium">
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            placeholder="City of Lapeer"
            value={form.company}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 text-gray-800 font-roboto text-base placeholder-gray-400 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-oswald text-[11px] tracking-[0.28em] uppercase text-gray-600 font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@organization.gov"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 text-gray-800 font-roboto text-base placeholder-gray-400 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-oswald text-[11px] tracking-[0.28em] uppercase text-gray-600 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="(810) 555-0100"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 text-gray-800 font-roboto text-base placeholder-gray-400 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-oswald text-[11px] tracking-[0.28em] uppercase text-gray-600 font-medium">
          Service of Interest
        </label>
        <div className="relative">
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 text-gray-700 font-roboto text-base px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>Select a service...</option>
            <option value="sprayroq">Sprayroq Structural Coatings</option>
            <option value="jetting">High-Pressure Hot Water Sewer Jetting</option>
            <option value="hydrovac">Hydrovac Services</option>
            <option value="multiple">Multiple Services</option>
            <option value="assessment">Site Assessment / Consultation</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-oswald text-[11px] tracking-[0.28em] uppercase text-gray-600 font-medium">
          Project Details
        </label>
        <textarea
          name="message"
          placeholder="Describe your project — asset type (manhole, culvert, wet well), location, estimated scope, and any known conditions..."
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-white border border-gray-200 text-gray-800 font-roboto text-base placeholder-gray-400 px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className="w-full sm:w-auto px-12 py-4 bg-primary text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:bg-primary-dark transition-colors duration-200 flex items-center gap-3 justify-center sm:justify-start"
        >
          Submit Request
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-[#EEF4FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-[11px] tracking-[0.35em] uppercase text-primary font-medium">
              Get in Touch
            </span>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-oswald text-4xl lg:text-5xl font-bold text-primary-deep uppercase leading-tight"
            >
              Request a Quote<br />
              <span className="text-primary">or Site Assessment</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-roboto text-base text-gray-600 max-w-xs leading-relaxed lg:text-right"
            >
              Serving municipalities, MDOT, county road commissions, and
              private industrial clients across Michigan.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Left: Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info card */}
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

            {/* Image */}
            <div className="relative h-44 lg:h-52 overflow-hidden flex-1">
              <img
                src="/images/20250812-AR1_2868.jpg"
                alt="Midwest Infra field crew"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/25" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-deep/80 to-transparent p-5">
                <p className="font-oswald text-sm tracking-[0.18em] uppercase text-white">
                  No digging required — rehabilitated from the inside.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 bg-white shadow-lg shadow-primary/8 p-8 lg:p-10"
          >
            <p className="font-oswald text-[11px] tracking-[0.3em] uppercase text-primary mb-7">
              Project Inquiry Form
            </p>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
