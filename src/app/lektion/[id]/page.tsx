'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { lessons } from '@/data/lessons';
import { quizzes } from '@/data/quizzes';
import { useProgress } from '@/hooks/useProgress';
import LessonContent from '@/components/LessonContent';
import Quiz from '@/components/Quiz';
import IconResolver from '@/components/icons/IconResolver';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = Number(params.id);
  const { getLessonProgress, completeLesson, hydrated } = useProgress();

  const [showQuiz, setShowQuiz] = useState(false);

  const lesson = lessons.find((l) => l.id === lessonId);
  const quiz = quizzes.find((q) => q.lessonId === lessonId);
  const progress = getLessonProgress(lessonId);

  const handleQuizComplete = useCallback(
    (score: number, passed: boolean) => {
      completeLesson(lessonId, score, passed);
      if (!passed) {
        setShowQuiz(false);
        setTimeout(() => setShowQuiz(true), 100);
      }
    },
    [lessonId, completeLesson]
  );

  if (!lesson || !quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤔</div>
          <h1 className="text-2xl font-bold text-navy mb-2">
            Lektionen hittades inte
          </h1>
          <Link
            href="/"
            className="text-orange hover:text-orange-dark underline"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    );
  }

  const nextLesson = lessons.find((l) => l.id === lessonId + 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-navy to-navy-light text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span className="text-lg">←</span>
            <span className="text-sm font-medium">Alla lektioner</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/60">Lektion {lessonId}</span>
            {progress.completed && (
              <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">
                Slutförd
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
          <div className="text-5xl mb-4 flex justify-center text-orange-light">
            <IconResolver icon={lesson.icon} size={56} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-light">
            Lektion {lesson.id} av {lessons.length}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-3">
            {lesson.title}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {lesson.heroDescription}
          </p>
        </div>
        <div className="relative h-8">
          <svg
            className="absolute bottom-0 w-full h-8"
            viewBox="0 0 1440 32"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32 L0,8 Q720,32 1440,8 L1440,32 Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <LessonContent sections={lesson.sections} />

        {/* Quiz section */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          {!showQuiz ? (
            <div className="text-center">
              <div className="text-5xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-navy mb-2">
                Dags för quiz!
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Testa dina kunskaper med {quiz.questions.length} frågor. Du
                behöver minst {quiz.passingScore}% rätt för att klara lektionen.
              </p>
              <button
                onClick={() => setShowQuiz(true)}
                className="px-8 py-4 bg-orange text-white font-bold rounded-xl text-lg hover:bg-orange-dark transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Starta quiz
              </button>
              {progress.completed && (
                <p className="text-sm text-green-600 mt-4">
                  Du har redan klarat detta quiz med {progress.quizScore}%
                </p>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <Quiz
                quiz={quiz}
                onComplete={handleQuizComplete}
                alreadyPassed={progress.completed}
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-navy hover:text-orange transition-colors font-medium"
          >
            ← Tillbaka
          </Link>
          {progress.completed && nextLesson && (
            <Link
              href={`/lektion/${nextLesson.id}`}
              className="px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-colors"
            >
              Nästa lektion →
            </Link>
          )}
          {progress.completed && !nextLesson && (
            <Link
              href="/"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
            >
              Alla lektioner slutförda! 🎉
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
