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
      // Image parallax with zoom
      gsap.to(imgRef.current, {
        yPercent: -15,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: { trigger: imgRef.current?.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      })

      // Title — scale up from center
      const bigTitle = sectionRef.current.querySelector('[data-iseo-title]')
      if (bigTitle) {
        gsap.fromTo(bigTitle, { y: 80, opacity: 0, scale: 0.9 }, {
          y: 0, opacity: 1, scale: 1, duration: 1.6, ease: 'expo.out',
          scrollTrigger: { trigger: bigTitle, start: 'top 92%', toggleActions: 'play none none none' },
        })
      }

      // Reveal elements with blur
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0, filter: 'blur(6px)' }, {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })

      // Attraction cards — staggered with scale bounce
      const items = sectionRef.current.querySelectorAll('[data-attraction]')
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 60, x: 40, opacity: 0, scale: 0.9 },
          {
            y: 0, x: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.2)',
            scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none none' },
            delay: i * 0.1,
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-cream overflow-hidden">

      {/* SECTION TITLE — centered at top */}
      <div data-iseo-title className="pt-20 md:pt-32 pb-10 md:pb-16 text-center px-4">
        <span className="font-mono text-[11px] tracking-[0.4em] uppercase text-teal-500 block mb-4">Scopri il territorio</span>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-navy">
          Iseo <span className="text-navy/30">&</span> il Lago
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* Image — RIGHT side */}
        <div className="lg:col-span-7 lg:col-start-6 lg:order-2 relative">
          <div className="relative overflow-hidden h-[45vh] sm:h-[55vh] lg:h-[75vh]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-cream/30 to-transparent" />
          </div>

          {/* Distance tags */}
          <div data-reveal className="absolute top-4 sm:top-8 right-4 sm:right-8 z-10 flex flex-col gap-2">
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white bg-navy/80 backdrop-blur-sm px-4 py-2 inline-block">Brescia ~25 min</span>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white bg-navy/80 backdrop-blur-sm px-4 py-2 inline-block">Bergamo ~30 min</span>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white bg-navy/80 backdrop-blur-sm px-4 py-2 inline-block">Milano ~1h15</span>
          </div>
        </div>

        {/* Text — LEFT side */}
        <div className="lg:col-span-5 lg:col-start-1 lg:order-1 px-5 sm:px-8 lg:pl-12 lg:pr-0 py-12 sm:py-16 lg:py-0 lg:flex lg:flex-col lg:justify-center">
          <div className="lg:pr-8 lg:py-20">
            <div data-reveal className="w-20 h-0.5 bg-gold mb-8" />

            <p data-reveal className="text-base sm:text-lg leading-relaxed text-gray-600 mb-5">
              Iseo è la meta turistica principale del Lago d'Iseo, adagiata tra il lago, le colline della
              Franciacorta e la Riserva Naturale delle Torbiere del Sebino. <strong className="text-navy">Il Bruco è nel cuore del lungolago</strong>, il punto di partenza ideale.
            </p>
            <p data-reveal className="text-base sm:text-lg leading-relaxed text-gray-500 mb-10">
              Il posto perfetto per una pausa pranzo, un aperitivo al tramonto,
              una cena romantica vista lago o un pranzo di gruppo.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {attractions.map((a) => (
                <div key={a.title} data-attraction className="border border-navy/8 p-4 sm:p-5 hover:border-teal-300 transition-colors duration-500">
                  <a.icon className="w-5 h-5 text-teal-500 mb-3" />
                  <h3 className="font-semibold text-navy text-sm mb-1">{a.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
