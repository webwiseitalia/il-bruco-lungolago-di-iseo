import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
      {!isOnPolicyPage && (
        <div className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm" />
      )}

      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6"
        >
          <div className="max-w-2xl mx-auto bg-white shadow-2xl p-6 sm:p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <Shield className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  Questo sito utilizza i cookie
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Solo cookie tecnici. Nessuna profilazione o tracciamento.{' '}
                  <Link to="/privacy-policy" className="text-teal-600 underline">Privacy Policy</Link>
                  {' '}&{' '}
                  <Link to="/cookie-policy" className="text-teal-600 underline">Cookie Policy</Link>.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 py-3 px-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm transition-all duration-300"
                  >
                    Accetta
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 py-3 px-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm transition-all duration-300"
                  >
                    Rifiuta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
