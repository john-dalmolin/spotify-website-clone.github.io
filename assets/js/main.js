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
