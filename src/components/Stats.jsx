import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Years of Experience', detail: 'Serving Michigan since day one' },
  { value: '500+', label: 'Projects Completed', detail: 'Municipalities, MDOT, and private clients' },
  { value: '20+', label: 'Michigan Counties Served', detail: 'Statewide rehabilitation coverage' },
  { value: '100%', label: 'Sprayroq Certified', detail: 'Factory-trained, warranted application' },
]

export default function Stats() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="px-6 lg:px-10 py-10 lg:py-12 group"
            >
              <div className="font-oswald text-4xl lg:text-5xl font-bold text-primary mb-2 leading-none group-hover:text-secondary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="font-oswald text-sm font-semibold text-primary-deep uppercase tracking-[0.08em] mb-1.5">
                {stat.label}
              </div>
              <div className="font-roboto text-sm text-gray-600 leading-snug">
                {stat.detail}
              </div>
              <div className="mt-4 w-8 h-0.5 bg-secondary/40 group-hover:w-16 group-hover:bg-secondary transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
