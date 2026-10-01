import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_QUESTIONS, CATEGORIES } from '../data/questionsData';
import { CategoryId, Question } from '../types';
import { X, RotateCcw, ArrowRight, ArrowLeft, Moon, Sun, Sparkles, Eye, EyeOff } from 'lucide-react';

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
  const [dimMode, setDimMode] = useState(false); // Darkens screen to candle ambient for speaking

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1C1917]/70 backdrop-blur-md overflow-y-auto"
    >
      <div
        className={`w-full max-w-2xl min-h-[580px] rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl transition-colors duration-500 relative border ${
          dimMode
            ? 'bg-[#141210] border-[#292524] text-[#FAF7F2]'
            : 'bg-[#FAF7F2] border-[#E6DDD0] text-[#1C1917]'
        }`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="font-editorial text-lg sm:text-xl font-medium">Tussen Ons</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="text-xs uppercase tracking-wider opacity-70">
              {currentQ.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Candle/Dim mode for focus on speaking */}
            <button
              onClick={() => setDimMode(!dimMode)}
              type="button"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                dimMode ? 'bg-[#292524] text-[#E07A5F]' : 'hover:bg-[#F2ECE1] text-[#78716C]'
              }`}
              title={dimMode ? 'Scherm helder maken' : 'Focus / Kaarslicht modus'}
            >
              {dimMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Table rotate mode */}
            <button
              onClick={() => setTableMode(!tableMode)}
              type="button"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                tableMode ? 'bg-[#D96B43] text-white' : 'hover:bg-[#F2ECE1] text-[#78716C]'
              }`}
              title="Draai voor de overkant van de tafel"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-full hover:bg-black/5 text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
              aria-label="Sluit gesprek"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Deck Category Selector Tabs */}
        {!dimMode && (
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar border-b border-black/5">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setCurrentIndex(0);
                setShowFollowUp(false);
              }}
              type="button"
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#1C1917] text-white'
                  : 'bg-white/60 text-[#57534E] hover:bg-white'
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
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1C1917] text-white'
                    : 'bg-white/60 text-[#57534E] hover:bg-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {/* Question Stage */}
        <div
          className={`my-auto py-8 sm:py-12 transition-transform duration-500 ${
            tableMode ? 'rotate-180' : ''
          }`}
        >
          <div className="flex items-center gap-2 mb-4 text-xs opacity-60">
            <span className="w-2 h-2 rounded-full bg-[#D96B43]" />
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
              <h2 className="font-editorial text-2xl sm:text-4xl md:text-[38px] font-normal leading-snug sm:leading-tight mb-6">
                “{currentQ.text}”
              </h2>

              {showFollowUp && currentQ.followUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`p-4 rounded-2xl border text-sm sm:text-base font-editorial italic ${
                    dimMode
                      ? 'bg-[#1F1B18] border-[#3E3835] text-[#E29578]'
                      : 'bg-[#FFFFFF] border-[#E6DDD0] text-[#8C3D28]'
                  }`}
                >
                  <span className="font-sans not-italic text-xs font-semibold uppercase tracking-wider block mb-1 opacity-70">
                    Als het antwoord is gegeven, vraag door:
                  </span>
                  “{currentQ.followUp}”
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Interactive Controls */}
        <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {currentQ.followUp && (
              <button
                onClick={() => setShowFollowUp(!showFollowUp)}
                type="button"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  dimMode
                    ? 'border-[#3E3835] text-[#A8A29E] hover:text-white'
                    : 'border-[#E6DDD0] text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                {showFollowUp ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showFollowUp ? 'Verberg doorvraag' : 'Toon doorvraag'}</span>
              </button>
            )}
            <button
              onClick={() => setDimMode(!dimMode)}
              type="button"
              className="text-xs opacity-70 hover:opacity-100 transition-opacity cursor-pointer hidden sm:inline"
            >
              {dimMode ? 'Scherm aanzetten' : 'Leg neer om te luisteren'}
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrev}
              type="button"
              className={`p-3 rounded-full border transition-colors cursor-pointer ${
                dimMode
                  ? 'border-[#3E3835] text-white hover:bg-white/10'
                  : 'border-[#E6DDD0] bg-white text-[#1C1917] hover:bg-[#F2ECE1]'
              }`}
              aria-label="Vorige vraag"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D96B43] hover:bg-[#C2542C] text-white text-sm font-medium transition-colors shadow-sm cursor-pointer"
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
