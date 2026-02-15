'use client';

import { ContentSection } from '@/types';
import IconResolver from '@/components/icons/IconResolver';
import RichBlockRenderer from '@/components/content/RichBlockRenderer';

interface LessonContentProps {
  sections: ContentSection[];
}

export default function LessonContent({ sections }: LessonContentProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => (
        <section
          key={index}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl text-navy">
              <IconResolver icon={section.icon} size={32} />
            </span>
            <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
          </div>

          <div className="pl-2 space-y-4">
            {section.content.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-gray-700 leading-relaxed text-base"
              >
                {paragraph}
              </p>
            ))}

            {section.highlights && section.highlights.length > 0 && (
              <div className="bg-orange/5 border-l-4 border-orange rounded-r-xl p-4 my-4">
                {section.highlights.map((highlight, hIndex) => (
                  <p
                    key={hIndex}
                    className="text-navy font-medium text-sm leading-relaxed"
                  >
                    {highlight}
                  </p>
                ))}
              </div>
            )}

            {section.list && section.list.length > 0 && (
              <ol className="space-y-2 my-4">
                {section.list.map((item, lIndex) => (
                  <li key={lIndex} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-navy text-white text-sm font-bold rounded-full flex items-center justify-center mt-0.5">
                      {lIndex + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            )}

            {section.richBlocks && section.richBlocks.length > 0 && (
              <div className="space-y-4 mt-6">
                {section.richBlocks.map((block, bIndex) => (
                  <RichBlockRenderer key={bIndex} block={block} />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
