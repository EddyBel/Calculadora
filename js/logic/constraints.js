/** The sea that contains the restrictions for the buttons and how to use them.
 * @example
 * const buttons = document.querySellectorAll(".buttons");
 * const input = document.querySelector(".input");
 *
 * const constraints = new Constraints(buttons, input);
 */
class Constraints {
  /**
   * Constructor of constraints in input
   * @param {NodeListOf<Element>} buttons Node with all botton elements.
   * @param {Element} input Input element.
   */
  constructor(buttons, input) {
    this.buttons = buttons;
    this.input = input;
    this.pointState = false;
    this.character = characters.operators;
    this.numbers = characters.values;
    this.svg = new SVG();
  }

  /**
   * Main function of the restrictions.
   * * It will loop through the entire button node list.
   * * For each bottom element a "click" event will be assigned.
   * * This event executes for each click executes a function that will be in charge of filtering the functions of the buttons according to their content or character.
   * * This function receives the same button element and a callbak function that will solve the problem.
   * * That function is in the display class and is named ( runOperation ).
   * @param {Function} callBack Function that will run the resolution of the problem.
   * @example
   * constraints.Main(() => display.runOperation)
   */
  Main(callBack) {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () =>
        this.eventClickOfButton(button, callBack)
      );
    });
  }

  /**
   * Function that will filter the function of each button according to its character.
   * @param {Element} button Button to evaluate.
   * @param {Function} callBack Callback function that will run the solution of the operation.
   */
  eventClickOfButton(button, callBack) {
    let valueOfButton = button.innerHTML;

    if (valueOfButton === "=") callBack();
    else if (valueOfButton === ".") this.Point();
    else if (valueOfButton === "AC") this.Clean();
    else if (valueOfButton === "%") this.Percentage();
    else if (this.numbers.includes(valueOfButton)) this.Numbers(valueOfButton);
    else if (this.character.includes(valueOfButton))
      this.Characters(valueOfButton);
    else this.Delete();
  }

  /** Function that will print a point only if there is no other in the same combination of numbers */
  Point() {
    if (!this.pointState) {
      this.input.value += ".";
      this.pointState = true;
    }
  }

  /** It will delete everything that contains the input. */
  Clean() {
    this.input.value = "";
    this.pointState = false;
  }

  /** It validates that a percentage can be entered.
   * * If the last character saved is included in the list of numbers you allow it.
   * * Also if the last character is different from a point then you allow to show it.
   */
  Percentage() {
    let finalCharacter = this.getFinalCharacter();

    if (this.numbers.includes(finalCharacter) && finalCharacter != ".")
      this.input.value += " %";
  }

  /** Add the number passed by parameter. */
  Numbers(number) {
    this.input.value += number;
  }

  /** Add the characters if so allowed.
   * * If the last character has a length of 0 and the character is different from the "-" symbol then you don't add anything.
   * * If the last character has a length of 0 and the last character is the symbol "-" then add that symbol (-) without spaces.
   * * If the last character is a space and the character is the symbol "x" or "/" then you don't add the symbol.
   * * If the last character is a space and the character is different from "x" and "/" then add the passed character without spaces.
   * * If the last character is included in the character list and the character is different from "x" and "/" then add the character with a leading space.
   * * By default it adds the character with space at the beginning and at the end.
   */
  Characters(character) {
    let finalCharacter = this.getFinalCharacter();

    if (finalCharacter.length === 0 && character != "-") return;
    else if (finalCharacter === ".") return;
    else if (finalCharacter.length === 0 && character === "-")
      this.input.value += character;
    else if (finalCharacter === " " && (character === "x", character === "/"))
      return;
    else if (finalCharacter === " " && character != "x" && character != "/")
      this.input.value += character;
    else if (
      this.character.includes(finalCharacter) &&
      character != "x" &&
      character != "/"
    )
      this.input.value += ` ${character}`;
    else this.input.value += ` ${character} `;

    this.pointState = false;
  }

  /** Function that will remove the last character of the operation. */
  Delete() {
    let value = this.input.value;
    let newValue = value.substr(0, value.length - 1);

    let finalCharacter = this.getFinalCharacter();
    if (finalCharacter === ".") {
      this.pointState = false;
    }

    this.input.value = newValue;
  }

  /**
   * Get the last character of the operation.
   * @returns {string} final character
   */
  getFinalCharacter() {
    let value = this.input.value;
    return value.substring(value.length - 1);
  }
}
