import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageSquare, Wrench } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ContactModal } from '@/components/ui/ContactModal';
import { useLanguage } from '@/hooks/useLanguage';
import { content, links } from '@/data/content';

export function Contact() {
  const { lang } = useLanguage();
  const t = content.contact;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 sm:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-hairlines opacity-[0.12]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgb(var(--accent) / 0.10) 0%, transparent 65%)',
        }}
      />

      <div className="container-edge relative">
        <Reveal>
          <SectionLabel number="06" label={t.label[lang]} />
        </Reveal>

        <Reveal direction="up" className="mt-8">
          <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.96] tracking-display text-balance sm:text-7xl">
            {t.title[lang]}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-[15px] leading-relaxed text-muted-foreground text-balance">
            {t.sub[lang]}
          </p>
        </Reveal>

        {/* Cartões com os canais diretos da VD Tech & Suporte */}
        <Reveal delay={0.15} className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`mailto:${links.email}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-foreground/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.channels.commercial.label[lang]}
                </span>
                <Mail size={16} className="text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-3 font-mono text-sm text-foreground/90">
                {links.email}
              </p>
            </a>

            <a
              href={`mailto:${links.supportEmail}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-foreground/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.channels.support.label[lang]}
                </span>
                <Wrench size={16} className="text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-3 font-mono text-sm text-foreground/90">
                {links.supportEmail}
              </p>
            </a>

            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface/60 p-5 backdrop-blur sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.channels.location.label[lang]}
                </span>
                <MapPin size={16} className="text-muted-foreground" />
              </div>
              <p className="mt-3 text-sm text-foreground/90">
                {t.channels.location.value[lang]}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Botões de Ação Direta */}
        <Reveal delay={0.25} className="mt-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <Button as="a" href={links.whatsapp} target="_blank" rel="noreferrer" size="lg">
              <SiWhatsapp size={15} />
              {t.cta.whatsapp[lang]}
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button onClick={() => setModalOpen(true)} variant="secondary" size="lg">
              <MessageSquare size={15} />
              {t.cta.email[lang]}
            </Button>
            <Button as="a" href={links.linkedin} variant="secondary" size="lg" target="_blank" rel="noreferrer">
              <Linkedin size={15} />
              {t.cta.linkedin[lang]}
            </Button>
            <Button as="a" href={links.github} variant="secondary" size="lg" target="_blank" rel="noreferrer">
              <Github size={15} />
              {t.cta.github[lang]}
            </Button>
          </div>
        </Reveal>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}