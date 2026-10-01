import { CONVERSATION_PRINCIPLES } from '../data/questionsData';

export default function ConversationRules() {
  return (
    <section className="py-28 sm:py-36 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-4">
            Spelregels
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#201A18] font-normal leading-[1.1] tracking-tight mb-6">
            Drie principes van een gesprek dat ergens over gaat.
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] leading-relaxed">
            Geen punten, geen timers, geen winnaars. Alleen de bereidheid om even echt te luisteren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONVERSATION_PRINCIPLES.map((p) => (
            <div
              key={p.number}
              className="bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-md hover:border-[#BD3A53]/40 transition-colors duration-300"
            >
              <div>
                <span className="font-editorial text-4xl sm:text-5xl text-[#BD3A53] block mb-6 font-light select-none">
                  {p.number}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#201A18] font-normal mb-4">
                  {p.title}
                </h3>
              </div>
              <p className="text-base text-[#6E625D] leading-relaxed mt-6 pt-6 border-t border-[#EFE6DE]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
