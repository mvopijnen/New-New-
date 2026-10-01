import { useState } from 'react';
import { CATEGORIES } from '../data/questionsData';
import { CategoryWorld } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryWorldsProps {
  onSelectCategoryForGame: (categoryId: string) => void;
}

export default function CategoryWorlds({ onSelectCategoryForGame }: CategoryWorldsProps) {
  const [activeWorldId, setActiveWorldId] = useState<string>(CATEGORIES[0].id);

  const activeWorld: CategoryWorld =
    CATEGORIES.find((c) => c.id === activeWorldId) || CATEGORIES[0];

  return (
    <section id="werelden" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background rich glowing gradient */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] gradient-blob-2 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section lead */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E06D46] mb-3 bg-[#E06D46]/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zes werelden van gesprek</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#1C1917] font-normal leading-[1.15] tracking-tight mb-4">
            Geen statisch kaartspel. Zes verschillende sferen om in te stappen.
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Ieder gesprek vraagt om een andere temperatuur. Kies de wereld die past bij waar jullie vanavond zin in hebben.
          </p>
        </div>

        {/* The World Navigator (Horizontal tab bar with editorial flair) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 border-b border-[#E6DDD0] no-scrollbar">
          {CATEGORIES.map((world) => {
            const isSelected = world.id === activeWorldId;
            return (
              <button
                key={world.id}
                onClick={() => setActiveWorldId(world.id)}
                type="button"
                className={`text-left px-5 py-3 rounded-2xl whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#1C1917] text-white shadow-md scale-105'
                    : 'bg-white/80 text-[#57534E] hover:text-[#1C1917] hover:bg-white border border-[#E6DDD0]'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: world.accentColor }}
                />
                <div>
                  <div className="text-[10px] opacity-70 uppercase tracking-wider">Sfeer</div>
                  <div className="font-medium text-sm sm:text-base">{world.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* The Active World Stage: Asymmetric immersive container */}
        <div
          className="border-2 rounded-3xl p-6 sm:p-12 transition-all duration-500 shadow-md relative overflow-hidden"
          style={{
            backgroundColor: activeWorld.bgTint,
            borderColor: activeWorld.borderTint,
          }}
        >
          {/* Subtle colored backdrop glow in card */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: activeWorld.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left side: World identity & soul */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 shadow-2xs" style={{ backgroundColor: `${activeWorld.accentColor}15`, color: activeWorld.accentColor }}>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeWorld.accentColor }}
                  />
                  <span>Toon: {activeWorld.tone}</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight mb-4">
                  {activeWorld.leadSentence}
                </h3>

                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-8">
                  {activeWorld.description}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectCategoryForGame(activeWorld.id)}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                  style={{ backgroundColor: activeWorld.accentColor }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Speel een ronde {activeWorld.title}</span>
                </button>
              </div>
            </div>

            {/* Right side: Real sample question cards from this world */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-1">
                Voorbeeldvragen uit deze wereld
              </div>

              {activeWorld.sampleQuestions.map((question, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-sm border border-[#E6DDD0] rounded-2xl p-5 sm:p-6 shadow-2xs hover:border-[#1C1917]/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-editorial text-xl font-medium select-none pt-0.5"
                      style={{ color: activeWorld.accentColor }}
                    >
                      0{idx + 1}
                    </span>
                    <p className="font-editorial text-lg sm:text-xl text-[#1C1917] leading-relaxed">
                      “{question}”
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

