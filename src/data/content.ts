/**
 * All UI copy lives here. Edit text in PT/EN side-by-side.
 * Keys are referenced in components via the useLanguage hook.
 */

export type Language = 'pt' | 'en';

export const links = {
  github: 'https://github.com/vdonoladev',
  linkedin: 'https://www.linkedin.com/in/vdonoladev/',
  email: 'contato@vdonoladev.com.br',
  cv: '/vdonoladev-cv.pdf',
  contactForm: 'https://formspree.io/f/mljeevqg',
};

export const nav = {
  pt: [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiência' },
    { id: 'contact', label: 'Contato' },
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
} as const;

export const content = {
  meta: {
    title: {
      pt: 'Victor Donola Ferreira · Full-Stack Developer · React, TypeScript, Java & Spring',
      en: 'Victor Donola Ferreira · Full-Stack Developer · React, TypeScript, Java & Spring',
    },
    description: {
      pt: 'Portfólio de Victor Donola Ferreira - Desenvolvedor Full-Stack. Construo aplicações web modernas com React, Next.js, TypeScript, Node.js, Java e Spring Boot.',
      en: 'Portfolio of Victor Donola Ferreira - Full-Stack Developer. I build modern web applications with React, Next.js, TypeScript, Node.js, Java and Spring Boot.',
    },
  },

  loading: {
    pt: 'Construindo experiências digitais',
    en: 'Building digital experiences',
  },

  hero: {
    badge: {
      pt: 'Desenvolvedor Full-Stack',
      en: 'Full-Stack Developer',
    },
    role: {
      pt: 'Desenvolvedor Full-Stack',
      en: 'Full-Stack Developer',
    },
    name: 'Victor Donola Ferreira',
    headline: {
      pt: 'Construo aplicações web modernas do front-end refinado ao back-end estruturado.',
      en: 'I build modern web applications from refined front-end to structured back-end.',
    },
    sub: {
      pt: 'Foco em interfaces bem construídas, código limpo e experiências consistentes em produto.',
      en: 'Focused on well-crafted interfaces, clean code and consistent product experiences.',
    },
    cta: {
      projects: { pt: 'Ver projetos', en: 'View projects' },
      contact: { pt: 'Entrar em contato', en: 'Get in touch' },
      cv: { pt: 'Baixar CV', en: 'Download CV' },
    },
    location: {
      pt: 'Brasil - disponível remoto',
      en: 'Brazil - open to remote',
    },
  },

  about: {
    label: { pt: 'Sobre', en: 'About' },
    title: {
      pt: 'Desenvolvedor focado em qualidade,\nprodutividade e detalhe.',
      en: 'A developer focused on quality,\nproductivity and detail.',
    },
    paragraphs: {
      pt: [
        'Sou desenvolvedor full stack com paixão por construir produtos digitais bem acabados. Trabalho com React, Next.js e TypeScript no front-end e Node.js, Java e Spring Boot no back-end, sempre buscando o equilíbrio entre arquitetura sólida e experiência refinada para o usuário final.',
        'Acredito que software bem feito é o resultado de decisões pequenas e consistentes: escolher a abstração certa, escrever um teste a mais, refinar uma transição até parecer natural. É essa atenção que tento levar para cada entrega.',
      ],
      en: [
        "I'm a full stack developer with a passion for building well-crafted digital products. I work with React, Next.js and TypeScript on the front-end, and Node.js, Java and Spring Boot on the back-end, always looking for the balance between solid architecture and a refined end-user experience.",
        'I believe great software is the result of small, consistent decisions: choosing the right abstraction, writing one more test, refining a transition until it feels natural. That care is what I bring to every delivery.',
      ],
    },
    pillars: {
      pt: [
        {
          title: 'Front-end com atenção a UI/UX',
          body: 'Interfaces responsivas, acessíveis e com microinterações pensadas para o usuário.',
        },
        {
          title: 'Back-end estruturado e escalável',
          body: 'APIs limpas, modelagem coerente e código preparado para crescer com o produto.',
        },
        {
          title: 'Mentalidade de produto',
          body: 'Decisões guiadas por impacto, melhoria contínua e clareza técnica.',
        },
      ],
      en: [
        {
          title: 'Front-end with UI/UX care',
          body: 'Responsive, accessible interfaces with microinteractions designed for the user.',
        },
        {
          title: 'Structured, scalable back-end',
          body: 'Clean APIs, coherent modeling and code ready to grow with the product.',
        },
        {
          title: 'Product mindset',
          body: 'Decisions driven by impact, continuous improvement and technical clarity.',
        },
      ],
    },
  },

  stack: {
    label: { pt: 'Stack', en: 'Stack' },
    title: {
      pt: 'Ferramentas que possuo amplo conhecimento.',
      en: 'Tools that I have extensive knowledge of.',
    },
    sub: {
      pt: 'Selecionadas pela ergonomia, performance, maturidade e experiencia.',
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
      chapter: 'Dez 2025 - atual',
      company: 'Autônomo',
      title: 'Desenvolvedor Web Freelancer',
      bullets: [
        'Criação de landing pages, sites institucionais e catálogos digitais de alta conversão para empresas e comércios locais.',
        'Otimização técnica para SEO Local e Core Web Vitals, garantindo pontuações superiores a 95+ no PageSpeed e melhor posicionamento em buscas geolocalizadas.',
        'Desenvolvimento de interfaces modernas, responsivas e ultrarrápidas com Astro, React e TypeScript, combinando arquitetura estática com componentes interativos.',
        'Implementação de CMS customizados e Headless WordPress, permitindo que os próprios clientes gerenciem conteúdos, blogs e catálogos com autonomia.',
        'Integração direta com APIs de WhatsApp, formulários dinâmicos de captura de leads, Google Maps, Google Analytics 4 e Google Meu Negócio.',
        'Resultados: aumento médio de 40% no carregamento de páginas e taxa superior de retenção e contatos comerciais via mobile.',
      ],
      highlight: {
        name: 'Plataformas Web de Alto Desempenho',
        description:
          'Ecossistema sob medida para pequenas empresas combinando Astro para máxima velocidade, React/TypeScript para interatividade e WordPress como backend de conteúdo.',
      },
      stack: [
        'Astro',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'WordPress',
        'Headless CMS',
        'Node.js',
        'Vercel',
        'SEO Local',
        'Git'
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
        'Flask',
        'Django',
        'Node.js',
        'Vercel',
        'Git',
        'Linux',
        'Redes'
      ],
    },
  ],
  en: [
    {
      chapter: 'Dec 2025 - present',
      company: 'Freelance / Self-Employed',
      title: 'Freelance Web Developer',
      bullets: [
        'Built high-conversion landing pages, institutional websites, and digital product catalogs for local businesses and SMEs.',
        'Technical optimization for Local SEO and Core Web Vitals, achieving 95+ PageSpeed scores and boosting local search ranking visibility.',
        'Engineered fast, modern, and responsive UIs with Astro, React, and TypeScript by leveraging static architecture with interactive components.',
        'Implemented customized CMS setups and Headless WordPress, giving business owners full autonomy to manage blog posts and catalog items.',
        'Integrated WhatsApp lead capture APIs, dynamic contact forms, Google Maps, Google Analytics 4, and Google Business Profile.',
        'Outcomes: 40% average reduction in page load times, driving higher mobile visitor retention and inbound sales leads.',
      ],
      highlight: {
        name: 'High-Performance Web Platforms',
        description:
          'Custom web ecosystem for small businesses combining Astro for top-tier performance, React/TypeScript for dynamic UI, and WordPress as a headless content backend.',
      },
      stack: [
        'Astro',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'WordPress',
        'Headless CMS',
        'Node.js',
        'Vercel',
        'Local SEO',
        'Git'
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
        'Flask',
        'Django',
        'Node.js',
        'Vercel',
        'Git',
        'Linux',
        'Networking'
      ],
    },
  ],
}
  },

  contact: {
    label: { pt: 'Contato', en: 'Contact' },
    title: {
      pt: 'Vamos construir algo juntos?',
      en: "Let's build something together?",
    },
    sub: {
      pt: 'Aberto a oportunidades, projetos sob medida e conversas honestas sobre engenharia e produto.',
      en: 'Open to opportunities, tailored projects and honest conversations about engineering and product.',
    },
    cta: {
      email: { pt: 'Enviar e-mail', en: 'Send email' },
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
        message: { pt: 'Conta um pouco do que você tem em mente.', en: 'Tell me a bit about what you have in mind.' },
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
        pt: 'Costumo responder em até 48 horas.',
        en: 'I usually reply within 48 hours.',
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
    role: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
    rights: {
      pt: 'Todos os direitos reservados.',
      en: 'All rights reserved.',
    },
  },
} as const;
