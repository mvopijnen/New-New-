import { CONVERSATION_PRINCIPLES } from '../data/questionsData';

export default function ConversationRules() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] border-t border-[#E6DDD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section kicker */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D96B43] block mb-3">
            Spelregels
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#1C1917] font-normal leading-[1.15] tracking-tight mb-4">
            Drie principes van een gesprek dat ergens over gaat.
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Geen punten, geen timers, geen winnaars. Alleen de bereidheid om even echt te luisteren.
          </p>
        </div>

        {/* 3 Principles human editorial list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONVERSATION_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#FFFFFF] border border-[#E6DDD0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs hover:border-[#D96B43]/40 transition-colors duration-200"
            >
              <div>
                <span className="font-editorial text-3xl sm:text-4xl text-[#D96B43] block mb-6 select-none">
                  {principle.number}
                </span>
                <h3 className="font-editorial text-2xl text-[#1C1917] font-normal mb-3">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mt-4 pt-4 border-t border-[#F2ECE1]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
