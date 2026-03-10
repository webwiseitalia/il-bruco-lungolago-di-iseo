import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie, MapPin, Phone, Mail, ShieldCheck, AlertCircle } from 'lucide-react'
import { siteData } from '../constants/siteData'

export default function CookiePolicy() {
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
            <Cookie className="w-8 h-8 text-teal-300" />
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold">Cookie Policy</h1>
              <p className="text-gray-300 text-sm mt-1">Informativa sull'utilizzo dei cookie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-10 md:p-12">
          <p className="text-gray-500 text-sm mb-8">Ultimo aggiornamento: {siteData.legal.lastPolicyUpdate}</p>

          {/* Privacy-Friendly badge */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-10 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-teal-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-teal-800 text-lg">Sito Privacy-Friendly</h3>
              <p className="text-teal-700 text-sm mt-1 leading-relaxed">
                Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento.
                <strong> Non utilizziamo cookie di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta
                e non serve il tuo consenso per la navigazione.
              </p>
            </div>
          </div>

          {/* 1. Cosa sono */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">1. Cosa sono i Cookie</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
            quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
            informazioni sulle tue preferenze o azioni passate.
          </p>

          {/* 2. Tipologie */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">2. Tipologie di Cookie</h2>

          <h3 className="font-semibold text-navy mt-6 mb-3">2.1 Cookie Tecnici</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
            questi cookie, il sito potrebbe non funzionare correttamente.
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-4 mb-4">
            <p className="font-semibold text-teal-800 mb-2">Cookie tecnici utilizzati su questo sito:</p>
            <ul className="list-disc list-inside text-teal-700 text-sm space-y-1 ml-2">
              <li>Cookie di navigazione e di sessione</li>
              <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
            </ul>
            <p className="text-teal-600 text-xs mt-3 italic">
              Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
            </p>
          </div>

          <h3 className="font-semibold text-navy mt-6 mb-3">2.2 Cookie Analitici</h3>
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800">NON UTILIZZATI</p>
              <p className="text-red-700 text-sm mt-1">Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>
            </div>
          </div>

          <h3 className="font-semibold text-navy mt-6 mb-3">2.3 Cookie di Profilazione</h3>
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800">NON UTILIZZATI</p>
              <p className="text-red-700 text-sm mt-1">Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>
            </div>
          </div>

          <h3 className="font-semibold text-navy mt-6 mb-3">2.4 Cookie di Terze Parti</h3>
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800">NON UTILIZZATI</p>
              <p className="text-red-700 text-sm mt-1">Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
            </div>
          </div>

          {/* 3. Cookie utilizzati */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">3. Cookie Utilizzati su Questo Sito</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg">Nome Cookie</th>
                  <th className="text-left p-3">Tipologia</th>
                  <th className="text-left p-3">Finalità</th>
                  <th className="text-left p-3 rounded-tr-lg">Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-mono text-xs text-navy">{siteData.legal.cookieConsentKey}</td>
                  <td className="p-3"><span className="bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded-full">Tecnico</span></td>
                  <td className="p-3 text-gray-600">Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                  <td className="p-3 text-gray-600">7 giorni</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gold-50 border-l-4 border-gold rounded-r-xl p-4 mb-8">
            <p className="text-gold-800 text-sm">
              <strong>Nota importante:</strong> I cookie tecnici come "il-bruco-lungolago-di-iseo-cookie-consent" sono essenziali per il funzionamento del sito e non richiedono il
              consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
            </p>
          </div>

          {/* 4. Come gestire */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">4. Come Gestire i Cookie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
            del tuo browser.
          </p>

          <h3 className="font-semibold text-navy mb-3">Disabilitare i cookie tramite il browser:</h3>
          <ul className="space-y-2 mb-4 ml-2">
            <li className="text-gray-700 text-sm">• <strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
            <li className="text-gray-700 text-sm">• <strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
            <li className="text-gray-700 text-sm">• <strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
            <li className="text-gray-700 text-sm">• <strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci ed elimina cookie</li>
          </ul>

          <div className="bg-gold-50 border-l-4 border-gold rounded-r-xl p-4 mb-8">
            <p className="text-gold-800 text-sm">
              <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
              qualità dell'esperienza di navigazione.
            </p>
          </div>

          {/* 5. Link esterni */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">5. Link a Siti Esterni</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
            il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
          </p>

          {/* 6. Aggiornamenti */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">6. Aggiornamenti della Cookie Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
            attraverso un avviso pubblicato su questa pagina.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.
          </p>

          {/* 7. Base normativa */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">7. Base Normativa</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Questa Cookie Policy è redatta in conformità a:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8 ml-2">
            <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
            <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
            <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
            <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
          </ul>

          {/* 8. Contatti */}
          <h2 className="font-display text-xl sm:text-2xl text-navy font-bold mb-4">8. Contatti</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 space-y-2">
            <p className="font-semibold text-navy">{siteData.name}</p>
            <p className="text-gray-600 text-sm">{siteData.contact.address.full}</p>
            <p className="text-gray-600 text-sm">Email: <a href={`mailto:${siteData.contact.email}`} className="text-teal-600 underline">{siteData.contact.email}</a></p>
            <p className="text-gray-600 text-sm">Tel: <a href={siteData.contact.phoneLink} className="text-teal-600 underline">{siteData.contact.phone}</a></p>
          </div>

          {/* Zero Tracciamento badge */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center mb-6">
            <ShieldCheck className="w-12 h-12 text-teal-500 mx-auto mb-3" />
            <h3 className="font-display text-xl text-teal-800 font-bold">Zero Tracciamento</h3>
            <p className="text-teal-700 text-sm mt-2">
              Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.
            </p>
          </div>

          {/* Footer note */}
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              Questa Cookie Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al Provvedimento del Garante Privacy n. 229/2014.
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
            to="/privacy-policy"
            className="flex-1 text-center py-3 px-6 border-2 border-navy/20 text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
          >
            Leggi la Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
