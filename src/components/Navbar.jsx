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

  const whatsappUrl = "https://wa.me/9999999999999?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista.";

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
          {/* Glowing Premium Vector Logo (ICETEC: Snowflake with Circular Arrows) */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 flex-shrink-0">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            >
              <defs>
                <linearGradient id="frostBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#00A2F3" />
                </linearGradient>
                <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F355C" />
                  <stop offset="100%" stopColor="#0082C6" />
                </linearGradient>
                {/* Snowflake single branch */}
                <g id="nav-snowflake-branch">
                  <line x1="50" y1="50" x2="76" y2="50" stroke="url(#frostBlueGrad)" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 64,50 L 69,45 M 64,50 L 69,55" stroke="url(#frostBlueGrad)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 57,50 L 61,46 M 57,50 L 61,54" stroke="url(#frostBlueGrad)" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </defs>

              {/* Center Snowflake - Cyan/Light blue */}
              <use href="#nav-snowflake-branch" />
              <use href="#nav-snowflake-branch" transform="rotate(60 50 50)" />
              <use href="#nav-snowflake-branch" transform="rotate(120 50 50)" />
              <use href="#nav-snowflake-branch" transform="rotate(180 50 50)" />
              <use href="#nav-snowflake-branch" transform="rotate(240 50 50)" />
              <use href="#nav-snowflake-branch" transform="rotate(300 50 50)" />

              {/* Circular Arrows wrapping the snowflake */}
              {/* Top-Left Arrow */}
              <path 
                d="M 75.4,24.6 A 36,36 0 0,0 18.8,68.0" 
                fill="none" 
                stroke="url(#arrowGrad)" 
                strokeWidth="4.5" 
                strokeLinecap="round" 
              />
              {/* Arrow Head 1 */}
              <path 
                d="M 15,60 L 18.8,68.0 L 27,65" 
                fill="none" 
                stroke="url(#arrowGrad)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />

              {/* Bottom-Right Arrow */}
              <path 
                d="M 24.6,75.4 A 36,36 0 0,0 81.2,32.0" 
                fill="none" 
                stroke="url(#arrowGrad)" 
                strokeWidth="4.5" 
                strokeLinecap="round" 
              />
              {/* Arrow Head 2 */}
              <path 
                d="M 73,35 L 81.2,32.0 L 85,40" 
                fill="none" 
                stroke="url(#arrowGrad)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 bg-[#0082C6] blur-xl opacity-15 rounded-full group-hover:opacity-35 transition-opacity"></div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-outfit font-extrabold tracking-tight leading-none flex items-center">
              <span className="text-[#00E5FF]">ICE</span>
              <span className="text-white/40 mx-0.5 font-normal">-</span>
              <span className="text-[#0082C6]">TEC</span>
            </span>
            <span className="hidden sm:block text-[8px] font-jetbrains font-medium tracking-wide uppercase opacity-75 mt-0.5 max-w-[200px] leading-tight text-white/90">
              Refrigeração e Ar-condicionado
            </span>
          </div>
        </a>

        {/* CTA Button */}
        <div className="flex items-center flex-shrink-0">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn relative overflow-hidden bg-[#F27C00] hover:bg-[#F27C00]/90 text-white font-outfit text-[10px] sm:text-xs md:text-sm font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full shadow-md shadow-[#F27C00]/20 hover:scale-105 transition-all duration-300 whitespace-nowrap flex-shrink-0 inline-flex items-center justify-center"
          ><span className="sm:hidden">WhatsApp</span><span className="hidden sm:inline">Falar no WhatsApp</span></a>
        </div>
      </div>
    </nav>
  );
}

