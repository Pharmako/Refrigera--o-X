import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Wind, Gauge, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll('.protocol-card');
      
      cards.forEach((card, i) => {
        // We only scale down cards if they have another card stacking on top
        if (i === cards.length - 1) return;
        
        const nextCard = cards[i + 1];
        
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.4,
          filter: 'blur(12px)',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top 85%',
            end: 'top 35%',
            scrub: true,
          }
        });
      });

      // Spin the rotary compressor gear in Card 1 on scroll
      gsap.to('.gear-rotate-cw', {
        rotate: 360,
        scrollTrigger: {
          trigger: '.card-compressor',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to('.gear-rotate-ccw', {
        rotate: -720,
        scrollTrigger: {
          trigger: '.card-compressor',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#1A2B3C] py-24 relative select-none"
    >
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-20 text-center">
        <span className="text-xs md:text-sm font-jetbrains font-semibold tracking-wider text-[#0055D4] uppercase block mb-3">
          Protocolos e Arquitetura Térmica
        </span>
        <h2 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#F8F8F8] uppercase">
          Multissoluções Integradas
        </h2>
        <p className="max-w-xl mx-auto text-xs md:text-sm text-[#F8F8F8]/60 font-plus-jakarta mt-4">
          Conheça os detalhes de engenharia por trás do clima perfeito. Role para analisar os módulos funcionais.
        </p>
      </div>

      {/* Cards stack container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* CARD 1: Compressor Inverter */}
        <div className="protocol-card card-compressor sticky top-28 bg-[#F8F8F8] rounded-[2.5rem] p-8 md:p-12 border border-[#4682B4]/20 shadow-2xl text-[#1A2B3C] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0055D4]/10 text-[#0055D4]">
                <Gauge className="w-6 h-6" />
              </div>
              <span className="font-jetbrains text-xs font-semibold text-[#0055D4] tracking-widest uppercase">
                Protocolo 01 // Compressor
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase">
              Compressor Inverter Rotativo
            </h3>
            
            <p className="text-sm text-[#1A2B3C]/75 font-plus-jakarta leading-relaxed">
              O núcleo do sistema. Nosso compressor opera com modulação inteligente contínua, reduzindo picos de partida e modulando a vazão calórica com precisão infinitesimal.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A2B3C]/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span> 
                Modulação contínua DC Inverter
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span>
                Redução de até 40% no consumo ativo
              </li>
            </ul>
          </div>

          {/* Interactive Gear SVG Visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-white rounded-3xl p-6 border border-[#4682B4]/10 shadow-inner relative overflow-hidden">
            {/* Engineering grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#4682B4_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            
            <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10 filter drop-shadow-md">
              {/* Outer compressor casing */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="#1A2B3C" strokeWidth="4" strokeDasharray="5 3" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#4682B4" strokeWidth="2" />
              
              {/* Large gear (Clockwise) */}
              <g className="gear-rotate-cw" style={{ transformOrigin: '100px 100px' }}>
                <circle cx="100" cy="100" r="45" fill="none" stroke="#1A2B3C" strokeWidth="8" />
                {/* Gear teeth */}
                {[...Array(12)].map((_, i) => (
                  <rect 
                    key={i} 
                    x="95" 
                    y="45" 
                    width="10" 
                    height="12" 
                    fill="#1A2B3C" 
                    transform={`rotate(${i * 30} 100 100)`} 
                  />
                ))}
              </g>

              {/* Small planetary gear (Counter-clockwise) */}
              <g className="gear-rotate-ccw" style={{ transformOrigin: '100px 100px' }}>
                <circle cx="100" cy="100" r="22" fill="none" stroke="#0055D4" strokeWidth="5" />
                {/* Gear teeth */}
                {[...Array(8)].map((_, i) => (
                  <rect 
                    key={i} 
                    x="96" 
                    y="72" 
                    width="8" 
                    height="8" 
                    fill="#0055D4" 
                    transform={`rotate(${i * 45} 100 100)`} 
                  />
                ))}
              </g>
              
              <circle cx="100" cy="100" r="8" fill="#1A2B3C" />
            </svg>
          </div>
        </div>

        {/* CARD 2: Laser Piping Scan */}
        <div className="protocol-card sticky top-28 bg-[#F8F8F8] rounded-[2.5rem] p-8 md:p-12 border border-[#4682B4]/20 shadow-2xl text-[#1A2B3C] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0055D4]/10 text-[#0055D4]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-jetbrains text-xs font-semibold text-[#0055D4] tracking-widest uppercase">
                Protocolo 02 // Zoneamento
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase">
              Esqueleto de Tubulação Termoativa
            </h3>
            
            <p className="text-sm text-[#1A2B3C]/75 font-plus-jakarta leading-relaxed">
              Estrutura de rede de fluidos color-coded modelada tridimensionalmente para equalizar perdas e balancear a carga térmica entre áreas residenciais e comerciais.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A2B3C]/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span> 
                Tubulação certificada livre de vazamentos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span>
                Isolamento elastomérico de alto fator térmico
              </li>
            </ul>
          </div>

          {/* Scanning blueprint visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-[#1A2B3C] rounded-3xl p-6 border border-[#0055D4]/30 shadow-inner relative overflow-hidden">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,85,212,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,85,212,0.15)_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
            
            {/* Technical drawing of pipes */}
            <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10">
              {/* Cold pipe line */}
              <path d="M 20,40 H 140 V 120 H 180" fill="none" stroke="#0055D4" strokeWidth="4" strokeLinecap="round" />
              {/* Hot return pipe line */}
              <path d="M 20,60 H 120 V 140 H 180" fill="none" stroke="#E74C3C" strokeWidth="4" strokeLinecap="round" />
              {/* Connectors */}
              <rect x="135" y="35" width="10" height="10" fill="#4682B4" />
              <rect x="115" y="55" width="10" height="10" fill="#4682B4" />
              <circle cx="20" cy="40" r="6" fill="#0055D4" />
              <circle cx="20" cy="60" r="6" fill="#E74C3C" />
            </svg>

            {/* Glowing Laser Scan bar overlay */}
            <div className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20 animate-[bounce_4s_infinite]"></div>
          </div>
        </div>

        {/* CARD 3: Fluid Waveform */}
        <div className="protocol-card sticky top-28 bg-[#F8F8F8] rounded-[2.5rem] p-8 md:p-12 border border-[#4682B4]/20 shadow-2xl text-[#1A2B3C] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0055D4]/10 text-[#0055D4]">
                <Wind className="w-6 h-6" />
              </div>
              <span className="font-jetbrains text-xs font-semibold text-[#0055D4] tracking-widest uppercase">
                Protocolo 03 // Termodinâmica
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase">
              Ciclos Fluidodinâmicos
            </h3>
            
            <p className="text-sm text-[#1A2B3C]/75 font-plus-jakarta leading-relaxed">
              Otimização de ondas térmicas baseado na troca calórica de gases ecológicos, evitando estrangulamentos na troca evaporador/condensador.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A2B3C]/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span> 
                Eco-refrigerante de baixíssimo GWP (R-32)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span>
                Troca térmica maximizada por microcanais
              </li>
            </ul>
          </div>

          {/* Flow waves visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-white rounded-3xl p-6 border border-[#4682B4]/10 shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#0055D4_1px,transparent_1px)] [background-size:24px_24px] opacity-5"></div>
            
            <svg viewBox="0 0 200 100" className="w-full h-32 relative z-10">
              {/* Cold Flow wave */}
              <path 
                d="M 0,30 C 50,0 50,60 100,30 C 150,0 150,60 200,30" 
                fill="none" 
                stroke="#0055D4" 
                strokeWidth="4" 
                strokeDasharray="10 5" 
                className="animate-[dash_8s_linear_infinite]"
                style={{
                  animation: 'dash-flow 10s linear infinite'
                }}
              />
              {/* Hot Flow wave */}
              <path 
                d="M 0,70 C 50,100 50,40 100,70 C 150,100 150,40 200,70" 
                fill="none" 
                stroke="#E74C3C" 
                strokeWidth="4" 
                strokeDasharray="10 5" 
                style={{
                  animation: 'dash-flow-reverse 12s linear infinite'
                }}
              />
            </svg>
            
            {/* Quick inline keyframe injection */}
            <style>{`
              @keyframes dash-flow {
                to { stroke-dashoffset: -100; }
              }
              @keyframes dash-flow-reverse {
                to { stroke-dashoffset: 100; }
              }
            `}</style>
          </div>
        </div>

        {/* CARD 4: LARGE VRF DIAGRAM CARD */}
        <div className="protocol-card sticky top-28 bg-[#F8F8F8] rounded-[2.5rem] p-8 md:p-12 border border-[#0055D4]/30 shadow-2xl text-[#1A2B3C] flex flex-col justify-between min-h-[580px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-6">
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0055D4]/10 text-[#0055D4]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-jetbrains text-xs font-semibold text-[#0055D4] tracking-widest uppercase">
                  Mapeamento Geral // VRF
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-outfit font-extrabold tracking-tight uppercase">
                SOLUÇÕES VRF: CONFORTO MULTIZONAS
              </h3>
              
              <p className="text-xs md:text-sm text-[#1A2B3C]/75 font-plus-jakarta leading-relaxed">
                Diagrama técnico de interligação de fluxo térmico residencial ou empresarial. Uma única unidade externa (condensadora) gerencia e alimenta dinamicamente várias unidades evaporadoras internas (Hi-Wall, Cassete ou Dutos) conforme a demanda instantânea de cada espaço.
              </p>
            </div>

            {/* Comprehensive Technical Diagram */}
            <div className="lg:col-span-2 bg-[#1A2B3C] rounded-3xl p-6 border border-[#0055D4]/20 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              {/* Structural grid blueprint background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,85,212,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,85,212,0.1)_1px,transparent_1px)] [background-size:15px_15px] opacity-35"></div>
              
              <div className="relative z-10 flex items-center justify-between border-b border-[#F8F8F8]/10 pb-4 mb-4">
                <span className="text-[9px] font-jetbrains tracking-wider text-[#4682B4] uppercase">
                  Circuito de Automação Térmica // DIAGRAMA VRF
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-jetbrains text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  OPERACIONAL
                </span>
              </div>

              {/* The VRF Architecture Illustration */}
              <div className="relative z-10 flex-1 grid grid-cols-5 gap-4 items-center">
                {/* Central Condenser Box */}
                <div className="col-span-1.5 flex flex-col items-center gap-2 bg-[#F8F8F8]/5 border border-[#4682B4]/30 rounded-2xl p-3 text-center">
                  <span className="text-[8px] font-jetbrains text-[#4682B4] tracking-widest uppercase">EXTERNA</span>
                  <div className="w-12 h-12 rounded-xl bg-[#0055D4]/20 border border-[#0055D4]/50 flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin-slow">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-outfit font-extrabold text-[#F8F8F8]">CONDENSADOR</span>
                  <span className="text-[8px] font-jetbrains text-emerald-400">STATUS: OK</span>
                </div>

                {/* Connecting Piping Lines (Branching) */}
                <div className="col-span-2 h-full relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                    {/* Main trunks */}
                    <line x1="0" y1="50" x2="40" y2="50" stroke="#0055D4" strokeWidth="3" />
                    <line x1="0" y1="55" x2="40" y2="55" stroke="#E74C3C" strokeWidth="2" />
                    
                    {/* Branches to Top unit */}
                    <path d="M 40,50 L 40,20 L 100,20" fill="none" stroke="#0055D4" strokeWidth="2" />
                    <path d="M 40,55 L 42,25 L 100,25" fill="none" stroke="#E74C3C" strokeWidth="1.5" />
                    
                    {/* Branches to Center unit */}
                    <line x1="40" y1="50" x2="100" y2="50" stroke="#0055D4" strokeWidth="2" />
                    <line x1="40" y1="55" x2="100" y2="55" stroke="#E74C3C" strokeWidth="1.5" />

                    {/* Branches to Bottom unit */}
                    <path d="M 40,50 L 40,80 L 100,80" fill="none" stroke="#0055D4" strokeWidth="2" />
                    <path d="M 40,55 L 42,75 L 100,75" fill="none" stroke="#E74C3C" strokeWidth="1.5" />
                  </svg>
                  {/* Glowing pulses running along */}
                  <span className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] top-[16%] left-[45%] animate-[pulse-path-1_3s_linear_infinite]"></span>
                  <span className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] top-[46%] left-[55%] animate-[pulse-path-2_2s_linear_infinite]"></span>
                  <span className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] top-[76%] left-[45%] animate-[pulse-path-3_4s_linear_infinite]"></span>
                </div>

                {/* Evaporator Units (Indoor) */}
                <div className="col-span-1.5 space-y-3">
                  {/* Unit 1 */}
                  <div className="flex items-center justify-between gap-2 bg-[#F8F8F8]/5 border border-[#F8F8F8]/10 rounded-xl p-2">
                    <div className="text-left">
                      <span className="text-[7px] font-jetbrains text-[#4682B4] block uppercase">ZONA 01 // COZINHA</span>
                      <span className="text-[9px] font-outfit font-bold text-[#F8F8F8] uppercase">Evaporador A</span>
                    </div>
                    <span className="text-[10px] font-jetbrains text-cyan-400 font-bold bg-[#0055D4]/20 px-2 py-0.5 rounded border border-[#0055D4]/30">21.5°C</span>
                  </div>

                  {/* Unit 2 */}
                  <div className="flex items-center justify-between gap-2 bg-[#F8F8F8]/5 border border-[#F8F8F8]/10 rounded-xl p-2">
                    <div className="text-left">
                      <span className="text-[7px] font-jetbrains text-[#4682B4] block uppercase">ZONA 02 // SALA</span>
                      <span className="text-[9px] font-outfit font-bold text-[#F8F8F8] uppercase">Evaporador B</span>
                    </div>
                    <span className="text-[10px] font-jetbrains text-cyan-400 font-bold bg-[#0055D4]/20 px-2 py-0.5 rounded border border-[#0055D4]/30">22.0°C</span>
                  </div>

                  {/* Unit 3 */}
                  <div className="flex items-center justify-between gap-2 bg-[#F8F8F8]/5 border border-[#F8F8F8]/10 rounded-xl p-2">
                    <div className="text-left">
                      <span className="text-[7px] font-jetbrains text-[#4682B4] block uppercase">ZONA 03 // SUÍTE</span>
                      <span className="text-[9px] font-outfit font-bold text-[#F8F8F8] uppercase">Evaporador C</span>
                    </div>
                    <span className="text-[10px] font-jetbrains text-cyan-400 font-bold bg-[#0055D4]/20 px-2 py-0.5 rounded border border-[#0055D4]/30">19.0°C</span>
                  </div>
                </div>
              </div>
              
              <style>{`
                @keyframes pulse-path-1 {
                  0% { left: 40%; top: 48%; }
                  50% { left: 40%; top: 16%; }
                  100% { left: 95%; top: 16%; opacity: 0; }
                }
                @keyframes pulse-path-2 {
                  0% { left: 40%; top: 48%; }
                  100% { left: 95%; top: 48%; opacity: 0; }
                }
                @keyframes pulse-path-3 {
                  0% { left: 40%; top: 48%; }
                  50% { left: 40%; top: 76%; }
                  100% { left: 95%; top: 76%; opacity: 0; }
                }
              `}</style>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
