import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContractsFooter() {
  return (
    <div className="bg-[#FFFFFF] pt-12 select-none">
      {/* Deep Green Footer */}
      <footer className="bg-[#0F4A2C] rounded-t-[4rem] px-6 md:px-12 py-16 text-[#E0E4E1] relative overflow-hidden">
        
        {/* Footer Bottom / Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pb-12 border-b border-[#E0E4E1]/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 120 108" className="w-full h-full">
                  {/* Inverted white oval for dark footer background */}
                  <ellipse cx="60" cy="54" rx="48" ry="38" transform="rotate(-15 60 54)" fill="#FFFFFF" />
                  <path d="M 38 72 L 50 36 L 58 36 L 46 72 Z" fill="#0F4A2C" />
                  <path d="M 48 72 L 60 36 L 86 36 L 82 46 L 64.67 46 L 61.33 56 L 76 56 L 72 64 L 58.67 64 L 56 72 Z" fill="#0F4A2C" />
                </svg>
              </div>
              <span className="text-2xl font-outfit font-extrabold tracking-tight text-white">Frioar</span>
            </div>
            <p className="text-xs text-[#E0E4E1]/80 font-plus-jakarta leading-relaxed max-w-xs">
              Engenharia Térmica Avançada projetada para garantir o clima exato em residências de alto padrão e comércios de precisão.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-jetbrains text-[#E0E4E1] uppercase tracking-wider block">Frioar Engenharia Ltda © 2026</span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-outfit font-bold uppercase tracking-wider text-[#E0E4E1]">NAVEGAÇÃO</h4>
            <div className="flex flex-col gap-2.5 text-xs font-plus-jakarta text-[#E0E4E1]/75">
              <a href="#hero" className="hover:text-white transition-colors">Início</a>
              <a href="#features" className="hover:text-white transition-colors">Soluções Térmicas</a>
              <a href="#features" className="hover:text-white transition-colors">Métricas de Performance</a>
              <a href="#protocol" className="hover:text-white transition-colors">Padrão de Qualidade</a>
            </div>
          </div>



          {/* High-Tech Thermostat Status Panel */}
          <div className="bg-[#1A1A1A] border border-[#E0E4E1]/20 rounded-3xl p-6 flex flex-col justify-between min-h-[160px] shadow-lg relative">
            <div className="absolute inset-0 bg-[radial-gradient(#E0E4E1_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none rounded-3xl"></div>
            
            <div className="flex items-center justify-between border-b border-[#E0E4E1]/10 pb-3 z-10">
              <span className="text-[8px] font-jetbrains text-[#E0E4E1] tracking-widest uppercase">
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
              <span className="text-[10px] font-jetbrains text-[#E0E4E1] uppercase">Setpoint</span>
            </div>

            {/* Status Message */}
            <div className="flex items-center gap-2 bg-[#0F4A2C] border border-[#E0E4E1]/25 px-3 py-2 rounded-xl z-10">
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
