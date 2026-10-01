import { SITUATIONS } from '../data/questionsData';

export default function SituationsSection() {
  return (
    <section id="situaties" className="py-28 sm:py-36 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#EFE6DE]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-4">
              Momenten &amp; Context
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#201A18] font-normal leading-[1.1] tracking-tight">
              Eerste date, zondag op de bank, autorit van drie uur of een avond waarop Netflix even niet nodig is.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#6E625D] max-w-sm leading-relaxed">
            Geen geforceerd moment. Gewoon wanneer twee mensen toevallig tegenover elkaar zitten en besluiten niet op hun scherm te kijken.
          </p>
        </div>
      </div>

      {/* Asymmetric cinematic situations grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {SITUATIONS.map((sit, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={sit.id}
                className={`${
                  isLarge ? 'md:col-span-7' : 'md:col-span-5'
                } bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-md relative overflow-hidden group hover:border-[#BD3A53]/40 transition-all duration-500`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#BD3A53]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                <div>
                  <div className="text-xs font-mono text-[#6E625D] mb-6 uppercase tracking-widest">
                    {sit.timeframe}
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#201A18] font-normal mb-4">
                    {sit.title}
                  </h3>
                  <p className="text-base text-[#6E625D] leading-relaxed mb-10">
                    {sit.context}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EFE6DE]">
                  <blockquote className="font-editorial text-xl sm:text-2xl text-[#201A18] italic leading-relaxed">
                    {sit.quote}
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
