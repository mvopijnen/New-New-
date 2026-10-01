import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RefreshCw, Sparkles, Download } from 'lucide-react';

const HERO_QUESTIONS = [
  {
    text: 'Wat dacht je over mij na onze eerste ontmoeting, maar heb je nooit verteld?',
    context: 'Voor wie tegenover je zit',
    tag: 'Samen',
    tagColor: 'text-[#BD3A53] bg-[#BD3A53]/10',
  },
  {
    text: 'Wanneer heb je voor het laatst iets gedaan waar je je stiekem een beetje voor schaamde?',
    context: 'Voorbij het gepolijste verhaal',
    tag: 'Eerlijk',
    tagColor: 'text-[#0D9488] bg-[#0D9488]/10',
  },
  {
    text: 'Welk advies geef je graag aan anderen, maar pas je zelf eigenlijk nooit toe?',
    context: 'Met een glimlach',
    tag: 'Speels',
    tagColor: 'text-[#BD3A53] bg-[#BD3A53]/10',
  },
  {
    text: 'Wat weet bijna niemand over de manier waarop jij naar jezelf kijkt?',
    context: 'Als de stilte mag vallen',
    tag: 'Verdiepen',
    tagColor: 'text-[#7C3AED] bg-[#7C3AED]/10',
  },
];

interface HeroProps {
  onStartSession: () => void;
  onTryDirectly?: () => void;
  onInstallPrompt?: () => void;
}

export default function Hero({ onStartSession, onTryDirectly, onInstallPrompt }: HeroProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const nextHeroQuestion = () => {
    setQuestionIndex((prev) => (prev + 1) % HERO_QUESTIONS.length);
  };

  const currentQ = HERO_QUESTIONS[questionIndex];

  return (
    <section className="relative pt-36 pb-24 sm:pt-48 sm:pb-36 overflow-hidden bg-[#FAF5F0]">
      {/* Soft Rose Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full soft-rose-glow blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center text-center">
        {/* Subtle pre-header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EFE6DE] text-xs font-medium text-[#BD3A53] tracking-wide mb-8 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#BD3A53]" />
          <span>Tussen Ons · Het gesprek tussen twee mensen</span>
        </div>

        {/* Main headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#201A18] font-normal leading-[1.12] tracking-tight max-w-3xl mb-6 text-balance">
          De juiste vraag.<br />
          <span className="italic text-[#BD3A53]">Op het juiste moment.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-[#201A18] font-editorial italic max-w-2xl mb-6">
          Voor gesprekken die anders misschien nooit waren begonnen.
        </p>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#6E625D] max-w-xl leading-relaxed mb-10">
          Kies wie er tegenover je zit, waar jullie zin in hebben en hoeveel tijd jullie hebben. Tussen Ons opent het gesprek en beweegt mee met het moment.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button
            onClick={onStartSession}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#BD3A53] text-white text-sm font-semibold hover:bg-[#A51D33] hover:scale-102 transition-all shadow-sm cursor-pointer"
          >
            <span>Begin samen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              if (onTryDirectly) onTryDirectly();
              else if (onInstallPrompt) onInstallPrompt();
              else onStartSession();
            }}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-[#EFE6DE] bg-white text-[#201A18] text-sm font-medium hover:border-[#BD3A53] hover:text-[#BD3A53] transition-all cursor-pointer shadow-2xs"
          >
            <Download className="w-4 h-4 text-[#BD3A53]" />
            <span>Zet Tussen Ons op je beginscherm</span>
          </button>
        </div>

        {/* Light Tactile Demo Card */}
        <div className="w-full max-w-xl mx-auto">
          <div className="relative group">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BD3A53]/15 to-[#F7D8D3]/80 rounded-3xl blur-md opacity-60" />

            <div className="relative bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 sm:p-10 shadow-sm text-left">
              {/* Card top bar */}
              <div className="flex items-center justify-between text-xs text-[#6E625D] mb-6 pb-4 border-b border-[#EFE6DE]">
                <div className="flex items-center gap-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${currentQ.tagColor}`}>
                    {currentQ.tag}
                  </span>
                  <span aria-hidden="true" className="text-[#EFE6DE]">·</span>
                  <span className="text-[#201A18] font-medium">{currentQ.context}</span>
                </div>
                <button
                  onClick={nextHeroQuestion}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs text-[#6E625D] hover:text-[#BD3A53] transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-[#FAF5F0]"
                  title="Andere vraag"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Volgende kaart</span>
                </button>
              </div>

              {/* Animated question text */}
              <div className="min-h-[130px] sm:min-h-[150px] flex items-center justify-center py-2">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={questionIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="font-editorial text-2xl sm:text-3xl text-[#201A18] leading-snug font-normal italic text-center"
                  >
                    “{currentQ.text}”
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Card footer */}
              <div className="mt-6 pt-4 border-t border-[#EFE6DE] flex items-center justify-between text-xs text-[#6E625D]">
                <span className="text-[#BD3A53] font-semibold">Tussen Ons Vraagkaart</span>
                <span>Leg de telefoon op tafel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
