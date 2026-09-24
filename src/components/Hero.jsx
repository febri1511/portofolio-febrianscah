import { motion } from 'framer-motion';
import { PROFILE, SKILLS, SOCIALS } from '../data/portfolio.js';

/**
 * Hero — headline brutalist raksasa + window card foto profil.
 * Responsif 1→2 kolom.
 */

const SOCIAL_ICONS = {
  GitHub: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  Instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const easing = [0, 0, 0.2, 1];
const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="beranda"
      aria-labelledby="judul-hero"
      className="scroll-mt-24 overflow-x-clip"
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* KIRI — headline + CTA */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.3, ease: easing }}
          className="lg:flex lg:flex-col lg:justify-center"
        >
          <h1
            id="judul-hero"
            className="font-display uppercase leading-none tracking-tight text-ink whitespace-nowrap text-[clamp(2rem,9vw,3.75rem)]"
          >
            {PROFILE.nama}
          </h1>

          <p className="mt-4 font-mono text-base font-bold text-ink/70">{PROFILE.peran}</p>
          <p className="mt-2 max-w-md font-mono text-sm text-ink/60 text-justify hyphens-auto">{PROFILE.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-md border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[11px] font-bold"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={PROFILE.cv}
              download
              className="brutal-press inline-flex items-center rounded-md border-2 border-ink bg-pink px-4 py-2 font-mono font-bold text-white shadow-[4px_4px_0px_0px_#000]"
            >
              Download CV
            </a>
            <a
              href="#proyek"
              className="brutal-press inline-flex items-center rounded-md border-2 border-ink bg-paper px-4 py-2 font-mono font-bold text-ink shadow-[4px_4px_0px_0px_#000]"
            >
              Lihat Project
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid h-9 w-9 place-items-center rounded-md border-2 border-ink bg-paper text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000] hover:bg-lime"
              >
                {SOCIAL_ICONS[s.label] ?? s.label}
              </a>
            ))}
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-md border-2 border-ink bg-lime px-3 py-1.5 font-mono text-[11px] font-bold uppercase shadow-[2px_2px_0px_0px_#000] w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to Data Analyst Roles (Full-time / Contract)
          </div>
        </motion.div>

        {/* KANAN — window card foto profil */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.3, ease: easing, delay: 0.05 }}
          className="relative w-full lg:flex lg:flex-col lg:justify-center"
        >
          <div className="animate-floaty overflow-hidden rounded-lg border-[3px] border-ink bg-paper shadow-hard-lg w-full lg:max-w-[360px] lg:mx-auto transition-transform duration-200 hover:rotate-[-0.5deg]">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b-2 border-ink bg-cream px-3 py-2">
              <span className="h-3 w-3 rounded-full border-2 border-ink bg-pink" />
              <span className="h-3 w-3 rounded-full border-2 border-ink bg-yellow" />
              <span className="h-3 w-3 rounded-full border-2 border-ink bg-lime" />
              <span className="ml-1 font-mono text-[11px] font-bold uppercase">Profile — Febrianscah</span>
            </div>
            {/* Body foto */}
            <div className="p-3 bg-[#EFECE6] lg:max-h-[560px] lg:overflow-hidden">
              <img
                src={PROFILE.avatar}
                alt="Foto profil Febrianscah"
                width="512"
                height="512"
                className="w-full h-auto rounded-md border-2 border-ink object-cover object-top bg-white"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
