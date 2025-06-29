import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { mockDictionary } from '@/data/dictionary';

export const useTranslator = () => {
  const [sourceText, setSourceText] = useState('');
  const [translationResult, setTranslationResult] = useState(null);
  const [isGermanToEnglish, setIsGermanToEnglish] = useState(true);
  const [isTranslating, setIsTranslating] = useState(false);

  const sourceLanguage = isGermanToEnglish ? 'German' : 'English';
  const targetLanguage = isGermanToEnglish ? 'English' : 'German';
  const sourceLangCode = isGermanToEnglish ? 'de' : 'en';

  const handleTranslate = () => {
    const trimmedText = sourceText.trim();
    if (!trimmedText) {
      toast({
        title: '🤔 Input is empty!',
        description: 'Please type a word to translate.',
        duration: 3000,
      });
      return;
    }

    if (trimmedText.split(' ').length > 1) {
      toast({
        title: '☝️ One word at a time!',
        description: 'This translator currently supports single words only.',
        duration: 3000,
      });
      return;
    }

    setIsTranslating(true);
    setTranslationResult(null);

    setTimeout(() => {
      const wordToTranslate = trimmedText.toLowerCase();
      const result = mockDictionary[sourceLangCode]?.[wordToTranslate];

      if (result) {
        setTranslationResult(result);
      } else {
        setTranslationResult({
          translation: `[Mock translation of: "${trimmedText}"]`,
          type: 'Unknown',
          features: ['No features available for this word.'],
        });
      }
      
      setIsTranslating(false);
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        duration: 3000,
      });
    }, 1500);
  };

  const handleSwapLanguages = () => {
    setIsGermanToEnglish(prev => !prev);
    setSourceText(translationResult?.translation || '');
    setTranslationResult(null);
  };

  const handleClear = () => {
    setSourceText('');
    setTranslationResult(null);
  };
  
  const handleSelectExample = (word) => {
    setSourceText(word);
    setTranslationResult(null);
  };

  return {
    sourceText,
    setSourceText,
    translationResult,
    isGermanToEnglish,
    isTranslating,
    sourceLanguage,
    targetLanguage,
    handleTranslate,
    handleSwapLanguages,
    handleClear,
    handleSelectExample,
  };
};