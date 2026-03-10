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
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="bg-teal-500">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Il lago ti aspetta. Prenota il tuo tavolo.
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            La miglior vista sul Lago d'Iseo, piatti di pesce fresco e tramonti indimenticabili vi aspettano.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://booking.ilbruco.it"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-teal-50 transition-all duration-300 hover:shadow-lg"
            >
              Prenota Online
            </a>
            <a
              href="tel:030980784"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              030 980784
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Il Bruco Lungolago Iseo" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Ristorante e pizzeria sul lungolago di Iseo dal 1980.
              Pesce fresco, pizza a fuoco vivo e la miglior vista sul lago.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/ilbrucoiseo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/IlBrucoIseo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Link Rapidi</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                Via Lungolago Marconi 20/A<br />25049 Iseo (BS)
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:030980784" className="text-gray-400 text-sm hover:text-teal-300 transition-colors">
                  030 980784
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                Lun — Dom<br />10:00 — Mezzanotte
              </li>
            </ul>
          </div>

          {/* Awards */}
          <div>
            <h4 className="font-semibold text-white mb-4">Riconoscimenti</h4>
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-teal-300 text-xs font-medium">TripAdvisor</div>
                <div className="text-white text-sm font-semibold mt-0.5">Travellers' Choice 2024</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-teal-300 text-xs font-medium">Google</div>
                <div className="text-white text-sm font-semibold mt-0.5">4 Stelle</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-teal-300 text-xs font-medium">Restaurant Guru</div>
                <div className="text-white text-sm font-semibold mt-0.5">Premiato</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Il Bruco — Lungolago di Iseo. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>P.IVA: [da inserire]</span>
            <span>|</span>
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-teal-300 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-teal-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
