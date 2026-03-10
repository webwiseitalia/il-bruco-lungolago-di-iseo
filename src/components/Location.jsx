import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'
import verandaModerna from '../assets/foto/foto-6.webp'
import salaInterna from '../assets/foto/foto-11.webp'
import saletta from '../assets/foto/foto-10.webp'
import verandaSera from '../assets/foto/foto-13.webp'

const spaces = [
  { img: verandaModerna, title: 'Veranda sul Lago', seats: '~120', desc: 'Panorama a 180° sul lago. Vetrate che scompaiono in estate, riscaldamento in inverno.', features: ['Vista lago 180°', 'Tutto l\'anno', 'Vetrate apribili'], alt: 'Veranda moderna con vista panoramica sul Lago d Iseo' },
  { img: salaInterna, title: 'Sala Interna', seats: '~80', desc: 'Travi in legno e pietra a vista. Aria condizionata e finestre panoramiche sul lungolago.', features: ['Aria condizionata', 'Vista lungolago', 'Palazzo storico'], alt: 'Sala interna con travi in legno e lampadari' },
  { img: saletta, title: 'Saletta Riservata', seats: '~80', desc: 'Ambiente raccolto e intimo, soffitti a volta. Ideale per cene riservate e occasioni speciali.', features: ['Ambiente intimo', 'Soffitti a volta', 'Cene private'], alt: 'Saletta con soffitti a volta e tavoli apparecchiati' },
]

export default function Location() {
  const sectionRef = useRef(null)
  const heroImgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroImgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: heroImgRef.current?.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      })

      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })

      const spaceImgs = sectionRef.current.querySelectorAll('[data-space-img]')
      spaceImgs.forEach((img, i) => {
        const clipStart = i % 2 === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)'
        gsap.fromTo(img, { clipPath: clipStart }, {
          clipPath: 'inset(0 0% 0 0%)', duration: 1.5, ease: 'expo.inOut',
          scrollTrigger: { trigger: img, start: 'top 82%', toggleActions: 'play none none none' },
        })
      })

      const bigText = sectionRef.current.querySelector('[data-location-title]')
      if (bigText) {
        gsap.fromTo(bigText, { y: 80, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: bigText, start: 'top 92%', toggleActions: 'play none none none' },
        })
      }

      const spaceTexts = sectionRef.current.querySelectorAll('[data-space-text]')
      spaceTexts.forEach((el) => {
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="location" className="relative bg-white overflow-hidden">

      {/* HERO — full-bleed image with GIANT overlapping title */}
      <div className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden">
        <img
          ref={heroImgRef}
          src={verandaSera}
          alt="La veranda piena di ospiti durante una serata"
          title="Serata nella veranda del ristorante Il Bruco"
          loading="lazy"
          width={1200}
          height={700}
          className="w-full h-[125%] object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

        {/* Small info overlay */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:left-12 z-10">
          <div data-reveal className="flex items-center gap-2 text-teal-300 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase">Via Lungolago Marconi 20/A</span>
          </div>
        </div>

        {/* Counter */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:right-14 text-right">
          <div className="font-display text-5xl sm:text-7xl text-white/15 font-bold">280+</div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/25">Posti a sedere</div>
        </div>
      </div>

      {/* GIANT overlapping title — bleeds UP into the hero image */}
      <div data-location-title className="relative z-10 -mt-[10vw] sm:-mt-[8vw] lg:-mt-[7vw] px-4 sm:px-8 lg:px-12 pointer-events-none mb-16 md:mb-24 text-center">
        <h2 className="font-display text-[15vw] sm:text-[12vw] lg:text-[9vw] font-bold leading-[0.85] tracking-[-0.04em]">
          <span className="block text-white drop-shadow-lg">La</span>
          <span className="block text-navy">Location</span>
        </h2>
      </div>

      {/* SPACES */}

      {/* Space 1 — Image left, text overlapping right */}
      <div className="relative mb-4 md:mb-0 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">
          <div className="lg:col-span-7 lg:col-start-1">
            <div data-space-img className="relative overflow-hidden h-[300px] sm:h-[380px] md:h-[500px]">
              <img src={spaces[0].img} alt={spaces[0].alt} title={spaces[0].title} loading="lazy" width={800} height={500} className="w-full h-full object-cover" />
            </div>
          </div>
          <div data-space-text className="lg:col-span-5 lg:-ml-12 relative z-10 bg-cream px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-14">
            <div className="font-display text-[3rem] sm:text-[4rem] font-bold leading-[0.85] tracking-[-0.03em] text-navy/8 mb-4">01</div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-navy/30 mb-2">{spaces[0].seats} posti</div>
            <h4 className="font-display text-2xl sm:text-3xl text-navy font-bold mb-3">{spaces[0].title}</h4>
            <p className="text-gray-500 text-base leading-relaxed mb-5">{spaces[0].desc}</p>
            <div className="flex flex-wrap gap-2">
              {spaces[0].features.map((f) => (
                <span key={f} className="font-mono text-[11px] tracking-[0.12em] uppercase text-teal-600 border border-teal-200 px-3 py-1">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Space 2 — Text left, Image right, GIANT number overlapping */}
      <div className="relative mb-4 md:mb-0 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div data-space-text className="lg:col-span-4 lg:col-start-1 py-8 sm:py-10 lg:py-20 order-2 lg:order-1">
            <div className="font-display text-[3rem] sm:text-[4rem] font-bold leading-[0.85] tracking-[-0.03em] text-navy/8 mb-4">02</div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-navy/30 mb-2">{spaces[1].seats} posti</div>
            <h4 className="font-display text-2xl sm:text-3xl text-navy font-bold mb-3">{spaces[1].title}</h4>
            <p className="text-gray-500 text-base leading-relaxed mb-5">{spaces[1].desc}</p>
            <div className="flex flex-wrap gap-2">
              {spaces[1].features.map((f) => (
                <span key={f} className="font-mono text-[11px] tracking-[0.12em] uppercase text-teal-600 border border-teal-200 px-3 py-1">{f}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2 relative">
            <div data-space-img className="relative overflow-hidden h-[300px] sm:h-[380px] md:h-[450px]">
              <img src={spaces[1].img} alt={spaces[1].alt} title={spaces[1].title} loading="lazy" width={800} height={450} className="w-full h-full object-cover" />
            </div>
            {/* Giant overlapping text on image */}
            <div className="absolute -bottom-6 sm:-bottom-10 right-4 sm:right-8 pointer-events-none select-none z-10">
              <span className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] font-bold leading-none tracking-[-0.04em] text-navy/5">Sala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Space 3 — Full-width with text overlay */}
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div data-space-img className="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[550px]">
          <img src={spaces[2].img} alt={spaces[2].alt} title={spaces[2].title} loading="lazy" width={1200} height={550} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20" />
          <div data-space-text className="absolute bottom-0 left-0 pl-6 sm:pl-10 lg:pl-14 pb-8 sm:pb-12 max-w-md">
            <div className="font-display text-[3rem] sm:text-[4rem] font-bold leading-[0.85] tracking-[-0.03em] text-white/20 mb-4">03</div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/70 mb-2">{spaces[2].seats} posti</div>
            <h4 className="font-display text-2xl sm:text-3xl text-white font-bold mb-3">{spaces[2].title}</h4>
            <p className="text-white/80 text-base leading-relaxed mb-5">{spaces[2].desc}</p>
            <div className="flex flex-wrap gap-2">
              {spaces[2].features.map((f) => (
                <span key={f} className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/80 border border-white/30 px-3 py-1">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
