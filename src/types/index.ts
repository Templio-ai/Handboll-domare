export interface ContentSection {
  title: string;
  icon: string;
  content: string[];
  highlights?: string[];
  list?: string[];
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  heroDescription: string;
  sections: ContentSection[];
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface Quiz {
  lessonId: number;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface LessonProgress {
  completed: boolean;
  quizScore: number | null;
  quizPassed: boolean;
}

export interface Progress {
  [lessonId: number]: LessonProgress;
}
