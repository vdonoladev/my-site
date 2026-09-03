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
    slug: 'vale-imperial',
    kind: 'fullstack',
    name: 'Vale Imperial',
    type: { pt: 'Website Institucional · Turismo & Imóveis', en: 'Corporate Website · Tourism & Real Estate' },
    description: {
      pt: 'Plataforma institucional e editorial voltada para curadoria de turismo boutique e imóveis de alto padrão em Petrópolis (RJ), unindo catálogo imobiliário interativo, roteiros privativos e blog cultural.',
      en: 'Editorial and corporate platform dedicated to boutique tourism and high-end real estate curation in Petrópolis (RJ), combining an interactive property catalog, private tours, and a cultural journal.',
    },
    bullets: {
      pt: [
        'Interface com estética editorial refinada, cursor flutuante customizado com labels contextuais e menu drawer responsivo com navegação fluida.',
        'Catálogo imobiliário interativo com filtragem dinâmica por categorias (Casas de Campo, Imóveis Históricos e Investimento) cobrindo regiões nobres da serra.',
        'Seção dedicada a experiências de turismo autoral com cards informativos, badges de duração e integração de janelas modais dinâmicas para detalhes e CTAs.',
        'Jornal da Serra integrado para publicação de ensaios e artigos de lifestyle de montanha, além de formulário completo para captação de leads qualificados e SEO técnico avançado com Open Graph.',
      ],
      en: [
        'Refined editorial aesthetic featuring a custom interactive floating cursor with contextual labels and a fluid responsive mobile drawer.',
        'Interactive real estate catalog with dynamic category filtering (Country Homes, Historic Mansions, and Investment) across premier mountain regions.',
        'Dedicated boutique tourism section showcasing tailored itineraries, duration badges, and dynamic modal dialogs for content expansion and call-to-actions.',
        'Integrated editorial journal for mountain lifestyle essays, accompanied by an advanced lead capture form and comprehensive technical SEO with Open Graph meta tags.',
      ],
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'SVG', 'SEO / OpenGraph', 'Vercel'],
    images: [
      {
        src: '/projects/ValeImperial/01.png',
        alt: {
          pt: 'Vale Imperial - Interface institucional com curadoria de turismo boutique e imóveis de serra em Petrópolis',
          en: 'Vale Imperial - Editorial interface featuring boutique tourism curation and luxury mountain real estate in Petrópolis',
        },
      },
    ],
    links: {
      demo: 'https://valeimperial-vdonoladev.vercel.app/',
    },
  },
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
  {
    slug: 'marilei-krauss-psicologa',
    kind: 'fullstack',
    name: 'Marilei Krauss — Psicóloga',
    type: { pt: 'Landing Page · Saúde & Clínica', en: 'Landing Page · Health & Clinic' },
    description: {
      pt: 'Landing page institucional desenvolvida para a psicóloga Marilei Krauss, com design acolhedor, arquitetura modular em React e foco total em conversão e agendamento via WhatsApp.',
      en: 'Institutional landing page built for clinical psychologist Marilei Krauss, featuring a warm design, modular React architecture, and direct conversion funnel to WhatsApp scheduling.',
    },
    bullets: {
      pt: [
        'Desenvolvimento com React, Vite e Tailwind CSS, proporcionando alta performance de carregamento e interface totalmente responsiva.',
        'Arquitetura modular dividida entre layout, componentes de UI reutilizáveis e seções temáticas (visão clínica, especialidades e tratamento de traumas).',
        'Camada de conteúdo centralizada em JavaScript para fácil manutenção de textos e dados sem alterar a estrutura visual da aplicação.',
        'Otimizações de acessibilidade nativa com Skip Links, contrastes validados, hierarquia semântica e suporte a navegação por teclado.',
        'Funil de conversão estratégica direcionando para agendamento direto pelo WhatsApp através de CTAs contextuais e dinâmicos.',
      ],
      en: [
        'Built with React, Vite, and Tailwind CSS, delivering blazing-fast loading speeds and a fully responsive layout across all viewports.',
        'Modular architecture separated into layouts, reusable UI components, and dedicated sections (clinical approach, specialties, trauma therapy).',
        'Centralized JavaScript content layer enabling seamless text and data updates without touching component layout logic.',
        'Built-in accessibility standards featuring Skip Links, verified color contrasts, semantic hierarchy, and full keyboard navigation support.',
        'Strategic conversion funnel designed to drive appointment bookings directly to WhatsApp via contextual, dynamic CTAs.',
      ],
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Acessibilidade (a11y)'],
    images: [
            {
        src: '/projects/MarileiKrauss/01.png',
        alt: {
          pt: 'Marilei Krauss - mockup do projeto desktop e mobile',
          en: 'Marilei Krauss - desktop and mobile project mockup',
        },
      },
    ],
    links: {
      demo: 'https://sitepsicologa-vdonoladev.vercel.app/',
    },
  },
  {
    slug: 'food-landing-page',
    kind: 'fullstack',
    name: 'food — Delivery Landing Page',
    type: { pt: 'Landing Page · Gastronomia & Delivery', en: 'Landing Page · Food & Delivery' },
    description: {
      pt: 'Landing page moderna e responsiva voltada para negócios de delivery e gastronomia, combinando cardápio atrativo, depoimentos de clientes e navegação fluida com animações.',
      en: 'Modern, responsive landing page crafted for food delivery businesses, featuring an enticing menu showcase, customer testimonials, and smooth animated navigation.',
    },
    bullets: {
      pt: [
        'Desenvolvimento frontend com HTML5 semântico, CSS3 responsivo e JavaScript (ES6+).',
        'Animações suaves de entrada durante a rolagem de página integradas com a biblioteca ScrollReveal.js.',
        'Menu interativo adaptado para navegação fluida tanto no desktop quanto em dispositivos móveis.',
        'Apresentação de cardápio digital estruturado, seção de prova social com depoimentos e botões de contato direto para pedidos via WhatsApp e redes sociais.',
      ],
      en: [
        'Frontend development using semantic HTML5, responsive CSS3, and JavaScript (ES6+).',
        'Smooth scroll-triggered entrance animations powered by ScrollReveal.js.',
        'Interactive menu layout tailored for seamless navigation on both desktop and mobile devices.',
        'Structured digital menu showcase, social proof testimonial section, and direct contact buttons for orders via WhatsApp and social channels.',
      ],
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'ScrollReveal.js', 'Font Awesome', 'Netlify'],
    images: [
            {
        src: '/projects/Food/01.png',
        alt: {
          pt: 'Food - mockup do projeto desktop e mobile',
          en: 'Food - desktop and mobile project mockup',
        },
      },
    ],
    links: {
      demo: 'https://food-vdonoladev.netlify.app/',
      code: 'https://github.com/vdonoladev/food',
    },
  },
  {
    slug: 'drew-studio',
    kind: 'fullstack',
    name: 'Drew Studio',
    type: { pt: 'Landing Page · Agência Criativa & Marketing', en: 'Landing Page · Creative Agency & Marketing' },
    description: {
      pt: 'Landing page moderna e responsiva desenvolvida para uma agência de marketing digital e audiovisual, com alternância de tema Dark/Light, cards de serviços e tabela de planos.',
      en: 'Modern, responsive landing page crafted for a digital marketing and creative agency, featuring Dark/Light mode switching, service showcase cards, and tiered pricing plans.',
    },
    bullets: {
      pt: [
        'Desenvolvimento frontend com HTML5 semântico estruturado para SEO e estilização rápida com Tailwind CSS.',
        'Componentes de interface modernos integrados com a biblioteca Flowbite e ícones Font Awesome 6.',
        'Controle nativo de modo claro e escuro (Dark/Light Mode) e interações dinâmicas via JavaScript.',
        'Seções estruturadas para apresentação da agência, portfólio de serviços, perfis de equipe e pacotes de planos comerciais com CTAs de conversão.',
      ],
      en: [
        'Frontend development using semantic, SEO-optimized HTML5 and utility-first styling with Tailwind CSS.',
        'Modern UI components integrated with Flowbite and customized with Font Awesome 6 icons.',
        'Native light and dark theme switcher (Dark/Light Mode) with dynamic UI interactions via JavaScript.',
        'Structured sections for company overview, service catalogs, team profiles, and tiered service pricing packages with conversion CTAs.',
      ],
    },
    stack: ['HTML', 'Tailwind CSS', 'Flowbite', 'JavaScript', 'Font Awesome 6'],
    images: [
            {
        src: '/projects/DrewStudio/01.png',
        alt: {
          pt: 'Drew Studio - mockup do projeto desktop e mobile',
          en: 'Drew Studio - desktop and mobile project mockup',
        },
      },
    ],
    links: {
      demo: 'https://drewstudio-vdonoladev.vercel.app/',
      code: 'https://github.com/vdonoladev/drewStudio',
    },
  },
];
