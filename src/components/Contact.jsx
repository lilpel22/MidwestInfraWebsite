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

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder — client will wire up form submission
  }

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

            {/* Contact details — no icons, just label + value */}
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
                    <a
                      href={item.href}
                      className="font-roboto text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-roboto text-sm text-white/80">{item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/50">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/25 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/50">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="City of Lapeer"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/25 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/50">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@organization.gov"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/25 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/50">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(810) 555-0100"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/25 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/50">Service of Interest</label>
                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-primary-deep border border-white/14 text-white/70 font-roboto text-sm px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="sprayroq">SprayROQ Structural Coatings</option>
                    <option value="jetting">High-Pressure Sewer Jetting</option>
                    <option value="hydrovac">Hydrovac Services</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="assessment">Site Assessment / Consultation</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/50">Project Details</label>
                <textarea
                  name="message"
                  placeholder="Describe your project — asset type (manhole, culvert, wet well), location, estimated scope, and any known conditions..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/25 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:bg-secondary-dark transition-colors duration-200"
              >
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
