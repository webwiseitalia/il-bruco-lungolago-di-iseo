import { useState } from 'react'
import { X, Instagram } from 'lucide-react'

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

  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-500 font-medium text-sm tracking-widest uppercase">Le nostre foto</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy font-bold mt-3">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/ilbrucoiseo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Instagram className="w-5 h-5" />
            Seguici su Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Chiudi"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
