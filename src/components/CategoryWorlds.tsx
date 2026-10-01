import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from '../data/questionsData';
import { CategoryWorld } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CategoryWorldsProps {
  onSelectCategoryForGame: (categoryId: string) => void;
}

export default function CategoryWorlds({ onSelectCategoryForGame }: CategoryWorldsProps) {
  const [activeWorldId, setActiveWorldId] = useState<string>(CATEGORIES[0].id);

  const activeWorld: CategoryWorld =
    CATEGORIES.find((c) => c.id === activeWorldId) || CATEGORIES[0];

  return (
    <section id="werelden" className="py-20 sm:py-28 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EFE6DE]">
      {/* Soft Rose Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] soft-rose-glow blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-3">
            Zes unieke sferen
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#201A18] font-normal leading-[1.15] tracking-tight mb-4">
            Geen statisch kaartspel. Zes unieke sferen om in te stappen.
          </h2>
          <p className="text-sm sm:text-base text-[#6E625D] leading-relaxed">
            Ieder gesprek vraagt om een eigen temperatuur. Kies de wereld die past bij de avond en bij elkaar.
          </p>
        </div>

        {/* World Navigator Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 border-b border-[#EFE6DE] no-scrollbar">
          {CATEGORIES.map((world) => {
            const isSelected = world.id === activeWorldId;
            return (
              <button
                key={world.id}
                onClick={() => setActiveWorldId(world.id)}
                type="button"
                className={`text-left px-5 py-3 rounded-xl whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#BD3A53] text-white shadow-xs'
                    : 'bg-white text-[#6E625D] hover:text-[#201A18] hover:bg-white border border-[#EFE6DE]'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: world.accentColor }}
                />
                <div>
                  <div className="font-medium text-sm">{world.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active World Immersive Stage with Cross-Fade Animation */}
        <div className="bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-xs breathing-card">
          {/* Subtle backdrop glow */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[80px] opacity-15 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: activeWorld.accentColor }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorld.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10"
            >
              {/* Left side: World identity */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 shadow-2xs"
                    style={{ backgroundColor: `${activeWorld.accentColor}15`, color: activeWorld.accentColor }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeWorld.accentColor }} />
                    <span>Toon: {activeWorld.tone}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#201A18] font-normal leading-snug mb-4">
                    {activeWorld.leadSentence}
                  </h3>

                  <p className="text-sm text-[#6E625D] leading-relaxed mb-8">
                    {activeWorld.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onSelectCategoryForGame(activeWorld.id)}
                    type="button"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-all shadow-xs hover:scale-102 cursor-pointer"
                    style={{ backgroundColor: activeWorld.accentColor }}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Start een ronde {activeWorld.title}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Right side: Sample questions in artful editorial cards */}
              <div className="lg:col-span-7 flex flex-col gap-3.5">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#6E625D] mb-1 font-mono">
                  Voorbeeldvragen uit deze wereld
                </div>

                {activeWorld.sampleQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl p-5 sm:p-6 hover:border-[#201A18]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="font-editorial text-xl font-light select-none pt-0.5"
                        style={{ color: activeWorld.accentColor }}
                      >
                        0{idx + 1}
                      </span>
                      <p className="font-editorial text-lg sm:text-xl text-[#201A18] leading-snug">
                        “{q}”
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
