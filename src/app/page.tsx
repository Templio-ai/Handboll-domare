'use client';

import { useProgress } from '@/hooks/useProgress';
import { lessons } from '@/data/lessons';
import ProgressBar from '@/components/ProgressBar';
import LessonCard from '@/components/LessonCard';
import { HandballIcon } from '@/components/icons/HandballIcons';

export default function Home() {
  const {
    getLessonProgress,
    completedCount,
    overallProgress,
    totalLessons,
    hydrated,
  } = useProgress();

  return (
    <div className="min-h-screen court-lines">
      {/* Hero */}
      <header className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <HandballIcon size={64} className="text-orange-light" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              Handbollsdomare
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 font-light mb-2">
              Domarutbildning
            </p>
            <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed">
              Välkommen till din resa som handbollsdomare! Här lär du dig allt
              från grundregler till matchdagsförberedelser genom 10 interaktiva
              lektioner.
            </p>
          </div>
        </div>
        {/* Wave separator */}
        <div className="relative h-12">
          <svg
            className="absolute bottom-0 w-full h-12"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
          >
            <path
              d="M0,48 L0,16 Q360,48 720,16 Q1080,-16 1440,16 L1440,48 Z"
              fill="white"
            />
          </svg>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Progress */}
        {hydrated && (
          <div className="mb-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <ProgressBar
              progress={overallProgress}
              completedCount={completedCount}
              totalLessons={totalLessons}
            />
          </div>
        )}

        {/* Lessons grid */}
        <div className="grid gap-4 sm:gap-6">
          {lessons.map((lesson) => {
            const progress = getLessonProgress(lesson.id);
            // Lesson 1 is always unlocked, others require previous to be completed
            const isUnlocked =
              lesson.id === 1 ||
              getLessonProgress(lesson.id - 1).completed;

            return (
              <LessonCard
                key={lesson.id}
                id={lesson.id}
                title={lesson.title}
                subtitle={lesson.subtitle}
                icon={lesson.icon}
                progress={progress}
                isUnlocked={isUnlocked}
              />
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Baserad på Svenska Handbollförbundets regelverk</p>
          <p className="mt-1">Klara alla 10 lektioner för att slutföra utbildningen</p>
        </div>
      </main>
    </div>
  );
}
