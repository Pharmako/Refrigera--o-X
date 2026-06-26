import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textGroupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-up animation for the text lines and scroll indicator
      const tl = gsap.timeline();
      
      tl.fromTo(
        '.hero-line',
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.25, 
          ease: 'power4.out' 
        }
      );

      tl.fromTo(
        '.hero-badge',
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)'
        },
        '-=0.8'
      );

      tl.fromTo(
        '.scroll-indicator',
        {
          y: -10,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        },
        '-=0.2'
      );

      // Bouncing scroll indicator loop
      gsap.to('.scroll-arrow', {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: 'power1.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-end justify-start overflow-hidden bg-[#1A2B3C] select-none"
    >
      {/* Background Image with Parallax & Color Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600" 
          alt="Modern Architecture Condominium"
          className="w-full h-full object-cover scale-105 select-none pointer-events-none"
        />
        {/* Steel Blue to Night Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A2B3C] via-[#1A2B3C]/80 to-[#4682B4]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C] via-transparent to-transparent opacity-90"></div>
        {/* Technical Grid Blueprint Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 85, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 85, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Hero Content (Pushed to bottom-left third) */}
      <div 
        ref={textGroupRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24 flex flex-col items-start"
      >
        {/* Subtle Tech Badge */}
        <div className="hero-badge flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0055D4]/20 border border-[#0055D4]/30 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0055D4] animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-jetbrains font-semibold tracking-wider text-[#F8F8F8] uppercase">
            Sistemas Térmicos Avançados
          </span>
        </div>

        {/* Massive Typography Hero Text */}
        <h1 className="flex flex-col gap-2 max-w-4xl font-outfit text-white">
          <span className="hero-line text-xs md:text-sm font-jetbrains font-medium tracking-[0.25em] text-[#0055D4] uppercase">
            CONFORTO CLIMÁTICO, GARANTIDO
          </span>
          <span className="hero-line text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] uppercase">
            Alta Engenharia
          </span>
          <span className="hero-line text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#4682B4] italic uppercase">
            Para seu Espaço Diário
          </span>
        </h1>

        <p className="hero-line max-w-xl text-sm md:text-base text-[#F8F8F8]/80 font-plus-jakarta mt-6 leading-relaxed">
          Climatização silenciosa, eficiente e projetada sob medida para residências de alto padrão e empreendimentos comerciais de precisão.
        </p>

        {/* Action Button & Floating Indicator */}
        <div className="hero-line flex flex-wrap gap-4 mt-8 items-center">
          <a 
            href="#solutions" 
            className="magnetic-btn relative overflow-hidden bg-[#0055D4] text-white hover:bg-[#0055D4]/90 px-8 py-3.5 rounded-full font-outfit text-sm font-bold tracking-wide shadow-lg shadow-[#0055D4]/20 hover:scale-105 transition-all duration-300"
          >
            Explorar Soluções
          </a>
          <a 
            href="#contracts" 
            className="magnetic-btn relative overflow-hidden border border-[#F8F8F8]/20 bg-[#F8F8F8]/5 text-[#F8F8F8] hover:bg-[#F8F8F8]/10 px-8 py-3.5 rounded-full font-outfit text-sm font-bold tracking-wide transition-all"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 right-8 md:right-12 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer">
        <span className="text-[10px] font-jetbrains font-medium tracking-[0.2em] uppercase writing-mode-vertical">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border border-white/30 flex justify-center items-start p-1.5">
          <div className="scroll-arrow w-1 h-2 rounded-full bg-[#0055D4]"></div>
        </div>
      </div>
    </section>
  );
}
