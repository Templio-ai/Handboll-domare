import { RuleTableBlock } from '@/types';

function cellStyle(value: string): string {
  const v = value.trim().toUpperCase();
  if (v === 'JA') return 'bg-green-50 text-green-700 font-semibold';
  if (v === 'NEJ') return 'bg-gray-50 text-gray-400';
  if (v.startsWith('JA')) return 'bg-green-50 text-green-700'; // JA (***)
  if (v.startsWith('UTB')) return 'bg-blue-50 text-blue-700';
  if (v.startsWith('DU') || v.startsWith('FU')) return 'bg-navy/5 text-navy font-medium';
  if (v.includes('X') || v.includes('MIN')) return 'bg-orange/5 text-navy font-medium'; // 2x25, 5 min
  return 'text-navy';
}

export default function AgeGroupTable({ title, source, ageGroups, rules, footnotes }: RuleTableBlock) {
  return (
    <div className="my-6 animate-slide-in">
      {title && (
        <h4 className="font-bold text-navy text-lg mb-3">{title}</h4>
      )}

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-xs sm:text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-navy text-white">
              <th className="sticky left-0 z-10 bg-navy px-3 py-2.5 text-left font-semibold whitespace-nowrap border-r border-navy-light">
                Regel
              </th>
              {ageGroups.map((group) => (
                <th
                  key={group}
                  className="px-2 py-2.5 text-center font-semibold whitespace-nowrap border-r border-navy-light last:border-r-0"
                >
                  {group}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, rowIndex) => (
              <tr
                key={rule.name}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
              >
                <td className="sticky left-0 z-10 px-3 py-2 text-left font-medium text-navy whitespace-nowrap border-r border-gray-200 bg-inherit">
                  <span className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    {rule.name}
                  </span>
                </td>
                {rule.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-2 py-2 text-center whitespace-nowrap border-r border-gray-100 last:border-r-0 ${cellStyle(value)}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnotes && footnotes.length > 0 && (
        <div className="mt-3 space-y-1">
          {footnotes.map((note, i) => (
            <p key={i} className="text-xs text-gray-500 leading-relaxed">
              {note}
            </p>
          ))}
        </div>
      )}

      {source && (
        <p className="text-xs text-gray-400 mt-2 italic">{source}</p>
      )}
    </div>
  );
}
