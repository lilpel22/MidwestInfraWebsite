import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
  { to: 15, suffix: '+', label: 'Years of Experience' },
  { to: 20, suffix: '+', label: 'Michigan Counties Served' },
  { to: 100, suffix: '%', label: 'Sprayroq Certified' },
]

function CountUp({ to, suffix, start }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const controls = animate(0, to, {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [start, to])

  return (
    <span className="relative inline-block">
      {value}
      <span aria-hidden="true" className="absolute left-full top-0">
        {suffix}
      </span>
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="bg-[#F5F5F5] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-0 lg:divide-x lg:divide-primary/15">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:px-8"
            >
              <div className="font-oswald text-5xl lg:text-6xl font-bold text-primary mb-3 leading-none tabular-nums">
                <CountUp to={stat.to} suffix={stat.suffix} start={inView} />
              </div>
              <div className="w-16 h-px bg-secondary mb-3" />
              <div className="font-roboto text-sm sm:text-xs text-primary/70 uppercase tracking-[0.22em] font-medium text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
