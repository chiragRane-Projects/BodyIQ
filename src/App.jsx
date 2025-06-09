import CTABanner from "./components/CTABanner/CTABanner"
import FAQ from "./components/FAQ/FAQ"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import HeroSection from "./components/HeroSection/HeroSection"
import HowItWorks from "./components/HowItWorks/HowItWorks"

function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <Features/>
      <HowItWorks/>
      <CTABanner/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App