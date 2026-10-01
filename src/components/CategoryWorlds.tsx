import { useState } from 'react';
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
    <section id="werelden" className="py-28 sm:py-36 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EFE6DE]">
      {/* Soft Rose Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] soft-rose-glow blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BD3A53] mb-4 bg-[#BD3A53]/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zes werelden van gesprek</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#201A18] font-normal leading-[1.1] tracking-tight mb-6">
            Geen statisch kaartspel. Zes unieke sferen om in te stappen.
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] leading-relaxed">
            Ieder gesprek vraagt om een eigen temperatuur. Kies de wereld die past bij de avond en bij elkaar.
          </p>
        </div>

        {/* World Navigator Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 border-b border-[#EFE6DE] no-scrollbar">
          {CATEGORIES.map((world) => {
            const isSelected = world.id === activeWorldId;
            return (
              <button
                key={world.id}
                onClick={() => setActiveWorldId(world.id)}
                type="button"
                className={`text-left px-6 py-4 rounded-2xl whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  isSelected
                    ? 'bg-[#BD3A53] text-white shadow-md scale-105'
                    : 'bg-white text-[#6E625D] hover:text-[#201A18] hover:bg-white border border-[#EFE6DE]'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: world.accentColor }}
                />
                <div>
                  <div className="text-[10px] opacity-70 uppercase tracking-widest font-mono">Sfeer</div>
                  <div className="font-medium text-base">{world.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active World Immersive Stage */}
        <div className="bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-md">
          {/* Subtle backdrop glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: activeWorld.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left side: World identity */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 shadow-2xs"
                  style={{ backgroundColor: `${activeWorld.accentColor}15`, color: activeWorld.accentColor }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeWorld.accentColor }} />
                  <span>Toon: {activeWorld.tone}</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#201A18] font-normal leading-tight mb-6">
                  {activeWorld.leadSentence}
                </h3>

                <p className="text-base text-[#6E625D] leading-relaxed mb-10">
                  {activeWorld.description}
                </p>
              </div>

              <div>
                <button
                  onClick={() => onSelectCategoryForGame(activeWorld.id)}
                  type="button"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm font-semibold transition-all shadow-md hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: activeWorld.accentColor }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start een ronde {activeWorld.title}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right side: Sample questions in artful editorial cards */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#6E625D] mb-2 font-mono">
                Voorbeeldvragen uit deze wereld
              </div>

              {activeWorld.sampleQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl p-6 sm:p-7 hover:border-[#201A18]/20 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="font-editorial text-2xl font-light select-none pt-0.5"
                      style={{ color: activeWorld.accentColor }}
                    >
                      0{idx + 1}
                    </span>
                    <p className="font-editorial text-xl sm:text-2xl text-[#201A18] leading-snug">
                      “{q}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
