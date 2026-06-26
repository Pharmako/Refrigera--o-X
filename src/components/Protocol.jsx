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
      id="protocol"
      ref={containerRef}
      className="w-full bg-[#1A2B3C] py-24 relative select-none"
    >
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-20 text-center">
        <span className="text-xs md:text-sm font-jetbrains font-semibold tracking-wider text-[#0055D4] uppercase block mb-3">
          NOSSO PADRÃO DE QUALIDADE
        </span>
        <h2 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#F8F8F8] uppercase">
          QUALIDADE EM CADA DETALHE
        </h2>
        <p className="max-w-xl mx-auto text-xs md:text-sm text-[#F8F8F8]/60 font-plus-jakarta mt-4">
          Role a página e entenda como nossa instalação e manutenção garantem um ar-condicionado que gela mais, dura mais tempo e não te dá dor de cabeça.
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
                VANTAGEM 01 // DESEMPENHO
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase">
              MÁXIMA EFICIÊNCIA, MENOS GASTO
            </h3>
            
            <p className="text-sm text-[#1A2B3C]/75 font-plus-jakarta leading-relaxed">
              Um ar-condicionado mal instalado ou sujo força o motor e gasta muita energia. Nós garantimos que seu equipamento trabalhe livre, gelando o ambiente rapidamente e pesando muito menos na sua conta de luz.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A2B3C]/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span> 
                Instalação rigorosa aos padrões do fabricante
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span>
                Vida útil prolongada do seu equipamento
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
                VANTAGEM 02 // INFRAESTRUTURA
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase">
              INSTALAÇÃO LIMPA E SEM VAZAMENTOS
            </h3>
            
            <p className="text-sm text-[#1A2B3C]/75 font-plus-jakarta leading-relaxed">
              Sabe aquele ar-condicionado que vive pingando na parede ou que "perde" o gás do nada? Isso é falha de tubulação. Usamos apenas materiais de primeira linha para que a água vá para o lugar certo e o gás fique onde deve estar.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A2B3C]/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span> 
                Tubulação de cobre (resistente e anti-vazamento)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span>
                Isolamento e drenagem perfeitos (zero pinga-pinga)
              </li>
            </ul>
          </div>

          {/* Isometric Pipe & Drain visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-white rounded-3xl p-6 border border-[#4682B4]/10 shadow-inner relative overflow-hidden">
            {/* Engineering grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#4682B4_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            
            <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10">
              {/* Outer copper pipe (Gás) */}
              <path 
                d="M 20,50 L 120,100 H 180" 
                fill="none" 
                stroke="#D35400" 
                strokeWidth="10" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Inner gas flow wave (blue) */}
              <path 
                d="M 20,50 L 120,100 H 180" 
                fill="none" 
                stroke="#00D4FF" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeDasharray="8 6" 
                className="animate-pipe-flow"
              />
              
              {/* Hexagon nut at connection (120, 100) */}
              <polygon points="120,85 133,92 133,108 120,115 107,108 107,92" fill="#BDC3C7" stroke="#7F8C8D" strokeWidth="1.5" />

              {/* Wrench (Chave de Boca/Rosca) tightening the nut */}
              <g className="animate-wrench" style={{ transformOrigin: '120px 100px' }}>
                {/* Wrench handle */}
                <rect x="65" y="96" width="45" height="8" rx="2" fill="#BDC3C7" stroke="#7F8C8D" strokeWidth="1" transform="rotate(-45 120 100)" />
                {/* Wrench head */}
                <circle cx="120" cy="100" r="14" fill="none" stroke="#BDC3C7" strokeWidth="4.5" />
                {/* Wrench jaw cutout (white to overlay nut) */}
                <polygon points="120,100 135,85 135,115" fill="#ffffff" />
              </g>

              {/* Screw head at (165, 70) */}
              <g transform="translate(165, 70)">
                <circle cx="0" cy="0" r="6" fill="#BDC3C7" stroke="#7F8C8D" strokeWidth="1" />
                <line x1="-4" y1="-4" x2="4" y2="4" stroke="#7F8C8D" strokeWidth="2" className="animate-screw-rotate" style={{ transformOrigin: '0px 0px' }} />
              </g>

              {/* Screwdriver (Chave de Fenda) tightening the screw */}
              <g className="animate-screwdriver" style={{ transformOrigin: '165px 70px' }}>
                {/* Shaft */}
                <line x1="200" y1="35" x2="165" y2="70" stroke="#BDC3C7" strokeWidth="3" strokeLinecap="round" />
                {/* Handle */}
                <rect x="195" y="10" width="10" height="28" rx="3" fill="#0055D4" transform="rotate(45 200 35)" />
              </g>

              {/* Drain pipe (Dreno) */}
              <path 
                d="M 40,120 L 120,150 L 120,175" 
                fill="none" 
                stroke="#2980B9" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                opacity="0.35" 
              />
              
              {/* Checkmark ✅ at bottom of dreno */}
              <g transform="translate(120, 175)" className="animate-check-pulse">
                <circle cx="0" cy="0" r="9" fill="#10B981" />
                <path 
                  d="M -3.5,0 L -0.5,3 L 3.5,-2.5" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </g>

              {/* Water droplet sliding along dreno path */}
              <circle r="4" fill="#00D4FF" opacity="0.95" filter="drop-shadow(0 1px 3px rgba(0,212,255,0.4))">
                <animateMotion 
                  path="M 40,120 L 120,150 L 120,175" 
                  dur="3s" 
                  repeatCount="indefinite" 
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* CARD 3: Health / Air Purification */}
        <div className="protocol-card sticky top-28 bg-[#F8F8F8] rounded-[2.5rem] p-8 md:p-12 border border-[#4682B4]/20 shadow-2xl text-[#1A2B3C] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0055D4]/10 text-[#0055D4]">
                <Wind className="w-6 h-6" />
              </div>
              <span className="font-jetbrains text-xs font-semibold text-[#0055D4] tracking-widest uppercase">
                VANTAGEM 03 // SAÚDE E BEM-ESTAR
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase">
              AR PURO DE VERDADE, SEM ALERGIAS
            </h3>
            
            <p className="text-sm text-[#1A2B3C]/75 font-plus-jakarta leading-relaxed">
              Um ar-condicionado sujo é o maior vilão das crises respiratórias e do mau cheiro no ambiente. Nossa higienização profunda vai muito além de "bater uma água" no filtro: eliminamos fungos, ácaros e bactérias para proteger a sua família ou seus clientes.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A2B3C]/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span> 
                Limpeza profunda com produtos específicos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055D4]"></span>
                Aplicação de bactericida profissional
              </li>
            </ul>
          </div>

          {/* Fan Scanning visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-white rounded-3xl p-6 border border-[#4682B4]/10 shadow-inner relative overflow-hidden">
            {/* Engineering grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#4682B4_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            
            <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10">
              <defs>
                {/* Clean fan gradient */}
                <linearGradient id="cleanFanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0055D4" />
                </linearGradient>
                {/* Clip path for scan transition */}
                <clipPath id="scanClip">
                  <rect x="0" y="0" width="200" height="0" className="animate-scan-clip" />
                </clipPath>
              </defs>

              {/* LAYER 1: Dirty Grey Fan */}
              <g className="animate-spin-slow" style={{ transformOrigin: '100px 100px' }}>
                <circle cx="100" cy="100" r="15" fill="#7F8C8D" />
                {/* Blades (Grey) */}
                <path d="M 100,85 C 80,60 90,30 100,30 C 110,30 120,60 100,85 Z" fill="#95A5A6" />
                <path d="M 115,100 C 140,80 170,90 170,100 C 170,110 140,120 115,100 Z" fill="#95A5A6" />
                <path d="M 100,115 C 120,140 110,170 100,170 C 90,170 80,140 100,115 Z" fill="#95A5A6" />
                <path d="M 85,100 C 60,120 30,110 30,100 C 30,90 60,80 85,100 Z" fill="#95A5A6" />
              </g>

              {/* LAYER 2: Clean Crystal Blue Fan (Clipped) */}
              <g clipPath="url(#scanClip)">
                <g className="animate-spin-slow" style={{ transformOrigin: '100px 100px' }}>
                  <circle cx="100" cy="100" r="15" fill="#00D4FF" filter="drop-shadow(0 0 4px rgba(0,212,255,0.6))" />
                  {/* Blades (Crystalline) */}
                  <path d="M 100,85 C 80,60 90,30 100,30 C 110,30 120,60 100,85 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(0,85,212,0.4))" />
                  <path d="M 115,100 C 140,80 170,90 170,100 C 170,110 140,120 115,100 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(0,85,212,0.4))" />
                  <path d="M 100,115 C 120,140 110,170 100,170 C 90,170 80,140 100,115 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(0,85,212,0.4))" />
                  <path d="M 85,100 C 60,120 30,110 30,100 C 30,90 60,80 85,100 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(0,85,212,0.4))" />
                </g>
              </g>

              {/* Scanning laser line overlay */}
              <line x1="10" y1="0" x2="190" y2="0" stroke="#00D4FF" strokeWidth="2.5" className="animate-scan-line" filter="drop-shadow(0 0 4px #00D4FF)" />

              {/* Clean Sparkles */}
              <g className="animate-sparkle-1" transform="translate(60, 50)">
                <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#FFF" />
              </g>
              <g className="animate-sparkle-2" transform="translate(140, 65)">
                <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#00D4FF" />
              </g>
              <g className="animate-sparkle-3" transform="translate(100, 40)">
                <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#FFF" filter="drop-shadow(0 0 2px #00D4FF)" />
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
