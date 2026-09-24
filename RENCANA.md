# RENCANA — Redesign Neo-Brutalism LIGHT

> Re-audit TUGAS 0 · Senior Software Architect
> Target: `portfolio-react/` (React 18 + Vite + Tailwind 3.4 + Framer Motion)
> Referensi konten (baca-saja): `08-Dimension-Portfolio/index.html`
> Status: KEPUTUSAN FINAL — tidak dibantah.

---

## 0. Prinsip Utama

- Ganti total dari dark theme → **Neo-Brutalism LIGHT**.
- Kanvas **cream** `#F5F2EB`, teks **ink** `#111`, aksen 4 warna + putih.
- **Shadow keras tanpa blur** (offset solid), border tebal, hover = translate.
- Semua angka mengikuti **file data** (`src/data/portfolio.js`), bukan prompt user.
- Konten teks verbatim dari vanilla `index.html` (nama, jabatan, deskripsi).

---

## 1. Tabel File — Diubah vs Jangan Disentuh

### 1.1 DIUBAH (implementasi redesign)

| File | Aksi | Catatan |
|------|------|---------|
| `tailwind.config.js` | Ubah total | Ganti warna token, fontFamily, borderRadius, tambah `boxShadow` hard |
| `index.html` | Ubah | Ganti link Google Fonts (Archivo Black / Space Grotesk / Space Mono / JetBrains Mono) |
| `src/index.css` | Ubah total | `color-scheme: light`, body cream, token font, util shadow-hard, focus-visible warna baru, btn-touch tetap |
| `src/data/portfolio.js` | Ubah besar | Tambah `PROJECTS[3]`, `EXPERIENCE`, `SKILLS`, `SKILL_STEPS`, `SOCIALS`; perbaiki `STATS` & `PROFILE` (angka asli) |
| `src/App.jsx` | Ubah besar | `NAV[5]`, susun ulang section, scroll-mt, tambah komponen baru |
| `src/components/Hero.jsx` | Ubah besar | Headline besar + window mockup KPI Gayanara, avatar black border tebal |
| `src/components/StatCard.jsx` | Ubah | Jadi numbered card 01–04 dengan warna per-step |
| `src/components/Certificates.jsx` | Ubah sedang | Retheme accordion/filter (fungsionalitas cari+filter+paging tetap) |
| `src/components/ContactForm.jsx` | Ubah ringan | Retheme mock form (state machine tetap) |
| `src/components/ModalShell.jsx` | Ubah ringan | Retheme border/shadow (jebakan fokus & a11y tetap utuh) |

### 1.2 KOMPONEN BARU (ditambahkan)

| File | Tujuan |
|------|--------|
| `src/components/Experience.jsx` | Timeline Pendidikan + Kerja (2 kolom) |
| `src/components/Projects.jsx` | 3 proyek modular framed (1 featured + 2 mini) |
| `src/components/QuickStats.jsx` | 4 numbered cards (01–04) — atau dirender via `StatCard` |
| `src/components/Footer.jsx` | Footer brutalist (monogram + socials + TODO) |

> **Catatan arsitektur:** `QuickStats` boleh dirender langsung di `App.jsx` lewat `map` atas `SKILL_STEPS` + `StatCard` (hindari komponen tipis berlebih). Final call ada di implementor.

### 1.3 JANGAN DISENTUH (anti-regresi)

| File / Asset | Alasan |
|--------------|--------|
| `src/main.jsx` | Entry point, tidak berubah |
| `public/assets/cv-febrianscah.pdf` | Download CV tetap berfungsi |
| `public/images/profil.webp` | Dipertahankan (brief tidak minta ganti) |
| `public/images/project-gayanara.webp` + `-thumb.webp` | Screenshot dashboard tetap |
| `public/sertifikat/**` (125 file) | Arsip sertifikat, jangan rename/move |
| `public/` lain | — |

> **WAJIB PERTAHANKAN fungsionalitas:**
> 1. Download CV → `public/assets/cv-febrianscah.pdf` (path `/assets/cv-febrianscah.pdf`).
> 2. Modal sertifikat (drawer `ModalShell` side) tetap: cari + filter kategori + pagination 8.
> 3. Form kontak mock tetap: submit async + spinner + banner sukses/gagal, **tanpa tombol reset**.
> 4. Link dashboard live (`datastudio.google.com/...`) + PDF proyek tetap buka tab baru.

---

## 2. Mapping Konten → Section Brutalist

| Section | ID anchor | Isi (sumber) |
|---------|-----------|--------------|
| **Navbar** | `header` | Monogram `F.` + NAV[5], sticky, border-b tebal ink |
| **Hero** | `#beranda` | Headline `FEBRIANSCAH` raksasa + window mockup KPI Gayanara; avatar dibingkai black border tebal; CTA Download CV + Kenalan dulu |
| **Quick Stats** | `#statistik` | 4 numbered cards dari `SKILL_STEPS` |
| **Profil** | `#profil` | Intro + skills badge + stats (dari vanilla profil 78–118) |
| **Experience** | `#pengalaman` | Timeline 2 kolom: Pendidikan (3) + Kerja (2) |
| **Projects** | `#proyek` | 1 featured framed (Gayanara) + 2 mini (SakuNusa, Sales Dashboard) |
| **Certifications** | `#sertifikat` | 8 featured + drawer arsip (accordion/filter) |
| **Contact** | `#kontak` | Info kontak + mock form |
| **Footer** | `footer` | Monogram + socials + copyright |

### Quick Stat 4 numbered cards (warna)

| No | Label | Warna | Sumber angka |
|----|-------|-------|--------------|
| 01 | EDA / Cleaning | **pink** `#FF4D6D` | — |
| 02 | SQL / Modeling | **blue** `#2563EB` | — |
| 03 | Dashboards | **lime** `#4ADE80` | — |
| 04 | Business Impact | **yellow** `#FFC700` | Revenue loss Rp229.16M / loss 20.70% |

---

## 3. Struktur Data Usulan (`src/data/portfolio.js`)

### 3.1 `PROFILE` (perbaiki field, jangan karang URL)

```text
nama: 'FEBRIANSCAH'
peran: 'Data Analyst | Information Systems • STT NF'
gpa: '3.88'
tagline: 'Merapikan data berantakan jadi insight yang bisa dieksekusi.'
avatar: '/images/profil.webp'
cv: '/assets/cv-febrianscah.pdf'
wa: 'https://wa.me/6281319973658'
email: 'febrianscah20@gmail.com'
telepon: '0813-1997-3658'
lokasi: 'Jakarta, Indonesia'
```

### 3.2 `PROJECTS[3]` — verbatim dari vanilla (proyek 172–252)

1. **Gayanara E-Commerce: Revenue Loss Analysis** (featured)
   - loss `Rp229.16M` (20.70%) dari Rp1.11B potential; **1,500+** reviews; breakdown category/brand/province.
   - rating **4.02/5**; insight: kategori DIY loss **28.63%** (tertinggi).
   - badge: Looker Studio, Excel, EDA.
   - links: Live Dashboard `https://datastudio.google.com/reporting/98fed2cb-e33b-42e0-811f-2df27646e10c` + PDF `PD0093424C_-_Febrianscah.pdf`.
2. **SakuNusa Financial App** — TensorFlow anomaly detection, tim ML/Cloud/Mobile. Badge: TensorFlow, Python.
3. **Sales Dashboard** — sales metrics & trends di Looker Studio. Badge: Looker Studio, Visualization.

### 3.3 `EXPERIENCE` (Taharica + Asdos + pendidikan)

**Pendidikan (timeline):**
- STT Terpadu Nurul Fikri — S1 Information Systems (Sep 2022 – Jul 2026, 4 tahun) · predikat memuaskan + fondasi SQL/Python.
- Data Science Program (Feb – Jun 2025, 5 bulan) · skor 90/100 · 4 studi kasus EDA.
- Bangkit Academy — ML Path (Sep 2024 – Jan 2025, 5 bulan) · skor 88.70 · capstone SakuNusa (tim 6).

**Pengalaman Kerja:**
- Teaching Assistant — STT NF (Mar – Jul 2026, 5 bulan) · 40+ mahasiswa · 95% tugas tepat waktu.
- Data Analyst Intern — PT Taharica (Apr – Agu 2025, 5 bulan) · dashboard mingguan · temukan pola loss **Rp229M** proyek Gayanara.

### 3.4 `SKILLS[6-8]` — verbatim dari vanilla profil (95–104)

Python · SQL · Microsoft Excel · Power Query · Google Looker Studio · Pandas & NumPy · Data Visualization · EDA.

### 3.5 `SKILL_STEPS[4]` — 4 langkah proses

EDA/Cleaning → SQL/Modeling → Dashboards → Business Impact (angka referensi: loss 20.70%, Rp229.16M, 1,500+ reviews, rating 4.02/5).

### 3.6 `SOCIALS[2]` — placeholder (TODO)

- GitHub → `href="#"` + `TODO: tambahkan URL`.
- LinkedIn → `href="#"` + `TODO: tambahkan URL`.

### 3.7 `NAV[5]`

Profil, Pengalaman, Proyek, Sertifikat, Kontak.

### 3.8 `STATS` — perbaiki angka asli (koreksi vs kode lama)

| Field | Lama (salah) | Benar |
|-------|--------------|-------|
| loss rate | — | **20.70%** (bukan 20.69%) |
| reviews | — | **1,500+** (bukan 1,499+) |
| revenue loss | — | **Rp229.16M** |
| rating | — | **4.02/5** |
| GPA | `3.88` ✅ | tetap `3.88` |
| certs | `125` ✅ | tetap **125** |
| proyek | `3` ✅ | tetap **3** |

> Kode lama `STATS` menampilkan `125 / 3 / 2`. Redesign: sertifikat **125**, proyek **3**, pengalaman **2** tetap valid; tambahkan loss rate & reviews & revenue ke Quick Stats / Hero mockup KPI.

---

## 4. Design Token

### 4.1 Warna

| Token | Hex |
|-------|-----|
| cream (canvas) | `#F5F2EB` |
| ink (teks/border) | `#111111` |
| yellow (aksen) | `#FFC700` |
| pink (aksen) | `#FF4D6D` |
| blue (aksen) | `#2563EB` |
| lime (aksen) | `#4ADE80` |
| white | `#FFFFFF` |

### 4.2 Border & Shadow

| Elemen | Spesifikasi |
|--------|-------------|
| Border | `2px`–`3.5px` solid ink `#111` |
| Shadow card | `6px 6px 0 0 #111` (0 blur, hard) |
| Shadow button | `3px 3px 0 0 #111` |
| Shadow active (press) | `1px 1px 0 0 #111` + `translate` (1–3px) |
| Hover card | translate `-2px -2px` + shadow membesar `8px 8px` |

### 4.3 Font (Google Fonts, ganti di `index.html`)

| Peran | Font |
|-------|------|
| Heading | **Archivo Black** / **Space Grotesk** (700–800) |
| Body | **JetBrains Mono** / **Space Mono** (400–500) |

---

## 5. Anchor & Scroll Margin, Urutan Section Final

Urutan final render (top→bottom):

1. `<header>` Navbar (sticky)
2. `<main id="konten">`
   - `<section id="beranda">` Hero
   - `<section id="statistik">` Quick Stats (4 numbered cards)
   - `<section id="profil">` Profil + skills
   - `<section id="pengalaman">` Experience/Timeline
   - `<section id="proyek">` Projects
   - `<section id="sertifikat">` Certifications
   - `<section id="kontak">` Contact
3. `<footer>` Footer

**Aturan anchor:**
- Setiap section target diberi `scroll-mt-24` (atau setara) agar tidak tertutup navbar sticky.
- `id` anchor = label NAV (profil, pengalaman, proyek, sertifikat, kontak).
- Skip-link `#konten` tetap dipertahankan (sr-only + focus visible).
- Scroll behavior smooth dihormati `prefers-reduced-motion` (sudah ada di `index.css`).

---

## 6. Anti-Regresi (checklist)

- [ ] Download CV → `public/assets/cv-febrianscah.pdf` tetap (href `/assets/cv-febrianscah.pdf`, atribut `download`).
- [ ] Modal sertifikat tetap: `ModalShell` side drawer, cari + filter `CATS` + pagination `PER_HALAMAN=8`, tombol "Lihat semua (125)".
- [ ] Form kontak mock tetap: state `idle/kirim/sukses/gagal`, spinner, `role="status"`, **tanpa reset**.
- [ ] Link dashboard live + PDF proyek tetap `target="_blank" rel="noopener noreferrer"`.
- [ ] `ModalShell` a11y tetap: ESC, klik overlay, jebakan fokus, fokus kembali.
- [ ] `btn-touch` min 44×44 px tetap (WCAG 2.5.5).
- [ ] `:focus-visible` outline diperbarui ke warna kontras baru (tetap 3px).
- [ ] `prefers-reduced-motion` tetap mematikan animasi.
- [ ] Foto profil `profil.webp` tetap + black border tebal (bukan gradien).
- [ ] GitHub/LinkedIn = `href="#"` + komentar TODO, **JANGAN karang URL**.

---

## 7. Catatan Arsitektur (untuk implementor)

1. **Sumber data tunggal** tetap `src/data/portfolio.js` — semua angka/hardcode teks wajib diambil dari sini, bukan ditulis inline di komponen.
2. **Shadow & border** disarankan jadi util class di `index.css` (`shadow-hard`, `shadow-hard-sm`, `shadow-hard-active`) supaya konsisten, bukan Tailwind arbitrary per-tempat.
3. **Warna per-step** (pink/blue/lime/yellow) dipetakan ke `SKILL_STEPS` lewat field `warna`, lalu dirender `StatCard` dengan prop tambahan.
4. **Hindari over-komponen**: `Footer` dan `Experience` layak jadi komponen terpisah; `QuickStats` boleh digabung di `App.jsx`.
5. **Jangan ubah `main.jsx`** dan seluruh isi `public/` kecuali penambahan asset baru (tidak ada penambahan yang diminta).
6. **Respon grid** mengikuti pola lama: mobile 1 kolom → `sm:grid-cols-2` → `lg:grid-cols-4` untuk cards.
