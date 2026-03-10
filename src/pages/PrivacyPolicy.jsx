import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Phone, Mail, Shield } from 'lucide-react'
import { siteData } from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 text-sm font-medium transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Link>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-teal-300" />
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold">Privacy Policy</h1>
              <p className="text-gray-300 text-sm mt-1">Informativa sul trattamento dei dati personali</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-10 md:p-12">
          <p className="text-gray-500 text-sm mb-8">Ultimo aggiornamento: {siteData.legal.lastPolicyUpdate}</p>

          {/* 1. Titolare */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">1. Titolare del Trattamento</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Il Titolare del trattamento dei dati personali è:</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 space-y-2">
            <p className="font-semibold text-navy">{siteData.name}</p>
            <p className="flex items-center gap-2 text-gray-600 text-sm"><MapPin className="w-4 h-4 text-teal-500" /> {siteData.contact.address.full}</p>
            <p className="flex items-center gap-2 text-gray-600 text-sm"><Phone className="w-4 h-4 text-teal-500" /> {siteData.contact.phone}</p>
            <p className="flex items-center gap-2 text-gray-600 text-sm"><Mail className="w-4 h-4 text-teal-500" /> {siteData.contact.email}</p>
            <p className="text-gray-600 text-sm">P.IVA: {siteData.legal.piva}</p>
          </div>

          {/* 2. Dati Raccolti */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

          <h3 className="font-semibold text-navy mt-6 mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
          <p className="text-gray-700 leading-relaxed mb-3">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 ml-2">
            <li><strong>Nome e Cognome</strong> — per identificare l'interessato</li>
            <li><strong>Indirizzo Email</strong> — per rispondere alle richieste</li>
            <li><strong>Numero di Telefono</strong> (facoltativo) — per contatti telefonici</li>
            <li><strong>Messaggio/Descrizione del Progetto</strong> — per comprendere le esigenze</li>
          </ul>

          <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-4 mb-4">
            <p className="font-semibold text-teal-800 mb-2">Finalità: I dati vengono raccolti esclusivamente per:</p>
            <ul className="list-disc list-inside text-teal-700 text-sm space-y-1 ml-2">
              <li>Rispondere alle richieste di informazioni e prenotazioni</li>
              <li>Fornire informazioni sui nostri servizi</li>
              <li>Gestire le prenotazioni</li>
              <li>Gestire la relazione commerciale</li>
            </ul>
          </div>

          <h3 className="font-semibold text-navy mt-6 mb-3">2.2 Base giuridica del trattamento</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
            l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
          </p>

          {/* 3. Modalità */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">3. Modalità di Trattamento</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
            finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
            autorizzati, perdita, distruzione o divulgazione.
          </p>

          {/* 4. Conservazione */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">4. Conservazione dei Dati</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
            relazioni commerciali conseguenti.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
            <li><strong>Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
            <li><strong>Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
            <li><strong>Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta</li>
          </ul>

          {/* 5. Comunicazione */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">5. Comunicazione e Diffusione dei Dati</h2>
          <p className="text-gray-700 leading-relaxed mb-3">I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 ml-2">
            <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
            <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
            <li>Autorità competenti in caso di richieste legittime previste per legge</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4 mb-8">
            <p className="font-semibold text-red-800 mb-2">I tuoi dati NON verranno MAI:</p>
            <ul className="list-disc list-inside text-red-700 text-sm space-y-1 ml-2">
              <li>Venduti a terze parti</li>
              <li>Condivisi con scopi di marketing</li>
              <li>Utilizzati per invio di newsletter non richieste</li>
              <li>Trasferiti fuori dall'Unione Europea</li>
            </ul>
          </div>

          {/* 6. Diritti */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">6. Diritti dell'Interessato</h2>
          <p className="text-gray-700 leading-relaxed mb-3">In qualità di interessato, hai il diritto di:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
            <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
            <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
            <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
            <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
            <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
            <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
          </ul>

          <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-4 mb-8">
            <p className="font-semibold text-teal-800 mb-2">Come esercitare i tuoi diritti:</p>
            <p className="text-teal-700 text-sm">
              Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${siteData.contact.email}`} className="underline font-medium">{siteData.contact.email}</a> o
              tramite raccomandata A/R all'indirizzo: {siteData.contact.address.full}.
            </p>
            <p className="text-teal-700 text-sm mt-2">Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.</p>
          </div>

          {/* 7. Reclamo */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">7. Diritto di Reclamo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
            trattamento dei tuoi dati violi il GDPR.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
            <p className="font-semibold text-navy mb-2">Garante per la protezione dei dati personali:</p>
            <p className="text-gray-600 text-sm">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">www.garanteprivacy.it</a></p>
            <p className="text-gray-600 text-sm">Email: garante@gpdp.it</p>
            <p className="text-gray-600 text-sm">PEC: protocollo@pec.gpdp.it</p>
          </div>

          {/* 8. Cookie */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
            consulta la nostra <Link to="/cookie-policy" className="text-teal-600 underline font-medium">Cookie Policy</Link>.
          </p>

          {/* 9. Modifiche */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">9. Modifiche alla Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
            saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
            consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
          </p>

          {/* 10. Contatti */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">10. Contatti</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a href={`mailto:${siteData.contact.email}`} className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-teal-100 transition-colors">
              <Mail className="w-4 h-4" />
              {siteData.contact.email}
            </a>
            <a href={siteData.contact.phoneLink} className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-teal-100 transition-colors">
              <Phone className="w-4 h-4" />
              {siteData.contact.phone}
            </a>
          </div>

          {/* Footer note */}
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="flex-1 text-center py-3 px-6 border-2 border-navy/20 text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
          >
            Torna alla Home
          </Link>
          <Link
            to="/cookie-policy"
            className="flex-1 text-center py-3 px-6 border-2 border-navy/20 text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
          >
            Leggi la Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
