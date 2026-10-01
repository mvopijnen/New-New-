import { TESTIMONIAL_MOMENTS } from '../data/questionsData';

export default function RealStories() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5EFEB] border-t border-[#E6DDD0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C3D28] block mb-3">
            In het echt
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#1C1917] font-normal leading-[1.15] tracking-tight">
            Wat er gebeurt wanneer het scherm even weggaat.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_MOMENTS.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-[#E6DDD0] rounded-3xl p-8 flex flex-col justify-between shadow-2xs"
            >
              <blockquote className="font-editorial text-lg sm:text-xl text-[#1C1917] italic leading-relaxed mb-8">
                “{item.quote}”
              </blockquote>

              <div className="pt-4 border-t border-[#F2ECE1]">
                <div className="font-medium text-sm text-[#1C1917]">{item.author}</div>
                <div className="text-xs text-[#78716C] mt-0.5">{item.setting}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
