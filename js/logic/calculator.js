/** Class containing svg icons as strings
 * @example
 * const calculator = new Calculator();
 */
class Calculator {
  /**
   * Add two values.
   * @param {number} a Number one
   * @param {number} b Number two
   * @returns {number} Result
   */
  addition(a, b) {
    return parseFloat(a) + parseFloat(b);
  }

  /**
   * Subtract two values.
   * @param {number} a Number one
   * @param {number} b Number two
   * @returns {number} Result
   */
  substraction(a, b) {
    return parseFloat(a) - parseFloat(b);
  }

  /**
   * Multiplication two values.
   * @param {number} a Number one
   * @param {number} b Number two
   * @returns {number} Result
   */
  multiplication(a, b) {
    return parseFloat(a) * parseFloat(b);
  }

  /**
   * Division two values.
   * @param {number} a Number one
   * @param {number} b Number two
   * @returns {number} Result
   */
  division(a, b) {
    return parseFloat(a) / parseFloat(b);
  }

  /**
   * Percent two values.
   * @param {number} a Number one
   * @param {number} b Number two
   * @returns {number} Result
   */
  percentage(a) {
    return parseFloat(a) / 100;
  }
}

// module.exports = Calculator;
