export interface QuestionOption {
  id: 'a' | 'b' | 'c' | 'd';
  es: string;
  hy: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  category: 'basic' | 'medium' | 'tricky' | 'fast';
  categoryTitleEs: string;
  categoryTitleHy: string;
  es: string;
  hy: string;
  options: QuestionOption[];
}

export interface LifelineState {
  fiftyFifty: boolean;
  audience: boolean;
  hint: boolean;
  friend: boolean;
}

export interface AudioNumberChallenge {
  number: number;
  spanishWords: string;
  options?: number[];
}

export interface GameScore {
  currentQuestionIndex: number;
  totalAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  moneyWon: number;
  audioBonusWon: number;
  audioChallengesSolved: number;
}
