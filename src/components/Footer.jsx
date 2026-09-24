import { SOCIALS } from '../data/portfolio.js';

const MARQUEE_TEXT = 'CLEAN DATA • CLEAR VISUALS • ACTIONABLE INSIGHTS • BUSINESS IMPACT • ';

/** Ikon SVG inline kecil untuk GitHub / LinkedIn (fallback aman tanpa lib). */
function SocialIcon({ label }) {
  if (label === 'GitHub') {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    );
  }
  if (label === 'LinkedIn') {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    );
  }
  if (label === 'Instagram') {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return null;
}

/** Footer brutalist: strip marquee + monogram + copyright + socials. */
export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-cream">
      <div className="marquee-pause bg-ink text-white font-display uppercase text-sm py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex w-max" aria-hidden="true">
          <span className="inline-block shrink-0" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>{MARQUEE_TEXT}</span>
            ))}
          </span>
          <span className="inline-block shrink-0" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>{MARQUEE_TEXT}</span>
            ))}
          </span>
        </div>
        <span className="sr-only">Clean data, clear visuals, actionable insights, business impact.</span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 py-6 px-4 sm:flex-row sm:justify-between">
        <p className="order-2 font-mono text-xs text-ink/60 sm:order-1">© 2026 Febrianscah — Jakarta, Indonesia</p>
        <ul className="order-1 flex items-center gap-2 sm:order-2">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="btn-touch brutal-press inline-flex h-11 w-11 items-center justify-center border-2 border-ink bg-paper rounded-md shadow-[4px_4px_0px_0px_#000] hover:bg-yellow"
              >
                <SocialIcon label={s.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
