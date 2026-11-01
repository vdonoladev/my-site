/**
 * All UI copy lives here. Edit text in PT/EN side-by-side.
 * Keys are referenced in components via the useLanguage hook.
 */

export type Language = 'pt' | 'en';

export const developer = {
  name: 'Víctor Donola Ferreira',
  company: 'VD Tech & Suporte',
  cnpj: '69.676.193/0001-00',
  role: 'Full-Stack & IT Solutions',
  focus: [
    'clean code',
    'refined UI',
    'product mindset',
    'infra & IT',
  ],
  stack: new Set([
    'ReactJS',
    'NodeJS',
    'Astro',
    'Docker',
    'PostgreSQL',
    'Redes & Wi-Fi',
  ]),
  available: true,
} as const;

export const links = {
  github: 'https://github.com/vdonoladev',
  linkedin: 'https://www.linkedin.com/in/vdonoladev/',
  email: 'contato@vdonoladev.com.br',
  supportEmail: 'suporte@vdonoladev.com.br',
  whatsapp:
    'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Vim%20pelo%20site%20da%20VD%20Tech%20e%20gostaria%20de%20um%20or%C3%A7amento.',
  whatsappFormatted: '+55 (24) 99266-3842',
  cv: '/vdonoladev-cv.pdf',
  contactForm: 'https://formspree.io/f/mljeevqg',
};

export const companyInfo = {
  name: 'VD Tech & Suporte',
  legalName: 'Víctor Donola Ferreira',
  cnpj: '69.676.193/0001-00',
  city: 'Petrópolis',
  state: 'RJ',
  country: 'Brasil',
  location: 'Petrópolis e Região Serrana - RJ',
  businessHours: {
    pt: 'Seg. a Sex. das 08h às 18h | Sáb. das 08h às 12h',
    en: 'Mon to Fri: 8am - 6pm | Sat: 8am - 12pm',
  },
} as const;

export const nav = {
  pt: [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Jornada' },
    { id: 'contact', label: 'Contato' },
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ],
} as const;

export const content = {
  meta: {
    title: {
      pt: 'Victor Donola Ferreira · Full-Stack Developer & Soluções em TI · VD Tech & Suporte',
      en: 'Victor Donola Ferreira · Full-Stack Developer & IT Solutions · VD Tech & Suporte',
    },
    description: {
      pt: 'Desenvolvedor Full-Stack e Fundador da VD Tech & Suporte (CNPJ 69.676.193/0001-00). Construo aplicações web modernas com Astro, React e Next.js, com infraestrutura sólida e suporte corporativo de TI com emissão de NFS-e.',
      en: 'Full-Stack Developer and Founder of VD Tech & Suporte. I build modern web applications with Astro, React, and Next.js, backed by reliable IT infrastructure and corporate tech support.',
    },
  },

  loading: {
    pt: 'Construindo experiências digitais',
    en: 'Building digital experiences',
  },

  hero: {
    badge: {
      pt: 'Desenvolvedor Full-Stack & Soluções em TI',
      en: 'Full-Stack Developer & IT Solutions',
    },
    role: {
      pt: 'Desenvolvedor Full-Stack & Fundador da VD Tech & Suporte',
      en: 'Full-Stack Developer & Founder of VD Tech & Suporte',
    },
    name: 'Victor Donola Ferreira',
    headline: {
      pt: 'Construo aplicações web modernas do front-end refinado ao back-end estruturado.',
      en: 'I build modern web applications from refined front-end to structured back-end.',
    },
    sub: {
      pt: 'Sites ultrarrápidos que colocam sua empresa no topo do Google e suporte de TI completo para seu negócio nunca parar — da rede Wi-Fi e computadores de caixa à nuvem, com contrato e Nota Fiscal (NFS-e).',
      en: 'Ultra-fast websites that rank your business on Google and end-to-end IT support so your operation never stops — from Wi-Fi and POS workstations to cloud infrastructure, with formal contracts and official invoices (NFS-e).',
    },
    cta: {
      projects: { pt: 'Ver projetos', en: 'View projects' },
      services: { pt: 'Conhecer serviços', en: 'Explore services' },
      contact: { pt: 'Entrar em contato', en: 'Get in touch' },
      cv: { pt: 'Baixar CV', en: 'Download CV' },
    },
    location: {
      pt: 'Petrópolis - RJ · Atendimento presencial e remoto',
      en: 'Petrópolis, RJ (Brazil) · On-site & remote service',
    },
  },

  about: {
    label: { pt: 'Sobre', en: 'About' },
    title: {
      pt: 'Engenharia de software com visão de produto e infraestrutura.',
      en: 'Software engineering with a product mindset and infrastructure focus.',
    },
    paragraphs: {
      pt: [
        'Sou desenvolvedor full-stack e responsável técnico pela VD Tech & Suporte. Uno a construção de produtos digitais bem acabados — utilizando React, Next.js, Astro e TypeScript no front-end e ecossistema Node.js e Java/Spring Boot no back-end — à gestão de infraestrutura técnica, redes locais e suporte corporativo de TI.',
        'Acredito que software de excelência vai além da interface: depende de estabilidade operacional, escolhas arquiteturais conscientes e confiabilidade na ponta final. Atendo desde projetos de software sob medida até pequenos comércios e empresas que buscam presença web ágil, segurança de dados e suporte contínuo com emissão de Nota Fiscal (NFS-e).',
      ],
      en: [
        "I'm a full-stack developer and the technical lead at VD Tech & Suporte. I combine craft-oriented digital product development — using React, Next.js, Astro, and TypeScript on the front-end, and Node.js with Java/Spring Boot on the back-end — with hands-on IT infrastructure, networking, and corporate technical support.",
        'I believe great software goes beyond the interface: it relies on operational stability, intentional architecture, and reliability. I serve both custom software projects and regional businesses seeking fast web platforms, data security, and ongoing technical support with full fiscal compliance (NFS-e).',
      ],
    },
    pillars: {
      pt: [
        {
          title: 'Front-end refinado & Alta Performance',
          body: 'Interfaces responsivas, acessíveis, otimizadas para Core Web Vitals (95+ PageSpeed) e focadas em conversão e retenção.',
        },
        {
          title: 'Back-end estruturado & Infraestrutura',
          body: 'APIs limpas, modelagem coerente de dados, configuração de servidores, DNS, certificados SSL e segurança em nuvem.',
        },
        {
          title: 'Atendimento Corporativo & Suporte Técnico',
          body: 'Operação formalizada com contratos transparentes, conformidade com a LGPD, rotinas de backup e emissão de NFS-e.',
        },
      ],
      en: [
        {
          title: 'Refined Front-end & High Performance',
          body: 'Responsive, accessible interfaces optimized for Core Web Vitals (95+ PageSpeed) designed for conversion and retention.',
        },
        {
          title: 'Structured Back-end & Infrastructure',
          body: 'Clean APIs, coherent data modeling, server deployment, DNS management, SSL certificates, and cloud security.',
        },
        {
          title: 'Corporate IT Support & Reliability',
          body: 'Fully formalized operations with clear contracts, LGPD compliance, secure backup routines, and official invoicing (NFS-e).',
        },
      ],
    },
  },

  services: {
    label: { pt: 'Serviços & Soluções', en: 'Services & Solutions' },
    title: {
      pt: 'Tecnologia que gera vendas na ponta e estabilidade na operação.',
      en: 'Technology that drives sales and keeps your operation running.',
    },
    sub: {
      pt: 'Do site que atrai clientes todos os dias no Google ao suporte técnico que mantém computadores, redes e caixas funcionando sem interrupções.',
      en: 'From high-converting websites ranking on Google to reliable IT support keeping workstations, networks, and POS systems running smoothly.',
    },
    nfsBadge: {
      pt: 'Emitimos Nota Fiscal Eletrônica (NFS-e) · Contratos PJ & Atendimento Avulso',
      en: 'Official Electronic Invoice (NFS-e) · B2B Contracts & On-Demand Support',
    },
    items: {
      pt: [
        {
          number: '01',
          tag: 'Presença Digital & Vendas',
          title: 'Sites, Landing Pages & SEO Local',
          description:
            'Páginas ultrarrápidas projetadas para transformar visitantes e cliques de anúncios em orçamentos diretos no seu WhatsApp.',
          deliverables: [
            'Landing Pages de alta conversão para Google Ads e Meta Ads',
            'Sites institucionais modernos para clínicas, escritórios e empresas',
            'SEO Local e configuração técnica para topo do Google Maps',
            'Sistemas web sob medida, painéis e integrações de API',
          ],
          ctaLabel: 'Solicitar orçamento de site',
          whatsappLink:
            'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Vim%20pelo%20site%20da%20VD%20Tech%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20Site%20ou%20Landing%20Page.',
        },
        {
          number: '02',
          tag: 'TI Presencial & Remoto',
          title: 'Suporte Técnico, Estações & PDV',
          description:
            'Manutenção rápida e segura para lojas, consultórios e escritórios em Petrópolis e região não perderem vendas por computador parado.',
          deliverables: [
            'Formatação limpa com backup e preservação total de arquivos',
            'Upgrades de performance (SSD NVMe e memória RAM) e limpeza física',
            'Configuração de impressoras em rede, scanners e sistemas de caixa/PDV',
            'Remoção de vírus/malwares e rotinas automáticas de backup em nuvem/local',
          ],
          ctaLabel: 'Solicitar suporte técnico',
          whatsappLink:
            'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Preciso%20de%20suporte%20t%C3%A9cnico%20para%20computadores%20ou%20sistema%20da%20minha%20empresa.',
        },
        {
          number: '03',
          tag: 'Redes & Cloud B2B',
          title: 'Redes Wi-Fi, Cabeamento & E-mail Corporativo',
          description:
            'Conectividade estável sem quedas de sinal e infraestrutura digital profissional configurada de ponta a ponta.',
          deliverables: [
            'Wi-Fi corporativo de alta estabilidade e fim dos "pontos cegos" de sinal',
            'Organização de cabeamento estruturado, switches e roteadores',
            'E-mails profissionais (@suaempresa.com.br) via Google Workspace',
            'Gestão de domínios, DNS, certificados SSL e hospedagem em nuvem',
          ],
          ctaLabel: 'Avaliar minha rede / infra',
          whatsappLink:
            'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20rede%20Wi-Fi%2C%20cabeamento%20ou%20e-mail%20corporativo.',
        },
      ],
      en: [
        {
          number: '01',
          tag: 'Digital Presence & Sales',
          title: 'Websites, Landing Pages & Local SEO',
          description:
            'Ultra-fast pages engineered to turn visitors and ad clicks into qualified leads straight on your WhatsApp.',
          deliverables: [
            'High-converting Landing Pages for Google Ads & Meta Ads',
            'Modern corporate websites for clinics, law firms, and businesses',
            'Local SEO and Google Business Profile optimization for top rankings',
            'Custom web applications, dashboards, and API integrations',
          ],
          ctaLabel: 'Request website quote',
          whatsappLink:
            'https://wa.me/5524992663842?text=Hello%20V%C3%ADctor!%20I%20would%20like%20a%20quote%20for%20a%20Website%20or%20Landing%20Page.',
        },
        {
          number: '02',
          tag: 'On-Site & Remote IT',
          title: 'IT Support, Workstations & POS',
          description:
            'Fast, reliable maintenance for shops, clinics, and offices so your business never loses sales to downtime.',
          deliverables: [
            'Clean OS formatting with full data backup and preservation',
            'Hardware upgrades (SSD & RAM) and preventive thermal maintenance',
            'Network printers, scanners, and Point-of-Sale (POS) workstation setup',
            'Malware removal and automated cloud/local backup routines',
          ],
          ctaLabel: 'Request IT support',
          whatsappLink:
            'https://wa.me/5524992663842?text=Hello%20V%C3%ADctor!%20I%20need%20technical%20IT%20support%20for%20my%20business.',
        },
        {
          number: '03',
          tag: 'Networking & B2B Cloud',
          title: 'Business Wi-Fi, Cabling & Workspaces',
          description:
            'Rock-solid connectivity without dead zones and professional cloud infrastructure configured end to end.',
          deliverables: [
            'High-density corporate Wi-Fi and dead-zone elimination',
            'Structured cabling organization, routers, and switches setup',
            'Professional business email (@yourcompany.com) via Google Workspace',
            'Domain registration, DNS management, SSL security, and cloud hosting',
          ],
          ctaLabel: 'Evaluate my network / infra',
          whatsappLink:
            'https://wa.me/5524992663842?text=Hello%20V%C3%ADctor!%20I%20would%20like%20a%20quote%20for%20networking%2C%20Wi-Fi%2C%20or%20cloud%20setup.',
        },
      ],
    },
    plans: {
      title: {
        pt: 'Modalidades de Atendimento',
        en: 'Service Models',
      },
      sub: {
        pt: 'Escolha o formato ideal para o momento da sua empresa — do chamado pontual ao acompanhamento contínuo.',
        en: 'Choose the right format for your business — from on-demand calls to ongoing preventive management.',
      },
      items: {
        pt: [
          {
            badge: 'Pontual / Emergencial',
            name: 'Chamado Técnico Avulso',
            priceHint: 'Por intervenção / máquina',
            description:
              'Para resolver urgências sem mensalidade: computador lento, formatação, impressora fora da rede ou falha no Wi-Fi.',
            features: [
              'Diagnóstico rápido presencial (Petrópolis) ou remoto',
              'Orçamento prévio aprovado antes da execução',
              'Garantia técnica do serviço prestado',
              'Emissão de Nota Fiscal (NFS-e)',
            ],
            featured: false,
            cta: 'Abrir chamado avulso',
            whatsappLink:
              'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Preciso%20de%20um%20atendimento%20t%C3%A9cnico%20avulso%20para%20minha%20empresa.',
          },
          {
            badge: 'Mais escolhido por empresas',
            name: 'Contrato Mensal de TI',
            priceHint: 'Planos mensais fixos para PJ',
            description:
              'Seu departamento de TI terceirizado com custo previsível. Prevenção de falhas, backups monitorados e prioridade no suporte.',
            features: [
              'Atendimento prioritário remoto e presencial com SLA',
              'Manutenção preventiva periódica das estações e rede',
              'Monitoramento de backups e segurança (antivírus/LGPD)',
              'Contrato formal e NFS-e mensal para contabilidade',
            ],
            featured: true,
            cta: 'Consultar plano mensal',
            whatsappLink:
              'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Tenho%20interesse%20no%20Contrato%20Mensal%20de%20Suporte%20de%20TI%20para%20minha%20empresa.',
          },
          {
            badge: 'Escopo Fechado',
            name: 'Projetos Web & Sites',
            priceHint: 'Entrega chave na mão',
            description:
              'Desenvolvimento completo da sua Landing Page ou site institucional com alta performance (95+ PageSpeed) e foco em vendas.',
            features: [
              'Design exclusivo e responsivo (mobile-first)',
              'Integração com WhatsApp, formulários e Google Maps',
              'Configuração completa de domínio, DNS e HTTPS',
              'Entrega com treinamento, garantia e Nota Fiscal',
            ],
            featured: false,
            cta: 'Orçar projeto web',
            whatsappLink:
              'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20desenvolver%20um%20Site%20ou%20Landing%20Page.',
          },
        ],
        en: [
          {
            badge: 'On-Demand / Urgent',
            name: 'Single Tech Call',
            priceHint: 'Per workstation / intervention',
            description:
              'Resolve urgent issues with no monthly fee: slow PCs, OS formatting, network printer issues, or Wi-Fi drops.',
            features: [
              'Fast on-site (Petrópolis) or remote diagnostics',
              'Upfront transparent quote before any work',
              'Service warranty included',
              'Official Invoice (NFS-e) issued',
            ],
            featured: false,
            cta: 'Request single call',
            whatsappLink:
              'https://wa.me/5524992663842?text=Hello%20V%C3%ADctor!%20I%20need%20an%20on-demand%20IT%20support%20call.',
          },
          {
            badge: 'Most popular for SMEs',
            name: 'Monthly IT Retainer',
            priceHint: 'Fixed monthly B2B plans',
            description:
              'Your outsourced IT department at a predictable cost. Preventive maintenance, monitored backups, and priority SLA.',
            features: [
              'Priority remote and on-site support with SLA',
              'Scheduled preventive maintenance for PCs & LAN',
              'Monitored backups and endpoint security (LGPD)',
              'Formal B2B contract and monthly invoice (NFS-e)',
            ],
            featured: true,
            cta: 'Check monthly plan',
            whatsappLink:
              'https://wa.me/5524992663842?text=Hello%20V%C3%ADctor!%20I%20am%20interested%20in%20a%20Monthly%20IT%20Support%20plan%20for%20my%20company.',
          },
          {
            badge: 'Fixed Scope',
            name: 'Web Projects & Sites',
            priceHint: 'Turnkey delivery',
            description:
              'End-to-end development of your high-converting Landing Page or corporate site with 95+ PageSpeed scores.',
            features: [
              'Bespoke mobile-first responsive design',
              'Direct WhatsApp, lead forms & Google Maps setup',
              'Complete domain, DNS, and SSL configuration',
              'Handover with warranty and official invoice',
            ],
            featured: false,
            cta: 'Quote web project',
            whatsappLink:
              'https://wa.me/5524992663842?text=Hello%20V%C3%ADctor!%20I%20would%20like%20to%20quote%20a%20Website%20or%20Landing%20Page%20project.',
          },
        ],
      },
    },
    process: {
      title: {
        pt: 'Como funciona a contratação',
        en: 'How we work together',
      },
      steps: {
        pt: [
          {
            step: '01',
            title: 'Diagnóstico Rápido',
            body: 'Você chama no WhatsApp, explica a necessidade (suporte, rede ou site) e fazemos uma triagem ágil sem compromisso.',
          },
          {
            step: '02',
            title: 'Orçamento Transparente',
            body: 'Receba uma proposta clara com escopo, prazo de entrega e valor fechado — sem surpresas ou custos ocultos.',
          },
          {
            step: '03',
            title: 'Execução Técnica Ágil',
            body: 'Atendimento presencial/remoto ou desenvolvimento do projeto seguindo padrões rigorosos de performance e segurança.',
          },
          {
            step: '04',
            title: 'Garantia & Nota Fiscal',
            body: 'Entrega validada, emissão da Nota Fiscal Eletrônica (NFS-e) e acompanhamento pós-serviço.',
          },
        ],
        en: [
          {
            step: '01',
            title: 'Fast Diagnostics',
            body: 'Reach out on WhatsApp, describe your need (IT support, network, or website), and get a quick assessment.',
          },
          {
            step: '02',
            title: 'Transparent Quote',
            body: 'Receive a clear proposal with defined scope, timeline, and fixed pricing — zero hidden fees.',
          },
          {
            step: '03',
            title: 'Agile Execution',
            body: 'On-site/remote intervention or web development following strict performance and security standards.',
          },
          {
            step: '04',
            title: 'Warranty & Invoice',
            body: 'Validated delivery, official electronic invoice (NFS-e), and post-service support.',
          },
        ],
      },
    },
  },

  stack: {
    label: { pt: 'Stack', en: 'Stack' },
    title: {
      pt: 'Ferramentas que possuo amplo conhecimento.',
      en: 'Tools that I have extensive knowledge of.',
    },
    sub: {
      pt: 'Selecionadas pela ergonomia, performance, maturidade e experiência.',
      en: 'Picked for ergonomics, performance, maturity and experience.',
    },
    showAll: { pt: 'Ver tudo', en: 'Show all' },
  },

  projects: {
    label: { pt: 'Projetos', en: 'Projects' },
    title: {
      pt: 'Trabalhos selecionados.',
      en: 'Selected work.',
    },
    sub: {
      pt: 'Uma amostra do tipo de produto que gosto de construir.',
      en: 'A sample of the kind of product I enjoy building.',
    },
    actions: {
      demo: { pt: 'Demo', en: 'Demo' },
      code: { pt: 'Código', en: 'Code' },
    },
    status: {
      inProgress: { pt: 'Em andamento', en: 'In progress' },
    },
  },

  experience: {
    label: { pt: 'Jornada', en: 'Journey' },
    title: {
      pt: 'Trajetória profissional.',
      en: 'Professional path.',
    },
    sub: {
      pt: 'Por onde passei e o foco técnico de cada parada.',
      en: 'Where I have worked and the technical focus of each stop.',
    },
    highlightLabel: { pt: 'Projeto destaque', en: 'Featured project' },
    items: {
      pt: [
        {
          chapter: '2026 - atual',
          company: 'VD Tech & Suporte',
          title: 'Fundador & Desenvolvedor Full-Stack / Soluções em TI',
          bullets: [
            'Desenvolvimento de landing pages e plataformas institucionais com pontuações 95+ no PageSpeed e ranqueamento no Google Maps.',
            'Gestão de infraestrutura: implantação de domínios, DNS, Google Workspace corporativo, certificados SSL e pipelines de deploy contínuo via Vercel e Cloudflare.',
            'Suporte de TI presencial e remoto para comércios e escritórios: redes locais (cabeadas e Wi-Fi), salvaguarda de dados/backups e manutenção preventiva.',
            'Operação formal com emissão de NFS-e e conformidade LGPD.',
          ],
          highlight: {
            name: 'Ecossistema Web & Suporte Integrado',
            description:
              'Solução completa para empresas: unindo presença digital veloz em Astro/React com sustentação contínua de infraestrutura, redes e estações de trabalho.',
          },
          stack: [
            'Astro',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'Vercel',
            'Redes & Wi-Fi',
            'SEO Local',
            'Git',
          ],
        },
        {
          chapter: 'Jun 2022 - Dez 2025',
          company: 'Autônomo',
          title: 'Desenvolvedor Web Full-Stack & Suporte de TI',
          bullets: [
            'Engenharia de Software Web: Arquitetura e desenvolvimento de aplicações ponta a ponta com foco em performance e escalabilidade.',
            'Infraestrutura & Cloud: Configuração de deploys contínuos, gestão de servidores e DNS (Vercel), chaves SSH e certificados SSL.',
            'Suporte & Redes: Manutenção preventiva e corretiva de hardware, diagnóstico e configuração de redes locais (LAN/Wi-Fi).',
            'Gestão de Projetos & Clientes: Atendimento direto ao cliente, levantamento de requisitos técnicos e entregas ágeis utilizando Git/Scrum.',
          ],
          highlight: {
            name: 'Soluções Web Ponta a Ponta',
            description:
              'Desenvolvimento e sustentação de sistemas web e APIs customizadas para clientes finais, integrando frontend, backend e rotinas de automação.',
          },
          stack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'PHP',
            'Python',
            'Node.js',
            'Vercel',
            'Git',
            'Linux',
            'Redes',
          ],
        },
      ],
      en: [
        {
          chapter: '2026 - present',
          company: 'VD Tech & Suporte',
          title: 'Founder & Full-Stack Developer / IT Solutions',
          bullets: [
            'Built high-conversion landing pages, corporate websites, and digital catalogs for businesses and regional companies.',
            'Technical optimization for Local SEO and Core Web Vitals (95+ PageSpeed scores), improving search visibility and Google Business Profile rankings.',
            'Digital infrastructure consulting: domain management, DNS records, Google Workspace setup, SSL security, and CI/CD pipelines via Vercel & Cloudflare.',
            'Corporate IT support for SMEs: preventive maintenance, local network optimization (LAN & Wi-Fi), and secure data backup routines.',
            'Fully compliant business operations with clear service contracts, LGPD data privacy, and electronic fiscal invoicing (NFS-e).',
          ],
          highlight: {
            name: 'Integrated Web & IT Support Ecosystem',
            description:
              'End-to-end digital presence and operational support: pairing blazing-fast Astro/React interfaces with reliable IT infrastructure.',
          },
          stack: [
            'Astro',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'Vercel',
            'Networking',
            'Local SEO',
            'Git',
          ],
        },
        {
          chapter: 'Jun 2022 - Dec 2025',
          company: 'Freelance / Self-Employed',
          title: 'Full-Stack Web Developer & IT Support',
          bullets: [
            'Web Software Engineering: End-to-end architecture and development of web applications with a focus on performance and scalability.',
            'Infrastructure & Cloud: Continuous deployment setup, server and DNS management (Vercel), SSH keys, and SSL certificates.',
            'IT Support & Networking: Preventive and corrective hardware maintenance, local network troubleshooting, and configuration (LAN/Wi-Fi).',
            'Project & Client Management: Direct client consulting, technical requirements gathering, and agile project deliveries using Git/Scrum.',
          ],
          highlight: {
            name: 'End-to-End Web Solutions',
            description:
              'Development and maintenance of custom web systems and APIs for direct clients, integrating frontend, backend, and automation routines.',
          },
          stack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'PHP',
            'Python',
            'Node.js',
            'Vercel',
            'Git',
            'Linux',
            'Networking',
          ],
        },
      ],
    },
  },

  contact: {
    label: { pt: 'Contato', en: 'Contact' },
    title: {
      pt: 'Vamos construir algo juntos?',
      en: "Let's build something together?",
    },
    sub: {
      pt: 'Aberto a novos projetos, consultoria técnica em infraestrutura e propostas de suporte corporativo em TI.',
      en: 'Open to new projects, technical infrastructure consulting and corporate IT support agreements.',
    },
    channels: {
      commercial: {
        label: { pt: 'Projetos & Comercial', en: 'Projects & Sales' },
        email: 'contato@vdonoladev.com.br',
      },
      support: {
        label: { pt: 'Atendimento Técnico & Chamados', en: 'Helpdesk & Support' },
        email: 'suporte@vdonoladev.com.br',
      },
      whatsapp: {
        label: { pt: 'WhatsApp Comercial', en: 'Business WhatsApp' },
        display: '+55 (24) 99266-3842',
        link: 'https://wa.me/5524992663842?text=Ol%C3%A1%2C%20V%C3%ADctor!%20Vim%20pelo%20site%20da%20VD%20Tech%20e%20gostaria%20de%20um%20or%C3%A7amento.',
      },
      location: {
        label: { pt: 'Localização', en: 'Location' },
        value: {
          pt: 'Petrópolis e Região Serrana - RJ',
          en: 'Petrópolis & Mountain Region - RJ (Brazil)',
        },
      },
    },
    cta: {
      email: { pt: 'Enviar e-mail', en: 'Send email' },
      whatsapp: { pt: 'Chamar no WhatsApp', en: 'Chat on WhatsApp' },
      linkedin: { pt: 'LinkedIn', en: 'LinkedIn' },
      github: { pt: 'GitHub', en: 'GitHub' },
    },
    modal: {
      title: { pt: 'Enviar mensagem', en: 'Send a message' },
      intro: {
        pt: 'Preencha os campos abaixo - a mensagem cai direto no meu e-mail.',
        en: 'Fill in the fields below - your message lands straight in my inbox.',
      },
      fields: {
        name: { pt: 'Nome', en: 'Name' },
        email: { pt: 'Seu e-mail', en: 'Your email' },
        subject: { pt: 'Assunto', en: 'Subject' },
        message: { pt: 'Mensagem', en: 'Message' },
      },
      placeholders: {
        name: { pt: 'Como você se chama', en: 'What should I call you' },
        email: { pt: 'voce@exemplo.com', en: 'you@example.com' },
        subject: { pt: 'Sobre o que quer falar (opcional)', en: 'What is this about (optional)' },
        message: { pt: 'Conte um pouco sobre o projeto ou suporte de TI que sua empresa precisa.', en: 'Tell me about your project or the IT support your business needs.' },
      },
      defaultSubject: {
        pt: 'Contato pelo portfólio',
        en: 'Contact from the portfolio',
      },
      cancel: { pt: 'Cancelar', en: 'Cancel' },
      send: { pt: 'Enviar', en: 'Send' },
      sending: { pt: 'Enviando…', en: 'Sending…' },
      done: { pt: 'Fechar', en: 'Close' },
      hint: {
        pt: 'Respondo normalmente em até 24 horas úteis.',
        en: 'I usually reply within 24 business hours.',
      },
      success: {
        title: { pt: 'Mensagem enviada', en: 'Message sent' },
        body: {
          pt: 'Obrigado por entrar em contato. Te respondo em breve.',
          en: 'Thanks for reaching out - I will get back to you soon.',
        },
      },
      sendError: {
        pt: 'Não consegui enviar agora. Tente novamente em alguns instantes.',
        en: 'Could not send right now. Please try again in a moment.',
      },
      counter: {
        pt: 'caracteres',
        en: 'characters',
      },
      errors: {
        name: {
          required: { pt: 'Informe seu nome.', en: 'Please tell me your name.' },
          tooShort: { pt: 'Mínimo de 2 caracteres.', en: 'At least 2 characters.' },
          tooLong: { pt: 'Máximo de 80 caracteres.', en: 'Up to 80 characters.' },
          invalid: {
            pt: 'Use apenas letras, espaços, hífens ou apóstrofos.',
            en: 'Only letters, spaces, hyphens or apostrophes.',
          },
        },
        email: {
          required: { pt: 'Informe seu e-mail.', en: 'Please share your email.' },
          invalid: {
            pt: 'E-mail em formato inválido.',
            en: 'Please enter a valid email address.',
          },
        },
        subject: {
          tooLong: { pt: 'Máximo de 120 caracteres.', en: 'Up to 120 characters.' },
        },
        message: {
          required: { pt: 'Escreva uma mensagem.', en: 'Please write a message.' },
          tooShort: {
            pt: 'A mensagem precisa ter pelo menos 10 caracteres.',
            en: 'Message needs at least 10 characters.',
          },
          tooLong: { pt: 'Máximo de 2000 caracteres.', en: 'Up to 2000 characters.' },
        },
      },
    },
  },

  footer: {
    company: 'VD Tech & Suporte',
    cnpj: '69.676.193/0001-00',
    invoiceNotice: {
      pt: 'Emitimos Nota Fiscal Eletrônica (NFS-e)',
      en: 'Official Invoice (NFS-e) Issued',
    },
    role: { pt: 'Desenvolvedor Full-Stack & Soluções em TI', en: 'Full-Stack Developer & IT Solutions' },
    rights: {
      pt: 'Todos os direitos reservados.',
      en: 'All rights reserved.',
    },
  },
} as const;