'use client';

interface SignalCardProps {
  number: number;
  name: string;
  description: string;
  mandatory?: boolean;
}

export default function SignalCard({
  number,
  name,
  description,
  mandatory,
}: SignalCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-orange/40 hover:shadow-md transition-all duration-200">
      <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-navy">{name}</h4>
          {mandatory && (
            <span className="text-xs bg-orange/10 text-orange font-semibold px-2 py-0.5 rounded-full">
              Obligatoriskt
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
