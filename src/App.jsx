import { useState } from 'react';
import Hero from './components/Hero.jsx';
import QuickStats from './components/QuickStats.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import { PROFILE, NAV } from './data/portfolio.js';

export default function App() {
  const [menuBuka, setMenuBuka] = useState(false);

  return (
    <div className="min-h-screen">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded-md focus:border-2 focus:border-ink focus:bg-yellow focus:px-4 focus:py-2 focus:text-ink"
      >
        Lewati ke konten
      </a>

      <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-cream">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          {/* Logo monogram kiri */}
          <a
            href="#beranda"
            aria-label="Febrianscah — kembali ke atas"
            className="flex items-center gap-2.5"
          >
            <span className="grid h-10 w-10 place-items-center rounded-md bg-ink font-display text-white shadow-hard-sm">
              F
            </span>
            <span className="font-display text-sm uppercase tracking-wide">
              Febrianscah<span className="text-pink">.</span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-2 md:flex"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full border-2 border-ink bg-paper px-4 py-2 font-mono text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-yellow"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA Download CV — selalu tampil */}
            <a
              href={PROFILE.cv}
              download
              className="brutal-press hidden items-center rounded-md border-2 border-ink bg-pink px-4 py-2 font-mono font-bold text-white shadow-hard-sm transition-transform hover:-translate-y-1 sm:inline-flex"
            >
              Download CV
            </a>

            {/* Hamburger mobile */}
            <button
              type="button"
              className="relative grid h-11 w-11 place-items-center rounded-md border-2 border-ink bg-paper shadow-hard-sm md:hidden"
              aria-expanded={menuBuka}
              aria-controls="menu-mobile"
              aria-label={menuBuka ? 'Tutup menu' : 'Buka menu'}
              onClick={() => setMenuBuka((b) => !b)}
            >
              <span className="flex flex-col items-center justify-center gap-y-1">
                <span
                  className={`block h-[3px] w-5 bg-ink transition-transform duration-200 ${
                    menuBuka ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[3px] w-5 bg-ink transition-opacity duration-200 ${
                    menuBuka ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-[3px] w-5 bg-ink transition-transform duration-200 ${
                    menuBuka ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>

              {/* Dropdown menu mobile */}
              {menuBuka && (
                <div
                  id="menu-mobile"
                  className="absolute right-4 top-full mt-2 w-56 rounded-md border-[3px] border-ink bg-cream shadow-hard"
                >
                  {NAV.map((n) => (
                    <a
                      key={n.href}
                      href={n.href}
                      onClick={() => setMenuBuka(false)}
                      className="block border-b-2 border-ink px-4 py-3 font-mono font-bold last:border-0 hover:bg-yellow"
                    >
                      {n.label}
                    </a>
                  ))}
                  <a
                    href={PROFILE.cv}
                    download
                    onClick={() => setMenuBuka(false)}
                    className="block border-b-2 border-ink px-4 py-3 font-mono font-bold last:border-0 hover:bg-yellow"
                  >
                    Download CV
                  </a>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      <main id="konten" tabIndex={-1} className="mx-auto max-w-6xl px-4 pb-10 md:pb-14">
        <div className="space-y-8 md:space-y-12">
          {/* Beranda — Hero sudah punya id="beranda" */}
          <div className="pt-6 pb-2 md:pt-10 md:pb-4">
            <Hero />
          </div>

          {/* Statistik — QuickStats punya id="statistik" */}
          <QuickStats />

          {/* Pengalaman — Experience punya id="pengalaman" */}
          <Experience />

          {/* Proyek — Projects punya id="proyek" */}
          <Projects />

          {/* Sertifikat — Certificates tidak punya id, bungkus */}
          <div id="sertifikat" className="scroll-mt-24">
            <Certificates />
          </div>

          {/* Kontak — ContactForm tidak punya id, bungkus */}
          <div id="kontak" className="scroll-mt-24">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
