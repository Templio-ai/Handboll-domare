'use client';

import { useState } from 'react';
import { ScenarioBlock } from '@/types';
import IconResolver from '@/components/icons/IconResolver';

export default function ScenarioBox({ scenario, question, answer, title }: ScenarioBlock) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="border-l-4 border-navy bg-navy/5 rounded-r-xl p-5 animate-slide-in">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-navy">
          <IconResolver icon="strategy" size={20} />
        </span>
        <h4 className="font-bold text-navy text-sm uppercase tracking-wide">
          {title || 'Match-scenario'}
        </h4>
      </div>
      <p className="text-gray-700 italic leading-relaxed">{scenario}</p>
      {question && (
        <div className="mt-4">
          <button
            onClick={() => setRevealed(!revealed)}
            className="text-sm font-semibold text-navy hover:text-orange transition-colors flex items-center gap-1"
          >
            <span className={`inline-block transition-transform duration-200 ${revealed ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
            {question}
          </button>
          {revealed && answer && (
            <div className="mt-3 pl-4 border-l-2 border-orange/30 text-gray-700 text-sm leading-relaxed animate-fade-in">
              {answer}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
