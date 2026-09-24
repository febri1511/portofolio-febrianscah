import { useEffect, useMemo, useState } from 'react';
import ModalShell from './ModalShell.jsx';
import { CATS, FEATURED_CERTS, ALL_CERTS } from '../data/portfolio.js';

const PER_HALAMAN = 8;
const fileURL = (c) => `/sertifikat/${c.file}`;

/** Kartu sertifikat dengan judul + tombol Lihat (buka file di tab baru). */
function CertCard({ c, kecil = false }) {
  return (
    <li
      className={`bg-paper border-[3px] border-ink rounded-lg shadow-hard p-4 transition-transform duration-200 ease-out hover:-translate-y-1.5 hover:rotate-[-0.5deg] hover:shadow-[6px_6px_0px_0px_#000] ${
        kecil ? 'p-3' : ''
      }`}
    >
      <p className={`font-display uppercase leading-snug ${kecil ? 'text-xs' : 'text-sm'}`}>
        <svg
          aria-hidden="true"
          className="mr-1.5 inline-block h-[1em] w-[1em] shrink-0 -translate-y-px align-middle"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4" />
          <path d="M9 12h6M9 16h6" />
        </svg>
        {c.judul}
      </p>
      <p className="mt-1 text-xs font-mono text-ink/60">{c.meta}</p>
      <a
        href={fileURL(c)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-touch brutal-press mt-3 inline-flex items-center gap-1 border-2 border-ink rounded-md px-3 py-1.5 text-xs font-mono font-bold bg-lime shadow-[4px_4px_0px_0px_#000]"
      >
        Lihat ↗
        <span className="sr-only"> — {c.judul} (buka di tab baru)</span>
      </a>
    </li>
  );
}

/** Sertifikat: 8 Featured + drawer "Lihat semua" (cari + filter kategori + pagination 8/halaman). */
export default function Certificates() {
  const [buka, setBuka] = useState(false);
  const [cari, setCari] = useState('');
  const [kat, setKat] = useState('all');
  const [hal, setHal] = useState(1);

  const tersaring = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return ALL_CERTS.filter((c) => {
      const cocokKat = kat === 'all' || c.cat === kat;
      const cocokQ = !q || `${c.judul} ${c.meta}`.toLowerCase().includes(q);
      return cocokKat && cocokQ;
    });
  }, [cari, kat]);

  const totalHal = Math.max(1, Math.ceil(tersaring.length / PER_HALAMAN));
  const aman = Math.min(hal, totalHal);
  const isi = tersaring.slice((aman - 1) * PER_HALAMAN, aman * PER_HALAMAN);

  // Kembali ke halaman 1 tiap filter/pencarian berubah.
  useEffect(() => setHal(1), [cari, kat]);

  const bukaSemua = () => {
    setCari('');
    setKat('all');
    setHal(1);
    setBuka(true);
  };

  return (
    <section aria-labelledby="judul-sertifikat">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="judul-sertifikat" className="font-display uppercase text-2xl sm:text-3xl">SERTIFIKAT UNGGULAN</h2>
          <p className="font-mono text-sm text-ink/60">8 pilihan terbaik • buka arsip {ALL_CERTS.length} sertifikat</p>
        </div>
        <button
          type="button"
          onClick={bukaSemua}
          className="bg-yellow text-ink border-2 border-ink rounded-md px-4 py-2 font-mono font-bold shadow-hard-sm hover:-translate-y-1 brutal-press"
        >
          Lihat semua ({ALL_CERTS.length}) →
        </button>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_CERTS.map((c) => (
          <CertCard key={c.id} c={c} />
        ))}
      </ul>

      <ModalShell terbuka={buka} onTutup={() => setBuka(false)} judul="Semua Sertifikat" side>
        <label htmlFor="cari-sertifikat" className="sr-only">Cari sertifikat</label>
        <div className="relative">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            id="cari-sertifikat"
            type="search"
            value={cari}
            placeholder="Cari sertifikat…"
            onChange={(e) => setCari(e.target.value)}
            className="h-11 w-full border-2 border-ink bg-cream rounded-md pl-10 pr-4 font-mono text-sm focus:bg-white focus:outline-none"
          />
        </div>

        {/* Chips kategori: wrap di layar lebar, horizontal-scroll di layar kecil */}
        <div
          role="group"
          aria-label="Filter kategori"
          className="mb-3 mt-3 flex flex-nowrap items-center gap-2 no-scrollbar overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible"
        >
          {CATS.map((t) => {
            const aktif = kat === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setKat(t.id)}
                aria-pressed={aktif}
                className={`shrink-0 whitespace-nowrap rounded-md border-2 border-ink px-3 py-1.5 text-xs font-mono font-bold transition-colors ${
                  aktif ? 'bg-ink text-white' : 'bg-paper text-ink hover:bg-yellow'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="mb-2 text-xs font-mono text-ink/60">
          {tersaring.length === 0
            ? 'Tidak ada sertifikat yang cocok'
            : `Menampilkan ${isi.length} dari ${tersaring.length} • Halaman ${aman}/${totalHal}`}
        </p>

        {isi.length === 0 ? (
          <p role="status" className="border-2 border-ink bg-cream rounded-md p-6 text-center font-mono">Tidak ada sertifikat yang cocok dengan pencarian.</p>
        ) : (
          <ul className="grid gap-2 pr-1">
            {isi.map((c) => (
              <CertCard key={c.id} c={c} kecil />
            ))}
          </ul>
        )}

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-ink/20 pt-3">
          <button
            type="button"
            disabled={aman <= 1}
            onClick={() => setHal((h) => Math.max(1, h - 1))}
            className="btn-touch border-2 border-ink rounded-md px-4 py-2 font-mono font-bold bg-paper shadow-hard-sm brutal-press disabled:opacity-40 disabled:shadow-none"
          >
            → Sebelumnya
          </button>
          <span className="text-xs font-mono tabular-nums text-ink/60">Hal {aman}/{totalHal}</span>
          <button
            type="button"
            disabled={aman >= totalHal}
            onClick={() => setHal((h) => Math.min(totalHal, h + 1))}
            className="btn-touch border-2 border-ink rounded-md px-4 py-2 font-mono font-bold bg-paper shadow-hard-sm brutal-press disabled:opacity-40 disabled:shadow-none"
          >
            Berikutnya →
          </button>
        </div>
      </ModalShell>
    </section>
  );
}
