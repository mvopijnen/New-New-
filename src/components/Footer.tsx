export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] py-14 border-t border-[#292524]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#292524]">
          <div>
            <span className="font-editorial text-2xl font-medium tracking-tight block text-[#FAF7F2] mb-2">
              Tussen Ons
            </span>
            <p className="text-xs text-[#A8A29E] max-w-sm leading-relaxed">
              Een digitale ervaring om de aandacht van het scherm af te halen en terug te brengen naar degene tegenover je.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-xs text-[#A8A29E]">
            <a href="#ervaren" className="hover:text-white transition-colors">
              Probeer een vraag
            </a>
            <a href="#werelden" className="hover:text-white transition-colors">
              Zes werelden
            </a>
            <a href="#situaties" className="hover:text-white transition-colors">
              Situaties
            </a>
            <a href="#het-idee" className="hover:text-white transition-colors">
              Het idee
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div>© {new Date().getFullYear()} Tussen Ons. Geen cookies, geen tracking, geen afleiding.</div>
          <div className="font-editorial italic text-xs text-[#A8A29E]">
            Het echte product is het gesprek.
          </div>
        </div>
      </div>
    </footer>
  );
}
