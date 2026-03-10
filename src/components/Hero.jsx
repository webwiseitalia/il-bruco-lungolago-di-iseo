import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImg from '../assets/foto/foto-14.webp'

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on image
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

      // Entry timeline
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo(imgRef.current, { scale: 1.4 }, { scale: 1, duration: 2.5, ease: 'power3.out' })

      // Headline chars — staggered from bottom
      const headlineEls = contentRef.current?.querySelectorAll('[data-hero-line]') || []
      tl.fromTo(
        headlineEls,
        { y: 120, opacity: 0, rotationX: 40 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.4, ease: 'expo.out', stagger: 0.15 },
        0.5
      )

      // Other elements with different timing
      const subtleEls = contentRef.current?.querySelectorAll('[data-hero-fade]') || []
      tl.fromTo(
        subtleEls,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 },
        1.2
      )

      // The year block slides in from left
      const yearEl = sectionRef.current.querySelector('[data-year]')
      if (yearEl) {
        tl.fromTo(yearEl, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.4, ease: 'expo.out' }, 0.8)
      }

      // Scroll indicator fades
      const scrollInd = sectionRef.current.querySelector('[data-scroll-ind]')
      if (scrollInd) {
        tl.fromTo(scrollInd, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, 2)
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      </div>

      {/* Content — extreme bottom-left, text hugs the edge */}
      <div ref={contentRef} className="relative z-10 h-full flex flex-col justify-end">
        {/* The headline block — pushed far left, no container */}
        <div className="pl-4 sm:pl-8 lg:pl-12 pb-24 sm:pb-32 lg:pb-20">
          <div data-hero-fade className="mb-4">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-gold/80">
              Lungolago di Iseo — Dal 1980
            </span>
          </div>

          {/* Headline — massive, irregular line breaks, overlapping the year */}
          <h1 className="font-display fluid-hero text-white font-bold relative">
            <span data-hero-line className="block" style={{ perspective: '800px' }}>La miglior</span>
            <span data-hero-line className="block ml-[5vw] sm:ml-[8vw]" style={{ perspective: '800px' }}>
              vista sul{' '}
              <em className="text-teal-300 not-italic">Lago</em>
            </span>
            <span data-hero-line className="block text-[0.6em] text-white/40 ml-[2vw]" style={{ perspective: '800px' }}>
              d'Iseo
            </span>
          </h1>

          {/* Tagline — offset far right */}
          <p data-hero-fade className="mt-6 sm:mt-8 ml-[10vw] sm:ml-[15vw] lg:ml-[20vw] max-w-xs sm:max-w-sm text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            Pesce fresco, pizza cotta a fuoco vivo, vini di Franciacorta e tramonti che non dimentichi.
          </p>

          {/* CTA — shifted position */}
          <div data-hero-fade className="mt-6 sm:mt-8 ml-[10vw] sm:ml-[15vw] lg:ml-[20vw] flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://booking.ilbruco.it"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-teal-500 text-white px-7 py-3.5 text-sm font-semibold overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">Prenota il tuo tavolo</span>
              <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">Prenota il tuo tavolo</span>
            </a>
            <a
              href="#menu"
              className="text-white/40 hover:text-white text-xs font-mono tracking-wider uppercase border-b border-white/15 hover:border-white/50 pb-1 transition-all duration-500"
            >
              Scopri il menu
            </a>
          </div>
        </div>
      </div>

      {/* Year block — overlaps content, bottom-right, massive */}
      <div data-year className="absolute bottom-0 right-0 pr-3 sm:pr-6 lg:pr-10">
        <div className="font-display text-[12rem] sm:text-[18rem] lg:text-[26rem] text-white/[0.04] font-bold leading-[0.75] select-none pointer-events-none text-right">
          80
        </div>
      </div>

      {/* Scroll indicator — off-center left */}
      <div data-scroll-ind className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 lg:right-14 flex flex-col items-center gap-2">
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/25 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
