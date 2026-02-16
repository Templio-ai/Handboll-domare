'use client';

import { useState, useCallback } from 'react';
import { Quiz as QuizType } from '@/types';
import QuizQuestion from './QuizQuestion';
import Celebration from './Celebration';

interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number, passed: boolean) => void;
  alreadyPassed: boolean;
}

export default function Quiz({ quiz, onComplete, alreadyPassed }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const question = quiz.questions[currentQuestion];
  const totalQuestions = quiz.questions.length;

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (showResult) return;
      setSelectedAnswer(optionIndex);
    },
    [showResult]
  );

  const handleConfirm = useCallback(() => {
    if (selectedAnswer === null) return;

    if (!showResult) {
      setShowResult(true);
      if (question.options[selectedAnswer].isCorrect) {
        setCorrectCount((c) => c + 1);
      }
      return;
    }

    // Move to next question or finish
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  }, [
    selectedAnswer,
    showResult,
    currentQuestion,
    totalQuestions,
    question,
  ]);

  const handleFinish = useCallback(() => {
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= quiz.passingScore;
    if (passed) {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        onComplete(score, passed);
      }, 3000);
    } else {
      onComplete(score, passed);
    }
  }, [correctCount, totalQuestions, quiz.passingScore, onComplete]);

  const handleRetry = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setCorrectCount(0);
    setFinished(false);
  }, []);

  if (showCelebration) {
    return <Celebration />;
  }

  if (finished) {
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= quiz.passingScore;

    return (
      <div className="text-center animate-scale-in">
        <div
          className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-4xl mb-6 ${
            passed ? 'bg-green-100' : 'bg-amber-100'
          }`}
        >
          {passed ? '🎉' : '📚'}
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">
          {passed ? 'Utmärkt jobbat!' : 'Nästan där!'}
        </h3>
        <p className="text-lg text-gray-600 mb-2">
          Du fick {correctCount} av {totalQuestions} rätt ({score}%)
        </p>
        <p className="text-sm text-gray-500 mb-8">
          {passed
            ? 'Du har klarat quizet och slutfört lektionen!'
            : `Du behöver minst ${quiz.passingScore}% för att klara quizet. Försök igen!`}
        </p>
        {passed ? (
          <button
            onClick={handleFinish}
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
          >
            Slutför lektion
          </button>
        ) : (
          <button
            onClick={handleRetry}
            className="px-8 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange-dark transition-colors"
          >
            Försök igen
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <QuizQuestion
        question={question}
        questionNumber={currentQuestion + 1}
        totalQuestions={totalQuestions}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
        showResult={showResult}
      />
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleConfirm}
          disabled={selectedAnswer === null}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
            selectedAnswer === null
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : showResult
              ? 'bg-navy text-white hover:bg-navy-light'
              : 'bg-orange text-white hover:bg-orange-dark'
          }`}
        >
          {showResult
            ? currentQuestion < totalQuestions - 1
              ? 'Nästa fråga →'
              : 'Se resultat'
            : 'Svara'}
        </button>
      </div>
      {alreadyPassed && (
        <p className="text-xs text-gray-400 text-center mt-4">
          Du har redan klarat detta quiz, men du kan göra om det om du vill.
        </p>
      )}
    </div>
  );
}
