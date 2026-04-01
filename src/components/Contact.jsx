import { useState } from 'react'
import { motion } from 'framer-motion'

const contactDetails = [
  {
    label: 'Phone',
    value: '(810) 721-1933',
    href: 'tel:8107211933',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@mwcc.biz',
    href: 'mailto:info@mwcc.biz',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '115 E Capac Rd, Imlay City, MI 48444',
    href: 'https://maps.google.com/?q=115+E+Capac+Rd+Imlay+City+MI+48444',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Hours',
    value: 'Mon–Thu 8am–4:30pm · Fri by appointment',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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

            {/* Contact details */}
            <div className="space-y-5">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.22 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary/30 border border-primary/50 flex items-center justify-center text-secondary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/38 mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-roboto text-sm text-white hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-roboto text-sm text-white">{item.value}</span>
                    )}
                  </div>
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
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/30 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/30 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/30 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/30 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-primary-deep border border-white/14 text-white/70 font-roboto text-sm px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Service of Interest</option>
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

              <textarea
                name="message"
                placeholder="Describe your project — asset type, location, scope of work..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/6 border border-white/14 text-white font-roboto text-sm placeholder-white/30 px-4 py-3.5 focus:outline-none focus:border-secondary transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-secondary text-white font-oswald text-sm font-semibold tracking-[0.22em] uppercase hover:bg-secondary-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
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
