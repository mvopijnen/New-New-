import { SITUATIONS } from '../data/questionsData';

export default function SituationsSection() {
  return (
    <section id="situaties" className="py-24 sm:py-32 bg-[#F6F1EA] border-t border-[#E6DDD0] overflow-hidden">
      {/* Full-width container header with strong editorial punch */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DDD3C2]">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C3D28] block mb-3">
              Situaties
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#1C1917] font-normal leading-[1.15] tracking-tight">
              Eerste date, zondag op de bank, autorit van drie uur of een avond waarop Netflix even niet nodig is.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#57534E] max-w-xs leading-relaxed">
            Geen vast moment. Gewoon een moment waarop twee mensen toevallig tegenover elkaar zitten en besluiten niet weg te kijken.
          </p>
        </div>
      </div>

      {/* Asymmetric, rhythmic cards layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Large feature span (7 cols) */}
          <div className="md:col-span-7 bg-[#FFFFFF] border border-[#E6DDD0] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xs relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D96B43]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-105" />
            <div>
              <div className="flex items-center gap-2 text-xs text-[#78716C] mb-6">
                <span>{SITUATIONS[0].timeframe}</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1917] font-normal mb-3">
                {SITUATIONS[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-8">
                {SITUATIONS[0].context}
              </p>
            </div>

            <div className="pt-6 border-t border-[#F2ECE1]">
              <blockquote className="font-editorial text-lg sm:text-xl text-[#1C1917] italic leading-relaxed">
                {SITUATIONS[0].quote}
              </blockquote>
            </div>
          </div>

          {/* Card 2: Compact vertical span (5 cols) */}
          <div className="md:col-span-5 bg-[#FAF5F0] border border-[#E6DDD0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#78716C] mb-6">
                <span>{SITUATIONS[1].timeframe}</span>
              </div>
              <h3 className="font-editorial text-2xl text-[#1C1917] font-normal mb-3">
                {SITUATIONS[1].title}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed mb-6">
                {SITUATIONS[1].context}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E6DDD0]">
              <blockquote className="font-editorial text-base sm:text-lg text-[#1C1917] italic leading-relaxed">
                {SITUATIONS[1].quote}
              </blockquote>
            </div>
          </div>

          {/* Card 3: Compact span (5 cols) */}
          <div className="md:col-span-5 bg-[#FAF7F2] border border-[#E6DDD0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#78716C] mb-6">
                <span>{SITUATIONS[2].timeframe}</span>
              </div>
              <h3 className="font-editorial text-2xl text-[#1C1917] font-normal mb-3">
                {SITUATIONS[2].title}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed mb-6">
                {SITUATIONS[2].context}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E6DDD0]">
              <blockquote className="font-editorial text-base sm:text-lg text-[#1C1917] italic leading-relaxed">
                {SITUATIONS[2].quote}
              </blockquote>
            </div>
          </div>

          {/* Card 4: Wide feature span (7 cols) */}
          <div className="md:col-span-7 bg-[#FFFFFF] border border-[#E6DDD0] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xs relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#365347]/5 rounded-tl-full pointer-events-none transition-transform group-hover:scale-105" />
            <div>
              <div className="flex items-center gap-2 text-xs text-[#78716C] mb-6">
                <span>{SITUATIONS[3].timeframe}</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1917] font-normal mb-3">
                {SITUATIONS[3].title}
              </h3>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-8">
                {SITUATIONS[3].context}
              </p>
            </div>

            <div className="pt-6 border-t border-[#F2ECE1]">
              <blockquote className="font-editorial text-lg sm:text-xl text-[#1C1917] italic leading-relaxed">
                {SITUATIONS[3].quote}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
