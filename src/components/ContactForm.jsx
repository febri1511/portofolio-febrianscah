import { useState } from 'react';
import { PROFILE } from '../data/portfolio.js';

const AWAL = { nama: '', email: '', pesan: '' };

/**
 * ContactForm — TANPA tombol reset. Input terkendali (controlled),
 * submit async: spinner saat kirim + banner sukses/gagal (role="status").
 */
export default function ContactForm() {
  const [form, setForm] = useState(AWAL);
  const [status, setStatus] = useState('idle'); // idle | kirim | sukses | gagal
  const [pesanStatus, setPesanStatus] = useState('');

  const ubah = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const sibuk = status === 'kirim';

  const kirim = async (e) => {
    e.preventDefault();
    setStatus('kirim');
    setPesanStatus('');
    try {
      // Ganti blok ini dengan fetch(ENDPOINT, { method: 'POST', body: ... }) bila endpoint siap.
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('sukses');
      setPesanStatus('Pesan terkirim! Saya akan membalas pada jam kerja.');
      setForm(AWAL); // reset state terkendali (bukan DOM) hanya setelah sukses
    } catch {
      setStatus('gagal');
      setPesanStatus(`Gagal terkirim. Coba lagi atau hubungi ${PROFILE.email} 🙏`);
    }
  };

  const input =
    'w-full border-2 border-ink bg-cream rounded-md px-4 py-3 font-mono text-ink placeholder:text-ink/40 focus:bg-white focus:outline-none';

  return (
    <section aria-labelledby="judul-kontak" className="grid gap-6 md:grid-cols-2">
      <div>
        <h2 id="judul-kontak" className="font-display uppercase text-2xl sm:text-3xl">KONTAK</h2>
        <p className="mt-1 font-mono text-sm text-ink/60 text-justify hyphens-auto">Tersedia untuk diskusi dan kolaborasi proyek data.</p>
        <ul className="mt-4 space-y-2 font-mono text-sm">
          <li>
            📞 <a href={`tel:+62${PROFILE.telepon.replace(/[^0-9]/g, '').replace(/^0/, '')}`} className="underline hover:text-blue">
              {PROFILE.telepon}
            </a>
          </li>
          <li>
            ✉️ <a href={`mailto:${PROFILE.email}`} className="underline hover:text-blue">
              {PROFILE.email}
            </a>
          </li>
          <li>📍 {PROFILE.lokasi}</li>
        </ul>
        <a
          href={PROFILE.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-touch brutal-press mt-4 inline-flex items-center bg-lime text-ink border-2 border-ink rounded-md px-5 py-3 font-mono font-bold shadow-[4px_4px_0px_0px_#000]"
        >
          Hubungi WhatsApp
        </a>
      </div>

      <form onSubmit={kirim} aria-label="Formulir kontak" className="bg-paper border-[3px] border-ink rounded-lg shadow-hard p-5">
        {pesanStatus && (
          <p
            role="status"
            className={`mb-3 border-2 border-ink rounded-md px-4 py-3 font-mono font-bold ${
              status === 'sukses' ? 'bg-lime text-ink' : 'bg-pink text-white'
            }`}
          >
            {pesanStatus}
          </p>
        )}

        <div className="grid gap-3">
          <div>
            <label htmlFor="nama" className="mb-1 block font-mono font-bold text-sm">Nama</label>
            <input
              id="nama" name="nama" value={form.nama} onChange={ubah}
              required autoComplete="name" placeholder="Namamu" className={input} disabled={sibuk}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block font-mono font-bold text-sm">Email</label>
            <input
              id="email" name="email" type="email" value={form.email} onChange={ubah}
              required autoComplete="email" placeholder="nama@email.com" className={input} disabled={sibuk}
            />
          </div>
          <div>
            <label htmlFor="isi-pesan" className="mb-1 block font-mono font-bold text-sm">Pesan</label>
            <textarea
              id="isi-pesan" name="pesan" value={form.pesan} onChange={ubah}
              required rows={4} placeholder="Ceritakan kebutuhan datamu…" className={`${input} pt-3 px-3.5`} disabled={sibuk}
            />
          </div>
        </div>

        {/* Hanya 1 tombol submit — tidak ada tombol reset/Hapus */}
        <button
          type="submit"
          disabled={sibuk}
          aria-busy={sibuk}
          className="btn-touch brutal-press mt-4 inline-flex w-full items-center justify-center bg-pink text-white border-2 border-ink rounded-md py-3 font-mono font-extrabold shadow-[4px_4px_0px_0px_#000] disabled:opacity-60"
        >
          {sibuk ? (
            <>
              <span
                aria-hidden="true"
                className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
              Mengirim…
            </>
          ) : (
            'Kirim Pesan'
          )}
        </button>
      </form>
    </section>
  );
}
