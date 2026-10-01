import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_QUESTIONS } from '../data/questionsData';
import { CategoryId, Question } from '../types';
import { ArrowRight, RotateCcw, Eye, EyeOff, Sparkles } from 'lucide-react';

const CATEGORY_TABS: { id: 'all' | CategoryId; label: string; accentColor: string }[] = [
  { id: 'all', label: 'Alle sferen', accentColor: 'bg-[#E06D46]' },
  { id: 'eerste-date', label: 'Eerste date', accentColor: 'bg-[#F43F5E]' },
  { id: 'samen', label: 'Samen', accentColor: 'bg-[#E06D46]' },
  { id: 'vrienden', label: 'Vrienden', accentColor: 'bg-[#0D9488]' },
  { id: 'familie', label: 'Familie', accentColor: 'bg-[#7C3AED]' },
  { id: 'verdiepen', label: 'Verdiepen', accentColor: 'bg-[#F59E0B]' },
];

export default function InteractiveDemo() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | CategoryId>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [tableOrientation, setTableOrientation] = useState(false); // Rotates 180deg for person across

  // Filter questions based on selected tab
  const filteredQuestions = selectedCategory === 'all'
    ? ALL_QUESTIONS
    : ALL_QUESTIONS.filter((q) => q.categoryId === selectedCategory);

  const activeIndex = currentIndex % filteredQuestions.length;
  const currentQuestion: Question = filteredQuestions[activeIndex] || ALL_QUESTIONS[0];

  const handleNext = () => {
    setShowFollowUp(false);
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handlePrevious = () => {
    setShowFollowUp(false);
    setCurrentIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  const handleCategoryChange = (catId: 'all' | CategoryId) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
    setShowFollowUp(false);
  };

  return (
    <section id="ervaren" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E6DDD0] relative overflow-hidden">
      {/* Background glowing gradient blob */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] gradient-blob-3 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section title & editorial intro */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E06D46] mb-3 bg-[#E06D46]/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct ervaren</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] font-normal tracking-tight mb-3">
            Probeer er eentje.
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] max-w-md mx-auto">
            Geen registratie, geen handleiding. Druk op de knop, stel de vraag aan wie naast je zit en kijk wat er gebeurt.
          </p>
        </div>

        {/* Category selector / segmented controls */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                type="button"
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-md scale-105'
                    : 'bg-white/80 text-[#57534E] hover:text-[#1C1917] hover:bg-white border border-[#E6DDD0]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${tab.accentColor}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* The large interactive question card container */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Deck stack shadow illusion with rich warm tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E06D46]/25 to-[#F59E0B]/25 rounded-3xl translate-y-3 translate-x-2 blur-xs" />
            <div className="absolute inset-0 bg-[#F2ECE1] rounded-3xl translate-y-1.5 translate-x-1 border border-[#DDD3C2]" />

            {/* The primary card */}
            <div
              className={`relative bg-[#FFFFFF] border-2 border-[#E6DDD0] rounded-3xl p-6 sm:p-10 shadow-md transition-transform duration-500 ${
                tableOrientation ? 'rotate-180' : ''
              }`}
            >
              {/* Card top bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F2ECE1] text-xs text-[#78716C]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E06D46]" />
                  <span className="font-semibold text-[#1C1917]">
                    {currentQuestion.categoryLabel}
                  </span>
                  <span aria-hidden="true" className="text-[#C8BCAC]">·</span>
                  <span className="capitalize text-[#E06D46] font-semibold">
                    {currentQuestion.moodTag || 'Gesprek'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#78716C] tabular-nums font-medium bg-[#FAF7F2] px-2 py-0.5 rounded-md">
                    {activeIndex + 1} / {filteredQuestions.length}
                  </span>
                  <button
                    onClick={() => setTableOrientation(!tableOrientation)}
                    type="button"
                    title="Draai kaart voor de overkant van de tafel"
                    className="p-1.5 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Text Box with smooth motion transition */}
              <div className="min-h-[160px] sm:min-h-[190px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentQuestion.id}-${showFollowUp}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    <p className="font-editorial text-2xl sm:text-3xl md:text-[34px] leading-snug sm:leading-tight text-[#1C1917] font-normal mb-4">
                      {currentQuestion.text}
                    </p>

                    {/* Follow-up / Doorvraag reveal */}
                    {showFollowUp && currentQuestion.followUp && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-[#F2ECE1] text-sm sm:text-base text-[#E06D46] italic font-editorial bg-[#FAF7F2] p-4 rounded-2xl"
                      >
                        <span className="font-sans text-xs font-semibold not-italic uppercase tracking-wider text-[#78716C] block mb-1">
                          Vraag daarna door:
                        </span>
                        “{currentQuestion.followUp}”
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card micro-hint */}
              <div className="pt-6 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#78716C]">
                <span>Tussen Ons · {tableOrientation ? 'Gedraaid naar overkant' : 'Normale weergave'}</span>
                {currentQuestion.followUp && (
                  <button
                    onClick={() => setShowFollowUp(!showFollowUp)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E06D46] hover:text-[#C2542C] transition-colors cursor-pointer"
                  >
                    {showFollowUp ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Verberg doorvraag</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Toon doorvraag</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive controls under card */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={handlePrevious}
                type="button"
                className="flex-1 sm:flex-none px-5 py-3 rounded-full border border-[#E6DDD0] bg-white text-xs sm:text-sm font-medium text-[#1C1917] hover:bg-[#FAF7F2] transition-colors cursor-pointer shadow-2xs"
              >
                Vorige
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="flex-2 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#1C1917] text-white text-xs sm:text-sm font-medium hover:bg-[#E06D46] transition-all shadow-md cursor-pointer"
              >
                <span>Volgende vraag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#78716C] text-center sm:text-right font-medium">
              Tip: Leg de telefoon op tafel tussen jullie in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

