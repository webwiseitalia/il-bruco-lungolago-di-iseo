import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Clock, Train, CreditCard, Wifi, Dog, Baby, Accessibility, Car } from 'lucide-react'

const services = [
  { icon: CreditCard, label: 'Carte di credito' },
  { icon: Wifi, label: 'Wi-Fi gratuito' },
  { icon: Dog, label: 'Animali ammessi' },
  { icon: Baby, label: 'Seggiolini bambini' },
  { icon: Accessibility, label: 'Accesso disabili' },
  { icon: Car, label: 'Parcheggio vicino' },
]

export default function Contatti() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
        })
      })

      const map = sectionRef.current.querySelector('[data-map]')
      if (map) {
        gsap.fromTo(map, { clipPath: 'inset(0 0 0 100%)' }, {
          clipPath: 'inset(0 0 0 0%)', duration: 1.6, ease: 'expo.inOut',
          scrollTrigger: { trigger: map, start: 'top 80%', toggleActions: 'play none none none' },
        })
      }

      const bigTitle = sectionRef.current.querySelector('[data-contatti-title]')
      if (bigTitle) {
        gsap.fromTo(bigTitle, { y: 80, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: bigTitle, start: 'top 92%', toggleActions: 'play none none none' },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contatti" className="relative bg-cream overflow-hidden">

      {/* Map — full bleed with GIANT overlapping title */}
      <div className="relative">
        <div data-map className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5!2d10.0541!3d45.6608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478177a41faa9d43%3A0x5ee8a2df79c9f402!2sIl%20Bruco!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Il Bruco - Lungolago di Iseo"
          />
        </div>

        {/* GIANT overlapping title */}
        <div data-contatti-title className="relative z-10 -mt-[8vw] sm:-mt-[7vw] lg:-mt-[6vw] px-4 sm:px-8 lg:px-12 pointer-events-none">
          <h2 className="font-display text-[14vw] sm:text-[11vw] lg:text-[8vw] font-bold leading-[0.82] tracking-[-0.04em]">
            <span className="block text-navy drop-shadow-lg">Contatti</span>
            <span className="block text-teal-500/50 text-[0.5em] ml-[10vw]">& Prenota</span>
          </h2>
        </div>
      </div>

      {/* Content block */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-16 md:pb-24">

        {/* Booking CTA */}
        <div data-reveal className="bg-teal-500 p-6 sm:p-8 md:p-12 text-white mb-10 md:mb-16 max-w-2xl">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-teal-100/60 block mb-3">Vieni a trovarci</span>
          <div className="w-16 h-0.5 bg-white/30 mb-5" />
          <p className="text-teal-100 text-sm sm:text-base mb-7 leading-relaxed max-w-md">
            Usa il nostro sistema online per assicurarti il tavolo migliore, soprattutto nei weekend.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href="https://booking.ilbruco.it"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block bg-white text-teal-600 px-7 py-3.5 font-semibold text-sm overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">Prenota Online</span>
              <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">Prenota Online</span>
            </a>
            <a
              href="tel:030980784"
              className="flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              030 980784
            </a>
          </div>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          <div data-reveal className="flex gap-3 items-start">
            <MapPin className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-navy/35 mb-1">Indirizzo</div>
              <div className="text-navy text-sm font-medium">Via Lungolago Marconi 20/A — 25049 Iseo (BS)</div>
            </div>
          </div>

          <div data-reveal className="flex gap-3 items-start">
            <Phone className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-navy/35 mb-1">Telefono & WhatsApp</div>
              <a href="tel:030980784" className="text-teal-600 font-semibold text-sm hover:underline">030 980784</a>
            </div>
          </div>

          <div data-reveal className="flex gap-3 items-start">
            <Clock className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-navy/35 mb-1">Orari</div>
              <div className="text-navy text-sm font-medium">Lunedì — Domenica<br />10:00 — Mezzanotte</div>
            </div>
          </div>

          <div data-reveal className="flex gap-3 items-start">
            <Train className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
            <div>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-navy/35 mb-1">Come arrivare</div>
              <div className="text-navy text-sm font-medium">
                Brescia ~25 min · Bergamo ~30 min<br />
                <span className="text-gray-400 font-normal text-xs">Stazione FS Iseo a ~550 m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div data-reveal>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-navy/25 mb-3">Servizi</div>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 border border-navy/6 px-3 py-1.5 text-[9px] text-navy/40 font-mono tracking-wider">
                <s.icon className="w-3 h-3 text-teal-500" />
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
