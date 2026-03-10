import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-16 md:h-20 px-5 sm:px-10 lg:px-20">
        <a href="#" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Il Bruco Lungolago Iseo"
            title="Il Bruco — Ristorante sul Lungolago di Iseo"
            loading="eager"
            width={56}
            height={56}
            className={`transition-all duration-700 ${scrolled ? 'h-9 md:h-11' : 'h-10 md:h-14'}`}
          />
        </a>

        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-mono tracking-[0.15em] uppercase transition-colors duration-300 hover:text-teal-500 ${
                scrolled ? 'text-navy/70' : 'text-white/70'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:030980784"
            className={`flex items-center gap-1.5 text-sm font-mono tracking-wider transition-colors ${
              scrolled ? 'text-navy/60 hover:text-teal-500' : 'text-white/50 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">030 980784</span>
          </a>
          <a
            href="https://booking.ilbruco.it"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-600 text-white px-7 py-3 text-base font-semibold tracking-wider uppercase transition-all duration-300"
          >
            Prenota
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
          aria-label="Menu navigazione"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 28px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 28px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 28px)' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 bg-navy z-40 flex flex-col justify-center px-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white/60 hover:text-white p-2"
              aria-label="Chiudi menu"
            >
              <X className="w-7 h-7" />
            </button>
            <nav className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block py-3 text-3xl sm:text-4xl font-display text-white/80 hover:text-teal-300 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12 flex flex-col gap-4"
            >
              <a href="tel:030980784" className="flex items-center gap-2 text-white/50 text-sm font-mono">
                <Phone className="w-4 h-4" />
                030 980784
              </a>
              <a
                href="https://booking.ilbruco.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-4 bg-teal-500 text-white font-semibold text-base tracking-wider uppercase"
              >
                Prenota il tuo tavolo
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
