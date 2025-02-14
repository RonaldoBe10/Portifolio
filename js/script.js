// Objeto de Traduções
const translations = {
    pt: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      services: "Serviços",
      testimonials: "Depoimentos",
      blog: "Blog",
      contact: "Contato",
      heroTitle: "Otimização de Processos & Gestão Logística",
      heroSubtitle: "Soluções inteligentes para desafios complexos",
      aboutTitle: "Sobre Mim",
      aboutText: "Sou formado em Logística e atualmente curso Engenharia de Produção, combinando conhecimento teórico e prático para otimizar processos e melhorar a eficiência operacional. Minha paixão pela inovação e pela resolução de desafios complexos me impulsiona a buscar soluções estratégicas que promovam a integração de cadeias de suprimentos e a melhoria contínua nos ambientes industriais. Com projetos desenvolvidos em parceria com grandes empresas, estou comprometido em transformar desafios logísticos em oportunidades de crescimento e aprimoramento.",
      skillsTitle: "Habilidades Técnicas",
      skill1: "Gestão da Cadeia de Suprimentos",
      skill2: "Otimização de Processos",
      skill3: "Análise de Dados",
      skill4: "Consultoria Estratégica",
      projectsTitle: "Projetos Recentes",
      servicesTitle: "Serviços",
      service1: "Logística Integrada",
      service1Desc: "Soluções completas para gerenciamento da cadeia de suprimentos.",
      service2: "Otimização de Processos",
      service2Desc: "Melhoria contínua dos processos produtivos e logísticos.",
      service3: "Consultoria Estratégica",
      service3Desc: "Assessoria para implementação de estratégias eficientes.",
      testimonialsTitle: "Depoimentos",
      testimonial1: "Excelente profissional, transformou nossa logística!",
      testimonial2: "A otimização de processos foi decisiva para o crescimento da nossa empresa.",
      blogTitle: "Blog",
      blogPost1Title: "Tendências em Logística 2025",
      blogPost1Excerpt: "Descubra as principais inovações que estão transformando a logística global.",
      blogPost2Title: "Como Otimizar Processos Produtivos",
      blogPost2Excerpt: "Estratégias eficazes para aumentar a eficiência industrial.",
      readMore: "Ler Mais",
      contactTitle: "Entre em Contato",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu e-mail",
      messagePlaceholder: "Sua mensagem",
      sendButton: "Enviar Mensagem"
    },
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      heroTitle: "Process Optimization & Logistics Management",
      heroSubtitle: "Smart solutions for complex challenges",
      aboutTitle: "About Me",
      aboutText: "I hold a degree in Logistics and am currently pursuing Production Engineering, combining both theoretical and practical knowledge to optimize processes and improve operational efficiency. My passion for innovation and solving complex challenges drives me to create strategic solutions that integrate supply chains and continuously enhance industrial environments. Through projects developed with major companies, I am committed to turning logistical challenges into opportunities for growth and improvement.",
      skillsTitle: "Technical Skills",
      skill1: "Supply Chain Management",
      skill2: "Process Optimization",
      skill3: "Data Analysis",
      skill4: "Strategic Consulting",
      projectsTitle: "Recent Projects",
      servicesTitle: "Services",
      service1: "Integrated Logistics",
      service1Desc: "Comprehensive solutions for supply chain management.",
      service2: "Process Optimization",
      service2Desc: "Continuous improvement of production and logistics processes.",
      service3: "Strategic Consulting",
      service3Desc: "Advisory for efficient strategy implementation.",
      testimonialsTitle: "Testimonials",
      testimonial1: "Excellent professional, transformed our logistics!",
      testimonial2: "Process optimization was decisive for our company's growth.",
      blogTitle: "Blog",
      blogPost1Title: "Logistics Trends 2025",
      blogPost1Excerpt: "Discover the key innovations transforming global logistics.",
      blogPost2Title: "How to Optimize Production Processes",
      blogPost2Excerpt: "Effective strategies to boost industrial efficiency.",
      readMore: "Read More",
      contactTitle: "Contact Us",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      sendButton: "Send Message"
    }
  };
  
  // Sistema de Tema
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.innerHTML = document.body.dataset.theme === 'dark'
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });
  
  // Sistema de Idioma
  const languageSelector = document.getElementById('language-selector');
  languageSelector.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = translations[lang][el.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = translations[lang][el.getAttribute('data-i18n-placeholder')];
    });
  }
  
  // Dados dos Projetos (com categorias para filtro)
  const projects = [
    {
      title: "Dashboard Interativo de Transporte no Brasil",
      description: "Análise aprofundada da distribuição dos modais de transporte no Brasil, com dados atualizados até 2024 e projeções estratégicas para 2025.",
      image: "/images/Imagens modais de transporte.jpeg",
      details: "<p>Este projeto apresenta um dashboard interativo que integra informações detalhadas sobre os principais modais de transporte no Brasil, destacando desafios, oportunidades e projeções estratégicas. Com base em fontes oficiais como DNIT, ANTT, ANTAQ, CNT e IBGE, a plataforma fornece uma visão abrangente da infraestrutura logística nacional. A ferramenta é voltada para gestores, formuladores de políticas públicas e empresas do setor, permitindo uma tomada de decisão mais embasada e eficiente.</p>",
      category: "logistica",
      url: "https://ronaldobe10.github.io/Portifolio/mapamoldal.html"
    },
    
    {
      title: "Automação Industrial",
      description: "Projeto voltado para a automação de processos em linha de produção.",
      image: " ",
      details: "<p>Projeto de automação que integrou sistemas robóticos e controle de processos, aumentando a produtividade e reduzindo erros operacionais.</p>",
      category: "engenharia",
      url: ""
    }
      
  ];
  
  function loadProjects(filter = "all") {
    const grid = document.querySelector('.projects-grid');
    let filteredProjects = projects;
    if (filter !== "all") {
      filteredProjects = projects.filter(p => p.category === filter);
    }
    grid.innerHTML = filteredProjects.map(project => `
      <article class="project-card" data-url="${project.url || '#'}">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="card-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <button class="view-project" data-project="${project.title}">Ver Projeto</button>
        </div>
      </article>
    `).join('');
  }
  
  document.querySelector('.projects-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.project-card'); // Encontra o card mais próximo
    const button = e.target.closest('.view-project'); // Verifica se o clique foi no botão
  
    if (button) {
      // Se o clique foi no botão "Ver Projeto", abre o modal
      e.stopPropagation(); // Impede que o clique no botão propague para o card
      const projectTitle = button.getAttribute('data-project');
      const project = projects.find(p => p.title === projectTitle);
      if (project) {
        openModal(project);
      }
    } else if (card) {
      // Se o clique foi no card (mas não no botão), redireciona para a página do projeto
      const projectUrl = card.getAttribute('data-url');
      if (projectUrl && projectUrl !== "#") {
        window.location.href = projectUrl;
      }
    }
  });
  
  // Filtro de Projetos
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadProjects(btn.getAttribute('data-filter'));
    });
  });
  
  // Modal para Detalhes do Projeto
  document.querySelector('.projects-grid').addEventListener('click', (e) => {
    if (e.target.classList.contains('view-project')) {
      const projectTitle = e.target.getAttribute('data-project');
      const project = projects.find(p => p.title === projectTitle);
      if (project) {
        openModal(project);
      }
    }
  });
  document.querySelector('.close-modal').addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    const modal = document.querySelector('.modal');
    if (e.target === modal) {
      closeModal();
    }
  });
  function openModal(project) {
    const modal = document.querySelector('.modal');
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-body').innerHTML = project.details;
    modal.style.display = 'flex';
  }
  function closeModal() {
    document.querySelector('.modal').style.display = 'none';
  }
  
  // Menu Mobile - Off-Canvas
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle('active');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
    });
  });
  // Fechar o menu mobile ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      mobileNav.classList.remove('active');
    }
  });
  
  // Botão "Back to Top"
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Inicialização
  document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setLanguage(languageSelector.value);
  });
  
