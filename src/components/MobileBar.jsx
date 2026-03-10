import { Phone, CalendarCheck } from 'lucide-react'

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
      <div className="flex">
        <a
          href="tel:030980784"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-navy font-mono text-sm tracking-wider uppercase hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Chiama
        </a>
        <a
          href="https://booking.ilbruco.it"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-teal-500 text-white font-mono text-sm tracking-wider uppercase hover:bg-teal-600 transition-colors"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          Prenota
        </a>
      </div>
    </div>
  )
}
