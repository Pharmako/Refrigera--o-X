import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import ContractsFooter from './components/ContractsFooter';

function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F8F8] font-plus-jakarta antialiased overflow-x-hidden">
      {/* Floating Island Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features: Dashboard */}
      <Features />

      {/* Philosophy: Manifesto */}
      <Philosophy />

      {/* Protocol: Sticky Stacking Archive */}
      <Protocol />

      {/* Contracts & Footer */}
      <ContractsFooter />
    </div>
  );
}

export default App;
