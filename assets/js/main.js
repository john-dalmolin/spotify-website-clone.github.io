/*=============== CATEGORIES ===============*/

/*
 * Troca classes e controla a exibição dos botões de seta em uma seção de categorias.
 * @param {NodeList} sections - Lista de elementos que representam as seções de categorias.
 * @param {Array} arrow - Array contendo os elementos dos botões de seta (direita e esquerda).
 * @param {string} classAdicionar - Classe a ser adicionada às seções de categorias.
 * @param {string} classRemover - Classe a ser removida das seções de categorias.
 */

// Função para trocar classes e controle dos botões de seta
function trocarClasses(sections, arrow, classAdicionar, classRemover) {
  sections.forEach((section) => {
    section.classList.remove(classRemover);
    section.classList.add(classAdicionar);
  });

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
    trocarClasses(
      categoriesSection,
      [rightArrow, leftArrow],
      "MUloQuW1xQawwVs0mDp4",
      "OlnSvEViCZ_vVdnc3mSQ"
    );
  });
}

// Evento de clique para a seta esquerda
if (leftArrow) {
  leftArrow.addEventListener("click", () => {
    trocarClasses(
      categoriesSection,
      [leftArrow, rightArrow],
      "OlnSvEViCZ_vVdnc3mSQ",
      "MUloQuW1xQawwVs0mDp4"
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
