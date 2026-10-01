import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_QUESTIONS, CATEGORIES } from '../data/questionsData';
import { CategoryId, Question } from '../types';
import { X, RotateCcw, ArrowRight, ArrowLeft, Moon, Sun, Eye, EyeOff } from 'lucide-react';

interface ConversationAppModalProps {
  initialCategoryId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ConversationAppModal({
  initialCategoryId,
  isOpen,
  onClose,
}: ConversationAppModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(
    (initialCategoryId as CategoryId) || 'all'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [tableMode, setTableMode] = useState(false);
  const [dimMode, setDimMode] = useState(false);

  if (!isOpen) return null;

  const currentDeck: Question[] =
    selectedCategory === 'all'
      ? ALL_QUESTIONS
      : ALL_QUESTIONS.filter((q) => q.categoryId === selectedCategory);

  const activeIndex = currentIndex % currentDeck.length;
  const currentQ = currentDeck[activeIndex] || ALL_QUESTIONS[0];

  const handleNext = () => {
    setShowFollowUp(false);
    setCurrentIndex((prev) => (prev + 1) % currentDeck.length);
  };

  const handlePrev = () => {
    setShowFollowUp(false);
    setCurrentIndex((prev) => (prev - 1 + currentDeck.length) % currentDeck.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#201A18]/60 backdrop-blur-md overflow-y-auto"
    >
      <div
        className={`w-full max-w-2xl min-h-[600px] rounded-3xl p-6 sm:p-12 flex flex-col justify-between shadow-xl transition-all duration-500 relative border ${
          dimMode
            ? 'bg-[#161311] border-white/10 text-white'
            : 'bg-[#FFFFFF] border-[#EFE6DE] text-[#201A18]'
        }`}
      >
        {/* Top Control Bar */}
        <div className={`flex items-center justify-between pb-6 border-b ${dimMode ? 'border-white/10' : 'border-[#EFE6DE]'}`}>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BD3A53]" />
            <span className="font-editorial text-xl font-medium tracking-tight">Tussen Ons</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="text-xs uppercase tracking-widest font-mono opacity-70">
              {currentQ.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Candle/Dim mode */}
            <button
              onClick={() => setDimMode(!dimMode)}
              type="button"
              className={`p-2.5 rounded-full transition-colors cursor-pointer ${
                dimMode ? 'bg-white/10 text-[#BD3A53]' : 'bg-[#FAF5F0] hover:bg-[#EFE6DE] text-[#201A18]'
              }`}
              title={dimMode ? 'Scherm helder maken' : 'Focus / Kaarslicht modus'}
            >
              {dimMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Table rotate mode */}
            <button
              onClick={() => setTableMode(!tableMode)}
              type="button"
              className={`p-2.5 rounded-full transition-colors cursor-pointer ${
                tableMode ? 'bg-[#BD3A53] text-white' : 'bg-[#FAF5F0] hover:bg-[#EFE6DE] text-[#201A18]'
              }`}
              title="Draai voor de overkant van de tafel"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              type="button"
              className={`p-2.5 rounded-full transition-colors cursor-pointer ${dimMode ? 'bg-white/10 text-white' : 'bg-[#FAF5F0] hover:bg-[#EFE6DE] text-[#201A18]'}`}
              aria-label="Sluit gesprek"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Deck Category Selector Tabs */}
        {!dimMode && (
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar border-b border-[#EFE6DE]">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setCurrentIndex(0);
                setShowFollowUp(false);
              }}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#BD3A53] text-white'
                  : 'bg-[#FAF5F0] text-[#6E625D] hover:bg-[#EFE6DE] hover:text-[#201A18]'
              }`}
            >
              Alles door elkaar
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentIndex(0);
                  setShowFollowUp(false);
                }}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#BD3A53] text-white'
                    : 'bg-[#FAF5F0] text-[#6E625D] hover:bg-[#EFE6DE] hover:text-[#201A18]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {/* Question Stage */}
        <div
          className={`my-auto py-10 sm:py-16 transition-transform duration-500 ${
            tableMode ? 'rotate-180' : ''
          }`}
        >
          <div className="flex items-center gap-2.5 mb-6 text-xs opacity-70 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#BD3A53]" />
            <span>Vraag {activeIndex + 1} van {currentDeck.length}</span>
            {currentQ.moodTag && (
              <>
                <span aria-hidden="true">·</span>
                <span className="capitalize">{currentQ.moodTag}</span>
              </>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentQ.id}-${dimMode}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-[42px] font-normal leading-snug sm:leading-tight mb-8">
                “{currentQ.text}”
              </h2>

              {showFollowUp && currentQ.followUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`p-5 rounded-2xl border text-base font-editorial italic ${
                    dimMode
                      ? 'bg-[#161311] border-white/10 text-[#F7D8D3]'
                      : 'bg-[#FAF5F0] border-[#EFE6DE] text-[#BD3A53]'
                  }`}
                >
                  <span className="font-sans not-italic text-xs font-semibold uppercase tracking-widest text-[#6E625D] block mb-2 font-mono">
                    Als het antwoord is gegeven, vraag door:
                  </span>
                  “{currentQ.followUp}”
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Interactive Controls */}
        <div className={`pt-6 border-t ${dimMode ? 'border-white/10' : 'border-[#EFE6DE]'} flex flex-col sm:flex-row items-center justify-between gap-5`}>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {currentQ.followUp && (
              <button
                onClick={() => setShowFollowUp(!showFollowUp)}
                type="button"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  dimMode
                    ? 'border-white/20 text-[#A8A29E] hover:text-white'
                    : 'border-[#EFE6DE] text-[#6E625D] hover:text-[#201A18]'
                }`}
              >
                {showFollowUp ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showFollowUp ? 'Verberg doorvraag' : 'Toon doorvraag'}</span>
              </button>
            )}
            <button
              onClick={() => setDimMode(!dimMode)}
              type="button"
              className={`text-xs transition-colors cursor-pointer hidden sm:inline ${dimMode ? 'text-[#A8A29E] hover:text-white' : 'text-[#6E625D] hover:text-[#201A18]'}`}
            >
              {dimMode ? 'Scherm aanzetten' : 'Leg neer om te luisteren'}
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrev}
              type="button"
              className={`p-3.5 rounded-full border transition-colors cursor-pointer ${
                dimMode
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-[#EFE6DE] bg-[#FAF5F0] text-[#201A18] hover:bg-[#EFE6DE]'
              }`}
              aria-label="Vorige vraag"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#BD3A53] hover:bg-[#A51D33] text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span>Volgende vraag</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
