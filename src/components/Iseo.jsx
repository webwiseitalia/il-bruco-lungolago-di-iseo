import { Ship, GlassWater, TreePine, Bike } from 'lucide-react'
import verandaImg from '../assets/foto/foto-14.webp'

const attractions = [
  {
    icon: Ship,
    title: 'Monte Isola',
    desc: 'La più grande isola lacustre d\'Europa. Raggiungibile in battello dall\'imbarcadero a pochi passi dal Bruco.',
  },
  {
    icon: GlassWater,
    title: 'Franciacorta',
    desc: 'Tour enogastronomici tra cantine e bollicine. Il territorio delle eccellenze bresciane.',
  },
  {
    icon: TreePine,
    title: 'Torbiere del Sebino',
    desc: 'Riserva naturale con percorsi tra canneti e specchi d\'acqua. Un\'oasi di biodiversità.',
  },
  {
    icon: Bike,
    title: 'Ciclabile del Lago',
    desc: 'Passeggiate e piste ciclabili lungo le sponde. Piramidi di Zone e borghi caratteristici.',
  },
]

export default function Iseo() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-teal-500 font-medium text-sm tracking-widest uppercase">Scopri il territorio</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy font-bold mt-3 mb-6">
              Iseo e il Lago
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-8" />

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Iseo è la meta turistica principale del Lago d'Iseo, adagiata tra il lago, le colline della
              Franciacorta e la Riserva Naturale delle Torbiere del Sebino. <strong className="text-navy">Il Bruco è nel cuore del
              lungolago</strong>, il punto di partenza ideale per esplorare il territorio.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              Il posto perfetto per una pausa pranzo durante la passeggiata, un aperitivo al tramonto,
              una cena romantica vista lago o un pranzo di gruppo durante una gita al lago.
            </p>

            {/* Attractions */}
            <div className="grid sm:grid-cols-2 gap-4">
              {attractions.map((a) => (
                <div key={a.title} className="flex gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="shrink-0 w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <a.icon className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm">{a.title}</h3>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={verandaImg}
                alt="Vista del Lago d'Iseo dalla veranda del Bruco"
                className="w-full h-80 sm:h-96 lg:h-[550px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Distance badges */}
            <div className="absolute -bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap gap-2">
              <div className="bg-white shadow-lg rounded-full px-4 py-2 text-xs font-medium text-navy">
                Brescia ~25 min
              </div>
              <div className="bg-white shadow-lg rounded-full px-4 py-2 text-xs font-medium text-navy">
                Bergamo ~30 min
              </div>
              <div className="bg-white shadow-lg rounded-full px-4 py-2 text-xs font-medium text-navy">
                Milano ~1h15
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
