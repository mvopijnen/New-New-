import { useState } from 'react';
import { Sparkles, Heart, Flame, Coffee, Compass } from 'lucide-react';

const VIBE_PRESETS = [
  {
    id: 'kaarslicht',
    title: 'Kaarslicht & Stilte',
    subtitle: 'Voor late avonden waarin de wereld stilvalt',
    bg: 'bg-[#FAF5F0]',
    border: 'border-[#BD3A53]/30',
    icon: <Flame className="w-4 h-4 text-[#BD3A53]" />,
  },
  {
    id: 'koffie',
    title: 'Zondagochtend & Koffie',
    subtitle: 'Traag opstarten met goede koffie en open vragen',
    bg: 'bg-[#FFFFFF]',
    border: 'border-[#EFE6DE]',
    icon: <Coffee className="w-4 h-4 text-[#BD3A53]" />,
  },
  {
    id: 'wandeling',
    title: 'Avondwandeling',
    subtitle: 'Naast elkaar lopen en praten over wat er echt toe doet',
    bg: 'bg-[#FAF5F0]',
    border: 'border-[#EFE6DE]',
    icon: <Compass className="w-4 h-4 text-[#BD3A53]" />,
  },
  {
    id: 'intens',
    title: 'Diep & Ontwapenend',
    subtitle: 'Voorbij het dagelijkse masker',
    bg: 'bg-[#FFFFFF]',
    border: 'border-[#BD3A53]/40',
    icon: <Heart className="w-4 h-4 text-[#BD3A53]" />,
  },
];

interface MoodArtCreatorProps {
  onSelectVibe: (vibeTitle: string) => void;
}

export default function MoodArtCreator({ onSelectVibe }: MoodArtCreatorProps) {
  const [activeVibe, setActiveVibe] = useState(VIBE_PRESETS[0].id);

  return (
    <section className="py-28 sm:py-36 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-4">
            Volgend niveau
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#201A18] font-normal leading-[1.12] tracking-tight mb-4">
            Bepaal de sfeer voor jullie avond.
          </h2>
          <p className="text-base text-[#6E625D] leading-relaxed">
            Elk gesprek vraagt om een eigen ritme. Kies hieronder de setting waarin jullie zitten en start direct met vragen die daarbij aansluiten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIBE_PRESETS.map((vibe) => {
            const isSelected = activeVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={() => {
                  setActiveVibe(vibe.id);
                  onSelectVibe(vibe.title);
                }}
                type="button"
                className={`text-left p-8 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-[#BD3A53] shadow-md scale-102 ring-2 ring-[#BD3A53]/20'
                    : 'bg-white/60 border-[#EFE6DE] hover:border-[#BD3A53]/50 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5F0] border border-[#EFE6DE] flex items-center justify-center">
                      {vibe.icon}
                    </div>
                    {isSelected && (
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white bg-[#BD3A53] px-2.5 py-1 rounded-full font-semibold">
                        Actief
                      </span>
                    )}
                  </div>
                  <h3 className="font-editorial text-2xl text-[#201A18] font-normal mb-2">
                    {vibe.title}
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    {vibe.subtitle}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EFE6DE] flex items-center justify-between text-xs text-[#BD3A53] font-semibold">
                  <span>Start deze sfeer</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
