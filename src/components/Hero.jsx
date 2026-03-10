import heroImg from '../assets/foto/foto-14.webp'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="La veranda del Bruco affacciata sul Lago d'Iseo"
          title="La veranda del ristorante Il Bruco con vista sul Lago d'Iseo"
          loading="eager"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2 mb-8">
          <span className="text-gold-300 text-sm font-medium">Dal 1980</span>
          <span className="w-1 h-1 rounded-full bg-white/50" />
          <span className="text-white/90 text-sm">Lungolago di Iseo</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
          La miglior vista sul{' '}
          <span className="text-teal-300 italic">Lago d'Iseo</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Ristorante e pizzeria direttamente sul lungolago. Pesce fresco, pizza cotta a fuoco vivo,
          vini di Franciacorta e tramonti che non dimentichi.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://booking.ilbruco.it"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
          >
            Prenota il tuo tavolo
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium border border-white/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Scopri il menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
