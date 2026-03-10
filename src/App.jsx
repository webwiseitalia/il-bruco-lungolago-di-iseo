import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import MenuSection from './components/MenuSection'
import Location from './components/Location'
import Eventi from './components/Eventi'
import Iseo from './components/Iseo'
import Recensioni from './components/Recensioni'
import Gallery from './components/Gallery'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'
import CookieBanner from './components/CookieBanner'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChiSiamo />
        <MenuSection />
        <Location />
        <Eventi />
        <Iseo />
        <Recensioni />
        <Gallery />
        <Contatti />
      </main>
      <Footer />
      <MobileBar />
      {/* Spacer for mobile bottom bar */}
      <div className="h-14 lg:hidden" />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
