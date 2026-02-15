import { SignalBlock } from '@/types';
import RefereeSignalSVG from '@/components/signals/RefereeSignalSVG';

export default function EnhancedSignalCard({ number, name, description, usage, mandatory }: SignalBlock) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-slide-in hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        {/* SVG illustration */}
        <div className="flex-shrink-0 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center p-6 sm:w-40">
          <RefereeSignalSVG signal={number} />
        </div>

        {/* Text content */}
        <div className="flex-1 p-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-navy text-white text-sm font-bold rounded-full">
              {number}
            </span>
            <h4 className="font-bold text-navy text-lg">{name}</h4>
            {mandatory && (
              <span className="text-xs font-semibold bg-orange/10 text-orange-dark px-2 py-0.5 rounded-full">
                Obligatoriskt
              </span>
            )}
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">{description}</p>
          <p className="text-gray-500 text-xs leading-relaxed">
            <span className="font-semibold text-gray-600">Används: </span>
            {usage}
          </p>
        </div>
      </div>
    </div>
  );
}
