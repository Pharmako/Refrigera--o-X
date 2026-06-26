import React, { useState, useEffect } from 'react';
import { Menu, X, Check } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center transition-all duration-500">
      <div 
        className={`w-full max-w-7xl flex items-center justify-between rounded-full px-6 py-3 md:px-8 md:py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#1A2B3C]/80 backdrop-blur-xl border border-[#0055D4]/40 text-[#F8F8F8] shadow-lg shadow-[#1A2B3C]/10' 
            : 'bg-transparent border border-transparent text-[#1A2B3C]'
        }`}
      >
        {/* Brand Logo & Emblem */}
        <a href="#hero" className="flex items-center gap-3 group">
          {/* Glowing Geometric Ice Crystal SVG Emblem */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg 
              viewBox="0 0 100 100" 
              className={`w-full h-full filter drop-shadow-[0_0_8px_rgba(0,85,214,0.5)] transition-transform duration-500 group-hover:rotate-45`}
            >
              {/* Geometric ice crystal/wave emblem */}
              <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke={isScrolled ? "#F8F8F8" : "#1A2B3C"} strokeWidth="4" />
              <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" fill="none" stroke="#0055D4" strokeWidth="3" opacity="0.8" />
              
              {/* Wave lines inside */}
              <path d="M 28,45 C 38,38 42,52 50,45 C 58,38 62,52 72,45" fill="none" stroke="#0055D4" strokeWidth="4" strokeLinecap="round" />
              <path d="M 28,55 C 38,48 42,62 50,55 C 58,48 62,62 72,55" fill="none" stroke={isScrolled ? "#F8F8F8" : "#1A2B3C"} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
              
              {/* Inner core */}
              <circle cx="50" cy="50" r="6" fill="#0055D4" className="animate-pulse" />
            </svg>
            <div className="absolute inset-0 bg-[#0055D4] blur-xl opacity-30 rounded-full group-hover:opacity-60 transition-opacity"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight leading-none">
              JL FRIO
            </span>
            <span className="text-[7px] md:text-[8px] font-jetbrains font-medium tracking-wide uppercase opacity-75 mt-0.5 max-w-[200px] leading-tight">
              Engenharia Térmica e Climatização
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-outfit font-medium text-sm">
          <a href="#solutions" className="hover:text-[#0055D4] transition-colors relative group py-1">
            Soluções
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0055D4] transition-all group-hover:w-full"></span>
          </a>
          <a href="#features" className="hover:text-[#0055D4] transition-colors relative group py-1">
            Métricas
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0055D4] transition-all group-hover:w-full"></span>
          </a>
          <a href="#philosophy" className="hover:text-[#0055D4] transition-colors relative group py-1">
            Manifesto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0055D4] transition-all group-hover:w-full"></span>
          </a>
          <a href="#protocol" className="hover:text-[#0055D4] transition-colors relative group py-1">
            Protocolos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0055D4] transition-all group-hover:w-full"></span>
          </a>
          <a href="#contracts" className="hover:text-[#0055D4] transition-colors relative group py-1">
            Planos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0055D4] transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="#login" 
            className={`font-outfit text-sm font-semibold transition-colors ${
              isScrolled ? 'hover:text-[#0055D4] text-[#F8F8F8]' : 'hover:text-[#0055D4] text-[#1A2B3C]'
            }`}
          >
            Log In
          </a>
          <a 
            href="#contact" 
            className="magnetic-btn relative overflow-hidden bg-[#0055D4] hover:bg-[#0055D4]/90 text-white font-outfit text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shadow-[#0055D4]/20 hover:scale-105 transition-all duration-300"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1 rounded-full focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#1A2B3C] border border-[#0055D4]/40 rounded-[2rem] p-6 flex flex-col gap-6 shadow-2xl text-[#F8F8F8] lg:hidden z-50 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-4 font-outfit text-lg font-medium">
            <a href="#solutions" onClick={() => setIsOpen(false)} className="hover:text-[#0055D4] transition-colors py-2 border-b border-[#F8F8F8]/10">Soluções</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-[#0055D4] transition-colors py-2 border-b border-[#F8F8F8]/10">Métricas</a>
            <a href="#philosophy" onClick={() => setIsOpen(false)} className="hover:text-[#0055D4] transition-colors py-2 border-b border-[#F8F8F8]/10">Manifesto</a>
            <a href="#protocol" onClick={() => setIsOpen(false)} className="hover:text-[#0055D4] transition-colors py-2 border-b border-[#F8F8F8]/10">Protocolos</a>
            <a href="#contracts" onClick={() => setIsOpen(false)} className="hover:text-[#0055D4] transition-colors py-2 border-b border-[#F8F8F8]/10">Planos</a>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <a 
              href="#login" 
              onClick={() => setIsOpen(false)}
              className="text-center font-outfit font-semibold py-2.5 rounded-full border border-[#F8F8F8]/20 hover:bg-[#F8F8F8]/10 transition-colors"
            >
              Log In
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-center bg-[#0055D4] text-white font-outfit font-semibold py-2.5 rounded-full shadow-lg shadow-[#0055D4]/30"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
