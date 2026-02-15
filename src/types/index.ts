export interface ScenarioBlock {
  type: 'scenario';
  title?: string;
  scenario: string;
  question?: string;
  answer?: string;
}

export interface TipBlock {
  type: 'tip';
  tip: string;
  source?: string;
}

export interface SignalBlock {
  type: 'signal';
  number: number;
  name: string;
  description: string;
  usage: string;
  mandatory?: boolean;
}

export interface DidYouKnowBlock {
  type: 'didYouKnow';
  fact: string;
}

export type RichContentBlock = ScenarioBlock | TipBlock | SignalBlock | DidYouKnowBlock;

export interface ContentSection {
  title: string;
  icon: string;
  content: string[];
  highlights?: string[];
  list?: string[];
  richBlocks?: RichContentBlock[];
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
