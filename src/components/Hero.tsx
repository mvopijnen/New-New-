import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RefreshCw, Sparkles } from 'lucide-react';

const HERO_QUESTIONS = [
  {
    text: 'Wat dacht je over mij na onze eerste ontmoeting, maar heb je nooit verteld?',
    context: 'Voor wie tegenover je zit',
    tag: 'Samen',
    color: 'text-[#E06D46]',
    bgTag: 'bg-[#E06D46]/10 text-[#C2542C]',
  },
  {
    text: 'Wanneer heb je voor het laatst iets gedaan waar je je stiekem een beetje voor schaamde?',
    context: 'Voorbij het gepolijste verhaal',
    tag: 'Eerlijk',
    color: 'text-[#0D9488]',
    bgTag: 'bg-[#0D9488]/10 text-[#0F766E]',
  },
  {
    text: 'Welk advies geef je graag aan anderen, maar pas je zelf eigenlijk nooit toe?',
    context: 'Met een glimlach',
    tag: 'Speels',
    color: 'text-[#F59E0B]',
    bgTag: 'bg-[#F59E0B]/15 text-[#B45309]',
  },
  {
    text: 'Wat weet bijna niemand over de manier waarop jij naar jezelf kijkt?',
    context: 'Als de stilte mag vallen',
    tag: 'Verdiepen',
    color: 'text-[#7C3AED]',
    bgTag: 'bg-[#7C3AED]/10 text-[#6D28D9]',
  },
];

interface HeroProps {
  onTryDirectly: () => void;
}

export default function Hero({ onTryDirectly }: HeroProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const nextHeroQuestion = () => {
    setQuestionIndex((prev) => (prev + 1) % HERO_QUESTIONS.length);
  };

  const currentQ = HERO_QUESTIONS[questionIndex];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Rich ambient glowing blobs for wow color impact */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full gradient-blob-1 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-5 w-[400px] h-[400px] rounded-full gradient-blob-2 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Subtle, unboxed pre-header */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#E6DDD0] text-xs sm:text-sm font-medium text-[#1C1917] tracking-wide mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#E06D46] animate-pulse" />
          <span>Tussen Ons</span>
          <span aria-hidden="true" className="text-[#C8BCAC]">·</span>
          <span className="text-[#57534E]">Het echte product is het gesprek</span>
        </div>

        {/* Primary provocation headline */}
        <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#1C1917] font-normal leading-[1.15] tracking-tight max-w-3xl mb-10 text-balance">
          Wanneer heb jij dit eigenlijk voor het laatst gevraagd?
        </h1>

        {/* The tactile physical question card */}
        <div className="w-full max-w-xl mx-auto mb-10">
          <div className="relative group">
            {/* Background shadow layer with rich warm tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E06D46]/20 to-[#F59E0B]/20 rounded-2xl sm:rounded-3xl translate-y-3 translate-x-1.5 transition-transform group-hover:translate-y-4 blur-xs" />

            {/* The main card */}
            <div className="relative bg-[#FFFFFF] border-2 border-[#E6DDD0] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-md transition-all duration-300">
              {/* Card header metadata */}
              <div className="flex items-center justify-between text-xs text-[#78716C] mb-6 pb-4 border-b border-[#F2ECE1]">
                <div className="flex items-center gap-2.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${currentQ.bgTag}`}>
                    {currentQ.tag}
                  </span>
                  <span aria-hidden="true" className="text-[#C8BCAC]">·</span>
                  <span className="font-medium text-[#57534E]">{currentQ.context}</span>
                </div>
                <button
                  onClick={nextHeroQuestion}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs text-[#57534E] hover:text-[#E06D46] transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-[#FAF7F2]"
                  title="Andere vraag"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Andere vraag</span>
                </button>
              </div>

              {/* Animated question text */}
              <div className="min-h-[130px] sm:min-h-[150px] flex items-center justify-center py-2">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={questionIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#1C1917] leading-snug font-normal italic px-2"
                  >
                    “{currentQ.text}”
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Bottom whisper on the card */}
              <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#78716C]">
                <span className="font-medium text-[#E06D46]">Tussen Ons Vraagkaart</span>
                <span>Leg de telefoon neer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative direction copy */}
        <p className="text-base sm:text-lg text-[#57534E] max-w-xl leading-relaxed mb-8">
          Geen swipe. Geen score. Gewoon één vraag en kijken waar jullie uitkomen.
        </p>

        {/* Action controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#ervaren"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#1C1917] text-white text-sm font-medium hover:bg-[#E06D46] transition-all shadow-md cursor-pointer"
          >
            <span>Probeer direct een vraag</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onTryDirectly}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-[#E6DDD0] bg-white text-[#1C1917] text-sm font-medium hover:border-[#E06D46] hover:text-[#E06D46] transition-all shadow-2xs cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#E06D46]" />
            <span>Open live tafelmodus</span>
          </button>
        </div>
      </div>
    </section>
  );
}

