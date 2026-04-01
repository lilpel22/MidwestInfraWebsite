import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '20+', label: 'Michigan Counties Served' },
  { value: '100%', label: 'SprayROQ Certified' },
]

export default function Stats() {
  return (
    <section className="bg-primary py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="text-center lg:px-8"
            >
              <div className="font-oswald text-4xl lg:text-5xl font-bold text-secondary mb-2 leading-none">
                {stat.value}
              </div>
              <div className="font-roboto text-xs text-white/55 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
