import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroMenuImg from '../assets/foto/foto-13.webp'
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
      // Hero dish — cinematic zoom-out reveal
      const heroDish = sectionRef.current.querySelector('[data-hero-dish]')
      if (heroDish) {
        gsap.fromTo(heroDish,
          { clipPath: 'inset(20% 20% 20% 20%)', scale: 1.15 },
          {
            clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 2, ease: 'expo.inOut',
            scrollTrigger: { trigger: heroDish, start: 'top 80%', toggleActions: 'play none none none' },
          }
        )
      }

      // Big title with skew animation
      const bigTitle = sectionRef.current.querySelector('[data-big-title]')
      if (bigTitle) {
        gsap.fromTo(bigTitle, { y: 120, opacity: 0, skewY: 4 }, {
          y: 0, opacity: 1, skewY: 0, duration: 1.6, ease: 'expo.out',
          scrollTrigger: { trigger: bigTitle, start: 'top 92%', toggleActions: 'play none none none' },
        })
      }

      // Dish cards — staggered scale + fade with alternating directions
      const items = sectionRef.current.querySelectorAll('[data-dish]')
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 80, opacity: 0, scale: 0.92, rotateY: i % 2 === 0 ? -5 : 5 },
          {
            y: 0, opacity: 1, scale: 1, rotateY: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none none' },
            delay: i * 0.08,
          }
        )
      })

      // Reveal elements with blur
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0, filter: 'blur(6px)' }, {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="menu" className="relative bg-cream overflow-hidden texture-lines">
      <div className="relative z-10 pt-20 md:pt-32 pb-16 md:pb-24">

        {/* HERO DISH — full bleed with GIANT overlapping title */}
        <div data-hero-dish className="relative -mx-0 mb-0">
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] overflow-hidden group">
            <img src={heroMenuImg} alt="La veranda del ristorante Il Bruco piena di ospiti" title="Serata al ristorante Il Bruco" loading="lazy" width={1400} height={700} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute top-4 sm:top-6 left-4 sm:left-8 lg:left-12 font-mono text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-3 py-1.5">Il Nostro Ristorante</span>
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
            <p data-reveal className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
              Specialità di pesce fresco, pizza cotta a fuoco vivo e i sapori autentici della cucina italiana.
            </p>
            <div data-reveal className="flex flex-wrap gap-2">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-teal-600 bg-teal-500/10 px-4 py-2">Pesce fresco</span>
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-gold-700 bg-gold/10 px-4 py-2">Pizza a pellet</span>
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-navy/50 bg-navy/5 px-4 py-2">Franciacorta</span>
            </div>
          </div>
        </div>

        {/* Dishes grid — clean 3-column layout */}
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {dishes.slice(1).map((dish) => (
              <div key={dish.title} data-dish className="group relative overflow-hidden w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
                <div className="relative h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.alt}
                    title={dish.title}
                    loading="lazy"
                    width={500}
                    height={380}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {dish.badge && (
                    <span className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.2em] uppercase bg-gold text-white px-3 py-1">{dish.badge}</span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-2">{dish.title}</h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-20 px-4 sm:px-8 lg:px-12">
          <a
            href="https://booking.ilbruco.it"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-navy text-white px-10 py-5 text-base font-semibold overflow-hidden transition-all duration-500"
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
