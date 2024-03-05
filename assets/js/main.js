/* ao clicar no botao para ampliar para a direita, remover atributo: "OlnSvEViCZ_vVdnc3mSQ" da div 
 classe: "KjPUGV8uMbl_0bvk9ePv". E adicionar atributo: "MUloQuW1xQawwVs0mDp4" no lugar. */

/* ao clicar no botao para ampliar para a direita, remover atributo: "VfDGbMWaJe9rcefizTNk" da div 
classe 1: "XTk61Y8OkBdUT6Wj4F6i" e adicionar atributo na div classe2: "XTk61Y8OkBdUT6Wj4F6i". */

/* get the elements */
const menuCategories = document.querySelectorAll(".KjPUGV8uMbl_0bvk9ePv.OlnSvEViCZ_vVdnc3mSQ");
const leftArrow = document.querySelectorAll(".XTk61Y8OkBdUT6Wj4F6i");
const rightArrow = document.querySelectorAll(".XTk61Y8OkBdUT6Wj4F6i.VfDGbMWaJe9rcefizTNk");

/* validate if constants exist */
if (rightArrow.length > 0 && menuCategories.length === rightArrow.length) {
  rightArrow.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
      // Remove a classe do botão de seta para a direita
      arrow.classList.remove("VfDGbMWaJe9rcefizTNk");
      // Adiciona a classe ao elemento de menu correspondente
      menuCategories[i].classList.remove("OlnSvEViCZ_vVdnc3mSQ");
      menuCategories[i].classList.add("MUloQuW1xQawwVs0mDp4");
      leftArrow[i].classList.add("VfDGbMWaJe9rcefizTNk");
    });
  });
}