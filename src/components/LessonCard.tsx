'use client';

import Link from 'next/link';
import { LessonProgress } from '@/types';

interface LessonCardProps {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  progress: LessonProgress;
  isUnlocked: boolean;
}

export default function LessonCard({
  id,
  title,
  subtitle,
  icon,
  progress,
  isUnlocked,
}: LessonCardProps) {
  const completed = progress.completed;

  return (
    <Link
      href={isUnlocked ? `/lektion/${id}` : '#'}
      className={`group block rounded-2xl border-2 p-6 transition-all duration-300 ${
        completed
          ? 'border-green-400 bg-green-50 hover:shadow-lg hover:-translate-y-1'
          : isUnlocked
          ? 'border-gray-200 bg-white hover:border-orange hover:shadow-lg hover:-translate-y-1'
          : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
      }`}
      onClick={(e) => {
        if (!isUnlocked) e.preventDefault();
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className={`text-4xl flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl ${
            completed
              ? 'bg-green-100'
              : isUnlocked
              ? 'bg-orange/10 group-hover:bg-orange/20'
              : 'bg-gray-100'
          } transition-colors`}
        >
          {completed ? '✅' : icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Lektion {id}
            </span>
            {completed && progress.quizScore !== null && (
              <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                {progress.quizScore}%
              </span>
            )}
          </div>
          <h3
            className={`text-lg font-bold mb-1 ${
              completed
                ? 'text-green-700'
                : isUnlocked
                ? 'text-navy group-hover:text-orange-dark'
                : 'text-gray-400'
            } transition-colors`}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">{subtitle}</p>
          {!isUnlocked && (
            <p className="text-xs text-gray-400 mt-2">
              Slutför föregående lektion först
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
