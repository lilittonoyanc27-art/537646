/**
 * Converts integers from 100 to 100,000 into natural Spanish text
 */

const UNITS = [
  '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
  'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete',
  'dieciocho', 'diecinueve'
];

const TENS = [
  '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
];

const HUNDREDS = [
  '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos',
  'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
];

export function numberToSpanish(n: number): string {
  if (n === 0) return 'cero';
  if (n === 100) return 'cien';
  if (n === 1000) return 'mil';
  if (n === 100000) return 'cien mil';

  // Under 100
  if (n < 20) {
    return UNITS[n];
  }

  if (n < 30) {
    if (n === 20) return 'veinte';
    const unit = n % 10;
    const special20s: Record<number, string> = {
      21: 'veintiuno', 22: 'veintidós', 23: 'veintitrés', 24: 'veinticuatro',
      25: 'veinticinco', 26: 'veintiséis', 27: 'veintisiete', 28: 'veintiocho', 29: 'veintinueve'
    };
    return special20s[n] || `veinte y ${UNITS[unit]}`;
  }

  if (n < 100) {
    const ten = Math.floor(n / 10);
    const unit = n % 10;
    return unit === 0 ? TENS[ten] : `${TENS[ten]} y ${UNITS[unit]}`;
  }

  // 100 - 999
  if (n < 1000) {
    const hundred = Math.floor(n / 100);
    const remainder = n % 100;
    if (remainder === 0) {
      return hundred === 1 ? 'cien' : HUNDREDS[hundred];
    }
    return `${HUNDREDS[hundred]} ${numberToSpanish(remainder)}`;
  }

  // 1,000 - 99,999
  if (n <= 100000) {
    const thousands = Math.floor(n / 1000);
    const remainder = n % 1000;

    let thousandsStr = '';
    if (thousands === 1) {
      thousandsStr = 'mil';
    } else {
      let tWord = numberToSpanish(thousands);
      if (tWord.endsWith('uno')) {
        tWord = tWord.slice(0, -3) + 'ún';
      }
      thousandsStr = `${tWord} mil`;
    }

    if (remainder === 0) {
      return thousandsStr;
    }
    return `${thousandsStr} ${numberToSpanish(remainder)}`;
  }

  return n.toLocaleString();
}

/**
 * Generate a random number from 100 to 100,000 suitable for listening practice.
 * Mixes round numbers (e.g. 500, 12,000), tens (e.g. 3,450), and exact numbers (e.g. 745, 23,410)
 */
export function generateRandomAudioNumber(): { number: number; spanishWords: string; options: number[] } {
  const typeRoll = Math.random();
  let num: number;

  if (typeRoll < 0.35) {
    // 100 - 999
    const tens = Math.floor(Math.random() * 90 + 10) * 10;
    const units = Math.random() < 0.5 ? Math.floor(Math.random() * 10) : 0;
    num = tens + units;
    if (num < 100) num += 100;
  } else if (typeRoll < 0.70) {
    // 1,000 - 20,000
    const thousands = Math.floor(Math.random() * 19 + 1) * 1000;
    const hundreds = Math.floor(Math.random() * 10) * 100;
    const tens = Math.random() < 0.5 ? Math.floor(Math.random() * 10) * 10 : 0;
    num = thousands + hundreds + tens;
  } else {
    // 20,000 - 100,000
    const thousands = Math.floor(Math.random() * 80 + 20) * 1000;
    const hundreds = Math.floor(Math.random() * 10) * 100;
    const tens = Math.random() < 0.4 ? Math.floor(Math.random() * 10) * 10 : 0;
    num = Math.min(100000, thousands + hundreds + tens);
  }

  // Ensure within range
  if (num < 100) num = 150;
  if (num > 100000) num = 100000;

  const spanishWords = numberToSpanish(num);

  // Generate 3 plausible distractors
  const distractors = new Set<number>();
  let attempts = 0;
  while (distractors.size < 3 && attempts < 50) {
    attempts++;
    let fake: number;
    const variation = Math.random();
    if (variation < 0.33) {
      // Off by 100 or 1,000
      const delta = (Math.random() < 0.5 ? 1 : -1) * (num >= 2000 ? 1000 : 100);
      fake = num + delta;
    } else if (variation < 0.66) {
      // Swapped digits or inverted tens/hundreds
      const delta = (Math.random() < 0.5 ? 200 : -200) + (Math.random() < 0.5 ? 10 : -10);
      fake = num + delta;
    } else {
      // Similar sounding multiplier
      const factor = Math.random() < 0.5 ? 1.2 : 0.8;
      fake = Math.round((num * factor) / 50) * 50;
    }

    if (fake >= 100 && fake <= 100000 && fake !== num) {
      distractors.add(fake);
    }
  }

  // Fallback if needed
  if (distractors.size < 3) {
    if (!distractors.has(num + 100) && num + 100 <= 100000) distractors.add(num + 100);
    if (!distractors.has(num - 100) && num - 100 >= 100) distractors.add(num - 100);
    if (!distractors.has(num + 500) && num + 500 <= 100000) distractors.add(num + 500);
    if (!distractors.has(num - 500) && num - 500 >= 100) distractors.add(num - 500);
  }

  const options = Array.from(distractors).slice(0, 3);
  options.push(num);
  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  return {
    number: num,
    spanishWords,
    options
  };
}
