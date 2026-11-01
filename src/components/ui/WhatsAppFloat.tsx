import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';
import { useLanguage } from '@/hooks/useLanguage';
import { links } from '@/data/content';

export function WhatsAppFloat() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const label =
    lang === 'pt' ? 'Orçamento rápido no WhatsApp' : 'Quick quote on WhatsApp';

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={links.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface/90 px-4 py-3 text-xs font-medium text-foreground shadow-[0_12px_32px_-8px_rgb(var(--foreground)/0.25)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <SiWhatsapp size={16} />
          <span className="hidden sm:inline">{label}</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

