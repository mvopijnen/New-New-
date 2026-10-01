export default function Footer() {
  return (
    <footer className="bg-[#FAF5F0] text-[#6E625D] py-16 border-t border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#EFE6DE]">
          <div>
            <div className="flex items-center gap-3 text-[#201A18] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BD3A53]" />
              <span className="font-editorial text-2xl font-medium tracking-tight">Tussen Ons</span>
            </div>
            <p className="text-xs text-[#6E625D] max-w-sm leading-relaxed">
              Een digitale ervaring om de aandacht van het scherm af te halen en terug te brengen naar degene tegenover je.
            </p>
          </div>

          <nav className="flex flex-wrap gap-8 text-xs font-mono text-[#6E625D]">
            <a href="#ervaren" className="hover:text-[#201A18] transition-colors">
              Probeer een vraag
            </a>
            <a href="#werelden" className="hover:text-[#201A18] transition-colors">
              Zes werelden
            </a>
            <a href="#situaties" className="hover:text-[#201A18] transition-colors">
              Situaties
            </a>
            <a href="#het-idee" className="hover:text-[#201A18] transition-colors">
              Het idee
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E625D]">
          <div>© {new Date().getFullYear()} Tussen Ons. Geen cookies, geen tracking, geen afleiding.</div>
          <div className="font-editorial italic text-sm text-[#201A18]">
            Het echte product is het gesprek.
          </div>
        </div>
      </div>
    </footer>
  );
}
