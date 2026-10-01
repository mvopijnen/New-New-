import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_QUESTIONS } from '../data/questionsData';
import { CategoryId, Question } from '../types';
import { ArrowRight, RotateCcw, Eye, EyeOff, Sparkles } from 'lucide-react';

const CATEGORY_TABS: { id: 'all' | CategoryId; label: string; accentColor: string }[] = [
  { id: 'all', label: 'Alle sferen', accentColor: 'bg-[#BD3A53]' },
  { id: 'eerste-date', label: 'Eerste date', accentColor: 'bg-[#F43F5E]' },
  { id: 'samen', label: 'Samen', accentColor: 'bg-[#BD3A53]' },
  { id: 'vrienden', label: 'Vrienden', accentColor: 'bg-[#0D9488]' },
  { id: 'familie', label: 'Familie', accentColor: 'bg-[#7C3AED]' },
  { id: 'verdiepen', label: 'Verdiepen', accentColor: 'bg-[#E11D48]' },
];

export default function InteractiveDemo() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | CategoryId>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [tableOrientation, setTableOrientation] = useState(false);

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
    <section id="ervaren" className="py-28 sm:py-36 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EFE6DE]">
      {/* Soft Rose Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[450px] soft-rose-glow blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BD3A53] mb-4 bg-[#BD3A53]/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Onmiddellijke Ervaring</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#201A18] font-normal tracking-tight mb-4">
            Probeer er eentje.
          </h2>
          <p className="text-base text-[#6E625D] max-w-lg mx-auto leading-relaxed">
            Geen formulier of account. Druk op de knop, stel de vraag aan degene tegenover je en laat het gesprek beginnen.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-6 mb-10 gap-2.5 no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                type="button"
                className={`px-5 py-2.5 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#BD3A53] text-white shadow-xs scale-105'
                    : 'bg-white text-[#6E625D] hover:text-[#201A18] hover:bg-white border border-[#EFE6DE]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${tab.accentColor}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive card container */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Glow backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BD3A53]/15 to-[#F7D8D3]/80 rounded-3xl blur-md opacity-70" />

            <div
              className={`relative bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-sm transition-transform duration-500 ${
                tableOrientation ? 'rotate-180' : ''
              }`}
            >
              {/* Card top bar */}
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#EFE6DE] text-xs text-[#6E625D]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BD3A53]" />
                  <span className="font-semibold text-[#201A18]">{currentQuestion.categoryLabel}</span>
                  <span aria-hidden="true" className="text-[#EFE6DE]">·</span>
                  <span className="capitalize text-[#BD3A53] font-semibold">{currentQuestion.moodTag || 'Gesprek'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#6E625D] tabular-nums bg-[#FAF5F0] px-2.5 py-1 rounded-md font-medium">
                    {activeIndex + 1} / {filteredQuestions.length}
                  </span>
                  <button
                    onClick={() => setTableOrientation(!tableOrientation)}
                    type="button"
                    title="Draai kaart voor de overkant"
                    className="p-2 rounded-lg text-[#6E625D] hover:text-[#201A18] hover:bg-[#FAF5F0] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question text box */}
              <div className="min-h-[180px] sm:min-h-[210px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentQuestion.id}-${showFollowUp}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <p className="font-editorial text-3xl sm:text-4xl md:text-[38px] leading-tight text-[#201A18] font-normal mb-6">
                      “{currentQuestion.text}”
                    </p>

                    {showFollowUp && currentQuestion.followUp && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-6 pt-6 border-t border-[#EFE6DE] text-base text-[#BD3A53] italic font-editorial bg-[#FAF5F0] p-5 rounded-2xl"
                      >
                        <span className="font-sans text-xs font-semibold not-italic uppercase tracking-wider text-[#6E625D] block mb-1">
                          Vraag daarna door:
                        </span>
                        “{currentQuestion.followUp}”
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card micro-hint */}
              <div className="pt-6 border-t border-[#EFE6DE] flex items-center justify-between text-xs text-[#6E625D]">
                <span>{tableOrientation ? 'Gedraaid naar overkant' : 'Tafelmodus actief'}</span>
                {currentQuestion.followUp && (
                  <button
                    onClick={() => setShowFollowUp(!showFollowUp)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BD3A53] hover:text-[#A51D33] transition-colors cursor-pointer"
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

          {/* Controls */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handlePrevious}
                type="button"
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-full border border-[#EFE6DE] bg-white text-xs sm:text-sm font-medium text-[#201A18] hover:bg-[#FAF5F0] transition-colors cursor-pointer shadow-2xs"
              >
                Vorige
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="flex-2 sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#BD3A53] hover:bg-[#A51D33] text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer"
              >
                <span>Volgende vraag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#6E625D] text-center sm:text-right font-medium">
              Leg de telefoon op tafel tussen jullie in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
