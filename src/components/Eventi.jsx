import { Music, PartyPopper, Users, Calendar } from 'lucide-react'
import paellaImg from '../assets/foto/foto-15.webp'
import eventiImg from '../assets/foto/foto-17.webp'
import verandaImg from '../assets/foto/foto-13.webp'

const events = [
  {
    img: paellaImg,
    title: 'Serate Paella & Sangria',
    desc: 'Il nostro evento signature. Paella preparata al momento con frutti di mare freschi, sangria a volontà e musica dal vivo. Un\'esperienza che sa di Mediterraneo.',
    icon: PartyPopper,
    highlight: true,
    alt: 'Paella di mare con gamberi e cozze'
  },
  {
    img: verandaImg,
    title: 'Musica dal Vivo',
    desc: 'Serate con musica live sulla veranda vista lago. L\'atmosfera perfetta per una cena indimenticabile tra amici, in coppia o in famiglia.',
    icon: Music,
    alt: 'Serata con ospiti nella veranda sul lago'
  },
  {
    img: eventiImg,
    title: 'Eventi Privati',
    desc: 'Compleanni, anniversari, cene aziendali e occasioni speciali. I nostri spazi si adattano a ogni esigenza, dai piccoli gruppi alle grandi tavolate.',
    icon: Users,
    alt: 'Allestimento floreale elegante per evento privato'
  },
]

export default function Eventi() {
  return (
    <section id="eventi" className="section-padding bg-navy">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-300 font-medium text-sm tracking-widest uppercase">Vivi l'esperienza</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-3">
            Eventi & Serate Speciali
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Non solo ristorante: Il Bruco è il luogo dove nascono ricordi. Serate a tema, musica dal vivo
            e promozioni esclusive.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                event.highlight
                  ? 'bg-teal-500/10 border-2 border-teal-400/30'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={event.img}
                  alt={event.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-md rounded-full p-2.5">
                  <event.icon className="w-5 h-5 text-white" />
                </div>
                {event.highlight && (
                  <div className="absolute top-3 right-3 bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Signature
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://booking.ilbruco.it"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30"
            >
              Prenota per un evento
            </a>
            <a
              href="https://www.instagram.com/ilbrucoiseo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-white/80 hover:text-white flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Segui gli eventi su Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
