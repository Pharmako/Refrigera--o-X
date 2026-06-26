import React from 'react';
import { Shield, Sparkles, Check, Phone, ArrowUpRight, Flame } from 'lucide-react';

export default function ContractsFooter() {
  return (
    <div id="contracts" className="bg-[#F8F8F8] pt-24 select-none">
      
      {/* 3-Tier Services Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-jetbrains font-semibold tracking-wider text-[#0055D4] uppercase block mb-3">
            Planos de Climatização e Prevenção
          </span>
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A2B3C] uppercase">
            Contratos de Engenharia
          </h2>
          <p className="max-w-md mx-auto text-xs md:text-sm text-[#1A2B3C]/70 font-plus-jakarta mt-3">
            Soluções estruturadas para manter seu sistema operando com eficiência máxima o ano inteiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Preventativo */}
          <div className="rounded-[2rem] bg-white border border-[#4682B4]/15 p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 text-[#4682B4] mb-6">
                <Shield className="w-5 h-5" />
                <span className="text-[10px] font-jetbrains font-bold tracking-widest uppercase">MÓDULO BÁSICO</span>
              </div>
              
              <h3 className="text-2xl font-outfit font-extrabold text-[#1A2B3C] uppercase">
                Preventivo
              </h3>
              <p className="text-xs font-plus-jakarta text-[#1A2B3C]/60 mt-2 mb-6">
                Ideal para manter a qualidade do ar e conformidade básica em residências.
              </p>
              
              <div className="border-t border-[#1A2B3C]/10 pt-6 mb-8 space-y-3.5">
                {[
                  'Limpeza periódica de filtros',
                  'Higienização de dutos de ar',
                  'Medição de pressão de refrigerante',
                  'Relatório de conformidade anual'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-plus-jakarta text-[#1A2B3C]/80">
                    <Check className="w-4 h-4 text-[#0055D4]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="magnetic-btn relative overflow-hidden w-full py-3.5 rounded-full border border-[#1A2B3C]/20 text-[#1A2B3C] font-outfit text-xs font-bold hover:bg-[#1A2B3C] hover:text-[#F8F8F8] transition-all duration-300">
              Contratar Preventivo
            </button>
          </div>

          {/* Plan 2: Corporativo (Pops with Steel Blue / Cobalt Button) */}
          <div className="rounded-[2rem] bg-[#4682B4] border border-[#0055D4]/20 p-8 flex flex-col justify-between shadow-xl text-white relative transform md:-translate-y-4 hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-4 right-4 bg-[#0055D4] text-[#F8F8F8] text-[8px] font-jetbrains font-bold tracking-widest px-3 py-1 rounded-full border border-[#F8F8F8]/10">
              RECOMENDADO
            </div>

            <div>
              <div className="flex items-center gap-2 text-cyan-200 mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-[10px] font-jetbrains font-bold tracking-widest uppercase">MÓDULO AVANÇADO</span>
              </div>
              
              <h3 className="text-2xl font-outfit font-extrabold uppercase">
                Corporativo
              </h3>
              <p className="text-xs font-plus-jakarta text-[#F8F8F8]/80 mt-2 mb-6">
                Otimização contínua de eficiência térmica para escritórios, data centers e clínicas.
              </p>
              
              <div className="border-t border-[#F8F8F8]/15 pt-6 mb-8 space-y-3.5">
                {[
                  'Atendimento prioritário (Chamados até 4h)',
                  'Calibração de zoneamento VRF por telemetria',
                  'Higienização profunda bactericida trimestral',
                  'Auditoria termográfica com drones internos',
                  'Substituição de peças com 20% desconto'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-plus-jakarta text-[#F8F8F8]">
                    <Check className="w-4 h-4 text-cyan-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="magnetic-btn relative overflow-hidden w-full py-4 rounded-full bg-[#0055D4] text-white font-outfit text-xs font-extrabold hover:bg-[#0055D4]/90 shadow-lg shadow-[#0055D4]/30 transition-all">
              Contratar Corporativo
            </button>
          </div>

          {/* Plan 3: Customizado */}
          <div className="rounded-[2rem] bg-white border border-[#4682B4]/15 p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 text-[#4682B4] mb-6">
                <Flame className="w-5 h-5" />
                <span className="text-[10px] font-jetbrains font-bold tracking-widest uppercase">MÓDULO LAB</span>
              </div>
              
              <h3 className="text-2xl font-outfit font-extrabold text-[#1A2B3C] uppercase">
                Customizado
              </h3>
              <p className="text-xs font-plus-jakarta text-[#1A2B3C]/60 mt-2 mb-6">
                Para demandas industriais, salas cirúrgicas ou automação residencial complexa.
              </p>
              
              <div className="border-t border-[#1A2B3C]/10 pt-6 mb-8 space-y-3.5">
                {[
                  'Dimensionamento sob medida do projeto',
                  'Suporte técnico dedicado 24/7',
                  'Painel customizado de telemetria IoT',
                  'Controle acústico estrutural',
                  'Garantia vitalícia em solda térmica'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-plus-jakarta text-[#1A2B3C]/80">
                    <Check className="w-4 h-4 text-[#0055D4]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="magnetic-btn relative overflow-hidden w-full py-3.5 rounded-full border border-[#1A2B3C]/20 text-[#1A2B3C] font-outfit text-xs font-bold hover:bg-[#1A2B3C] hover:text-[#F8F8F8] transition-all duration-300">
              Falar com Engenheiro
            </button>
          </div>

        </div>
      </div>

      {/* Deep Night Blue Footer */}
      <footer className="bg-[#1A2B3C] rounded-t-[4rem] px-6 md:px-12 py-16 text-[#F8F8F8] relative overflow-hidden">
        
        {/* Footer Top */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-start pb-12 border-b border-[#F8F8F8]/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-outfit font-extrabold tracking-tight">JL FRIO</span>
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
              <a href="#solutions" className="hover:text-white transition-colors">Soluções Térmicas</a>
              <a href="#features" className="hover:text-white transition-colors">Métricas de Performance</a>
              <a href="#philosophy" className="hover:text-white transition-colors">Manifesto Técnico</a>
            </div>
          </div>

          {/* Tech Spec Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-outfit font-bold uppercase tracking-wider text-[#4682B4]">ESPECIFICAÇÕES</h4>
            <div className="flex flex-col gap-2.5 text-xs font-jetbrains text-[#F8F8F8]/60">
              <div className="flex justify-between">
                <span>DC INVERTER PROTOCOL</span>
                <span className="text-emerald-400">V.4.2</span>
              </div>
              <div className="flex justify-between">
                <span>REFRIGERANTE ATIVO</span>
                <span>R-32</span>
              </div>
              <div className="flex justify-between">
                <span>ZONAS CONECTADAS</span>
                <span>06 MAX</span>
              </div>
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
              <span className="text-4xl font-outfit font-extrabold text-[#F8F8F8] tracking-tight">26°</span>
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

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-jetbrains text-[#F8F8F8]/40">
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>//</span>
            <a href="#security" className="hover:text-white transition-colors">Segurança Térmica</a>
          </div>
          <div className="flex items-center gap-1 text-[#4682B4]">
            <span>DESIGNED BY CREATIVE LAB</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>

      </footer>
    </div>
  );
}
