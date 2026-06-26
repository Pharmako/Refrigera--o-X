import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax effect
      gsap.fromTo(
        bgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Splitting text words and animating them to mock SplitText
      const splitAndAnimate = (elementRef) => {
        if (!elementRef.current) return;
        const text = elementRef.current.innerText;
        const words = text.split(' ');
        elementRef.current.innerHTML = words
          .map(word => `<span class="reveal-word inline-block origin-bottom-left">${word}&nbsp;</span>`)
          .join('');

        const wordsSpan = elementRef.current.querySelectorAll('.reveal-word');
        
        gsap.fromTo(
          wordsSpan,
          { 
            y: 40, 
            rotate: 4,
            opacity: 0 
          },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.04,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elementRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      };

      splitAndAnimate(textRef1);
      splitAndAnimate(textRef2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="philosophy"
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex items-center justify-center py-24 md:py-32 bg-[#2A2A2A] text-white overflow-hidden select-none"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600" 
          alt="Precision Copper Heat Exchanger Tubes"
          className="w-full h-[130%] object-cover opacity-15 mix-blend-luminosity filter brightness-75 scale-105"
        />
        {/* Soft dark radial vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2A2A2A]/50 to-[#2A2A2A] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[#1A2B3C]/40 mix-blend-color-burn"></div>
      </div>

      {/* Manifesto Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-12 md:gap-16 items-start justify-between">
        
        {/* Left Side: Standard cooling question */}
        <div className="w-full md:w-5/12 flex flex-col items-start border-l-2 border-[#4682B4]/40 pl-6 md:pl-8">
          <span className="text-xs font-jetbrains text-[#4682B4] tracking-wider uppercase block mb-4">
            01 // Paradigma Comum
          </span>
          <p 
            ref={textRef1}
            className="font-outfit text-2xl md:text-3xl font-extrabold tracking-tight text-[#F8F8F8]/60 uppercase leading-snug"
          >
            A refrigeração comum pergunta: Está frio?
          </p>
          <p className="font-plus-jakarta text-xs md:text-sm text-[#F8F8F8]/40 mt-4 leading-relaxed max-w-xs">
            A maioria dos sistemas foca apenas em despejar ar gelado, sem analisar umidade, qualidade ou eficiência energética.
          </p>
        </div>

        {/* Right Side: The Premium Manifesto Answer */}
        <div className="w-full md:w-6/12 flex flex-col items-start">
          <span className="text-xs font-jetbrains text-[#0055D4] tracking-wider uppercase block mb-4">
            02 // Nosso Protocolo
          </span>
          <p 
            ref={textRef2}
            className="font-jetbrains text-3xl md:text-5xl font-extrabold tracking-tighter text-[#F8F8F8] italic leading-tight uppercase"
          >
            Nós garantimos: O clima exato para sua residência ou comércio.
          </p>
          <p className="font-plus-jakarta text-sm md:text-base text-[#F8F8F8]/70 mt-6 leading-relaxed max-w-md">
            Trabalhamos com equilíbrio dinâmico de zonas térmicas, filtragem de particulados finos e acústica otimizada. É engenharia arquitetônica de conforto para o dia a dia.
          </p>
          
          <div className="mt-8 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-outfit font-extrabold text-[#0055D4]">0.1°C</span>
              <span className="text-[10px] font-jetbrains text-[#F8F8F8]/40 uppercase tracking-widest mt-1">Margem de Precisão</span>
            </div>
            <div className="w-[1px] h-10 bg-[#F8F8F8]/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-outfit font-extrabold text-[#4682B4]">100%</span>
              <span className="text-[10px] font-jetbrains text-[#F8F8F8]/40 uppercase tracking-widest mt-1">Zonamento Ativo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
