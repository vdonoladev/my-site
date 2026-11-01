import { ArrowUpRight, Check, FileCheck2, Globe, MonitorCog, Wifi } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const serviceIcons = [Globe, MonitorCog, Wifi];

export function Services() {
  const { lang } = useLanguage();
  const t = content.services;

  return (
    <section
      id="services"
      className="relative scroll-mt-24 border-y border-border bg-muted/20 py-24 sm:py-32"
    >
      <div className="container-edge">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal>
            <SectionLabel number="02" label={t.label[lang]} />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-[11px] text-accent">
              <FileCheck2 size={14} />
              <span>{t.nfsBadge[lang]}</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal direction="up" className="lg:col-span-7">
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-display text-balance sm:text-5xl">
              {t.title[lang]}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-muted-foreground text-balance">
              {t.sub[lang]}
            </p>
          </Reveal>
        </div>

        {/* 1. As 3 Frentes Operacionais com Checklist de Entregáveis */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.items[lang].map((item, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={item.number} delay={i * 0.08}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-elevated sm:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-foreground/80 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                        <Icon size={19} strokeWidth={1.6} />
                      </span>
                      <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                      {item.deliverables.map((deliv, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/85 sm:text-[13px]"
                        >
                          <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-2">
                    <a
                      href={item.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <SiWhatsapp size={14} />
                        {item.ctaLabel}
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* 2. Modalidades de Contratação (Avulso vs. Contrato Mensal vs. Projeto Web) */}
        <div className="mt-24">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-2xl font-semibold tracking-display text-foreground sm:text-3xl">
                  {t.plans.title[lang]}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">{t.plans.sub[lang]}</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {t.plans.items[lang].map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08}>
                <div
                  className={cn(
                    'relative flex h-full flex-col justify-between rounded-2xl border p-6 transition-all sm:p-8',
                    plan.featured
                      ? 'border-accent bg-surface-elevated shadow-[0_20px_50px_-24px_rgb(var(--accent)/0.22)]'
                      : 'border-border bg-surface hover:border-border-strong',
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          'rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]',
                          plan.featured
                            ? 'bg-accent font-semibold text-accent-foreground'
                            : 'border border-border bg-background text-muted-foreground',
                        )}
                      >
                        {plan.badge}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {plan.priceHint}
                      </span>
                    </div>

                    <h4 className="mt-5 text-xl font-semibold text-foreground">{plan.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                      {plan.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/85 sm:text-[13px]"
                        >
                          <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button
                      as="a"
                      href={plan.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      variant={plan.featured ? 'primary' : 'secondary'}
                      size="lg"
                      className="w-full justify-center"
                    >
                      <SiWhatsapp size={15} />
                      {plan.cta}
                      <ArrowUpRight size={14} />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 3. Como Funciona em 4 Passos */}
        <div className="mt-24 rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {t.process.title[lang]}
            </h3>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps[lang].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <div className="relative flex flex-col gap-2">
                  <span className="font-mono text-xs font-semibold text-accent">{s.step}</span>
                  <h4 className="text-base font-semibold text-foreground">{s.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

