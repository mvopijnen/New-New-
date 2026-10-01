import { useState, useEffect } from 'react';

interface NavigationProps {
  onStartSession: () => void;
}

export default function Navigation({ onStartSession }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E6DDD0]/70 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Single element Brand Wordmark */}
        <a
          href="#"
          className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-[#1C1917] hover:text-[#D96B43] transition-colors"
        >
          Tussen Ons
        </a>

        {/* Zone 2: Clean text navigation links (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534E]">
          <a
            href="#ervaren"
            className="hover:text-[#1C1917] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D96B43] hover:after:w-full after:transition-all"
          >
            Probeer een vraag
          </a>
          <a
            href="#werelden"
            className="hover:text-[#1C1917] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D96B43] hover:after:w-full after:transition-all"
          >
            De werelden
          </a>
          <a
            href="#situaties"
            className="hover:text-[#1C1917] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D96B43] hover:after:w-full after:transition-all"
          >
            Wanneer
          </a>
          <a
            href="#het-idee"
            className="hover:text-[#1C1917] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D96B43] hover:after:w-full after:transition-all"
          >
            Het idee
          </a>
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onStartSession}
            type="button"
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-[#1C1917] rounded-full hover:bg-[#D96B43] transition-colors whitespace-nowrap shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D96B43]"
          >
            Start een gesprek
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Menu openen"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#1C1917] rounded-lg hover:bg-[#F2ECE1] transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E6DDD0] px-6 py-5 flex flex-col gap-4 text-base font-medium shadow-md">
          <a
            href="#ervaren"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1C1917] py-2 border-b border-[#F2ECE1]"
          >
            Probeer een vraag
          </a>
          <a
            href="#werelden"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1C1917] py-2 border-b border-[#F2ECE1]"
          >
            De werelden
          </a>
          <a
            href="#situaties"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1C1917] py-2 border-b border-[#F2ECE1]"
          >
            Wanneer
          </a>
          <a
            href="#het-idee"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1C1917] py-2"
          >
            Het idee
          </a>
        </div>
      )}
    </header>
  );
}
