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

  const whatsappUrl = "https://wa.me/5531992134194?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista.";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center transition-all duration-500">
      <div 
        className={`w-full max-w-7xl flex items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0F4A2C]/85 backdrop-blur-xl border border-[#E0E4E1]/20 text-[#FFFFFF] shadow-lg shadow-[#0F4A2C]/10' 
            : 'bg-transparent border border-transparent text-[#FFFFFF]'
        }`}
      >
        {/* Brand Logo & Emblem */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          {/* Glowing Premium Vector F Logo */}
          <div className="relative w-11 h-11 flex-shrink-0">
            <svg 
              viewBox="0 0 120 108" 
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            >
              {/* Tilted green oval */}
              <ellipse cx="60" cy="54" rx="48" ry="38" transform="rotate(-15 60 54)" fill="#0F4A2C" />
              
              {/* Stylized F - left piece (larger) */}
              <path d="M 33.5 78 L 49.5 30 L 59.5 30 L 43.5 78 Z" fill="#E6F4EA" opacity="0.9" />
              
              {/* Stylized F - right piece (larger) */}
              <path d="M 46 78 L 62 30 L 94 30 L 89 43 L 67.67 43 L 63.67 55 L 84 55 L 80 65 L 60.33 65 L 56 78 Z" fill="#FFFFFF" />
            </svg>
            <div className="absolute inset-0 bg-[#0F4A2C] blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight leading-none text-white uppercase">
              FRIOAR
            </span>
            <span className="text-[7px] md:text-[8px] font-jetbrains font-medium tracking-wide uppercase opacity-75 mt-0.5 max-w-[120px] sm:max-w-[200px] leading-tight text-white/90">
              Engenharia Térmica e Climatização
            </span>
          </div>
        </a>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn relative overflow-hidden bg-[#0F4A2C] hover:bg-[#0F4A2C]/90 text-white font-outfit text-[11px] sm:text-xs md:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-md shadow-[#0F4A2C]/20 hover:scale-105 transition-all duration-300 whitespace-nowrap flex-shrink-0"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

