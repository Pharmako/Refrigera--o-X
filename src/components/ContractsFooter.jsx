import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContractsFooter() {
  return (
    <div className="bg-[#FFFFFF] pt-12 select-none">
      {/* Deep Navy Footer */}
      <footer className="bg-[#0B2136] rounded-t-[4rem] px-6 md:px-12 py-16 text-[#EBF1F6] relative overflow-hidden">
        
        {/* Footer Bottom / Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pb-12 border-b border-[#EBF1F6]/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Premium Vector Logo (Split Snowflake/Sun) */}
              <div className="w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerFrostBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A2F3" />
                      <stop offset="100%" stopColor="#0082C6" />
                    </linearGradient>
                    <linearGradient id="footerSunOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFA834" />
                      <stop offset="100%" stopColor="#F27C00" />
                    </linearGradient>
                    {/* Half snowflake branch */}
                    <g id="footer-snowflake-branch">
                      <line x1="48" y1="50" x2="18" y2="50" stroke="url(#footerFrostBlueGrad)" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M 34,50 L 27,43 M 34,50 L 27,57" stroke="url(#footerFrostBlueGrad)" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 23,50 L 19,45 M 23,50 L 19,55" stroke="url(#footerFrostBlueGrad)" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </defs>

                  {/* Left Side: Snowflake (Frost Blue) */}
                  <path d="M 48,15 L 48,85" stroke="url(#footerFrostBlueGrad)" strokeWidth="4" strokeLinecap="round" />
                  <use href="#footer-snowflake-branch" />
                  <use href="#footer-snowflake-branch" transform="rotate(45 48 50)" />
                  <use href="#footer-snowflake-branch" transform="rotate(-45 48 50)" />

                  {/* Right Side: Sun (Sun Orange) */}
                  <path d="M 52,28 A 22,22 0 0,1 52,72 Z" fill="url(#footerSunOrangeGrad)" />
                  <path d="M 58 29 L 69 17 L 63 34 Z" fill="url(#footerSunOrangeGrad)" />
                  <path d="M 67 36 L 83 31 L 71 41 Z" fill="url(#footerSunOrangeGrad)" />
                  <path d="M 72 47 L 88 50 L 72 53 Z" fill="url(#footerSunOrangeGrad)" />
                  <path d="M 71 59 L 83 69 L 67 64 Z" fill="url(#footerSunOrangeGrad)" />
                  <path d="M 63 66 L 69 83 L 58 71 Z" fill="url(#footerSunOrangeGrad)" />

                  {/* Dotted outer arc around sun */}
                  <path d="M 52,10 A 40,40 0 0,1 52,90" fill="none" stroke="url(#footerSunOrangeGrad)" strokeWidth="2.5" strokeDasharray="4 5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-2xl font-outfit font-extrabold tracking-tight flex items-center">
                <span className="text-[#F27C00]">INSTAL</span>
                <span className="text-[#0082C6]">AR</span>
                <span className="bg-gradient-to-r from-emerald-500 to-yellow-400 bg-clip-text text-transparent ml-1.5">BRASIL</span>
              </span>
            </div>
            <p className="text-xs text-[#EBF1F6]/80 font-plus-jakarta leading-relaxed max-w-xs">
              Climatização de alto padrão e infraestrutura térmica robusta projetada para garantir o clima exato em residências e comércios de precisão.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-jetbrains text-[#EBF1F6] uppercase tracking-wider block">INSTALAR BRASIL CLIMATIZAÇÃO LTDA © 2026</span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-outfit font-bold uppercase tracking-wider text-[#EBF1F6]">NAVEGAÇÃO</h4>
            <div className="flex flex-col gap-2.5 text-xs font-plus-jakarta text-[#EBF1F6]/75">
              <a href="#hero" className="hover:text-white transition-colors">Início</a>
              <a href="#features" className="hover:text-white transition-colors">Especialidades</a>
              <a href="#protocol" className="hover:text-white transition-colors">Qualidade e Detalhes</a>
            </div>
          </div>

          {/* High-Tech Thermostat Status Panel */}
          <div className="bg-[#152331] border border-[#0082C6]/20 rounded-3xl p-6 flex flex-col justify-between min-h-[160px] shadow-lg relative">
            <div className="absolute inset-0 bg-[radial-gradient(#0082C6_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none rounded-3xl"></div>
            
            <div className="flex items-center justify-between border-b border-[#0082C6]/15 pb-3 z-10">
              <span className="text-[8px] font-jetbrains text-[#EBF1F6] tracking-widest uppercase">
                Termostato de Controle
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[8px] font-jetbrains text-emerald-400 font-bold">ONLINE</span>
              </div>
            </div>

            {/* Reading readout */}
            <div className="flex items-baseline gap-2 py-4 z-10 justify-start">
              <span className="text-4xl font-outfit font-extrabold text-white tracking-tight">22°C</span>
              <span className="text-[10px] font-jetbrains text-[#EBF1F6] uppercase">Setpoint</span>
            </div>

            {/* Status Message */}
            <div className="flex items-center gap-2 bg-[#0082C6]/20 border border-[#0082C6]/30 px-3 py-2 rounded-xl z-10">
              <span className="text-[9px] font-jetbrains font-bold text-emerald-400">
                ✅ SISTEMA OTIMIZADO & SEGURO
              </span>
            </div>
          </div>

        </div>

      </footer>
    </div>
  );
}
