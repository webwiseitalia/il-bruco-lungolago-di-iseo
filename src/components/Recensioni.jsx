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
      // Marquee
      const marquee = sectionRef.current.querySelector('[data-marquee]')
      if (marquee) {
        gsap.to(marquee, {
          xPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.4 },
        })
      }

      // Text reveals
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })

      // Review cards — each with unique entrance direction
      const cards = sectionRef.current.querySelectorAll('[data-review]')
      cards.forEach((card, i) => {
        const entrances = [
          { y: 80, x: -30, rotation: -2 },
          { y: 100, x: 40, rotation: 1.5 },
          { y: 60, x: -20, rotation: -1 },
          { y: 90, x: 30, rotation: 2 },
          { y: 70, x: -40, rotation: -1.5 },
          { y: 110, x: 20, rotation: 1 },
        ]
        const e = entrances[i % entrances.length]
        gsap.fromTo(card,
          { y: e.y, x: e.x, opacity: 0, rotation: e.rotation },
          {
            y: 0, x: 0, opacity: 1, rotation: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Different sizes and offsets — truly broken layout
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
      {/* Background marquee */}
      <div className="absolute top-1/3 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div data-marquee className="whitespace-nowrap font-display text-[7rem] sm:text-[10rem] md:text-[14rem] text-navy/[0.015] font-bold leading-none" style={{ width: '200%' }}>
          Recensioni &middot; Dicono di noi &middot; Recensioni &middot; Dicono di noi &middot;
        </div>
      </div>

      <div className="relative z-10">
        {/* Header — split: title far left, badges far right. Different from all other headers. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 mb-16 md:mb-24 px-4 sm:px-8 lg:px-12">
          <div className="lg:col-span-4">
            <span data-reveal className="font-mono text-[9px] tracking-[0.4em] uppercase text-teal-500">Dicono di noi</span>
            <h2 data-reveal className="font-display fluid-lg text-navy font-bold mt-3">
              Le<br />Recensioni
            </h2>
            <div data-reveal className="w-20 h-0.5 bg-gold mt-3" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
            <div className="space-y-3">
              {badges.map((b) => (
                <div data-reveal key={b.label} className="flex items-center justify-between border-b border-navy/8 pb-3">
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-navy/35">{b.label}</span>
                  <span className="text-sm font-semibold text-navy">{b.sub}</span>
                </div>
              ))}
            </div>
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
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-light italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-navy text-sm">{review.author}</span>
                <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-navy/25">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
