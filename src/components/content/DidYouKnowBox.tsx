import { DidYouKnowBlock } from '@/types';
import IconResolver from '@/components/icons/IconResolver';

export default function DidYouKnowBox({ fact }: DidYouKnowBlock) {
  return (
    <div className="bg-gradient-to-r from-navy/5 to-orange/5 rounded-xl p-4 flex items-start gap-3 animate-slide-in">
      <span className="text-orange flex-shrink-0 mt-0.5">
        <IconResolver icon="handball" size={20} />
      </span>
      <p className="text-gray-700 text-sm leading-relaxed">
        <span className="font-bold text-navy">Visste du att... </span>
        {fact}
      </p>
    </div>
  );
}
