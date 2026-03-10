import { Link } from 'react-router-dom'
import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react'
import logo from '../assets/logo.webp'

const quickLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white overflow-hidden">
      {/* CTA Banner — teal, centered */}
      <div className="bg-teal-500 relative texture-teal-dots">
        <div className="px-4 sm:px-8 lg:px-12 py-14 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display fluid-md text-white font-bold mb-3">
              Il lago ti aspetta.<br />
              <span className="text-white/60">Prenota il tuo tavolo.</span>
            </h2>
            <p className="text-teal-100 mb-8 max-w-md mx-auto text-base sm:text-lg">
              La miglior vista sul Lago d'Iseo, piatti di pesce fresco e tramonti indimenticabili.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://booking.ilbruco.it"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white text-teal-600 px-9 py-4 text-base font-bold overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10">Prenota Online</span>
                <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">Prenota Online</span>
              </a>
              <a
                href="tel:030980784"
                className="flex items-center gap-2 border border-white/30 text-white px-9 py-4 text-base font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                030 980784
              </a>
            </div>
          </div>
        </div>
        {/* Oversized year — bleeds bottom-right */}
        <div className="absolute -bottom-6 right-2 sm:right-8 lg:right-16 text-white/[0.08] font-display text-[7rem] sm:text-[11rem] font-bold leading-none select-none pointer-events-none">
          1980
        </div>
      </div>

      {/* Main footer — broken grid, different column widths */}
      <div className="pl-4 sm:pl-8 lg:pl-12 pr-5 sm:pr-10 lg:pr-20 py-14 md:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand — wide left */}
          <div className="lg:col-span-5">
            <img src={logo} alt="Il Bruco Lungolago Iseo" title="Il Bruco — Ristorante sul Lungolago di Iseo" loading="lazy" width={64} height={64} className="h-12 mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-base leading-relaxed max-w-xs mb-5">
              Ristorante e pizzeria sul lungolago di Iseo dal 1980.
              Pesce fresco, pizza a fuoco vivo e la miglior vista sul lago.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/ilbrucoiseo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 hover:border-teal-500 hover:bg-teal-500 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/IlBrucoIseo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 hover:border-teal-500 hover:bg-teal-500 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick links — narrow, offset */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/25 mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 text-base hover:text-teal-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/25 mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-base">
                <MapPin className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                Via Lungolago Marconi 20/A<br />25049 Iseo (BS)
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-teal-400 shrink-0" />
                <a href="tel:030980784" className="text-gray-400 text-base hover:text-teal-300 transition-colors">030 980784</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-base">
                <Clock className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                Lun — Dom<br />10:00 — Mezzanotte
              </li>
            </ul>

            {/* Awards inline */}
            <div className="mt-5 space-y-2">
              <div className="border-b border-white/5 pb-2">
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-teal-300/50">TripAdvisor</div>
                <div className="text-white text-sm font-semibold">Travellers' Choice 2024</div>
              </div>
              <div className="border-b border-white/5 pb-2">
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-teal-300/50">Google</div>
                <div className="text-white text-sm font-semibold">4 Stelle</div>
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-teal-300/50">Restaurant Guru</div>
                <div className="text-white text-sm font-semibold">Premiato</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — asymmetric */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-mono tracking-wider">
            © {new Date().getFullYear()} Il Bruco — Lungolago di Iseo
          </p>
          <div className="flex gap-5 text-xs text-gray-500 font-mono tracking-wider">
            <span>P.IVA: [da inserire]</span>
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-teal-300 transition-colors">Privacy</Link>
            <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-teal-300 transition-colors">Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
