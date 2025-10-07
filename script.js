const PROFILE = {
  name: "Leonardo Alves Moreno",
  role: "Desenvolvedor Backend & Web",
  tagline: "Java • Python • JavaScript • HTML • CSS • SQL",
  location: "São Paulo, Brasil",
  email: "leonardoa.moreno07@gmail.com",
  github: "https://github.com/pleomoreno",
  linkedin: "https://www.linkedin.com/in/leomoreno/",
  portfolioRepo: "https://github.com/pleomoreno",
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
    desc: "Front-end web para sistema bancário, com UI interativa integrada ao back-end.",
    stack: ["JavaScript", "HTML", "CSS"],
    url: "https://github.com/Maua-Dev/devbank_leonardoesantiago_front",
  },
  {
    title: "DevBank Back-End",
    desc: "Implementação back-end com Python, gerenciando operações bancárias e transações via API.",
    stack: ["Python", "FastAPI", "SQL"],
    url: "https://github.com/Maua-Dev/devbank_leomoreno",
  },
  {
    title: "Portal Interno DevCommunity",
    desc: "Portal interno da entidade DevCommunity do IMT. Participo no back-end, adicionando features e corrigindo bugs.",
    stack: ["Python", "FastAPI", "SQL"],
    url: "https://github.com/Maua-Dev/port_mss_action",
  },
  {
    title: "Rokuzen Project (Em Desenvolvimento)",
    desc: "Projeto front-end em desenvolvimento, mostrando integração avançada de JS, CSS e HTML.",
    stack: ["JavaScript", "HTML", "CSS"],
    url: "https://github.com/pleomoreno/projeto-rokuzen",
  },
  {
    title: "Millionaire Trivia Game",
    desc: "Jogo em Python com Pygame, estrutura modular orientada a objetos e perguntas interativas.",
    stack: ["Python", "Pygame"],
    url: "https://github.com/pleomoreno/Jogo_do_Milhao",
  },
];

/**
 * @param {string} iconName - Nome do ícone
 * @param {string} classNames - Classes Tailwind para estilização.
 * @returns {string} - String HTML do ícone SVG.
 */
function getIconHtml(iconName, classNames = "") {
  return `<i data-lucide="${iconName}" class="${classNames}"></i>`;
}

/**
 * @param {string} content - Conteúdo interno do botão (HTML).
 * @param {string} classNames - Classes Tailwind para estilização.
 * @param {boolean} asLink - Se deve ser renderizado como 'a' (default é 'button').
 * @param {string} href - URL do link (se for um link).
 * @param {string} target - Target do link (ex: '_blank').
 * @returns {string} - String HTML do botão/link.
 */
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

  const htmlContent = `
      <div class="min-h-screen bg-gradient-to-b from-[#0a0a0c] via-[#0c0c14] to-[#0a0a0c] text-zinc-200">

          <header class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
              <div class="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
                  <a href="#home" class="font-semibold tracking-tight text-zinc-100">leomoreno.dev</a>
                  <nav class="hidden sm:flex items-center gap-6 text-sm">
                      <a class="hover:text-white/90" href="#projects">Projetos</a>
                      <a class="hover:text-white/90" href="#skills">Skills</a>
                      <a class="hover:text-white/90" href="#about">Sobre</a>
                      <a class="hover:text-white/90" href="#contact">Contato</a>
                  </nav>
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
                          Contato
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
                          Disponível para freelas e estágio
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
                              Ver repositórios ${getIconHtml(
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
                          <h3 class="text-xl font-semibold text-white mb-4">Stack & Principais Skills</h3>
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
                  <h2 class="text-2xl sm:text-3xl font-semibold text-white">Projetos em Destaque</h2>
                  <a href="${
                    PROFILE.github
                  }" target="_blank" rel="noreferrer" class="text-sm text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                      Ver tudo no GitHub ${getIconHtml(
                        "ArrowUpRight",
                        "h-4 w-4 ml-1"
                      )}
                  </a>
              </div>
              <div id="projects-container" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  </div>
          </section>

          <section id="skills" class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
              <div class="grid md:grid-cols-2 gap-6">
                  <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                      <h3 class="text-xl font-semibold text-white mb-4">Como eu trabalho</h3>
                      <div class="text-zinc-300 text-sm leading-relaxed">
                          <ul class="list-disc ml-5 space-y-2">
                              <li>Clean code, organização por camadas e POO quando faz sentido.</li>
                              <li>APIs REST claras, documentação simples e testes básicos.</li>
                              <li>UI minimalista, focada em acessibilidade e responsividade.</li>
                              <li>Banco de dados com modelagem objetiva e consultas performáticas.</li>
                          </ul>
                      </div>
                  </div>

                  <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                      <h3 class="text-xl font-semibold text-white mb-4">Stack de Ferramentas</h3>
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
                  <h3 class="text-xl font-semibold text-white mb-4">Sobre mim</h3>
                  <div class="text-zinc-300 text-sm leading-relaxed">
                      <p>
                          Sou estudante de Bacharelado em Ciência da Computação no IMT. Gosto de construir APIs
                          bem estruturadas, brincar com Python e jogar com front-end quando dá.
                          Busco estágio/portunidades para crescer resolvendo problemas reais.
                      </p>
                  </div>
              </div>
          </section>

          <section id="contact" class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16">
              <div class="grid md:grid-cols-3 gap-6">
                  <div class="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                      <h3 class="text-xl font-semibold text-white mb-4">Vamos conversar</h3>
                      <div class="text-zinc-300 text-sm">
                          <p>Curtiu o que viu? Me chama para conversar sobre oportunidades, freelas ou collabs.</p>
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
                      <h3 class="text-xl font-semibold text-white mb-4">Resumo (CV)</h3>
                      <div class="text-zinc-300 text-sm">
                          <p>Quer meu currículo em PDF?</p>
                          <div class="mt-4">
                              ${Button(
                                `
                                  Baixar PDF
                              `,
                                "w-full bg-indigo-600 hover:bg-indigo-500",
                                true,
                                "#"
                              )} </div>
                          <p class="mt-3 text-xs text-zinc-400">Troque o link do botão acima para apontar para o seu PDF.</p>
                      </div>
                  </div>
              </div>
          </section>

          <footer class="border-t border-white/5 py-8">
              <div class="mx-auto max-w-6xl px-4 sm:px-6 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <p>© ${new Date().getFullYear()} ${
    PROFILE.name
  }. Todos os direitos reservados.</p>
                  <div class="flex items-center gap-4">
                      <a class="hover:text-zinc-300" href="${
                        PROFILE.github
                      }" target="_blank" rel="noreferrer">GitHub</a>
                      <a class="hover:text-zinc-300" href="${
                        PROFILE.linkedin
                      }" target="_blank" rel="noreferrer">LinkedIn</a>
                      <a class="hover:text-zinc-300" href="#home">Topo</a>
                  </div>
              </div>
          </footer>
      </div>
  `;

  app.innerHTML = htmlContent;

  lucide.createIcons();

  renderProjectsAndAnimate();
}

function renderProjectsAndAnimate() {
  const projectsContainer = document.getElementById("projects-container");

  PROJECTS.forEach((p, i) => {
    const projectDiv = document.createElement("div");

    projectDiv.classList.add("project-card-animated");

    const projectHtml = `
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
                  <p class="text-sm text-zinc-300 min-h-[3.5rem]">${p.desc}</p>
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
                      Ver código ${getIconHtml("ArrowUpRight", "h-4 w-4 ml-2")}
                  `,
                    "bg-indigo-600 hover:bg-indigo-500 text-white text-xs h-8 px-3",
                    true,
                    p.url,
                    "_blank"
                  )}
              </div>
          </div>
      `;

    projectDiv.innerHTML = projectHtml;
    projectsContainer.appendChild(projectDiv);

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

  lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", renderPortfolio);
