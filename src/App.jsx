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

export default function App() {
  return (
    <div className="min-h-screen">
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
    </div>
  )
}
