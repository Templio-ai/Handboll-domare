# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive web-based handball referee training platform (Swedish). 10 sequential lessons with quizzes, localStorage-based progress tracking. No backend — fully client-side.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build — also runs TypeScript type checking
npm run lint      # ESLint
```

There are no tests configured.

## Architecture

**Stack:** Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS 4

**Key directories:**
- `src/data/` — All content lives here. `lessons.ts` (~850 lines) and `quizzes.ts` (~800 lines) are the main content files
- `src/types/index.ts` — Single source of truth for all TypeScript interfaces
- `src/hooks/useProgress.ts` — Client-side progress via localStorage (key: `handboll-domare-progress`). `TOTAL_LESSONS` constant must match actual lesson count
- `src/app/page.tsx` — Home page with lesson gallery
- `src/app/lektion/[id]/page.tsx` — Dynamic lesson detail + quiz page

**Content system:** Lessons use a polymorphic `RichContentBlock` discriminated union (`type: 'scenario' | 'tip' | 'signal' | 'didYouKnow'`). `RichBlockRenderer` dispatches to the correct component. Adding a new block type requires: adding the interface to `types/index.ts`, updating the union type, creating a component in `components/content/`, and adding a case in `RichBlockRenderer`.

**Icon system:** Icons are referenced by string name in lesson/quiz data (e.g., `icon: 'handball'`). `IconResolver` maps strings to SVG components via `iconMap` in `HandballIcons.tsx`. Available icons: `handball`, `court`, `whistle`, `yellow-card`, `red-card`, `stopwatch`, `clipboard`, `referee`, `goal`, `shield`, `strategy`, `megaphone`, `handshake`, `trophy`.

**Lesson unlocking:** Linear progression — lesson N requires lesson N-1 quiz passed (75% score). Lesson 1 always unlocked. Enforced in `LessonCard` and the lesson detail page.

**Hydration pattern:** All localStorage-dependent UI uses `hydrated` state flag to prevent SSR/client mismatch. Pattern: `useState(false)` → `useEffect(() => setHydrated(true))` → conditional render.

## Content Conventions

- All content is in Swedish
- Lessons reference IHF/SHF handball rules by number (e.g., "Regel 8", "Regel 14")
- Quiz questions have exactly 4 options with one correct answer
- Each quiz has `passingScore: 75`
- Quiz question IDs are sequential within each quiz (starting at 1)
- Lesson IDs are sequential (1-10) and must match between `lessons.ts` and `quizzes.ts` (`lessonId`)

## When Adding/Modifying Lessons

1. Add lesson object in `src/data/lessons.ts` (follow existing structure)
2. Add corresponding quiz in `src/data/quizzes.ts` with matching `lessonId`
3. Update `TOTAL_LESSONS` in `src/hooks/useProgress.ts`
4. Update UI text referencing lesson count in `src/app/page.tsx`
5. Run `npm run build` to verify — no other files need changes

## Styling

Custom Tailwind theme defined in `src/app/globals.css` using `@theme inline`. Primary colors: `navy` (authority/trust), `orange` (energy/action). Custom animations: `slide-in`, `fade-in`, `scale-in`, `confetti`. Background pattern: `.court-lines` class.
