import { SKILL_STEPS } from '../data/portfolio.js';

// Peta warna step → kelas Tailwind literal (purge-safe).
const WARNA = {
  pink: 'bg-pink text-white',
  blue: 'bg-blue text-white',
  lime: 'bg-lime text-ink',
  yellow: 'bg-yellow text-ink',
};

const WARNA_TEXT = {
  pink: 'text-pink',
  blue: 'text-blue',
  lime: 'text-lime',
  yellow: 'text-yellow',
};

/** QuickStats — 4 kartu numbered (01–04) dari SKILL_STEPS. */
export default function QuickStats() {
  return (
    <section id="statistik" aria-labelledby="judul-statistik" className="scroll-mt-24">
      <h2 id="judul-statistik" className="font-display text-2xl uppercase sm:text-3xl">
        Alur Kerja Data
      </h2>
      <p className="mt-1 font-mono text-sm text-ink/60 text-justify hyphens-auto">
        4 tahapan terstruktur dari eksplorasi data hingga dampak nyata pada bisnis.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_STEPS.map((step) => (
          <article
            key={step.no}
            className="rounded-lg border-[3px] border-ink bg-paper p-4 shadow-hard transition-transform duration-200 ease-out hover:-translate-y-1.5 hover:rotate-[-0.5deg] hover:shadow-[6px_6px_0px_0px_#000]"
          >
            <span className={`font-display text-4xl ${WARNA_TEXT[step.warna]}`}>{step.no}</span>
            <h3 className="mt-2 font-display text-base uppercase">{step.judul}</h3>
            <p className="mt-1 font-mono text-xs text-ink/70 text-justify hyphens-auto">{step.desc}</p>
            {step.stat && (
              <span
                className={`mt-2 inline-block rounded-md border-2 border-ink px-2 py-0.5 text-xs font-mono font-semibold ${WARNA[step.warna]}`}
              >
                {step.stat}
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
