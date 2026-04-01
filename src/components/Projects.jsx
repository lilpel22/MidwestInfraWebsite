import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'Manhole Structural Renewal',
    location: 'Oakland County, MI',
    tag: 'SprayROQ Coatings',
    summary:
      '38 aging brick-and-mortar manholes rehabilitated with SprayWall® polyurethane structural lining. I&I reduced by 91% — an estimated $2.1M in replacement costs avoided.',
  },
  {
    id: '02',
    title: 'CMP Culvert Rehabilitation',
    location: 'MDOT District 5 / M-53',
    tag: 'Structural Lining',
    summary:
      '120 LF of corrugated metal pipe under M-53 fully relined — no road closure, full load-bearing restoration delivered at under 30% of estimated replacement cost.',
  },
  {
    id: '03',
    title: 'Lift Station Wet Well Lining',
    location: 'City of Lapeer, MI',
    tag: 'Wet Well Rehabilitation',
    summary:
      'Full wet well rehabilitation using cementitious resurfacing and SprayWall® H₂S-resistant polyurethane top coat — completed within a 5-day outage window.',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.14 }}
      className="group cursor-pointer flex flex-col"
    >
      {/* ── Image area (grey placeholder, zooms on hover) ── */}
      <div className="relative overflow-hidden aspect-[16/10]">
        {/* Grey placeholder — replace with <img> when real photos arrive */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-400 via-neutral-500 to-neutral-600 transform group-hover:scale-105 transition-transform duration-700 ease-out" />

        {/* Subtle crosshatch texture on placeholder */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #fff 0px, #fff 1px,
              transparent 1px, transparent 12px
            )`,
          }}
        />

        {/* Dark gradient — fades on hover to let fill color take over */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-40 transition-opacity duration-500" />

        {/* Project number — top left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-oswald text-xs tracking-[0.28em] uppercase text-white/50 bg-black/35 backdrop-blur-sm px-2.5 py-1">
            {project.id}
          </span>
        </div>

        {/* Tag badge — top right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="font-oswald text-[10px] tracking-[0.22em] uppercase text-secondary bg-black/40 backdrop-blur-sm border border-secondary/35 px-3 py-1.5">
            {project.tag}
          </span>
        </div>

        {/* Photo placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-oswald text-[11px] tracking-[0.3em] uppercase text-white/20">
            Project Photo
          </span>
        </div>
      </div>

      {/* ── Text panel (color fill sweeps in from left on hover) ── */}
      <div className="relative overflow-hidden bg-primary-deep flex-1">
        {/* The fill: primary blue slides in from the left */}
        <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />

        <div className="relative z-10 px-6 py-5">
          {/* Tag + location row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-3 h-px bg-secondary flex-shrink-0" />
              <span className="font-oswald text-[10px] tracking-[0.28em] uppercase text-secondary truncate">
                {project.tag}
              </span>
            </div>
            <span className="font-roboto text-[10px] text-white/40 group-hover:text-white/60 transition-colors duration-300 ml-3 flex-shrink-0">
              {project.location}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-oswald text-xl font-bold text-white uppercase leading-tight mb-2">
            {project.title}
          </h3>

          {/* Description — always visible */}
          <p className="font-roboto text-xs text-white/65 group-hover:text-white/85 font-light leading-relaxed transition-colors duration-300">
            {project.summary}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-primary-deep py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle grid texture — keeps cohesion with site */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header — unchanged from rest of site */}
        <div className="mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-secondary" />
            <span className="font-oswald text-xs tracking-[0.32em] uppercase text-secondary font-medium">
              Project Spotlights
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl lg:text-[56px] font-bold text-white uppercase leading-tight"
          >
            Proven Results<br />
            <span className="text-secondary">Across Michigan</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
