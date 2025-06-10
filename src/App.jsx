import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import HeroSection from '../src/components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CTABanner from './components/CTABanner/CTABanner';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import LoginScreen from './pages/LoginScreen/LoginScreen';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
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
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<div>Signup Page</div>} /> {/* Placeholder */}
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;