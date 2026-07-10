import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Settings, Calendar, Check } from 'lucide-react';

export default function Features() {
  // CARD 1: Diagnostic Shuffler State (Instalação Split e Cassete/K7)
  const [shuffledCards, setShuffledCards] = useState([
    { id: 1, label: '✅ Split Hi-Wall & Cassete', detail: 'Instalação embutida sob medida com acabamento perfeito e drenagem precisa.' },
    { id: 2, label: '✅ Dimensionamento Térmico', detail: 'Cálculo exato de BTUs para climatização ideal com o menor consumo de energia.' },
    { id: 3, label: '✅ Testes de Vácuo e Pressão', detail: 'Garantia de estanqueidade completa das tubulações para evitar vazamento de gás.' },
    { id: 4, label: '✅ Padrão da Fabricante', detail: 'Procedimentos técnicos homologados para manter a garantia original de fábrica.' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setShuffledCards((prev) => {
        const next = [...prev];
        const first = next.shift();
        next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // CARD 2: Checklist de Manutenção (Manutenção Preventiva Comercial e Higienização)
  const checklistItems = [
    { label: 'DIAGNÓSTICO', text: 'Avaliação de pressão do gás R410a/R22...' },
    { label: 'HIGIENIZAÇÃO', text: 'Limpeza química da serpentina e filtros...' },
    { label: 'ESTERILIZAÇÃO', text: 'Aplicação de bactericida premium PMOC...' },
    { label: 'FLUXO', text: 'Desobstrução do sistema de dreno...' },
    { label: 'EFICIÊNCIA', text: 'Sistema certificado operando com economia ❄️' },
  ];
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckedCount((prev) => {
        if (prev >= checklistItems.length) {
          return 0; // reset loop
        }
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // CARD 3: Mock Cursor Protocol Scheduler (Infraestrutura e Pré-disposição)
  const schedulerRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null); // 'Q' (Wednesday) will be clicked
  const [isSaved, setIsSaved] = useState(false);

  const whatsappUrl = "https://wa.me/9999999999999?text=Ol%C3%A1%21+Gostaria+de+agendar+um+orcamento+para+infraestrutura.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const playSchedulerAnimation = () => {
        setIsSaved(false);
        setActiveDay(null);

        const tl = gsap.timeline({
          onComplete: () => {
            // Restart after a brief delay
            setTimeout(playSchedulerAnimation, 3000);
          }
        });

        // Start hidden
        tl.set(cursorRef.current, { x: 80, y: 150, opacity: 0, scale: 1 });

        // Fade in and move to Wednesday (the fourth button 'Q' index 3)
        tl.to(cursorRef.current, {
          opacity: 1,
          x: 130, // targets Wednesday button
          y: 40,
          duration: 1.5,
          ease: 'power3.out'
        });

        // Click Wednesday (visual scale-down)
        tl.to('.day-btn-wed', {
          scale: 0.9,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            setActiveDay('Q');
          }
        });
        tl.to(cursorRef.current, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 }, '<');

        // Move to the Save button
        tl.to(cursorRef.current, {
          x: 220,
          y: 110,
          duration: 1.2,
          ease: 'power3.inOut',
          delay: 0.5
        });

        // Click Save button
        tl.to('.save-btn', {
          scale: 0.95,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            setIsSaved(true);
          }
        });
        tl.to(cursorRef.current, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 }, '<');

        // Fade out cursor
        tl.to(cursorRef.current, {
          opacity: 0,
          x: 250,
          y: 130,
          duration: 0.8,
          ease: 'power3.in'
        });
      };

      playSchedulerAnimation();
    }, schedulerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="w-full py-24 md:py-32 bg-[#FFFFFF] relative overflow-hidden select-none">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 flex flex-col items-start gap-4">
        <div>
          <span className="text-xs md:text-sm font-jetbrains font-semibold tracking-wider text-[#F27C00] bg-[#F27C00]/10 px-4 py-1.5 rounded-full uppercase block mb-3 w-fit">
            NOSSAS ESPECIALIDADES
          </span>
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#1E293B] uppercase text-left leading-[1.1] max-w-3xl">
            SOLUÇÕES EM ENGENHARIA TÉRMICA & COMERCIAL
          </h2>
        </div>
      </div>

      {/* Grid of 3 Interactive Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Card 1: Instalação de Ar Condicionado (Split e Cassete/K7) */}
        <div className="rounded-[2.5rem] bg-[#EBF1F6] p-8 md:p-10 flex flex-col justify-between border border-[#0082C6]/10 shadow-lg text-[#1E293B] relative h-[460px] overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#0082C6] uppercase font-bold">
                SERVIÇO 01 // CLIMATIZAÇÃO
              </span>
              <Settings className="w-5 h-5 text-[#0082C6] animate-spin-slow" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight mb-2 uppercase text-left">
              Instalação de Ar Condicionado
            </h3>
            <p className="text-xs text-[#1E293B]/70 font-plus-jakarta mb-4 text-left">
              Projetos customizados para modelos Split Hi-Wall e Cassete (K7). Garantia de conforto com rigor técnico.
            </p>
          </div>

          {/* Cards Stack Container */}
          <div className="relative w-full h-[220px] mt-2">
            {shuffledCards.map((card, idx) => {
              const zIndex = 4 - idx;
              const scale = 1 - idx * 0.05;
              const translateY = idx * 16;
              const opacity = 1 - idx * 0.2;

              return (
                <div
                  key={card.id}
                  className="absolute left-0 right-0 h-[140px] p-4 rounded-2xl bg-white border border-[#EBF1F6] shadow-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-[#1E293B] overflow-hidden"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                >
                  <div className={`transition-opacity duration-500 ${idx === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex items-start gap-2 mb-1 text-left">
                      <h4 className="font-outfit font-bold text-sm tracking-tight text-[#1E293B] leading-snug">
                        {card.label}
                      </h4>
                    </div>
                    <p className="text-[10px] font-plus-jakarta text-[#1E293B]/80 leading-relaxed text-left">
                      {card.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 2: Manutenção Preventiva Comercial e Higienização (Checklist) */}
        <div className="rounded-[2.5rem] bg-[#EBF1F6] p-8 md:p-10 flex flex-col justify-between border border-[#0082C6]/10 shadow-lg text-[#1E293B] h-[460px]">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#F27C00] uppercase font-bold">
                SERVIÇO 02 // PREVENÇÃO
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27C00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27C00]"></span>
                </span>
                <span className="text-[10px] font-jetbrains font-semibold text-[#F27C00] tracking-widest uppercase">
                  PMOC ATIVO
                </span>
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight mb-2 uppercase text-left text-[#1E293B]">
              Manutenção Preventiva & Higienização
            </h3>
            <p className="text-xs text-[#1E293B]/70 font-plus-jakarta mb-4 text-left">
              Atendimento às normas sanitárias e planos PMOC para escritórios e lojas. Ar limpo e consumo elétrico reduzido.
            </p>
          </div>

          {/* Checklist Area */}
          <div className="flex-1 flex flex-col bg-white rounded-2xl p-5 border border-[#EBF1F6] justify-center gap-3.5 overflow-hidden max-h-[220px]">
            {checklistItems.map((item, idx) => {
              const isChecked = idx < checkedCount;
              const isCurrent = idx === checkedCount;
              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 transition-all duration-500 text-left ${
                    isChecked 
                      ? 'opacity-100' 
                      : isCurrent 
                        ? 'opacity-90 scale-[1.01]' 
                        : 'opacity-35'
                  }`}
                >
                  {/* Styled Checkbox Square */}
                  <div 
                    className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all duration-500 border ${
                      isChecked 
                        ? 'bg-[#F27C00] border-[#F27C00] text-white scale-110 shadow-md shadow-[#F27C00]/20' 
                        : isCurrent
                          ? 'border-[#F27C00] bg-[#F27C00]/10 animate-pulse'
                          : 'border-[#1E293B]/30 bg-transparent'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  {/* Checklist Text */}
                  <div className="font-jetbrains text-[10px] md:text-xs">
                    <span className={`font-extrabold uppercase mr-1.5 ${
                      isChecked ? 'text-[#F27C00]' : isCurrent ? 'text-[#F27C00]/90' : 'text-[#1E293B]/60'
                    }`}>
                      {item.label}:
                    </span>
                    <span className="text-[#1E293B] font-medium">{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 3: Infraestrutura e Pré-disposição (Mock Cursor Scheduler - CTA button card) */}
        <div 
          ref={schedulerRef}
          className="rounded-[2.5rem] bg-[#EBF1F6] p-8 md:p-10 flex flex-col justify-between border border-[#0082C6]/10 shadow-lg text-[#1E293B] h-[460px] relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#0082C6] uppercase font-bold">
                SERVIÇO 03 // PLANEJAMENTO
              </span>
              <Calendar className="w-5 h-5 text-[#0082C6]" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight mb-2 uppercase text-left">
              Infraestrutura & Pré-disposição
            </h3>
            <p className="text-xs text-[#1E293B]/70 font-plus-jakarta mb-4 text-left">
              Linhas frigorígenas e drenagem embutidas na alvenaria ou vigas durante a obra. Evite retrabalhos e quebra-quebra.
            </p>
          </div>

          {/* Scheduler Calendar Interface */}
          <div className="relative flex-1 flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-[#EBF1F6] max-h-[220px]">
            {/* Week buttons */}
            <div className="flex gap-1.5 mb-6">
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, idx) => {
                const isWed = idx === 3;
                const isActive = isWed && activeDay === 'Q';
                return (
                  <div
                    key={idx}
                    className={`day-btn w-7 h-7 rounded-lg flex items-center justify-center font-outfit text-xs font-bold transition-all duration-300 border ${
                      isActive 
                        ? 'bg-[#0082C6] border-[#0082C6] text-white shadow-md shadow-[#0082C6]/20' 
                        : isWed 
                          ? 'day-btn-wed border-[#EBF1F6] bg-white text-[#1E293B]' 
                          : 'border-[#0082C6]/10 bg-white text-[#1E293B]/40'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            {/* Save/Contact Button */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`save-btn px-5 py-2.5 rounded-full font-outfit text-2xs md:text-xs font-bold tracking-wider text-center transition-all duration-500 border block ${
                isSaved 
                  ? 'bg-[#F27C00] border-[#F27C00] text-white shadow-md shadow-[#F27C00]/20' 
                  : 'bg-[#F27C00] border-[#F27C00] text-white hover:bg-[#F27C00]/90'
              }`}
            >
              {isSaved ? 'AGENDAMENTO ENVIADO ✓' : 'Solicitar Planejamento'}
            </a>

            {/* Animated Mock SVG Cursor */}
            <div 
              ref={cursorRef}
              className="absolute pointer-events-none z-30 drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)]"
              style={{ transform: 'translate(0, 0)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M4.5 3V17.5L9.5 13.5L14.5 21.5L17.5 19.5L12.5 12L18.5 11.5L4.5 3Z" 
                  fill="#F27C00" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
