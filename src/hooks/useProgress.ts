'use client';

import { useState, useEffect, useCallback } from 'react';
import { Progress, LessonProgress } from '@/types';

const STORAGE_KEY = 'handboll-domare-progress';
const TOTAL_LESSONS = 10;

const defaultProgress: LessonProgress = {
  completed: false,
  quizScore: null,
  quizPassed: false,
};

function loadProgress(): Progress {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage unavailable
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({});
  const [hydrated, setHydrated] = useState(false);

  // Intentional: load from localStorage after hydration to avoid SSR mismatch
  useEffect(() => {
    setProgress(loadProgress()); // eslint-disable-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  const getLessonProgress = useCallback(
    (lessonId: number): LessonProgress => {
      return progress[lessonId] || defaultProgress;
    },
    [progress]
  );

  const completeLesson = useCallback(
    (lessonId: number, score: number, passed: boolean) => {
      setProgress((prev) => {
        const updated = {
          ...prev,
          [lessonId]: {
            completed: passed,
            quizScore: score,
            quizPassed: passed,
          },
        };
        saveProgress(updated);
        return updated;
      });
    },
    []
  );

  const completedCount = Object.values(progress).filter(
    (p) => p.completed
  ).length;

  const overallProgress = Math.round((completedCount / TOTAL_LESSONS) * 100);

  const resetProgress = useCallback(() => {
    setProgress({});
    saveProgress({});
  }, []);

  return {
    progress,
    hydrated,
    getLessonProgress,
    completeLesson,
    completedCount,
    overallProgress,
    totalLessons: TOTAL_LESSONS,
    resetProgress,
  };
}
