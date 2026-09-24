# Portfolio React (migrasi dari 08-Dimension-Portfolio)

Skeleton React + Tailwind + Framer Motion. Bahasa Indonesia, responsif, aksesibel (WCAG 2.2 AA).

## Jalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output ke dist/
```

Aset sudah disalin ke `public/` (`images/`, `assets/`, `sertifikat/`).
Jika perlu ulang dari vanilla:

```powershell
Copy-Item "..\08-Dimension-Portfolio\images\*" "public\images\" -Recurse -Force
Copy-Item "..\08-Dimension-Portfolio\assets\cv-febrianscah.pdf" "public\assets\" -Force
Copy-Item "..\08-Dimension-Portfolio\sertifikat\*" "public\sertifikat\" -Recurse -Force
```

## Komponen

| File | Peran |
|---|---|
| `src/components/ModalShell.jsx` | **Satu-satunya** modal/drawer. 1 tombol X, ESC, klik overlay, fade + slide-up, kunci scroll, **focus trap + focus return**, `role=dialog`. Mode `side` untuk drawer. |
| `src/components/Hero.jsx` | Avatar squircle + glow, nama **solid** (tanpa gradien), chip **GPA tampil 1×** di seluruh situs. |
| `src/components/StatCard.jsx` | Kontras tinggi (teks putih tebal di kartu gelap) + hover angkat & border lime. |
| `src/components/Certificates.jsx` | 8 Featured (kurasi) + drawer "Lihat semua" berisi cari + filter kategori + pagination 8/halaman untuk **125** arsip. Tiap kartu ada tombol **Lihat** (`target=_blank rel=noopener`). |
| `src/components/ContactForm.jsx` | **Tanpa** tombol reset. Input *controlled*, spinner saat kirim, banner sukses/gagal `role=status`. Reset hanya setelah sukses. |
| `src/data/portfolio.js` | Sumber data tunggal (profil, stats, kategori, featured, 125 sertifikat). |

## Aksesibilitas

- Skip-link ke `#konten`; satu `<h1>`; urutan heading runtut; `lang="id"`.
- `:focus-visible` kontras tinggi; target sentuh ≥ 44 px (`.btn-touch`).
- Modal: `aria-modal`, fokus masuk ke X, Tab terjebak di dalam, fokus kembali ke pemicu saat tutup.
- Status dinamis (`aria-live="polite"`), filter kategori pakai `aria-pressed`.
- `prefers-reduced-motion` dimatikan animasinya di `index.css`.

## Catatan

- Tombol **back** gaya lama (`page-back`) sengaja **dihapus** — navigasi cukup X / ESC / overlay / drawer `side`.
- GPA hanya dirender sekali (chip Hero) untuk menghindari duplikasi konten.
