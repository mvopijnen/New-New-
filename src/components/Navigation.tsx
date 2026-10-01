import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface NavigationProps {
  onStartSession: () => void;
}

export default function Navigation({ onStartSession }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF5F0]/95 backdrop-blur-md border-b border-[#EFE6DE] py-3.5 shadow-2xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-[#201A18] focus:outline-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#BD3A53] shadow-[0_0_8px_rgba(189,58,83,0.4)] transition-transform group-hover:scale-125" />
          <span className="font-editorial text-2xl tracking-tight text-[#201A18] font-medium">
            Tussen Ons
          </span>
        </a>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-[#6E625D]">
          <a
            href="#ervaren"
            className="hover:text-[#201A18] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all"
          >
            Probeer een vraag
          </a>
          <a
            href="#werelden"
            className="hover:text-[#201A18] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all"
          >
            De werelden
          </a>
          <a
            href="#situaties"
            className="hover:text-[#201A18] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all"
          >
            Wanneer
          </a>
          <a
            href="#het-idee"
            className="hover:text-[#201A18] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all"
          >
            Het idee
          </a>
        </nav>

        {/* Primary Action Button */}
        <button
          onClick={onStartSession}
          type="button"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#BD3A53] hover:bg-[#A51D33] text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin samen</span>
        </button>
      </div>
    </header>
  );
}
