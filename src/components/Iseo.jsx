import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Ship, GlassWater, TreePine, Bike } from 'lucide-react'
import verandaImg from '../assets/foto/foto-14.webp'

const attractions = [
  { icon: Ship, title: 'Monte Isola', desc: 'La più grande isola lacustre d\'Europa. Raggiungibile in battello a pochi passi dal Bruco.' },
  { icon: GlassWater, title: 'Franciacorta', desc: 'Tour enogastronomici tra cantine e bollicine. Il territorio delle eccellenze bresciane.' },
  { icon: TreePine, title: 'Torbiere del Sebino', desc: 'Riserva naturale con percorsi tra canneti e specchi d\'acqua.' },
  { icon: Bike, title: 'Ciclabile del Lago', desc: 'Passeggiate e piste ciclabili lungo le sponde. Piramidi di Zone e borghi caratteristici.' },
]

export default function Iseo() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      gsap.to(imgRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: { trigger: imgRef.current?.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      })

      // Reveal elements
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })

      // Attractions — stagger in from right
      const items = sectionRef.current.querySelectorAll('[data-attraction]')
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { x: 60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none none' },
            delay: i * 0.08,
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-cream overflow-hidden">
      {/* Completely different from Location — image right bleeds, text left with wide margin */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* Image — RIGHT side, bleeds off-screen, comes first in DOM for mobile */}
        <div className="lg:col-span-7 lg:col-start-6 lg:order-2 relative">
          <div className="relative overflow-hidden h-[45vh] sm:h-[55vh] lg:h-[90vh]">
            <img
              ref={imgRef}
              src={verandaImg}
              alt="Vista del Lago d'Iseo dalla veranda del Bruco"
              title="Panorama del Lago d'Iseo dal ristorante Il Bruco"
              width={800}
              height={750}
              className="w-full h-[130%] object-cover will-change-transform"
              loading="lazy"
            />
          </div>

          {/* Floating distance tags — overlapping bottom-left of image */}
          <div data-reveal className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 lg:-left-20 z-10 flex flex-col gap-2">
            <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-white bg-navy/80 backdrop-blur-sm px-4 py-2 inline-block">Brescia ~25 min</span>
            <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-white bg-navy/80 backdrop-blur-sm px-4 py-2 inline-block ml-4">Bergamo ~30 min</span>
            <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-white bg-navy/80 backdrop-blur-sm px-4 py-2 inline-block ml-8">Milano ~1h15</span>
          </div>
        </div>

        {/* Text — LEFT side, generous padding, pushed down */}
        <div className="lg:col-span-5 lg:col-start-1 lg:order-1 px-5 sm:px-8 lg:pl-12 lg:pr-0 py-12 sm:py-16 lg:py-0 lg:flex lg:flex-col lg:justify-center">
          <div className="lg:pr-8 lg:py-20">
            <span data-reveal className="font-mono text-[9px] tracking-[0.4em] uppercase text-teal-500">Scopri il territorio</span>
            <h2 data-reveal className="font-display fluid-lg text-navy font-bold mt-3 mb-2">
              Iseo e<br />il Lago
            </h2>
            <div data-reveal className="w-20 h-0.5 bg-gold mb-8" />

            <p data-reveal className="text-base sm:text-lg leading-relaxed text-gray-600 mb-5">
              Iseo è la meta turistica principale del Lago d'Iseo, adagiata tra il lago, le colline della
              Franciacorta e la Riserva Naturale delle Torbiere del Sebino. <strong className="text-navy">Il Bruco è nel cuore del lungolago</strong>, il punto di partenza ideale.
            </p>
            <p data-reveal className="text-base sm:text-lg leading-relaxed text-gray-500 mb-10">
              Il posto perfetto per una pausa pranzo, un aperitivo al tramonto,
              una cena romantica vista lago o un pranzo di gruppo.
            </p>

            {/* Attractions — horizontal cards, not a vertical list */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {attractions.map((a) => (
                <div key={a.title} data-attraction className="border border-navy/8 p-4 sm:p-5 hover:border-teal-300 transition-colors duration-500">
                  <a.icon className="w-5 h-5 text-teal-500 mb-3" />
                  <h3 className="font-semibold text-navy text-sm mb-1">{a.title}</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
