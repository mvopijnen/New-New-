import { ArrowRight, Sparkles } from 'lucide-react';

interface ClosingCtaProps {
  onStartSession: () => void;
}

export default function ClosingCta({ onStartSession }: ClosingCtaProps) {
  return (
    <section className="py-24 sm:py-36 bg-[#FAF7F2] border-t border-[#E6DDD0] text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#D96B43] block mb-4">
          Klaar om te beginnen?
        </span>

        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#1C1917] font-normal leading-[1.15] tracking-tight mb-6 text-balance">
          Het echte product zit al tegenover je.
        </h2>

        <p className="text-base sm:text-lg text-[#57534E] max-w-xl mx-auto leading-relaxed mb-10">
          Geen account vereist. Geen download nodig. Open een sfeer, leg het scherm tussen jullie in en stel de eerste vraag.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartSession}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1C1917] text-white text-base font-medium hover:bg-[#D96B43] transition-colors shadow-sm cursor-pointer"
          >
            <span>Begin samen</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#ervaren"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#E6DDD0] text-[#1C1917] text-base font-medium hover:bg-[#F2ECE1] transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D96B43]" />
            <span>Bekijk meer voorbeeldvragen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
