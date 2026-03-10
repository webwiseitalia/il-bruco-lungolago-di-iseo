import { Phone, CalendarCheck } from 'lucide-react'

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex">
        <a
          href="tel:030980784"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-navy font-semibold text-sm hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Chiama
        </a>
        <a
          href="https://booking.ilbruco.it"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-teal-500 text-white font-semibold text-sm hover:bg-teal-600 transition-colors"
        >
          <CalendarCheck className="w-4 h-4" />
          Prenota
        </a>
      </div>
    </div>
  )
}
