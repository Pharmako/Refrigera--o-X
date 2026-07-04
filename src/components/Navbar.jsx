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

  const whatsappUrl = "https://wa.me/5531993014013?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista.";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center transition-all duration-500">
      <div 
        className={`w-full max-w-7xl flex items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0B2136]/85 backdrop-blur-xl border border-[#EBF1F6]/20 text-[#FFFFFF] shadow-lg shadow-[#0B2136]/10' 
            : 'bg-transparent border border-transparent text-[#FFFFFF]'
        }`}
      >
        {/* Brand Logo & Emblem */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          {/* Glowing Premium Vector Logo (InstalAr BR: Split Snowflake/Sun) */}
          <div className="relative w-11 h-11 flex-shrink-0">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            >
              <defs>
                <linearGradient id="frostBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A2F3" />
                  <stop offset="100%" stopColor="#0082C6" />
                </linearGradient>
                <linearGradient id="sunOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFA834" />
                  <stop offset="100%" stopColor="#F27C00" />
                </linearGradient>
                {/* Half snowflake branch */}
                <g id="nav-snowflake-branch">
                  <line x1="48" y1="50" x2="18" y2="50" stroke="url(#frostBlueGrad)" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 34,50 L 27,43 M 34,50 L 27,57" stroke="url(#frostBlueGrad)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 23,50 L 19,45 M 23,50 L 19,55" stroke="url(#frostBlueGrad)" strokeWidth="2" strokeLinecap="round" />
                </g>
              </defs>

              {/* Left Side: Snowflake (Frost Blue) */}
              {/* Vertical spine */}
              <path d="M 48,15 L 48,85" stroke="url(#frostBlueGrad)" strokeWidth="4" strokeLinecap="round" />
              {/* Horizontal branch */}
              <use href="#nav-snowflake-branch" />
              {/* Top-left branch at 45deg */}
              <use href="#nav-snowflake-branch" transform="rotate(45 48 50)" />
              {/* Bottom-left branch at 45deg */}
              <use href="#nav-snowflake-branch" transform="rotate(-45 48 50)" />

              {/* Right Side: Sun (Sun Orange) */}
              {/* Half sun body */}
              <path d="M 52,28 A 22,22 0 0,1 52,72 Z" fill="url(#sunOrangeGrad)" />
              {/* Rays */}
              <path d="M 58 29 L 69 17 L 63 34 Z" fill="url(#sunOrangeGrad)" />
              <path d="M 67 36 L 83 31 L 71 41 Z" fill="url(#sunOrangeGrad)" />
              <path d="M 72 47 L 88 50 L 72 53 Z" fill="url(#sunOrangeGrad)" />
              <path d="M 71 59 L 83 69 L 67 64 Z" fill="url(#sunOrangeGrad)" />
              <path d="M 63 66 L 69 83 L 58 71 Z" fill="url(#sunOrangeGrad)" />

              {/* Dotted outer arc around sun */}
              <path d="M 52,10 A 40,40 0 0,1 52,90" fill="none" stroke="url(#sunOrangeGrad)" strokeWidth="2.5" strokeDasharray="4 5" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 bg-[#0082C6] blur-xl opacity-15 rounded-full group-hover:opacity-35 transition-opacity"></div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight leading-none flex items-center">
              <span className="text-[#F27C00]">INSTAL</span>
              <span className="text-[#0082C6]">AR</span>
              <span className="bg-gradient-to-r from-emerald-500 to-yellow-400 bg-clip-text text-transparent ml-1.5">BRASIL</span>
            </span>
            <span className="text-[7px] md:text-[8px] font-jetbrains font-medium tracking-wide uppercase opacity-75 mt-0.5 max-w-[120px] sm:max-w-[200px] leading-tight text-white/90">
              Climatização e Engenharia Térmica
            </span>
          </div>
        </a>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn relative overflow-hidden bg-[#F27C00] hover:bg-[#F27C00]/90 text-white font-outfit text-[11px] sm:text-xs md:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-md shadow-[#F27C00]/20 hover:scale-105 transition-all duration-300 whitespace-nowrap flex-shrink-0"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

