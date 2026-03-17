// script.js
// Jornada "Esperança em Jesus" - ancorada na Bíblia

document.addEventListener("DOMContentLoaded", () => {
  const estado = {
    perfilSelecionado: null, // jovem | adulto | melhor_idade
    escolhaPasso1: null, // depende do perfil
    escolhaPasso2: null // paz | direcao | forca
  };

  const STEPS = ["welcome", "burden", "support", "final"];
  const MAPA_PASSOS = {
    welcome: "welcome",
    passo1: "burden",
    passo2: "support",
    final: "final"
  };

  const OPCOES_CUIDADO_PADRAO = [
    {
      id: "paz",
      label: "Paz no coração",
      description: "Descanso na mente e serenidade para hoje."
    },
    {
      id: "direcao",
      label: "Direção de Deus",
      description: "Clareza para os próximos passos."
    },
    {
      id: "forca",
      label: "Força para continuar",
      description: "Ânimo para seguir mesmo em dias difíceis."
    }
  ];

  const FLUXO = {
    jovem: {
      passo1: {
        verseRef: "1 Timóteo 4:12",
        verseText:
          "Ninguém despreze a tua mocidade; pelo contrário, torna-te padrão dos fiéis.",
        intro:
          "Jesus cuida da sua juventude com propósito. Sua fase tem valor e direção em Deus.",
        pergunta: "O que mais tem pesado no seu coração nessa fase da juventude?",
        opcoes: [
          {
            id: "pressao_expectativas",
            label: "Pressão e expectativas",
            description: "Cobranças, comparações e sensação de nunca ser suficiente."
          },
          {
            id: "duvidas_futuro",
            label: "Dúvidas sobre o futuro",
            description: "Incertezas sobre caminho, trabalho e decisões."
          },
          {
            id: "influencias_amizades",
            label: "Influências e amizades",
            description: "Dificuldade para manter convicções e limites."
          }
        ]
      },
      passo2: {
        pergunta: "O que você mais sente que precisa de Jesus neste momento?",
        opcoes: OPCOES_CUIDADO_PADRAO,
        porEscolha: {
          pressao_expectativas: {
            verseRef: "Mateus 11:28",
            verseText:
              "Vinde a mim todos os que estais cansados e sobrecarregados, e eu vos aliviarei.",
            intro:
              "Jesus conhece a pressão que pesa no seu coração e te chama para descanso real."
          },
          duvidas_futuro: {
            verseRef: "Jeremias 29:11",
            verseText:
              "Eu é que sei os planos que tenho para vocês, diz o Senhor, planos de paz e não de mal.",
            intro:
              "Mesmo com dúvidas, Deus não perdeu o controle da sua história."
          },
          influencias_amizades: {
            verseRef: "Provérbios 13:20",
            verseText: "Quem anda com os sábios será sábio.",
            intro:
              "Jesus se importa com quem caminha com você e quer te dar discernimento."
          }
        }
      },
      final: {
        resumoFinal:
          "Na juventude, Jesus te vê com amor e chama você para viver com identidade, verdade e esperança.",
        verseRef: "Romanos 15:13",
        verseText:
          "O Deus da esperança vos encha de todo o gozo e paz no vosso crer.",
        oracao:
          "Jesus, eu te entrego esta fase da minha juventude. Guarda meu coração e firma meus passos em Ti. Amém."
      }
    },
    adulto: {
      passo1: {
        verseRef: "Provérbios 3:5-6",
        verseText:
          "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
        intro:
          "Em meio às responsabilidades da vida adulta, Deus segue presente e fiel.",
        pergunta: "O que mais tem mexido com o seu coração nessa fase da vida adulta?",
        opcoes: [
          {
            id: "cansaco_responsabilidades",
            label: "Cansaço e sobrecarga",
            description: "Rotina pesada, mente cansada e pouca energia."
          },
          {
            id: "preocupacao_financeira",
            label: "Preocupações financeiras",
            description: "Insegurança com contas, trabalho e provisão."
          },
          {
            id: "familia_relacionamentos",
            label: "Família e relacionamentos",
            description: "Conflitos, tensão ou falta de diálogo."
          }
        ]
      },
      passo2: {
        pergunta: "O que você mais sente que precisa de Jesus neste momento?",
        opcoes: OPCOES_CUIDADO_PADRAO,
        porEscolha: {
          cansaco_responsabilidades: {
            verseRef: "Mateus 11:28",
            verseText:
              "Vinde a mim todos os que estais cansados e sobrecarregados, e eu vos aliviarei.",
            intro:
              "Jesus conhece seu cansaço e oferece descanso para a alma."
          },
          preocupacao_financeira: {
            verseRef: "Mateus 6:33",
            verseText:
              "Buscai, pois, em primeiro lugar, o seu reino e a sua justiça, e todas estas coisas vos serão acrescentadas.",
            intro:
              "Deus cuida de você também na área financeira e traz direção para cada dia."
          },
          familia_relacionamentos: {
            verseRef: "Colossenses 3:13",
            verseText:
              "Assim como o Senhor vos perdoou, assim também perdoai vós.",
            intro:
              "Jesus pode restaurar vínculos e trazer graça para sua casa."
          }
        }
      },
      final: {
        resumoFinal:
          "Na vida adulta, Jesus não ignora suas cargas. Ele te acolhe, sustenta e conduz com sabedoria.",
        verseRef: "Salmos 55:22",
        verseText:
          "Lança o teu cuidado sobre o Senhor, e ele te susterá.",
        oracao:
          "Jesus, eu te entrego esta fase da minha vida adulta. Dá-me sabedoria, descanso e direção para cuidar do que colocaste em minhas mãos. Amém."
      }
    },
    melhor_idade: {
      passo1: {
        verseRef: "Isaías 46:4",
        verseText:
          "Até à vossa velhice, eu serei o mesmo e ainda até às cãs eu vos carregarei.",
        intro:
          "Sua história é preciosa para Deus. Ele permanece fiel em cada estação da vida.",
        pergunta: "O que mais tem tocado o seu coração nessa fase da melhor idade?",
        opcoes: [
          {
            id: "saude",
            label: "Saúde e limitações",
            description: "Fragilidade, tratamento ou preocupação com o corpo."
          },
          {
            id: "solidao_saudades",
            label: "Solidão e saudades",
            description: "Sentimento de vazio, ausência e distância."
          },
          {
            id: "preocupacao_familia",
            label: "Preocupação com a família",
            description: "Cuidado com filhos, netos e o futuro da casa."
          }
        ]
      },
      passo2: {
        pergunta: "O que você mais sente que precisa de Jesus neste momento?",
        opcoes: OPCOES_CUIDADO_PADRAO,
        porEscolha: {
          saude: {
            verseRef: "Salmos 41:3",
            verseText:
              "O Senhor o assiste no leito da enfermidade.",
            intro:
              "Jesus vê sua dor com compaixão e permanece ao seu lado."
          },
          solidao_saudades: {
            verseRef: "Deuteronômio 31:8",
            verseText:
              "O Senhor é quem vai adiante de ti; não te deixará, nem te desamparará.",
            intro:
              "Mesmo na solidão, você não está abandonado. Deus continua perto."
          },
          preocupacao_familia: {
            verseRef: "Josué 24:15",
            verseText: "Eu e a minha casa serviremos ao Senhor.",
            intro:
              "Jesus recebe suas orações pela família e age além do que seus olhos veem."
          }
        }
      },
      final: {
        resumoFinal:
          "Na melhor idade, Jesus continua cuidando de você com ternura, dignidade e propósito.",
        verseRef: "Salmos 92:14",
        verseText:
          "Na velhice darão ainda frutos, serão cheios de seiva e de verdor.",
        oracao:
          "Jesus, eu te entrego esta fase da minha melhor idade. Sustenta meu coração com paz, força e esperança renovada. Amém."
      }
    }
  };

  const elements = {
    stepSections: document.querySelectorAll(".step"),
    profileCards: document.querySelectorAll(".profile-card"),
    progressFill: document.getElementById("progressFill"),
    progressLabel: document.getElementById("progressLabel"),
    progressAffirmation: document.getElementById("progressAffirmation"),

    burdenSectionTitle: document.getElementById("burdenQuestion"),
    burdenIntro: document.getElementById("burdenIntro"),
    burdenOptions: document.getElementById("burdenOptions"),

    supportSectionTitle: document.getElementById("supportQuestion"),
    supportIntro: document.getElementById("supportIntro"),
    supportOptions: document.getElementById("supportOptions"),

    backToProfile: document.getElementById("backToProfile"),
    backToBurden: document.getElementById("backToBurden"),
    restartJourney: document.getElementById("restartJourney"),

    finalIntro: document.getElementById("finalIntro"),
    finalBurden: document.getElementById("finalBurden"),
    finalSupport: document.getElementById("finalSupport"),
    finalCommunity: document.getElementById("finalCommunity"),
    finalVerse: document.getElementById("finalVerse"),
    guidedPrayer: document.getElementById("guidedPrayer"),
    ctaVisit: document.getElementById("ctaVisit")
  };

  function obterFluxoPerfil() {
    if (!estado.perfilSelecionado) return null;
    return FLUXO[estado.perfilSelecionado] || null;
  }

  function obterConfigPasso2() {
    const fluxo = obterFluxoPerfil();
    if (!fluxo || !estado.escolhaPasso1) return null;
    return fluxo.passo2.porEscolha[estado.escolhaPasso1] || null;
  }

  function obterTextoDaEscolha(opcoes, idEscolhido) {
    const opcao = opcoes.find((item) => item.id === idEscolhido);
    return opcao ? opcao.label : "";
  }

  function exibirStep(stepId) {
    elements.stepSections.forEach((section) => {
      section.classList.toggle("hidden", section.dataset.step !== stepId);
    });

    const currentStepIndex = STEPS.indexOf(stepId);
    const current = currentStepIndex + 1;
    const percent = (current / STEPS.length) * 100;

    if (elements.progressFill) {
      elements.progressFill.style.width = `${percent}%`;
    }
    if (elements.progressLabel) {
      elements.progressLabel.textContent = `Passo ${current} de ${STEPS.length}`;
    }
    if (elements.progressAffirmation) {
      elements.progressAffirmation.classList.toggle("hidden", stepId !== "welcome");
    }
  }

  function formatarVersiculo(ref, texto, intro) {
    return `<strong>${ref}</strong> - "${texto}"<br>${intro}`;
  }

  function criarCardOpcao(opcao, onClick, selectedId) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-card";
    if (selectedId && selectedId === opcao.id) {
      btn.classList.add("selected");
    }

    const title = document.createElement("span");
    title.className = "choice-title";
    title.textContent = opcao.label;

    const text = document.createElement("span");
    text.className = "choice-text";
    text.textContent = opcao.description;

    btn.appendChild(title);
    btn.appendChild(text);
    btn.addEventListener("click", () => onClick(opcao.id));
    return btn;
  }

  function renderizarOpcoes(container, opcoes, onClick, selectedId) {
    if (!container) return;
    container.innerHTML = "";

    opcoes.slice(0, 3).forEach((opcao) => {
      container.appendChild(criarCardOpcao(opcao, onClick, selectedId));
    });
  }

  function limparSelecaoPerfilVisual() {
    elements.profileCards.forEach((card) => card.classList.remove("selected"));
  }

  function marcarPerfilSelecionado(cardSelecionado) {
    limparSelecaoPerfilVisual();
    cardSelecionado.classList.add("selected");
  }

  function carregarPasso(passo) {
    switch (passo) {
      case "welcome":
        exibirStep(MAPA_PASSOS.welcome);
        return;
      case "passo1":
        renderizarPasso1();
        exibirStep(MAPA_PASSOS.passo1);
        return;
      case "passo2":
        renderizarPasso2();
        exibirStep(MAPA_PASSOS.passo2);
        return;
      case "final":
        renderizarFinal();
        exibirStep(MAPA_PASSOS.final);
        return;
      default:
        exibirStep(MAPA_PASSOS.welcome);
    }
  }

  function renderizarPasso1() {
    const fluxo = obterFluxoPerfil();
    if (!fluxo) return;

    if (elements.burdenSectionTitle) {
      elements.burdenSectionTitle.textContent = fluxo.passo1.pergunta;
    }
    if (elements.burdenIntro) {
      elements.burdenIntro.innerHTML = formatarVersiculo(
        fluxo.passo1.verseRef,
        fluxo.passo1.verseText,
        fluxo.passo1.intro
      );
    }

    renderizarOpcoes(
      elements.burdenOptions,
      fluxo.passo1.opcoes,
      (opcaoId) => {
        estado.escolhaPasso1 = opcaoId;
        estado.escolhaPasso2 = null;
        carregarPasso("passo2");
      },
      estado.escolhaPasso1
    );
  }

  function renderizarPasso2() {
    const fluxo = obterFluxoPerfil();
    const configPasso2 = obterConfigPasso2();
    if (!fluxo || !configPasso2) return;

    if (elements.supportSectionTitle) {
      elements.supportSectionTitle.textContent = fluxo.passo2.pergunta;
    }
    if (elements.supportIntro) {
      elements.supportIntro.innerHTML = formatarVersiculo(
        configPasso2.verseRef,
        configPasso2.verseText,
        configPasso2.intro
      );
    }

    renderizarOpcoes(
      elements.supportOptions,
      fluxo.passo2.opcoes,
      (opcaoId) => {
        estado.escolhaPasso2 = opcaoId;
        carregarPasso("final");
      },
      estado.escolhaPasso2
    );
  }

  function renderizarFinal() {
    const fluxo = obterFluxoPerfil();
    const configPasso2 = obterConfigPasso2();
    if (!fluxo) return;

    const pesoEscolhido = obterTextoDaEscolha(fluxo.passo1.opcoes, estado.escolhaPasso1);
    const cuidadoEscolhido = obterTextoDaEscolha(fluxo.passo2.opcoes, estado.escolhaPasso2);

    const versoFinalRef = configPasso2 ? configPasso2.verseRef : fluxo.final.verseRef;
    const versoFinalTexto = configPasso2 ? configPasso2.verseText : fluxo.final.verseText;

    if (elements.finalIntro) {
      elements.finalIntro.textContent = fluxo.final.resumoFinal;
    }

    if (elements.finalBurden) {
      elements.finalBurden.textContent = pesoEscolhido
        ? `Sobre "${pesoEscolhido.toLowerCase()}", Jesus te acolhe sem condenação e cuida de você com amor.`
        : "Jesus conhece o peso do seu coração e não se afasta de você.";
    }

    if (elements.finalSupport) {
      elements.finalSupport.textContent = cuidadoEscolhido
        ? `Ao pedir "${cuidadoEscolhido.toLowerCase()}", você dá um passo de fé: Cristo caminha com você e renova sua esperança.`
        : "Em Jesus há paz, direção e força para continuar.";
    }

    if (elements.finalCommunity) {
      elements.finalCommunity.textContent = "";
      elements.finalCommunity.classList.add("hidden");
    }

    if (elements.finalVerse) {
      elements.finalVerse.textContent = `${versoFinalTexto} (${versoFinalRef})`;
    }

    if (elements.guidedPrayer) {
      const fase = estado.perfilSelecionado === "melhor_idade"
        ? "melhor idade"
        : estado.perfilSelecionado;
      const pesoFrase = pesoEscolhido ? pesoEscolhido.toLowerCase() : "o peso do meu coração";
      const cuidadoFrase = cuidadoEscolhido ? cuidadoEscolhido.toLowerCase() : "teu cuidado";

      elements.guidedPrayer.textContent = [
        `Jesus, eu te entrego esta fase da minha vida (${fase}).`,
        `Eu te entrego também ${pesoFrase}.`,
        `Hoje eu te peço ${cuidadoFrase} para seguir em frente.`,
        "Perdoa meus pecados, fortalece meu coração e guia meus passos.",
        "Eu reconheço que Tu caminhas comigo e coloco minha esperança em Ti. Amém."
      ].join(" ");
    }

    if (elements.ctaVisit && !elements.ctaVisit.getAttribute("href")) {
      elements.ctaVisit.setAttribute("href", "#");
    }
  }

  function resetJourney() {
    estado.perfilSelecionado = null;
    estado.escolhaPasso1 = null;
    estado.escolhaPasso2 = null;

    limparSelecaoPerfilVisual();

    if (elements.finalCommunity) {
      elements.finalCommunity.classList.remove("hidden");
    }

    carregarPasso("welcome");
  }

  function bindEvents() {
    elements.profileCards.forEach((card) => {
      card.addEventListener("click", () => {
        estado.perfilSelecionado = card.dataset.profile || null;
        estado.escolhaPasso1 = null;
        estado.escolhaPasso2 = null;
        marcarPerfilSelecionado(card);
        carregarPasso("passo1");
      });
    });

    if (elements.backToProfile) {
      elements.backToProfile.addEventListener("click", () => {
        carregarPasso("welcome");
      });
    }

    if (elements.backToBurden) {
      elements.backToBurden.addEventListener("click", () => {
        carregarPasso("passo1");
      });
    }

    if (elements.restartJourney) {
      elements.restartJourney.addEventListener("click", () => {
        resetJourney();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  bindEvents();
  carregarPasso("welcome");
});

// Lightbox com navegação entre imagens e swipe
(function () {
  const allImgs = Array.from(document.querySelectorAll(".final-banner-image"));
  if (!allImgs.length) return;

  allImgs.forEach((img) => { img.style.cursor = "zoom-in"; });

  function openLightbox(startIndex) {
    let current = startIndex;

    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    const closeBtn = document.createElement("button");
    closeBtn.className = "lightbox-close";
    closeBtn.innerHTML = "&#x2715;";
    closeBtn.setAttribute("aria-label", "Fechar");

    const prevBtn = document.createElement("button");
    prevBtn.className = "lightbox-nav prev";
    prevBtn.innerHTML = "&#8249;";
    prevBtn.setAttribute("aria-label", "Anterior");

    const nextBtn = document.createElement("button");
    nextBtn.className = "lightbox-nav next";
    nextBtn.innerHTML = "&#8250;";
    nextBtn.setAttribute("aria-label", "Próxima");

    const expandedImg = document.createElement("img");
    expandedImg.className = "lightbox-img";

    const counter = document.createElement("div");
    counter.className = "lightbox-counter";

    overlay.append(closeBtn, prevBtn, expandedImg, nextBtn, counter);
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("lightbox-open"));

    function show(index) {
      current = index;
      expandedImg.src = allImgs[current].src;
      expandedImg.alt = allImgs[current].alt;
      counter.textContent = (current + 1) + " / " + allImgs.length;
      prevBtn.disabled = current === 0;
      nextBtn.disabled = current === allImgs.length - 1;
    }

    show(current);

    const close = () => {
      overlay.classList.remove("lightbox-open");
      overlay.addEventListener("transitionend", () => overlay.remove(), { once: true });
    };

    closeBtn.addEventListener("click", (e) => { e.stopPropagation(); close(); });
    prevBtn.addEventListener("click", (e) => { e.stopPropagation(); if (current > 0) show(current - 1); });
    nextBtn.addEventListener("click", (e) => { e.stopPropagation(); if (current < allImgs.length - 1) show(current + 1); });
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

    // Swipe no celular
    let touchStartX = 0;
    overlay.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    overlay.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && current < allImgs.length - 1) show(current + 1);
        if (diff < 0 && current > 0) show(current - 1);
      }
    }, { passive: true });
  }

  allImgs.forEach((img, i) => {
    img.addEventListener("click", () => openLightbox(i));
  });
})();
