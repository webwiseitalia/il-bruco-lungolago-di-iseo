import { Users, Snowflake, Sun, MapPin } from 'lucide-react'
import verandaModerna from '../assets/foto/foto-6.webp'
import salaInterna from '../assets/foto/foto-11.webp'
import saletta from '../assets/foto/foto-10.webp'
import verandaSera from '../assets/foto/foto-13.webp'

const spaces = [
  {
    img: verandaModerna,
    title: 'Veranda sul Lago',
    seats: '~120 posti',
    desc: 'L\'ambiente principale e più iconico. Panorama a 180° sul lago. Vetrate che scompaiono in estate, riscaldamento in inverno.',
    features: ['Vista lago 180°', 'Tutto l\'anno', 'Vetrate apribili'],
    icon: Sun,
    alt: 'Veranda moderna con vista panoramica sul Lago d Iseo'
  },
  {
    img: salaInterna,
    title: 'Sala Interna',
    seats: '~80 posti',
    desc: 'Ambiente accogliente con travi in legno e pietra a vista. Aria condizionata e finestre panoramiche sul lungolago.',
    features: ['Aria condizionata', 'Vista lungolago', 'Palazzo storico'],
    icon: Snowflake,
    alt: 'Sala interna con travi in legno e lampadari'
  },
  {
    img: saletta,
    title: 'Saletta Riservata',
    seats: '~80 posti',
    desc: 'Ambiente più raccolto e intimo, con soffitti a volta. Ideale per cene riservate e occasioni speciali.',
    features: ['Ambiente intimo', 'Soffitti a volta', 'Cene private'],
    icon: Users,
    alt: 'Saletta con soffitti a volta e tavoli apparecchiati'
  },
]

export default function Location() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-500 font-medium text-sm tracking-widest uppercase">I nostri spazi</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy font-bold mt-3">
            La Location
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Oltre 280 posti a sedere in tre ambienti unici, tutti affacciati sul lungolago di Iseo.
          </p>
        </div>

        {/* Hero location image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 md:mb-16 shadow-2xl">
          <img
            src={verandaSera}
            alt="La veranda piena di ospiti durante una serata"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex items-center gap-2 text-teal-300 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Via Lungolago Marconi 20/A — Iseo (BS)</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-white font-bold">
              A metà passeggiata sul lungolago, nel cuore di Iseo
            </h3>
          </div>
        </div>

        {/* Spaces grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {spaces.map((space) => (
            <div key={space.title} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden h-56">
                <img
                  src={space.img}
                  alt={space.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <space.icon className="w-4 h-4 text-teal-500" />
                  <span className="text-xs font-semibold text-navy">{space.seats}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-navy font-semibold mb-2">{space.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{space.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {space.features.map((f) => (
                    <span key={f} className="bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
