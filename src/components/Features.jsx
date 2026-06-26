import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Settings, Calendar, Check } from 'lucide-react';

export default function Features() {
  // CARD 1: Diagnostic Shuffler State (Instalação)
  const [shuffledCards, setShuffledCards] = useState([
    { id: 1, label: '✅ Dimensionamento correto de BTUs', detail: 'Evita consumo excessivo e garante refrigeração na medida certa para o espaço.' },
    { id: 2, label: '✅ Infraestrutura com zero dor de cabeça', detail: 'Instalação embutida ou aparente feita sob rigoroso padrão técnico de engenharia.' },
    { id: 3, label: '✅ Acabamento estético impecável', detail: 'Integração perfeita do equipamento com o design e decoração do seu ambiente.' },
    { id: 4, label: '✅ Teste de pressão e eficiência', detail: 'Garantia de funcionamento pleno sem vazamentos e com máxima troca de calor.' },
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

  // CARD 2: Checklist de Limpeza e Reparos (Manutenção) - Manual Checklist Style
  const checklistItems = [
    { label: 'DIAGNÓSTICO', text: 'Avaliando pressão do gás...' },
    { label: 'CHECKUP', text: 'Limpeza profunda da evaporadora...' },
    { label: 'CHECKUP', text: 'Aplicação de bactericida concluída...' },
    { label: 'AÇÃO', text: 'Desobstruindo dreno de água...' },
    { label: 'STATUS', text: 'Equipamento gelando perfeitamente ❄️' },
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

  // CARD 3: Mock Cursor Protocol Scheduler (Suporte/Agendamento)
  const schedulerRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null); // 'Q' (Wednesday) will be clicked
  const [isSaved, setIsSaved] = useState(false);

  const whatsappUrl = "https://wa.me/5531998102577?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita+t%C3%A9cnica.";

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
    <section id="features" className="w-full py-24 md:py-32 bg-[#F8F8F8] relative overflow-hidden select-none">
      {/* Title Section (Single left-aligned block, right text removed) */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 flex flex-col items-start gap-4">
        <div>
          <span className="text-xs md:text-sm font-jetbrains font-semibold tracking-wider text-[#0055D4] bg-[#0055D4]/10 px-4 py-1.5 rounded-full uppercase block mb-3 w-fit">
            NOSSAS ESPECIALIDADES
          </span>
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A2B3C] uppercase text-left leading-[1.1] max-w-3xl">
            SOLUÇÕES COMPLETAS EM CLIMATIZAÇÃO
          </h2>
        </div>
      </div>

      {/* Grid of Interactive Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Card 1: Diagnostic Shuffler (Instalação) */}
        <div className="rounded-[2.5rem] bg-[#1A2B3C] p-8 md:p-10 flex flex-col justify-between border border-[#0055D4]/10 shadow-lg text-[#F8F8F8] relative h-[450px] overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#4682B4] uppercase">
                SERVIÇO 01 // INSTALAÇÃO
              </span>
              <Settings className="w-5 h-5 text-[#0055D4] animate-spin-slow" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight mb-2 uppercase text-left">
              Projetos e Instalações Seguras
            </h3>
            <p className="text-xs text-white/60 font-plus-jakarta mb-4 text-left">
              A animação dos cartões empilhados mostra nossos diferenciais de uma instalação bem feita.
            </p>
          </div>

          {/* Cards Stack Container */}
          <div className="relative w-full h-[220px] mt-2">
            {shuffledCards.map((card, idx) => {
              // Stacking offsets
              const zIndex = 4 - idx;
              const scale = 1 - idx * 0.05;
              const translateY = idx * 16;
              const opacity = 1 - idx * 0.2;

              return (
                <div
                  key={card.id}
                  className="absolute left-0 right-0 p-4 rounded-2xl bg-white border border-[#4682B4]/20 shadow-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-[#1A2B3C]"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                >
                  <div className="flex items-start gap-2 mb-1 text-left">
                    <h4 className="font-outfit font-bold text-sm tracking-tight text-[#1A2B3C] leading-snug">
                      {card.label}
                    </h4>
                  </div>
                  <p className="text-[10px] font-plus-jakarta text-[#1A2B3C]/70 leading-relaxed text-left">
                    {card.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 2: Manual Checklist (Manutenção) */}
        <div className="rounded-[2.5rem] bg-[#1A2B3C] p-8 md:p-10 flex flex-col justify-between border border-[#0055D4]/10 shadow-lg text-[#F8F8F8] h-[450px]">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#4682B4] uppercase">
                SERVIÇO 02 // MANUTENÇÃO
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[10px] font-jetbrains font-semibold text-cyan-400 tracking-widest uppercase">
                  HIGIENIZAÇÃO ATIVA
                </span>
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight mb-2 uppercase text-left text-white">
              Checkup de Limpeza e Reparos
            </h3>
            <p className="text-xs text-white/60 font-plus-jakarta mb-4 text-left">
              Não espere o equipamento quebrar. Realizamos preventivas completas para garantir um ar puro e economia de energia.
            </p>
          </div>

          {/* Checklist Area */}
          <div className="flex-1 flex flex-col bg-[#111E2D] rounded-2xl p-5 border border-[#4682B4]/20 justify-center gap-3.5 overflow-hidden">
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
                        ? 'bg-emerald-500 border-emerald-500 text-white scale-110 shadow-md shadow-emerald-500/20' 
                        : isCurrent
                          ? 'border-cyan-400 bg-cyan-400/10 animate-pulse'
                          : 'border-white/30 bg-transparent'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  {/* Checklist Text */}
                  <div className="font-jetbrains text-[10px] md:text-xs">
                    <span className={`font-extrabold uppercase mr-1.5 ${
                      isChecked ? 'text-emerald-400' : isCurrent ? 'text-cyan-400' : 'text-[#4682B4]'
                    }`}>
                      {item.label}:
                    </span>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 3: Scheduler (Suporte/Agendamento) */}
        <div 
          ref={schedulerRef}
          className="rounded-[2.5rem] bg-white p-8 md:p-10 flex flex-col justify-between border border-[#4682B4]/15 shadow-xl text-[#1A2B3C] h-[450px] relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#4682B4] uppercase">
                ATENDIMENTO // SUPORTE
              </span>
              <span className="text-lg">🗓️</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-outfit font-extrabold tracking-tight mb-2 uppercase text-left">
              Agende Já o Seu Atendimento
            </h3>
            <p className="text-xs text-[#1A2B3C]/60 font-plus-jakarta mb-4 text-left">
              Seu ar parou ou precisa de uma limpeza urgente? Escolha o melhor dia e deixe o trabalho pesado com a nossa equipe.
            </p>
          </div>

          {/* Scheduler Calendar Interface */}
          <div className="relative flex-1 flex flex-col items-center justify-center bg-[#F8F8F8] rounded-2xl p-4 border border-[#4682B4]/10">
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
                        ? 'bg-[#0055D4] border-[#0055D4] text-white shadow-md shadow-[#0055D4]/20' 
                        : isWed 
                          ? 'day-btn-wed border-[#4682B4]/30 bg-white text-[#1A2B3C]' 
                          : 'border-[#4682B4]/15 bg-white text-[#1A2B3C]/40'
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
                  ? 'bg-emerald-500 border-emerald-500 text-white shadow-md' 
                  : 'bg-[#0055D4] border-[#0055D4] text-white hover:bg-[#0055D4]/90'
              }`}
            >
              {isSaved ? 'SOLICITAÇÃO ENVIADA ✓' : 'Solicitar Visita Técnica'}
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
                  fill="#0055D4" 
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
