import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const whatsappUrl = "https://wa.me/5531998102577?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista.";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center transition-all duration-500">
      <div 
        className={`w-full max-w-7xl flex items-center justify-between rounded-full px-6 py-3 md:px-8 md:py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#1A2B3C]/85 backdrop-blur-xl border border-[#0055D4]/40 text-[#F8F8F8] shadow-lg shadow-[#1A2B3C]/10' 
            : 'bg-transparent border border-transparent text-[#F8F8F8]'
        }`}
      >
        {/* Brand Logo & Emblem */}
        <a href="#hero" className="flex items-center gap-3 group">
          {/* Glowing Geometric Ice Crystal SVG Emblem */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full filter drop-shadow-[0_0_8px_rgba(0,85,214,0.5)] transition-transform duration-500 group-hover:rotate-45"
            >
              {/* Geometric ice crystal/wave emblem */}
              <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#F8F8F8" strokeWidth="4" />
              <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" fill="none" stroke="#0055D4" strokeWidth="3" opacity="0.8" />
              
              {/* Wave lines inside */}
              <path d="M 28,45 C 38,38 42,52 50,45 C 58,38 62,52 72,45" fill="none" stroke="#0055D4" strokeWidth="4" strokeLinecap="round" />
              <path d="M 28,55 C 38,48 42,62 50,55 C 58,48 62,62 72,55" fill="none" stroke="#F8F8F8" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
              
              {/* Inner core */}
              <circle cx="50" cy="50" r="6" fill="#0055D4" className="animate-pulse" />
            </svg>
            <div className="absolute inset-0 bg-[#0055D4] blur-xl opacity-30 rounded-full group-hover:opacity-60 transition-opacity"></div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight leading-none text-white">
              JL FRIO
            </span>
            <span className="text-[7px] md:text-[8px] font-jetbrains font-medium tracking-wide uppercase opacity-75 mt-0.5 max-w-[200px] leading-tight text-white/90">
              Engenharia Térmica e Climatização
            </span>
          </div>
        </a>

        {/* CTA Button */}
        <div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn relative overflow-hidden bg-[#0055D4] hover:bg-[#0055D4]/90 text-white font-outfit text-xs md:text-sm font-semibold px-4 py-2 md:px-6 md:py-2.5 rounded-full shadow-md shadow-[#0055D4]/20 hover:scale-105 transition-all duration-300"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

