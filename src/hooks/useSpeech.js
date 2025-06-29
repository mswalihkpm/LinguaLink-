import { toast } from '@/components/ui/use-toast';

export const useSpeech = () => {
  const speak = ({ text, lang }) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      toast({
        title: 'Unsupported Browser',
        description: 'Text-to-speech is not supported in your browser.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return { speak };
};