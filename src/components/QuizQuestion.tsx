'use client';

import { QuizQuestion as QuizQuestionType } from '@/types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswer: (optionIndex: number) => void;
  showResult: boolean;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  showResult,
}: QuizQuestionProps) {
  return (
    <div className="animate-slide-in">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-orange">
          Fråga {questionNumber} av {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i < questionNumber - 1
                  ? 'bg-orange'
                  : i === questionNumber - 1
                  ? 'bg-navy'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-navy mb-6">{question.question}</h3>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = option.isCorrect;

          let buttonClass =
            'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ';

          if (!showResult) {
            buttonClass += isSelected
              ? 'border-navy bg-navy/5 font-medium'
              : 'border-gray-200 hover:border-navy/40 hover:bg-gray-50';
          } else if (isCorrect) {
            buttonClass +=
              'border-green-400 bg-green-50 text-green-800 font-medium';
          } else if (isSelected && !isCorrect) {
            buttonClass +=
              'border-red-400 bg-red-50 text-red-800 font-medium';
          } else {
            buttonClass += 'border-gray-200 opacity-50';
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onAnswer(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    showResult && isCorrect
                      ? 'bg-green-400 text-white'
                      : showResult && isSelected && !isCorrect
                      ? 'bg-red-400 text-white'
                      : isSelected
                      ? 'bg-navy text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {showResult && isCorrect
                    ? '✓'
                    : showResult && isSelected && !isCorrect
                    ? '✗'
                    : String.fromCharCode(65 + index)}
                </span>
                <span>{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={`mt-4 p-4 rounded-xl animate-fade-in ${
            selectedAnswer !== null &&
            question.options[selectedAnswer]?.isCorrect
              ? 'bg-green-50 border border-green-200'
              : 'bg-amber-50 border border-amber-200'
          }`}
        >
          <p className="text-sm font-medium mb-1">
            {selectedAnswer !== null &&
            question.options[selectedAnswer]?.isCorrect
              ? 'Rätt!'
              : 'Inte helt rätt'}
          </p>
          <p className="text-sm text-gray-600">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
