'use client';

import { useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  size: number;
  duration: number;
}

function generateConfetti(): ConfettiPiece[] {
  const colors = ['#f97316', '#1e3a5f', '#22c55e', '#eab308', '#ec4899'];
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 1,
    size: Math.random() * 8 + 4,
    duration: 1.5 + Math.random(),
  }));
}

export default function Celebration() {
  const [confetti] = useState<ConfettiPiece[]>(generateConfetti);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute bottom-0 rounded-sm animate-confetti"
            style={{
              left: `${piece.left}%`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="text-center animate-scale-in z-10">
        <div className="text-8xl mb-4">🏆</div>
        <h2 className="text-4xl font-bold text-white mb-2">Fantastiskt!</h2>
        <p className="text-xl text-white/90">Du klarade lektionen!</p>
      </div>
    </div>
  );
}
