// Verifica que el DOM cargo por completo
window.addEventListener("DOMContentLoaded", () => {
  // ---------- Renderiza los botones y sus contenedores

  const container = document.querySelector(".buttons-basic"); // Contenedor
  const icons = new SVG("20px", "20px"); // Crea una nueva instancia de iconos

  // Create a elements base
  const containerEndButtons = createDiv(`container-buttons-end`);
  const containerEndButtonsNumbers = createDiv(`container-buttons-end-numbers`);

  //   Recorre la distribucionde botones Basicos
  buttonLayout.Basic.map((listCharacters, index) => {
    let containerButtons;
    if (buttonLayout.Basic.length - 1 != index) {
      containerButtons = createDiv(`constainer-butons`);

      if (index >= 3) {
        containerEndButtonsNumbers.appendChild(containerButtons);
      } else {
        container.appendChild(containerButtons); // Agregalo al contedor total
      }
    }

    // Recorre la sublista de botones
    listCharacters.map((character) => {
      let className = "";
      if (character === "=") className = "button special";
      else className = "button";

      let buttonCharacter = createButton(`${className} ${character}`); // Boton de cada caracter
      let icon = character === "del" ? icons.delete : character;
      buttonCharacter.innerHTML = icon; // Agreaga el valor del boton

      if (character != "=") containerButtons.appendChild(buttonCharacter);
      // Agregalo al contendor de botones
      else containerEndButtons.appendChild(buttonCharacter);
    });

    // Assing elements div as container element.
    containerEndButtons.appendChild(containerEndButtonsNumbers);
    container.appendChild(containerEndButtons);

    // ---------- Fin de la renderizacion de los botones
  });
});
