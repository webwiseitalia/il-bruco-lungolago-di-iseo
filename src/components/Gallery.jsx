import { useState, useEffect, useRef } from 'react'
import { X, Instagram } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto17 from '../assets/foto/foto-17.webp'
import foto18 from '../assets/foto/foto-18.webp'

const images = [
  { src: foto6, alt: 'Veranda con vista lago', category: 'location' },
  { src: foto5, alt: 'Spaghetti allo scoglio', category: 'piatti' },
  { src: foto13, alt: 'Serata in veranda piena di ospiti', category: 'location' },
  { src: foto15, alt: 'Paella di mare', category: 'piatti' },
  { src: foto14, alt: 'Veranda vista lago di giorno', category: 'location' },
  { src: foto1, alt: 'Frittura mista di pesce', category: 'piatti' },
  { src: foto8, alt: 'Spaghetti allo scoglio con scampi', category: 'piatti' },
  { src: foto10, alt: 'Saletta con soffitti a volta', category: 'location' },
  { src: foto3, alt: 'Pizza margherita', category: 'piatti' },
  { src: foto17, alt: 'Allestimento evento con fiori', category: 'eventi' },
  { src: foto7, alt: 'Piatto di salmone', category: 'piatti' },
  { src: foto9, alt: 'Frittura di calamari', category: 'piatti' },
  { src: foto16, alt: 'Ravioli con gamberi', category: 'piatti' },
  { src: foto2, alt: 'Pizza con nduja', category: 'piatti' },
  { src: foto18, alt: 'Dettaglio floreale evento', category: 'eventi' },
]

const filters = [
  { label: 'Tutto', value: 'all' },
  { label: 'I Piatti', value: 'piatti' },
  { label: 'Location', value: 'location' },
  { label: 'Eventi', value: 'eventi' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useRef(null)

  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bigTitle = sectionRef.current.querySelector('[data-gallery-title]')
      if (bigTitle) {
        gsap.fromTo(bigTitle, { y: 100, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: bigTitle, start: 'top 92%', toggleActions: 'play none none none' },
        })
      }

      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="gallery" className="relative bg-navy overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">

      {/* GIANT overlapping title + filters */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-14 px-4 sm:px-8 lg:px-12">
        <div data-gallery-title>
          <h2 className="font-display text-[14vw] sm:text-[11vw] lg:text-[8vw] font-bold leading-[0.82] tracking-[-0.04em]">
            <span className="block text-white">Gal</span>
            <span className="block text-teal-400/50 ml-[6vw]">lery</span>
          </h2>
        </div>

        <div data-reveal className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`font-mono text-[9px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                filter === f.value
                  ? 'bg-teal-500 text-white'
                  : 'text-white/30 border border-white/8 hover:border-white/25 hover:text-white/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery masonry */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 space-y-2 md:space-y-3 px-2 md:px-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <motion.div
              key={`${img.alt}-${img.src}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative group break-inside-avoid cursor-pointer overflow-hidden"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                title={img.alt}
                width={400}
                height={300}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-500 flex items-end p-3 sm:p-4">
                <span className="text-white text-[10px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Instagram CTA */}
      <div className="mt-12 md:mt-16 flex justify-end pr-4 sm:pr-8 lg:pr-12">
        <a
          href="https://www.instagram.com/ilbrucoiseo"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-white/30 hover:text-white transition-colors duration-500"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-mono text-[10px] tracking-wider uppercase border-b border-white/10 group-hover:border-white/40 pb-1 transition-all duration-500">
            Seguici su Instagram
          </span>
        </a>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white p-2 transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox.src}
              alt={lightbox.alt}
              title={lightbox.alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
