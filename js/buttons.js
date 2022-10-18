w.addEventListener("DOMContentLoaded", () => {
  // --------- Funcionalidad de botones -----------------

  const buttonsNode = document.querySelectorAll(".button"); // Obtener la lista de elementos button

  // Constantes y variables
  let parenthesisToggleState = false;
  let pointControlState = false;

  const updatePointState = () => (pointControlState = !pointControlState);
  const updatePrenthesisState = () =>
    (parenthesisToggleState = !parenthesisToggleState);

  // Funcion que modifica los valores en la pantalla
  const addCharacterInDisplay = (event) => {
    // Obtener el valor desde el contenido del boton
    const value = event.target.innerHTML;
    // Obtener el elemento input y output
    const input = document.querySelector(".input-operation");
    const output = document.querySelector(".container-output");

    const display = new Display(input, output);

    if (value === "=") {
      display.SolveTheOperation();
    } else if (value === ".") {
      // Si el estado del punto es falso entonces puede poner un punto
      if (!pointControlState) {
        input.value += ".";
        updatePointState(); //Actualiza el estado del punto
      }
    } else if (value === "AC") {
      input.value = ""; // Limpia el input
    } else if (value === "( )") {
      // Si el estado del parentesis es false el parentesis se iniciara
      if (!parenthesisToggleState) {
        input.value += " ( "; // Agrega el parentesis de inicio
      } else {
        input.value += " ) "; // Agrega el parentesis de fin
      }
      updatePrenthesisState(); // actualiza el estado del parentesis
      updatePointState(); // actualiza el estado del punto
    } else if (value === "%") {
      input.value += ` ${value}`;
    } else if (characters.values.includes(value)) {
      input.value += value;
    } else if (characters.operators.includes(value)) {
      input.value += ` ${value} `;
      updatePointState(); // Actualiza el estado del punto
    } else {
      const valueInput = input.value; // Almacena el valor del input
      const newValueInput = valueInput.substr(0, valueInput.length - 1); // Elimina el ultimo caracter agreagado y guardalo como nevo string
      input.value = newValueInput; // Acualiza el input al nuevo valor

      const finalCharacter = valueInput[valueInput.length - 1]; // Guardar el ultimo caracter en una constante
      // Verifica que el ultimo caracter sea un punto
      if (finalCharacter === ".") {
        updatePointState(); //Actualiza el estado del punto
      } else if (finalCharacter === "(" || finalCharacter === ")") {
        updatePrenthesisState(); // Acutaliza el estado del parentesis
      } else {
      }
    }
  };

  //   TODO se le asigna un evento click a cada boton, no es mejor sistema optimizar mas adelante las funciones
  // Recorre los elementos botones
  buttonsNode.forEach((element) => {
    element.addEventListener("click", addCharacterInDisplay); // Agregar evento click a boton
  });

  // --------- Fin de la funcionalidad de botones -------
});
