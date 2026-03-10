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

      const bigTitle = sectionRef.current.querySelector('[data-big-title]')
      if (bigTitle) {
        gsap.fromTo(bigTitle, { y: 80, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: bigTitle, start: 'top 92%', toggleActions: 'play none none none' },
        })
      }

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
      <div className="relative z-10 pt-20 md:pt-32 pb-16 md:pb-24">

        {/* HERO DISH — full bleed with GIANT overlapping title */}
        <div data-hero-dish className="relative -mx-0 mb-0">
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] overflow-hidden group">
            <img src={dishes[0].img} alt={dishes[0].alt} title={dishes[0].title} loading="lazy" width={1400} height={700} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute top-4 sm:top-6 left-4 sm:left-8 lg:left-12 font-mono text-[9px] tracking-[0.25em] uppercase bg-gold text-white px-3 py-1.5">{dishes[0].badge}</span>
          </div>

          {/* GIANT title that overlaps from the bottom of the hero dish */}
          <div data-big-title className="relative z-20 -mt-[8vw] sm:-mt-[7vw] lg:-mt-[6vw] px-4 sm:px-8 lg:px-12 pointer-events-none">
            <h2 className="font-display text-[14vw] sm:text-[11vw] lg:text-[9vw] font-bold leading-[0.85] tracking-[-0.04em]">
              <span className="block text-white">Il Nostro</span>
              <span className="block text-navy ml-[8vw] sm:ml-[12vw]">Menu</span>
            </h2>
          </div>
        </div>

        {/* Description — after the giant title */}
        <div className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12 mb-10 md:mb-16">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 max-w-5xl">
            <p data-reveal className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
              Specialità di pesce fresco, pizza cotta a fuoco vivo e i sapori autentici della cucina italiana.
            </p>
            <div data-reveal className="flex flex-wrap gap-2">
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-teal-600 bg-teal-500/10 px-4 py-2">Pesce fresco</span>
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-gold-700 bg-gold/10 px-4 py-2">Pizza a pellet</span>
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-navy/50 bg-navy/5 px-4 py-2">Franciacorta</span>
            </div>
          </div>
        </div>

        {/* Remaining dishes — broken grid with overlapping text */}
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-5">
            {/* Dish 2 — with overlapping title */}
            <div data-dish className="col-span-6 md:col-span-5 group relative overflow-visible md:mt-8">
              <div className="relative h-[250px] sm:h-[320px] md:h-[400px] overflow-hidden">
                <img src={dishes[1].img} alt={dishes[1].alt} title={dishes[1].title} loading="lazy" width={500} height={400} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="relative z-10 -mt-14 sm:-mt-16 pl-3 sm:pl-5">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-[0.9] mb-2 drop-shadow-lg">{dishes[1].title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm max-w-xs mt-3">{dishes[1].desc}</p>
              </div>
            </div>

            {/* Dish 3 — taller, title bleeds over top */}
            <div data-dish className="col-span-6 md:col-span-4 md:col-start-7 group relative overflow-visible md:-mt-8">
              <div className="font-display text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold leading-[0.85] tracking-[-0.03em] text-navy/10 mb-[-1.5rem] sm:mb-[-2rem] md:mb-[-2.5rem] relative z-10 pointer-events-none">Pizza</div>
              <div className="relative h-[250px] sm:h-[320px] md:h-[480px] overflow-hidden">
                <img src={dishes[2].img} alt={dishes[2].alt} title={dishes[2].title} loading="lazy" width={400} height={480} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="font-display text-xl text-white font-bold mb-1">{dishes[2].title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{dishes[2].desc}</p>
                </div>
              </div>
            </div>

            {/* Dish 4 (Paella) */}
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

            {/* Row 2 — wide panoramic with overlapping giant text + small */}
            <div data-dish className="col-span-6 md:col-span-8 group relative overflow-visible mt-3 md:mt-10">
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                <img src={dishes[4].img} alt={dishes[4].alt} title={dishes[4].title} loading="lazy" width={800} height={300} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              </div>
              {/* Giant overlapping text */}
              <div className="absolute -bottom-4 sm:-bottom-6 right-0 z-10 pointer-events-none">
                <span className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold leading-none tracking-[-0.04em] text-cream/80">Pesce</span>
              </div>
              <div className="relative z-20 -mt-10 sm:-mt-12 pl-4 sm:pl-6">
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-1 drop-shadow-lg">{dishes[4].title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm max-w-sm mt-2">{dishes[4].desc}</p>
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
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-20 px-4 sm:px-8 lg:px-12">
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
