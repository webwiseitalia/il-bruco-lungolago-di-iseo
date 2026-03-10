import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="Il Bruco Lungolago Iseo"
              title="Il Bruco — Ristorante sul Lungolago di Iseo"
              loading="eager"
              width={56}
              height={56}
              className={`transition-all duration-500 ${scrolled ? 'h-10 md:h-12' : 'h-11 md:h-14'}`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-teal-500 ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:030980784"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-navy hover:text-teal-500' : 'text-white hover:text-gold-300'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">030 980784</span>
            </a>
            <a
              href="https://booking.ilbruco.it"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Prenota
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
            aria-label="Menu navigazione"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-navy font-medium text-base rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:030980784"
              className="flex items-center justify-center gap-2 py-3 text-navy font-medium border border-navy/20 rounded-full hover:bg-navy hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              030 980784
            </a>
            <a
              href="https://booking.ilbruco.it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all"
            >
              Prenota il tuo tavolo
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
