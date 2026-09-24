// Sumber data tunggal untuk portfolio.
// Disaring dari index.html vanilla (125 sertifikat). Field `file` relatif ke /sertifikat/.

export const PROFILE = {
  nama: 'FEBRIANSCAH',
  peran: 'Data Analyst | Information Systems • STT NF',
  gpa: '3.88',
  tagline: 'Mengolah data mentah menjadi insight terukur untuk mendorong keputusan bisnis yang tepat.',
  avatar: '/images/profil-hero.webp',
  cv: '/assets/cv-febrianscah.pdf',
  wa: 'https://wa.me/6281319973658',
  email: 'febrianscah20@gmail.com',
  telepon: '0813-1997-3658',
  lokasi: 'Jakarta, Indonesia',
};

// Navigasi utama (anchor per section).
export const NAV = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#sertifikat', label: 'Sertifikat' },
  { href: '#kontak', label: 'Kontak' },
];

// Skill badges (verbatim dari vanilla profil).
export const SKILLS = [
  'Python',
  'SQL',
  'Microsoft Excel',
  'Power Query',
  'Google Looker Studio',
  'Pandas & NumPy',
  'Data Visualization',
  'EDA',
];

// 4 langkah proses (Quick Stats).
export const SKILL_STEPS = [
  {
    no: '01',
    judul: 'EDA & Data Cleaning',
    warna: 'pink',
    desc: 'Merapikan data kotor jadi siap analisis: cek missing value, outlier, dan struktur data sebelum melangkah ke model atau dashboard.',
  },
  {
    no: '02',
    judul: 'SQL & Data Modeling',
    warna: 'blue',
    desc: 'Menulis query SQL untuk menarik, menggabungkan, dan memodelkan data relasional agar setiap metrik punya sumber yang jelas.',
  },
  {
    no: '03',
    judul: 'Interactive Dashboards',
    warna: 'lime',
    desc: 'Merancang dashboard interaktif di Looker Studio yang intuitif, relevan, dan aktif digunakan untuk pemantauan performa harian.',
  },
  {
    no: '04',
    judul: 'Business Impact',
    warna: 'yellow',
    desc: 'Menerjemahkan insight analitis menjadi rekomendasi strategis — seperti identifikasi anomali loss pada proyek Gayanara.',
    stat: 'Rp229,16 juta loss / 20.70% rate',
  },
];

// Proyek (verbatim dari vanilla).
export const PROJECTS = [
  {
    id: 'gayanara',
    featured: true,
    judul: 'Gayanara E-Commerce: Revenue Loss Analysis',
    desc: 'Dashboard interaktif analisis potensi kerugian Rp229,16 juta dari total potensi revenue Rp1,11 miliar. Melibatkan 1.500+ ulasan transaksi berdasarkan kategori produk, brand, dan wilayah.',
    tools: ['Looker Studio', 'Excel', 'EDA'],
    stats: [
      { nilai: 'Rp229,16 jt', label: 'Revenue Loss' },
      { nilai: '20.70%', label: 'Loss Rate' },
      { nilai: '1.500+', label: 'Reviews' },
      { nilai: '4.02/5', label: 'Rating' },
    ],
    insight: 'Kategori DIY mencatat loss 28.63% — tertinggi.',
    linkLive: 'https://datastudio.google.com/reporting/98fed2cb-e33b-42e0-811f-2df27646e10c',
    linkFile: '/case_study/case_study.jpeg',
  },
  // ARSIP: tidak dirender saat ini (hanya entri ber-flag featured yang tampil). Data dipertahankan agar mudah diaktifkan kembali.
  {
    id: 'sakunusa',
    featured: false,
    judul: 'SakuNusa Financial App',
    desc: 'TensorFlow anomaly detection untuk transaksi. Kolaborasi tim ML, Cloud & Mobile.',
    tools: ['TensorFlow', 'Python'],
  },
  // ARSIP: idem. Cukup ubah flag featured menjadi true bila ingin ditampilkan.
  {
    id: 'sales',
    featured: false,
    judul: 'Sales Dashboard',
    desc: 'Sales metrics & trends interaktif di Google Looker Studio.',
    tools: ['Looker Studio', 'Visualization'],
  },
];

// Pengalaman: pendidikan + kerja (verbatim dari vanilla).
export const EXPERIENCE = {
  pendidikan: [
    {
      periode: 'Sep 2022 – Jul 2026 • 4 tahun',
      judul: 'STT Terpadu Nurul Fikri — S1 Information Systems',
      desc: 'Sarjana Sistem Informasi dengan fokus pada pemodelan basis data, Business Intelligence, dan analisis data. Memperdalam kemampuan Exploratory Data Analysis (EDA) dan pengolahan data terstruktur melalui riset akademik serta tugas akhir.',
      impact: 'Lulus predikat sangat memuaskan dengan spesialisasi SQL & Python yang kuat',
    },
    {
      periode: 'Feb – Jun 2025 • 5 bulan',
      judul: 'Data Science Program',
      desc: 'Program intensif 5 bulan berfokus pada Exploratory Data Analysis (EDA), visualisasi data strategis, dan dasar machine learning untuk mempercepat pengambilan keputusan bisnis.',
      impact: 'Selesaikan 4 studi kasus EDA end-to-end',
    },
    {
      periode: 'Sep 2024 – Jan 2025 • 5 bulan',
      judul: 'Bangkit Academy — Machine Learning Path',
      desc: 'Skor 88.70. Program Google × GoTo × Tokopedia × Traveloka. Belajar TensorFlow sampai deployment — plus kerja tim lintas role (ML, Cloud, Mobile).',
      impact: 'Capstone: SakuNusa anomaly detection (tim 6 orang)',
    },
  ],
  kerja: [
    {
      periode: 'Mar – Jul 2026 • 5 bulan',
      judul: 'Teaching Assistant — STT Terpadu Nurul Fikri',
      desc: 'Membimbing 40+ mahasiswa dalam praktikum Data Structures & Algorithms serta Digital Image Processing. Bertanggung jawab menyusun modul praktikum, mengevaluasi tugas, dan menyederhanakan logika algoritma kompleks agar aplikatif.',
      impact: 'Nilai rata-rata mahasiswa meningkat; 95% tugas terselesaikan tepat waktu.',
    },
    {
      periode: 'Apr – Agu 2025 • 5 bulan',
      judul: 'Data Analyst Intern — PT Taharica',
      desc: 'Merancang dan memelihara dashboard interaktif untuk pelaporan performa penjualan (sales report) mingguan secara berkala. Menganalisis pergerakan transaksi dan tren penjualan guna mendukung evaluasi tim bisnis.',
      impact: 'Dashboard sales digunakan rutin setiap minggu untuk monitoring penjualan dan evaluasi performa bisnis.',
    },
  ],
};

// Socials.
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/febri1511' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/febrianscah-sc-424297276/' },
  { label: 'Instagram', href: 'https://www.instagram.com/15_eby?stkn=ZGtubHF0aW0wN2hp' },
];

// Kategori filter drawer.
export const CATS = [
  { id: 'all', label: 'Semua' },
  { id: 'asdos', label: 'Asdos' },
  { id: 'bangkit', label: 'Bangkit' },
  { id: 'dqlab', label: 'DQLab' },
  { id: 'excel', label: 'Excel' },
  { id: 'lomba', label: 'Lomba' },
  { id: 'bootcamp', label: 'Bootcamp' },
  { id: 'myskill', label: 'MySkill' },
];

// 8 Featured (kurasi docs/PANDUAN-FEATURED-8.md), urut rank.
export const FEATURED_CERTS = [
  { id: 'f1', rank: 1, judul: 'Belajar Analisis Data dengan Python', cat: 'bangkit', meta: 'Bangkit • Dicoding • 2024', file: 'sertifikat%20bangkit%20academy/Dicoding/Sertifikat%20-%20Belajar%20Analisis%20Data%20dengan%20Python.pdf' },
  { id: 'f2', rank: 2, judul: 'Belajar Dasar Structured Query Language (SQL)', cat: 'bangkit', meta: 'Bangkit • Dicoding • 2024', file: 'sertifikat%20bangkit%20academy/Dicoding/Sertifikat%20-%20Belajar%20Dasar%20Structured%20Query%20Language%20(SQL).pdf' },
  { id: 'f3', rank: 3, judul: 'Belajar Dasar Visualisasi Data', cat: 'bangkit', meta: 'Bangkit • Dicoding • 2024', file: 'sertifikat%20bangkit%20academy/Dicoding/Sertifikat%20-%20Belajar%20Dasar%20Visualisasi%20Data.pdf' },
  { id: 'f4', rank: 4, judul: 'Project Data Analysis for Retail Sales Performance Report', cat: 'dqlab', meta: 'DQLab • 2024', file: 'sertifikat%20dqlab/Sertifikat%20-%20Project%20Data%20Analysis%20for%20Retail%20Sales%20Performance%20Report.pdf' },
  { id: 'f5', rank: 5, judul: 'Project Data Analysis for B2B Retail Customer Analytics Report', cat: 'dqlab', meta: 'DQLab • 2024', file: 'sertifikat%20dqlab/Sertifikat%20-%20Project%20Data%20Analysis%20for%20B2B%20Retail%20Customer%20Analytics%20Report.pdf' },
  { id: 'f6', rank: 6, judul: 'SQL for Data Analysis', cat: 'myskill', meta: 'MySkill • 2024', file: 'sertifikat%20myskill/Sertifikat%20-%20SQL%20for%20Data%20Analysis.pdf' },
  { id: 'f7', rank: 7, judul: 'Google Looker Studio', cat: 'myskill', meta: 'MySkill • 2024', file: 'sertifikat%20myskill/Sertifikat%20-%20Google%20Looker%20Studio.pdf' },
  { id: 'f8', rank: 8, judul: 'Study Case Bootcamp Data Analyst with SQL & Python', cat: 'bootcamp', meta: 'Bootcamp • DQLab • 2024', file: 'sertifikat%20mini%20bootcamp%20dqlab/Study%20Case%20Bootcamp%20Data%20Analyst%20with%20SQL%20%26%20Python.pdf' },
];

// Generator arsip: 117 entri tambahan → total 125 (sesuai jumlah vanilla).
// Expo/excel dibuat bermotif agar paging realistis tanpa menulis 100 baris manual.
const BANGKIT_COURSERA = [
  'Advanced Computer Vision with TensorFlow',
  'Advanced Deployment Scenarios with TensorFlow',
  'Advanced Learning Algorithms',
  'Apply Generative Adversarial Networks (GANs)',
  'Browser-based Models with TensorFlow js',
  'Build Basic Generative Adversarial Networks (GANs)',
  'Build Better Generative Adversarial Networks (GANs)',
  'Calculus for Machine Learning and Data Science',
  'Convolutional Neural Networks',
  'Convolutional Neural Networks in TensorFlow',
  'Crash Course on Python',
  'Custom and Distributed Training with TensorFlow',
  'Custom Models, Layers, and Loss Functions with TensorFlow',
  'Data Pipelines with TensorFlow Data Services',
  'Device-based Models with TensorFlow Lite',
  'Generative AI for Everyone',
  'Generative Deep Learning with TensorFlow',
  'Improving Deep Learning Networks: Hyperparameter Tuning',
  'Introduction to TensorFlow for AI, ML, and Deep Learning',
  'Linear Algebra for Machine Learning and Data Science',
  'Natural Language Processing in TensorFlow',
  'Natural Language Processing with Attention Models',
  'Natural Language Processing with Classification and Vector Spaces',
  'Natural Language Processing with Probabilistic Models',
  'Natural Language Processing with Sequence Models',
  'Neural Networks and Deep Learning',
  'Probability and Statistics for Machine Learning and Data Science',
  'Sequence Models',
  'Sequence, Time Series and Prediction',
  'Structuring Machine Learning Projects',
  'Supervised Machine Learning: Regression and Classification',
  'Unsupervised Learning, Recommenders, Reinforcement Learning',
  'Using Python to Interact with the Operating System',
];

const BANGKIT_COURSERA_SPEC = [
  'Deep Learning',
  'DeepLearning.AI TensorFlow Developer',
  'Generative Adversarial Networks (GANs)',
  'Machine Learning',
  'Mathematics for Machine Learning and Data Science',
  'Natural Language Processing',
  'TensorFlow Advanced Techniques',
  'TensorFlow Data and Deployment',
];

const DQLAB = [
  'Data Engineer Challenge with SQL',
  'Data Manipulation with Pandas Part 1',
  'Exploratory Data Analysis with Python for Beginner',
  'Fundamental SQL Using FUNCTION and GROUP BY',
  'Fundamental SQL Using INNER JOIN and UNION',
  'Fundamental SQL Using SELECT Statement',
  'Guide to Learn Python with AI at DQLab',
  'Guide to Learn SQL with AI at DQLab',
  'Introduction to Data Science with Python',
  'Jenis Data pada Statistik',
  'Mengenal Distribusi Normal dengan Python',
  'Mengenal Visualisasi Data Statistik',
  'Perkenalan Data Warehouse, ETL dan Business Intelligence',
  'Populasi dan Sampel',
  'Python for Data Professional Beginner Part 1',
  'Python for Data Professional Beginner Part 2',
  'Python for Data Professional Beginner Part 3',
  'Python Fundamental for Data Science',
  'SQL Database Management',
  'Statistic using Python for Data Science Part 1',
  'Statistic using Python for Data Science Part 2',
  'Ukuran Data Pemusatan',
  'Ukuran Data Variasi',
];

const EXCEL_EASY = ['IDsMAf845', 'IDsN9177e', 'IDsNA6f18', 'IDsNCc248', 'IDsNE3f28', 'IDsNJ5284', 'IDsNk5214', 'IDsNm628a', 'IDsNP70af', 'IDsNQ31f7', 'IDsNwc86a', 'IDsNxb95c'];
const EXCEL_MEDIUM = ['IDsNY6b3b', 'IDsNZe133', 'IDsO0e955', 'IDsO20d15', 'IDsOAe29e', 'IDsOB6689', 'IDsOiedb0', 'IDsOnc2a6', 'IDsOqd910', 'IDsOv4c33', 'IDsOw4142', 'IDsOx7123', 'IDsRO5b15', 'IDsSlb6a7'];
const EXCEL_HARD = ['IDsSc0ec2', 'IDsSg50af'];
const EXCEL_EXTREME = ['IDsNWb890'];

const asdos = [
  { judul: 'Pengolahan Citra', meta: 'Asdos • 2026', file: 'sertifikat%20asdos/sertifikat%20asdos%20pengolahan%20citra.jpg' },
  { judul: 'Struktur Data Dan Algoritma', meta: 'Asdos • 2026', file: 'sertifikat%20asdos/sertifikat%20asdos%20struktur%20data%20dan%20algoritma.jpg' },
];

const bangkit = [
  ...BANGKIT_COURSERA.map((judul) => ({ judul, meta: 'Bangkit • Coursera Course • 2024', file: `sertifikat%20bangkit%20academy/Coursera/Course/Sertifikat%20-%20${judul.replace(/[:,]/g, '').replace(/ /g, '%20')}.pdf` })),
  ...BANGKIT_COURSERA_SPEC.map((judul) => ({ judul, meta: 'Bangkit • Coursera Spec. • 2024', file: `sertifikat%20bangkit%20academy/Coursera/Specialization/Sertifikat%20-%20${judul.replace(/[()]/g, '').replace(/ /g, '%20')}.pdf` })),
  ...[
    'AI Praktis untuk Produktivitas',
    'Belajar Dasar Dasar DevOps',
    'Belajar Dasar Data Science',
    'Belajar Dasar Git dengan GitHub',
    'Belajar Dasar Pemrograman JavaScript',
    'Belajar Machine Learning untuk Pemula',
    'Belajar Membuat Aplikasi Back-End untuk Pemula',
    'Belajar Penggunaan Generative AI',
    'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    'Introduction to Financial Literacy',
    'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    'Memulai Pemrograman dengan Python',
    'Pengenalan ke Logika Pemrograman (Pemrograman Logic 101)',
  ].map((judul) => ({ judul, meta: 'Bangkit • Dicoding • 2024', file: `sertifikat%20bangkit%20academy/Dicoding/Sertifikat%20-%20${judul.replace(/[()]/g, '').replace(/ /g, '%20')}.pdf` })),
];

const dqlab = DQLAB.map((judul) => ({ judul, meta: 'DQLab • 2024', file: `sertifikat%20dqlab/Sertifikat%20-%20${judul.replace(/,/g, '').replace(/ /g, '%20')}.pdf` }));

const excel = [
  ...EXCEL_EASY.map((kode) => ({ judul: `Excel Easy ${kode}`, meta: 'Excel • Easy • 2025', file: `sertifikat%20excel/easy/CERT-${kode}-proof.png` })),
  ...EXCEL_MEDIUM.map((kode) => ({ judul: `Excel Medium ${kode}`, meta: 'Excel • Medium • 2025', file: `sertifikat%20excel/medium/CERT-${kode}-proof.png` })),
  ...EXCEL_HARD.map((kode) => ({ judul: `Excel Hard ${kode}`, meta: 'Excel • Hard • 2025', file: `sertifikat%20excel/hard/CERT-${kode}-proof.png` })),
  ...EXCEL_EXTREME.map((kode) => ({ judul: `Excel Extreme ${kode}`, meta: 'Excel • Extreme • 2025', file: `sertifikat%20excel/extreme/CERT-${kode}-proof.png` })),
];

const lomba = [
  'Fisika - OSN 2025',
  'Fisika - OSSN 2025',
  'Matematika - ISO 2025',
  'Matematika - OSN 2025',
  'Piagam Osahp 2025',
].map((judul) => ({ judul, meta: 'Lomba • 2025', file: `sertifikat%20lomba/piag_${judul.replace(/ - /g, '%20-%20').replace(/ /g, '%20')}.pdf` }));

const bootcamp = [
  { judul: 'Study Case Bootcamp Data Analyst with Excel', file: 'Study%20Case%20Bootcamp%20Data%20Analyst%20with%20Excel.pdf' },
  { judul: 'Study Case Bootcamp Machine Learning & AI for Beginner', file: 'Study%20Case%20Bootcamp%20Machine%20Learning%20%26%20AI%20for%20Beginner.pdf' },
].map((c) => ({ ...c, meta: 'Bootcamp • DQLab • 2024', file: `sertifikat%20mini%20bootcamp%20dqlab/${c.file}` }));

const myskill = ['Basic Data', 'Data Analysis'].map((judul) => ({
  judul,
  meta: 'MySkill • 2024',
  file: `sertifikat%20myskill/Sertifikat%20-%20${judul.replace(/ /g, '%20')}.pdf`,
}));

// Gabung: featured dulu, lalu arsip (tanpa duplikat judul featured).
const featuredIds = new Set(FEATURED_CERTS.map((c) => c.judul));
const arsip = [
  ...asdos.map((c) => ({ ...c, cat: 'asdos' })),
  ...bangkit.map((c) => ({ ...c, cat: 'bangkit' })),
  ...dqlab.map((c) => ({ ...c, cat: 'dqlab' })),
  ...excel.map((c) => ({ ...c, cat: 'excel' })),
  ...lomba.map((c) => ({ ...c, cat: 'lomba' })),
  ...bootcamp.map((c) => ({ ...c, cat: 'bootcamp' })),
  ...myskill.map((c) => ({ ...c, cat: 'myskill' })),
].filter((c) => !featuredIds.has(c.judul));

export const ALL_CERTS = [
  ...FEATURED_CERTS.map(({ rank, ...c }) => ({ ...c, featured: true })),
  ...arsip.map((c, i) => ({ ...c, id: `a${i}`, featured: false })),
];
