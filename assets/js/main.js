/*=============== CATEGORIES ===============*/

/*
 * Troca classes e controla a exibição dos botões de seta em uma seção de categorias.
 * @param {NodeList} sections - Lista de elementos que representam as seções de categorias.
 * @param {Array} arrow - Array contendo os elementos dos botões de seta (direita e esquerda).
 * @param {string} classAdicionar - Classe a ser adicionada às seções de categorias.
 * @param {string} classRemover - Classe a ser removida das seções de categorias.
 * @param {HTMLElement} scrollAmount - Elemento que contém as seções de categoria.
 */

// Função para trocar classes e controle dos botões de seta
function trocarClassesScroll(
  sections,
  arrow,
  classAdicionar,
  classRemover,
  scrollAmount
) {
  sections.forEach((section) => {
    section.classList.remove(classRemover);
    section.classList.add(classAdicionar);
  });

  // Elemento que contém todas as seções de categoria
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.scrollLeft += scrollAmount;

  arrow.forEach((arrow) => {
    arrow.classList.toggle("VfDGbMWaJe9rcefizTNk");
  });
}

// Elementos selecionados
const categoriesSection = document.querySelectorAll(".KjPUGV8uMbl_0bvk9ePv"),
  rightArrow = document.getElementById("right-arrow"),
  leftArrow = document.getElementById("left-arrow");

// Evento de clique para a seta direita
if (rightArrow) {
  rightArrow.addEventListener("click", () => {
    trocarClassesScroll(
      categoriesSection,
      [rightArrow, leftArrow],
      "MUloQuW1xQawwVs0mDp4",
      "OlnSvEViCZ_vVdnc3mSQ",
      200 // Quantidade de rolagem para a direita
    );
  });
}

// Evento de clique para a seta esquerda
if (leftArrow) {
  leftArrow.addEventListener("click", () => {
    trocarClassesScroll(
      categoriesSection,
      [leftArrow, rightArrow],
      "OlnSvEViCZ_vVdnc3mSQ",
      "MUloQuW1xQawwVs0mDp4",
      -200 // Quantidade de rolagem para a esquerda
    );
  });
}

/*=============== SCROLLBAR ===============*/

/*
 * Controla a exibição das barras de rolagem horizontal e vertical em uma área de conteúdo.
 * @param {HTMLElement} scrollbarContent - Elemento que contém o conteúdo com as barras de rolagem.
 * @param {HTMLElement} scrollbarHorizontal - Elemento da barra de rolagem horizontal.
 * @param {HTMLElement} scrollbarVertical - Elemento da barra de rolagem vertical.
 * @param {number} timeoutDuration - Duração do timeout em milissegundos (opcional, padrão é 1000).
 */

function controlarBarraDeRolagem(
  scrollbarContent,
  scrollbarHorizontal,
  scrollbarVertical,
  timeoutDuration = 1000
) {
  let timeoutScrollbar;

  if (scrollbarContent) {
    // Adiciona o evento de mouseenter ao elemento
    scrollbarContent.addEventListener("mouseenter", () => {
      clearTimeout(timeoutScrollbar); // Limpa o timeout se o mouse entrar novamente
      // Remove as classes
      scrollbarHorizontal.classList.remove("os-scrollbar-auto-hidden");
      scrollbarVertical.classList.remove("os-scrollbar-auto-hidden");
    });

    // Adiciona o evento de mouseleave ao elemento
    scrollbarContent.addEventListener("mouseleave", () => {
      timeoutScrollbar = setTimeout(() => {
        // Adiciona as classes após o timeout
        scrollbarHorizontal.classList.add("os-scrollbar-auto-hidden");
        scrollbarVertical.classList.add("os-scrollbar-auto-hidden");
      }, timeoutDuration);
    });
  }
}

// Elementos selecionados
const scrollbarContent = document.querySelector(".os-content"),
  scrollbarHorizontal = document.getElementById("os-scrollbar-horizontal"),
  scrollbarVertical = document.getElementById("os-scrollbar-vertical");

// Chama a função para controlar a barra de rolagem
controlarBarraDeRolagem(
  scrollbarContent,
  scrollbarHorizontal,
  scrollbarVertical
);

/*=============== SEARCH BAR ===============*/

/*
 * Controla o comportamento da barra de pesquisa, incluindo a exibição do input e a troca de classes.
 * @param {HTMLElement} searchBar - O elemento que atua como a barra de pesquisa.
 * @param {HTMLElement} searchInput - O input de pesquisa.
 * @param {HTMLElement} searchButton - O botão de pesquisa.
 */

document.addEventListener("DOMContentLoaded", function () {
  function controlarBarraDePesquisa(searchBar, searchInput, searchButton) {
    if (searchBar) {
      // Adiciona o evento de mouseenter para mostrar o contexto do menu
      searchBar.addEventListener("mouseenter", () => {
        searchBar.setAttribute("data-context-menu-open", "true");
      });

      // Adiciona o evento de mouseleave para ocultar o contexto do menu
      searchBar.addEventListener("mouseleave", () => {
        searchBar.removeAttribute("data-context-menu-open");
      });

      // Adiciona o evento de clique para exibir o input de pesquisa e ocultar o botão
      searchBar.addEventListener("click", () => {
        searchBar.classList.add("t6HIrX67Lp80Nj6tGauz");
        searchInput.setAttribute("aria-hidden", "false");
        searchInput.removeAttribute("tabindex");
        searchButton.setAttribute("aria-hidden", "true");
        searchButton.setAttribute("tabindex", "-1");
        searchInput.focus(); // Define o foco no input quando ele for exibido
      });
    }

    // Adiciona um event listener para fechar a barra de pesquisa ao clicar fora dela
    document.addEventListener("click", (event) => {
      if (!searchBar.contains(event.target)) {
        searchBar.classList.remove("t6HIrX67Lp80Nj6tGauz");
        searchInput.setAttribute("aria-hidden", "true");
        searchInput.setAttribute("tabindex", "-1");
        searchButton.setAttribute("aria-hidden", "false");
        searchButton.removeAttribute("tabindex");
      }
    });
  }

  // Elementos da barra de pesquisa
  const buscarDiv = document.querySelector(".JzZyf6OGCGtdscOZGt8Y");
  const buscarInput = document.querySelector(".QZhV0hWVKlExlKr266jo");
  const buscarButton = document.querySelector(".wCl7pMTEE68v1xuZeZiB");

  // Chamada da função para controlar a barra de pesquisa
  controlarBarraDePesquisa(buscarDiv, buscarInput, buscarButton);
});

/*=============== HEART BUTTON ===============*/

/*
 * Controla a interação do usuário com o botão de coração para favoritar ou desfavoritar uma música.
 * @param {Element} controlButtonHeart - Elemento que representa o botão de coração.
 * @param {Element} buttonHeartSVG - Elemento SVG do botão de coração.
 * @param {string} isButtonActive - Estado atual do botão (ativo ou inativo).
 */

// Elementos selecionados
const controlButtonHeart = document.querySelector(".control-button-heart"),
  buttonHeartSVG = document.getElementById("heartButton");

let isButtonActive = "true";

// Evento de clique para o botão de coração
if (controlButtonHeart) {
  controlButtonHeart.addEventListener("click", () => {
    // Alternar entre as duas configurações
    if (isButtonActive) {
      controlButtonHeart.classList.replace("yUUNA", "lhGroS");
      controlButtonHeart.setAttribute("aria-checked", "false");
      controlButtonHeart.setAttribute(
        "aria-label",
        "Remover da Sua Biblioteca"
      );
      buttonHeartSVG.setAttribute(
        "d",
        "M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"
      );
    } else {
      controlButtonHeart.classList.replace("lhGroS", "yUUNA");
      controlButtonHeart.setAttribute("aria-checked", "true");
      controlButtonHeart.setAttribute("aria-label", "Salvar na Sua Biblioteca");
      buttonHeartSVG.setAttribute(
        "d",
        "M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"
      );
    }
    // Inverter o estado do botão
    isButtonActive = !isButtonActive;
  });
}

/*=============== NOW PLAYING ===============*/

/*
 * Controla a ordem de reprodução aleatória das músicas.
 * @param {Element} ordemButton - Elemento que representa o botão de ordem de reprodução.
 * @param {string} isOrdemButtonActive - Estado atual da ordem de reprodução (ativa ou inativa).
 */

// Elemento selecionado
const ordemButton = document.querySelector(".KVKoQ3u4JpKTvSSFtd6J");

let isOrdemButtonActive = "false";

// Evento de clique para o botão de ordem de reprodução
if (ordemButton) {
  ordemButton.addEventListener("click", () => {
    // Alternar entre as duas configurações
    if (isOrdemButtonActive) {
      ordemButton.classList.add("OF_3F0SQCsBtL1jSTlTA");
      ordemButton.setAttribute("aria-checked", "true");
      ordemButton.setAttribute("aria-label", "Desativar a ordem aleatória");
    } else {
      ordemButton.classList.remove("OF_3F0SQCsBtL1jSTlTA");
      ordemButton.setAttribute("aria-checked", "false");
      ordemButton.setAttribute("aria-label", "Ativar a ordem aleatória");
    }
    // Inverter o estado do botão
    isOrdemButtonActive = !isOrdemButtonActive;
  });
}

/*=============== REPEAT CONTROL ===============*/

/*
 * Controla o modo de repetição das faixas.
 * @param {Element} repeatButton - O botão de controle de repetição.
 * @param {Element} repeatSVG - O elemento SVG do botão de repetição.
 * @param {Element} repeatPath - O caminho SVG do botão de repetição.
 */

// Selecionar elementos do botão de repetição
const repeatButton = document.querySelector(".Vz6yjzttS0YlLcwrkoUR"),
  repeatSVG = document.getElementById("control-button-svg"),
  repeatPath = document.getElementById("control-button-path");

// Adicionar evento de clique ao botão de repetição
repeatButton.addEventListener("click", () => {
  const currentAriaLabel = repeatButton.getAttribute("aria-label");

  // Alternar entre os modos de repetição
  switch (currentAriaLabel) {
    case "Repetir":
      // Ativar o modo de repetição de uma faixa
      repeatButton.classList.add("tP0mccyU1WAa7I9PevC1");
      repeatButton.setAttribute("aria-label", "Repetir uma faixa");
      repeatButton.setAttribute("aria-checked", "true");
      repeatPath.setAttribute(
        "d",
        "M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
      );
      break;
    case "Repetir uma faixa":
      // Ativar o modo de não repetição
      repeatButton.setAttribute("aria-checked", "mixed");
      repeatButton.setAttribute("aria-label", "Não repetir");
      repeatPath.setAttribute(
        "d",
        "M0 4.75A3.75 3.75 0 0 1 3.75 1h.75v1.5h-.75A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25z"
      );
      // Adicionar um ícone para indicar o modo de não repetição
      repeatSVG.innerHTML +=
        '<path d="M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z"></path>';
      break;
    case "Não repetir":
      // Desativar o modo de não repetição
      repeatSVG.removeChild(repeatSVG.children[1]);
      repeatButton.classList.remove("tP0mccyU1WAa7I9PevC1");
      repeatButton.setAttribute("aria-checked", "false");
      repeatButton.setAttribute("aria-label", "Repetir");
      repeatPath.setAttribute(
        "d",
        "M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
      );
      break;
    default:
      break;
  }
});

/*=============== RESPONSIVE LAYOUT CARDS BASED ON RESOLUTION ===============*/

/*
 * Ajusta dinamicamente o número de colunas com base na largura da tela.
 * @function adjustAttributes
 */

function adjustAttributes() {
  // Obtém a largura da tela
  const screenWidth = window.innerWidth;
  // Seleciona todas as seções dinâmicas de div
  const dynamicDivSections = document.querySelectorAll(".iKwGKEfAfW7Rkx2_Ba4E");

  // Itera sobre cada seção dinâmica de div
  dynamicDivSections.forEach((dynamicDivSection) => {
    // Define o número de colunas com base na largura da tela
    switch (true) {
      case screenWidth >= 1920:
        dynamicDivSection.style.setProperty("--column-count", 8);
        break;
      case screenWidth > 1735:
        dynamicDivSection.style.setProperty("--column-count", 7);
        break;
      case screenWidth > 1425:
        dynamicDivSection.style.setProperty("--column-count", 6);
        break;
      case screenWidth > 1250:
        dynamicDivSection.style.setProperty("--column-count", 5);
        break;
      case screenWidth > 1035:
        dynamicDivSection.style.setProperty("--column-count", 4);
        break;
      case screenWidth > 835:
        dynamicDivSection.style.setProperty("--column-count", 3);
        break;
      case screenWidth <= 835:
        dynamicDivSection.style.setProperty("--column-count", 2);
        break;
      default:
        break;
    }
  });
}

// Ajusta os atributos quando a página é carregada
adjustAttributes();

// Ajusta os atributos quando a tela é redimensionada
window.addEventListener("resize", adjustAttributes);

/*=============== RESIZE OS-CONTENT ===============*/

/*
 * Ajusta dinamicamente o número de colunas com base na largura da tela.
 * @function adjustResizeAttributes
 */

function adjustResizeAttributes() {
  // Obtém a largura da tela
  const screenWidthResize = window.innerWidth;
  // Seleciona a Div com o conteúdo
  const resizeContentGlue = document.querySelector(".os-content-glue");

  switch (true) {
    case screenWidthResize >= 1694:
      resizeContentGlue.style.setProperty("width", "419px");
      break;
    case screenWidthResize > 1450:
      resizeContentGlue.style.setProperty("width", "389px");
      break;
    case screenWidthResize > 1315:
      resizeContentGlue.style.setProperty("width", "350px");
      break;
    case screenWidthResize > 1135:
      resizeContentGlue.style.setProperty("width", "325px");
      break;
    case screenWidthResize > 835:
      resizeContentGlue.style.setProperty("width", "290px");
      break;
    case screenWidthResize <= 835:
      resizeContentGlue.style.setProperty("width", "280px");
      break;
    default:
      break;
  }
}

// Ajusta os atributos quando a página é carregada
adjustResizeAttributes();

// Ajusta os atributos quando a tela é redimensionada
window.addEventListener("resize", adjustResizeAttributes);

/*
 * Ajusta dinamicamente o número de colunas com base na largura da tela.
 * @function adjustWebResizeAttributes
 */

function adjustWebResizeAttributes() {
  // Obtém a largura da tela
  const screenWidthWebResize = window.innerWidth;
  // Seleciona a Div com o conteúdo
  const resizeWebContent = document.querySelector(
    ".spotify__container--is-web"
  );

  switch (true) {
    case screenWidthWebResize >= 1694:
      resizeWebContent.style.setProperty("--left-sidebar-width", "420px");
      resizeWebContent.style.setProperty("--panel-width", "420px");
      break;
    case screenWidthWebResize > 1450:
      resizeWebContent.style.setProperty("--left-sidebar-width", "383px");
      resizeWebContent.style.setProperty("--panel-width", "383px");
      break;
    case screenWidthWebResize > 1315:
      resizeWebContent.style.setProperty("--left-sidebar-width", "348px");
      resizeWebContent.style.setProperty("--panel-width", "348px");
      break;
    case screenWidthWebResize > 1135:
      resizeWebContent.style.setProperty("--left-sidebar-width", "315px");
      resizeWebContent.style.setProperty("--panel-width", "315px");
      break;
    case screenWidthWebResize > 835:
      resizeWebContent.style.setProperty("--left-sidebar-width", "280px");
      resizeWebContent.style.setProperty("--panel-width", "107px");
      break;
    case screenWidthWebResize < 835:
      resizeWebContent.style.setProperty("--panel-width", "85px");
      break;
    default:
      break;
  }
}

// Ajusta os atributos quando a página é carregada
adjustWebResizeAttributes();

// Ajusta os atributos quando a tela é redimensionada
window.addEventListener("resize", adjustWebResizeAttributes);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const nav = document.getElementById("header");
  const scrollY = document.querySelector(".area-scroll").scrollTop;

  if (scrollY >= 150) {
    nav.style.setProperty("--top-bar-opacity", "1.0");
  } else {
    nav.style.setProperty("--top-bar-opacity", "0.0");
  }
}

document.querySelector(".area-scroll").addEventListener("scroll", scrollHeader);

/*=============== CHANGE THE BACKGROUND COLOR BASED ON TRACK ===============*/
// Selecionar elementos relacionados as tracks dentro do header
const firstPartHeader = document.querySelector(".T1xI1RTSFU7Wu94UuvE6"),
  secondPartHeader = document.querySelector(".HsbczDqu9qjcYr7EIdHR"),
  listOfTracks = document.querySelectorAll(".Z35BWOA10YGn5uc9YgAp");

// Adicionar evento de mouseenter a cada elemento em listOfTracks
listOfTracks.forEach((track) => {
  track.addEventListener("mouseenter", () => {
    const currentAriaPosinset = track.getAttribute("aria-posinset");

    // Alternar entre os modos dependendo da posição da track
    switch (currentAriaPosinset) {
      case "1":
        firstPartHeader.style.setProperty("background-color", "rgb(35, 6, 94)");
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(35, 6, 94)"
        );
        break;
      case "2":
        firstPartHeader.style.setProperty(
          "background-color",
          "rgb(80, 40, 240)"
        );
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(80, 40, 240)"
        );
        break;
      case "3":
        firstPartHeader.style.setProperty(
          "background-color",
          "rgb(32, 56, 80)"
        );
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(32, 56, 80)"
        );
        break;
      case "4":
        firstPartHeader.style.setProperty("background-color", "rgb(72, 24, 0)");
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(72, 24, 0)"
        );
        break;
      case "5":
        firstPartHeader.style.setProperty(
          "background-color",
          "rgb(168, 103, 71)"
        );
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(168, 103, 71)"
        );
        break;
      case "6":
        firstPartHeader.style.setProperty(
          "background-color",
          "rgb(136, 9, 39)"
        );
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(136, 9, 39)"
        );
        break;
      case "7":
        firstPartHeader.style.setProperty(
          "background-color",
          "rgb(162, 162, 162)"
        );
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(162, 162, 162)"
        );
        break;
      case "8":
        firstPartHeader.style.setProperty(
          "background-color",
          "rgb(248, 99, 165)"
        );
        secondPartHeader.style.setProperty(
          "background-color",
          "rgb(248, 99, 165)"
        );
        break;
      default:
        break;
    }
  });
});

// Adicionar evento de mouseleave a listOfTracks
listOfTracks.forEach((track) => {
  track.addEventListener("mouseleave", () => {
    firstPartHeader.style.setProperty("background-color", "rgb(80, 40, 240)");
    secondPartHeader.style.setProperty("background-color", "rgb(80, 40, 240)");
  });
});

/*=============== DETECT OPERATIONAL SYSTEM BY USER ===============*/
function detectarSistemaOperacional() {
  const userAgent = navigator.userAgent;

  // Verificar se o usuário está usando Windows
  if (userAgent.match(/Windows/i)) {
    return "Windows";
  } // não será necessário utilizar nesse esquema

  // Verificar se o usuário está usando macOS
  if (userAgent.match(/Macintosh/i)) {
    return "Mac";
  }

  // Verificar se o usuário está usando um dispositivo móvel
  if (userAgent.match(/Android/i) || userAgent.match(/iPhone/i)) {
    return "Mobile";
  }

  // Se não for possível detectar o sistema operacional, retornar desconhecido
  return "Desconhecido";
}

// Executar a função e obter o sistema operacional do usuário
const sistemaOperacional = detectarSistemaOperacional();

/* SHOW CONTENT BASED ON OPERATIONAL SYSTEM */
// Selecionar o elemento <html>
const htmlElement = document.documentElement;

// Selecionar o elemento <body>
const bodyElement = document.body;

if (sistemaOperacional === "Mac") {
  htmlElement.classList.remove(
    "no-focus-outline spotify__os--is-windows spotify__container--is-web"
  );
  htmlElement.classList.add(
    "no-focus-outline spotify__os--is-macos spotify__container--is-web"
  );
} else if (sistemaOperacional === "Mobile") {
  // Remove atributos quando aberto via Mobile
  htmlElement.removeAttribute("class");
  htmlElement.removeAttribute("style");
  // Remove o corpo do site para adiocionar uma nova versão
  bodyElement.innerHTML = "";
  // Adiciona conteúdo HTML para versão Mobile
  htmlElement.innerHTML = `
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>O navegador não é compatível</title>
  <link rel="stylesheet" href="assets/css/mobile-version.css">
  <link rel="icon" sizes="32x32" type="image/png" href="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png">
  <link rel="icon" sizes="16x16" type="image/png" href="https://open.spotifycdn.com/cdn/images/favicon16.1c487bff.png">
  <link rel="icon" href="https://open.spotifycdn.com/cdn/images/favicon.0f31d2ea.ico">
  </head>
  <body class="mobile__container" >
  <div class="wrapper">
  <div class="icon">
  <img alt="Logo" src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg"></div>
  <div class="content"><h1>O navegador não é compatível</h1><p>O Spotify não está disponível neste navegador. Para ter uma experiência melhor, atualize o navegador ou baixe o app.</p>
  <div><a href="https://www.spotify.com/download" class="primary">Baixe o app</a>
  <a href="https://support.spotify.com/article/web-player-help/">Saiba mais</a></div></div></div></body>
  `;
}

/*=============== PROFILE BUTTON ACTIVATION ===============*/
function controlarMenuPerfil(profileButton, container, HTML) {
  let menuAberto = false; // Variável para controlar se o menu está aberto

  if (profileButton) {
    profileButton.addEventListener("click", () => {
      if (menuAberto) {
        // Se o menu já estiver aberto - remove-o
        const divMenu = document.querySelector(".menu-perfil");
        if (divMenu) {
          divMenu.remove();
          menuAberto = false; // Atualiza o estado do menu para fechado
        }
      } else {
        // Se o menu não estiver aberto, cria e adiciona-o
        const divMenu = document.createElement("div");
        divMenu.classList.add("menu-perfil");
        divMenu.innerHTML = HTML;
        container.appendChild(divMenu);
        menuAberto = true; // Atualiza o estado do menu para aberto
      }

      // Adiciona um ouvinte de evento para remover a div quando o foco sair dela
      document.addEventListener("focusout", function (event) {
        const divMenu = document.querySelector(".menu-perfil");
        // Verifica se o foco saiu do botão do perfil ou da própria div do menu
        if (
          !profileButton.contains(event.relatedTarget) &&
          !divMenu.contains(event.relatedTarget)
        ) {
          // Remove apenas a div do menu
          divMenu.remove();
          menuAberto = false; // Atualiza o estado do menu para fechado
        }
      });
    });
  }
}

const profileButton = document.querySelector(".SFgYidQmrqrFEVh65Zrg"),
  container = document.querySelector(".encore-dark-theme.encore-layout-themes"),
  HTML = `
  <div data-tippy-root="" id="tippy-144" style="z-index: 9999; position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-32px, 64px);">
      <div id="context-menu" data-testid="context-menu" data-placement="bottom-end">
          <div data-testid="user-widget-menu" class="ERyo7m5f00o7ToFdGMCD">
              <ul tabindex="0" role="menu" data-depth="0" class="encore-dark-theme encore-layout-themes NbcaczStd8vD2rHWwaKv" data-roving-interactive="1">
                  <!--==================== First Item on Menu ====================-->
                  <li role="presentation" class="rQ6LXqVlEOGZdGIG0LgP"><button class="mWj8N7D_OlsbDgtQx5GW" role="menuitem" tabindex="-1"><span dir="auto" class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line htqz7Vb8mLJvGKTi1vrs" data-encore-id="type">Conta</span><svg data-encore-id="icon" role="img" aria-label="Link externo" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path></svg></button></li>
                  <!--==================== Second Item on Menu ====================-->
                  <li role="presentation" class="rQ6LXqVlEOGZdGIG0LgP"><a role="menuitem" class="mWj8N7D_OlsbDgtQx5GW" href="/user/31hm7oxix2wgd73ctmiweji7beti" tabindex="-1"><span dir="auto" class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line htqz7Vb8mLJvGKTi1vrs" data-encore-id="type">Perfil</span></a></li>
                  <!--==================== Third Item on Menu ====================-->
                  <li role="presentation" class="rQ6LXqVlEOGZdGIG0LgP"><a class="mWj8N7D_OlsbDgtQx5GW" role="menuitem" href="https://support.spotify.com/" target="_blank" tabindex="-1"><span dir="auto" class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line htqz7Vb8mLJvGKTi1vrs" data-encore-id="type">Suporte</span><svg data-encore-id="icon" role="img" aria-label="Link externo" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path></svg></a></li>
                  <!--==================== Fourth Item on Menu ====================-->
                  <li role="presentation" class="rQ6LXqVlEOGZdGIG0LgP"><a class="mWj8N7D_OlsbDgtQx5GW" role="menuitem" href="https://spotify.com/download" target="_blank" tabindex="-1"><span dir="auto" class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line htqz7Vb8mLJvGKTi1vrs" data-encore-id="type">Baixar</span><svg data-encore-id="icon" role="img" aria-label="Link externo" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path></svg></a></li>
                  <!--==================== Fifth Item on Menu ====================-->
                  <li role="presentation" class="rQ6LXqVlEOGZdGIG0LgP"><a role="menuitem" class="mWj8N7D_OlsbDgtQx5GW Vz3pFUXmll6fKB5Fc4nd" href="/preferences" tabindex="-1"><span dir="auto" class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line htqz7Vb8mLJvGKTi1vrs" data-encore-id="type">Configurações</span></a></li>
                  <!--==================== Sixth Item on Menu ====================-->
                  <li role="presentation" class="rQ6LXqVlEOGZdGIG0LgP"><button data-testid="user-widget-dropdown-logout" class="mWj8N7D_OlsbDgtQx5GW" role="menuitem" tabindex="-1"><span dir="auto" class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line htqz7Vb8mLJvGKTi1vrs" data-encore-id="type">Sair</span></button></li>
                </ul>
          </div>
      </div>
  </div>
    `;

// Chama a função para controlar o menu do perfil
controlarMenuPerfil(profileButton, container, HTML);

/*=============== SCROLLBAR HANDLE ===============*/
// (working on it...)