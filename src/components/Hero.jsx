import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImg from '../assets/foto/foto-13.webp'

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })

      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo(imgRef.current, { scale: 1.4 }, { scale: 1, duration: 2.5, ease: 'power3.out' })

      const headlineEls = contentRef.current?.querySelectorAll('[data-hero-line]') || []
      tl.fromTo(
        headlineEls,
        { y: 150, opacity: 0, rotationX: 50 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.6, ease: 'expo.out', stagger: 0.12 },
        0.4
      )

      const subtleEls = contentRef.current?.querySelectorAll('[data-hero-fade]') || []
      tl.fromTo(
        subtleEls,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 },
        1.4
      )

      const scrollInd = sectionRef.current.querySelector('[data-scroll-ind]')
      if (scrollInd) {
        tl.fromTo(scrollInd, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, 2.2)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={heroImg}
          alt="La veranda del Bruco affacciata sul Lago d'Iseo"
          title="La veranda del ristorante Il Bruco con vista sul Lago d'Iseo"
          loading="eager"
          width={1920}
          height={1080}
          className="w-full h-[130%] object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
      </div>

      {/* Giant overlapping text — the text IS the design */}
      <div ref={contentRef} className="relative z-10 h-full flex flex-col justify-end">
        <div className="pb-8 sm:pb-12 lg:pb-16">
          <div data-hero-fade className="pl-4 sm:pl-8 lg:pl-12 mb-2 sm:mb-4">
            <span className="font-mono text-sm sm:text-base tracking-[0.3em] uppercase text-gold drop-shadow-lg">
              Lungolago di Iseo — Dal 1980
            </span>
          </div>

          {/* Headline — MASSIVE, bleeds across the entire image */}
          <h1 className="font-display text-white font-bold leading-[0.82] tracking-[-0.05em] relative">
            <span data-hero-line className="block text-[15vw] sm:text-[13vw] lg:text-[11vw] pl-4 sm:pl-8 lg:pl-12" style={{ perspective: '800px' }}>
              La miglior
            </span>
            <span data-hero-line className="block text-[18vw] sm:text-[15vw] lg:text-[13vw] pl-[8vw] sm:pl-[12vw]" style={{ perspective: '800px' }}>
              vista sul
            </span>
            <span data-hero-line className="block text-[22vw] sm:text-[18vw] lg:text-[16vw] text-right pr-4 sm:pr-8 lg:pr-12 text-teal-300/90" style={{ perspective: '800px' }}>
              Lago
            </span>
          </h1>

          {/* Info row — under the giant text */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-6 sm:mt-8 px-4 sm:px-8 lg:px-12">
            <div data-hero-fade>
              <p className="text-white/40 text-sm sm:text-base max-w-xs leading-relaxed font-light">
                Pesce fresco, pizza a fuoco vivo e tramonti che non dimentichi.
              </p>
            </div>
            <div data-hero-fade className="flex items-center gap-4">
              <a
                href="https://booking.ilbruco.it"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-teal-500 text-white px-9 py-4 text-base font-semibold overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10">Prenota</span>
                <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">Prenota</span>
              </a>
              <a
                href="#menu"
                className="text-white/40 hover:text-white text-sm font-mono tracking-wider uppercase border-b border-white/15 hover:border-white/50 pb-1 transition-all duration-500"
              >
                Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div data-scroll-ind className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 lg:right-14 flex flex-col items-center gap-2">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/25 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
