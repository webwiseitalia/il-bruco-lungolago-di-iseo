import verandaImg from '../assets/foto/foto-6.webp'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-teal-500 font-medium text-sm tracking-widest uppercase">La nostra storia</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy font-bold mt-3">
            Chi Siamo
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={verandaImg}
                alt="La veranda del Bruco con vista lago"
                className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-teal-500 text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-bold font-display">45+</div>
              <div className="text-sm text-teal-100">Anni di storia</div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong className="text-navy">Il Bruco è sul lungolago di Iseo dal 1980.</strong> Oltre quarantacinque anni
              a servire piatti di pesce fresco, pizza e cucina italiana affacciati direttamente sull'acqua del lago.
              Un punto di riferimento per chi vive Iseo e per chi la scopre.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              L'edificio che ci ospita è un palazzo storico posto a metà della passeggiata sul lungolago,
              nel cuore di Iseo. Da qui partono i battelli per Monte Isola, gli itinerari enogastronomici
              in Franciacorta e le escursioni verso la Riserva Naturale delle Torbiere del Sebino.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Gestione partenopea di nascita, bresciana di adozione: la passione per il pesce, l'accoglienza
              e il fare bene in cucina sono nel nostro DNA. Pierluigi e il team accolgono ogni ospite con lo
              stesso spirito da oltre quattro decenni: <em className="text-teal-600 font-medium">farvi sentire a casa, con vista lago.</em>
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-teal-50 rounded-full px-4 py-2">
                <span className="text-teal-600 text-sm font-medium">Fondato nel 1980</span>
              </div>
              <div className="flex items-center gap-2 bg-gold-50 rounded-full px-4 py-2">
                <span className="text-gold-700 text-sm font-medium">Gestione familiare</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-50 rounded-full px-4 py-2">
                <span className="text-navy-600 text-sm font-medium">Palazzo storico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
