const w = window;

// Verifica que el DOM cargo por completo
w.addEventListener("DOMContentLoaded", () => {
  // ---------- Renderiza los botones y sus contenedores

  const container = document.querySelector(".buttons-basic"); // Contenedor
  const icons = new SVG("20px", "20px"); // Crea una nueva instancia de iconos

  //   Crea un nuevo elemento div
  const createNewDiv = (className = "") => {
    const div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  };

  //   Crea un nuevo elemento boton
  const createNewBotton = (className) => {
    const button = document.createElement("button");
    button.setAttribute("class", className);
    return button;
  };

  //   Recorre la distribucionde botones Basicos
  buttonLayout.Basic.map((listCharacters) => {
    const containerButtons = createNewDiv(
      `constainer-butons ${listCharacters}`
    ); // Crea el contenedor de botones
    container.appendChild(containerButtons); // Agregalo al contedor total

    // Recorre la sublista de botones
    listCharacters.map((character) => {
      const className = character === "=" ? "button special" : "button"; // Valida si el caracter debe ser especial
      const buttonCharacter = createNewBotton(`${className} ${character}`); // Boton de cada caracter
      const icon = character === "del" ? icons.delete : character;
      buttonCharacter.innerHTML = icon; // Agreaga el valor del boton

      containerButtons.appendChild(buttonCharacter); // Agregalo al contendor de botones
    });
  });

  // ---------- Fin de la renderizacion de los botones
});
