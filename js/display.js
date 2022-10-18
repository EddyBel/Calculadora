class Display {
  constructor(elementInput, elementOutput) {
    // Elementos del DOM
    this.elementInput = elementInput;
    this.elementOutput = elementOutput;

    // Elementos del calculo
    this.interimResult = 0;
    this.result = 0;
    this.operation = "";
    this.operationByParts = [];
    this.operationParenthesis = "";
    this.operationParenthesisByParts = [];
    this.operationSteps = [];
    this.calculator = new Calculator();

    // Datos provicionales
    this.nextValue = "";
    this.previusValue = "";
  }

  // Resuelve la operacion
  SolveTheOperation(character) {
    this.GetOPeration(); // Obtener la operacion
    this.OperationDecomposition(); // Descompone la operacion

    this.operationByParts.map((item) => {
      this.HierarchyOfOperations();
    });

    this.resetAndUpdateValues(); //Reorganiza los valores
    this.updateDisplayValues(); // Actualiza los valores en el display

    console.log(this.operationSteps);
  }

  // Reorganizar los valores
  resetAndUpdateValues() {
    this.result = this.interimResult; // Obten el resultado definitivo
    this.interimResult = 0;
  }

  //   Obten la entrada de datos
  GetOPeration() {
    this.operation = this.elementInput.value;
    this.operationSteps.push(this.operation);
  }
  //   Descompone la operacion
  OperationDecomposition() {
    this.operationByParts = this.operation.split(" ");
  }
  // Calcula segun la jerarquia de operaciones
  HierarchyOfOperations() {
    if (
      this.operationByParts.includes("(") ||
      this.operationByParts.includes(")")
    ) {
      this.SolveBySteps("(");
    } else if (this.operationByParts.includes("%")) {
      this.SolveBySteps("%");
    } else if (this.operationByParts.includes("x")) {
      this.SolveBySteps("x");
    } else if (this.operationByParts.includes("/")) {
      this.SolveBySteps("/");
    } else if (this.operationByParts.includes("+")) {
      this.SolveBySteps("+");
    } else if (this.operationByParts.includes("-")) {
      this.SolveBySteps("-");
    } else {
      return (this.interimResult = this.operation);
    }
  }

  // Solucion por pasos de la operacion
  SolveBySteps(character) {
    const positionCharacter = this.operationByParts.indexOf(character); // Buscar el caracter pedido
    const positionNext = positionCharacter + 1; // item siguiente
    const positionPrevius = positionCharacter - 1; // item anterior

    // Asigna los valores con los que se trabajaran
    this.nextValue = this.operationByParts[positionNext];
    this.previusValue = this.operationByParts[positionPrevius];

    // Filtra y opera los valores
    this.interimResult = this.filterOperations(character).toString(); // Agregalo a la variable de resultado provicional

    this.operationByParts.splice(positionCharacter, 1, this.interimResult); // Cambia el operador por el resultado

    if (character === "%") {
      this.operationByParts.splice(positionPrevius, 1);
    } else {
      this.operationByParts.splice(positionPrevius, 1);
      this.operationByParts.splice(positionCharacter, 1);
    }

    // Crea la nueva operacion resultante
    this.operation = this.operationByParts.join(" "); // Concatena todos los items del array, con un espacio entre cada item
    this.operationSteps.push(this.operation); //Agrega la operacion a los pasos seguidos
  }

  // Separar las operaciones dentro de los parentesis
  GetTheParenthesesOperation() {
    const positionParenthesesStart = this.operationByParts.indexOf("("); // posicion del primer parentesis
    const positionParenthesesEnd = this.operationByParts.indexOf(")"); // posicion del ultimo parentesis

    const newOperationByParts = [...this.operationByParts]; // Copiar el array

    this.operationParenthesisByParts = newOperationByParts.slice(
      positionParenthesesStart + 1,
      positionParenthesesEnd
    ); // Obtener la operacion dentro del parentesis

    this.operationParenthesis = this.operationParenthesisByParts.join(" "); // Concatena todos los items del array
  }

  // Filtrar operaciones y operarlas
  filterOperations(character) {
    switch (character) {
      case "%":
        return this.calculator.percentage(this.previusValue);
      case "x":
        return this.calculator.multiplication(
          this.previusValue,
          this.nextValue
        );
      case "/":
        return this.calculator.division(this.previusValue, this.nextValue);
      case "+":
        return this.calculator.addition(this.previusValue, this.nextValue);
      case "-":
        return this.calculator.substraction(this.previusValue, this.nextValue);
    }
  }

  // Muestra el resultado en la pantalla
  updateDisplayValues() {
    this.elementInput.value = "";
    this.elementOutput.innerHTML = `<span class="output-operation">${this.result}</span>`;
  }
}
