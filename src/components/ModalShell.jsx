import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * ModalShell — satu-satunya pintu modal/drawer.
 * 1 tombol X + ESC + klik overlay menutup; fade + slide-up; kunci scroll;
 * jebakan fokus (Tab tetap di dalam dialog) & fokus kembali ke pemicu saat tutup.
 */
export default function ModalShell({ terbuka, onTutup, judul, children, side = false }) {
  const panelRef = useRef(null);
  const btnRef = useRef(null);
  const pemicuRef = useRef(null);

  useEffect(() => {
    if (!terbuka) return;
    pemicuRef.current = document.activeElement; // simpan pemicu
    btnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onTutup();
        return;
      }
      if (e.key !== 'Tab') return;
      const nodes = panelRef.current?.querySelectorAll(FOCUSABLE);
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      pemicuRef.current?.focus?.(); // kembalikan fokus
    };
  }, [terbuka, onTutup]);

  return (
    <AnimatePresence>
      {terbuka && (
        <motion.div
          className={`fixed inset-0 z-50 flex bg-black/60 p-4 ${
            side ? 'items-stretch justify-end' : 'items-end justify-center sm:items-center'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onMouseDown={(e) => e.target === e.currentTarget && onTutup()}
          role="presentation"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={judul}
            className={`flex w-full flex-col bg-paper border-[3px] border-ink rounded-lg shadow-hard-lg p-6 sm:p-8 ${
              side
                ? 'h-full max-w-full sm:max-w-md sm:rounded-r-none sm:border-r-0'
                : 'max-h-[90vh] max-w-lg'
            }`}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="sticky top-0 z-10 -mx-1 mb-4 flex items-center justify-between gap-3 bg-paper pb-3 pr-1">
              <h2 className="font-display uppercase text-lg">{judul}</h2>
              {/* SATU-SATUNYA tombol tutup */}
              <button
                ref={btnRef}
                type="button"
                onClick={onTutup}
                aria-label={`Tutup ${judul}`}
                className="btn-touch shrink-0 h-11 w-11 border-2 border-ink bg-paper rounded-md shadow-hard-sm hover:bg-pink hover:text-white brutal-press text-xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto pr-2">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
