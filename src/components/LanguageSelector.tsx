
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'te', name: 'తెలుగు' }, // Telugu
  { code: 'hi', name: 'हिन्दी' }, // Hindi
  { code: 'ta', name: 'தமிழ்' }, // Tamil
  { code: 'kn', name: 'ಕನ್ನಡ' }, // Kannada
  { code: 'ja', name: '日本語' }, // Japanese
  { code: 'ko', name: '한국어' }, // Korean
  { code: 'zh', name: '中文' }, // Chinese
  { code: 'es', name: 'Español' }, // Spanish
  { code: 'it', name: 'Italiano' }, // Italian
  { code: 'fr', name: 'Français' }, // French
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    // Here you would implement actual language change logic
    console.log(`Language changed to ${code}`);
  };

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === selectedLanguage)?.name || 'English';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
          <Globe size={16} />
          <span className="ml-1">{getCurrentLanguageName()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer ${selectedLanguage === language.code ? 'bg-pest-green-50 text-pest-green-700 font-medium' : ''}`}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
