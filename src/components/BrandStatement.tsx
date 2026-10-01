import { useState } from 'react';
import { Smartphone, Moon, Sun } from 'lucide-react';

export default function BrandStatement() {
  const [phoneFacedown, setPhoneFacedown] = useState(false);

  return (
    <section id="het-idee" className="py-28 sm:py-36 bg-[#FAF5F0] text-[#201A18] relative overflow-hidden border-t border-[#EFE6DE]">
      {/* Soft Rose Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] soft-rose-glow blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Graphic rhythm words */}
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-mono tracking-widest text-[#6E625D] uppercase pb-12 border-b border-[#EFE6DE] mb-20">
          <span className="hover:text-[#201A18] transition-colors">Eerlijk.</span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="hover:text-[#201A18] transition-colors">Ongemakkelijk.</span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="hover:text-[#201A18] transition-colors">Grappig.</span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="hover:text-[#201A18] transition-colors">Dichterbij.</span>
        </div>

        {/* Central Manifesto Statement */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-6">
            De filosofie van Tussen Ons
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#201A18] font-normal leading-[1.12] tracking-tight mb-8 text-balance">
            Technologie gebruiken om de aandacht juist van het scherm af te halen en terug te brengen naar degene tegenover je.
          </h2>
          <p className="text-lg sm:text-xl text-[#6E625D] font-editorial italic max-w-2xl mx-auto">
            Het scherm is slechts het startpunt. Het echte product is het gesprek tussen twee mensen.
          </p>
        </div>

        {/* The Candlelight Ritual Demonstration */}
        <div className="max-w-xl mx-auto bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setPhoneFacedown(!phoneFacedown)}
              type="button"
              className="group relative cursor-pointer focus:outline-none rounded-2xl"
              title="Klik om de telefoon om te draaien"
            >
              <div
                className={`w-36 h-60 rounded-2xl border-2 transition-all duration-700 flex flex-col items-center justify-center p-4 shadow-md ${
                  phoneFacedown
                    ? 'bg-[#201A18] border-[#BD3A53] text-white rotate-180 shadow-lg'
                    : 'bg-[#FAF5F0] border-[#EFE6DE] text-[#201A18]'
                }`}
              >
                {phoneFacedown ? (
                  <div className="flex flex-col items-center text-center">
                    <Moon className="w-7 h-7 text-[#BD3A53] mb-3 animate-pulse" />
                    <span className="text-[11px] text-[#A8A29E] uppercase tracking-widest font-mono">
                      Kaarslicht modus
                    </span>
                    <span className="text-[10px] text-white/90 mt-2 font-editorial italic">
                      Geen afleiding meer. Alleen jullie.
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <Sun className="w-6 h-6 text-[#BD3A53] mb-2" />
                    <span className="text-[11px] text-[#201A18] font-bold uppercase tracking-wider font-mono">
                      Vraag gelezen
                    </span>
                    <span className="text-xs text-[#6E625D] mt-2 font-editorial italic px-2 leading-tight">
                      “Wat dacht je na onze eerste ontmoeting?”
                    </span>
                  </div>
                )}
              </div>
            </button>
          </div>

          <h3 className="font-editorial text-3xl text-[#201A18] font-normal mb-3">
            De regel van het omgekeerde scherm
          </h3>
          <p className="text-base text-[#6E625D] leading-relaxed max-w-sm mx-auto mb-8">
            Zodra een van jullie begint met antwoorden, leg je de telefoon omgekeerd op tafel. Geen blik meer op meldingen.
          </p>

          <button
            onClick={() => setPhoneFacedown(!phoneFacedown)}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BD3A53] hover:text-[#A51D33] transition-colors cursor-pointer py-2 px-4 rounded-xl bg-[#FAF5F0] border border-[#EFE6DE]"
          >
            <Smartphone className="w-4 h-4" />
            <span>{phoneFacedown ? 'Draai scherm weer omhoog' : 'Draai telefoon om op tafel'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
