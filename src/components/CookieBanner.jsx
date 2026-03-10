import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { siteData } from '../constants/siteData'

const COOKIE_KEY = siteData.legal.cookieConsentKey
const POLICY_PAGES = ['/privacy-policy', '/cookie-policy']

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const isOnPolicyPage = POLICY_PAGES.includes(location.pathname)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop blur — hidden on policy pages */}
      {!isOnPolicyPage && (
        <div className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm" />
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-navy mb-2">
                Questo sito utilizza i cookie
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Non utilizziamo cookie di profilazione
                o tracciamento. Per maggiori informazioni, consulta la nostra{' '}
                <Link to="/privacy-policy" className="text-teal-600 underline font-medium">Privacy Policy</Link>
                {' '}e la{' '}
                <Link to="/cookie-policy" className="text-teal-600 underline font-medium">Cookie Policy</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 py-3 px-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-300 text-sm"
                >
                  Accetta
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 py-3 px-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-300 text-sm"
                >
                  Rifiuta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
