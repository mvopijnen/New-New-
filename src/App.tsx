import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import InteractiveDemo from './components/InteractiveDemo';
import SituationsSection from './components/SituationsSection';
import CategoryWorlds from './components/CategoryWorlds';
import BrandStatement from './components/BrandStatement';
import ConversationRules from './components/ConversationRules';
import RealStories from './components/RealStories';
import ClosingCta from './components/ClosingCta';
import Footer from './components/Footer';
import ConversationAppModal from './components/ConversationAppModal';

export default function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [gameCategory, setGameCategory] = useState<string>('all');

  const handleStartSession = (category: string = 'all') => {
    setGameCategory(category);
    setIsGameOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] selection:bg-[#D96B43]/20 selection:text-[#1C1917] paper-texture flex flex-col">
      {/* Top Navigation */}
      <Navigation onStartSession={() => handleStartSession('all')} />

      {/* Main Narrative Journey */}
      <main className="flex-1">
        {/* 1. Hero: Eerste emotionele trigger */}
        <Hero onTryDirectly={() => handleStartSession('samen')} />

        {/* 2. Interactieve Demo: Product onmiddellijk ervaren */}
        <InteractiveDemo />

        {/* 3. Situaties: Wanneer gebruik je Tussen Ons */}
        <SituationsSection />

        {/* 4. Categorieën als Werelden */}
        <CategoryWorlds
          onSelectCategoryForGame={(catId) => handleStartSession(catId)}
        />

        {/* 5. Emotioneel Merkanker & Regel van het omgekeerde scherm */}
        <BrandStatement />

        {/* 6. Principes van een goed gesprek */}
        <ConversationRules />

        {/* 7. Echte verhalen / Menselijke bevestiging */}
        <RealStories />

        {/* 8. Laatste merkstatement & Uitnodiging */}
        <ClosingCta onStartSession={() => handleStartSession('all')} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Full Live Conversation Experience Modal */}
      <ConversationAppModal
        isOpen={isGameOpen}
        initialCategoryId={gameCategory}
        onClose={() => setIsGameOpen(false)}
      />
    </div>
  );
}
