import { Fish, Flame, Wine, Star } from 'lucide-react'
import spaghettiImg from '../assets/foto/foto-5.webp'
import fritturaImg from '../assets/foto/foto-1.webp'
import pizzaImg from '../assets/foto/foto-3.webp'
import paellaImg from '../assets/foto/foto-15.webp'
import ravioliImg from '../assets/foto/foto-16.webp'
import salmonImg from '../assets/foto/foto-7.webp'

const dishes = [
  {
    img: spaghettiImg,
    title: 'Spaghetti allo Scoglio',
    desc: 'Il nostro piatto simbolo. Generosi di frutti di mare freschi, serviti con il bavaglione anti-macchia.',
    badge: 'Piatto Simbolo',
    alt: 'Spaghetti allo scoglio con frutti di mare'
  },
  {
    img: fritturaImg,
    title: 'Frittura Mista di Pesce',
    desc: 'Calamari, gamberi e pesce misto fritti alla perfezione. Croccanti fuori, morbidi dentro.',
    alt: 'Frittura mista di pesce'
  },
  {
    img: pizzaImg,
    title: 'Pizza a Fuoco Vivo',
    desc: 'Cotta a pellet, impasto ben lievitato, cottura perfetta. Anche pizza fritta e calzone.',
    alt: 'Pizza margherita cotta a fuoco vivo'
  },
  {
    img: paellaImg,
    title: 'Paella & Sangria',
    desc: 'Il nostro evento signature. Paella preparata al momento con frutti di mare e sangria a volontà.',
    badge: 'Evento Speciale',
    alt: 'Paella di mare con cozze gamberi e vongole'
  },
  {
    img: ravioliImg,
    title: 'Primi di Pesce',
    desc: 'Ravioli, paccheri e pasta fresca con sugo di pesce di mare e di lago.',
    alt: 'Ravioli con gamberi e pomodorini'
  },
  {
    img: salmonImg,
    title: 'Pesce di Lago e Mare',
    desc: 'Salmerino, agone, coda di rospo, polpo. Il meglio del lago e del mare in un piatto.',
    alt: 'Salmone con insalata e contorno'
  },
]

const categories = [
  { icon: Fish, label: 'Pesce fresco', desc: 'Mare e lago' },
  { icon: Flame, label: 'Pizza a pellet', desc: 'Fuoco vivo' },
  { icon: Wine, label: 'Vini Franciacorta', desc: 'Bollicine e rossi' },
  { icon: Star, label: 'Prezzo medio', desc: '20-30€ a persona' },
]

export default function MenuSection() {
  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-500 font-medium text-sm tracking-widest uppercase">La cucina</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy font-bold mt-3">
            Il Nostro Menu
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Specialità di pesce fresco, pizza cotta a fuoco vivo e i sapori autentici della cucina italiana,
            con vista sul Lago d'Iseo.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <cat.icon className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <div className="font-semibold text-navy text-sm">{cat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{cat.desc}</div>
            </div>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish) => (
            <div key={dish.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden h-56 sm:h-64">
                <img
                  src={dish.img}
                  alt={dish.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {dish.badge && (
                  <div className="absolute top-3 left-3 bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {dish.badge}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-navy font-semibold mb-2">{dish.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://booking.ilbruco.it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Prenota e assaggia
          </a>
        </div>
      </div>
    </section>
  )
}
