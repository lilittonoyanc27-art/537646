/**
 * Web Speech Synthesis helper for authentic Spanish pronunciation
 */

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve([]);
      return;
    }
    const current = window.speechSynthesis.getVoices();
    if (current && current.length > 0) {
      cachedVoices = current;
      resolve(current);
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
      resolve(cachedVoices);
    };
    setTimeout(() => {
      resolve(window.speechSynthesis.getVoices() || []);
    }, 400);
  });
}

// Initial eager voice load
if (typeof window !== 'undefined' && window.speechSynthesis) {
  loadVoices();
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export async function speakSpanish(text: string, rate: number = 0.85): Promise<boolean> {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return false;
  }

  window.speechSynthesis.cancel();

  const voices = cachedVoices.length > 0 ? cachedVoices : await loadVoices();

  // Find best Spanish voice (Spain or Latin America)
  const esVoice =
    voices.find((v) => v.lang.startsWith('es-ES')) ||
    voices.find((v) => v.lang.startsWith('es-MX')) ||
    voices.find((v) => v.lang.startsWith('es')) ||
    null;

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = esVoice ? esVoice.lang : 'es-ES';
    if (esVoice) utterance.voice = esVoice;
    utterance.rate = Math.max(0.6, Math.min(1.2, rate));
    utterance.pitch = 1.0;

    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);

    window.speechSynthesis.speak(utterance);
  });
}
