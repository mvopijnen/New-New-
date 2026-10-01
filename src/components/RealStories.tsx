import { TESTIMONIAL_MOMENTS } from '../data/questionsData';

export default function RealStories() {
  return (
    <section className="py-28 sm:py-36 bg-[#FAF5F0] relative overflow-hidden border-t border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-4">
            In het echt
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#201A18] font-normal leading-[1.1] tracking-tight">
            Wat er gebeurt wanneer het scherm even weggaat.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_MOMENTS.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-md"
            >
              <blockquote className="font-editorial text-xl sm:text-2xl text-[#201A18] italic leading-relaxed mb-10">
                “{item.quote}”
              </blockquote>

              <div className="pt-6 border-t border-[#EFE6DE]">
                <div className="font-semibold text-base text-[#201A18]">{item.author}</div>
                <div className="text-xs font-mono text-[#6E625D] mt-1">{item.setting}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
