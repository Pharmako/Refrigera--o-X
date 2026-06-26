import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cpu, Settings, Activity, Calendar, ShieldCheck, Check } from 'lucide-react';

export default function Features() {
  // CARD 1: Diagnostic Shuffler State
  const [shuffledCards, setShuffledCards] = useState([
    { id: 1, label: 'Cálculo VRF Preciso', detail: 'Modulação de refrigerante variável por zona para eficiência térmica de alta fidelidade.' },
    { id: 2, label: 'Zonamento Inteligente', detail: 'Divisão de fluxo de ar automatizada controlada por microssensores ambientais.' },
    { id: 3, label: 'Cálculo de Carga Preciso', detail: 'Métricas exatas de troca de calor para evitar desperdício de energia.' },
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

  // CARD 2: Telemetry Typewriter State
  const phrases = [
    'Otimizando Temperatura Cozinha...',
    'Verificando Pressão Sistema Sala...',
    'Ciclo de Ar Limpo Ativado...',
    'Calibrando Fluxo Térmico Suíte...',
    'Compressor VRF operando a 74%...',
    'Renovação de ar estável (PM2.5)...',
  ];
  const [currentText, setCurrentText] = useState('');
  const [logHistory, setLogHistory] = useState([
    'SYS_START: Módulo Térmico JL Frio Inicializado.',
    'FLOW_OK: Pressão estática dentro dos limites tolerados.',
  ]);
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let typingSpeed = 100;
    const handleType = () => {
      const currentPhrase = phrases[phraseIndexRef.current];
      if (isDeletingRef.current) {
        setCurrentText(currentPhrase.substring(0, charIndexRef.current - 1));
        charIndexRef.current -= 1;
        typingSpeed = 50;
      } else {
        setCurrentText(currentPhrase.substring(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
        typingSpeed = 120;
      }

      if (!isDeletingRef.current && charIndexRef.current === currentPhrase.length) {
        typingSpeed = 2000; // Pause at the end
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        // Push typed phrase to log history
        setLogHistory(prev => {
          const updated = [...prev, `TELEMETRIA: ${currentPhrase}`];
          if (updated.length > 5) updated.shift();
          return updated;
        });
        phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next
      }

      setTimeout(handleType, typingSpeed);
    };

    const typeTimeout = setTimeout(handleType, 1000);
    return () => clearTimeout(typeTimeout);
  }, []);

  // CARD 3: Mock Cursor Protocol Scheduler
  const schedulerRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null); // 'Q' (Wednesday) will be clicked
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const playSchedulerAnimation = () => {
        setIsSaved(false);
        setActiveDay(null);

        const tl = gsap.timeline({
          onComplete: () => {
            // Restart after a brief delay
            setTimeout(playSchedulerAnimation, 2000);
          }
        });

        // Start hidden
        tl.set(cursorRef.current, { x: 50, y: 150, opacity: 0, scale: 1 });

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
      {/* Structural Layout Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs md:text-sm font-jetbrains font-semibold tracking-wider text-[#0055D4] uppercase block mb-3">
            Controle de Diagnóstico
          </span>
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A2B3C] uppercase">
            Artefatos Funcionais
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-[#1A2B3C]/70 font-plus-jakarta">
          Nosso ecossistema de climatização opera como um instrumento digital de alta performance, entregando métricas precisas em tempo real.
        </p>
      </div>

      {/* Grid of Interactive cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Card 1: Diagnostic Shuffler */}
        <div className="rounded-[2.5rem] bg-[#1A2B3C] p-8 md:p-10 flex flex-col justify-between border border-[#0055D4]/10 shadow-lg text-[#F8F8F8] relative h-[420px] overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#4682B4] uppercase">
                Módulo 01 // Análise de Eficiência
              </span>
              <Settings className="w-5 h-5 text-[#0055D4] animate-spin-slow" />
            </div>
            
            <h3 className="text-xl font-outfit font-extrabold tracking-tight mb-4 uppercase">
              Análise Inteligente de Eficiência
            </h3>
          </div>

          {/* Cards Stack Container */}
          <div className="relative w-full h-[200px] mt-2">
            {shuffledCards.map((card, idx) => {
              // Stacking offsets
              const zIndex = 3 - idx;
              const scale = 1 - idx * 0.05;
              const translateY = idx * 16;
              const opacity = 1 - idx * 0.2;

              return (
                <div
                  key={card.id}
                  className="absolute left-0 right-0 p-5 rounded-2xl bg-white border border-[#4682B4]/20 shadow-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-[#1A2B3C]"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-emerald-500 font-semibold text-sm">✅</span>
                    <h4 className="font-outfit font-bold text-sm tracking-tight text-[#1A2B3C]">
                      {card.label}
                    </h4>
                  </div>
                  <p className="text-[11px] font-plus-jakarta text-[#1A2B3C]/70 leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 2: Neural Stream / Telemetry Feed */}
        <div className="rounded-[2.5rem] bg-white p-8 md:p-10 flex flex-col justify-between border border-[#4682B4]/15 shadow-xl text-[#1A2B3C] h-[420px]">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#0055D4] uppercase">
                Módulo 02 // Neural Stream
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0055D4] animate-ping"></span>
                <span className="text-[10px] font-jetbrains font-semibold text-[#0055D4]">LIVE FEED</span>
              </div>
            </div>
            
            <h3 className="text-xl font-outfit font-extrabold tracking-tight mb-2 uppercase">
              Telemetry Feed de Performance
            </h3>
            <p className="text-xs text-[#1A2B3C]/60 font-plus-jakarta mb-6">
              Registros dinâmicos gerados pelos compressores e sensores JL Frio instalados.
            </p>
          </div>

          {/* Typing log Console */}
          <div className="flex-1 flex flex-col bg-[#1A2B3C] rounded-2xl p-4 border border-[#4682B4]/30 font-jetbrains text-[10px] leading-relaxed text-[#F8F8F8] justify-between overflow-hidden">
            <div className="space-y-1.5 opacity-60">
              {logHistory.map((log, i) => (
                <div key={i} className="truncate">
                  &gt; {log}
                </div>
              ))}
            </div>
            
            <div className="border-t border-[#F8F8F8]/10 pt-2 mt-2 flex items-center gap-1.5 text-[#0055D4] font-bold">
              <span>&gt;</span>
              <span className="text-[#F8F8F8] font-medium">{currentText}</span>
              <span className="w-1.5 h-3 bg-[#0055D4] animate-[pulse_0.8s_infinite] inline-block"></span>
            </div>
          </div>
        </div>

        {/* Card 3: Mock Cursor Protocol Scheduler */}
        <div 
          ref={schedulerRef}
          className="rounded-[2.5rem] bg-white p-8 md:p-10 flex flex-col justify-between border border-[#4682B4]/15 shadow-xl text-[#1A2B3C] h-[420px] relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-jetbrains tracking-wider text-[#4682B4] uppercase">
                Módulo 03 // Adaptive Regimen
              </span>
              <Calendar className="w-5 h-5 text-[#4682B4]" />
            </div>
            
            <h3 className="text-xl font-outfit font-extrabold tracking-tight mb-2 uppercase">
              Agendador de Protocolo
            </h3>
            <p className="text-xs text-[#1A2B3C]/60 font-plus-jakarta mb-6">
              Simulação de agendamento automático do ciclo de purificação e consumo inteligente.
            </p>
          </div>

          {/* Scheduler Calendar Interface */}
          <div className="relative flex-1 flex flex-col items-center justify-center bg-[#F8F8F8] rounded-2xl p-4 border border-[#4682B4]/10">
            {/* Week buttons */}
            <div className="flex gap-2 mb-6">
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, idx) => {
                const isWed = idx === 3;
                const isActive = isWed && activeDay === 'Q';
                return (
                  <div
                    key={idx}
                    className={`day-btn width-8 h-8 rounded-lg flex items-center justify-center font-outfit text-xs font-bold transition-all duration-300 border ${
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

            {/* Save Button */}
            <button 
              className={`save-btn px-6 py-2.5 rounded-full font-outfit text-xs font-bold transition-all duration-500 border ${
                isSaved 
                  ? 'bg-emerald-500 border-emerald-500 text-white shadow-md' 
                  : 'bg-[#1A2B3C] border-[#1A2B3C] text-white hover:bg-[#1A2B3C]/90'
              }`}
            >
              {isSaved ? 'PROTOCOL SALVO ✓' : 'SALVAR AGENDAMENTO'}
            </button>

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
