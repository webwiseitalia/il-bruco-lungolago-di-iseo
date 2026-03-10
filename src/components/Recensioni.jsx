import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

const reviews = [
  { text: 'Spaghetti allo scoglio fantastici! Porzioni abbondanti e pesce freschissimo. La vista sul lago è impagabile.', author: 'Marco R.', source: 'Google', rating: 5 },
  { text: 'Il posto migliore del lungolago. Ci torniamo ogni anno da 10 anni. Pierluigi e il suo team ci fanno sempre sentire a casa.', author: 'Laura M.', source: 'TripAdvisor', rating: 5 },
  { text: 'Pizza cotta alla perfezione e vista che toglie il fiato. Servizio veloce e gentile. Prezzi più che onesti per la location.', author: 'Giovanni P.', source: 'Google', rating: 5 },
  { text: 'La serata Paella & Sangria è un must! Atmosfera fantastica, musica dal vivo e cibo delizioso. Esperienza unica sul lago.', author: 'Francesca B.', source: 'TripAdvisor', rating: 5 },
  { text: 'Frittura di pesce eccezionale e il tiramisù è da leccarsi i baffi. Bello il tocco del bavaglione anti-macchia!', author: 'Andrea S.', source: 'Google', rating: 5 },
  { text: 'Best restaurant on Lake Iseo! Amazing seafood pasta and incredible sunset views. Highly recommend booking the terrace.', author: 'Sarah K.', source: 'TripAdvisor', rating: 5 },
]

const badges = [
  { label: 'TripAdvisor', sub: 'Travellers\' Choice 2024' },
  { label: 'Google', sub: '4 Stelle' },
  { label: 'Restaurant Guru', sub: 'Premiato' },
]

export default function Recensioni() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title — scale from center
      const bigTitle = sectionRef.current.querySelector('[data-rece-title]')
      if (bigTitle) {
        gsap.fromTo(bigTitle, { y: 100, opacity: 0, scale: 0.85 }, {
          y: 0, opacity: 1, scale: 1, duration: 1.6, ease: 'expo.out',
          scrollTrigger: { trigger: bigTitle, start: 'top 92%', toggleActions: 'play none none none' },
        })
      }

      // Reveals with blur
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0, filter: 'blur(6px)' }, {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })

      // Review cards — scattered entrance with scale + rotation + blur
      const cards = sectionRef.current.querySelectorAll('[data-review]')
      cards.forEach((card, i) => {
        const entrances = [
          { y: 100, x: -40, rotation: -3, scale: 0.85 },
          { y: 120, x: 50, rotation: 2, scale: 0.88 },
          { y: 80, x: -30, rotation: -1.5, scale: 0.9 },
          { y: 110, x: 40, rotation: 2.5, scale: 0.85 },
          { y: 90, x: -50, rotation: -2, scale: 0.88 },
          { y: 130, x: 30, rotation: 1.5, scale: 0.9 },
        ]
        const e = entrances[i % entrances.length]
        gsap.fromTo(card,
          { y: e.y, x: e.x, opacity: 0, rotation: e.rotation, scale: e.scale, filter: 'blur(5px)' },
          {
            y: 0, x: 0, opacity: 1, rotation: 0, scale: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cardStyles = [
    'sm:col-span-2 lg:col-span-4 lg:mt-0',
    'sm:col-span-2 lg:col-span-3 lg:mt-20',
    'sm:col-span-2 lg:col-span-5 lg:-mt-8',
    'sm:col-span-2 lg:col-span-5 lg:col-start-2 lg:mt-4',
    'sm:col-span-2 lg:col-span-3 lg:mt-16',
    'sm:col-span-2 lg:col-span-4 lg:-mt-12',
  ]

  return (
    <section ref={sectionRef} id="recensioni" className="relative bg-white overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">

      {/* GIANT overlapping section title */}
      <div data-rece-title className="relative z-10 px-4 sm:px-8 lg:px-12 mb-12 md:mb-20 text-center">
        <h2 className="font-display text-[14vw] sm:text-[11vw] lg:text-[8vw] font-bold leading-[0.82] tracking-[-0.04em]">
          <span className="block text-navy">Dicono</span>
          <span className="block text-navy/40">di Noi</span>
        </h2>
      </div>

      {/* Badges row */}
      <div className="px-4 sm:px-8 lg:px-12 mb-12 md:mb-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 max-w-xl">
          {badges.map((b) => (
            <div data-reveal key={b.label} className="flex items-center justify-between sm:flex-col sm:items-start gap-2 border-b sm:border-b-0 sm:border-l border-navy/8 pb-3 sm:pb-0 sm:pl-4">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-navy/35">{b.label}</span>
              <span className="text-base font-semibold text-navy">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews — SCATTERED, overlapping, different widths */}
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 px-4 sm:px-8 lg:px-12">
        {reviews.map((review, i) => (
          <div
            key={i}
            data-review
            className={`${cardStyles[i]} border border-navy/6 p-5 sm:p-7 bg-white hover:border-teal-300 transition-colors duration-500`}
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(review.rating)].map((_, j) => (
                <Star key={j} className="w-2.5 h-2.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-5 font-light italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-navy text-base">{review.author}</span>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-navy/25">{review.source}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
