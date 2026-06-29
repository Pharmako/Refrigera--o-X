import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wind, Gauge, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);
  const card2Ref = useRef(null);
  const snowflakeRevealRef = useRef(null);

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

      // GSAP Scroll Reveal for Card 2 Snowflake
      const revealEl = snowflakeRevealRef.current;
      if (revealEl) {
        gsap.fromTo(revealEl,
          {
            scale: 1.5,
            filter: 'blur(15px)',
          },
          {
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card2Ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="protocol"
      ref={containerRef}
      className="w-full bg-[#0F4A2C] py-24 relative select-none"
    >
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-20 text-center">
        <span className="text-xs md:text-sm font-jetbrains font-semibold tracking-wider text-[#E0E4E1] uppercase block mb-3">
          NOSSO PADRÃO DE QUALIDADE
        </span>
        <h2 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
          QUALIDADE EM CADA DETALHE
        </h2>
        <p className="max-w-xl mx-auto text-xs md:text-sm text-white/60 font-plus-jakarta mt-4">
          Role a página e entenda como nossa instalação e manutenção garantem um ar-condicionado que gela mais, dura mais tempo e não te dá dor de cabeça.
        </p>
      </div>

      {/* Cards stack container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* CARD 1: Compressor Inverter */}
        <div className="protocol-card card-compressor sticky top-28 bg-[#FFFFFF] rounded-[2.5rem] p-8 md:p-12 border border-[#E0E4E1] shadow-2xl text-[#1A1A1A] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0F4A2C]/10 text-[#0F4A2C]">
                <Gauge className="w-6 h-6" />
              </div>
              <span className="font-jetbrains text-xs font-semibold text-[#0F4A2C] tracking-widest uppercase">
                VANTAGEM 01 // DESEMPENHO
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase text-[#1A1A1A]">
              MÁXIMA EFICIÊNCIA, MENOS GASTO
            </h3>
            
            <p className="text-sm text-[#1A1A1A]/80 font-plus-jakarta leading-relaxed">
              Um ar-condicionado mal instalado ou sujo força o motor e gasta muita energia. Nós garantimos que seu equipamento trabalhe livre, gelando o ambiente rapidamente e pesando muito menos na sua conta de luz.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A1A1A]/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4A2C]"></span> 
                Instalação rigorosa aos padrões do fabricante
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4A2C]"></span>
                Vida útil prolongada do seu equipamento
              </li>
            </ul>
          </div>

          {/* Interactive Gear SVG Visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-[#E0E4E1]/20 rounded-3xl p-6 border border-[#E0E4E1] shadow-inner relative overflow-hidden">
            {/* Engineering grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#0F4A2C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            
            <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10 filter drop-shadow-md">
              {/* Outer compressor casing */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="#0F4A2C" strokeWidth="4" strokeDasharray="5 3" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#E0E4E1" strokeWidth="2" />
              
              {/* Large gear (Clockwise) */}
              <g className="gear-rotate-cw" style={{ transformOrigin: '100px 100px' }}>
                <circle cx="100" cy="100" r="45" fill="none" stroke="#0F4A2C" strokeWidth="8" />
                {/* Gear teeth */}
                {[...Array(12)].map((_, i) => (
                  <rect 
                    key={i} 
                    x="95" 
                    y="45" 
                    width="10" 
                    height="12" 
                    fill="#0F4A2C" 
                    transform={`rotate(${i * 30} 100 100)`} 
                  />
                ))}
              </g>

              {/* Small planetary gear (Counter-clockwise) */}
              <g className="gear-rotate-ccw" style={{ transformOrigin: '100px 100px' }}>
                <circle cx="100" cy="100" r="22" fill="none" stroke="#E0E4E1" strokeWidth="5" />
                {/* Gear teeth */}
                {[...Array(8)].map((_, i) => (
                  <rect 
                    key={i} 
                    x="96" 
                    y="72" 
                    width="8" 
                    height="8" 
                    fill="#E0E4E1" 
                    transform={`rotate(${i * 45} 100 100)`} 
                  />
                ))}
              </g>
              
              <circle cx="100" cy="100" r="8" fill="#0F4A2C" />
            </svg>
          </div>
        </div>

        {/* CARD 2: Cryogenic Snowflake */}
        <div 
          ref={card2Ref}
          className="protocol-card sticky top-28 bg-[#FFFFFF] rounded-[2.5rem] p-8 md:p-12 border border-[#E0E4E1] shadow-2xl text-[#1A1A1A] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0F4A2C]/10 text-[#0F4A2C]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-jetbrains text-xs font-semibold text-[#0F4A2C] tracking-widest uppercase">
                VANTAGEM 02 // INFRAESTRUTURA
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase text-[#1A1A1A]">
              INSTALAÇÃO LIMPA E SEM VAZAMENTOS
            </h3>
            
            <p className="text-sm text-[#1A1A1A]/80 font-plus-jakarta leading-relaxed">
              Sabe aquele ar-condicionado que vive pingando na parede ou que "perde" o gás do nada? Isso é falha de tubulação. Usamos apenas materiais de primeira linha para que a água vá para o lugar certo e o gás fique onde deve estar.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A1A1A]/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4A2C]"></span> 
                Tubulação de cobre (resistente e anti-vazamento)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4A2C]"></span>
                Isolamento e drenagem perfeitos (zero pinga-pinga)
              </li>
            </ul>
          </div>

          {/* 2D Schematic Snowflake Visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-[#E0E4E1]/20 rounded-3xl p-6 border border-[#E0E4E1] shadow-inner relative overflow-hidden">
            {/* Engineering grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#0F4A2C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            
            {/* GSAP Reveal Wrapper */}
            <div ref={snowflakeRevealRef} className="w-48 h-48 relative z-10 flex items-center justify-center">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full animate-[spin_40s_linear_infinite]"
              >
                <defs>
                  {/* Aqui definimos um "braço" do floco de neve com estética de engenharia */}
                  <g id="tech-branch">
                    {/* Haste principal grossa (estilo dente de engrenagem) */}
                    <line x1="100" y1="100" x2="100" y2="20" stroke="#0F4A2C" strokeWidth="8" strokeLinecap="square" />
                    
                    {/* Ramificação superior */}
                    <path d="M 85 45 L 100 30 L 115 45" fill="none" stroke="#0F4A2C" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
                    
                    {/* Ramificação inferior */}
                    <path d="M 80 70 L 100 50 L 120 70" fill="none" stroke="#E0E4E1" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
                    
                    {/* Ponto mecânico na ponta superior */}
                    <circle cx="100" cy="10" r="5.5" fill="#0F4A2C" />
                  </g>
                </defs>

                {/* 1. Círculo Externo Tracejado */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="#0F4A2C" strokeWidth="6" strokeDasharray="6 8" />
                
                {/* 2. Círculo Interno Contínuo */}
                <circle cx="100" cy="100" r="65" fill="none" stroke="#E0E4E1" strokeWidth="2.5" />

                {/* 3. Multiplicação do braço do floco de neve (Simetria de 6 pontas) */}
                <use href="#tech-branch" transform="rotate(0 100 100)" />
                <use href="#tech-branch" transform="rotate(60 100 100)" />
                <use href="#tech-branch" transform="rotate(120 100 100)" />
                <use href="#tech-branch" transform="rotate(180 100 100)" />
                <use href="#tech-branch" transform="rotate(240 100 100)" />
                <use href="#tech-branch" transform="rotate(300 100 100)" />

                {/* 4. Núcleo Mecânico (O eixo central) */}
                <circle cx="100" cy="100" r="14" fill="#0F4A2C" />
                <circle cx="100" cy="100" r="5" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>

        {/* CARD 3: Health / Air Purification */}
        <div className="protocol-card sticky top-28 bg-[#FFFFFF] rounded-[2.5rem] p-8 md:p-12 border border-[#E0E4E1] shadow-2xl text-[#1A1A1A] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0F4A2C]/10 text-[#0F4A2C]">
                <Wind className="w-6 h-6" />
              </div>
              <span className="font-jetbrains text-xs font-semibold text-[#0F4A2C] tracking-widest uppercase">
                VANTAGEM 03 // SAÚDE E BEM-ESTAR
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-outfit font-extrabold tracking-tight uppercase text-[#1A1A1A]">
              AR PURO DE VERDADE, SEM ALERGIAS
            </h3>
            
            <p className="text-sm text-[#1A1A1A]/80 font-plus-jakarta leading-relaxed">
              Um ar-condicionado sujo é o maior vilão das crises respiratórias e do mau cheiro no ambiente. Nossa higienização profunda vai muito além de "bater uma água" no filtro: eliminamos fungos, ácaros e bactérias para proteger a sua família ou seus clientes.
            </p>

            <ul className="space-y-2 text-xs font-jetbrains text-[#1A1A1A]/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4A2C]"></span> 
                Limpeza profunda com produtos específicos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4A2C]"></span>
                Aplicação de bactericida profissional
              </li>
            </ul>
          </div>

          {/* Fan Scanning visual */}
          <div className="flex justify-center items-center h-[260px] md:h-full bg-[#E0E4E1]/20 rounded-3xl p-6 border border-[#E0E4E1] shadow-inner relative overflow-hidden">
            {/* Engineering grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#0F4A2C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            
            <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10">
              <defs>
                {/* Clean fan gradient */}
                <linearGradient id="cleanFanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0E4E1" />
                  <stop offset="100%" stopColor="#0F4A2C" />
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
                  <circle cx="100" cy="100" r="15" fill="#0F4A2C" filter="drop-shadow(0 0 4px rgba(15,74,44,0.6))" />
                  {/* Blades (Crystalline) */}
                  <path d="M 100,85 C 80,60 90,30 100,30 C 110,30 120,60 100,85 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(15,74,44,0.4))" />
                  <path d="M 115,100 C 140,80 170,90 170,100 C 170,110 140,120 115,100 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(15,74,44,0.4))" />
                  <path d="M 100,115 C 120,140 110,170 100,170 C 90,170 80,140 100,115 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(15,74,44,0.4))" />
                  <path d="M 85,100 C 60,120 30,110 30,100 C 30,90 60,80 85,100 Z" fill="url(#cleanFanGrad)" filter="drop-shadow(0 0 6px rgba(15,74,44,0.4))" />
                </g>
              </g>

              {/* Scanning laser line overlay */}
              <line x1="10" y1="0" x2="190" y2="0" stroke="#0F4A2C" strokeWidth="2.5" className="animate-scan-line" filter="drop-shadow(0 0 4px #0F4A2C)" />

              {/* Clean Sparkles */}
              <g className="animate-sparkle-1" transform="translate(60, 50)">
                <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#FFF" />
              </g>
              <g className="animate-sparkle-2" transform="translate(140, 65)">
                <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#E0E4E1" />
              </g>
              <g className="animate-sparkle-3" transform="translate(100, 40)">
                <path d="M 0,-4 L 1,-1 L 4,0 L 1,1 L 0,4 L -1,1 L -4,0 L -1,-1 Z" fill="#FFF" filter="drop-shadow(0 0 2px #0F4A2C)" />
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
