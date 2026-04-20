import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ open, images, index, title, tag, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previouslyFocusedRef = useRef(null)

  useEffect(() => {
    if (!open) return
    previouslyFocusedRef.current = document.activeElement
    const focusTimer = setTimeout(() => closeButtonRef.current?.focus(), 50)

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        onNext()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll('button')
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocusedRef.current?.focus?.()
    }
  }, [open, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {open && images && images.length > 0 && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={title ? `${title} — image gallery` : 'Image gallery'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close */}
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); onClose() }}
            className="absolute top-6 right-6 lg:top-8 lg:right-8 w-11 h-11 flex items-center justify-center border border-white/25 text-white/80 hover:text-white hover:border-white focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-secondary focus-visible:outline-offset-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {/* Title bar */}
          {(title || tag) && (
            <div className="absolute top-0 inset-x-0 px-6 lg:px-10 pt-6 lg:pt-8 pointer-events-none">
              {tag && (
                <div className="max-w-5xl mx-auto flex items-center gap-3">
                  <div className="w-6 h-px bg-secondary" />
                  <span className="font-oswald text-[11px] tracking-[0.28em] uppercase text-secondary">
                    {tag}
                  </span>
                </div>
              )}
              {title && (
                <h4 className="max-w-5xl mx-auto mt-2 font-oswald text-xl lg:text-2xl font-bold text-white uppercase tracking-tight">
                  {title}
                </h4>
              )}
            </div>
          )}

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/5 border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); onNext() }}
              className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/5 border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[92vw] max-h-[78vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`${title || 'Example'} — image ${index + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="max-w-[92vw] max-h-[78vh] object-contain shadow-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Counter + progress pills */}
          {images.length > 1 && (
            <div className="absolute bottom-6 lg:bottom-8 inset-x-0 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-[3px] transition-all duration-300 ${
                      i === index ? 'w-8 bg-secondary' : 'w-4 bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="font-oswald text-[11px] tracking-[0.28em] uppercase text-white/55">
                {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
