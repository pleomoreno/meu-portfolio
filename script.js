// script.js

const PROFILE = {
  name: "Leonardo Alves Moreno",
  role: "Desenvolvedor Backend & Web",
  tagline: "Java • Python • JavaScript • HTML • CSS • SQL",
  location: "São Paulo, Brasil",
  email: "leonardoa.moreno07@gmail.com",
  github: "https://github.com/pleomoreno",
  linkedin: "https://www.linkedin.com/in/leomoreno/",
  portfolioRepo: "https://github.com/pleomoreno",
  cvPdfUrl:
      "https://raw.githubusercontent.com/pleomoreno/meu-portfolio/main/Currículo.pdf",
};

const SKILLS = [
  { label: "Java", iconName: "Code2" },
  { label: "Python", iconName: "Terminal" },
  { label: "JavaScript", iconName: "Code2" },
  { label: "HTML", iconName: "Globe" },
  { label: "CSS", iconName: "Globe" },
  { label: "SQL", iconName: "Database" },
];

const PROJECTS = [
  {
      title: "DevBank Front-End",
      desc_pt:
          "Front-end web para sistema bancário, com UI interativa integrada ao back-end.",
      desc_en:
          "Web front-end for a banking system, with an interactive UI integrated with the back-end.",
      desc_es:
          "Front-end web para sistema bancario, con interfaz de usuario interactiva integrada con el back-end.",
      stack: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/Maua-Dev/devbank_leonardoesantiago_front",
  },
  {
      title: "DevBank Back-End",
      desc_pt:
          "Implementação back-end com Python, gerenciando operações bancárias e transações via API.",
      desc_en:
          "Back-end implementation using Python, managing banking operations and transactions via API.",
      desc_es:
          "Implementación back-end con Python, gestionando operaciones bancarias y transacciones a través de API.",
      stack: ["Python", "FastAPI", "SQL"],
      url: "https://github.com/Maua-Dev/devbank_leomoreno",
  },
  {
      title: "Portal Interno DevCommunity",
      desc_pt:
          "Portal interno da entidade DevCommunity do IMT. Participo no back-end, adicionando features e corrigindo bugs.",
      desc_en:
          "Internal portal for the IMT DevCommunity entity. I participate in the back-end, adding features and fixing bugs.",
      desc_es:
          "Portal interno de la entidad DevCommunity del IMT. Participo en el back-end, añadiendo funcionalidades y corrigiendo errores.",
      stack: ["Python", "FastAPI", "SQL"],
      url: "https://github.com/Maua-Dev/port_mss_action",
  },
  {
      title: "Rokuzen Project (Em Desenvolvimento)",
      desc_pt:
          "Projeto front-end em desenvolvimento, mostrando integração avançada de JS, CSS e HTML.",
      desc_en:
          "Front-end project in development, demonstrating advanced JS, CSS, and HTML integration.",
      desc_es:
          "Proyecto front-end en desarrollo, mostrando integración avanzada de JS, CSS y HTML.",
      stack: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/pleomoreno/projeto-rokuzen",
  },
  {
      title: "Millionaire Trivia Game",
      desc_pt:
          "Jogo em Python com Pygame, estrutura modular orientada a objetos e perguntas interativas.",
      desc_en:
          "Python game using Pygame, with a modular object-oriented structure and interactive questions.",
      desc_es:
          "Juego en Python con Pygame, estructura modular orientada a objetos y preguntas interactivas.",
      stack: ["Python", "Pygame"],
      url: "https://github.com/pleomoreno/Jogo_do_Milhao",
  },
];

const DICTIONARY = {
  pt: {
      nav_projects: "Projetos",
      nav_skills: "Skills",
      nav_about: "Sobre",
      nav_contact: "Contato",
      status: "Disponível para freelas e estágio",
      hero_card_title: "Stack & Principais Skills",
      view_repos: "Ver repositórios",
      projects_title: "Projetos em Destaque",
      view_all_github: "Ver tudo no GitHub",
      view_code: "Ver código",
      how_i_work_title: "Como eu trabalho",
      work_list: [
          "Clean code, organização por camadas e POO quando faz sentido.",
          "APIs REST claras, documentação simples e testes básicos.",
          "UI minimalista, focada em acessibilidade e responsividade.",
          "Banco de dados com modelagem objetiva e consultas performáticas.",
      ],
      tools_stack_title: "Stack de Ferramentas",
      about_title: "Sobre mim",
      about_p:
          "Sou estudante de Bacharelado em Ciência da Computação no IMT. Gosto de construir APIs bem estruturadas, brincar com Python e jogar com front-end quando dá. Busco estágio/oportunidades para crescer resolvendo problemas reais.",
      contact_title: "Vamos conversar",
      contact_p:
          "Curtiu o que viu? Me chama para conversar sobre oportunidades, freelas ou collabs.",
      cv_title: "Resumo (CV)",
      cv_p: "Quer meu currículo em PDF?",
      cv_button: "Baixar PDF",
      footer_copy: "Todos os direitos reservados.",
      footer_top: "Topo",
  },
  en: {
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_about: "About",
      nav_contact: "Contact",
      status: "Available for freelance and internship",
      hero_card_title: "Stack & Key Skills",
      view_repos: "View repositories",
      projects_title: "Featured Projects",
      view_all_github: "View all on GitHub",
      view_code: "View code",
      how_i_work_title: "How I Work",
      work_list: [
          "Clean code, layered organization, and OOP when it makes sense.",
          "Clear REST APIs, simple documentation, and basic testing.",
          "Minimalist UI, focused on accessibility and responsiveness.",
          "Database with objective modeling and performant queries.",
      ],
      tools_stack_title: "Tools Stack",
      about_title: "About Me",
      about_p:
          "I'm a Computer Science bachelor's student at IMT. I enjoy building well-structured APIs, working with Python, and dabbling in front-end development when possible. I'm seeking internships/opportunities to grow by solving real-world problems.",
      contact_title: "Let's Connect",
      contact_p:
          "Liked what you saw? Contact me to discuss opportunities, freelancing, or collaborations.",
      cv_title: "Resume (CV)",
      cv_p: "Want my resume in PDF?",
      cv_button: "Download PDF",
      footer_copy: "All rights reserved.",
      footer_top: "Top",
  },
  es: {
      nav_projects: "Proyectos",
      nav_skills: "Habilidades",
      nav_about: "Acerca de",
      nav_contact: "Contacto",
      status: "Disponible para autónomo y pasantía",
      hero_card_title: "Stack & Habilidades Clave",
      view_repos: "Ver repositorios",
      projects_title: "Proyectos Destacados",
      view_all_github: "Ver todo en GitHub",
      view_code: "Ver código",
      how_i_work_title: "Cómo Trabajo",
      work_list: [
          "Código limpio, organización por capas y POO cuando tiene sentido.",
          "APIs REST claras, documentación sencilla y pruebas básicas.",
          "UI minimalista, enfocada en accesibilidad y responsividad.",
          "Base de datos con modelado objetivo y consultas de alto rendimiento.",
      ],
      tools_stack_title: "Stack de Herramientas",
      about_title: "Sobre Mí",
      about_p:
          "Soy estudiante de Licenciatura en Ciencias de la Computación en el IMT. Me gusta construir APIs bien estructuradas, trabajar con Python y jugar con el front-end cuando es posible. Busco pasantías/oportunidades para crecer resolviendo problemas reales.",
      contact_title: "Hablemos",
      contact_p:
          "¿Te gustó lo que viste? Contáctame para hablar sobre oportunidades, trabajos independientes o colaboraciones.",
      cv_title: "Resumen (CV)",
      cv_p: "¿Quieres mi currículum en PDF?",
      cv_button: "Descargar PDF",
      footer_copy: "Todos los derechos reservados.",
      footer_top: "Arriba",
  },
};

let currentLang = localStorage.getItem("lang") || "pt";

window.changeLang = function (lang) {
  if (DICTIONARY[lang]) {
      currentLang = lang;
      localStorage.setItem("lang", lang);
      const app = document.getElementById("app");
      if (app) app.classList.remove("animate-hero-enter");

      renderPortfolio();
  }
};

function T(key) {
  return DICTIONARY[currentLang][key] || DICTIONARY["pt"][key] || `[${key}]`;
}

function getIconHtml(iconName, classNames = "") {
  return `<i data-lucide="${iconName}" class="${classNames}"></i>`;
}

function Button(
  content,
  classNames = "",
  asLink = false,
  href = "#",
  target = ""
) {
  const baseClasses =
      "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4";

  const targetAttr = target ? `target="${target}" rel="noreferrer"` : "";

  if (asLink) {
      return `<a href="${href}" class="${baseClasses} ${classNames}" ${targetAttr}>${content}</a>`;
  }
  return `<button class="${baseClasses} ${classNames}">${content}</button>`;
}

function renderPortfolio() {
  const app = document.getElementById("app");

  const projectsHtml = renderProjectsHtml();

  const htmlContent = `
      <div class="min-h-screen bg-gradient-to-b from-[#0a0a0c] via-[#0c0c14] to-[#0a0a0c] text-zinc-200" data-lang="${currentLang}">

          <header class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
              <div class="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
                  <a href="#home" class="font-semibold tracking-tight text-zinc-100">leomoreno.dev</a>
                  <nav class="hidden sm:flex items-center gap-6 text-sm">
                      <a class="hover:text-white/90" href="#projects">${T(
                          "nav_projects"
                      )}</a>
                      <a class="hover:text-white/90" href="#skills">${T(
                          "nav_skills"
                      )}</a>
                      <a class="hover:text-white/90" href="#about">${T(
                          "nav_about"
                      )}</a>
                      <a class="hover:text-white/90" href="#contact">${T(
                          "nav_contact"
                      )}</a>
                  </nav>
                  <div class="hidden sm:flex items-center gap-3 text-xs text-zinc-300">
                      <button onclick="changeLang('pt')" class="hover:text-white/90 ${
                          currentLang === "pt" ? "font-bold text-white" : ""
                      }">🇧🇷 PT</button>
                      <button onclick="changeLang('en')" class="hover:text-white/90 ${
                          currentLang === "en" ? "font-bold text-white" : ""
                      }">🇺🇸 EN</button>
                      <button onclick="changeLang('es')" class="hover:text-white/90 ${
                          currentLang === "es" ? "font-bold text-white" : ""
                      }">🇪🇸 ES</button>
                  </div>
                  <div class="flex items-center gap-3">
                      ${Button(
                          `
                              ${getIconHtml("Github", "h-4 w-4 mr-2")} GitHub
                          `,
                          "bg-white/10 hover:bg-white/20 text-white border border-white/10",
                          true,
                          PROFILE.github,
                          "_blank"
                      )}

                      ${Button(
                          `
                              ${T("nav_contact")}
                          `,
                          "bg-indigo-600 hover:bg-indigo-500 text-white",
                          true,
                          "#contact"
                      )}
                  </div>
              </div>
          </header>

          <section id="home" class="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-10">
              <div class="grid md:grid-cols-2 gap-10 items-center">
                  <div class="animate-hero-enter">
                      <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                          <span class="inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                          ${T("status")}
                      </div>
                      <h1 class="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-white">
                          ${PROFILE.name}
                      </h1>
                      <p class="mt-2 text-lg text-zinc-300">${PROFILE.role}</p>
                      <p class="mt-4 max-w-xl text-zinc-400">
                          ${PROFILE.tagline}
                      </p>
                      <div class="mt-6 flex flex-wrap gap-3">
                          ${Button(
                              `
                                ${getIconHtml(
                                  "Linkedin",
                                  "h-4 w-4 mr-2"
                                )} LinkedIn
                            `,
                              "bg-white/10 hover:bg-white/20 text-white border border-white/10",
                              true,
                              PROFILE.linkedin,
                              "_blank"
                          )}

                          ${Button(
                              `
                                ${getIconHtml("Mail", "h-4 w-4 mr-2")} ${
                                  PROFILE.email
                                }
                            `,
                              "bg-white/10 hover:bg-white/20 text-white border border-white/10",
                              true,
                              `mailto:${PROFILE.email}`
                          )}

                          ${Button(
                              `
                                ${T("view_repos")} ${getIconHtml(
                                  "ArrowUpRight",
                                  "h-4 w-4 ml-2"
                                )}
                            `,
                              "bg-violet-600 hover:bg-violet-500 text-white",
                              true,
                              PROFILE.portfolioRepo,
                              "_blank"
                          )}
                      </div>
                  </div>

                  <div class="relative animate-hero-scale">
                      <div class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-700/30 via-violet-700/20 to-blue-700/30 shadow-glow"></div>
                      <div class="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
                          <h3 class="text-xl font-semibold text-white mb-4">${T(
                              "hero_card_title"
                          )}</h3>
                          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              ${SKILLS.map(
                                  (s) => `
                                    <li class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                                        ${getIconHtml(s.iconName, "h-4 w-4")}
                                        <span>${s.label}</span>
                                    </li>
                                `
                              ).join("")}
                          </ul>
                          <div class="mt-6 flex items-center text-sm text-zinc-400">
                              ${getIconHtml("ChevronRight", "h-4 w-4 mr-1")} ${
                                  PROFILE.location
                              }
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id="projects" class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
              <div class="flex items-end justify-between mb-4 sm:mb-6">
                  <h2 class="text-2xl sm:text-3xl font-semibold text-white">${T(
                      "projects_title"
                  )}</h2>
                  <a href="${
                      PROFILE.github
                  }" target="_blank" rel="noreferrer" class="text-sm text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                      ${T("view_all_github")} ${getIconHtml(
                          "ArrowUpRight",
                          "h-4 w-4 ml-1"
                      )}
                  </a>
              </div>
              <div id="projects-container" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  ${projectsHtml}
              </div>
          </section>

          <section id="skills" class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
              <div class="grid md:grid-cols-2 gap-6">
                  <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                      <h3 class="text-xl font-semibold text-white mb-4">${T(
                          "how_i_work_title"
                      )}</h3>
                      <div class="text-zinc-300 text-sm leading-relaxed">
                          <ul class="list-disc ml-5 space-y-2">
                              ${T("work_list")
                                  .map((item) => `<li>${item}</li>`)
                                  .join("")}
                          </ul>
                      </div>
                  </div>

                  <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                      <h3 class="text-xl font-semibold text-white mb-4">${T(
                          "tools_stack_title"
                      )}</h3>
                      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          ${SKILLS.map(
                              (s) => `
                                <div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                                    ${getIconHtml(s.iconName, "h-4 w-4")}
                                    <span>${s.label}</span>
                                </div>
                            `
                          ).join("")}
                      </div>
                  </div>
              </div>
          </section>

          <section id="about" class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
              <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
                  <h3 class="text-xl font-semibold text-white mb-4">${T(
                      "about_title"
                  )}</h3>
                  <div class="text-zinc-300 text-sm leading-relaxed">
                      <p>
                          ${T("about_p")}
                      </p>
                  </div>
              </div>
          </section>

          <section id="contact" class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16">
              <div class="grid md:grid-cols-3 gap-6">
                  <div class="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                      <h3 class="text-xl font-semibold text-white mb-4">${T(
                          "contact_title"
                      )}</h3>
                      <div class="text-zinc-300 text-sm">
                          <p>${T("contact_p")}</p>
                          <div class="mt-4 flex flex-wrap gap-3">
                              ${Button(
                                  `
                                      ${getIconHtml("Mail", "h-4 w-4 mr-2")} ${
                                      PROFILE.email
                                  }
                                  `,
                                  "bg-white/10 hover:bg-white/20 text-white border border-white/10",
                                  true,
                                  `mailto:${PROFILE.email}`
                              )}

                              ${Button(
                                  `
                                      ${getIconHtml(
                                          "Linkedin",
                                          "h-4 w-4 mr-2"
                                      )} LinkedIn
                                  `,
                                  "bg-white/10 hover:bg-white/20 text-white border border-white/10",
                                  true,
                                  PROFILE.linkedin,
                                  "_blank"
                              )}

                              ${Button(
                                  `
                                      ${getIconHtml(
                                          "Github",
                                          "h-4 w-4 mr-2"
                                      )} GitHub
                                  `,
                                  "bg-white/10 hover:bg-white/20 text-white border border-white/10",
                                  true,
                                  PROFILE.github,
                                  "_blank"
                              )}
                          </div>
                      </div>
                  </div>

                  <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-600/20 to-violet-600/20 p-6">
                      <h3 class="text-xl font-semibold text-white mb-4">${T(
                          "cv_title"
                      )}</h3>
                      <div class="text-zinc-300 text-sm">
                          <p>${T("cv_p")}</p>
                          <div class="mt-4">
                              ${Button(
                                  `
                                      ${T("cv_button")}
                                  `,
                                  "w-full bg-indigo-600 hover:bg-indigo-500",
                                  true,
                                  PROFILE.cvPdfUrl,
                                  "_blank"
                              )}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <footer class="border-t border-white/5 py-8">
              <div class="mx-auto max-w-6xl px-4 sm:px-6 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <p>© ${new Date().getFullYear()} ${PROFILE.name}. ${T(
                      "footer_copy"
                  )}</p>
                  <div class="flex items-center gap-4">
                      <a class="hover:text-zinc-300" href="${
                          PROFILE.github
                      }" target="_blank" rel="noreferrer">GitHub</a>
                      <a class="hover:text-zinc-300" href="${
                          PROFILE.linkedin
                      }" target="_blank" rel="noreferrer">LinkedIn</a>
                      <a class="hover:text-zinc-300" href="#home">${T(
                          "footer_top"
                      )}</a>
                  </div>
              </div>
          </footer>
      </div>
  `;

  app.innerHTML = htmlContent;

  lucide.createIcons();

  renderAnimations(PROJECTS);
}

function renderProjectsHtml() {
  return PROJECTS.map((p) => {
      const descKey = `desc_${currentLang}`;
      const description = p[descKey] || p["desc_pt"];

      return `
          <div class="project-card-animated">
              <div class="group h-full rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-6 flex flex-col justify-between">
                  <div>
                      <div class="text-xl font-semibold text-white mb-4 flex items-center justify-between">
                          <span>${p.title}</span>
                          <a
                              href="${p.url}"
                              target="_blank"
                              rel="noreferrer"
                              class="opacity-80 hover:opacity-100"
                              aria-label="Abrir ${p.title} no GitHub"
                          >
                              ${getIconHtml("Github", "h-5 w-5")}
                          </a>
                      </div>
                      <p class="text-sm text-zinc-300 min-h-[3.5rem]">${description}</p>
                      <div class="mt-3 flex flex-wrap gap-2">
                          ${p.stack
                              .map(
                                  (s) => `
                                  <span class="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300">
                                      ${s}
                                  </span>
                              `
                              )
                              .join("")}
                      </div>
                  </div>
                  <div class="mt-4">
                      ${Button(
                          `
                              ${T("view_code")} ${getIconHtml(
                                  "ArrowUpRight",
                                  "h-4 w-4 ml-2"
                              )}
                          `,
                          "bg-indigo-600 hover:bg-indigo-500 text-white text-xs h-8 px-3",
                          true,
                          p.url,
                          "_blank"
                      )}
                  </div>
              </div>
          </div>
      `;
  }).join("");
}

function renderAnimations(projectsArray) {
  const projectsContainer = document.getElementById("projects-container");
  const projectDivs = projectsContainer.querySelectorAll(
      ".project-card-animated"
  );

  projectsDivs.forEach((projectDiv, i) => {
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.style.animationDelay = `${i * 0.06}s`;
                      entry.target.classList.add("animate-project-in-view");
                      observer.unobserve(entry.target);
                  }
              });
          },
          {
              threshold: 0.1,
          }
      );
      observer.observe(projectDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderPortfolio);