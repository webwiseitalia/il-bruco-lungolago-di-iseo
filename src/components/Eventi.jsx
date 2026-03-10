import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import paellaImg from '../assets/foto/foto-15.webp'
import eventiImg from '../assets/foto/foto-17.webp'
import verandaImg from '../assets/foto/foto-13.webp'

export default function Eventi() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background text scroll
      const bgText = sectionRef.current.querySelector('[data-bg-text]')
      if (bgText) {
        gsap.to(bgText, {
          xPercent: -40,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
        })
      }

      // Cards — each with unique entrance
      const card1 = sectionRef.current.querySelector('[data-event-1]')
      const card2 = sectionRef.current.querySelector('[data-event-2]')
      const card3 = sectionRef.current.querySelector('[data-event-3]')

      if (card1) {
        gsap.fromTo(card1,
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: card1, start: 'top 90%', toggleActions: 'play none none none' } }
        )
      }
      if (card2) {
        gsap.fromTo(card2,
          { x: 80, y: 60, opacity: 0, rotation: 2 },
          { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1.3, ease: 'power3.out',
            scrollTrigger: { trigger: card2, start: 'top 92%', toggleActions: 'play none none none' } }
        )
      }
      if (card3) {
        gsap.fromTo(card3,
          { x: -60, y: 80, opacity: 0, rotation: -1.5 },
          { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1.3, ease: 'power3.out',
            scrollTrigger: { trigger: card3, start: 'top 92%', toggleActions: 'play none none none' } }
        )
      }

      // Text reveals
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="eventi" className="relative bg-navy overflow-hidden">
      {/* Background text — massive, bleeds */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 overflow-hidden pointer-events-none select-none">
        <div data-bg-text className="whitespace-nowrap font-display text-[10rem] sm:text-[18rem] md:text-[25rem] text-white/[0.02] font-bold leading-none">
          Eventi &middot; Serate &middot; Eventi &middot; Serate
        </div>
      </div>

      {/* Content — mixed padding, tight right */}
      <div className="relative z-10 pt-20 md:pt-32 pb-16 md:pb-24">

        {/* Header — centered this time (different from all other sections) */}
        <div className="text-center px-5 sm:px-10 mb-16 md:mb-24">
          <span data-reveal className="font-mono text-[9px] tracking-[0.4em] uppercase text-teal-300">Vivi l'esperienza</span>
          <h2 data-reveal className="font-display fluid-lg text-white font-bold mt-3 mx-auto">
            Eventi &<br />Serate Speciali
          </h2>
          <div data-reveal className="w-20 h-0.5 bg-gold mt-4 mx-auto" />
          <p data-reveal className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mt-5 leading-relaxed">
            Non solo ristorante: Il Bruco è il luogo dove nascono ricordi.
          </p>
        </div>

        {/* Events — OVERLAPPING SCATTERED cards, not a clean grid */}
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0">

            {/* Paella — HUGE, spans 9 cols, pushed left */}
            <div data-event-1 className="lg:col-span-9 group relative overflow-hidden">
              <div className="relative h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden">
                <img
                  src={paellaImg}
                  alt="Paella di mare con gamberi e cozze"
                  title="Serate Paella & Sangria"
                  loading="lazy"
                  width={900}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <span className="absolute top-4 sm:top-6 left-4 sm:left-8 font-mono text-[9px] tracking-[0.25em] uppercase bg-gold text-white px-3 py-1.5">Signature</span>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">Serate Paella & Sangria</h3>
                  <p className="text-white/50 text-sm sm:text-base max-w-lg">
                    Paella preparata al momento con frutti di mare freschi, sangria a volontà e musica dal vivo. Un'esperienza che sa di Mediterraneo.
                  </p>
                </div>
              </div>
            </div>

            {/* Musica dal Vivo — overlaps Paella, pushed up with negative margin */}
            <div data-event-2 className="lg:col-span-5 lg:col-start-8 lg:-mt-40 relative z-10 group overflow-hidden">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                <img
                  src={verandaImg}
                  alt="Serata con ospiti nella veranda sul lago"
                  title="Musica dal Vivo"
                  loading="lazy"
                  width={500}
                  height={350}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-1">Musica dal Vivo</h3>
                  <p className="text-white/50 text-xs sm:text-sm">Serate con musica live sulla veranda vista lago.</p>
                </div>
              </div>
            </div>

            {/* Eventi Privati — offset left, different row, vertical gap */}
            <div data-event-3 className="lg:col-span-6 lg:col-start-2 lg:mt-6 group relative overflow-hidden">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                <img
                  src={eventiImg}
                  alt="Allestimento floreale elegante per evento privato"
                  title="Eventi Privati"
                  loading="lazy"
                  width={600}
                  height={350}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-1">Eventi Privati</h3>
                  <p className="text-white/50 text-xs sm:text-sm">Compleanni, anniversari, cene aziendali e occasioni speciali.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs — far right this time */}
        <div className="mt-12 md:mt-20 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center sm:justify-end gap-4">
          <a
            href="https://booking.ilbruco.it"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-teal-500 text-white px-8 py-4 text-sm font-semibold overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10">Prenota per un evento</span>
            <div className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">Prenota per un evento</span>
          </a>
          <a
            href="https://www.instagram.com/ilbrucoiseo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white text-xs font-mono tracking-wider uppercase border-b border-white/10 hover:border-white/40 pb-1 transition-all duration-500"
          >
            Segui gli eventi su Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
