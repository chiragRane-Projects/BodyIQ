import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from '../src/components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CTABanner from './components/CTABanner/CTABanner';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features />
                <HowItWorks />
                <CTABanner />
                <FAQ />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;