import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useTranslator } from '@/hooks/useTranslator';
import { useSpeech } from '@/hooks/useSpeech';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import Header from '@/components/layout/Header';
import LanguageSelector from '@/components/translator/LanguageSelector';
import InputSection from '@/components/translator/InputSection';
import TranslateButton from '@/components/translator/TranslateButton';
import OutputSection from '@/components/translator/OutputSection';
import QuickExamples from '@/components/translator/QuickExamples';

function App() {
  const {
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
  } = useTranslator();

  const { speak } = useSpeech();

  const handleSpeak = (text, language) => {
    if (!text) return;
    const langCode = language === 'German' ? 'de-DE' : 'en-US';
    speak({ text, lang: langCode });
  };

  return (
    <>
      <Helmet>
        <title>LinguaLink - German ⇄ English Word Translator</title>
        <meta name="description" content="Translate single words between German and English with LinguaLink. Discover word features with a beautiful design and smooth animations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <AnimatedBackground />

        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />

          <main className="flex-1 px-4 pb-8">
            <div className="max-w-md mx-auto space-y-6">
              <LanguageSelector
                sourceLanguage={sourceLanguage}
                targetLanguage={targetLanguage}
                onSwap={handleSwapLanguages}
              />

              <InputSection
                sourceText={sourceText}
                setSourceText={setSourceText}
                sourceLanguage={sourceLanguage}
                onClear={handleClear}
                onSpeak={() => handleSpeak(sourceText, sourceLanguage)}
              />

              <TranslateButton
                onTranslate={handleTranslate}
                isDisabled={!sourceText.trim() || isTranslating}
                isTranslating={isTranslating}
              />

              <OutputSection
                translationResult={translationResult}
                isTranslating={isTranslating}
                targetLanguage={targetLanguage}
                onSpeak={() => handleSpeak(translationResult?.translation, targetLanguage)}
              />

              <QuickExamples
                onSelectExample={handleSelectExample}
                isGermanToEnglish={isGermanToEnglish}
              />
            </div>
          </main>
        </div>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;