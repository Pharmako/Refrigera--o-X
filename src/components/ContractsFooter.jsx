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
              {/* Premium Vector Logo (ICETEC: Snowflake with Circular Arrows) */}
              <div className="w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerFrostBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="100%" stopColor="#00A2F3" />
                    </linearGradient>
                    <linearGradient id="footerArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0F355C" />
                      <stop offset="100%" stopColor="#0082C6" />
                    </linearGradient>
                    {/* Snowflake single branch */}
                    <g id="footer-snowflake-branch">
                      <line x1="50" y1="50" x2="76" y2="50" stroke="url(#footerFrostBlueGrad)" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M 64,50 L 69,45 M 64,50 L 69,55" stroke="url(#footerFrostBlueGrad)" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 57,50 L 61,46 M 57,50 L 61,54" stroke="url(#footerFrostBlueGrad)" strokeWidth="2.2" strokeLinecap="round" />
                    </g>
                  </defs>

                  {/* Center Snowflake - Cyan/Light blue */}
                  <use href="#footer-snowflake-branch" />
                  <use href="#footer-snowflake-branch" transform="rotate(60 50 50)" />
                  <use href="#footer-snowflake-branch" transform="rotate(120 50 50)" />
                  <use href="#footer-snowflake-branch" transform="rotate(180 50 50)" />
                  <use href="#footer-snowflake-branch" transform="rotate(240 50 50)" />
                  <use href="#footer-snowflake-branch" transform="rotate(300 50 50)" />

                  {/* Circular Arrows wrapping the snowflake */}
                  <path 
                    d="M 75.4,24.6 A 36,36 0 0,0 18.8,68.0" 
                    fill="none" 
                    stroke="url(#footerArrowGrad)" 
                    strokeWidth="4.5" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 15,60 L 18.8,68.0 L 27,65" 
                    fill="none" 
                    stroke="url(#footerArrowGrad)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />

                  <path 
                    d="M 24.6,75.4 A 36,36 0 0,0 81.2,32.0" 
                    fill="none" 
                    stroke="url(#footerArrowGrad)" 
                    strokeWidth="4.5" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 73,35 L 81.2,32.0 L 85,40" 
                    fill="none" 
                    stroke="url(#footerArrowGrad)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-outfit font-extrabold tracking-tight flex items-center">
                <span className="text-[#00E5FF]">ICE</span>
                <span className="text-white/40 mx-0.5 font-normal">-</span>
                <span className="text-[#0082C6]">TEC</span>
              </span>
            </div>
            <p className="text-xs text-[#EBF1F6]/80 font-plus-jakarta leading-relaxed max-w-xs">
              Climatização de alto padrão e infraestrutura térmica robusta projetada para garantir o clima exato em residências e comércios de precisão.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-jetbrains text-[#EBF1F6] uppercase tracking-wider block">ICETEC REFRIGERAÇÃO E CLIMATIZAÇÃO © 2026</span>
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
