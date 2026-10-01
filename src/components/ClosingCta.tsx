import { ArrowRight, Sparkles } from 'lucide-react';

interface ClosingCtaProps {
  onStartSession: () => void;
}

export default function ClosingCta({ onStartSession }: ClosingCtaProps) {
  return (
    <section className="py-28 sm:py-36 bg-[#FAF5F0] text-[#201A18] border-t border-[#EFE6DE] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] soft-rose-glow blur-[120px] opacity-70 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-6">
          Klaar om te beginnen?
        </span>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#201A18] font-normal leading-[1.12] tracking-tight mb-6 text-balance">
          Het echte product zit al tegenover je.
        </h2>

        <p className="text-lg sm:text-xl text-[#6E625D] max-w-xl mx-auto leading-relaxed mb-10">
          Geen account vereist. Geen download nodig. Open een sfeer, leg het scherm op tafel en stel de eerste vraag.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartSession}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#BD3A53] hover:bg-[#A51D33] text-white text-base font-semibold transition-all shadow-sm cursor-pointer"
          >
            <span>Begin samen</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#ervaren"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#EFE6DE] bg-white text-[#201A18] text-base font-medium hover:border-[#BD3A53] hover:text-[#BD3A53] transition-colors cursor-pointer shadow-2xs"
          >
            <Sparkles className="w-4 h-4 text-[#BD3A53]" />
            <span>Bekijk meer voorbeeldvragen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
