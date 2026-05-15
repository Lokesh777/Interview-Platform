# SyncInterview AI Interview Platform

A responsive frontend-only AI interview platform UI built for the frontend interview assignment. The product simulates a professional hiring flow where an AI interviewer guides a candidate through profile setup, device checks, interview questions, a coding round, and a recruiter-style summary.

## Assignment Coverage

The implementation covers all required screens from the brief:

| Requirement | Implementation |
| --- | --- |
| Landing / Welcome screen | Hero section, platform logo placeholder, AI interview description, Start Interview CTA, estimated duration, instructions, feature cards |
| Candidate details screen | Full name, email, role, experience level, skills, resume upload, live profile preview, local resume analysis UI |
| Interview setup screen | Real camera permission check, real microphone permission check, internet status UI, guidelines, Start interview button |
| AI interview screen | AI avatar, candidate camera preview, current question, timer, recording/listening status, controls, progress, transcript, answer text area |
| Coding / technical section | Problem statement, examples, language selector, editable code editor, Run Code, Submit Code, output console |
| Interview summary screen | Candidate status, completed state, questions attempted, time taken, scorecards, AI evaluation, strengths, improvement areas, final review status |

## Tech Stack

- Next.js 16 App Router: file-based routing, static route generation, route-level code splitting.
- React 19 and TypeScript: typed component props, mock data models, hooks, and UI state.
- Tailwind CSS 4: responsive layouts, dark/light theme utilities, polished visual styling.
- shadcn/ui primitives: consistent buttons, inputs, textarea, progress, and UI foundations.
- Framer Motion: subtle hero, card, waveform, and interface animations.
- Lucide React: consistent icon system for actions, status, and navigation.

## Why These Libraries

- Next.js App Router keeps the flow clean and production-like while avoiding backend work.
- TypeScript makes the mock interview, candidate, and coding data safer to maintain.
- Tailwind gives fast control over responsive UI and visual polish without large custom CSS files.
- shadcn/ui provides accessible, reusable primitives while still allowing custom product styling.
- Framer Motion adds premium interaction without over-animating the product.
- Lucide keeps the UI consistent and lightweight compared with custom SVGs everywhere.

## Main Features

- Complete interview flow: Landing -> Candidate -> Setup -> Interview -> Coding -> Summary.
- Modern AI SaaS visual language with glass panels, gradients, responsive grids, and smooth transitions.
- Dark mode and light mode toggle with persisted local preference.
- Real browser camera permission in setup.
- Real browser microphone permission in setup.
- Candidate camera preview during interview after setup approval.
- AI question voice playback with `speechSynthesis`.
- Candidate answer capture through browser speech recognition where supported.
- Editable text answer area for fallback/manual input.
- AI repeat prompt when no spoken answer is detected.
- Local resume upload UI with drag/drop and file selection.
- Resume metadata stored in `localStorage`.
- Resume analysis placeholder driven by uploaded file state.
- Leave-screen/tab-switch warning during interview.
- Auto-save/status indicators and recruiter-style evaluation UI.
- Frontend-only JavaScript coding runner with local test cases as an extra realism feature.
- Footer and navigation for a complete product feel.

## Project Structure

```txt
src/
  app/
    page.tsx
    candidate/page.tsx
    setup/page.tsx
    interview/page.tsx
    coding/page.tsx
    summary/page.tsx
    layout.tsx
    loading.tsx
    globals.css
  components/
    candidate/
    coding/
    interview/
    landing/
    setup/
    shared/
    summary/
    ui/
  data/
  hooks/
  lib/
  types/
```

The code is split by feature area so each screen owns its own components. Shared layout, theme, navbar, footer, route warmup, and skeleton components live under `components/shared`.

## Performance Work

The app includes several performance-oriented decisions:

- Next App Router route-level splitting by default.
- Explicit dynamic imports for heavier interactive panels:
  - AI interview avatar
  - Candidate camera preview
  - Transcript panel
  - Answer composer
  - Coding editor
  - Output console
- Skeleton loading states for dynamically loaded panels.
- Route warmup with idle prefetching for faster tab navigation after initial load.
- `React.memo` on stable leaf components to reduce unnecessary rerenders.
- `useMemo` and `useCallback` for stable computed data and event handlers.
- Removed external font loading and use system fonts for faster startup.
- Next package import optimization for `lucide-react` and `framer-motion`.
- Static pages are generated during production build.

Note: `npm run dev` can feel slower on the first visit to a route because Next compiles routes on demand. For performance review, use production mode.

## Assumptions

- This is a frontend-only assignment, so there is no backend, database, authentication, real AI service, or real video recording.
- Camera and microphone permissions use real browser APIs, but streams stay local to the browser.
- Resume upload stores metadata locally in `localStorage`; the actual file is not uploaded to a server.
- Speech recognition depends on browser support. Chrome and Edge provide the best experience.
- Coding execution is intentionally limited to a local JavaScript harness for safety and because no backend compiler is required by the brief.
- Interview questions, transcript, evaluation, and scores are mock data.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

Production review:

```bash
npm run build
npm run start
```

## Validation

The project has been verified with:

```bash
npm run lint
npm run build
```

## Submission Note

This project focuses on UI quality, responsive design, component reusability, and realistic interview states. Backend functionality and real AI integration were intentionally excluded to stay aligned with the assignment, while browser-native camera, microphone, voice, local storage, and a local coding runner were added to improve realism.
