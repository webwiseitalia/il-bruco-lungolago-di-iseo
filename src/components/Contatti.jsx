import { MapPin, Phone, Clock, Car, Train, CreditCard, Wifi, Dog, Baby, Accessibility } from 'lucide-react'

const services = [
  { icon: CreditCard, label: 'Carte di credito' },
  { icon: Wifi, label: 'Wi-Fi gratuito' },
  { icon: Dog, label: 'Animali ammessi' },
  { icon: Baby, label: 'Seggiolini bambini' },
  { icon: Accessibility, label: 'Accesso disabili' },
  { icon: Car, label: 'Parcheggio vicino' },
]

export default function Contatti() {
  return (
    <section id="contatti" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-500 font-medium text-sm tracking-widest uppercase">Vieni a trovarci</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy font-bold mt-3">
            Prenota & Contatti
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Info */}
          <div className="space-y-8">
            {/* Main CTA */}
            <div className="bg-teal-500 rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-3">Prenota il tuo tavolo</h3>
              <p className="text-teal-100 mb-6">
                Usa il nostro sistema di prenotazione online per assicurarti il tavolo migliore,
                soprattutto nei weekend e in alta stagione.
              </p>
              <a
                href="https://booking.ilbruco.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-7 py-3.5 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 hover:shadow-lg"
              >
                Prenota Online
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Indirizzo</div>
                  <div className="text-gray-600 text-sm mt-0.5">Via Lungolago Marconi 20/A — 25049 Iseo (BS)</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Telefono & WhatsApp</div>
                  <a href="tel:030980784" className="text-teal-600 font-medium text-sm mt-0.5 hover:underline">
                    030 980784
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Orari</div>
                  <div className="text-gray-600 text-sm mt-0.5">
                    Lunedì — Domenica<br />
                    10:00 — Mezzanotte
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center">
                  <Train className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Come arrivare</div>
                  <div className="text-gray-600 text-sm mt-0.5">
                    Brescia ~25 min · Bergamo ~30 min · Milano ~1h15<br />
                    Stazione FS Iseo a ~550 m
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-navy mb-3">Servizi</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <div key={s.label} className="flex items-center gap-1.5 bg-gray-50 rounded-full px-3 py-1.5 text-xs text-gray-600">
                    <s.icon className="w-3.5 h-3.5 text-teal-500" />
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-auto lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5!2d10.0541!3d45.6608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478177a41faa9d43%3A0x5ee8a2df79c9f402!2sIl%20Bruco!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Il Bruco - Lungolago di Iseo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
