import { BookHeart, Clock, RotateCcw, Moon } from 'lucide-react';

export default function UniqueDifferentiators() {
  const differentiators = [
    {
      icon: <BookHeart className="w-6 h-6 text-[#BD3A53]" />,
      title: 'Ons Gespreksarchief',
      description: 'Bewaar vragen die jullie diep raakten in een persoonlijk lokaal archief. Zo blijk je naderhand altijd terug te kunnen kijken op de avond.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#BD3A53]" />,
      title: 'Stilte- en Reflectiepauze',
      description: 'Zodra een diepere vraag gesteld is, kun je optioneel een zachte stiltepauze van 30 seconden starten. Geen haast om direct te antwoorden.',
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-[#BD3A53]" />,
      title: 'Tafelmodus & Omslag',
      description: 'Leg de telefoon plat op tafel tussen jullie in. Met één klik draait de kaart direct 180 graden zodat degene aan de overkant hem perfect leest.',
    },
    {
      icon: <Moon className="w-6 h-6 text-[#BD3A53]" />,
      title: 'Kaarslicht Focusmodus',
      description: 'Demp het scherm volledig tot een warme, donkere minimalistische glow zodat notificaties en omgevingslicht volledig verdwijnen.',
    },
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BD3A53] block mb-4">
            Het verschil
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl text-[#201A18] font-normal leading-[1.12] tracking-tight">
            Functies die het gesprek écht verdiepen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/30 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF5F0] border border-[#EFE6DE] flex items-center justify-center mb-6">
                  {diff.icon}
                </div>
                <h3 className="font-editorial text-2xl text-[#201A18] font-normal mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm text-[#6E625D] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
