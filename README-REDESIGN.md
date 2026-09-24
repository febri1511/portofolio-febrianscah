# Serah Terima — Redesign Neo-Brutalism LIGHT

> Portfolio Febrianscah (Data Analyst) hasil redesign dari **dark lime** → **Neo-Brutalism LIGHT**.
> React 18 + Vite + Tailwind 3.4 + Framer Motion.
> Sumber keputusan: `RENCANA.md` (baca-saja).

---

## 1. Ringkasan

Portfolio di-redesign total ke gaya **Neo-Brutalism terang**:

- Kanvas **cream** `#F5F2EB`, teks **ink** `#111111`, aksen 4 warna + putih.
- **Shadow keras tanpa blur** (offset solid), border tebal, hover = translate.
- Font: **Archivo Black** (display) + **Space Mono** (mono/body).
- Semua angka & teks diambil dari **satu sumber data** `src/data/portfolio.js` — bukan hardcode inline di komponen.
- Fungsionalitas lama (modal sertifikat, form kontak, download CV, link dashboard) **tetap utuh**.

| Aspek | Sebelum | Sesudah |
|-------|---------|---------|
| Tema | Dark lime | Neo-Brutalism **light** |
| Kanvas | gelap | cream `#F5F2EB` |
| Teks | terang | ink `#111` |
| Aksen | lime | yellow / pink / blue / lime |
| Shadow | blur | **hard offset** (0 blur) |

---

## 2. Cara Menjalankan

```bash
npm install        # install dependensi
npm run dev        # server dev → http://localhost:5173
npm run build      # produksi (output ke dist/)
npm run preview    # preview hasil build
```

---

## 3. Design Token

### Warna

| Token | Hex | Kegunaan |
|-------|-----|----------|
| `cream` | `#F5F2EB` | kanvas / background |
| `ink` | `#111111` | teks & border |
| `paper` / white | `#FFFFFF` | permukaan kartu |
| `yellow` | `#FFC700` | aksen |
| `pink` | `#FF4D6D` | aksen |
| `blue` | `#2563EB` | aksen |
| `lime` | `#4ADE80` | aksen |

### Shadow (hard, tanpa blur)

| Util | Nilai |
|------|-------|
| `hard` | `6px 6px 0 0 #111` (kartu) |
| `hard-sm` | `3px 3px 0 0 #111` (tombol) |
| `hard-lg` | `8px 8px 0 0 #111` (hover membesar) |
| `hard-xs` | `1px 1px 0 0 #111` (tekan/press) |

### Font

| Peran | Font | Definisi |
|-------|------|----------|
| Display / heading | **Archivo Black** | `font-display` |
| Mono / body | **Space Mono** | `font-mono`, `font-sans` |

### Lokasi token

| File | Isi |
|------|-----|
| `tailwind.config.js` | warna, `fontFamily`, `boxShadow` (hard), `borderRadius` |
| `index.html` | link Google Fonts (Archivo Black + Space Mono) |
| `src/index.css` | `color-scheme: light`, body cream, `:focus-visible`, `btn-touch` (44×44), util `prefers-reduced-motion` |

---

## 4. Struktur Section & Anchor

Urutan render (top→bottom):

| Section | ID anchor | Komponen |
|---------|-----------|----------|
| Navbar (sticky) | `header` | di `App.jsx` |
| Hero | `#beranda` | `src/components/Hero.jsx` |
| Quick Stats (4 kartu 01–04) | `#statistik` | `src/components/QuickStats.jsx` |
| Profil | `#profil` | `App.jsx` |
| Pengalaman (timeline) | `#pengalaman` | `src/components/Experience.jsx` |
| Proyek (1 featured + 2 mini) | `#proyek` | `src/components/Projects.jsx` |
| Sertifikat (8 featured + drawer) | `#sertifikat` | `src/components/Certificates.jsx` |
| Kontak | `#kontak` | `src/components/ContactForm.jsx` |
| Footer | `footer` | `src/components/Footer.jsx` |

Catatan: `StatCard` di dalam `QuickStats` — jumlah data di `SKILL_STEPS`. Anchor diberi `scroll-mt` agar tidak tertutup navbar sticky; skip-link `#konten` tetap dipertahankan.

---

## 5. YANG PERLU ANDA ISI MANUAL ⚠️

### a. GitHub / LinkedIn

File: `src/data/portfolio.js` → bagian `SOCIALS`.

```js
export const SOCIALS = [
  { label: 'GitHub', href: '#', todo: 'TODO: isi URL GitHub' },    // ← ganti '#'
  { label: 'LinkedIn', href: '#', todo: 'TODO: isi URL LinkedIn' }, // ← ganti '#'
];
```

Ganti `href: '#'` dengan URL asli Anda, lalu hapus komentar `todo`.

### b. Ganti CV

Replace file: `public/assets/cv-febrianscah.pdf`

- Simpan PDF baru dengan **nama file sama** → tidak perlu ubah kode.
- Path di data: `PROFILE.cv = '/assets/cv-febrianscah.pdf'`.
- Jika ganti nama file, ubah juga `PROFILE.cv` di `src/data/portfolio.js`.

### c. Ganti Foto Profil

Replace file: `public/images/profil.webp`

- Simpan foto baru dengan **nama file sama** → tidak perlu ubah kode.
- Path di data: `PROFILE.avatar = '/images/profil.webp'`.

---

## 6. Kustomisasi Warna

File: `tailwind.config.js` → blok `colors` dan `boxShadow`.

```js
colors: {
  cream: '#F5F2EB',
  ink: '#111111',
  paper: '#FFFFFF',
  yellow: '#FFC700',
  pink: '#FF4D6D',
  blue: '#2563EB',
  lime: '#4ADE80',
},
boxShadow: {
  hard: '6px 6px 0px 0px #111111',
  // ...
},
```

Ubah nilai hex di sini; seluruh komponen otomatis mengikuti (karena pakai token, bukan hardcode). Ingat: aksen per-step kartu Quick Stats dipetakan lewat field `warna` di `SKILL_STEPS` (`pink`/`blue`/`lime`/`yellow`).

---

## 7. Tambah / Edit Proyek & Pengalaman

File: `src/data/portfolio.js`.

### Proyek → `PROJECTS`

```js
{
  id: 'slug-unik',
  featured: false,          // true = kartu besar, false = mini
  judul: 'Nama Proyek',
  desc: 'Deskripsi singkat',
  tools: ['Tool A', 'Tool B'],
  // opsional (featured):
  stats: [{ nilai: '...', label: '...' }],
  insight: '...',
  linkLive: 'https://...',
  linkFile: 'namafile.pdf',
}
```

### Pengalaman → `EXPERIENCE`

Dua array: `pendidikan` (timeline kiri) dan `kerja` (timeline kanan). Setiap entri punya `periode`, `judul`, `desc`, `impact`.

Tambahkan objek baru ke array yang sesuai — render otomatis mengikuti data.

---

## 8. Catatan Penting

- **Sertifikat tetap 125**: data `ALL_CERTS` di `portfolio.js` = 8 featured + 117 arsip. Jangan rename/move file di `public/sertifikat/**`.
- **Fungsionalitas modal/form/CV tetap**:
  - Download CV → `/assets/cv-febrianscah.pdf` (atribut `download`).
  - Modal sertifikat (`ModalShell` side drawer): cari + filter kategori + pagination 8.
  - Form kontak mock: state `idle/kirim/sukses/gagal`, spinner, **tanpa tombol reset**.
  - Link dashboard live + PDF proyek tetap `target="_blank" rel="noopener noreferrer"`.
- **Jangan sentuh** `src/main.jsx` dan isi `public/` (kecuali replace asset CV/foto yang disebut di §5).

---

## 9. Verifikasi (Checklist Serah Terima)

- [ ] `npm run build` → **0 error**.
- [ ] 7 anchor bekerja: `#beranda`, `#statistik`, `#profil`, `#pengalaman`, `#proyek`, `#sertifikat`, `#kontak` (scroll mulus, tidak tertutup navbar).
- [ ] **Tidak ada horizontal overflow** di mobile (cek lebar viewport).
- [ ] Download CV berfungsi.
- [ ] Modal sertifikat buka/tutup (ESC, klik overlay, fokus kembali).
- [ ] Form kontak submit → spinner → banner sukses.
- [ ] GitHub/LinkedIn sudah diisi URL asli (lihat §5a) — atau sengaja dibiarkan `#` jika belum ada.
