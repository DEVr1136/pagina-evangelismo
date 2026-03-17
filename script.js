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

  const FLUXO = {
    jovem: {
      sonho: {
        sonhoIntro: "Você já sentiu que ninguém te entende?",
        pergunta: "O que você mais deseja nessa fase da sua vida?",
        opcoes: [
          { id: "identidade", label: "Saber quem sou de verdade", description: "Descobrir meu valor além das comparações e das expectativas dos outros." },
          { id: "futuro", label: "Ter clareza sobre o meu futuro", description: "Saber para onde ir quando tudo ao redor parece incerto." },
          { id: "pertencer", label: "Me sentir parte de algo real", description: "Ter conexões verdadeiras onde posso ser eu mesmo." }
        ]
      },
      mito: {
        porSonho: {
          identidade: {
            verseRef: "1 Timóteo 4:12",
            verseText: "Ninguém despreze a tua mocidade; pelo contrário, torna-te padrão dos fiéis.",
            intro: "E se essa sensação de não ser suficiente não fosse a verdade sobre você? E se fosse uma mentira que o mundo te ensinou a acreditar?\n\nJesus não chegou para quem tinha tudo resolvido. Ele escolheu jovens sem certeza, sem plano. E disse a cada um: eu te escolhi. Não pelo que você faz, mas por quem você é.",
            pergunta: "O que mais te impede de saber quem você é?",
            opcoes: [
              { id: "comparacao", label: "A comparação constante me esgota", description: "Sinto que estou sempre atrás dos outros." },
              { id: "expectativas", label: "Vivo tentando agradar a todos", description: "A pressão de não decepcionar ninguém, nem a mim mesmo." },
              { id: "nao_sei_quem_sou", label: "Não sei quem sou fora do que fazem de mim", description: "Não sei mais quem sou no meio de tanta cobrança." }
            ]
          },
          futuro: {
            verseRef: "Jeremias 29:11",
            verseText: "Eu é que sei os planos que tenho para vocês, diz o Senhor, planos de paz e não de mal.",
            intro: "E se a sua incerteza não fosse sinal de fracasso? E se fosse o espaço onde Deus trabalha?\n\nJesus não prometeu um mapa completo. Prometeu uma presença constante. Ninguém que O seguiu ficou sem direção.",
            pergunta: "O que mais te impede de ter essa clareza?",
            opcoes: [
              { id: "perdido", label: "Me sinto perdido, sem saber o caminho", description: "Vejo todos avançando enquanto eu fico parado." },
              { id: "medo_errar", label: "Tenho medo de errar e não ter volta", description: "A incerteza que paralisa mais do que qualquer obstáculo." },
              { id: "pressao_decidir", label: "Sinto pressão para decidir antes de estar pronto", description: "A cobrança de já ter tudo planejado enquanto ainda estou descobrindo." }
            ]
          },
          pertencer: {
            verseRef: "Provérbios 13:20",
            verseText: "Quem anda com os sábios será sábio.",
            intro: "Você foi feito para pertencer, mas ao lugar certo. O mundo raramente oferece conexão de verdade.\n\nJesus criou comunidade com os que se sentiam de fora. Não escolheu os populares. Escolheu os que precisavam de algo real.",
            pergunta: "O que mais dificulta isso?",
            opcoes: [
              { id: "rejeicao", label: "Tenho medo de ser rejeitado", description: "É difícil me mostrar de verdade por medo do julgamento." },
              { id: "sozinho", label: "Me sinto sozinho mesmo rodeado de gente", description: "Tenho contatos, mas poucas conexões reais." },
              { id: "influencia_ruim", label: "As amizades que tenho me puxam pra baixo", description: "Fico preso em um círculo que não me ajuda a crescer." }
            ]
          }
        }
      },
      final: {
        pilares: [
          { titulo: "Aceitação", texto: "Você não precisa se provar. Em Cristo, você é amado antes de qualquer conquista. E isso não muda." },
          { titulo: "Propósito", texto: "Você tem um caminho. Deus conhece cada dúvida, cada recomeço. A sua história não é um rascunho." },
          { titulo: "Relacionamento", texto: "Alguém que te entende de verdade. Jesus vê quem você é por dentro e ainda assim fica." }
        ],
        porSonho: {
          identidade: "Você quer saber quem é de verdade. Essa busca não é fraqueza. É o coração pedindo o que só Deus pode dar.",
          futuro: "Você quer um caminho claro. E Deus já está trabalhando na sua história.",
          pertencer: "Você quer pertencer de verdade. E existe um lugar preparado para você."
        },
        porMito: {
          comparacao: { resumo: "A voz que diz que você está atrás não é a voz de Deus. Em Cristo, você não compete com os outros. Você tem o seu próprio caminho.", verseRef: "Romanos 8:37", verseText: "Em todas estas coisas somos mais do que vencedores, por meio daquele que nos amou.", oracao: "Jesus, cala em mim a voz da comparação. Me ensina a me ver com os Teus olhos. Amém." },
          expectativas: { resumo: "Viver para agradar a todos cansa demais. Jesus te liberta para ser quem Ele criou. E isso é mais do que suficiente.", verseRef: "Gálatas 1:10", verseText: "Se eu ainda agradasse aos homens, não seria servo de Cristo.", oracao: "Jesus, me liberta da necessidade de aprovação. Quero viver para Ti. Amém." },
          nao_sei_quem_sou: { resumo: "Você não perdeu sua identidade. Ela nunca dependeu do que os outros disseram. Deus te formou com propósito desde o começo.", verseRef: "Salmos 139:14", verseText: "Sou maravilhosamente constituído; as tuas obras são admiráveis.", oracao: "Jesus, me mostra quem sou em Ti. Restaura o que o mundo tentou apagar. Amém." },
          perdido: { resumo: "Você não está perdido para sempre. Está num momento de preparação. Deus te guia um passo de cada vez.", verseRef: "Salmos 32:8", verseText: "Eu te instruirei e te ensinarei o caminho que deves seguir; sobre ti fixarei os meus olhos.", oracao: "Jesus, não preciso do mapa completo. Confia em mim um passo. Eu sigo. Amém." },
          medo_errar: { resumo: "O medo de errar não vem de Deus. Ele não quer que você acerte tudo. Quer que você caminhe com Ele.", verseRef: "Isaías 41:10", verseText: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.", oracao: "Jesus, eu entrego meu medo de errar. Quero caminhar com fé, não com perfeição. Amém." },
          pressao_decidir: { resumo: "Você não precisa ter tudo resolvido agora. Deus te dá o tempo certo. Nenhum capítulo da sua história chega atrasado.", verseRef: "Mateus 6:34", verseText: "Não vos inquieteis com o dia de amanhã; o dia de amanhã cuidará de si mesmo.", oracao: "Jesus, solto a pressão do tempo. Confio no Teu ritmo para minha vida. Amém." },
          rejeicao: { resumo: "Antes de qualquer pessoa te escolher, Jesus já te escolheu. A rejeição dos outros nunca cancela a aceitação de Deus.", verseRef: "João 15:16", verseText: "Não fostes vós que me escolhestes a mim; pelo contrário, eu vos escolhi a vós.", oracao: "Jesus, Tu me escolheste antes de qualquer um. Isso é suficiente para mim. Amém." },
          sozinho: { resumo: "A solidão mente quando diz que ninguém te entende. Jesus prometeu não te deixar só. Existe uma comunidade esperando por você.", verseRef: "João 14:18", verseText: "Não vos deixarei órfãos; virei a vós.", oracao: "Jesus, entra na minha solidão. Me conecta com pessoas reais que caminhem comigo. Amém." },
          influencia_ruim: { resumo: "As amizades que você escolhe moldam quem você está se tornando. Jesus quer te cercar de pessoas que te elevem.", verseRef: "1 Coríntios 15:33", verseText: "As más conversações corrompem os bons costumes.", oracao: "Jesus, me dá sabedoria para escolher meu círculo. Me faz ser a amizade que outros precisam. Amém." }
        }
      }
    },
    adulto: {
      sonho: {
        sonhoIntro: "Você cuida de todo mundo. Mas quem cuida de você?\n\nO trabalho não para. As contas não param. As cobranças não param. E em algum momento silencioso, vem aquela pergunta: é pra isso que eu estou vivendo?\n\nNão é ingratidão. É o coração exausto pedindo mais do que sobrevivência.",
        pergunta: "O que você mais deseja nessa fase da sua vida?",
        opcoes: [
          { id: "leveza", label: "Ter mais leveza e descanso", description: "Sair da correria e sentir que a vida pode ser mais do que sobreviver." },
          { id: "proposito", label: "Sentir que o que faço tem sentido", description: "Ir além da rotina e sentir que a vida tem um propósito." },
          { id: "familia_bem", label: "Ver minha família bem e unida", description: "Restaurar o que está quebrado e proteger o que ainda está de pé." }
        ]
      },
      mito: {
        porSonho: {
          leveza: {
            verseRef: "Mateus 11:28",
            verseText: "Vinde a mim todos os que estais cansados e sobrecarregados, e eu vos aliviarei.",
            intro: "E se o descanso que você precisa não fosse uma recompensa pelo esforço? E se fosse um direito que você já tem?\n\nJesus olhou para pessoas exatamente onde você está, sobrecarregadas e cansadas por dentro, e disse: vem, eu te alivio. Não como fuga. Como presença que não cobra resultado.",
            pergunta: "O que mais te impede de ter essa leveza?",
            opcoes: [
              { id: "cansaco", label: "O cansaço não vai embora", description: "Durmo e acordo cansado. A mente nunca para." },
              { id: "culpa_parar", label: "Me sinto culpado por precisar parar", description: "A sensação de que descansar é perder tempo." },
              { id: "sobrecarga", label: "Tenho responsabilidade demais para uma pessoa só", description: "O peso de cuidar de tudo e de todos sem ninguém cuidar de mim." }
            ]
          },
          proposito: {
            verseRef: "Provérbios 3:5-6",
            verseText: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
            intro: "E se o vazio que você sente não fosse falta de esforço? E se fosse o coração pedindo algo que vai além da rotina?\n\nJesus não veio pra tornar a vida mais eficiente. Veio pra dar sentido ao que você já vive. Cada gesto de amor tem peso eterno.",
            pergunta: "O que mais te impede de sentir esse propósito?",
            opcoes: [
              { id: "vazio", label: "Faço muito, mas sinto um vazio por dentro", description: "Conquistas que não preenchem. Uma rotina que parece vazia." },
              { id: "financeiro", label: "A pressão financeira me impede de pensar além", description: "Fica difícil pensar em propósito quando as contas estão em jogo." },
              { id: "perdeu_direcao", label: "Perdi a direção de para onde estou indo", description: "Sinto que estou em um círculo sem saber o destino." }
            ]
          },
          familia_bem: {
            verseRef: "Josué 24:15",
            verseText: "Eu e a minha casa serviremos ao Senhor.",
            intro: "E se a família que você deseja não dependesse de mais esforço seu?\n\nJesus age além do que você consegue alcançar. Ele restaura o que parece quebrado demais. E atende orações que seus braços não alcançam.",
            pergunta: "O que mais pesa nessa área?",
            opcoes: [
              { id: "conflito_fam", label: "Há conflitos que não consigo resolver", description: "Tensões que persistem e distâncias que crescem." },
              { id: "distancia_fam", label: "Sinto que estamos distantes uns dos outros", description: "Moramos juntos, mas cada um vive no seu mundo." },
              { id: "medo_filhos", label: "Tenho medo pelo futuro dos meus filhos", description: "A ansiedade de não saber se vão estar bem." }
            ]
          }
        }
      },
      final: {
        pilares: [
          { titulo: "Aceitação", texto: "Você não precisa provar que merece. Em Cristo, você é amado no cansaço, na dívida, no dia em que tudo deu errado." },
          { titulo: "Propósito", texto: "A sua rotina tem significado eterno. O que você faz com amor, Deus vê. E isso dura mais do que qualquer resultado." },
          { titulo: "Relacionamento", texto: "Alguém que não depende de você para existir. Jesus cuida de você sem cobrar resultado e sem te abandonar quando você fracassa." }
        ],
        porSonho: {
          leveza: "Você quer leveza. E Deus não te criou para arrastar o peso do mundo sozinho.",
          proposito: "Você quer sentir que sua vida importa. E ela importa muito mais do que você imagina.",
          familia_bem: "Você quer ver sua família bem. E suas orações chegam mais longe do que seus braços alcançam."
        },
        porMito: {
          cansaco: { resumo: "Deus não quer que você continue nesse ritmo. Ele tem um descanso real para você. Não como fuga, mas como restauração.", verseRef: "Salmos 23:2-3", verseText: "Ele me faz repousar em pastos verdejantes... restaura a minha alma.", oracao: "Jesus, restaura o que o cansaço consumiu. Dá-me descanso de verdade: de mente, corpo e alma. Amém." },
          culpa_parar: { resumo: "Parar não é fraqueza. Até Jesus descansou. Cuidar de si mesmo é também honrar a Deus.", verseRef: "Marcos 6:31", verseText: "Vinde vós mesmos a um lugar deserto e descansai um pouco.", oracao: "Jesus, me liberta da culpa de precisar parar. Ensina-me a descansar sem condenação. Amém." },
          sobrecarga: { resumo: "Você não foi feito para carregar tudo sozinho. Em Jesus há alívio real. E existe uma comunidade que pode caminhar com você.", verseRef: "Mateus 11:28", verseText: "Vinde a mim todos os que estais cansados e sobrecarregados, e eu vos aliviarei.", oracao: "Jesus, solto o que não era meu para carregar. Ensina-me a pedir ajuda sem vergonha. Amém." },
          vazio: { resumo: "O vazio que você sente não é um defeito. É o sinal de que você foi feito para algo maior do que este mundo oferece.", verseRef: "Eclesiastes 3:11", verseText: "Ele pôs a eternidade no coração do homem.", oracao: "Jesus, preenche o que o sucesso não conseguiu. Quero uma vida que faça sentido de verdade. Amém." },
          financeiro: { resumo: "Deus vê a pressão real das suas contas. Ele não ignora isso. E quer fazer parte das suas decisões.", verseRef: "Mateus 6:33", verseText: "Buscai primeiro o seu reino e a sua justiça, e todas estas coisas vos serão acrescentadas.", oracao: "Jesus, entra nas minhas finanças. Dá-me sabedoria, provisão e paz. Amém." },
          perdeu_direcao: { resumo: "Você não está perdido para sempre. Está num momento de redirecionamento. Deus te guia quando você pede com sinceridade.", verseRef: "Salmos 32:8", verseText: "Eu te instruirei e te ensinarei o caminho que deves seguir.", oracao: "Jesus, mostra-me o próximo passo com clareza. Confio que Tu sabes o caminho. Amém." },
          conflito_fam: { resumo: "O perdão não é concordar com o erro. É escolher não deixar o passado destruir o presente. Jesus pode restaurar o que parece quebrado demais.", verseRef: "Colossenses 3:13", verseText: "Assim como o Senhor vos perdoou, assim também perdoai vós.", oracao: "Jesus, cura o que está partido na minha família. Dá-me humildade para agir com amor. Amém." },
          distancia_fam: { resumo: "A distância entre as pessoas raramente é de quilômetros. Jesus pode reconstruir pontes onde a rotina criou muros.", verseRef: "Efésios 4:2", verseText: "Suportai-vos uns aos outros em amor, procurando guardar a unidade do Espírito.", oracao: "Jesus, me ajuda a me aproximar de quem amo. Com paciência, com presença, com amor. Amém." },
          medo_filhos: { resumo: "O cuidado que você coloca nos seus filhos não é em vão. Deus vê cada ato de amor. E age além do que seus olhos alcançam.", verseRef: "Provérbios 22:6", verseText: "Instrui o menino no caminho em que deve andar; e até quando envelhecer não se desviará dele.", oracao: "Jesus, cuida dos meus filhos quando eu não puder estar lá. Guia-os pelo Teu caminho. Amém." }
        }
      }
    },
    melhor_idade: {
      sonho: {
        sonhoIntro: "A sua história não acabou. Mas às vezes o silêncio pesa.\n\nVocê olha para uma vida inteira vivida e uma pergunta aparece: ainda tenho valor? Ainda importo?\n\nEssas perguntas não são sinal de fraqueza. São sinal de que o seu coração ainda pulsa com força.",
        pergunta: "O que você mais deseja nessa fase da sua vida?",
        opcoes: [
          { id: "paz_profunda", label: "Ter paz de verdade no coração", description: "Uma tranquilidade que não depende das circunstâncias." },
          { id: "legado", label: "Sentir que minha vida fez diferença", description: "Que o que construí e vivi não foi em vão." },
          { id: "presenca", label: "Não estar sozinho", description: "Ter presença real, conexão e sentir que ainda sou visto e amado." }
        ]
      },
      mito: {
        porSonho: {
          paz_profunda: {
            verseRef: "Filipenses 4:7",
            verseText: "A paz de Deus, que excede todo o entendimento, guardará os vossos corações.",
            intro: "E se a paz que você busca não dependesse das circunstâncias?\n\nJesus prometeu uma paz que vai além de toda compreensão. Não é a ausência de dificuldades. É uma serenidade que guarda o coração por dentro.",
            pergunta: "O que mais rouba essa paz do seu coração?",
            opcoes: [
              { id: "saude", label: "A preocupação com a saúde não me larga", description: "O corpo muda e o medo do que vem pela frente é constante." },
              { id: "arrependimento", label: "Tenho coisas do passado que ainda pesam", description: "Memórias e escolhas que aparecem no silêncio." },
              { id: "medo_fim", label: "O pensamento sobre a morte me traz angústia", description: "A incerteza sobre o que vem depois traz um peso difícil de carregar." }
            ]
          },
          legado: {
            verseRef: "Salmos 92:14",
            verseText: "Na velhice darão ainda frutos, serão cheios de seiva e de verdor.",
            intro: "E se a sua história não tivesse terminado? E se estivesse no capítulo mais importante?\n\nDeus não descarta quem viveu muito. Ele usa a experiência, a fé e a sabedoria que só o tempo constrói. Sua vida ainda tem páginas para serem escritas.",
            pergunta: "O que mais pesa quando você pensa nisso?",
            opcoes: [
              { id: "invisivel", label: "Me sinto invisível para quem está ao redor", description: "A sensação de que o mundo passou e me deixou pra trás." },
              { id: "familia_longe", label: "Minha família está distante ou desunida", description: "A dor de ver quem você ama afastado de você ou de Deus." },
              { id: "sem_mais_proposito", label: "Sinto que já não tenho mais nada a oferecer", description: "A voz que diz que seu tempo de contribuir já passou." }
            ]
          },
          presenca: {
            verseRef: "Isaías 46:4",
            verseText: "Até à vossa velhice, eu serei o mesmo e ainda até às cãs eu vos carregarei.",
            intro: "E se o silêncio que você sente não fosse abandono? E se fosse o espaço onde Deus fala mais claramente?\n\nJesus prometeu: não vos deixarei órfãos. Não é uma promessa distante. É uma presença que esteve com você em cada momento que você pensou que estava sozinho.",
            pergunta: "O que mais pesa nessa solidão?",
            opcoes: [
              { id: "solidao_dura", label: "A solidão dói de um jeito difícil de explicar", description: "O silêncio que grita mais alto do que qualquer barulho." },
              { id: "saudade_ausente", label: "A saudade de quem já não está mais", description: "A ausência de pessoas amadas que deixou um espaço que ninguém preenche." },
              { id: "sem_comunidade", label: "Não tenho pessoas com quem compartilhar a vida", description: "Falta alguém pra ouvir, pra caminhar junto, pra estar presente." }
            ]
          }
        }
      },
      final: {
        pilares: [
          { titulo: "Aceitação", texto: "Você é precioso exatamente como está. Não pelo que ainda produz, mas porque foi feito por Deus. Isso nunca muda." },
          { titulo: "Propósito", texto: "A sua vida ainda tem missão. A experiência que você carrega é um tesouro. Suas orações têm poder. Sua presença tem peso." },
          { titulo: "Relacionamento", texto: "Alguém que nunca vai embora. Amigos partem. O mundo muda. Mas há Uma Presença que prometeu nunca te abandonar." }
        ],
        porSonho: {
          paz_profunda: "Você quer paz de verdade. E ela não depende das circunstâncias. Jesus veio trazer exatamente isso.",
          legado: "Você quer sentir que sua vida fez diferença. E fez. Muito mais do que você consegue ver agora.",
          presenca: "Você não quer estar sozinho. E Deus nunca planejou que você estivesse."
        },
        porMito: {
          saude: { resumo: "Deus não desvia o olhar da sua dor. Em cada limitação que você sente, Ele já está lá do seu lado.", verseRef: "Salmos 41:3", verseText: "O Senhor o assiste no leito da enfermidade.", oracao: "Jesus, entrego meu corpo e minha saúde nas Tuas mãos. Confio que Tu és o meu cuidador. Amém." },
          arrependimento: { resumo: "O passado não tem poder sobre quem foi perdoado. Jesus carregou tudo isso na cruz, inclusive o que ainda pesa em você.", verseRef: "1 João 1:9", verseText: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados.", oracao: "Jesus, eu recebo Teu perdão hoje. Me liberta do que ficou preso no passado. Amém." },
          medo_fim: { resumo: "Em Jesus, a morte não é o fim. É uma passagem. Ele já foi à frente para preparar o que vem depois.", verseRef: "João 11:25", verseText: "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.", oracao: "Jesus, retiro meu medo diante de Ti. Confio que estou nas Tuas mãos, agora e para sempre. Amém." },
          invisivel: { resumo: "Aos olhos de Deus, você é precioso. Nenhuma fase da vida diminui o seu valor. Cada fase o revela.", verseRef: "Isaías 43:4", verseText: "Porque és precioso aos meus olhos, és glorioso, e eu te amo.", oracao: "Jesus, me mostra que ainda sou visto e amado por Ti. Renova meu senso de propósito. Amém." },
          familia_longe: { resumo: "Suas orações pela família chegam mais longe do que seus braços alcançam. Deus ouve e age além do que seus olhos veem.", verseRef: "Josué 24:15", verseText: "Eu e a minha casa serviremos ao Senhor.", oracao: "Jesus, cuida de quem eu amo. Aproxima quem está longe, de mim e de Ti. Amém." },
          sem_mais_proposito: { resumo: "Você ainda tem frutos a dar. A experiência que você carrega é preciosa. E Deus ainda tem espaço para ela.", verseRef: "Salmos 92:14", verseText: "Na velhice darão ainda frutos, serão cheios de seiva e de verdor.", oracao: "Jesus, me mostra que ainda tenho algo a oferecer. Usa minha história para o Teu propósito. Amém." },
          solidao_dura: { resumo: "A solidão mente quando diz que você está esquecido. Deus lembra de você com ternura e nunca te abandonou.", verseRef: "João 14:18", verseText: "Não vos deixarei órfãos; virei a vós.", oracao: "Jesus, entra na minha solidão. Sê minha companhia e me conecta com quem pode caminhar comigo. Amém." },
          saudade_ausente: { resumo: "A saudade que você sente é o reflexo do amor que você teve. Esse amor não desaparece. Em Jesus, há esperança que vai além desta vida.", verseRef: "1 Tessalonicenses 4:14", verseText: "Assim também os que dormem em Jesus, Deus os tornará a trazer com ele.", oracao: "Jesus, consola meu coração pela ausência de quem amei. Dá-me paz e a esperança do reencontro. Amém." },
          sem_comunidade: { resumo: "Você não foi feito para viver a fé sozinho. Há uma comunidade que pode ser sua família, real, presente e que te acolhe.", verseRef: "Hebreus 10:25", verseText: "Não deixando a nossa congregação, como é costume de alguns.", oracao: "Jesus, me conecta com pessoas reais que caminhem comigo. Não quero mais viver só. Amém." }
        }
      }
    }
  };

  const elements = {
    stepSections: document.querySelectorAll(".step"),
    profileCards: document.querySelectorAll(".profile-card"),
    hero: document.querySelector(".hero"),
    progressFill: document.getElementById("progressFill"),
    progressLabel: document.getElementById("progressLabel"),
    progressAffirmation: document.getElementById("progressAffirmation"),

    burdenSectionTitle: document.getElementById("burdenQuestion"),
    burdenBanner: document.getElementById("burdenBanner"),
    burdenOptions: document.getElementById("burdenOptions"),

    supportSectionTitle: document.getElementById("supportQuestion"),
    supportIntro: document.getElementById("supportIntro"),
    supportOptions: document.getElementById("supportOptions"),

    backToProfile: document.getElementById("backToProfile"),
    backToBurden: document.getElementById("backToBurden"),
    restartJourney: document.getElementById("restartJourney"),

    finalPilares: document.getElementById("finalPilares"),
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

  function obterConfigMito() {
    const fluxo = obterFluxoPerfil();
    if (!fluxo || !estado.escolhaPasso1) return null;
    return fluxo.mito.porSonho[estado.escolhaPasso1] || null;
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
    if (elements.hero) {
      elements.hero.classList.toggle("hidden", stepId !== "welcome");
    }
  }

  function formatarVersiculo(ref, texto, intro) {
    return `<span class="verse-block"><em class="verse-ref">${ref}</em><span class="verse-text">"${texto}"</span></span><span class="verse-intro">${intro}</span>`;
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
      elements.burdenSectionTitle.textContent = fluxo.sonho.pergunta;
    }
    if (elements.burdenBanner) {
      const imgMap = { jovem: "jovem.png", adulto: "adulto.png", melhor_idade: "melhor%20idade.png" };
      elements.burdenBanner.src = imgMap[estado.perfilSelecionado] || "";
      elements.burdenBanner.alt = fluxo.sonho.pergunta;
    }

    renderizarOpcoes(
      elements.burdenOptions,
      fluxo.sonho.opcoes,
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
    const configMito = obterConfigMito();
    if (!fluxo || !configMito) return;

    if (elements.supportSectionTitle) {
      elements.supportSectionTitle.textContent = configMito.pergunta;
    }
    if (elements.supportIntro) {
      elements.supportIntro.innerHTML = formatarVersiculo(
        configMito.verseRef,
        configMito.verseText,
        configMito.intro
      );
    }

    renderizarOpcoes(
      elements.supportOptions,
      configMito.opcoes,
      (opcaoId) => {
        estado.escolhaPasso2 = opcaoId;
        carregarPasso("final");
      },
      estado.escolhaPasso2
    );
  }

  function renderizarFinal() {
    const fluxo = obterFluxoPerfil();
    if (!fluxo) return;

    const solucao = fluxo.final.porMito[estado.escolhaPasso2];
    const introSonho = fluxo.final.porSonho[estado.escolhaPasso1];

    if (elements.finalPilares && fluxo.final.pilares) {
      elements.finalPilares.innerHTML = fluxo.final.pilares.map((p) =>
        `<div class="pilar-card"><h4 class="pilar-titulo">${p.titulo}</h4><p class="pilar-texto">${p.texto}</p></div>`
      ).join("");
    }

    if (elements.finalIntro) {
      elements.finalIntro.textContent = introSonho || "";
    }

    if (elements.finalBurden) {
      elements.finalBurden.textContent = solucao ? solucao.resumo : "";
    }

    if (elements.finalSupport) {
      elements.finalSupport.textContent = "";
    }

    if (elements.finalCommunity) {
      elements.finalCommunity.textContent = "Essa mensagem não chegou até você por acaso. É o amor de Jesus te alcançando, exatamente aqui, exatamente agora.";
      elements.finalCommunity.classList.remove("hidden");
    }

    if (elements.finalVerse && solucao) {
      elements.finalVerse.textContent = `"${solucao.verseText}" (${solucao.verseRef})`;
    }

    if (elements.guidedPrayer && solucao) {
      elements.guidedPrayer.textContent = solucao.oracao;
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
