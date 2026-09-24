import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/portfolio.js';

/* Varian entrance: fade-in slide-up, dengan stagger index. */
const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0, 0, 0.2, 1], delay: i * 0.06 },
  }),
};

/** Item timeline dengan dot warna + konten (stagger reveal). */
function TimelineItem({ item, warna, index = 0 }) {
  return (
    <motion.li
      custom={index}
      variants={itemVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative border-l-[3px] border-ink pb-6 pl-5 last:pb-0"
    >
      <span
        aria-hidden="true"
        className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-ink ${warna}`}
      />
      <p className="font-mono text-xs text-ink/60">{item.periode}</p>
      <h3 className="mt-1 font-display text-base uppercase">{item.judul}</h3>
      <p className="mt-1 font-mono text-sm text-ink/70 text-justify hyphens-auto">{item.desc}</p>
      {item.impact && (
        <span className="mt-2 inline-block rounded-md border-2 border-ink bg-yellow px-2 py-1 text-xs font-mono font-semibold">
          {item.impact}
        </span>
      )}
    </motion.li>
  );
}

/** Experience — timeline 2 kolom: Pendidikan (blue) + Kerja (pink). */
export default function Experience() {
  return (
    <section id="pengalaman" aria-labelledby="judul-pengalaman" className="scroll-mt-24">
      <h2 id="judul-pengalaman" className="font-display text-2xl uppercase sm:text-3xl">
        Pengalaman
      </h2>
      <p className="mt-1 font-mono text-sm text-ink/60 text-justify hyphens-auto">
        Dari ruang kelas sampai ruang meeting.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="rounded-lg border-[3px] border-ink bg-paper p-5 shadow-hard flex flex-col">
          <h3 className="inline-block border-b-4 border-ink pb-1 font-display text-lg uppercase">
            Pendidikan
          </h3>
          <ul className="mt-4 flex flex-1 flex-col justify-between gap-4">
            {EXPERIENCE.pendidikan.map((item, i) => (
              <TimelineItem key={item.judul} item={item} warna="bg-blue" index={i} />
            ))}
          </ul>
        </div>

        <div className="rounded-lg border-[3px] border-ink bg-paper p-5 shadow-hard flex flex-col">
          <h3 className="inline-block border-b-4 border-ink pb-1 font-display text-lg uppercase">
            Pengalaman Kerja
          </h3>
          <ul className="mt-4 flex flex-1 flex-col justify-between gap-4">
            {EXPERIENCE.kerja.map((item, i) => (
              <TimelineItem key={item.judul} item={item} warna="bg-pink" index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}