import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  Users,
  Phone,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Play,
  Turtle,
  Trophy,
  List,
  Languages,
  DollarSign,
  X,
  Award
} from 'lucide-react';
import { QUESTIONS_DATA, PRIZE_LADDER } from './questions.ts';
import { Question, QuestionOption, LifelineState, AudioNumberChallenge } from './types.ts';
import { generateRandomAudioNumber } from './spanishNumbers.ts';
import { sound } from './sound.ts';
import { speakSpanish, stopSpeaking } from './speech.ts';

interface ShuffledOption extends QuestionOption {
  displayKey: 'A' | 'B' | 'C' | 'D';
}

export default function App() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [shuffledOptions, setShuffledOptions] = useState<ShuffledOption[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [eliminatedOptionIds, setEliminatedOptionIds] = useState<string[]>([]);

  // Inline translation visibility (directly beneath Spanish text, no separate windows)
  const [showQuestionTranslation, setShowQuestionTranslation] = useState<boolean>(false);
  const [revealedOptionIds, setRevealedOptionIds] = useState<Set<string>>(new Set());

  // Lifelines
  const [lifelines, setLifelines] = useState<LifelineState>({
    fiftyFifty: false,
    audience: false,
    hint: false,
    friend: false
  });
  const [audienceResult, setAudienceResult] = useState<Record<string, number> | null>(null);
  const [friendAdvice, setFriendAdvice] = useState<string | null>(null);

  // Global Settings & Toggles
  const [alwaysShowHy, setAlwaysShowHy] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showLadderModal, setShowLadderModal] = useState<boolean>(false);
  const [showGameOverSummary, setShowGameOverSummary] = useState<boolean>(false);

  // Audio Number Challenge upon correct answer (Pure digits, no variants)
  const [showAudioChallenge, setShowAudioChallenge] = useState<boolean>(false);
  const [audioChallenge, setAudioChallenge] = useState<AudioNumberChallenge | null>(null);
  const [audioSpeed, setAudioSpeed] = useState<number>(0.85);
  const [isAudioSpeaking, setIsAudioSpeaking] = useState<boolean>(false);

  // Score & Stats Tracking
  const [questionResults, setQuestionResults] = useState<Record<number, 'correct' | 'wrong'>>({});
  const [audioBonusCount, setAudioBonusCount] = useState<number>(0);

  const currentQuestion: Question = QUESTIONS_DATA[currentIdx];

  // Sound mute sync
  const toggleSound = () => {
    sound.isMuted = !sound.isMuted;
    setIsMuted(sound.isMuted);
    if (sound.isMuted) {
      stopSpeaking();
    }
  };

  // Prepare shuffled options for current question
  useEffect(() => {
    const letters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    const cloned = [...currentQuestion.options];
    // Fisher-Yates shuffle
    for (let i = cloned.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
    }
    const mapped: ShuffledOption[] = cloned.map((opt, i) => ({
      ...opt,
      displayKey: letters[i]
    }));
    setShuffledOptions(mapped);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setEliminatedOptionIds([]);
    setAudienceResult(null);
    setFriendAdvice(null);
    setShowQuestionTranslation(false);
    setRevealedOptionIds(new Set());
  }, [currentIdx]);

  // Read question in Spanish
  const playQuestionAudio = () => {
    sound.playSelect();
    speakSpanish(currentQuestion.es, 0.85);
  };

  // Read specific option in Spanish
  const playOptionAudio = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.playSelect();
    speakSpanish(text, 0.9);
  };

  // Toggle inline Armenian translation for an option
  const toggleOptionTranslation = (optionId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.playSelect();
    setRevealedOptionIds((prev) => {
      const next = new Set(prev);
      if (next.has(optionId)) {
        next.delete(optionId);
      } else {
        next.add(optionId);
      }
      return next;
    });
  };

  // Select an answer
  const handleSelectOption = (option: ShuffledOption) => {
    if (isAnswered || eliminatedOptionIds.includes(option.id)) return;

    sound.playLockIn();
    setSelectedOptionId(option.id);
    setIsAnswered(true);

    if (option.isCorrect) {
      sound.playCorrect();
      setIsCorrect(true);
      setQuestionResults((prev) => ({ ...prev, [currentQuestion.id]: 'correct' }));

      // Generate random number (100 - 100 000)
      const challenge = generateRandomAudioNumber();
      setAudioChallenge(challenge);
      setAudioBonusCount((prev) => prev + 1);

      // Show number in digits without audio / sound
      setTimeout(() => {
        setShowAudioChallenge(true);
      }, 500);
    } else {
      sound.playWrong();
      setIsCorrect(false);
      setQuestionResults((prev) => ({ ...prev, [currentQuestion.id]: 'wrong' }));
    }
  };

  // Play auditory challenge number via Web Speech API
  const playAudioChallengeNumber = async (spanishWords: string, rate: number = 0.85) => {
    setIsAudioSpeaking(true);
    await speakSpanish(spanishWords, rate);
    setIsAudioSpeaking(false);
  };

  // Next question handler (Game continues regardless of right or wrong!)
  const handleNextQuestion = () => {
    stopSpeaking();
    setShowAudioChallenge(false);
    if (currentIdx < QUESTIONS_DATA.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      sound.playNumberWin();
      setShowGameOverSummary(true);
    }
  };

  // Lifeline: 50:50
  const useFiftyFifty = () => {
    if (lifelines.fiftyFifty || isAnswered) return;
    sound.playLifeline();
    const wrongOptions = shuffledOptions.filter((o) => !o.isCorrect);
    const toEliminate = wrongOptions.slice(0, 2).map((o) => o.id);
    setEliminatedOptionIds(toEliminate);
    setLifelines((prev) => ({ ...prev, fiftyFifty: true }));
  };

  // Lifeline: Audience Poll
  const useAudiencePoll = () => {
    if (lifelines.audience || isAnswered) return;
    sound.playLifeline();
    const correctOpt = shuffledOptions.find((o) => o.isCorrect);
    const votes: Record<string, number> = {};
    let remaining = 100;

    const correctScore = Math.floor(Math.random() * 20) + 65;
    if (correctOpt) {
      votes[correctOpt.displayKey] = correctScore;
      remaining -= correctScore;
    }
    const otherOpts = shuffledOptions.filter((o) => !o.isCorrect);
    otherOpts.forEach((opt, idx) => {
      if (idx === otherOpts.length - 1) {
        votes[opt.displayKey] = Math.max(2, remaining);
      } else {
        const slice = Math.floor(Math.random() * (remaining - 4)) + 2;
        votes[opt.displayKey] = slice;
        remaining -= slice;
      }
    });

    setAudienceResult(votes);
    setLifelines((prev) => ({ ...prev, audience: true }));
  };

  // Lifeline: Friend Advice
  const useFriendAdvice = () => {
    if (lifelines.friend || isAnswered) return;
    sound.playLifeline();
    const correctOpt = shuffledOptions.find((o) => o.isCorrect);
    if (correctOpt) {
      setFriendAdvice(
        `«Ընկերս ասում է. Համոզված եմ, որ պատասխանն է տարբերակ ${correctOpt.displayKey}-ը՝ «${correctOpt.es}» (${correctOpt.hy}):»`
      );
    }
    setLifelines((prev) => ({ ...prev, friend: true }));
  };

  // Restart entire game
  const handleRestartGame = () => {
    sound.playSelect();
    setCurrentIdx(0);
    setQuestionResults({});
    setAudioBonusCount(0);
    setLifelines({ fiftyFifty: false, audience: false, hint: false, friend: false });
    setShowGameOverSummary(false);
    setShowAudioChallenge(false);
  };

  // Calculate current winnings
  const correctCount = Object.values(questionResults).filter((r) => r === 'correct').length;
  const wrongCount = Object.values(questionResults).filter((r) => r === 'wrong').length;
  const currentPrize =
    correctCount > 0
      ? PRIZE_LADDER[Math.min(correctCount - 1, PRIZE_LADDER.length - 1)] || 1000000
      : 0;

  return (
    <div className="min-h-screen millionaire-bg text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      {/* Top Bar */}
      <header className="h-16 px-4 md:px-8 border-b border-indigo-900/60 bg-slate-950/70 backdrop-blur-md flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-black text-lg">
            $
          </div>
          <div>
            <h1 className="text-base md:text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span>¿Quién Quiere Ser Millonario?</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                Presente
              </span>
            </h1>
          </div>
        </div>

        {/* Center Indicators */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Հարց՝</span>
            <span className="font-bold text-amber-400 font-mono text-sm">
              {currentIdx + 1} / {QUESTIONS_DATA.length}
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Ճիշտ՝</span>
            <span className="font-bold text-emerald-400 font-mono text-sm">+{correctCount}</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Սխալ՝</span>
            <span className="font-bold text-rose-400 font-mono text-sm">-{wrongCount}</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Բոնուսային թվեր՝</span>
            <span className="font-bold text-cyan-400 font-mono text-sm">✨ {audioBonusCount}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Always show translation toggle */}
          <button
            onClick={() => {
              sound.playSelect();
              setAlwaysShowHy(!alwaysShowHy);
            }}
            title="Միշտ ցուցադրել հայերենը տեքստի տակ"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              alwaysShowHy
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Հայերեն միշտ</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Ձայնն անջատված է' : 'Ձայնը միացված է'}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            )}
          </button>

          {/* Question List Trigger */}
          <button
            onClick={() => {
              sound.playSelect();
              setShowDrawer(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-900/40 hover:bg-indigo-800/50 text-indigo-200 border border-indigo-700/50 text-xs font-medium transition-colors"
          >
            <List className="w-3.5 h-3.5" />
            <span>Հարցեր (50)</span>
          </button>
        </div>
      </header>

      {/* Main Playing Arena */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 md:p-6 flex flex-col justify-between gap-4">
        {/* Top Info Banner & Category */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span className="px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold">
              {currentQuestion.categoryTitleEs}
            </span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="text-slate-300 text-xs hidden sm:inline">
              {currentQuestion.categoryTitleHy}
            </span>
          </div>

          {/* Prize Ladder Button */}
          <button
            onClick={() => setShowLadderModal(true)}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/20 text-xs font-semibold transition-colors"
          >
            <DollarSign className="w-3.5 h-3.5 text-yellow-400" />
            <span>Բանկ՝ ${currentPrize.toLocaleString()}</span>
          </button>
        </div>

        {/* Lifeline Bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-2">
          {/* 50:50 */}
          <button
            onClick={useFiftyFifty}
            disabled={lifelines.fiftyFifty || isAnswered}
            className={`flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 transition-all ${
              lifelines.fiftyFifty
                ? 'opacity-30 border-slate-700 bg-slate-900 text-slate-500 cursor-not-allowed line-through'
                : 'border-amber-400/80 bg-gradient-to-b from-indigo-900/90 to-slate-950 text-amber-300 hover:scale-105 hover:glow-gold cursor-pointer'
            }`}
            title="50:50 — Հեռացնել երկու սխալ տարբերակ"
          >
            <span className="text-sm sm:text-base font-black tracking-tight">50:50</span>
          </button>

          {/* Audience Poll */}
          <button
            onClick={useAudiencePoll}
            disabled={lifelines.audience || isAnswered}
            className={`flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 transition-all ${
              lifelines.audience
                ? 'opacity-30 border-slate-700 bg-slate-900 text-slate-500 cursor-not-allowed line-through'
                : 'border-cyan-400/80 bg-gradient-to-b from-indigo-900/90 to-slate-950 text-cyan-300 hover:scale-105 hover:glow-cyan cursor-pointer'
            }`}
            title="Հանդիսատեսի օգնություն"
          >
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Friend Advice */}
          <button
            onClick={useFriendAdvice}
            disabled={lifelines.friend || isAnswered}
            className={`flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 transition-all ${
              lifelines.friend
                ? 'opacity-30 border-slate-700 bg-slate-900 text-slate-500 cursor-not-allowed line-through'
                : 'border-emerald-400/80 bg-gradient-to-b from-indigo-900/90 to-slate-950 text-emerald-300 hover:scale-105 hover:glow-green cursor-pointer'
            }`}
            title="Զանգ ընկերոջը"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Lifeline Modals / Displays */}
        {audienceResult && (
          <div className="bg-slate-900/90 border border-cyan-500/40 rounded-xl p-3 max-w-lg mx-auto w-full animate-fade-in">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" /> Հանդիսատեսի քվեարկություն
              </span>
              <button onClick={() => setAudienceResult(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {['A', 'B', 'C', 'D'].map((key) => (
                <div key={key} className="bg-slate-950/70 p-2 rounded border border-slate-800">
                  <div className="font-bold text-amber-400">{key}</div>
                  <div className="text-sm font-mono text-cyan-300 mt-1">{audienceResult[key] || 0}%</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {friendAdvice && (
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 max-w-xl mx-auto w-full flex items-start justify-between gap-3 text-xs sm:text-sm text-emerald-200 animate-fade-in">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p>{friendAdvice}</p>
            </div>
            <button onClick={() => setFriendAdvice(null)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Central Question Stage */}
        <div className="relative w-full max-w-4xl mx-auto my-auto">
          {/* Question Box: Clicking toggles Armenian translation directly underneath! */}
          <div
            onClick={() => {
              sound.playSelect();
              setShowQuestionTranslation((prev) => !prev);
            }}
            className="group relative cursor-pointer bg-gradient-to-b from-[#161f48] via-[#0e1635] to-[#0a1028] border-2 border-amber-400/80 rounded-2xl md:rounded-3xl p-5 md:p-8 text-center shadow-2xl shadow-indigo-950/80 transition-all hover:border-amber-300 hover:glow-gold"
          >
            {/* Question Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Հարց #{currentIdx + 1}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                {showQuestionTranslation ? 'Թաքցնել հայերենը' : 'Սեղմեք հարցի վրա՝ հայերեն թարգմանության համար'} <Languages className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Spanish Question Heading */}
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white mb-1 leading-relaxed">
              {currentQuestion.es}
            </h2>

            {/* Armenian Translation: opens immediately directly under the Spanish text! */}
            {(alwaysShowHy || showQuestionTranslation) && (
              <div className="mt-3.5 pt-3.5 border-t border-indigo-700/60 text-amber-300 font-semibold text-base md:text-xl flex items-center justify-center gap-2 animate-fade-in">
                <span>🇦🇲 {currentQuestion.hy}</span>
              </div>
            )}

            {/* Pronunciation Speaker Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                playQuestionAudio();
              }}
              title="Լսել իսպաներեն հարցը"
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-all border border-slate-700/60"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Answer Options Grid (4 Options: A, B, C, D) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-6">
            {shuffledOptions.map((option) => {
              const isEliminated = eliminatedOptionIds.includes(option.id);
              const isSelected = selectedOptionId === option.id;
              const isOptionTranslationRevealed =
                alwaysShowHy || revealedOptionIds.has(option.id) || (isAnswered && (option.isCorrect || isSelected));

              // Color coding logic
              let cardStyle = 'border-indigo-800/80 bg-slate-900/80 text-slate-100 hover:border-amber-400 hover:bg-slate-800/90';
              if (isEliminated) {
                cardStyle = 'opacity-20 border-slate-800 bg-slate-950 text-slate-600 pointer-events-none';
              } else if (isAnswered) {
                if (option.isCorrect) {
                  cardStyle = 'border-emerald-400 bg-emerald-950/70 text-emerald-100 glow-green animate-pulse';
                } else if (isSelected && !option.isCorrect) {
                  cardStyle = 'border-rose-500 bg-rose-950/70 text-rose-100 glow-red';
                } else {
                  cardStyle = 'opacity-50 border-slate-800 bg-slate-950/70 text-slate-400';
                }
              }

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  className={`group relative flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all cursor-pointer shadow-lg ${cardStyle}`}
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0 pr-2">
                    {/* Diamond-style key tag */}
                    <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 font-black text-sm flex items-center justify-center shrink-0">
                      {option.displayKey}
                    </span>

                    {/* Spanish option text & inline Armenian translation right underneath */}
                    <div className="flex flex-col text-left">
                      <span className="text-sm md:text-base font-semibold tracking-wide text-white group-hover:text-amber-200 transition-colors">
                        {option.es}
                      </span>
                      {isOptionTranslationRevealed && (
                        <span className="text-xs sm:text-sm text-amber-300/90 mt-1 font-medium animate-fade-in">
                          🇦🇲 {option.hy}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions for this option: Inline Translation & Audio */}
                  <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={(e) => toggleOptionTranslation(option.id, e)}
                      title="Հայերեն թարգմանություն (տակը)"
                      className={`p-1.5 rounded-md transition-colors ${
                        revealedOptionIds.has(option.id)
                          ? 'bg-amber-500/25 text-amber-300'
                          : 'text-slate-400 hover:text-amber-300 hover:bg-slate-700/60'
                      }`}
                    >
                      <Languages className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => playOptionAudio(option.es, e)}
                      title="Լսել արտասանությունը"
                      className="p-1.5 rounded-md hover:bg-slate-700/60 text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback & Non-Punitive Continuation Bar when Wrong */}
          {isAnswered && !isCorrect && (
            <div className="mt-6 bg-gradient-to-r from-rose-950/60 via-slate-900 to-rose-950/60 border border-rose-500/60 rounded-2xl p-4 md:p-6 text-center animate-fade-in shadow-xl">
              <div className="flex items-center justify-center gap-2 text-rose-400 font-bold text-base md:text-lg mb-2">
                <XCircle className="w-6 h-6" />
                <span>Սխալ պատասխան, բայց խաղը շարունակվում է:</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto mb-4">
                Ոչինչ, սովորելու լավագույն միջոցը փորձելն է: Ճիշտ տարբերակն էր՝{' '}
                <strong className="text-emerald-300">
                  {shuffledOptions.find((o) => o.isCorrect)?.es}
                </strong>{' '}
                (
                <span className="text-amber-300 font-medium">
                  {shuffledOptions.find((o) => o.isCorrect)?.hy}
                </span>
                )
              </p>
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <span>Հաջորդ հարցը (Շարունակել)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* When correct and waiting for audio number */}
          {isAnswered && isCorrect && !showAudioChallenge && (
            <div className="mt-6 bg-emerald-950/60 border border-emerald-500/60 rounded-2xl p-4 text-center animate-fade-in flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <span className="text-emerald-200 font-bold text-sm md:text-base">
                Ճիշտ է! Պատրաստվեք լսելու թիվը...
              </span>
            </div>
          )}
        </div>

        {/* Bottom Navigation & Progress Footer */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <span>💡 Սեղմեք հարցի վրա՝ հայերեն թարգմանությունն անմիջապես տակը բացելու համար:</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Ընթացք՝</span>
            <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
              <div
                className="bg-gradient-to-r from-amber-500 to-yellow-300 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUESTIONS_DATA.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* NUMBER DISPLAY (100 - 100,000) Upon Every Correct Answer */}
      {/* (Թիվը պարզապես թվանշաններով, առանց ձայնի և առանց տարբերակների) */}
      {/* ========================================================================= */}
      {showAudioChallenge && audioChallenge && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-gradient-to-b from-[#1b2559] via-[#0f173a] to-[#080d24] border-2 border-amber-400 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl shadow-indigo-950 relative text-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Բոնուսային թիվ · Número</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Իսպաներեն թիվ (100 - 100 000)
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Թիվը թվանշաններով և գրառմամբ
            </p>

            {/* Central Number Display - Pure Digits! No Variants! No Audio! */}
            <div className="bg-slate-950/85 border-2 border-amber-400/70 rounded-2xl p-6 mb-6 shadow-inner">
              <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">
                Թիվը թվանշաններով
              </div>
              <div className="text-4xl sm:text-6xl font-black font-mono tracking-wider text-amber-300 my-2 drop-shadow-md">
                {audioChallenge.number.toLocaleString('en-US').replace(/,/g, ' ')}
              </div>
              <div className="text-sm sm:text-base text-cyan-300 font-semibold italic mt-3">
                «{audioChallenge.spanishWords}»
              </div>
            </div>

            {/* Change Number Option (Silently) */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => {
                  const nextCh = generateRandomAudioNumber();
                  setAudioChallenge(nextCh);
                }}
                className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Փոխել թիվը (100 - 100 000)</span>
              </button>
            </div>

            {/* Modal Proceed Button */}
            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/20 transition-all hover:scale-102 flex items-center justify-center gap-2"
            >
              <span>Հաջորդ հարցը (Շարունակել)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* QUESTION LIST & JUMP DRAWER */}
      {/* ========================================================================= */}
      {showDrawer && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex justify-end z-50 animate-fade-in">
          <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 font-bold text-white">
                <List className="w-5 h-5 text-amber-400" />
                <span>Բոլոր 50 հարցերը</span>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-400 my-3">
              Սեղմեք ցանկացած հարցի վրա՝ անմիջապես այնտեղ անցնելու համար.
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {QUESTIONS_DATA.map((q, idx) => {
                const status = questionResults[q.id];
                const isCurrent = idx === currentIdx;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      sound.playSelect();
                      setCurrentIdx(idx);
                      setShowDrawer(false);
                    }}
                    className={`w-full p-2.5 rounded-lg text-left text-xs transition-all flex items-center justify-between border ${
                      isCurrent
                        ? 'border-amber-400 bg-amber-500/15 text-white font-bold'
                        : status === 'correct'
                        ? 'border-emerald-700/60 bg-emerald-950/30 text-emerald-200'
                        : status === 'wrong'
                        ? 'border-rose-700/60 bg-rose-950/30 text-rose-200'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <span className="font-mono font-bold text-slate-500 shrink-0">
                        #{q.id}
                      </span>
                      <span className="truncate">{q.es}</span>
                    </div>

                    <div className="shrink-0 font-bold">
                      {status === 'correct' && <span className="text-emerald-400">✓</span>}
                      {status === 'wrong' && <span className="text-rose-400">✗</span>}
                      {isCurrent && <span className="text-amber-400 text-[10px]">ԱԿՏԻՎ</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Անցած՝ {Object.keys(questionResults).length} / 50
              </span>
              <button
                onClick={handleRestartGame}
                className="flex items-center gap-1 text-rose-400 hover:text-rose-300"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Սկսել նորից
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MONEY LADDER MODAL */}
      {/* ========================================================================= */}
      {showLadderModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border-2 border-yellow-500/80 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative">
            <button
              onClick={() => setShowLadderModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-4">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
              <h3 className="font-bold text-base text-white">Միլիոնատիրոջ Սանդուղք</h3>
              <p className="text-xs text-slate-400">15 մակարդակի մրցանակային ֆոնդ</p>
            </div>

            <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
              {[...PRIZE_LADDER].reverse().map((amount, idx) => {
                const originalStep = PRIZE_LADDER.length - 1 - idx;
                const isCurrent = correctCount - 1 === originalStep;
                const isPassed = correctCount - 1 >= originalStep;

                return (
                  <div
                    key={amount}
                    className={`flex items-center justify-between px-3 py-1.5 rounded text-xs font-mono font-bold ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950'
                        : isPassed
                        ? 'text-emerald-400 bg-emerald-950/30'
                        : 'text-slate-400'
                    }`}
                  >
                    <span>{originalStep + 1}</span>
                    <span>${amount.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* GAME OVER SUMMARY SCREEN */}
      {/* ========================================================================= */}
      {showGameOverSummary && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-900 border-2 border-amber-400 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-center">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              Շնորհավորում ենք! Խաղն ավարտվեց!
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              Դուք ավարտեցիք բոլոր 50 հարցերը Presente ժամանակաձևով:
            </p>

            {/* Scorecard */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">Ճիշտ պատասխան</div>
                <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">
                  {correctCount} / 50
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">Սխալ պատասխան</div>
                <div className="text-2xl font-bold text-rose-400 font-mono mt-1">
                  {wrongCount}
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">Բոնուսային թվեր</div>
                <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">
                  {audioBonusCount}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleRestartGame}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Խաղալ նորից (Jugar de nuevo)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
