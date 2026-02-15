import { TipBlock } from '@/types';
import IconResolver from '@/components/icons/IconResolver';

export default function TipBox({ tip, source }: TipBlock) {
  return (
    <div className="border-l-4 border-orange bg-orange/5 rounded-r-xl p-5 animate-slide-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-orange">
          <IconResolver icon="whistle" size={20} />
        </span>
        <h4 className="font-bold text-orange-dark text-sm uppercase tracking-wide">
          Domartips
        </h4>
      </div>
      <p className="text-gray-700 leading-relaxed">{tip}</p>
      {source && (
        <p className="text-xs text-gray-400 mt-2 italic">{source}</p>
      )}
    </div>
  );
}
