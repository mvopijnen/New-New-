import { SITUATIONS } from '../data/questionsData';

export default function SituationsSection() {
  return (
    <section id="situaties" className="py-20 sm:py-28 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header - Subtle and refined */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-3">
            Momenten &amp; Context
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#201A18] font-normal leading-snug tracking-tight mb-4">
            Eerste date, zondag op de bank, autorit van drie uur of een avond waarop Netflix even niet nodig is.
          </h2>
          <p className="text-sm sm:text-base text-[#6E625D] leading-relaxed">
            Geen geforceerd moment. Gewoon wanneer twee mensen toevallig tegenover elkaar zitten en besluiten niet op hun scherm te kijken.
          </p>
        </div>

        {/* Balanced, uniform grid with no giant cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITUATIONS.map((sit) => (
            <div
              key={sit.id}
              className="bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs relative overflow-hidden group hover:border-[#BD3A53]/30 transition-all duration-300"
            >
              <div>
                <div className="text-[10px] font-mono text-[#6E625D] mb-4 uppercase tracking-widest">
                  {sit.timeframe}
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#201A18] font-normal mb-3">
                  {sit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed mb-6">
                  {sit.context}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE6DE]">
                <blockquote className="font-editorial text-base sm:text-lg text-[#201A18] italic leading-snug">
                  {sit.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
