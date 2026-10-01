import { useState } from 'react';
import { Smartphone, Moon, Sun } from 'lucide-react';

export default function BrandStatement() {
  const [phoneFacedown, setPhoneFacedown] = useState(false);

  return (
    <section id="het-idee" className="py-24 sm:py-36 bg-[#1C1917] text-[#FAF7F2] relative overflow-hidden">
      {/* Background typographic rhythm */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Graphic rhythm words */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold tracking-widest text-[#A8A29E] uppercase pb-12 border-b border-[#292524] mb-16">
          <span>Eerlijk.</span>
          <span className="hidden sm:inline">·</span>
          <span>Ongemakkelijk.</span>
          <span className="hidden sm:inline">·</span>
          <span>Grappig.</span>
          <span className="hidden sm:inline">·</span>
          <span>Dichterbij.</span>
        </div>

        {/* Central Manifest Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-[#D96B43] mb-6">
            De kernfilosofie
          </p>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-normal leading-[1.2] tracking-tight mb-8 text-balance">
            Technologie gebruiken om de aandacht juist van het scherm af te halen en terug te brengen naar degene tegenover je.
          </h2>
          <p className="text-lg sm:text-xl text-[#A8A29E] font-editorial italic max-w-2xl mx-auto">
            Het scherm is slechts het startpunt. Het echte product is het gesprek tussen twee mensen.
          </p>
        </div>

        {/* The tactile physical phone demonstration ritual */}
        <div className="max-w-xl mx-auto bg-[#292524] border border-[#3E3835] rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setPhoneFacedown(!phoneFacedown)}
              type="button"
              className="group relative cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D96B43] rounded-2xl"
              title="Klik om de telefoon om te draaien"
            >
              <div
                className={`w-32 h-56 rounded-2xl border-2 transition-all duration-500 flex flex-col items-center justify-center p-3 ${
                  phoneFacedown
                    ? 'bg-[#1C1917] border-[#57534E] rotate-180 shadow-inner'
                    : 'bg-[#FAF7F2] border-[#E6DDD0] shadow-lg'
                }`}
              >
                {phoneFacedown ? (
                  <div className="flex flex-col items-center text-center">
                    <Moon className="w-6 h-6 text-[#A8A29E] mb-2" />
                    <span className="text-[10px] text-[#A8A29E] uppercase tracking-wider font-sans">
                      Scherm omlaag
                    </span>
                    <span className="text-[9px] text-[#78716C] mt-1 font-editorial italic">
                      Nu telt alleen wie tegenover je zit
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <Sun className="w-5 h-5 text-[#D96B43] mb-2" />
                    <span className="text-[10px] text-[#1C1917] font-semibold uppercase tracking-wider font-sans">
                      Vraag gelezen
                    </span>
                    <span className="text-[11px] text-[#57534E] mt-2 font-editorial italic px-1 leading-tight">
                      “Wat dacht je na onze eerste ontmoeting?”
                    </span>
                  </div>
                )}
              </div>
            </button>
          </div>

          <h3 className="font-editorial text-2xl text-[#FAF7F2] font-normal mb-2">
            De regel van het omgekeerde scherm
          </h3>
          <p className="text-sm text-[#A8A29E] leading-relaxed max-w-sm mx-auto mb-6">
            Zodra een van jullie begint met antwoorden, leg je de telefoon omgekeerd op tafel. Geen blik meer op meldingen.
          </p>

          <button
            onClick={() => setPhoneFacedown(!phoneFacedown)}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#D96B43] hover:text-[#E29578] transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-white/5"
          >
            <Smartphone className="w-4 h-4" />
            <span>{phoneFacedown ? 'Draai scherm weer omhoog' : 'Draai scherm met de voorkant omlaag'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
