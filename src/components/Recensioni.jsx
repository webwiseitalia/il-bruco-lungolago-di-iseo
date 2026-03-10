import { Star, Award, Quote } from 'lucide-react'

const reviews = [
  {
    text: 'Spaghetti allo scoglio fantastici! Porzioni abbondanti e pesce freschissimo. La vista sul lago è impagabile.',
    author: 'Marco R.',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Il posto migliore del lungolago. Ci torniamo ogni anno da 10 anni. Pierluigi e il suo team ci fanno sempre sentire a casa.',
    author: 'Laura M.',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    text: 'Pizza cotta alla perfezione e vista che toglie il fiato. Servizio veloce e gentile. Prezzi più che onesti per la location.',
    author: 'Giovanni P.',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'La serata Paella & Sangria è un must! Atmosfera fantastica, musica dal vivo e cibo delizioso. Esperienza unica sul lago.',
    author: 'Francesca B.',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    text: 'Frittura di pesce eccezionale e il tiramisù è da leccarsi i baffi. Bello il tocco del bavaglione anti-macchia!',
    author: 'Andrea S.',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Best restaurant on Lake Iseo! Amazing seafood pasta and incredible sunset views. Highly recommend booking the terrace.',
    author: 'Sarah K.',
    source: 'TripAdvisor',
    rating: 5,
  },
]

const badges = [
  { label: 'TripAdvisor', sub: 'Travellers\' Choice 2024', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { label: 'Google', sub: '4 Stelle', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'Restaurant Guru', sub: 'Premiato', color: 'bg-orange-50 text-orange-700 border-orange-200' },
]

export default function Recensioni() {
  return (
    <section id="recensioni" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-500 font-medium text-sm tracking-widest uppercase">Dicono di noi</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy font-bold mt-3">
            Le Recensioni
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {badges.map((b) => (
            <div key={b.label} className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${b.color}`}>
              <Award className="w-5 h-5" />
              <div>
                <div className="font-semibold text-sm">{b.label}</div>
                <div className="text-xs opacity-80">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-teal-200 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-navy text-sm">{review.author}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
