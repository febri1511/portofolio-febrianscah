import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio.js';

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

/** Chip tool (badge kecil). */
function ToolChip({ label }) {
  return (
    <span className="rounded-md border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
      {label}
    </span>
  );
}

/** Bar judul ala jendela (3 dot + judul). */
function TitleBar({ judul }) {
  return (
    <div className="flex items-center gap-2 border-b-2 border-ink bg-cream px-3 py-2">
      <span aria-hidden="true" className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-pink" />
        <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-yellow" />
        <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-lime" />
      </span>
      <span className="font-display text-sm uppercase">{judul}</span>
    </div>
  );
}

/** Kartu featured (Gayanara) — single column / horizontal banner. */
function FeaturedCard({ p }) {
  return (
    <motion.article
      {...fadeUp}
      className="overflow-hidden rounded-lg border-[3px] border-ink bg-paper shadow-hard transition-shadow duration-200 hover:shadow-[8px_8px_0px_0px_#000]"
    >
      <TitleBar judul={p.judul} />

      <div className="flex flex-col gap-4 p-4">
        {/* KPI full-width */}
        {p.stats && (
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {p.stats.map((s) => (
              <div key={s.label} className="rounded-md border-2 border-ink bg-cream p-2">
                <p className="font-mono text-[10px] uppercase text-ink/60">{s.label}</p>
                <p className="font-display text-lg">{s.nilai}</p>
              </div>
            ))}
          </div>
        )}

        {/* Grid 2 kolom seimbang */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Kiri: deskripsi + insight */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm text-ink/70 text-justify hyphens-auto">{p.desc}</p>

            {p.insight && (
              <div className="rounded-md border-2 border-ink bg-yellow p-3 font-mono text-sm font-semibold">
                {p.insight}
              </div>
            )}
          </div>

          {/* Kanan: tools + CTA */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <ToolChip key={t} label={t} />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {p.linkLive && (
                <a
                  href={p.linkLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch brutal-press inline-flex items-center justify-center rounded-md border-2 border-ink bg-lime px-4 py-2 font-mono text-sm font-bold text-ink shadow-[4px_4px_0px_0px_#000]"
                >
                  LIVE DASHBOARD ↗
                </a>
              )}
              {p.linkFile && (
                <a
                  href={p.linkFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch brutal-press inline-flex items-center justify-center rounded-md border-2 border-ink bg-paper px-4 py-2 font-mono text-sm font-bold text-ink shadow-[4px_4px_0px_0px_#000]"
                >
                  VIEW CASE STUDY
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/** Projects — 1 studi kasus featured. */
export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);

  return (
    <section id="proyek" aria-labelledby="judul-proyek" className="scroll-mt-24">
      <h2 id="judul-proyek" className="font-display text-2xl uppercase sm:text-3xl">
        Project Pilihan
      </h2>
      <p className="mt-1 font-mono text-sm text-ink/60 text-justify hyphens-auto">
        Satu studi kasus unggulan — dari data mentah jadi keputusan bisnis.
      </p>

      {featured && (
        <div className="mt-6">
          <FeaturedCard p={featured} />
        </div>
      )}
    </section>
  );
}
