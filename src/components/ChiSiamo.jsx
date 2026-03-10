import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import verandaImg from '../assets/foto/foto-6.webp'

export default function ChiSiamo() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })

      const imgWrap = sectionRef.current.querySelector('[data-img-reveal]')
      if (imgWrap) {
        gsap.fromTo(imgWrap, { clipPath: 'inset(0 100% 0 0)' }, {
          clipPath: 'inset(0 0% 0 0)', duration: 1.8, ease: 'expo.inOut',
          scrollTrigger: { trigger: imgWrap, start: 'top 80%', toggleActions: 'play none none none' },
        })
      }

      const bigText = sectionRef.current.querySelector('[data-big-text]')
      if (bigText) {
        gsap.fromTo(bigText, { y: 100, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: bigText, start: 'top 90%', toggleActions: 'play none none none' },
        })
      }

      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el, i) => {
        gsap.fromTo(el, { y: 70, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          delay: i * 0.05,
        })
      })

      const badge = sectionRef.current.querySelector('[data-badge]')
      if (badge) {
        gsap.fromTo(badge, { x: 80, opacity: 0, rotation: 3 }, {
          x: 0, opacity: 1, rotation: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: badge, start: 'top 90%', toggleActions: 'play none none none' },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" className="relative overflow-hidden bg-white">
      <div className="pt-12 md:pt-0 pb-20 md:pb-32">

        {/* Giant overlapping section title */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            <div className="lg:col-span-7 relative">
              <div data-img-reveal className="relative overflow-hidden h-[55vh] sm:h-[65vh] lg:h-[85vh]">
                <img
                  ref={imgRef}
                  src={verandaImg}
                  alt="La veranda del Bruco con vista lago"
                  title="Veranda panoramica del ristorante Il Bruco"
                  loading="lazy"
                  width={800}
                  height={700}
                  className="w-full h-[130%] object-cover will-change-transform"
                />
              </div>

              {/* GIANT text overlapping the photo from below */}
              <div data-big-text className="absolute -bottom-[4vw] sm:-bottom-[5vw] left-0 right-0 lg:-right-[40%] z-20 pointer-events-none select-none">
                <h2 className="font-display text-[16vw] sm:text-[13vw] lg:text-[10vw] font-bold leading-[0.85] tracking-[-0.04em] text-navy">
                  <span className="block pl-4 sm:pl-8 lg:pl-12">Chi</span>
                  <span className="block pl-[15vw] sm:pl-[20vw] text-teal-500">Siamo</span>
                </h2>
              </div>

              <div data-badge className="absolute top-6 sm:top-10 right-4 sm:right-8 lg:-right-8 z-20 bg-navy text-white px-6 sm:px-8 py-5 sm:py-6">
                <div className="font-display text-5xl sm:text-6xl font-bold leading-none">45<span className="text-teal-300">+</span></div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40 mt-1.5">Anni di storia</div>
              </div>
            </div>

            {/* Text block — pushed down to make room for the giant title */}
            <div className="lg:col-span-5 lg:-ml-12 relative z-10 px-5 sm:px-8 lg:px-0 lg:pr-8 pt-[12vw] sm:pt-[10vw] lg:pt-[14vw]">
              <div className="lg:bg-white lg:pl-16 lg:py-12">
                <div data-reveal>
                  <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-teal-500">La nostra storia</span>
                </div>

                <div data-reveal className="w-20 h-0.5 bg-gold mb-8 mt-4" />

                <p data-reveal className="text-base sm:text-lg leading-relaxed text-gray-600 mb-5">
                  <strong className="text-navy">Il Bruco è sul lungolago di Iseo dal 1980.</strong> Oltre quarantacinque anni
                  a servire piatti di pesce fresco, pizza e cucina italiana affacciati direttamente sull'acqua del lago.
                </p>
                <p data-reveal className="text-base sm:text-lg leading-relaxed text-gray-500 mb-5">
                  L'edificio che ci ospita è un palazzo storico posto a metà della passeggiata sul lungolago,
                  nel cuore di Iseo. Da qui partono i battelli per Monte Isola, gli itinerari enogastronomici
                  in Franciacorta e le escursioni verso la Riserva Naturale delle Torbiere del Sebino.
                </p>
                <p data-reveal className="text-base sm:text-lg leading-relaxed text-gray-500 mb-10">
                  Gestione partenopea di nascita, bresciana di adozione: la passione per il pesce, l'accoglienza
                  e il fare bene in cucina sono nel nostro DNA.{' '}
                  <em className="text-teal-600 font-medium not-italic">Farvi sentire a casa, con vista lago.</em>
                </p>

                <div data-reveal className="flex flex-wrap gap-2">
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-navy/40 border border-navy/10 px-4 py-2">Fondato nel 1980</span>
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-navy/40 border border-navy/10 px-4 py-2 mt-2">Gestione familiare</span>
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-navy/40 border border-navy/10 px-4 py-2">Palazzo storico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
