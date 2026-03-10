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
      // Title with skew
      const bigTitle = sectionRef.current.querySelector('[data-events-title]')
      if (bigTitle) {
        gsap.fromTo(bigTitle, { y: 150, opacity: 0, skewY: -4 }, {
          y: 0, opacity: 1, skewY: 0, duration: 1.8, ease: 'expo.out',
          scrollTrigger: { trigger: bigTitle, start: 'top 95%', toggleActions: 'play none none none' },
        })
      }

      // Event cards — cinematic entrances with clip-path and scale
      const card1 = sectionRef.current.querySelector('[data-event-1]')
      const card2 = sectionRef.current.querySelector('[data-event-2]')
      const card3 = sectionRef.current.querySelector('[data-event-3]')

      if (card1) {
        gsap.fromTo(card1,
          { y: 150, opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' },
          { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.out',
            scrollTrigger: { trigger: card1, start: 'top 90%', toggleActions: 'play none none none' } }
        )
      }
      if (card2) {
        gsap.fromTo(card2,
          { x: 100, y: 60, opacity: 0, scale: 0.9, rotation: 3 },
          { x: 0, y: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: card2, start: 'top 92%', toggleActions: 'play none none none' } }
        )
      }
      if (card3) {
        gsap.fromTo(card3,
          { x: -80, y: 80, opacity: 0, scale: 0.9, rotation: -2 },
          { x: 0, y: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.4, ease: 'power3.out',
            scrollTrigger: { trigger: card3, start: 'top 92%', toggleActions: 'play none none none' } }
        )
      }

      // Reveal with blur
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0, filter: 'blur(6px)' }, {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="eventi" className="relative bg-navy overflow-hidden">

      <div className="relative z-10 pt-20 md:pt-32 pb-16 md:pb-24">

        {/* GIANT overlapping section title */}
        <div data-events-title className="px-4 sm:px-8 lg:px-12 mb-6 md:mb-10 text-right">
          <span data-reveal className="font-mono text-[11px] tracking-[0.4em] uppercase text-teal-300 block mb-4">Vivi l'esperienza</span>
          <h2 className="font-display text-[14vw] sm:text-[11vw] lg:text-[8vw] font-bold leading-[0.82] tracking-[-0.04em]">
            <span className="block text-white">Eventi &</span>
            <span className="block text-navy">Serate</span>
          </h2>
        </div>

        {/* Events — cards with GIANT text overlapping the images */}
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0">

            {/* Paella — HUGE, with giant overlapping text */}
            <div data-event-1 className="lg:col-span-9 group relative overflow-visible">
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
                <span className="absolute top-4 sm:top-6 left-4 sm:left-8 font-mono text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-3 py-1.5">Signature</span>
              </div>
              {/* GIANT overlapping title */}
              <div className="relative z-10 -mt-[6vw] sm:-mt-[5vw] pl-4 sm:pl-6 pointer-events-none">
                <h3 className="font-display text-[8vw] sm:text-[6vw] lg:text-[4.5vw] text-white font-bold leading-[0.85] tracking-[-0.03em] drop-shadow-lg">
                  Paella &<br /><span className="text-gold/80">Sangria</span>
                </h3>
              </div>
              <p data-reveal className="text-white/40 text-base max-w-lg mt-4 pl-4 sm:pl-6">
                Paella preparata al momento con frutti di mare freschi, sangria a volontà e musica dal vivo. Un'esperienza che sa di Mediterraneo.
              </p>
            </div>

            {/* Musica dal Vivo — overlaps Paella */}
            <div data-event-2 className="lg:col-span-5 lg:col-start-8 lg:-mt-40 relative z-10 group overflow-visible">
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
              </div>
              {/* Overlapping title */}
              <div className="relative z-10 -mt-8 sm:-mt-12 pl-4 sm:pl-5">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-[0.85] drop-shadow-lg">Musica<br />dal Vivo</h3>
                <p className="text-white/40 text-sm sm:text-base mt-3">Serate con musica live sulla veranda vista lago.</p>
              </div>
            </div>

            {/* Eventi Privati */}
            <div data-event-3 className="lg:col-span-6 lg:col-start-2 lg:mt-10 group relative overflow-visible">
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
              </div>
              <div className="relative z-10 -mt-8 sm:-mt-10 pl-4 sm:pl-5">
                <h3 className="font-display text-3xl sm:text-4xl text-white font-bold leading-[0.85] drop-shadow-lg">Eventi Privati</h3>
                <p className="text-white/40 text-sm sm:text-base mt-3">Compleanni, anniversari, cene aziendali e occasioni speciali.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 md:mt-20 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center sm:justify-end gap-4">
          <a
            href="https://booking.ilbruco.it"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-teal-500 text-white px-10 py-5 text-base font-semibold overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10">Prenota per un evento</span>
            <div className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">Prenota per un evento</span>
          </a>
          <a
            href="https://www.instagram.com/ilbrucoiseo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white text-sm font-mono tracking-wider uppercase border-b border-white/10 hover:border-white/40 pb-1 transition-all duration-500"
          >
            Segui gli eventi su Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
