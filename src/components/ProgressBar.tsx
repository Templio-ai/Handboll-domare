'use client';

interface ProgressBarProps {
  progress: number;
  completedCount: number;
  totalLessons: number;
}

export default function ProgressBar({
  progress,
  completedCount,
  totalLessons,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-navy">
          Din framsteg
        </span>
        <span className="text-sm font-medium text-navy">
          {completedCount} av {totalLessons} lektioner
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange to-orange-light rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {progress === 100 && (
        <p className="text-sm text-orange font-semibold mt-2 animate-fade-in">
          Grattis! Du har slutfört alla lektioner!
        </p>
      )}
    </div>
  );
}
