import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContractsFooter() {
  return (
    <div className="bg-[#F8F8F8] pt-12 select-none">
      {/* Deep Night Blue Footer */}
      <footer className="bg-[#1A2B3C] rounded-t-[4rem] px-6 md:px-12 py-16 text-[#F8F8F8] relative overflow-hidden">
        
        {/* Footer Top */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pb-12 border-b border-[#F8F8F8]/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-outfit font-extrabold tracking-tight text-white">JL FRIO</span>
            </div>
            <p className="text-xs text-[#F8F8F8]/60 font-plus-jakarta leading-relaxed max-w-xs">
              Engenharia Térmica Avançada projetada para garantir o clima exato em residências de alto padrão e comércios de precisão.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-jetbrains text-[#4682B4] uppercase tracking-wider block">JL FRIO ENGENHARIA LTDA © 2026</span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-outfit font-bold uppercase tracking-wider text-[#4682B4]">NAVEGAÇÃO</h4>
            <div className="flex flex-col gap-2.5 text-xs font-plus-jakarta text-[#F8F8F8]/75">
              <a href="#hero" className="hover:text-white transition-colors">Início</a>
              <a href="#features" className="hover:text-white transition-colors">Soluções Térmicas</a>
              <a href="#features" className="hover:text-white transition-colors">Métricas de Performance</a>
              <a href="#protocol" className="hover:text-white transition-colors">Padrão de Qualidade</a>
            </div>
          </div>



          {/* High-Tech Thermostat Status Panel */}
          <div className="bg-[#2A2A2A] border border-[#0055D4]/30 rounded-3xl p-6 flex flex-col justify-between min-h-[160px] shadow-lg relative">
            <div className="absolute inset-0 bg-[radial-gradient(#0055D4_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none rounded-3xl"></div>
            
            <div className="flex items-center justify-between border-b border-[#F8F8F8]/10 pb-3 z-10">
              <span className="text-[8px] font-jetbrains text-[#4682B4] tracking-widest uppercase">
                Termostato de Controle
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[8px] font-jetbrains text-emerald-400 font-bold">ONLINE</span>
              </div>
            </div>

            {/* Reading readout */}
            <div className="flex items-baseline gap-2 py-4 z-10 justify-start">
              <span className="text-4xl font-outfit font-extrabold text-[#F8F8F8] tracking-tight">22°C</span>
              <span className="text-[10px] font-jetbrains text-[#4682B4] uppercase">Setpoint</span>
            </div>

            {/* Status Message */}
            <div className="flex items-center gap-2 bg-[#1A2B3C] border border-[#4682B4]/25 px-3 py-2 rounded-xl z-10">
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
