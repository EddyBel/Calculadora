/** Class containing functions that will handle the dom and operations
 * @example
 * const input = document.querySelector(".input");
 * const output = document.querySelector(".output");
 *
 * const display = new Display(input, output);
 */
class Display {
  /**
   * Constructor which requires the dom elements to use.
   * @param {Element} elementInput Element with input data.
   * @param {Element} elementOutput Element with output data
   */
  constructor(elementInput, elementOutput) {
    this.elementInput = elementInput;
    this.elementOutput = elementOutput;
    this.result = 0;
    this.operations = new Operations();
  }

  /** Main function that will begin to calculate the operation. */
  runOperation() {
    this.result = this.operations.MainSolveOperation(this.elementInput.value);
    this.updateValue();
  }

  /** Update the output with the result and clear the input. */
  updateValue() {
    this.elementInput.value = "";
    this.elementOutput.innerHTML = `<span class="output-operation">${
      this.result === NaN ? "Error" : this.result
    }</span>`;
  }

  /** Clear all parameters. */
  resetValues() {
    this.elementInput.value = "";
    this.elementOutput.innerHTML = "";
  }
}
