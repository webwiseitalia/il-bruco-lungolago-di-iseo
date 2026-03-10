import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import spaghettiImg from '../assets/foto/foto-5.webp'
import fritturaImg from '../assets/foto/foto-1.webp'
import pizzaImg from '../assets/foto/foto-3.webp'
import paellaImg from '../assets/foto/foto-15.webp'
import ravioliImg from '../assets/foto/foto-16.webp'
import salmonImg from '../assets/foto/foto-7.webp'

const dishes = [
  { img: spaghettiImg, title: 'Spaghetti allo Scoglio', desc: 'Il nostro piatto simbolo. Generosi di frutti di mare freschi, serviti con il bavaglione anti-macchia.', badge: 'Piatto Simbolo', alt: 'Spaghetti allo scoglio con frutti di mare' },
  { img: fritturaImg, title: 'Frittura Mista di Pesce', desc: 'Calamari, gamberi e pesce misto fritti alla perfezione. Croccanti fuori, morbidi dentro.', alt: 'Frittura mista di pesce' },
  { img: pizzaImg, title: 'Pizza a Fuoco Vivo', desc: 'Cotta a pellet, impasto ben lievitato, cottura perfetta. Anche pizza fritta e calzone.', alt: 'Pizza margherita cotta a fuoco vivo' },
  { img: paellaImg, title: 'Paella & Sangria', desc: 'Il nostro evento signature. Paella preparata al momento con frutti di mare e sangria a volontà.', badge: 'Evento Speciale', alt: 'Paella di mare con cozze gamberi e vongole' },
  { img: ravioliImg, title: 'Primi di Pesce', desc: 'Ravioli, paccheri e pasta fresca con sugo di pesce di mare e di lago.', alt: 'Ravioli con gamberi e pomodorini' },
  { img: salmonImg, title: 'Pesce di Lago e Mare', desc: 'Salmerino, agone, coda di rospo, polpo. Il meglio del lago e del mare in un piatto.', alt: 'Salmone con insalata e contorno' },
]

export default function MenuSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee text parallax
      const marquee = sectionRef.current.querySelector('[data-marquee]')
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -20,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
        })
      }

      // Hero dish — scale reveal
      const heroDish = sectionRef.current.querySelector('[data-hero-dish]')
      if (heroDish) {
        gsap.fromTo(heroDish,
          { clipPath: 'inset(15% 15% 15% 15%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut',
            scrollTrigger: { trigger: heroDish, start: 'top 80%', toggleActions: 'play none none none' },
          }
        )
      }

      // Scattered dishes — each with unique motion
      const items = sectionRef.current.querySelectorAll('[data-dish]')
      items.forEach((item, i) => {
        const directions = [
          { x: -80, y: 60, rotation: -3 },
          { x: 60, y: 80, rotation: 2 },
          { x: -40, y: 100, rotation: -1 },
          { x: 80, y: 40, rotation: 3 },
          { x: -60, y: 70, rotation: -2 },
        ]
        const d = directions[i % directions.length]
        gsap.fromTo(item,
          { x: d.x, y: d.y, opacity: 0, rotation: d.rotation },
          {
            x: 0, y: 0, opacity: 1, rotation: 0, duration: 1.3, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 92%', toggleActions: 'play none none none' },
          }
        )
      })

      // Tags slide from left
      const tags = sectionRef.current.querySelectorAll('[data-tag]')
      gsap.fromTo(tags, { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: tags[0]?.parentElement, start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Reveals
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="menu" className="relative bg-cream overflow-hidden">
      {/* Giant background marquee — sits higher */}
      <div className="absolute top-6 md:top-10 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div data-marquee className="whitespace-nowrap font-display text-[5rem] sm:text-[8rem] md:text-[12rem] text-navy/[0.025] font-bold leading-none" style={{ width: '200%' }}>
          Pesce fresco &middot; Pizza &middot; Franciacorta &middot; Pesce fresco &middot; Pizza &middot;
        </div>
      </div>

      {/* Tight left padding, wider right — asymmetric container */}
      <div className="relative z-10 pl-4 sm:pl-8 lg:pl-12 pr-5 sm:pr-10 lg:pr-20 pt-20 md:pt-32 pb-16 md:pb-24">

        {/* Header — pushed far right this time, different from ChiSiamo */}
        <div className="flex flex-col items-end text-right mb-10 md:mb-16 pr-0 lg:pr-8">
          <span data-reveal className="font-mono text-[9px] tracking-[0.4em] uppercase text-teal-500">La cucina</span>
          <h2 data-reveal className="font-display fluid-lg text-navy font-bold mt-3">
            Il Nostro<br />Menu
          </h2>
          <div data-reveal className="w-20 h-0.5 bg-gold mt-3 mb-5" />
          <p data-reveal className="text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed">
            Specialità di pesce fresco, pizza cotta a fuoco vivo e i sapori autentici della cucina italiana.
          </p>
        </div>

        {/* Category tags — scattered horizontally with different sizes */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 md:mb-20 ml-2 sm:ml-8 lg:ml-16">
          <span data-tag className="font-mono text-[9px] tracking-[0.12em] uppercase text-teal-600 bg-teal-500/10 px-4 py-2">Pesce fresco — Mare e lago</span>
          <span data-tag className="font-mono text-[9px] tracking-[0.12em] uppercase text-gold-700 bg-gold/10 px-4 py-2 mt-3 sm:mt-0">Pizza a pellet — Fuoco vivo</span>
          <span data-tag className="font-mono text-[9px] tracking-[0.12em] uppercase text-navy/50 bg-navy/5 px-4 py-2">Vini Franciacorta</span>
          <span data-tag className="font-mono text-[9px] tracking-[0.12em] uppercase text-gray-500 bg-gray-100 px-4 py-2 mt-2 sm:mt-0">Prezzo medio — 20-30€</span>
        </div>

        {/* HERO DISH — full bleed, massive, overlaps padding */}
        <div data-hero-dish className="relative -ml-4 sm:-ml-8 lg:-ml-12 mr-0 sm:-mr-10 lg:-mr-20 mb-6 md:mb-10">
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[65vh] overflow-hidden group">
            <img src={dishes[0].img} alt={dishes[0].alt} title={dishes[0].title} loading="lazy" width={1400} height={700} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute top-4 sm:top-6 left-4 sm:left-8 lg:left-12 font-mono text-[9px] tracking-[0.25em] uppercase bg-gold text-white px-3 py-1.5">{dishes[0].badge}</span>
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-12 pb-6 sm:pb-10">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-2">{dishes[0].title}</h3>
              <p className="text-white/60 text-sm sm:text-base max-w-lg">{dishes[0].desc}</p>
            </div>
          </div>
        </div>

        {/* Remaining dishes — BROKEN scattered layout, not a grid */}
        <div className="grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-5">
          {/* Dish 2 — spans 6 cols, offset down */}
          <div data-dish className="col-span-6 md:col-span-5 group relative overflow-hidden md:mt-8">
            <div className="relative h-[250px] sm:h-[320px] md:h-[400px] overflow-hidden">
              <img src={dishes[1].img} alt={dishes[1].alt} title={dishes[1].title} loading="lazy" width={500} height={400} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-1">{dishes[1].title}</h3>
                <p className="text-white/60 text-xs sm:text-sm max-w-xs">{dishes[1].desc}</p>
              </div>
            </div>
          </div>

          {/* Dish 3 — narrower, pushed up */}
          <div data-dish className="col-span-6 md:col-span-4 md:col-start-7 group relative overflow-hidden md:-mt-16">
            <div className="relative h-[250px] sm:h-[320px] md:h-[480px] overflow-hidden">
              <img src={dishes[2].img} alt={dishes[2].alt} title={dishes[2].title} loading="lazy" width={400} height={480} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-display text-xl text-white font-bold mb-1">{dishes[2].title}</h3>
                <p className="text-white/60 text-xs sm:text-sm">{dishes[2].desc}</p>
              </div>
            </div>
          </div>

          {/* Dish 4 (Paella) — offset right, medium */}
          <div data-dish className="col-span-6 md:col-span-3 md:col-start-12 group relative overflow-hidden md:-mt-24 hidden md:block">
            <div className="relative h-[350px] overflow-hidden">
              <img src={dishes[3].img} alt={dishes[3].alt} title={dishes[3].title} loading="lazy" width={300} height={350} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {dishes[3].badge && (
                <span className="absolute top-3 left-3 font-mono text-[8px] tracking-[0.2em] uppercase bg-gold text-white px-2 py-1">{dishes[3].badge}</span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg text-white font-bold mb-1">{dishes[3].title}</h3>
              </div>
            </div>
          </div>

          {/* Row 2 — wide panoramic + small */}
          <div data-dish className="col-span-6 md:col-span-8 group relative overflow-hidden mt-3 md:mt-6">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <img src={dishes[4].img} alt={dishes[4].alt} title={dishes[4].title} loading="lazy" width={800} height={300} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-1">{dishes[4].title}</h3>
                <p className="text-white/60 text-xs sm:text-sm max-w-sm">{dishes[4].desc}</p>
              </div>
            </div>
          </div>

          <div data-dish className="col-span-6 md:col-span-4 group relative overflow-hidden mt-3 md:mt-20">
            <div className="relative h-[200px] sm:h-[250px] md:h-[280px] overflow-hidden">
              <img src={dishes[5].img} alt={dishes[5].alt} title={dishes[5].title} loading="lazy" width={400} height={280} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-display text-xl text-white font-bold mb-1">{dishes[5].title}</h3>
                <p className="text-white/60 text-xs sm:text-sm">{dishes[5].desc}</p>
              </div>
            </div>
          </div>

          {/* Mobile: show Paella card */}
          <div data-dish className="col-span-6 md:hidden group relative overflow-hidden mt-3">
            <div className="relative h-[250px] overflow-hidden">
              <img src={dishes[3].img} alt={dishes[3].alt} title={dishes[3].title} loading="lazy" width={400} height={250} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 font-mono text-[8px] tracking-[0.2em] uppercase bg-gold text-white px-2 py-1">{dishes[3].badge}</span>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-xl text-white font-bold mb-1">{dishes[3].title}</h3>
                <p className="text-white/60 text-xs">{dishes[3].desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA — far left, counterbalancing the right-aligned header */}
        <div className="mt-12 md:mt-20">
          <a
            href="https://booking.ilbruco.it"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-navy text-white px-8 py-4 text-sm font-semibold overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10">Prenota e assaggia</span>
            <div className="absolute inset-0 bg-teal-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">Prenota e assaggia</span>
          </a>
        </div>
      </div>
    </section>
  )
}
