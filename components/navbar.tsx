'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; 
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href="/">{language === 'en' ? 'SRI IYYAPPAN THIRUMANA MANDAPAM' : 'ஸ்ரீ ஐயப்பன் திருமண மண்டபம்'}</Link>
        </div>
        <Button variant="ghost" size="sm" onClick={toggleLanguage}>
          {language === 'en' ? 'தமிழ்' : 'English'}
        </Button>
      </div>
    </nav>
  );
}
