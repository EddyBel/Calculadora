/** class that contains the form of solving operations
 * @example
 * const operations = new Operations();
 */
class Operations {
  /** Create a new operations room */
  constructor() {
    this.operation = "";
    this.operationByParts = [];
    this.calculator = new Calculator();
    this.result = 0;
    this.interimResult = 0;
    this.historyLocal = [];
    this.operationsHierarchy = ["%", "x", "/", "+", "-"];
  }

  /**
   * Main function that will solve the given operation.
   * * Update the pass operation.
   * * Update the pass operation.
   * * Separate the operation by parts.
   * * Go through the operation in parts and to solve each operation.
   * * Add local history to global history
   * @param {string} operation Operation as string passed by parameter.
   * @returns {number} Final result of the operation.
   * @example
   * const result = operations.MainSolveOperation("2 + 2")
   * // result = 4
   */
  MainSolveOperation(operation) {
    this.updateOperation(operation);
    this.separateTheOperation();

    this.operationByParts.map(() => {
      this.solveByHierarchyOfOperations();
    });

    this.result =
      this.interimResult === 0 ? this.operation : this.interimResult;

    this.historyLocal.push(this.result);
    HistoryGlobal.push(this.historyLocal);

    this.resetValues();
    return this.result;
  }

  /**
   * Operates by hierarchy of operations.
   * * Traverse in order the array with the hierarchy of operations and resolve.
   */
  solveByHierarchyOfOperations() {
    for (let character of this.operationsHierarchy) {
      if (this.operationByParts.includes(character)) {
        this.OperatesBySymbol(character);
        break;
      }
    }
  }

  /**
   * Solve the entire operation according to the symbol passed.
   *  * First declare all the variables to be used in the operation.
   *  * Operates and saves the result of the operation in a variable.
   *  * Replaces the character with the result and removes the surrounding values.
   *  * Return the modified operation array to a space-separated string and store it in the operation.
   *  * Save the operation in the history array.
   * @param {string} character Symbol to solve.
   */
  OperatesBySymbol(character) {
    let positionCharacter = this.operationByParts.indexOf(character);
    let positionNext = positionCharacter + 1;
    let positionPrevius = positionCharacter - 1;
    let valueNext = this.operationByParts[positionNext];
    let valuePrevius = this.operationByParts[positionPrevius];

    this.interimResult = this.getTheResultOfTheSpecificOperation(
      character,
      valuePrevius,
      valueNext
    );

    this.operationByParts.splice(positionCharacter, 1, this.interimResult);

    if (character == "%") {
      this.operationByParts.splice(positionPrevius, 1);
    } else {
      this.operationByParts.splice(positionPrevius, 1);
      this.operationByParts.splice(positionCharacter, 1);
    }

    this.historyLocal.push(this.operation);
    this.updateOperation(this.operationByParts.join(" "));
  }

  /**
   * Do the operation according to the passed character.
   * @param {string} character Operator to evaluate.
   * @param {number} valuePrevius First value.
   * @param {number} valueNext Second value.
   * @returns {number} Operation result
   */
  getTheResultOfTheSpecificOperation(character, valuePrevius, valueNext) {
    switch (character) {
      case "%":
        return this.calculator.percentage(valuePrevius);
      case "x":
        return this.calculator.multiplication(valuePrevius, valueNext);
      case "/":
        return this.calculator.division(valuePrevius, valueNext);
      case "+":
        return this.calculator.addition(valuePrevius, valueNext);
      case "-":
        return this.calculator.substraction(valuePrevius, valueNext);
    }
  }

  /** Separate the feature using space as a reference. */
  separateTheOperation() {
    this.operationByParts = this.operation.split(" ");
  }

  /**
   * Catalizes the value of the operation.
   * @param {string} operation Input operation.
   */
  updateOperation(operation) {
    this.operation = operation;
  }

  /** Reset all values */
  resetValues() {
    this.historyLocal = [];
    this.operationByParts = [];
    this.operation = "";
    this.interimResult = 0;
  }
}

// For the test.
// module.exports = { Operations };
