/**
 * Placeholder projects - replace with real work as it ships.
 * Each project drives a generated abstract mockup; no images required.
 */

export type ProjectKind = 'saas' | 'erp' | 'fullstack';

export interface ProjectImage {
  /** Single asset, or per-language variants ({ pt, en }) when the screenshot
   *  itself differs by locale. */
  src: string | { pt: string; en: string };
  alt: { pt: string; en: string };
}

export type ProjectStatus = 'in-progress';

export interface Project {
  slug: string;
  kind: ProjectKind;
  name: string;
  type: { pt: string; en: string };
  description: { pt: string; en: string };
  bullets: { pt: string[]; en: string[] };
  stack: string[];
  /** When provided, the mockup slot renders a carousel of real images
   *  instead of the abstract generated mockup. */
  images?: readonly ProjectImage[];
  /** Optional development status. When set, a badge is rendered in the card. */
  status?: ProjectStatus;
  links: {
    demo?: string;
    code?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'link-in-bio',
    kind: 'fullstack',
    name: 'Link in Bio',
    type: { pt: 'Landing Page · Link in Bio', en: 'Landing Page · Link in Bio' },
    description: {
      pt: 'Página centralizadora de links e presença digital de alta performance com saída 100% estática, múltiplos temas visuais e otimização avançada para SEO e analytics.',
      en: 'High-performance link-in-bio and digital presence hub with 100% static output, multiple visual themes, and advanced SEO and analytics optimization.',
    },
    bullets: {
      pt: [
        'Arquitetura estática com Astro e Tailwind CSS garantindo carregamento ultrarrápido sem JavaScript obrigatório no conteúdo.',
        'Suporte a 3 temas visuais (Minimal, Modern e Neobrutalist) com modo Dark/Light/System e switcher em tempo real sem FOUC.',
        'Sistema modular de blocos de conteúdo com mais de 50 integrações, cards de conversão (exit-intent, CTA flutuante, banners) e 6 perfis pré-configurados.',
        'SEO técnico completo com Open Graph, Schema.org JSON-LD, sitemap dinâmico e integração com 5 ferramentas de analytics.',
      ],
      en: [
        'Static architecture built with Astro and Tailwind CSS ensuring blazing-fast loads with zero mandatory JS for main content.',
        'Supports 3 visual themes (Minimal, Modern, and Neobrutalist) with Dark/Light/System color modes and instant theme switcher without FOUC.',
        'Modular content block system featuring 50+ platform integrations, conversion cards (exit-intent, floating CTA, banners), and 6 pre-configured profiles.',
        'Comprehensive technical SEO with Open Graph, Schema.org JSON-LD, dynamic sitemap, and integrations for 5 analytics providers.',
      ],
    },
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'Cloudflare Pages', 'Wrangler', 'Lucide Icons', 'SEO / OpenGraph'],
    images: [
      {
        src: '/projects/LinkInBio/01.png',
        alt: {
          pt: 'Link in Bio - Interface moderna com tema escuro, timeline de experiências, switcher de estilo e métricas de perfil',
          en: 'Link in Bio - Modern dark theme interface featuring experience timeline, style switcher, and profile metrics',
        },
      },
    ],
    links: {
      demo: 'https://links.vdonoladev.com.br/',
      code: 'https://github.com/vdonoladev/linkInBio',
    },
  },
  {
    slug: 'neto-cell',
    kind: 'fullstack',
    name: 'Neto Cell Assistência Técnica',
    type: { pt: 'Site · Negócio Local', en: 'Site · Local Business' },
    description: {
      pt: 'Site institucional de uma assistência técnica de celulares em Franca-SP, com integração WhatsApp, mapa embutido e SEO local.',
      en: 'Institutional site for a phone repair shop in Franca-SP, with WhatsApp integration, embedded map and local SEO.',
    },
    bullets: {
      pt: [
        'Landing institucional com seções de serviços, depoimentos, contato e horários.',
        'Integração com WhatsApp por links pré-formatados a partir de número e mensagem padrão.',
        'Mapa do Google embutido e bloco de contato com endereço, formas de pagamento e redes sociais.',
        'SEO local com metadata por página e dados estruturados JSON-LD (LocalBusiness).',
      ],
      en: [
        'Institutional landing with services, testimonials, contact and business hours sections.',
        'WhatsApp integration through pre-formatted URLs built from a base number and default message.',
        'Embedded Google Maps and a contact block with address, payment methods and social links.',
        'Local SEO with per-page metadata and JSON-LD structured data (LocalBusiness).',
      ],
    },
    stack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS'],
    images: [
            {
        src: '/projects/NetoCell/03.png',
        alt: {
          pt: 'Neto Cell - mockup do projeto desktop e mobile',
          en: 'Neto Cell - desktop and mobile project mockup',
        },
      },
    ],
    links: {
      demo: 'https://netocell-vdonoladev.vercel.app/',
    },
  },
];
